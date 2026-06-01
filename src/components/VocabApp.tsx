"use client";
import { useState } from "react";
import { groups } from "@/data/words";
import { useProgress } from "@/hooks/useProgress";
import Flashcard from "./Flashcard";
import WordList from "./WordList";

type Mode = "study" | "list";

export default function VocabApp() {
  const [mode, setMode] = useState<Mode>("study");
  const [groupId, setGroupId] = useState(groups[0].id);
  const { learned, isLearned, mark, reset, ready } = useProgress();

  const totalWords = groups.reduce((s, g) => s + g.words.length, 0);
  const learnedCount = Object.values(learned).filter(Boolean).length;
  const pct = totalWords ? Math.round((learnedCount / totalWords) * 100) : 0;

  const currentGroup = groups.find(g => g.id === groupId)!;

  if (!ready) return null;

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-900 border-b border-zinc-800 px-4 h-14 flex items-center justify-between">
        <div className="text-lg font-bold">
          鉄<span className="text-indigo-400">壁</span>英単語
        </div>
        <div className="flex gap-1 bg-zinc-800 p-1 rounded-xl">
          {(["study", "list"] as Mode[]).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                mode === m ? "bg-indigo-500 text-white" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {m === "study" ? "学習" : "一覧"}
            </button>
          ))}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:flex flex-col w-52 border-r border-zinc-800 p-3 gap-3 overflow-y-auto">
          <div className="text-xs uppercase tracking-widest text-zinc-500 px-1">語根グループ</div>
          <div className="flex flex-col gap-1">
            {groups.map(g => {
              const done = g.words.filter((_, i) => isLearned(g.id, i)).length;
              return (
                <button
                  key={g.id}
                  onClick={() => setGroupId(g.id)}
                  className={`flex justify-between items-center px-3 py-2 rounded-lg text-sm text-left transition-colors border ${
                    groupId === g.id
                      ? "bg-zinc-800 border-indigo-500 text-indigo-400"
                      : "border-transparent hover:bg-zinc-800 text-zinc-300"
                  }`}
                >
                  <span>{g.name}</span>
                  <span className="text-xs bg-zinc-700 text-zinc-400 px-2 py-0.5 rounded-full">{done}/{g.words.length}</span>
                </button>
              );
            })}
          </div>

          {/* Progress */}
          <div className="mt-auto bg-zinc-800 rounded-xl p-3">
            <div className="flex justify-between text-xs text-zinc-400 mb-2">
              <span>習得済み</span>
              <span>{learnedCount} / {totalWords}</span>
            </div>
            <div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 overflow-y-auto p-4 pb-32 md:pb-6">
          {mode === "study" ? (
            <Flashcard
              group={currentGroup}
              isLearned={isLearned}
              mark={mark}
              reset={reset}
            />
          ) : (
            <WordList group={currentGroup} isLearned={isLearned} />
          )}
        </main>
      </div>

      {/* Bottom nav (mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 pb-safe">
        <div className="flex overflow-x-auto gap-2 px-3 py-2 scrollbar-none">
          {groups.map(g => (
            <button
              key={g.id}
              onClick={() => setGroupId(g.id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors whitespace-nowrap ${
                groupId === g.id
                  ? "bg-indigo-500 text-white border-indigo-500"
                  : "border-zinc-700 text-zinc-400"
              }`}
            >
              {g.name}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
