"use client";
import { useState, useMemo } from "react";
import { groups } from "@/data/words";
import { vocabQuestions } from "@/data/vocabQuiz";

type Props = {
  isLearned: (gid: string, idx: number) => boolean;
};

const MIN_LEARNED = 4;

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

// 全グループから習得済み単語リストを返す
function getLearnedWords(isLearned: (gid: string, idx: number) => boolean) {
  const result: { word: string; groupName: string }[] = [];
  for (const g of groups) {
    g.words.forEach((w, i) => {
      if (isLearned(g.id, i)) result.push({ word: w.word, groupName: g.name });
    });
  }
  return result;
}

type QuizItem = {
  sentence: string;
  sentenceJa: string;
  answer: string;
  choices: string[];
};

function buildQuiz(isLearned: (gid: string, idx: number) => boolean): QuizItem[] {
  const learnedWords = getLearnedWords(isLearned);
  const learnedSet = new Set(learnedWords.map(w => w.word));

  // 習得済み単語に対応する問題だけ抽出
  const available = vocabQuestions.filter(q => learnedSet.has(q.word));
  if (available.length < MIN_LEARNED) return [];

  const allLearnedWordsList = learnedWords.map(w => w.word);

  return shuffle(available).slice(0, 10).map(q => {
    // 不正解の選択肢：習得済みの他の単語からランダムに3つ
    const distractors = shuffle(allLearnedWordsList.filter(w => w !== q.word)).slice(0, 3);
    const choices = shuffle([q.word, ...distractors]);
    return {
      sentence: q.sentence,
      sentenceJa: q.sentenceJa,
      answer: q.word,
      choices,
    };
  });
}

export default function VocabQuiz({ isLearned }: Props) {
  const quiz = useMemo(() => buildQuiz(isLearned), [isLearned]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const learnedCount = useMemo(
    () => getLearnedWords(isLearned).length,
    [isLearned],
  );

  // 習得単語が足りない場合
  if (learnedCount < MIN_LEARNED) {
    return (
      <div className="max-w-lg mx-auto text-center py-16 flex flex-col items-center gap-4">
        <div className="text-5xl">📚</div>
        <h2 className="text-xl font-bold">単語をもっと習得しよう！</h2>
        <p className="text-zinc-400 text-sm">
          このモードは <span className="text-indigo-400 font-bold">{MIN_LEARNED}語以上</span> 習得すると解放されます。
        </p>
        <p className="text-zinc-500 text-xs">現在の習得数：{learnedCount} 語</p>
        <div className="w-full max-w-xs bg-zinc-800 rounded-full h-2 overflow-hidden mt-2">
          <div
            className="h-full bg-indigo-500 rounded-full transition-all"
            style={{ width: `${Math.min((learnedCount / MIN_LEARNED) * 100, 100)}%` }}
          />
        </div>
      </div>
    );
  }

  // 結果画面
  if (finished) {
    const total = quiz.length;
    const pct = Math.round((score / total) * 100);
    const emoji = pct === 100 ? "🏆" : pct >= 80 ? "🎉" : pct >= 60 ? "💪" : "📖";
    return (
      <div className="max-w-lg mx-auto text-center py-12 flex flex-col items-center gap-4">
        <div className="text-6xl">{emoji}</div>
        <h2 className="text-2xl font-bold">{score} / {total} 正解</h2>
        <p className="text-zinc-400 text-sm">
          {pct === 100 ? "全問正解！完璧です" : pct >= 80 ? "よくできました！" : pct >= 60 ? "もう少しで完璧！" : "単語の復習をしてみよう"}
        </p>
        <div className="w-full max-w-xs bg-zinc-800 rounded-full h-3 overflow-hidden">
          <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${pct}%` }} />
        </div>
        <button
          onClick={() => { setIndex(0); setSelected(null); setScore(0); setFinished(false); }}
          className="mt-4 w-full max-w-xs py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-2xl transition-colors"
        >
          もう一度挑戦する
        </button>
      </div>
    );
  }

  const q = quiz[index];
  const answered = selected !== null;
  const correct = selected === q.answer;
  const [before, after] = q.sentence.split("___");

  function choose(w: string) {
    if (answered) return;
    setSelected(w);
    if (w === q.answer) setScore(s => s + 1);
  }

  function next() {
    if (index + 1 >= quiz.length) {
      setFinished(true);
    } else {
      setIndex(i => i + 1);
      setSelected(null);
    }
  }

  return (
    <div className="flex flex-col gap-4 max-w-lg mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold">単語クイズ</h2>
        <p className="text-xs text-zinc-400 mt-1">習得済み単語を空欄に入れよう</p>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 rounded-full transition-all duration-500"
            style={{ width: `${(index / quiz.length) * 100}%` }}
          />
        </div>
        <span className="text-xs text-zinc-500 flex-shrink-0">{index + 1} / {quiz.length}</span>
      </div>

      {/* Question */}
      <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-5">
        <p className="text-xs text-zinc-500 mb-3">空欄に入る単語を選べ</p>
        <p className="text-base font-semibold leading-8 mb-2">
          {before}
          <span className={`inline-block min-w-[100px] mx-1 border-b-2 text-center ${answered ? "border-indigo-400 text-indigo-300" : "border-zinc-500 text-zinc-500"}`}>
            {answered ? q.answer : "　　　　"}
          </span>
          {after}
        </p>
        <p className="text-sm text-zinc-400">{q.sentenceJa}</p>
      </div>

      {/* Choices */}
      <div className="grid grid-cols-2 gap-3">
        {q.choices.map(c => {
          let style = "bg-zinc-800 border-zinc-700 text-zinc-200 hover:border-zinc-500";
          if (answered) {
            if (c === q.answer) style = "bg-indigo-900 border-indigo-500 text-indigo-300";
            else if (c === selected) style = "bg-red-900 border-red-500 text-red-300";
            else style = "bg-zinc-800 border-zinc-700 text-zinc-500";
          }
          return (
            <button
              key={c}
              onClick={() => choose(c)}
              className={`py-3 px-4 rounded-xl border font-semibold text-sm transition-colors ${style} ${!answered ? "active:scale-95" : ""}`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Result */}
      {answered && (
        <>
          <div className={`rounded-2xl p-4 border text-sm leading-7 ${correct ? "bg-indigo-950 border-indigo-700" : "bg-red-950 border-red-700"}`}>
            <div className={`font-bold mb-1 ${correct ? "text-indigo-400" : "text-red-400"}`}>
              {correct ? "✓ 正解！" : `✗ 不正解（正解：${q.answer}）`}
            </div>
            <div className="text-zinc-300">{q.sentence.replace("___", `[${q.answer}]`)}</div>
            <div className="text-zinc-400 text-xs mt-1">{q.sentenceJa}</div>
          </div>
          <button
            onClick={next}
            className="w-full py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-2xl text-base transition-colors active:scale-95"
          >
            {index + 1 >= quiz.length ? "結果を見る" : "次の問題 →"}
          </button>
        </>
      )}
    </div>
  );
}
