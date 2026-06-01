"use client";
import { useState } from "react";
import type { GrammarUnit } from "@/data/grammar";

type Props = {
  unit: GrammarUnit;
  onFinish: (score: number) => void;
  onBackToLesson: () => void;
};

export default function GrammarQuiz({ unit, onFinish, onBackToLesson }: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const q = unit.questions[index];
  const total = unit.questions.length;
  const answered = selected !== null;
  const correct = selected === q.answer;

  // Split sentence on ___ for display
  const [before, after] = q.sentence.split("___");

  function choose(i: number) {
    if (answered) return;
    setSelected(i);
  }

  function next() {
    const newAnswers = [...answers, correct];
    if (index + 1 >= total) {
      onFinish(newAnswers.filter(Boolean).length);
    } else {
      setAnswers(newAnswers);
      setIndex(i => i + 1);
      setSelected(null);
    }
  }

  return (
    <div className="flex flex-col gap-4 max-w-lg w-full mx-auto">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <button onClick={onBackToLesson} className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1">
          ← 解説に戻る
        </button>
        <span className="text-xs text-zinc-500">{index + 1} / {total}</span>
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-500"
          style={{ width: `${((index) / total) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-5">
        <p className="text-xs text-zinc-500 mb-3">空欄に入る最も適切な語を選べ</p>
        <p className="text-lg font-semibold leading-8 mb-1">
          {before}
          <span className="inline-block min-w-[80px] mx-1 border-b-2 border-emerald-400 text-center text-emerald-400">
            {answered ? q.choices[q.answer] : "　　　"}
          </span>
          {after}
        </p>
        <p className="text-sm text-zinc-400">{q.sentenceJa}</p>
      </div>

      {/* Choices */}
      <div className="grid grid-cols-2 gap-3">
        {q.choices.map((c, i) => {
          let style = "bg-zinc-800 border-zinc-700 text-zinc-200 hover:border-zinc-500";
          if (answered) {
            if (i === q.answer) style = "bg-emerald-900 border-emerald-500 text-emerald-300";
            else if (i === selected) style = "bg-red-900 border-red-500 text-red-300";
            else style = "bg-zinc-800 border-zinc-700 text-zinc-500";
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              className={`py-3 px-4 rounded-xl border font-semibold text-sm transition-colors ${style} ${!answered ? "active:scale-95" : ""}`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {answered && (
        <div className={`rounded-2xl p-4 border text-sm leading-7 ${correct ? "bg-emerald-950 border-emerald-700" : "bg-red-950 border-red-700"}`}>
          <div className={`font-bold mb-1 ${correct ? "text-emerald-400" : "text-red-400"}`}>
            {correct ? "✓ 正解！" : `✗ 不正解（正解：${q.choices[q.answer]}）`}
          </div>
          <div className="text-zinc-300">{q.explanation}</div>
        </div>
      )}

      {answered && (
        <button
          onClick={next}
          className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-2xl text-base transition-colors active:scale-95"
        >
          {index + 1 >= total ? "結果を見る" : "次の問題 →"}
        </button>
      )}
    </div>
  );
}
