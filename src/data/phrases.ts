export type Phrase = {
  en: string;
  ja: string;
  note?: string; // 使い方メモ
};

export type PhraseCategory = {
  id: string;
  title: string;
  emoji: string;
  phrases: Phrase[];
};

export const phraseCategories: PhraseCategory[] = [
  {
    id: "greeting",
    title: "あいさつ・自己紹介",
    emoji: "👋",
    phrases: [
      { en: "Nice to meet you.", ja: "はじめまして。", note: "初対面の定番" },
      { en: "How have you been?", ja: "最近どうですか？", note: "久しぶりに会った人へ" },
      { en: "Long time no see!", ja: "お久しぶりです！" },
      { en: "I'm doing great, thanks for asking.", ja: "元気ですよ、聞いてくれてありがとう。" },
      { en: "Please call me Ken.", ja: "ケンと呼んでください。" },
      { en: "I work in marketing.", ja: "マーケティングの仕事をしています。" },
      { en: "I'm based in Tokyo.", ja: "東京を拠点にしています。" },
      { en: "It's a pleasure to have you here.", ja: "お越しいただき光栄です。", note: "訪問者を迎えるとき" },
      { en: "I've heard a lot about you.", ja: "お噂はかねがね伺っております。" },
      { en: "Have a great day!", ja: "良い一日を！" },
    ],
  },
  {
    id: "smalltalk",
    title: "スモールトーク",
    emoji: "💬",
    phrases: [
      { en: "What do you do for fun?", ja: "趣味は何ですか？" },
      { en: "I'm really into hiking lately.", ja: "最近ハイキングにはまっています。" },
      { en: "Have you been to Japan before?", ja: "日本に来たことはありますか？" },
      { en: "What kind of music do you like?", ja: "どんな音楽が好きですか？" },
      { en: "The weather has been amazing lately.", ja: "最近天気がすごくいいですね。" },
      { en: "Did you catch the game last night?", ja: "昨夜の試合は見ましたか？" },
      { en: "I totally agree with you.", ja: "まったくその通りですね。" },
      { en: "That's really interesting!", ja: "それは本当に面白いですね！" },
      { en: "I had no idea!", ja: "それは知りませんでした！" },
      { en: "Tell me more about that.", ja: "それについてもっと聞かせてください。" },
    ],
  },
  {
    id: "meeting",
    title: "会議・ビジネス",
    emoji: "💼",
    phrases: [
      { en: "Shall we get started?", ja: "始めましょうか？", note: "会議の開始" },
      { en: "Let me share my screen.", ja: "画面を共有させてください。" },
      { en: "Could you please repeat that?", ja: "もう一度おっしゃっていただけますか？" },
      { en: "I'd like to add something.", ja: "一点追加させてください。" },
      { en: "What's your take on this?", ja: "これについてどうお考えですか？" },
      { en: "Let me get back to you on that.", ja: "その件については後ほどご連絡します。", note: "すぐ答えられないとき" },
      { en: "Could we table that for now?", ja: "その件は後回しにできますか？" },
      { en: "We're running short on time.", ja: "時間が少なくなってきました。" },
      { en: "Let's move on to the next item.", ja: "次の議題に移りましょう。" },
      { en: "To summarize what we've discussed...", ja: "議論をまとめると…" },
      { en: "I'll send over the details by email.", ja: "詳細はメールでお送りします。" },
      { en: "Does that work for everyone?", ja: "皆さんそれで大丈夫ですか？" },
    ],
  },
  {
    id: "opinion",
    title: "意見・提案",
    emoji: "💡",
    phrases: [
      { en: "In my opinion, we should...", ja: "私の意見では、〜すべきだと思います。" },
      { en: "I think there might be a better way.", ja: "もっと良い方法があると思います。" },
      { en: "Have you considered...?", ja: "〜について検討しましたか？" },
      { en: "What if we tried a different approach?", ja: "別のアプローチを試してみたらどうでしょう？" },
      { en: "That's a valid point.", ja: "それは的を射た指摘ですね。" },
      { en: "I see your point, but...", ja: "おっしゃることはわかりますが…", note: "反論を丁寧に切り出す" },
      { en: "I'm not sure I follow.", ja: "少し理解が追いつかないのですが。", note: "聞き返し" },
      { en: "Could you elaborate on that?", ja: "もう少し詳しく説明していただけますか？" },
      { en: "That's worth considering.", ja: "それは検討する価値がありますね。" },
      { en: "Let's look at the pros and cons.", ja: "メリットとデメリットを検討しましょう。" },
    ],
  },
  {
    id: "request",
    title: "依頼・お願い",
    emoji: "🙏",
    phrases: [
      { en: "Could you do me a favor?", ja: "お願いがあるのですが。" },
      { en: "Would it be possible to...?", ja: "〜していただくことは可能でしょうか？", note: "丁寧な依頼" },
      { en: "I was wondering if you could help me.", ja: "手伝っていただけないかと思いまして。" },
      { en: "Could you send that over to me?", ja: "それを送っていただけますか？" },
      { en: "I'd appreciate it if you could...", ja: "〜していただけると助かります。" },
      { en: "No rush, but when you get a chance...", ja: "急ぎではありませんが、お時間のあるときに…" },
      { en: "I hate to bother you, but...", ja: "お手数をおかけして申し訳ないのですが…" },
      { en: "Is there anything I can do to help?", ja: "何かお手伝いできることはありますか？" },
      { en: "Please don't hesitate to ask.", ja: "遠慮なくお申し付けください。" },
      { en: "Leave it to me.", ja: "任せてください。" },
    ],
  },
  {
    id: "trouble",
    title: "トラブル・謝罪",
    emoji: "😅",
    phrases: [
      { en: "I'm terribly sorry about that.", ja: "それは大変申し訳ございませんでした。" },
      { en: "I apologize for the confusion.", ja: "混乱を招いたことをお詫び申し上げます。" },
      { en: "I'm afraid there's been a misunderstanding.", ja: "どうやら誤解があったようです。" },
      { en: "I'll make sure it doesn't happen again.", ja: "二度とこのようなことがないようにします。" },
      { en: "We'll look into it right away.", ja: "すぐに確認します。" },
      { en: "I completely forgot. I'm so sorry.", ja: "すっかり忘れていました。本当に申し訳ありません。" },
      { en: "There seems to be a technical issue.", ja: "技術的な問題が発生しているようです。" },
      { en: "We're working on fixing the problem.", ja: "問題の解決に取り組んでいます。" },
      { en: "Could you bear with us a little longer?", ja: "もう少しお待ちいただけますか？" },
      { en: "Thank you for your patience.", ja: "お待ちいただきありがとうございます。" },
    ],
  },
  {
    id: "travel",
    title: "旅行・空港",
    emoji: "✈️",
    phrases: [
      { en: "I have a reservation under Smith.", ja: "スミス名義で予約しています。" },
      { en: "Could I have a window seat, please?", ja: "窓側の席にしていただけますか？" },
      { en: "Is this seat taken?", ja: "この席は空いていますか？" },
      { en: "How long is the flight?", ja: "フライトはどのくらいの時間ですか？" },
      { en: "Where can I pick up my baggage?", ja: "手荷物はどこで受け取れますか？" },
      { en: "I think I left something on the plane.", ja: "機内に忘れ物をしたと思います。" },
      { en: "Could you recommend a good restaurant nearby?", ja: "近くのおすすめのレストランを教えていただけますか？" },
      { en: "How much is the taxi to the city center?", ja: "市内中心部までタクシーでいくらですか？" },
      { en: "I'd like to check out tomorrow morning.", ja: "明日の朝チェックアウトしたいのですが。" },
      { en: "Do you accept credit cards?", ja: "クレジットカードは使えますか？" },
    ],
  },
  {
    id: "daily",
    title: "日常会話",
    emoji: "☀️",
    phrases: [
      { en: "I'm starving. Let's grab a bite.", ja: "お腹ぺこぺこ。何か食べに行こう。" },
      { en: "What do you feel like eating?", ja: "何が食べたい気分？" },
      { en: "Could I get the check, please?", ja: "お会計をお願いできますか？" },
      { en: "I'll get this one.", ja: "今回は私が出します。" },
      { en: "Do you want to split the bill?", ja: "割り勘にしますか？" },
      { en: "I'm a bit under the weather.", ja: "少し体調が悪いです。", note: "体調不良の婉曲表現" },
      { en: "I've been swamped with work.", ja: "仕事に追われていました。" },
      { en: "I really needed that break.", ja: "その休憩が本当に必要でした。" },
      { en: "Time flies when you're busy.", ja: "忙しいと時間が経つのが早いですね。" },
      { en: "Better late than never!", ja: "遅くてもやらないよりはまし！" },
    ],
  },
];
