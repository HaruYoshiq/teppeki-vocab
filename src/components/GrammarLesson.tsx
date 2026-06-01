"use client";
import type { GrammarUnit } from "@/data/grammar";

type Props = {
  unit: GrammarUnit;
  onStartQuiz: () => void;
};

export default function GrammarLesson({ unit, onStartQuiz }: Props) {
  return (
    <div className="flex flex-col gap-5 max-w-lg w-full mx-auto">
      {/* Header */}
      <div>
        <span className="inline-block text-xs px-2.5 py-1 bg-emerald-500/20 text-emerald-400 rounded-full font-semibold mb-2">
          {unit.category}
        </span>
        <h2 className="text-xl font-bold">{unit.title}</h2>
        <p className="text-sm text-zinc-400 mt-1">{unit.summary}</p>
      </div>

      {/* Points */}
      <div className="flex flex-col gap-4">
        {unit.points.map((p, i) => (
          <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-2xl p-5">
            <div className="flex gap-2 items-start mb-3">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed">{p.rule}</p>
            </div>
            <div className="bg-zinc-900 border-l-4 border-emerald-500 px-4 py-3 rounded-r-xl text-sm leading-7">
              <div className="font-medium">{p.example}</div>
              <div className="text-zinc-400 text-xs mt-1">{p.exampleJa}</div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onStartQuiz}
        className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-2xl text-base transition-colors active:scale-95"
      >
        問題を解く →
      </button>
    </div>
  );
}
