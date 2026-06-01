"use client";
import { useState, useMemo } from "react";
import { toeicWords, type ToeicWord } from "@/data/toeicWords";

const WORDS_PER_DAY = 30;
// 2025-01-01を起点とする
const EPOCH = new Date("2025-01-01").getTime();

function getDayIndex(): number {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.floor((today - EPOCH) / 86400000);
}

function getTodaysWords(): { words: ToeicWord[]; dayNumber: number; date: string } {
  const dayIndex = getDayIndex();
  const totalDays = Math.ceil(toeicWords.length / WORDS_PER_DAY);
  const cycleDayIndex = dayIndex % totalDays;
  const start = cycleDayIndex * WORDS_PER_DAY;
  const words = toeicWords.slice(start, start + WORDS_PER_DAY);
  const today = new Date();
  const date = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
  return { words, dayNumber: dayIndex + 1, date };
}

const DAILY_LEARNED_KEY = "teppeki_daily_learned";

function loadDailyLearned(): Record<string, Set<number>> {
  try {
    const raw = localStorage.getItem(DAILY_LEARNED_KEY);
    if (!raw) return {};
    const obj = JSON.parse(raw) as Record<string, number[]>;
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, new Set(v)]));
  } catch { return {}; }
}

function saveDailyLearned(data: Record<string, Set<number>>) {
  const obj = Object.fromEntries(Object.entries(data).map(([k, v]) => [k, [...v]]));
  localStorage.setItem(DAILY_LEARNED_KEY, JSON.stringify(obj));
}

type Mode = "list" | "flashcard";

export default function DailyWords() {
  const { words, dayNumber, date } = useMemo(getTodaysWords, []);
  const todayKey = `day_${getDayIndex()}`;

  const [learnedSet, setLearnedSet] = useState<Set<number>>(() => {
    const all = loadDailyLearned();
    return all[todayKey] ?? new Set();
  });
  const [mode, setMode] = useState<Mode>("list");
  const [cardIdx, setCardIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("すべて");

  function toggleLearned(idx: number) {
    setLearnedSet(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      const all = loadDailyLearned();
      all[todayKey] = next;
      saveDailyLearned(all);
      return next;
    });
  }

  const categories = ["すべて", ...Array.from(new Set(words.map(w => w.category)))];
  const filtered = selectedCategory === "すべて" ? words : words.filter(w => w.category === selectedCategory);
  const learnedCount = learnedSet.size;
  const pct = Math.round((learnedCount / words.length) * 100);

  // ── フラッシュカードモード ──
  if (mode === "flashcard") {
    const queue = filtered.map((w, i) => ({ w, i: words.indexOf(w) })).filter(({ i }) => !learnedSet.has(i));
    const done = queue.length === 0;

    function flip() { setFlipped(f => !f); }
    function judge(level: number) {
      if (level === 2) {
        toggleLearned(queue[cardIdx % queue.length].i);
      } else {
        setCardIdx(c => (c + 1) % Math.max(queue.length, 1));
      }
      setFlipped(false);
    }

    return (
      <div className="flex flex-col gap-4 max-w-lg mx-auto">
        <div className="flex items-center justify-between">
          <button onClick={() => { setMode("list"); setFlipped(false); setCardIdx(0); }} className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1">
            ← 一覧に戻る
          </button>
          <span className="text-xs text-zinc-500">{learnedCount} / {words.length} 習得</span>
        </div>

        {done ? (
          <div className="text-center py-16 flex flex-col items-center gap-4">
            <div className="text-6xl">🎉</div>
            <h2 className="text-2xl font-bold">今日の単語完了！</h2>
            <p className="text-zinc-400 text-sm">30語すべて習得しました。また明日！</p>
            <button onClick={() => { setLearnedSet(new Set()); const all = loadDailyLearned(); delete all[todayKey]; saveDailyLearned(all); setCardIdx(0); }} className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl">
              もう一度
            </button>
          </div>
        ) : (
          <>
            <div className="text-xs text-zinc-500 self-end">{(cardIdx % queue.length) + 1} / {queue.length}</div>

            <div onClick={flip} className="w-full min-h-[260px] cursor-pointer select-none" style={{ perspective: "1000px" }}>
              <div className="relative w-full transition-transform duration-500" style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)", minHeight: "260px" }}>
                <div className="absolute inset-0 bg-zinc-800 border border-zinc-700 rounded-2xl p-7 flex flex-col justify-center" style={{ backfaceVisibility: "hidden" }}>
                  <div className="text-xs uppercase tracking-widest text-amber-400 mb-2">{queue[cardIdx % queue.length].w.category}</div>
                  <div className="text-4xl font-bold tracking-tight mb-2">{queue[cardIdx % queue.length].w.word}</div>
                  <div className="text-sm text-zinc-400 mb-3">{queue[cardIdx % queue.length].w.phonetic}</div>
                  <div className="mt-auto text-xs text-zinc-500 flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 15l5 5 5-5M7 9l5-5 5 5"/></svg>
                    タップして答えを見る
                  </div>
                </div>
                <div className="absolute inset-0 bg-zinc-800 border border-zinc-700 rounded-2xl p-7 flex flex-col justify-center" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                  <span className="inline-block text-xs px-3 py-1 bg-amber-500 text-white font-semibold rounded-full mb-3 w-fit">{queue[cardIdx % queue.length].w.pos}</span>
                  <div className="text-2xl font-bold mb-4 leading-snug">{queue[cardIdx % queue.length].w.meaning}</div>
                  <div className="bg-zinc-900 border-l-4 border-amber-500 px-4 py-3 rounded-r-xl text-sm leading-7">
                    <div>{queue[cardIdx % queue.length].w.example}</div>
                    <div className="text-zinc-400 text-xs mt-1">{queue[cardIdx % queue.length].w.exampleJa}</div>
                  </div>
                </div>
              </div>
            </div>

            {flipped && (
              <div className="flex gap-3">
                <button onClick={() => judge(0)} className="flex-1 py-4 rounded-xl bg-red-950 text-red-400 font-semibold text-sm hover:brightness-125 transition active:scale-95">❌ 知らない</button>
                <button onClick={() => judge(1)} className="flex-1 py-4 rounded-xl bg-yellow-950 text-yellow-400 font-semibold text-sm hover:brightness-125 transition active:scale-95">△ うろ覚え</button>
                <button onClick={() => judge(2)} className="flex-1 py-4 rounded-xl bg-green-950 text-green-400 font-semibold text-sm hover:brightness-125 transition active:scale-95">✓ 覚えた！</button>
              </div>
            )}
          </>
        )}
      </div>
    );
  }

  // ── 一覧モード ──
  return (
    <div className="flex flex-col gap-4 max-w-lg mx-auto">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/10 border border-amber-500/30 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-xs text-amber-400 font-semibold uppercase tracking-widest mb-1">TODAY'S WORDS</div>
            <div className="text-lg font-bold">{date}（Day {dayNumber}）</div>
            <div className="text-xs text-zinc-400 mt-0.5">TOEIC 800点レベル · {words.length}語</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-amber-400">{pct}%</div>
            <div className="text-xs text-zinc-400">{learnedCount}/{words.length}習得</div>
          </div>
        </div>
        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* 操作ボタン */}
      <div className="flex gap-2">
        <button onClick={() => { setMode("flashcard"); setCardIdx(0); setFlipped(false); }} className="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl text-sm transition-colors">
          カードで学習 →
        </button>
        <div className="flex gap-1 bg-zinc-800 p-1 rounded-xl">
          {categories.map(c => (
            <button key={c} onClick={() => setSelectedCategory(c)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${selectedCategory === c ? "bg-amber-500 text-white" : "text-zinc-400 hover:text-zinc-200"}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* 単語一覧 */}
      <div className="flex flex-col gap-3">
        {filtered.map((w, fi) => {
          const origIdx = words.indexOf(w);
          const done = learnedSet.has(origIdx);
          return (
            <div key={w.word + fi} className={`bg-zinc-800 border rounded-2xl p-4 transition-colors ${done ? "border-green-600/40" : "border-zinc-700 hover:border-amber-500/40"}`}>
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-xl font-bold">{w.word}</span>
                  <span className="text-xs text-zinc-400">{w.phonetic}</span>
                  <span className="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded-full font-semibold">{w.pos}</span>
                </div>
                <button onClick={() => toggleLearned(origIdx)}
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${done ? "bg-green-500 text-white" : "bg-zinc-700 text-zinc-400 hover:bg-zinc-600"}`}>
                  {done ? "✓" : "○"}
                </button>
              </div>
              <div className="text-sm font-medium mb-2 text-zinc-200">{w.meaning}</div>
              <div className="bg-zinc-900 border-l-3 border-amber-500 pl-3 py-2 rounded-r-lg text-xs leading-6 border-l-4">
                <div>{w.example}</div>
                <div className="text-zinc-400 mt-0.5">{w.exampleJa}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
