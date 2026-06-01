// 各単語の「穴埋め問題文」。___に単語が入る。
export type VocabQuestion = {
  word: string;
  sentence: string;
  sentenceJa: string;
};

export const vocabQuestions: VocabQuestion[] = [
  // port / carry
  { word: "transport",  sentence: "The government plans to ___ goods by rail to reduce pollution.",        sentenceJa: "政府は汚染を減らすために鉄道で物資を___する計画だ。" },
  { word: "import",     sentence: "The country has to ___ most of its energy resources from abroad.",      sentenceJa: "その国はエネルギー資源のほとんどを海外から___しなければならない。" },
  { word: "export",     sentence: "Japan continues to ___ high-quality electronics around the world.",     sentenceJa: "日本は世界中に高品質の電子機器を___し続けている。" },
  { word: "portable",   sentence: "He uses a ___ charger so he can power his phone anywhere.",             sentenceJa: "彼はどこでもスマホを充電できるように___充電器を使っている。" },
  { word: "support",    sentence: "The organization was set up to ___ homeless people in the city.",       sentenceJa: "その組織は市内のホームレスの人々を___するために設立された。" },
  { word: "report",     sentence: "Journalists are expected to ___ the facts accurately and fairly.",      sentenceJa: "ジャーナリストは事実を正確かつ公正に___することが求められる。" },
  { word: "deport",     sentence: "The authorities decided to ___ the man who had entered the country illegally.", sentenceJa: "当局は不法に入国した男性を___することを決定した。" },
  { word: "portfolio",  sentence: "Artists often keep a ___ of their best work to show clients.",          sentenceJa: "アーティストはクライアントに見せるために最高の作品の___を持っていることが多い。" },
  // spect / look
  { word: "inspect",    sentence: "Health officials came to ___ the kitchen of the restaurant.",           sentenceJa: "保健官がレストランの厨房を___するためにやってきた。" },
  { word: "respect",    sentence: "Students are expected to ___ their teachers and follow the rules.",     sentenceJa: "生徒は教師を___し、規則に従うことが求められる。" },
  { word: "prospect",   sentence: "The ___ of finding a new job excited her greatly.",                     sentenceJa: "新しい仕事を見つける___が彼女を大いに興奮させた。" },
  { word: "spectacular", sentence: "The view from the top of the mountain was absolutely ___.",           sentenceJa: "山頂からの眺めは全く___だった。" },
  { word: "perspective", sentence: "Traveling abroad can give you a new ___ on your own culture.",        sentenceJa: "海外旅行は自国の文化に新しい___を与えてくれる。" },
  { word: "expect",     sentence: "We ___ the package to arrive within three business days.",              sentenceJa: "私たちは荷物が3営業日以内に到着することを___している。" },
  { word: "suspect",    sentence: "The police began to ___ that the fire had been started deliberately.",  sentenceJa: "警察は火災が意図的に起こされたと___し始めた。" },
  { word: "aspect",     sentence: "Diet is an important ___ of maintaining good health.",                  sentenceJa: "食事は健康を維持するための重要な___だ。" },
  // rupt / break
  { word: "disrupt",    sentence: "The protest threatened to ___ traffic in the city center.",             sentenceJa: "抗議活動は市内中心部の交通を___する恐れがあった。" },
  { word: "corrupt",    sentence: "The investigation revealed that several officials had been ___.",       sentenceJa: "調査により、数名の役人が___であることが明らかになった。" },
  { word: "erupt",      sentence: "Tensions between the two groups finally ___d into open conflict.",      sentenceJa: "2つのグループ間の緊張がついに公然の衝突へと___した。" },
  { word: "interrupt",  sentence: "It is impolite to ___ someone while they are speaking.",               sentenceJa: "誰かが話しているときに___するのは失礼だ。" },
  { word: "bankrupt",   sentence: "Several small businesses went ___ during the economic downturn.",      sentenceJa: "経済低迷の中、いくつかの中小企業が___になった。" },
  { word: "abrupt",     sentence: "His ___ departure from the meeting surprised everyone.",                sentenceJa: "会議からの彼の___な退席は全員を驚かせた。" },
  { word: "rupture",    sentence: "A ___ in the water pipe caused flooding in the basement.",             sentenceJa: "水道管の___が地下室の浸水を引き起こした。" },
  // dict / say
  { word: "predict",    sentence: "It is difficult to ___ exactly how the economy will perform next year.", sentenceJa: "来年の経済がどうなるかを正確に___するのは難しい。" },
  { word: "contradict", sentence: "The new findings seem to ___ what scientists believed for decades.",   sentenceJa: "新しい発見は数十年間科学者が信じていたことに___するようだ。" },
  { word: "dictate",    sentence: "The terms of the contract were ___d by the more powerful company.",    sentenceJa: "契約条件はより強力な会社によって___された。" },
  { word: "verdict",    sentence: "After two weeks of deliberation, the jury reached its ___.",           sentenceJa: "2週間の評議の後、陪審員は___に達した。" },
  { word: "dedicate",   sentence: "She plans to ___ the next year to learning Japanese.",                  sentenceJa: "彼女は来年を日本語の学習に___するつもりだ。" },
  { word: "indicate",   sentence: "The survey results ___ that most people support the new policy.",      sentenceJa: "調査結果はほとんどの人が新しい政策を支持していることを___している。" },
  { word: "dictator",   sentence: "The ___ banned all opposition parties and controlled the media.",      sentenceJa: "___は全ての野党を禁止し、メディアを支配した。" },
  // tend / stretch
  { word: "extend",     sentence: "The company decided to ___ its business hours to attract more customers.", sentenceJa: "会社はより多くの顧客を引き付けるために営業時間を___することにした。" },
  { word: "intend",     sentence: "I ___ to apply for the scholarship next semester.",                    sentenceJa: "来学期に奨学金に申し込む___だ。" },
  { word: "attend",     sentence: "Over five hundred people are expected to ___ the annual conference.",  sentenceJa: "500人以上が年次会議に___する見込みだ。" },
  { word: "contend",    sentence: "The lawyer ___ed that her client was innocent of all charges.",        sentenceJa: "弁護士は依頼人が全ての罪において無罪であると___した。" },
  { word: "tendency",   sentence: "There is a ___ for prices to rise in the summer holiday season.",     sentenceJa: "夏の休暇シーズンには価格が上昇する___がある。" },
  { word: "intense",    sentence: "The two teams engaged in an ___ competition for the championship.",   sentenceJa: "2チームは選手権をめぐる___な競争に挑んだ。" },
  { word: "tension",    sentence: "There was growing ___ between the management and the workers.",        sentenceJa: "経営陣と労働者の間で高まる___があった。" },
  { word: "pretend",    sentence: "The child would ___ to be a superhero during playtime.",              sentenceJa: "その子供は遊び時間中にスーパーヒーローの___をしていた。" },
  // mit / send
  { word: "submit",     sentence: "All applicants must ___ their forms online before midnight.",         sentenceJa: "全応募者は真夜中までにオンラインでフォームを___しなければならない。" },
  { word: "commit",     sentence: "The athlete ___ted herself to training every day for two years.",     sentenceJa: "そのアスリートは2年間毎日トレーニングすることに___した。" },
  { word: "permit",     sentence: "The new regulation does not ___ the use of single-use plastics.",    sentenceJa: "新しい規制は使い捨てプラスチックの使用を___しない。" },
  { word: "transmit",   sentence: "The virus can be ___ted through contact with infected surfaces.",    sentenceJa: "そのウイルスは感染した表面との接触を通じて___される可能性がある。" },
  { word: "emit",       sentence: "Electric vehicles do not ___ exhaust gases while driving.",          sentenceJa: "電気自動車は走行中に排気ガスを___しない。" },
  { word: "omit",       sentence: "Please do not ___ any important details when filling in the form.",  sentenceJa: "フォームに記入する際は重要な詳細を___しないでください。" },
  { word: "dismiss",    sentence: "The manager decided to ___ the idea without even hearing the full proposal.", sentenceJa: "マネージャーは提案全体を聞かずにそのアイデアを___することにした。" },
  { word: "mission",    sentence: "The astronauts successfully completed their ___ to the space station.", sentenceJa: "宇宙飛行士たちは宇宙ステーションへの___を無事に完遂した。" },
  // vert / turn
  { word: "convert",    sentence: "Many old churches have been ___ed into luxury apartments.",          sentenceJa: "多くの古い教会が高級アパートに___されている。" },
  { word: "divert",     sentence: "The authorities decided to ___ traffic around the construction site.", sentenceJa: "当局は工事現場の周りに交通を___することにした。" },
  { word: "invert",     sentence: "If you ___ the fraction, you get the reciprocal.",                   sentenceJa: "分数を___すると逆数が得られる。" },
  { word: "reverse",    sentence: "The court's decision to ___ the conviction brought great relief.",   sentenceJa: "有罪判決を___する裁判所の決定は大きな安堵をもたらした。" },
  { word: "diverse",    sentence: "A ___ team brings together people with different skills and ideas.", sentenceJa: "___なチームは異なるスキルとアイデアを持つ人々を集める。" },
  { word: "adverse",    sentence: "The expedition was called off due to ___ weather conditions.",       sentenceJa: "その遠征は___な気象条件により中止された。" },
  { word: "version",    sentence: "Make sure you are running the latest ___ of the application.",      sentenceJa: "アプリケーションの最新___を実行していることを確認してください。" },
  { word: "advertise",  sentence: "The startup decided to ___ its product on social media.",           sentenceJa: "スタートアップはソーシャルメディアで製品を___することにした。" },
  // cred / believe
  { word: "credit",     sentence: "The director gave full ___ to the team for the film's success.",    sentenceJa: "監督は映画の成功をチームに全面的に___した。" },
  { word: "credible",   sentence: "The newspaper requires all sources to be ___ before publishing.",   sentenceJa: "新聞は掲載前に全ての情報源が___であることを求めている。" },
  { word: "incredible", sentence: "The speed at which technology has advanced is truly ___.",          sentenceJa: "テクノロジーが進歩した速度は本当に___だ。" },
  { word: "credentials",sentence: "Applicants must present their ___ at the time of the interview.",  sentenceJa: "応募者は面接時に___を提示しなければならない。" },
  { word: "discredit",  sentence: "The opposition tried to ___ the minister with leaked documents.",   sentenceJa: "野党は漏洩した文書で大臣を___しようとした。" },
  { word: "accredit",   sentence: "The board voted to ___ the new medical school after a thorough review.", sentenceJa: "委員会は徹底的な審査の後、新しい医学部を___することに賛成した。" },
  // frag / break
  { word: "fragment",   sentence: "Archaeologists found a small ___ of pottery at the dig site.",     sentenceJa: "考古学者は発掘現場で陶器の小さな___を発見した。" },
  { word: "fracture",   sentence: "The X-ray revealed a small ___ in her collarbone.",                sentenceJa: "X線で彼女の鎖骨に小さな___が見つかった。" },
  { word: "fragile",    sentence: "The ancient manuscript is extremely ___ and must be handled carefully.", sentenceJa: "その古文書は非常に___で、慎重に扱わなければならない。" },
  { word: "fraction",   sentence: "Only a small ___ of applicants were selected for the final round.", sentenceJa: "わずかな___の応募者だけが最終ラウンドに選ばれた。" },
  { word: "refract",    sentence: "A prism can ___ white light into a spectrum of colors.",           sentenceJa: "プリズムは白色光をスペクトルの色に___することができる。" },
  // greg / gather
  { word: "aggregate",  sentence: "The ___ data from all branches showed a steady increase in sales.", sentenceJa: "全支店からの___データは売上の着実な増加を示した。" },
  { word: "congregate", sentence: "Fans began to ___ outside the stadium hours before the match.",    sentenceJa: "ファンは試合の何時間も前にスタジアムの外に___し始めた。" },
  { word: "segregate",  sentence: "It is illegal to ___ students based on their race or religion.",   sentenceJa: "人種や宗教に基づいて生徒を___することは違法だ。" },
  { word: "gregarious", sentence: "A ___ person tends to enjoy being around other people.",           sentenceJa: "___な人は他の人たちと一緒にいることを楽しむ傾向がある。" },
];
