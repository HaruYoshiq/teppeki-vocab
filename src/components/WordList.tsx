import type { Group } from "@/data/words";

type Props = {
  group: Group;
  isLearned: (gid: string, idx: number) => boolean;
};

export default function WordList({ group, isLearned }: Props) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="mb-2">
        <h2 className="text-lg font-bold">{group.name}</h2>
        <p className="text-xs text-zinc-400 mt-0.5">{group.desc}</p>
      </div>

      {group.words.map((w, i) => (
        <div key={w.word} className="bg-zinc-800 border border-zinc-700 rounded-2xl p-5 hover:border-indigo-500/50 transition-colors">
          <div className="text-xs uppercase tracking-widest text-indigo-400 mb-2">{group.name}</div>
          <div className="flex items-baseline gap-3 flex-wrap mb-1">
            <span className="text-2xl font-bold">{w.word}</span>
            <span className="text-sm text-zinc-400">{w.phonetic}</span>
            <span className="ml-auto flex-shrink-0 text-xs px-2.5 py-0.5 bg-indigo-500 text-white font-semibold rounded-full">{w.pos}</span>
            {isLearned(group.id, i) && (
              <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center text-xs text-black font-bold flex-shrink-0">✓</span>
            )}
          </div>
          <div className="text-base font-medium mb-3">{w.meaning}</div>
          <div className="bg-zinc-900 border-l-4 border-indigo-500 px-4 py-2.5 rounded-r-xl text-sm leading-7">
            <div>{w.example}</div>
            <div className="text-zinc-400 text-xs mt-0.5">{w.exampleJa}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
