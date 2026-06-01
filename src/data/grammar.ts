export type GrammarPoint = {
  rule: string;
  example: string;
  exampleJa: string;
};

export type Question = {
  sentence: string;        // 空欄付きの英文（___で表記）
  sentenceJa: string;
  choices: string[];       // 4択
  answer: number;          // 正解のindex (0-3)
  explanation: string;     // 解説
};

export type GrammarUnit = {
  id: string;
  title: string;
  category: string;
  summary: string;         // 一言まとめ
  points: GrammarPoint[];  // 解説ポイント
  questions: Question[];
};

export const grammarUnits: GrammarUnit[] = [
  {
    id: "perfect_1",
    title: "現在完了①：完了・経験",
    category: "時制",
    summary: "have/has + 過去分詞 で「〜した」「〜したことがある」を表す",
    points: [
      {
        rule: "完了用法：just / already / yet と共に使い「（ちょうど）〜した」を表す",
        example: "I have just finished my homework.",
        exampleJa: "私はちょうど宿題を終えたところだ。",
      },
      {
        rule: "経験用法：ever / never / before / once などと共に使い「〜したことがある」を表す",
        example: "Have you ever visited Kyoto?",
        exampleJa: "京都を訪れたことがありますか？",
      },
      {
        rule: "否定文では yet を文末に置き「まだ〜していない」を表す",
        example: "She hasn't arrived yet.",
        exampleJa: "彼女はまだ到着していない。",
      },
    ],
    questions: [
      {
        sentence: "I ___ never seen such a beautiful sunset before.",
        sentenceJa: "私はこんなに美しい夕日を見たことがない。",
        choices: ["am", "was", "have", "had"],
        answer: 2,
        explanation: "経験用法。「〜したことがない」は have/has + never + 過去分詞。主語が I なので have。",
      },
      {
        sentence: "She has already ___ the report.",
        sentenceJa: "彼女はすでにレポートを終えた。",
        choices: ["finish", "finished", "finishing", "finishes"],
        answer: 1,
        explanation: "have/has の後は過去分詞が来る。finish の過去分詞は finished。",
      },
      {
        sentence: "Have you ___ your keys yet?",
        sentenceJa: "もう鍵を見つけましたか？",
        choices: ["find", "found", "finding", "finds"],
        answer: 1,
        explanation: "Have + 主語 + 過去分詞 の疑問文。find の過去分詞は found。",
      },
      {
        sentence: "They ___ lived in Tokyo for ten years.",
        sentenceJa: "彼らは10年間東京に住んでいる。",
        choices: ["are", "were", "have", "had"],
        answer: 2,
        explanation: "継続用法。for + 期間で「ずっと〜している」を表すには現在完了。主語 They なので have。",
      },
    ],
  },
  {
    id: "perfect_2",
    title: "現在完了②：継続・過去完了",
    category: "時制",
    summary: "継続は for/since、過去完了は had + 過去分詞",
    points: [
      {
        rule: "継続用法：for +「期間」、since +「起点」で「ずっと〜している」を表す",
        example: "He has worked here for five years.",
        exampleJa: "彼はここで5年間働いている。",
      },
      {
        rule: "since の後には過去の時点または過去形の節が来る",
        example: "I have known her since she was a child.",
        exampleJa: "私は彼女が子供のころからずっと知っている。",
      },
      {
        rule: "過去完了（had + 過去分詞）は過去のある時点より以前の出来事を表す",
        example: "When I arrived, the movie had already started.",
        exampleJa: "私が到着したとき、映画はすでに始まっていた。",
      },
    ],
    questions: [
      {
        sentence: "I have studied English ___ I was ten years old.",
        sentenceJa: "私は10歳のときからずっと英語を勉強している。",
        choices: ["for", "since", "from", "during"],
        answer: 1,
        explanation: "since の後には過去の起点（時点）が来る。for の後には「期間」が来る。",
      },
      {
        sentence: "She has lived in Paris ___ three years.",
        sentenceJa: "彼女は3年間パリに住んでいる。",
        choices: ["since", "for", "during", "while"],
        answer: 1,
        explanation: "「3年間」という期間を表すので for を使う。since は起点に使う。",
      },
      {
        sentence: "When he arrived at the station, the train ___ already left.",
        sentenceJa: "彼が駅に着いたとき、電車はすでに出発していた。",
        choices: ["has", "have", "had", "was"],
        answer: 2,
        explanation: "過去（arrived）よりも前の出来事なので過去完了 had + 過去分詞 を使う。",
      },
      {
        sentence: "They ___ been married for twenty years.",
        sentenceJa: "彼らは結婚して20年になる。",
        choices: ["are", "were", "has", "have"],
        answer: 3,
        explanation: "主語が They（複数）なので have。for twenty years は継続の現在完了。",
      },
    ],
  },
  {
    id: "passive",
    title: "受動態",
    category: "態",
    summary: "be動詞 + 過去分詞 で「〜される」を表す",
    points: [
      {
        rule: "受動態の基本形：be + 過去分詞（+ by + 動作主）",
        example: "This book was written by Soseki.",
        exampleJa: "この本は漱石によって書かれた。",
      },
      {
        rule: "時制によって be 動詞を変化させる（is/was/will be/has been など）",
        example: "The window will be repaired tomorrow.",
        exampleJa: "窓は明日修理される予定だ。",
      },
      {
        rule: "助動詞がある場合：助動詞 + be + 過去分詞",
        example: "The report must be submitted by Friday.",
        exampleJa: "レポートは金曜日までに提出されなければならない。",
      },
    ],
    questions: [
      {
        sentence: "English ___ spoken in many countries.",
        sentenceJa: "英語は多くの国で話されている。",
        choices: ["speaks", "spoke", "is spoken", "has spoken"],
        answer: 2,
        explanation: "「話されている」は受動態。現在の状態なので is + 過去分詞（spoken）。",
      },
      {
        sentence: "The bridge ___ built in 1990.",
        sentenceJa: "その橋は1990年に建設された。",
        choices: ["is", "was", "has", "were"],
        answer: 1,
        explanation: "過去の出来事なので was + 過去分詞（built）。主語 The bridge は単数。",
      },
      {
        sentence: "The package will ___ delivered tomorrow.",
        sentenceJa: "荷物は明日配達される予定だ。",
        choices: ["be", "is", "was", "been"],
        answer: 0,
        explanation: "助動詞 will の後は原形の be + 過去分詞。will be delivered が正しい形。",
      },
      {
        sentence: "The rules must ___ followed by all members.",
        sentenceJa: "規則は全メンバーによって守られなければならない。",
        choices: ["be", "is", "are", "been"],
        answer: 0,
        explanation: "助動詞（must）+ be + 過去分詞 が受動態の基本形。",
      },
    ],
  },
  {
    id: "subjunctive",
    title: "仮定法過去・過去完了",
    category: "仮定法",
    summary: "If + 過去形〜, would + 動詞原形 で現在の事実に反する仮定を表す",
    points: [
      {
        rule: "仮定法過去：現在の事実に反する仮定。If + 過去形, 主語 + would/could/might + 原形",
        example: "If I were rich, I would buy a mansion.",
        exampleJa: "もし金持ちなら、豪邸を買うのに。（実際は金持ちではない）",
      },
      {
        rule: "be動詞は主語に関係なく were を使うのが正式（口語では was も可）",
        example: "If she were taller, she could be a model.",
        exampleJa: "もし彼女がもっと背が高ければ、モデルになれるのに。",
      },
      {
        rule: "仮定法過去完了：過去の事実に反する仮定。If + had + 過去分詞, would have + 過去分詞",
        example: "If I had studied harder, I would have passed the exam.",
        exampleJa: "もっと勉強していたら、試験に合格していたのに。",
      },
    ],
    questions: [
      {
        sentence: "If I ___ you, I would apologize immediately.",
        sentenceJa: "もし私があなたなら、すぐに謝るのに。",
        choices: ["am", "was", "were", "be"],
        answer: 2,
        explanation: "仮定法過去では be 動詞は were を使う（主語が I でも）。",
      },
      {
        sentence: "If she had more time, she ___ study abroad.",
        sentenceJa: "もし彼女にもっと時間があれば、留学するのに。",
        choices: ["will", "would", "can", "could have"],
        answer: 1,
        explanation: "仮定法過去の帰結節は would/could/might + 動詞原形。",
      },
      {
        sentence: "If he ___ harder, he would have passed the exam.",
        sentenceJa: "もっと勉強していたなら、試験に合格していたのに。",
        choices: ["studied", "studies", "had studied", "has studied"],
        answer: 2,
        explanation: "仮定法過去完了の if 節は had + 過去分詞。過去の事実に反する仮定。",
      },
      {
        sentence: "I wish I ___ fly like a bird.",
        sentenceJa: "鳥のように飛べたらいいのに。",
        choices: ["can", "could", "will", "would"],
        answer: 1,
        explanation: "I wish + 仮定法過去。現在できないことへの願望なので could（can の過去形）。",
      },
    ],
  },
  {
    id: "relative",
    title: "関係代名詞",
    category: "関係詞",
    summary: "who・which・that で名詞を後ろから修飾する",
    points: [
      {
        rule: "who：先行詞が「人」のとき使う（主格・目的格）",
        example: "The man who lives next door is a doctor.",
        exampleJa: "隣に住んでいる男性は医者だ。",
      },
      {
        rule: "which：先行詞が「物・動物」のとき使う（主格・目的格）",
        example: "This is the book which changed my life.",
        exampleJa: "これが私の人生を変えた本だ。",
      },
      {
        rule: "whose：先行詞が人・物どちらでも使える所有格（〜の）",
        example: "I know a girl whose father is a famous singer.",
        exampleJa: "私は父親が有名な歌手である女の子を知っている。",
      },
      {
        rule: "that：人・物どちらでも使えるが、非制限用法（カンマあり）には使えない",
        example: "The car that he bought last year was stolen.",
        exampleJa: "彼が去年買った車が盗まれた。",
      },
    ],
    questions: [
      {
        sentence: "The teacher ___ taught me English was very strict.",
        sentenceJa: "私に英語を教えてくれた先生はとても厳しかった。",
        choices: ["which", "whose", "who", "whom"],
        answer: 2,
        explanation: "先行詞 The teacher は「人」で、関係詞節内で主語の役割をするので who を使う。",
      },
      {
        sentence: "This is the house ___ I was born.",
        sentenceJa: "これが私が生まれた家だ。",
        choices: ["which", "that", "where", "who"],
        answer: 2,
        explanation: "「場所」を表す先行詞（house）の後で「〜で」という意味を表すには関係副詞 where を使う。",
      },
      {
        sentence: "She has a dog ___ eyes are bright blue.",
        sentenceJa: "彼女は目が明るい青色の犬を飼っている。",
        choices: ["who", "which", "that", "whose"],
        answer: 3,
        explanation: "「〜の」という所有格の関係代名詞は whose。先行詞が動物でも whose を使う。",
      },
      {
        sentence: "The movie ___ we watched last night was amazing.",
        sentenceJa: "昨夜見た映画は素晴らしかった。",
        choices: ["who", "whom", "which", "whose"],
        answer: 2,
        explanation: "先行詞 The movie は「物」なので which（または that）を使う。",
      },
    ],
  },
  {
    id: "infinitive",
    title: "不定詞の用法",
    category: "不定詞・動名詞",
    summary: "to + 動詞原形 は「〜すること・〜するための・〜して」の3用法",
    points: [
      {
        rule: "名詞的用法：「〜すること」。文の主語・目的語・補語になる",
        example: "To learn a new language takes time.",
        exampleJa: "新しい言語を学ぶことには時間がかかる。",
      },
      {
        rule: "形容詞的用法：「〜するための・〜すべき」。名詞を修飾する",
        example: "I need something to eat.",
        exampleJa: "私は何か食べるものが必要だ。",
      },
      {
        rule: "副詞的用法：「〜するために・〜して」。動詞・形容詞を修飾する",
        example: "She studied hard to pass the exam.",
        exampleJa: "彼女は試験に合格するために一生懸命勉強した。",
      },
    ],
    questions: [
      {
        sentence: "He went to the library ___ some books.",
        sentenceJa: "彼は本を借りるために図書館へ行った。",
        choices: ["borrow", "borrowing", "to borrow", "borrowed"],
        answer: 2,
        explanation: "「〜するために」という目的を表す副詞的用法の不定詞 to borrow。",
      },
      {
        sentence: "___ mistakes is a natural part of learning.",
        sentenceJa: "間違いを犯すことは学習の自然な一部だ。",
        choices: ["Make", "Making", "To making", "Made"],
        answer: 1,
        explanation: "文の主語になる「〜すること」は動名詞（Making）または不定詞（To make）。To making は不可。",
      },
      {
        sentence: "I have a lot of work ___ today.",
        sentenceJa: "私には今日すべき仕事がたくさんある。",
        choices: ["do", "doing", "to do", "done"],
        answer: 2,
        explanation: "「すべき仕事」は名詞 work を修飾する形容詞的用法の不定詞 to do。",
      },
      {
        sentence: "It is important ___ your promises.",
        sentenceJa: "約束を守ることは重要だ。",
        choices: ["keep", "keeping", "to keep", "kept"],
        answer: 2,
        explanation: "It is ... to do の構文。形式主語 it の真の主語は to keep（不定詞）。",
      },
    ],
  },
  {
    id: "modal",
    title: "助動詞",
    category: "助動詞",
    summary: "can / must / should / may などで話し手の判断や態度を表す",
    points: [
      {
        rule: "must：義務「〜しなければならない」/ 強い推量「〜に違いない」",
        example: "You must wear a seatbelt. / She must be tired.",
        exampleJa: "シートベルトをしなければならない。/ 彼女は疲れているに違いない。",
      },
      {
        rule: "should：義務・助言「〜すべきだ」/ 推量「〜のはずだ」",
        example: "You should see a doctor. / He should be home by now.",
        exampleJa: "医者に診てもらうべきだ。/ 彼はもう家にいるはずだ。",
      },
      {
        rule: "may / might：許可「〜してよい」/ 推量「〜かもしれない」",
        example: "You may leave early. / It might rain tomorrow.",
        exampleJa: "早退してもよい。/ 明日雨が降るかもしれない。",
      },
    ],
    questions: [
      {
        sentence: "You ___ not park here. It's a no-parking zone.",
        sentenceJa: "ここに駐車してはいけない。駐車禁止区域だ。",
        choices: ["should", "must", "might", "would"],
        answer: 1,
        explanation: "must not は「〜してはいけない」という強い禁止。should not より強い禁止を表す。",
      },
      {
        sentence: "He looks pale. He ___ be sick.",
        sentenceJa: "彼は顔色が悪い。病気に違いない。",
        choices: ["should", "may", "must", "can"],
        answer: 2,
        explanation: "「〜に違いない」という強い推量は must。may は「かもしれない」で確信度が低い。",
      },
      {
        sentence: "You ___ take an umbrella. It might rain.",
        sentenceJa: "傘を持っていくべきだ。雨が降るかもしれない。",
        choices: ["must", "can", "should", "will"],
        answer: 2,
        explanation: "「〜すべきだ」という助言・義務は should。must より柔らかい表現。",
      },
      {
        sentence: "___ I use your phone for a moment?",
        sentenceJa: "少し電話をお借りしてもいいですか？",
        choices: ["Must", "Should", "May", "Would"],
        answer: 2,
        explanation: "「〜してもよいですか」という許可を求めるときは May I〜? が丁寧な表現。",
      },
    ],
  },
  {
    id: "comparison",
    title: "比較表現",
    category: "比較",
    summary: "比較級・最上級・as〜as の3パターンを使い分ける",
    points: [
      {
        rule: "比較級（〜er / more〜）+ than：「…より〜だ」",
        example: "Tokyo is larger than Osaka.",
        exampleJa: "東京は大阪より大きい。",
      },
      {
        rule: "最上級（the 〜est / the most〜）+ in/of：「最も〜だ」",
        example: "This is the most interesting book I have ever read.",
        exampleJa: "これは私が今まで読んだ中で最も面白い本だ。",
      },
      {
        rule: "as〜as：「…と同じくらい〜だ」。否定は not as〜as「…ほど〜でない」",
        example: "She is as tall as her brother.",
        exampleJa: "彼女は兄と同じくらい背が高い。",
      },
    ],
    questions: [
      {
        sentence: "This problem is ___ difficult than the previous one.",
        sentenceJa: "この問題は前のものより難しい。",
        choices: ["more", "most", "much", "very"],
        answer: 0,
        explanation: "than があるので比較級。difficult は音節が多いので more difficult とする。",
      },
      {
        sentence: "He is ___ student in the class.",
        sentenceJa: "彼はクラスで最も優秀な生徒だ。",
        choices: ["the best", "better", "the more good", "good"],
        answer: 0,
        explanation: "「クラスで最も」は最上級。good の最上級は best。「the best student」が正解。",
      },
      {
        sentence: "This city is not as crowded ___ Tokyo.",
        sentenceJa: "この街は東京ほど混んでいない。",
        choices: ["than", "to", "as", "like"],
        answer: 2,
        explanation: "「〜ほど…でない」は not as 形容詞 as の構文。as〜as の2つ目の as。",
      },
      {
        sentence: "The ___ you practice, the better you become.",
        sentenceJa: "練習すればするほど、上手になる。",
        choices: ["much", "more", "most", "many"],
        answer: 1,
        explanation: "「〜すればするほど」は the 比較級〜, the 比較級〜 の構文。the more が正解。",
      },
    ],
  },
];
