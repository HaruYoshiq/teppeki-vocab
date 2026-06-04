"use client";
import { useState, useCallback, useEffect, useRef } from "react";
import { phraseCategories, type PhraseCategory } from "@/data/phrases";

// ── TTS hook ──────────────────────────────────────────────────────────────────
function useTTS() {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setSupported("speechSynthesis" in window);
    return () => { window.speechSynthesis?.cancel(); };
  }, []);

  const speak = useCallback((text: string, rate = 0.85) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = rate;
    utter.pitch = 1;

    // 英語音声を優先
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith("en") && v.name.includes("Google"))
      ?? voices.find(v => v.lang.startsWith("en-US"))
      ?? voices.find(v => v.lang.startsWith("en"));
    if (enVoice) utter.voice = enVoice;

    utter.onstart = () => setSpeaking(true);
    utter.onend   = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    utterRef.current = utter;
    window.speechSynthesis.speak(utter);
  }, []);

  const cancel = useCallback(() => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }, []);

  return { speak, cancel, speaking, supported };
}

// ── Phrase Card ───────────────────────────────────────────────────────────────
type CardProps = {
  phrase: { en: string; ja: string; note?: string };
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  speed: number;
  onSpeedChange: (v: number) => void;
};

function PhraseCard({ phrase, index, total, onPrev, onNext, speed, onSpeedChange }: CardProps) {
  const { speak, cancel, speaking, supported } = useTTS();
  const [showJa, setShowJa] = useState(true);
  const [ripple, setRipple] = useState(false);

  // フレーズが変わったら自動再生
  useEffect(() => {
    speak(phrase.en, speed);
    return () => cancel();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrase.en]);

  function handleSpeak() {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
    if (speaking) { cancel(); return; }
    speak(phrase.en, speed);
  }

  function handleNext() { cancel(); onNext(); }
  function handlePrev() { cancel(); onPrev(); }

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-lg mx-auto">
      {/* Progress */}
      <div className="w-full flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-sky-500 rounded-full transition-all duration-300"
            style={{ width: `${((index + 1) / total) * 100}%` }} />
        </div>
        <span className="text-xs text-zinc-500 flex-shrink-0">{index + 1} / {total}</span>
      </div>

      {/* Main card */}
      <div className="w-full bg-zinc-800 border border-zinc-700 rounded-3xl p-8 flex flex-col items-center gap-6">
        {/* English phrase */}
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold leading-snug tracking-wide">{phrase.en}</p>
          {phrase.note && (
            <span className="inline-block mt-3 text-xs px-2.5 py-1 bg-sky-500/20 text-sky-400 rounded-full">{phrase.note}</span>
          )}
        </div>

        {/* Big speaker button */}
        <button
          onClick={handleSpeak}
          className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all active:scale-95
            ${speaking ? "bg-sky-500 shadow-lg shadow-sky-500/40" : "bg-zinc-700 hover:bg-zinc-600"}`}
        >
          {ripple && (
            <span className="absolute inset-0 rounded-full bg-sky-400/30 animate-ping" />
          )}
          {speaking ? (
            // Stop icon
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <rect x="6" y="6" width="12" height="12" rx="2"/>
            </svg>
          ) : (
            // Speaker icon
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
          )}
        </button>

        {/* Japanese meaning */}
        <div className="w-full">
          <button
            onClick={() => setShowJa(v => !v)}
            className="w-full flex items-center justify-between px-4 py-3 bg-zinc-900 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition-colors"
          >
            <span className={`text-base font-medium transition-all ${showJa ? "text-zinc-200" : "blur-sm text-zinc-400 select-none"}`}>
              {phrase.ja}
            </span>
            <span className="text-xs text-zinc-500 flex-shrink-0 ml-3">{showJa ? "隠す" : "表示"}</span>
          </button>
        </div>

        {/* Speed control */}
        <div className="flex items-center gap-3 w-full">
          <span className="text-xs text-zinc-500 flex-shrink-0">速度</span>
          <input
            type="range" min="0.5" max="1.2" step="0.05"
            value={speed}
            onChange={e => onSpeedChange(parseFloat(e.target.value))}
            className="flex-1 accent-sky-500"
          />
          <span className="text-xs text-zinc-400 w-8 text-right">{speed.toFixed(2)}x</span>
        </div>

        {!supported && (
          <p className="text-xs text-zinc-500">⚠️ このブラウザは音声読み上げに対応していません</p>
        )}
      </div>

      {/* Navigation */}
      <div className="flex gap-4 w-full">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="flex-1 py-4 rounded-2xl bg-zinc-800 border border-zinc-700 font-semibold text-sm disabled:opacity-30 hover:bg-zinc-700 transition-colors active:scale-95"
        >
          ← 前へ
        </button>
        <button
          onClick={() => { speak(phrase.en, speed); }}
          className="py-4 px-6 rounded-2xl bg-sky-500/20 border border-sky-500/40 text-sky-400 font-semibold text-sm hover:bg-sky-500/30 transition-colors active:scale-95"
        >
          🔁 もう一度
        </button>
        <button
          onClick={handleNext}
          disabled={index === total - 1}
          className="flex-1 py-4 rounded-2xl bg-zinc-800 border border-zinc-700 font-semibold text-sm disabled:opacity-30 hover:bg-zinc-700 transition-colors active:scale-95"
        >
          次へ →
        </button>
      </div>
    </div>
  );
}

// ── Main SpeakingApp ──────────────────────────────────────────────────────────
export default function SpeakingApp() {
  const [selectedCat, setSelectedCat] = useState<PhraseCategory | null>(null);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [speed, setSpeed] = useState(0.85);

  function selectCategory(cat: PhraseCategory) {
    setSelectedCat(cat);
    setPhraseIdx(0);
  }

  // Category select screen
  if (!selectedCat) {
    return (
      <div className="max-w-lg mx-auto flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-bold mb-1">英会話フレーズ</h2>
          <p className="text-sm text-zinc-400">カテゴリを選んでリピート練習しよう</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {phraseCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => selectCategory(cat)}
              className="bg-zinc-800 border border-zinc-700 hover:border-sky-500/50 rounded-2xl p-4 text-left transition-colors group"
            >
              <div className="text-3xl mb-2">{cat.emoji}</div>
              <div className="font-semibold text-sm group-hover:text-sky-400 transition-colors">{cat.title}</div>
              <div className="text-xs text-zinc-500 mt-1">{cat.phrases.length}フレーズ</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const phrases = selectedCat.phrases;
  const phrase = phrases[phraseIdx];

  return (
    <div className="max-w-lg mx-auto flex flex-col gap-4">
      {/* Back + category info */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => { setSelectedCat(null); setPhraseIdx(0); }}
          className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1"
        >
          ← 一覧
        </button>
        <div className="flex items-center gap-2">
          <span className="text-lg">{selectedCat.emoji}</span>
          <span className="text-sm font-semibold">{selectedCat.title}</span>
        </div>
      </div>

      {/* How-to hint */}
      <div className="bg-sky-500/10 border border-sky-500/20 rounded-xl px-4 py-2.5 text-xs text-sky-300 leading-5">
        🎤 音声を聞いたら、同じフレーズを声に出してリピートしよう！
      </div>

      <PhraseCard
        phrase={phrase}
        index={phraseIdx}
        total={phrases.length}
        onPrev={() => setPhraseIdx(i => Math.max(0, i - 1))}
        onNext={() => setPhraseIdx(i => Math.min(phrases.length - 1, i + 1))}
        speed={speed}
        onSpeedChange={setSpeed}
      />
    </div>
  );
}
