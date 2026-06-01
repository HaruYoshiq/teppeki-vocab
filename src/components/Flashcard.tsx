"use client";
import { useState } from "react";
import type { Group } from "@/data/words";

type Props = {
  group: Group;
  isLearned: (gid: string, idx: number) => boolean;
  mark: (gid: string, idx: number, v: boolean) => void;
  reset: (gid: string, count: number) => void;
};

export default function Flashcard({ group, isLearned, mark, reset }: Props) {
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const queue = group.words
    .map((w, i) => ({ w, i }))
    .filter(({ i }) => !isLearned(group.id, i));

  if (queue.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
        <div className="text-6xl">🎉</div>
        <h2 className="text-2xl font-bold">このグループ完了！</h2>
        <p className="text-zinc-400 text-sm">「{group.name}」の単語をすべて習得しました。</p>
        <button
          onClick={() => { reset(group.id, group.words.length); setCardIndex(0); setFlipped(false); }}
          className="mt-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-xl transition-colors"
        >
          もう一度挑戦する
        </button>
      </div>
    );
  }

  const safeIndex = cardIndex % queue.length;
  const { w, i } = queue[safeIndex];

  function flip() { setFlipped(f => !f); }

  function judge(level: number) {
    if (level === 2) {
      mark(group.id, i, true);
      setCardIndex(c => Math.min(c, queue.length - 2));
    } else {
      setCardIndex(c => (c + 1) % queue.length);
    }
    setFlipped(false);
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-lg mx-auto">
      <div className="w-full">
        <h2 className="text-lg font-bold">{group.name}</h2>
        <p className="text-xs text-zinc-400 mt-0.5">{group.desc}</p>
      </div>

      <div className="text-xs text-zinc-500 self-end">
        {safeIndex + 1} / {queue.length}
      </div>

      {/* Card */}
      <div
        onClick={flip}
        className="w-full min-h-[260px] cursor-pointer select-none"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative w-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            minHeight: "260px",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 bg-zinc-800 border border-zinc-700 rounded-2xl p-7 flex flex-col justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="text-xs uppercase tracking-widest text-indigo-400 mb-2">{group.name}</div>
            <div className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">{w.word}</div>
            <div className="text-sm text-zinc-400 mb-4">{w.phonetic}</div>
            <div className="mt-auto flex items-center gap-1.5 text-xs text-zinc-500">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 15l5 5 5-5M7 9l5-5 5 5"/>
              </svg>
              タップして答えを見る
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 bg-zinc-800 border border-zinc-700 rounded-2xl p-7 flex flex-col justify-center"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <span className="inline-block text-xs px-3 py-1 bg-indigo-500 text-white font-semibold rounded-full mb-3 w-fit">
              {w.pos}
            </span>
            <div className="text-2xl font-bold mb-4 leading-snug">{w.meaning}</div>
            <div className="bg-zinc-900 border-l-4 border-indigo-500 px-4 py-3 rounded-r-xl text-sm leading-7">
              <div>{w.example}</div>
              <div className="text-zinc-400 text-xs mt-1">{w.exampleJa}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Judgment buttons */}
      {flipped && (
        <div className="flex gap-3 w-full">
          <button onClick={() => judge(0)} className="flex-1 py-4 rounded-xl bg-red-950 text-red-400 font-semibold text-sm hover:brightness-125 transition active:scale-95">
            ❌ 知らない
          </button>
          <button onClick={() => judge(1)} className="flex-1 py-4 rounded-xl bg-yellow-950 text-yellow-400 font-semibold text-sm hover:brightness-125 transition active:scale-95">
            △ うろ覚え
          </button>
          <button onClick={() => judge(2)} className="flex-1 py-4 rounded-xl bg-green-950 text-green-400 font-semibold text-sm hover:brightness-125 transition active:scale-95">
            ✓ 覚えた！
          </button>
        </div>
      )}
    </div>
  );
}
