"use client";
import { useState, useMemo, useCallback } from "react";
import { thaiWords, type ThaiWord } from "@/data/thaiWords";
import { thaiPhraseCategories } from "@/data/thaiPhrases";

type Mode = "words" | "phrases";

const DAILY_WORDS = 30;
const EPOCH = new Date("2025-01-01").getTime();

function getDayIndex(): number {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.floor((today - EPOCH) / 86400000);
}

function getTodaysWords() {
  const dayIndex = getDayIndex();
  const totalDays = Math.ceil(thaiWords.length / DAILY_WORDS);
  const cycleDayIndex = dayIndex % totalDays;
  const start = cycleDayIndex * DAILY_WORDS;
  const words = thaiWords.slice(start, start + DAILY_WORDS);
  const today = new Date();
  const date = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
  return { words, dayNumber: dayIndex + 1, date };
}

function playThaiAudio(text: string) {
  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "th-TH";
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  }
}

export default function ThaiVocabApp() {
  const [mode, setMode] = useState<Mode>("words");
  const [wordIdx, setWordIdx] = useState(0);
  const [phraseCategory, setPhraseCat] = useState(thaiPhraseCategories[0]);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [showMeaning, setShowMeaning] = useState(true);
  const [playing, setPlaying] = useState(false);

  const { words, dayNumber, date } = useMemo(getTodaysWords, []);

  const handleSpeak = useCallback((text: string) => {
    setPlaying(true);
    playThaiAudio(text);
    setTimeout(() => setPlaying(false), 2000);
  }, []);

  // ── Word card ──
  if (mode === "words") {
    const w = words[wordIdx] || words[0];

    return (
      <div className="flex flex-col min-h-screen bg-zinc-950">
        {/* Header */}
        <div className="bg-zinc-900 border-b border-zinc-800 px-3 py-2 sm:px-4 sm:py-3 sticky top-16 z-40">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h2 className="text-base sm:text-lg font-bold">タイ語単語 - Day {dayNumber}</h2>
              <span className="text-xs text-zinc-500">{date}</span>
            </div>
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 rounded-full transition-all"
                style={{ width: `${((wordIdx + 1) / words.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 flex items-center justify-center p-3 sm:p-4">
          <div className="w-full max-w-md">
            {/* Card */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-center mb-4 sm:mb-6">
              <div className="text-xs sm:text-sm text-orange-400 uppercase tracking-widest mb-2 sm:mb-3">
                {w.category}
              </div>
              <div className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 leading-snug break-words" lang="th">
                {w.thai}
              </div>

              {/* Phonetic */}
              <div className="text-sm sm:text-base text-zinc-400 mb-2 font-mono">
                {w.phonetic}
              </div>

              {/* IPA if available */}
              {w.ipa && (
                <div className="text-xs sm:text-sm text-zinc-500 mb-4 font-sans italic">
                  /{w.ipa}/
                </div>
              )}

              {/* Speak button */}
              <button
                onClick={() => handleSpeak(w.thai)}
                disabled={playing}
                className="mb-3 sm:mb-4 w-full px-4 py-2 sm:py-3 bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white rounded-lg sm:rounded-xl font-semibold text-sm transition-colors"
              >
                {playing ? "🔊 再生中..." : "🔊 発音を聞く"}
              </button>

              <button
                onClick={() => setShowMeaning(!showMeaning)}
                className="text-base sm:text-lg font-semibold px-4 sm:px-6 py-2 sm:py-3 bg-zinc-900 rounded-xl sm:rounded-2xl border border-zinc-700 hover:border-zinc-500 transition-colors w-full"
              >
                {showMeaning ? w.meaning : "タップして意味を見る"}
              </button>
              {showMeaning && (
                <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-400 text-left">
                  <strong>例文:</strong> <span lang="th">{w.example}</span>
                  <div className="mt-1 text-xs">{w.exampleJa}</div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
              <button
                onClick={() => setWordIdx(Math.max(0, wordIdx - 1))}
                disabled={wordIdx === 0}
                className="flex-1 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-zinc-800 border border-zinc-700 font-semibold text-sm disabled:opacity-30"
              >
                ← 前へ
              </button>
              <button
                onClick={() => setWordIdx(Math.min(words.length - 1, wordIdx + 1))}
                disabled={wordIdx === words.length - 1}
                className="flex-1 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-zinc-800 border border-zinc-700 font-semibold text-sm disabled:opacity-30"
              >
                次へ →
              </button>
            </div>

            {/* Mode toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setMode("words")}
                className="flex-1 py-2 rounded-lg bg-orange-500 text-white font-semibold text-sm"
              >
                単語
              </button>
              <button
                onClick={() => { setMode("phrases"); setPhraseIdx(0); }}
                className="flex-1 py-2 rounded-lg bg-zinc-700 text-zinc-300 font-semibold text-sm hover:bg-zinc-600"
              >
                フレーズ
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Phrase learning ──
  const phrases = phraseCategory.phrases;
  const phrase = phrases[phraseIdx] || phrases[0];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      {/* Header */}
      <div className="bg-zinc-900 border-b border-zinc-800 px-3 py-2 sm:px-4 sm:py-3 sticky top-16 z-40">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl sm:text-2xl">{phraseCategory.emoji}</span>
            <h2 className="text-base sm:text-lg font-bold break-words">{phraseCategory.title}</h2>
          </div>
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full transition-all"
              style={{ width: `${((phraseIdx + 1) / phrases.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex items-center justify-center p-3 sm:p-4">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-center mb-4 sm:mb-6">
            <div className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-6 leading-snug break-words" lang="th">
              {phrase.thai}
            </div>

            {/* Romanization */}
            {phrase.romanized && (
              <div className="text-xs sm:text-sm text-zinc-400 font-mono mb-2">
                {phrase.romanized}
              </div>
            )}

            <div className="text-base sm:text-lg font-semibold mb-3">{phrase.ja}</div>

            {/* Speak button */}
            <button
              onClick={() => handleSpeak(phrase.thai)}
              disabled={playing}
              className="mb-4 w-full px-4 py-2 sm:py-3 bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white rounded-lg sm:rounded-xl font-semibold text-sm transition-colors"
            >
              {playing ? "🔊 再生中..." : "🔊 発音を聞く"}
            </button>

            {phrase.note && (
              <div className="text-xs text-zinc-500 italic">
                💡 {phrase.note}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
            <button
              onClick={() => setPhraseIdx(Math.max(0, phraseIdx - 1))}
              disabled={phraseIdx === 0}
              className="flex-1 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-zinc-800 border border-zinc-700 font-semibold text-sm disabled:opacity-30"
            >
              ← 前へ
            </button>
            <button
              onClick={() => setPhraseIdx(Math.min(phrases.length - 1, phraseIdx + 1))}
              disabled={phraseIdx === phrases.length - 1}
              className="flex-1 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-zinc-800 border border-zinc-700 font-semibold text-sm disabled:opacity-30"
            >
              次へ →
            </button>
          </div>

          {/* Category selector */}
          <div className="flex flex-col gap-2">
            <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">カテゴリ</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2">
              {thaiPhraseCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setPhraseCat(cat); setPhraseIdx(0); }}
                  className={`py-1 sm:py-2 px-1 sm:px-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                    cat.id === phraseCategory.id
                      ? "bg-orange-500 text-white"
                      : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
                  }`}
                >
                  <span className="hidden sm:inline">{cat.emoji} </span>
                  <span className="sm:hidden">{cat.emoji}</span>
                  <span className="hidden sm:inline">{cat.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mode toggle */}
          <div className="flex gap-2 mt-3 sm:mt-4">
            <button
              onClick={() => { setWordIdx(0); setMode("words"); }}
              className="flex-1 py-2 rounded-lg bg-zinc-700 text-zinc-300 font-semibold text-sm hover:bg-zinc-600"
            >
              単語
            </button>
            <button
              onClick={() => setMode("phrases")}
              className="flex-1 py-2 rounded-lg bg-orange-500 text-white font-semibold text-sm"
            >
              フレーズ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
