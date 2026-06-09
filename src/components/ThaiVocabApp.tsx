"use client";
import { useState, useMemo } from "react";
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

export default function ThaiVocabApp() {
  const [mode, setMode] = useState<Mode>("words");
  const [wordIdx, setWordIdx] = useState(0);
  const [phraseCategory, setPhraseCat] = useState(thaiPhraseCategories[0]);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [showMeaning, setShowMeaning] = useState(true);

  const { words, dayNumber, date } = useMemo(getTodaysWords, []);

  // ── Word card ──
  if (mode === "words") {
    const w = words[wordIdx] || words[0];

    return (
      <div className="flex flex-col min-h-screen bg-zinc-950">
        {/* Header */}
        <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 sticky top-16 z-40">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold">タイ語単語 - Day {dayNumber}</h2>
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
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            {/* Card */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-3xl p-8 text-center mb-6">
              <div className="text-sm text-orange-400 uppercase tracking-widest mb-3">
                {w.category}
              </div>
              <div className="text-5xl font-bold mb-4 leading-snug" lang="th">
                {w.thai}
              </div>
              <div className="text-sm text-zinc-400 mb-6">{w.phonetic}</div>
              <button
                onClick={() => setShowMeaning(!showMeaning)}
                className="text-lg font-semibold px-6 py-3 bg-zinc-900 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition-colors w-full"
              >
                {showMeaning ? w.meaning : "タップして意味を見る"}
              </button>
              {showMeaning && (
                <div className="mt-4 text-sm text-zinc-400">
                  <strong>例文:</strong> {w.example}
                  <div className="mt-1 text-xs">{w.exampleJa}</div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => setWordIdx(Math.max(0, wordIdx - 1))}
                disabled={wordIdx === 0}
                className="flex-1 py-3 rounded-xl bg-zinc-800 border border-zinc-700 font-semibold disabled:opacity-30"
              >
                ← 前へ
              </button>
              <button
                onClick={() => setWordIdx(Math.min(words.length - 1, wordIdx + 1))}
                disabled={wordIdx === words.length - 1}
                className="flex-1 py-3 rounded-xl bg-zinc-800 border border-zinc-700 font-semibold disabled:opacity-30"
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
      <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 sticky top-16 z-40">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{phraseCategory.emoji}</span>
            <h2 className="text-lg font-bold">{phraseCategory.title}</h2>
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
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-3xl p-8 text-center mb-6">
            <div className="text-4xl font-bold mb-6 leading-snug" lang="th">
              {phrase.thai}
            </div>
            <div className="text-lg font-semibold mb-3">{phrase.ja}</div>
            {phrase.note && (
              <div className="text-xs text-zinc-500 italic">
                💡 {phrase.note}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setPhraseIdx(Math.max(0, phraseIdx - 1))}
              disabled={phraseIdx === 0}
              className="flex-1 py-3 rounded-xl bg-zinc-800 border border-zinc-700 font-semibold disabled:opacity-30"
            >
              ← 前へ
            </button>
            <button
              onClick={() => setPhraseIdx(Math.min(phrases.length - 1, phraseIdx + 1))}
              disabled={phraseIdx === phrases.length - 1}
              className="flex-1 py-3 rounded-xl bg-zinc-800 border border-zinc-700 font-semibold disabled:opacity-30"
            >
              次へ →
            </button>
          </div>

          {/* Category selector */}
          <div className="flex flex-col gap-2">
            <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">カテゴリ</div>
            <div className="grid grid-cols-2 gap-2">
              {thaiPhraseCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setPhraseCat(cat); setPhraseIdx(0); }}
                  className={`py-2 px-2 rounded-lg text-sm font-semibold transition-colors ${
                    cat.id === phraseCategory.id
                      ? "bg-orange-500 text-white"
                      : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
                  }`}
                >
                  {cat.emoji} {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Mode toggle */}
          <div className="flex gap-2 mt-4">
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
