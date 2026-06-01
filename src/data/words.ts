export type Word = {
  word: string;
  phonetic: string;
  pos: string;
  meaning: string;
  example: string;
  exampleJa: string;
};

export type Group = {
  id: string;
  name: string;
  desc: string;
  words: Word[];
};

export const groups: Group[] = [
  {
    id: "port", name: "port / carry", desc: "「運ぶ」を意味する語根 port から派生",
    words: [
      { word: "transport",  phonetic: "/trænsˈpɔːrt/",   pos: "動", meaning: "輸送する・運搬する",        example: "Goods are transported by rail across the country.",           exampleJa: "物資は鉄道で国中に輸送される。" },
      { word: "import",     phonetic: "/ˈɪmpɔːrt/",      pos: "動", meaning: "輸入する",                  example: "Japan imports a large amount of oil from the Middle East.",   exampleJa: "日本は中東から大量の石油を輸入する。" },
      { word: "export",     phonetic: "/ˈekspɔːrt/",     pos: "動", meaning: "輸出する",                  example: "The country exports automobiles to over 100 nations.",        exampleJa: "その国は100カ国以上に自動車を輸出している。" },
      { word: "portable",   phonetic: "/ˈpɔːrtəbl/",     pos: "形", meaning: "携帯できる・持ち運び可能な",  example: "She carried a portable speaker to the beach.",               exampleJa: "彼女はビーチにポータブルスピーカーを持っていった。" },
      { word: "support",    phonetic: "/səˈpɔːrt/",      pos: "動", meaning: "支援する・支える",           example: "His family supported him through the difficult times.",       exampleJa: "彼の家族は困難な時期に彼を支えた。" },
      { word: "report",     phonetic: "/rɪˈpɔːrt/",      pos: "動", meaning: "報告する・知らせる",         example: "She reported the accident to the police immediately.",        exampleJa: "彼女はすぐに警察に事故を報告した。" },
      { word: "deport",     phonetic: "/dɪˈpɔːrt/",      pos: "動", meaning: "国外追放する",              example: "The illegal immigrant was deported to his home country.",     exampleJa: "その不法移民は母国へ強制送還された。" },
      { word: "portfolio",  phonetic: "/pɔːrtˈfoʊlioʊ/", pos: "名", meaning: "ポートフォリオ・作品集",    example: "She presented her portfolio to potential employers.",          exampleJa: "彼女は雇用主候補にポートフォリオを提示した。" },
    ],
  },
  {
    id: "spect", name: "spect / look", desc: "「見る」を意味する語根 spect から派生",
    words: [
      { word: "inspect",     phonetic: "/ɪnˈspekt/",      pos: "動", meaning: "検査する・調査する",        example: "The officer inspected the vehicle at the border.",            exampleJa: "警官は国境で車両を検査した。" },
      { word: "respect",     phonetic: "/rɪˈspekt/",      pos: "動", meaning: "尊重する・敬う",            example: "We should respect people with different opinions.",           exampleJa: "異なる意見を持つ人々を尊重すべきだ。" },
      { word: "prospect",    phonetic: "/ˈprɑːspekt/",    pos: "名", meaning: "見通し・展望・可能性",       example: "The prospects for economic recovery look bright.",            exampleJa: "経済回復の見通しは明るく見える。" },
      { word: "spectacular", phonetic: "/spekˈtækjələr/", pos: "形", meaning: "壮観な・目覚ましい",        example: "The fireworks display was absolutely spectacular.",           exampleJa: "花火のショーは全く壮観だった。" },
      { word: "perspective", phonetic: "/pərˈspektɪv/",   pos: "名", meaning: "視点・観点・見方",          example: "Try to see things from the customer's perspective.",         exampleJa: "顧客の視点から物事を見てみなさい。" },
      { word: "expect",      phonetic: "/ɪkˈspekt/",      pos: "動", meaning: "期待する・予期する",        example: "I expect the results to be announced next week.",            exampleJa: "来週、結果が発表されると予期している。" },
      { word: "suspect",     phonetic: "/səˈspekt/",      pos: "動", meaning: "疑う・怪しいと思う",        example: "Police suspect him of committing the fraud.",                exampleJa: "警察は彼が詐欺を犯したと疑っている。" },
      { word: "aspect",      phonetic: "/ˈæspekt/",       pos: "名", meaning: "側面・観点・様相",          example: "We need to consider every aspect of the problem.",           exampleJa: "私たちは問題のあらゆる側面を考慮する必要がある。" },
    ],
  },
  {
    id: "rupt", name: "rupt / break", desc: "「壊す・破る」を意味する語根 rupt から派生",
    words: [
      { word: "disrupt",   phonetic: "/dɪsˈrʌpt/",   pos: "動", meaning: "混乱させる・中断させる",   example: "The storm disrupted train services across the region.",    exampleJa: "嵐は地域全体の鉄道サービスを混乱させた。" },
      { word: "corrupt",   phonetic: "/kəˈrʌpt/",    pos: "形", meaning: "腐敗した・不正な",         example: "The corrupt official was arrested for taking bribes.",    exampleJa: "腐敗した役人は贈収賄で逮捕された。" },
      { word: "erupt",     phonetic: "/ɪˈrʌpt/",     pos: "動", meaning: "噴火する・爆発する",       example: "The volcano erupted without warning.",                    exampleJa: "その火山は警告なしに噴火した。" },
      { word: "interrupt", phonetic: "/ˌɪntəˈrʌpt/", pos: "動", meaning: "遮る・邪魔する",          example: "Please do not interrupt while I am speaking.",            exampleJa: "私が話している間は遮らないでください。" },
      { word: "bankrupt",  phonetic: "/ˈbæŋkrʌpt/",  pos: "形", meaning: "破産した",               example: "The company went bankrupt during the recession.",         exampleJa: "その会社は不況の中で破産した。" },
      { word: "abrupt",    phonetic: "/əˈbrʌpt/",    pos: "形", meaning: "突然の・ぶっきらぼうな",   example: "The meeting came to an abrupt end.",                     exampleJa: "会議は突然終了した。" },
      { word: "rupture",   phonetic: "/ˈrʌptʃər/",   pos: "名", meaning: "破裂・断絶",             example: "A rupture in the pipeline caused a major oil spill.",     exampleJa: "パイプラインの破裂が大規模な石油流出を引き起こした。" },
    ],
  },
  {
    id: "dict", name: "dict / say", desc: "「言う・述べる」を意味する語根 dict から派生",
    words: [
      { word: "predict",    phonetic: "/prɪˈdɪkt/",       pos: "動", meaning: "予測する・予言する",   example: "Scientists can predict earthquakes with some accuracy.",      exampleJa: "科学者はある程度の精度で地震を予測できる。" },
      { word: "contradict", phonetic: "/ˌkɑːntrəˈdɪkt/",  pos: "動", meaning: "矛盾する・否定する",  example: "His actions contradicted his earlier statements.",           exampleJa: "彼の行動は以前の発言と矛盾していた。" },
      { word: "dictate",    phonetic: "/ˈdɪkteɪt/",       pos: "動", meaning: "指示する・口述する",  example: "She dictated the letter to her assistant.",                  exampleJa: "彼女はアシスタントに手紙を口述した。" },
      { word: "verdict",    phonetic: "/ˈvɜːrdɪkt/",      pos: "名", meaning: "評決・判決",         example: "The jury returned a verdict of not guilty.",                 exampleJa: "陪審員団は無罪の評決を下した。" },
      { word: "dedicate",   phonetic: "/ˈdedɪkeɪt/",      pos: "動", meaning: "捧げる・専念させる",  example: "He dedicated his life to helping the poor.",                 exampleJa: "彼は貧しい人々を助けることに生涯を捧げた。" },
      { word: "indicate",   phonetic: "/ˈɪndɪkeɪt/",      pos: "動", meaning: "示す・指し示す",      example: "The data indicates a significant rise in temperature.",      exampleJa: "データは気温の著しい上昇を示している。" },
      { word: "dictator",   phonetic: "/ˈdɪkteɪtər/",     pos: "名", meaning: "独裁者",             example: "The dictator ruled the country with an iron fist.",          exampleJa: "独裁者は鉄の拳で国を支配した。" },
    ],
  },
  {
    id: "tend", name: "tend / stretch", desc: "「伸ばす・向かう」を意味する語根 tend から派生",
    words: [
      { word: "extend",   phonetic: "/ɪkˈstend/",  pos: "動", meaning: "延長する・広げる",       example: "They decided to extend the deadline by one week.",          exampleJa: "彼らは締め切りを1週間延長することにした。" },
      { word: "intend",   phonetic: "/ɪnˈtend/",   pos: "動", meaning: "意図する・つもりである",  example: "I intend to finish this report by tonight.",               exampleJa: "今夜までにこのレポートを終えるつもりだ。" },
      { word: "attend",   phonetic: "/əˈtend/",    pos: "動", meaning: "出席する・参加する",     example: "All students must attend the orientation session.",         exampleJa: "全学生はオリエンテーションに出席しなければならない。" },
      { word: "contend",  phonetic: "/kənˈtend/",  pos: "動", meaning: "主張する・戦う",         example: "She contended that the new policy was unfair.",             exampleJa: "彼女は新しい政策が不公平だと主張した。" },
      { word: "tendency", phonetic: "/ˈtendənsi/", pos: "名", meaning: "傾向・性質",            example: "He has a tendency to procrastinate.",                       exampleJa: "彼には先延ばしにする傾向がある。" },
      { word: "intense",  phonetic: "/ɪnˈtens/",   pos: "形", meaning: "激しい・強烈な",         example: "The heat was so intense that we had to leave.",             exampleJa: "熱さが激しすぎて、私たちは去らなければならなかった。" },
      { word: "tension",  phonetic: "/ˈtenʃən/",   pos: "名", meaning: "緊張・張力",            example: "There was considerable tension between the two sides.",     exampleJa: "両者の間にはかなりの緊張があった。" },
      { word: "pretend",  phonetic: "/prɪˈtend/",  pos: "動", meaning: "ふりをする",            example: "She pretended not to notice the mistake.",                  exampleJa: "彼女はミスに気づかないふりをした。" },
    ],
  },
  {
    id: "mit", name: "mit / send", desc: "「送る」を意味する語根 mit/miss から派生",
    words: [
      { word: "submit",   phonetic: "/səbˈmɪt/",   pos: "動", meaning: "提出する・服従する",    example: "Please submit your application before the deadline.",        exampleJa: "締め切りまでに申請書を提出してください。" },
      { word: "commit",   phonetic: "/kəˈmɪt/",    pos: "動", meaning: "コミットする・犯す",    example: "He committed himself to finishing the project on time.",     exampleJa: "彼は時間通りにプロジェクトを完成させると誓った。" },
      { word: "permit",   phonetic: "/pərˈmɪt/",   pos: "動", meaning: "許可する",             example: "Smoking is not permitted in this building.",                exampleJa: "この建物では喫煙は許可されていない。" },
      { word: "transmit", phonetic: "/trænsˈmɪt/", pos: "動", meaning: "送信する・伝達する",    example: "The signal is transmitted via satellite.",                  exampleJa: "信号は衛星経由で送信される。" },
      { word: "emit",     phonetic: "/ɪˈmɪt/",     pos: "動", meaning: "放出する・発する",      example: "Cars emit harmful gases into the atmosphere.",              exampleJa: "自動車は大気中に有害なガスを放出する。" },
      { word: "omit",     phonetic: "/oʊˈmɪt/",    pos: "動", meaning: "省略する・見落とす",    example: "He accidentally omitted an important detail from the report.", exampleJa: "彼は報告書から重要な詳細を誤って省略した。" },
      { word: "dismiss",  phonetic: "/dɪsˈmɪs/",   pos: "動", meaning: "却下する・解雇する",    example: "The judge dismissed the case due to lack of evidence.",     exampleJa: "裁判官は証拠不足でその案件を却下した。" },
      { word: "mission",  phonetic: "/ˈmɪʃən/",    pos: "名", meaning: "使命・任務",           example: "Our mission is to provide clean water to everyone.",        exampleJa: "私たちの使命は全ての人に清潔な水を提供することだ。" },
    ],
  },
  {
    id: "vert", name: "vert / turn", desc: "「回す・向ける」を意味する語根 vert/vers から派生",
    words: [
      { word: "convert",   phonetic: "/kənˈvɜːrt/",  pos: "動", meaning: "変換する・改宗する",   example: "They converted the old factory into apartments.",            exampleJa: "彼らは古い工場をアパートに改装した。" },
      { word: "divert",    phonetic: "/daɪˈvɜːrt/",  pos: "動", meaning: "そらす・転換する",     example: "The road was diverted due to the landslide.",               exampleJa: "土砂崩れのために道路が迂回された。" },
      { word: "invert",    phonetic: "/ɪnˈvɜːrt/",   pos: "動", meaning: "逆さにする・反転する", example: "Invert the cake onto a plate to serve.",                    exampleJa: "ケーキをお皿に逆さまにして提供する。" },
      { word: "reverse",   phonetic: "/rɪˈvɜːrs/",   pos: "動", meaning: "逆にする・後退させる", example: "They reversed the decision after new evidence emerged.",     exampleJa: "新たな証拠が出た後、彼らは決定を覆した。" },
      { word: "diverse",   phonetic: "/daɪˈvɜːrs/",  pos: "形", meaning: "多様な・様々な",       example: "The city has a diverse population from many cultures.",      exampleJa: "その都市は多くの文化から来た多様な人口を持つ。" },
      { word: "adverse",   phonetic: "/ˈædvɜːrs/",   pos: "形", meaning: "不利な・有害な",       example: "The drug may have adverse side effects.",                   exampleJa: "その薬には有害な副作用があるかもしれない。" },
      { word: "version",   phonetic: "/ˈvɜːrʒən/",   pos: "名", meaning: "バージョン・版",       example: "Please update to the latest version of the software.",      exampleJa: "ソフトウェアを最新バージョンに更新してください。" },
      { word: "advertise", phonetic: "/ˈædvərtaɪz/", pos: "動", meaning: "広告する・宣伝する",   example: "The company spent millions to advertise its new product.",   exampleJa: "その会社は新製品の広告に数百万を費やした。" },
    ],
  },
  {
    id: "cred", name: "cred / believe", desc: "「信じる」を意味する語根 cred から派生",
    words: [
      { word: "credit",      phonetic: "/ˈkredɪt/",    pos: "名", meaning: "信用・功績・クレジット",   example: "She deserves credit for the team's success.",               exampleJa: "チームの成功は彼女の功績だ。" },
      { word: "credible",    phonetic: "/ˈkredɪbl/",   pos: "形", meaning: "信頼できる・信憑性がある", example: "The witness gave a credible account of the events.",        exampleJa: "証人は出来事について信頼できる説明をした。" },
      { word: "incredible",  phonetic: "/ɪnˈkredɪbl/", pos: "形", meaning: "信じられない・素晴らしい", example: "The athlete's performance was incredible.",                 exampleJa: "そのアスリートのパフォーマンスは信じられないものだった。" },
      { word: "credentials", phonetic: "/krəˈdenʃəlz/",pos: "名", meaning: "資格・証明書・信任状",    example: "Please present your credentials at the front desk.",        exampleJa: "フロントデスクで資格証明書を提示してください。" },
      { word: "discredit",   phonetic: "/dɪsˈkredɪt/", pos: "動", meaning: "信用を傷つける",           example: "The scandal discredited the politician.",                   exampleJa: "スキャンダルは政治家の信用を傷つけた。" },
      { word: "accredit",    phonetic: "/əˈkredɪt/",   pos: "動", meaning: "認定する・認証する",        example: "The university is fully accredited by the government.",     exampleJa: "その大学は政府に完全に認定されている。" },
    ],
  },
  {
    id: "frag", name: "frag / break", desc: "「砕く・壊れる」を意味する語根 frag/fract から派生",
    words: [
      { word: "fragment", phonetic: "/ˈfræɡmənt/", pos: "名", meaning: "断片・破片",          example: "Fragments of the ancient vase were found at the site.",      exampleJa: "古代の壺の破片が現場で発見された。" },
      { word: "fracture", phonetic: "/ˈfræktʃər/", pos: "名", meaning: "骨折・亀裂",          example: "He suffered a fracture in his left arm after the fall.",     exampleJa: "転倒後、彼は左腕に骨折を負った。" },
      { word: "fragile",  phonetic: "/ˈfrædʒəl/",  pos: "形", meaning: "壊れやすい・脆い",    example: "Handle the fragile equipment with care.",                    exampleJa: "壊れやすい機器を丁寧に扱ってください。" },
      { word: "fraction", phonetic: "/ˈfrækʃən/",  pos: "名", meaning: "分数・わずかな部分",  example: "Only a fraction of the population voted in the election.",   exampleJa: "人口のわずかな部分しか選挙で投票しなかった。" },
      { word: "refract",  phonetic: "/rɪˈfrækt/",  pos: "動", meaning: "屈折する・曲げる",    example: "Light refracts when it passes through water.",               exampleJa: "光は水を通過するときに屈折する。" },
    ],
  },
  {
    id: "greg", name: "greg / gather", desc: "「集まる」を意味する語根 greg から派生",
    words: [
      { word: "aggregate",  phonetic: "/ˈæɡrɪɡət/",     pos: "名", meaning: "合計・集合体",         example: "The aggregate score decided the winner.",                   exampleJa: "合計スコアが勝者を決定した。" },
      { word: "congregate", phonetic: "/ˈkɑːŋɡrɪɡeɪt/", pos: "動", meaning: "集まる・集合する",     example: "People congregated in the square to celebrate.",            exampleJa: "人々は祝うために広場に集まった。" },
      { word: "segregate",  phonetic: "/ˈseɡrɪɡeɪt/",   pos: "動", meaning: "分離する・隔離する",   example: "Racial segregation was abolished in the 20th century.",     exampleJa: "人種差別は20世紀に廃止された。" },
      { word: "gregarious", phonetic: "/ɡrɪˈɡɛriəs/",   pos: "形", meaning: "社交的な・群れを好む", example: "She is gregarious and loves meeting new people.",            exampleJa: "彼女は社交的で、新しい人々に会うことが大好きだ。" },
    ],
  },
];
