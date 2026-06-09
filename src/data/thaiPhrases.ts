export type ThaiPhrase = {
  thai: string;      // タイ文字
  romanized?: string; // ローマ字表記
  ja: string;        // 日本語訳
  note?: string;     // 補足
};

export type ThaiPhraseCategory = {
  id: string;
  title: string;
  emoji: string;
  phrases: ThaiPhrase[];
};

export const thaiPhraseCategories: ThaiPhraseCategory[] = [
  {
    id: "greeting",
    title: "あいさつ",
    emoji: "👋",
    phrases: [
      { thai: "สวัสดีครับ", romanized: "sawasdee krap", ja: "こんにちは（男性用）", note: "丁寧な挨拶" },
      { thai: "สวัสดีค่ะ", romanized: "sawasdee kha", ja: "こんにちは（女性用）", note: "丁寧な挨拶" },
      { thai: "สวัสดีจ้า", romanized: "sawasdee cha", ja: "やあ・こんにちは", note: "カジュアル" },
      { thai: "ชื่อเขา", romanized: "chue khao", ja: "何ですか？", note: "相手の名前を聞く" },
      { thai: "ชื่อของฉันคือ...", romanized: "chue khong chan khue", ja: "私の名前は...です", note: "自己紹介" },
      { thai: "ยินดีที่ได้รู้จัก", romanized: "yin di thi dai ruu jak", ja: "お会いしてうれしいです" },
      { thai: "ขอบคุณที่มาเยี่ยม", romanized: "khob khun thi ma yiam", ja: "訪ねてくれてありがとう" },
      { thai: "ปลอดภัยดีไหม", romanized: "plod phai di mai", ja: "お疲れ様です・調子はどう", note: "友好的な挨拶" },
      { thai: "โอเคครับ", romanized: "okey krap", ja: "わかりました", note: "カジュアル" },
      { thai: "ไป่ไปด้วย", romanized: "pai pai duai", ja: "さようなら", note: "お別れの挨拶" },
    ],
  },
  {
    id: "basic_daily",
    title: "日常会話",
    emoji: "💬",
    phrases: [
      { thai: "ขอโทษครับ", romanized: "kho thot krap", ja: "すみません・申し訳ありません", note: "正式な謝罪" },
      { thai: "ไม่เป็นไร", romanized: "mai pen rai", ja: "大丈夫です・気にしないでください" },
      { thai: "ช่วยหน่อยได้ไหม", romanized: "chuai noi dai mai", ja: "少し手伝ってもらえますか", note: "丁寧な依頼" },
      { thai: "ได้เลยครับ", romanized: "dai loei krap", ja: "もちろんです・いいですよ" },
      { thai: "มีปัญหาไหม", romanized: "mi pan ha mai", ja: "問題ありますか" },
      { thai: "ไม่มีปัญหา", romanized: "mai mi pan ha", ja: "問題ありません" },
      { thai: "เข้าใจไหม", romanized: "khao jai mai", ja: "わかりましたか", note: "確認の質問" },
      { thai: "ไม่เข้าใจ", romanized: "mai khao jai", ja: "わかりません" },
      { thai: "ช้าหน่อยได้ไหม", romanized: "cha noi dai mai", ja: "少しゆっくり話してもらえますか" },
      { thai: "คำนี้แปลว่าอะไร", romanized: "kham ni plaen wa arai", ja: "この言葉は何の意味ですか" },
    ],
  },
  {
    id: "eating_food",
    title: "食事・飲食",
    emoji: "🍜",
    phrases: [
      { thai: "หิวข้าว", romanized: "hiu khao", ja: "お腹が空いた" },
      { thai: "นั่งกินข้าวกัน", romanized: "nang kin khao kan", ja: "一緒にご飯を食べましょう" },
      { thai: "อยากกินอะไร", romanized: "ayak kin arai", ja: "何が食べたいですか" },
      { thai: "ไปกินข้าวกันไหม", romanized: "pai kin khao kan mai", ja: "食事に行きませんか" },
      { thai: "ร้านนี้อร่อย", romanized: "ran ni aroi", ja: "このお店はおいしいです" },
      { thai: "รสชาติดี", romanized: "rot chat di", ja: "美味しい味です" },
      { thai: "เพิ่มน้ำหลวงหน่อย", romanized: "phoem nam luang noi", ja: "スープを少し足してください", note: "ワン・クク用語" },
      { thai: "ไม่ใส่พริก", romanized: "mai sai phrik", ja: "唐辛子を入れないで", note: "食べ物の指示" },
      { thai: "ใส่พริกเยอะหน่อย", romanized: "sai phrik yoe noi", ja: "唐辛子をたくさん入れて" },
      { thai: "หวาน ไม่ใส่", romanized: "wan mai sai", ja: "砂糖なしで", note: "飲み物用" },
    ],
  },
  {
    id: "shopping",
    title: "買い物",
    emoji: "🛍️",
    phrases: [
      { thai: "ราคาเท่าไร", romanized: "raka thao rai", ja: "いくらですか", note: "値段を聞く" },
      { thai: "แพงไป", romanized: "phaeng pai", ja: "高すぎます" },
      { thai: "ถูกหน่อยได้ไหม", romanized: "thuuk noi dai mai", ja: "もう少し安く" },
      { thai: "มีขนาดอื่นไหม", romanized: "mi khanaat uen mai", ja: "他のサイズは" },
      { thai: "มีสีอื่นไหม", romanized: "mi si uen mai", ja: "別の色は" },
      { thai: "ขออันนี้", romanized: "kho an ni", ja: "これをください" },
      { thai: "ขอสองอัน", romanized: "kho song an", ja: "2つください" },
      { thai: "ยอมรับบัตรเครดิตไหม", romanized: "yom rap bat khredit mai", ja: "カード使えますか" },
      { thai: "ไม่มีเงินสด", romanized: "mai mi ngoen sot", ja: "現金がない", note: "カード払い時" },
      { thai: "คืนของได้ไหม", romanized: "khuen khong dai mai", ja: "返品できますか" },
    ],
  },
  {
    id: "directions",
    title: "道案内・交通",
    emoji: "🗺️",
    phrases: [
      { thai: "ไปไหนครับ", romanized: "pai nai krap", ja: "どこへ行きますか", note: "行き先を聞く" },
      { thai: "ไปที่นั่นได้ไหม", romanized: "pai thi nan dai mai", ja: "そこへはどう行く" },
      { thai: "ใกล้ไหม", romanized: "klai mai", ja: "近いですか" },
      { thai: "ไกลไหม", romanized: "klai mai", ja: "遠いですか" },
      { thai: "ต้องใช้เวลานาน", romanized: "tong chai weela naan", ja: "時間かかる" },
      { thai: "ประมาณกี่นาที", romanized: "pramaan ki nathi", ja: "大体何分" },
      { thai: "ไปแท็กซี่", romanized: "pai thak si", ja: "タクシーで行く" },
      { thai: "ไปรถเมล์", romanized: "pai rot mel", ja: "バスで行く" },
      { thai: "เชื่อมต่อขนส่ง", romanized: "chuam to khon song", ja: "乗り継ぎあり", note: "複数交通機関" },
      { thai: "หนึ่งแถว", romanized: "neung thaew", ja: "同じ方向", note: "タクシー乗合" },
    ],
  },
  {
    id: "time_day",
    title: "時間・曜日",
    emoji: "⏰",
    phrases: [
      { thai: "เวลากี่โมง", romanized: "weela ki mong", ja: "何時ですか", note: "時間を聞く" },
      { thai: "โมงเท่านั้น", romanized: "mong tao nan", ja: "○時ちょうど" },
      { thai: "ครึ่งโมง", romanized: "khrueng mong", ja: "30分・半" },
      { thai: "ต่อหนึ่งโมง", romanized: "to neung mong", ja: "あと15分", note: "タイ表現" },
      { thai: "วันนี้คืนวันไหน", romanized: "wan ni khuen wan nai", ja: "今日は何曜日" },
      { thai: "วันจันทร์", romanized: "wan chanthaburi", ja: "月曜日" },
      { thai: "วันศุกร์", romanized: "wan suk", ja: "金曜日" },
      { thai: "วันอาทิตย์", romanized: "wan athit", ja: "日曜日" },
      { thai: "สัปดาห์นี้ไป", romanized: "sap da ni pai", ja: "今週行く" },
      { thai: "เดือนหน้า", romanized: "duean na", ja: "来月" },
    ],
  },
  {
    id: "emotion",
    title: "気持ち・感情",
    emoji: "😊",
    phrases: [
      { thai: "ดีใจ", romanized: "di chai", ja: "嬉しい・幸せ" },
      { thai: "เศร้า", romanized: "sao", ja: "悲しい・残念" },
      { thai: "โกรธ", romanized: "krot", ja: "怒っている", note: "ネガティブ感情" },
      { thai: "กลัว", romanized: "klua", ja: "怖い・心配" },
      { thai: "เหนื่อย", romanized: "neuay", ja: "疲れている" },
      { thai: "ท้อแท้", romanized: "tho that", ja: "落ち込んでいる" },
      { thai: "สุข", romanized: "suk", ja: "幸せ・楽しい" },
      { thai: "ผ่อนคลาย", romanized: "phon khlaai", ja: "リラックス" },
      { thai: "บ้าคลั่ง", romanized: "ba khlang", ja: "狂っている", note: "冗談的" },
      { thai: "ขายหน้า", romanized: "khai na", ja: "恥ずかしい", note: "タイ文化特有" },
    ],
  },
  {
    id: "request_help",
    title: "依頼・助け",
    emoji: "🙏",
    phrases: [
      { thai: "ช่วยฉันหน่อย", romanized: "chuai chan noi", ja: "助けてください" },
      { thai: "ช่วยด้วย", romanized: "chuai duai", ja: "手伝ってください", note: "友好的" },
      { thai: "ช่วยได้ไหม", romanized: "chuai dai mai", ja: "手伝えますか" },
      { thai: "ทำให้หน่อยได้ไหม", romanized: "tham hai noi dai mai", ja: "作ってもらえる" },
      { thai: "อนุญาตให้", romanized: "anu yat hai", ja: "許可して" },
      { thai: "ขออนุญาตครับ", romanized: "kho anu yat krap", ja: "申し訳ないが", note: "かしこまった" },
      { thai: "ให้ฉันด้วย", romanized: "hai chan duai", ja: "私にもください" },
      { thai: "บอกฉันหน่อย", romanized: "bok chan noi", ja: "教えてください" },
      { thai: "สอนฉัน", romanized: "son chan", ja: "教えてください" },
      { thai: "แสดงให้ฉันหน่อย", romanized: "saduang hai chan noi", ja: "見せてください" },
    ],
  },
  {
    id: "casual",
    title: "カジュアル会話",
    emoji: "😄",
    phrases: [
      { thai: "มาเจอกันไหม", romanized: "ma joe kan mai", ja: "会いましょう", note: "友人同士" },
      { thai: "ว่างไหม", romanized: "wang mai", ja: "暇ですか" },
      { thai: "ไม่ว่าง", romanized: "mai wang", ja: "忙しい" },
      { thai: "อยากไป", romanized: "ayak pai", ja: "行きたい", note: "誘いに対して" },
      { thai: "ไปแล้ว", romanized: "pai laew", ja: "もう行った" },
      { thai: "ดู", romanized: "du", ja: "見てください", note: "注意喚起" },
      { thai: "ฟัง", romanized: "fang", ja: "聞いて・注目", note: "話を始める時" },
      { thai: "ผิด", romanized: "phit", ja: "違う・間違い" },
      { thai: "ถูก", romanized: "thuuk", ja: "そう・正しい" },
      { thai: "ดังนั้น", romanized: "dang nan", ja: "だから・ですから", note: "結論への" },
    ],
  },
];
