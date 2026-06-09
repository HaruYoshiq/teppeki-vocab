"use client";
import { useState } from "react";
import VocabApp from "./VocabApp";
import ThaiVocabApp from "./ThaiVocabApp";

type Language = "english" | "thai";

export default function LanguageApp() {
  const [language, setLanguage] = useState<Language>("english");

  const languages: { id: Language; label: string; flag: string }[] = [
    { id: "english", label: "English", flag: "🇺🇸" },
    { id: "thai", label: "ไทย", flag: "🇹🇭" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      {/* Language selector */}
      <div className="sticky top-0 z-50 bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex gap-2 overflow-x-auto">
        {languages.map(({ id, label, flag }) => (
          <button
            key={id}
            onClick={() => setLanguage(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm flex-shrink-0 transition-colors whitespace-nowrap ${
              language === id
                ? "bg-indigo-500 text-white"
                : "bg-zinc-800 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <span>{flag}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1">
        {language === "english" && <VocabApp />}
        {language === "thai" && <ThaiVocabApp />}
      </div>
    </div>
  );
}
