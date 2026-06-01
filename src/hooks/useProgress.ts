"use client";
import { useState, useEffect, useCallback } from "react";

const KEY = "teppeki_learned_v1";

export function useProgress() {
  const [learned, setLearned] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored) setLearned(JSON.parse(stored));
    } catch {}
    setReady(true);
  }, []);

  const mark = useCallback((gid: string, idx: number, value: boolean) => {
    setLearned(prev => {
      const next = { ...prev, [`${gid}_${idx}`]: value };
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const reset = useCallback((gid: string, count: number) => {
    setLearned(prev => {
      const next = { ...prev };
      for (let i = 0; i < count; i++) delete next[`${gid}_${i}`];
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const isLearned = useCallback(
    (gid: string, idx: number) => !!learned[`${gid}_${idx}`],
    [learned],
  );

  return { learned, isLearned, mark, reset, ready };
}
