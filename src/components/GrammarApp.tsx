"use client";
import { useState } from "react";
import { grammarUnits } from "@/data/grammar";
import GrammarLesson from "./GrammarLesson";
import GrammarQuiz from "./GrammarQuiz";

type Phase = "select" | "lesson" | "quiz" | "result";

export default function GrammarApp() {
  const [unitId, setUnitId] = useState(grammarUnits[0].id);
  const [phase, setPhase] = useState<Phase>("select");
  const [score, setScore] = useState(0);

  const unit = grammarUnits.find(u => u.id === unitId)!;

  function selectUnit(id: string) {
    setUnitId(id);
    setPhase("lesson");
  }

  function handleFinish(s: number) {
    setScore(s);
    setPhase("result");
  }

  // ── Unit select screen ──
  if (phase === "select") {
    const categories = [...new Set(grammarUnits.map(u => u.category))];
    return (
      <div className="max-w-lg mx-auto flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-bold mb-1">文法を学ぶ</h2>
          <p className="text-sm text-zinc-400">単元を選んで解説 → 問題演習</p>
        </div>
        {categories.map(cat => (
          <div key={cat}>
            <div className="text-xs uppercase tracking-widest text-zinc-500 mb-2 px-1">{cat}</div>
            <div className="flex flex-col gap-2">
              {grammarUnits.filter(u => u.category === cat).map(u => (
                <button
                  key={u.id}
                  onClick={() => selectUnit(u.id)}
                  className="bg-zinc-800 border border-zinc-700 hover:border-emerald-500/50 rounded-2xl p-4 text-left transition-colors group"
                >
                  <div className="font-semibold group-hover:text-emerald-400 transition-colors">{u.title}</div>
                  <div className="text-xs text-zinc-400 mt-1">{u.summary}</div>
                  <div className="text-xs text-zinc-500 mt-2">{u.questions.length}問</div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ── Result screen ──
  if (phase === "result") {
    const total = unit.questions.length;
    const pct = Math.round((score / total) * 100);
    const emoji = pct === 100 ? "🏆" : pct >= 75 ? "🎉" : pct >= 50 ? "💪" : "📖";
    return (
      <div className="max-w-lg mx-auto text-center py-12 flex flex-col items-center gap-4">
        <div className="text-6xl">{emoji}</div>
        <h2 className="text-2xl font-bold">{score} / {total} 正解</h2>
        <p className="text-zinc-400 text-sm">
          {pct === 100 ? "満点！完璧です" : pct >= 75 ? "よくできました！" : pct >= 50 ? "もう少しで完璧！" : "解説を読み直してみよう"}
        </p>
        <div className="w-full max-w-xs bg-zinc-800 rounded-full h-3 overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
        </div>
        <div className="flex flex-col gap-3 w-full mt-4">
          <button
            onClick={() => setPhase("quiz")}
            className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-2xl transition-colors"
          >
            もう一度挑戦する
          </button>
          <button
            onClick={() => setPhase("lesson")}
            className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold rounded-2xl transition-colors"
          >
            解説を見直す
          </button>
          <button
            onClick={() => setPhase("select")}
            className="w-full py-3 text-zinc-400 hover:text-zinc-200 text-sm transition-colors"
          >
            単元一覧に戻る
          </button>
        </div>
      </div>
    );
  }

  // ── Lesson / Quiz ──
  return (
    <div className="max-w-lg mx-auto flex flex-col gap-4">
      {/* Breadcrumb */}
      <button onClick={() => setPhase("select")} className="text-xs text-zinc-400 hover:text-zinc-200 self-start flex items-center gap-1">
        ← 単元一覧
      </button>

      {phase === "lesson" && (
        <GrammarLesson unit={unit} onStartQuiz={() => setPhase("quiz")} />
      )}
      {phase === "quiz" && (
        <GrammarQuiz unit={unit} onFinish={handleFinish} onBackToLesson={() => setPhase("lesson")} />
      )}
    </div>
  );
}
