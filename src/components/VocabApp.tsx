"use client";
import { useState } from "react";
import { groups } from "@/data/words";
import { useProgress } from "@/hooks/useProgress";
import Flashcard from "./Flashcard";
import WordList from "./WordList";
import GrammarApp from "./GrammarApp";
import VocabQuiz from "./VocabQuiz";
import DailyWords from "./DailyWords";

type Tab = "daily" | "study" | "list" | "quiz" | "grammar";

export default function VocabApp() {
  const [tab, setTab] = useState<Tab>("daily");
  const [groupId, setGroupId] = useState(groups[0].id);
  const { learned, isLearned, mark, reset, ready } = useProgress();

  const totalWords = groups.reduce((s, g) => s + g.words.length, 0);
  const learnedCount = Object.values(learned).filter(Boolean).length;
  const pct = totalWords ? Math.round((learnedCount / totalWords) * 100) : 0;

  const currentGroup = groups.find(g => g.id === groupId)!;

  if (!ready) return null;

  const tabs: { key: Tab; label: string }[] = [
    { key: "daily",   label: "今日の単語" },
    { key: "study",   label: "語根学習" },
    { key: "list",    label: "一覧" },
    { key: "quiz",    label: "単語Quiz" },
    { key: "grammar", label: "文法" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-900 border-b border-zinc-800 px-4 h-14 flex items-center justify-between">
        <div className="text-lg font-bold">
          鉄<span className="text-indigo-400">壁</span>英単語
        </div>
        <div className="flex gap-1 bg-zinc-800 p-1 rounded-xl">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                tab === key
                  ? key === "grammar"
                    ? "bg-emerald-500 text-white"
                    : key === "quiz"
                    ? "bg-violet-500 text-white"
                    : key === "daily"
                    ? "bg-amber-500 text-white"
                    : "bg-indigo-500 text-white"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (desktop) — only for vocab tabs */}
        {tab !== "grammar" && tab !== "quiz" && tab !== "daily" && (
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
        )}

        {/* Main */}
        <main className="flex-1 overflow-y-auto p-4 pb-32 md:pb-6">
          {tab === "daily" && (
            <DailyWords />
          )}
          {tab === "study" && (
            <Flashcard group={currentGroup} isLearned={isLearned} mark={mark} reset={reset} />
          )}
          {tab === "list" && (
            <WordList group={currentGroup} isLearned={isLearned} />
          )}
          {tab === "quiz" && (
            <VocabQuiz isLearned={isLearned} />
          )}
          {tab === "grammar" && (
            <GrammarApp />
          )}
        </main>
      </div>

      {/* Bottom nav (mobile) — only for vocab tabs */}
      {tab !== "grammar" && tab !== "quiz" && tab !== "daily" && (
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
      )}
    </div>
  );
}
