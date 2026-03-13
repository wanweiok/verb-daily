export interface DeepData {
  etymology: { roots: string; origin: string; mnemonic: string };
  cognates: { word: string; meaning: string }[];
  synonyms: { word: string; nuance: string; formality: string }[];
  collocations: { pattern: string; example: string }[];
  layers: { level: string; meaning: string; example: string }[];
}

export const deepData: Record<string, DeepData> = {
  "embrace": {
    etymology: { roots: "em- (into) + brace (arms)", origin: "Latin: bracchia (arms) → Old French: embracer", mnemonic: "把手臂(brace)伸入(em)→拥抱" },
    cognates: [
      { word: "bracelet", meaning: "手镯（arm装饰）" },
      { word: "brace", meaning: "支撑；括号" },
      { word: "bracket", meaning: "括号；支架" }
    ],
    synonyms: [
      { word: "hug", nuance: "身体上的拥抱，亲密", formality: "informal" },
      { word: "adopt", nuance: "正式采纳新思想", formality: "formal" },
      { word: "welcome", nuance: "热情地接受", formality: "neutral" }
    ],
    collocations: [
      { pattern: "embrace + change", example: "Companies must embrace change to survive." },
      { pattern: "embrace + opportunity", example: "She embraced every opportunity to learn." },
      { pattern: "warmly embrace", example: "The family warmly embraced the stranger." }
    ],
    layers: [
      { level: "物理层", meaning: "用双臂拥抱", example: "She embraced her child tightly." },
      { level: "认知层", meaning: "接受新事物/观点", example: "We should embrace new technology." },
      { level: "精神层", meaning: "全然接纳生命的一切", example: "Embrace both joy and suffering as part of life." }
    ]
  },
  "persevere": {
    etymology: { roots: "per- (through) + severe (strict)", origin: "Latin: perseverare (to persist) ← severus (strict)", mnemonic: "严格(severe)坚持到底(per-through)→不屈不挠" },
    cognates: [
      { word: "severe", meaning: "严厉的；严重的" },
      { word: "perseverance", meaning: "坚持不懈（名词）" },
      { word: "asseverate", meaning: "郑重声明" }
    ],
    synonyms: [
      { word: "persist", nuance: "持续做某事，中性", formality: "neutral" },
      { word: "endure", nuance: "忍受困难而坚持", formality: "formal" },
      { word: "keep at it", nuance: "口语化的坚持", formality: "informal" }
    ],
    collocations: [
      { pattern: "persevere in/with", example: "She persevered with her studies despite hardship." },
      { pattern: "persevere through", example: "He persevered through the darkest times." },
      { pattern: "persevere against odds", example: "The team persevered against overwhelming odds." }
    ],
    layers: [
      { level: "物理层", meaning: "身体上坚持不懈", example: "The runner persevered to the finish line." },
      { level: "认知层", meaning: "面对困难不放弃", example: "Scientists persevere in their research for decades." },
      { level: "精神层", meaning: "在人生考验中保持信念", example: "She persevered in faith through every trial." }
    ]
  },
  "contemplate": {
    etymology: { roots: "con- (with/together) + templum (temple, sacred space)", origin: "Latin: contemplari (to observe in a sacred space) ← templum", mnemonic: "在神庙(temple)中一起(con)凝视→沉思" },
    cognates: [
      { word: "temple", meaning: "寺庙；太阳穴" },
      { word: "template", meaning: "模板（神庙的布局基准）" },
      { word: "contemplation", meaning: "沉思；冥想" }
    ],
    synonyms: [
      { word: "ponder", nuance: "反复思量，偏正式", formality: "formal" },
      { word: "consider", nuance: "考虑，通用", formality: "neutral" },
      { word: "mull over", nuance: "反复琖磨，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "contemplate + doing sth", example: "He contemplated leaving his job." },
      { pattern: "contemplate + the future", example: "She sat contemplating the future." },
      { pattern: "quietly contemplate", example: "He quietly contemplated the meaning of the poem." }
    ],
    layers: [
      { level: "物理层", meaning: "凝视某物", example: "She contemplated the painting for hours." },
      { level: "认知层", meaning: "深入思考某问题", example: "The board contemplated the merger proposal." },
      { level: "精神层", meaning: "冥想与内省", example: "Monks contemplate the nature of existence." }
    ]
  },
  "endeavor": {
    etymology: { roots: "en- (in) + devoir (duty)", origin: "Old French: deveir (duty) ← Latin: debere (to owe)", mnemonic: "把自己投入(en)义务(devoir)中→努力" },
    cognates: [
      { word: "duty", meaning: "责任；义务" },
      { word: "debt", meaning: "债务（所欠的）" },
      { word: "due", meaning: "应得的；到期的" }
    ],
    synonyms: [
      { word: "strive", nuance: "努力奋斗，较激烈", formality: "formal" },
      { word: "attempt", nuance: "尝试，中性", formality: "neutral" },
      { word: "try hard", nuance: "努力尝试，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "endeavor to do", example: "We endeavor to provide the best service." },
      { pattern: "human endeavor", example: "Space exploration is a great human endeavor." },
      { pattern: "creative endeavor", example: "Writing is a deeply personal creative endeavor." }
    ],
    layers: [
      { level: "物理层", meaning: "付出体力努力", example: "They endeavored to climb the mountain." },
      { level: "认知层", meaning: "智力上的追求", example: "Scientists endeavor to unlock nature's secrets." },
      { level: "精神层", meaning: "人生使命的追求", example: "To endeavor is to give meaning to one's existence." }
    ]
  },
  "illuminate": {
    etymology: { roots: "il- (upon) + lumin (light) + -ate", origin: "Latin: illuminare (to light up) ← lumen (light)", mnemonic: "把光(lumin)照到上面(il-)→照亮" },
    cognates: [
      { word: "luminous", meaning: "发光的；明亮的" },
      { word: "luminary", meaning: "杰出人物（发光者）" },
      { word: "translucent", meaning: "半透明的" }
    ],
    synonyms: [
      { word: "brighten", nuance: "使明亮，日常", formality: "informal" },
      { word: "clarify", nuance: "使清晰，解释", formality: "neutral" },
      { word: "elucidate", nuance: "阐明，学术性", formality: "formal" }
    ],
    collocations: [
      { pattern: "illuminate + the path", example: "The lantern illuminated the dark path." },
      { pattern: "illuminate + a topic", example: "The lecture illuminated several key concepts." },
      { pattern: "beautifully illuminated", example: "The manuscript was beautifully illuminated." }
    ],
    layers: [
      { level: "物理层", meaning: "用光照亮", example: "Candles illuminated the room." },
      { level: "认知层", meaning: "阐明、解释清楚", example: "Research illuminated the causes of the disease." },
      { level: "精神层", meaning: "开悟、精神启迪", example: "Meditation illuminated his understanding of self." }
    ]
  },
  "transcend": {
    etymology: { roots: "trans- (beyond) + scend (climb)", origin: "Latin: transcendere (to climb beyond) ← scandere (to climb)", mnemonic: "爬(scend)到另一边(trans)→超越" },
    cognates: [
      { word: "ascend", meaning: "上升（向上爬）" },
      { word: "descend", meaning: "下降（向下爬）" },
      { word: "scandal", meaning: "丑闻（原指绊脚石）" }
    ],
    synonyms: [
      { word: "surpass", nuance: "超过，偏能力层面", formality: "neutral" },
      { word: "exceed", nuance: "超出数量/范围", formality: "neutral" },
      { word: "go beyond", nuance: "口语化的超越", formality: "informal" }
    ],
    collocations: [
      { pattern: "transcend + boundaries", example: "Music transcends cultural boundaries." },
      { pattern: "transcend + limitations", example: "Great art transcends the limitations of its era." },
      { pattern: "transcend + differences", example: "Love transcends all differences." }
    ],
    layers: [
      { level: "物理层", meaning: "超过物理障碍", example: "The aircraft transcended the sound barrier." },
      { level: "认知层", meaning: "超越概念边界", example: "Her thesis transcended traditional disciplinary lines." },
      { level: "精神层", meaning: "超越自我与世俗", example: "Through meditation, one seeks to transcend the ego." }
    ]
  },
  "flourish": {
    etymology: { roots: "flour- (flower/bloom)", origin: "Latin: florere (to bloom) → Old French: floriss- → flourish", mnemonic: "像花(flour/flor)一样绽放→繁荣" },
    cognates: [
      { word: "flora", meaning: "植物群（花神）" },
      { word: "floral", meaning: "花的；花卉的" },
      { word: "florist", meaning: "花商" }
    ],
    synonyms: [
      { word: "thrive", nuance: "蓄壮成长，强调健康", formality: "neutral" },
      { word: "prosper", nuance: "经济上繁荣", formality: "formal" },
      { word: "boom", nuance: "爆发式增长，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "flourish in", example: "Children flourish in a supportive environment." },
      { pattern: "continue to flourish", example: "The arts continue to flourish in this city." },
      { pattern: "flourish under", example: "The business flourished under new leadership." }
    ],
    layers: [
      { level: "物理层", meaning: "植物茁壮生长", example: "Roses flourish in rich soil." },
      { level: "认知层", meaning: "事业/文化繁荣", example: "The Renaissance flourished in 15th-century Italy." },
      { level: "精神层", meaning: "心灵绽放与自我实现", example: "A person flourishes when living with purpose." }
    ]
  },
  "cultivate": {
    etymology: { roots: "cult- (tend/till) + -ivate", origin: "Latin: cultivare ← colere (to tend, to worship)", mnemonic: "像耕田(cult-)一样用心培育→培养" },
    cognates: [
      { word: "culture", meaning: "文化（培育出的）" },
      { word: "agriculture", meaning: "农业（田地耕作）" },
      { word: "cult", meaning: "崇拜（原意“的”）" }
    ],
    synonyms: [
      { word: "develop", nuance: "发展，通用", formality: "neutral" },
      { word: "foster", nuance: "精心培育，带关爱", formality: "formal" },
      { word: "grow", nuance: "基本的“培养”", formality: "informal" }
    ],
    collocations: [
      { pattern: "cultivate + a habit", example: "She cultivated a habit of reading daily." },
      { pattern: "cultivate + relationships", example: "He cultivated strong business relationships." },
      { pattern: "carefully cultivate", example: "The garden was carefully cultivated over years." }
    ],
    layers: [
      { level: "物理层", meaning: "耕种土地", example: "Farmers cultivate the land each spring." },
      { level: "认知层", meaning: "培养技能/关系", example: "She cultivated expertise in data science." },
      { level: "精神层", meaning: "修练内心品质", example: "Cultivate compassion through daily practice." }
    ]
  },
  "resonate": {
    etymology: { roots: "re- (back/again) + son (sound) + -ate", origin: "Latin: resonare (to echo) ← sonus (sound)", mnemonic: "声音(son)反复回响(re-)→共鸣" },
    cognates: [
      { word: "sonic", meaning: "声音的；音速的" },
      { word: "sonata", meaning: "奒鸣曲" },
      { word: "unison", meaning: "齐声；一致" }
    ],
    synonyms: [
      { word: "echo", nuance: "回响，偏物理", formality: "neutral" },
      { word: "strike a chord", nuance: "触动心弦，口语", formality: "informal" },
      { word: "reverberate", nuance: "持续回荡，更正式", formality: "formal" }
    ],
    collocations: [
      { pattern: "resonate with", example: "The speech resonated with the audience." },
      { pattern: "deeply resonate", example: "The story deeply resonated with readers." },
      { pattern: "continue to resonate", example: "His words continue to resonate today." }
    ],
    layers: [
      { level: "物理层", meaning: "物理上的共振", example: "The tuning fork resonated at 440 Hz." },
      { level: "认知层", meaning: "观点引起共鸣", example: "Her argument resonated with the committee." },
      { level: "精神层", meaning: "心灵深处的共感", example: "This music resonates with the deepest part of my soul." }
    ]
  },
  "aspire": {
    etymology: { roots: "a- (toward) + spire (breathe)", origin: "Latin: aspirare (to breathe toward) ← spirare (to breathe)", mnemonic: "向着目标呼吸(spire)→渴望/追求" },
    cognates: [
      { word: "inspire", meaning: "激励（向内吹气）" },
      { word: "spirit", meaning: "精神（气息）" },
      { word: "perspire", meaning: "出汗（通过汗液呼吸）" }
    ],
    synonyms: [
      { word: "aim", nuance: "瞄准目标，通用", formality: "neutral" },
      { word: "dream of", nuance: "梦想，口语化", formality: "informal" },
      { word: "endeavor", nuance: "努力追求，正式", formality: "formal" }
    ],
    collocations: [
      { pattern: "aspire to", example: "She aspires to become a surgeon." },
      { pattern: "aspire to greatness", example: "Young people should aspire to greatness." },
      { pattern: "aspire beyond", example: "He aspired beyond his humble beginnings." }
    ],
    layers: [
      { level: "物理层", meaning: "向上伸展", example: "The climber aspired to reach the summit." },
      { level: "认知层", meaning: "追求职业/学术目标", example: "She aspires to a career in medicine." },
      { level: "精神层", meaning: "对理想生活的渴望", example: "We aspire to a life of meaning and purpose." }
    ]
  },
  "wander": {
    etymology: { roots: "wand- (to turn/wind)", origin: "Old English: wandrian (to move aimlessly) ← Proto-Germanic: *wandrōjaną", mnemonic: "像魔杖(wand)一样随意转向→漫游" },
    cognates: [
      { word: "wand", meaning: "魔杖（细长弯曲的棍）" },
      { word: "wind", meaning: "蜓蜒前行（动词）" },
      { word: "wend", meaning: "行走（古语）" }
    ],
    synonyms: [
      { word: "roam", nuance: "漫无目的地走", formality: "neutral" },
      { word: "stroll", nuance: "悠闲地散步", formality: "informal" },
      { word: "meander", nuance: "蜓蜒行走，更文学化", formality: "formal" }
    ],
    collocations: [
      { pattern: "wander around", example: "We wandered around the old town." },
      { pattern: "wander aimlessly", example: "He wandered aimlessly through the streets." },
      { pattern: "let one's mind wander", example: "She let her mind wander during the lecture." }
    ],
    layers: [
      { level: "物理层", meaning: "身体漫游", example: "They wandered through the forest." },
      { level: "认知层", meaning: "思绪飘荡", example: "My attention wandered during the meeting." },
      { level: "精神层", meaning: "寻找人生方向", example: "Not all who wander are lost." }
    ]
  },
  "endure": {
    etymology: { roots: "en- (in) + dur (hard/lasting)", origin: "Latin: indurare (to harden) ← durus (hard)", mnemonic: "变得坚硬(dur)进入状态(en)→忍耐" },
    cognates: [
      { word: "durable", meaning: "耐久的" },
      { word: "duration", meaning: "持续时间" },
      { word: "duress", meaning: "胁迫（硬压力）" }
    ],
    synonyms: [
      { word: "withstand", nuance: "抵抗外力", formality: "neutral" },
      { word: "bear", nuance: "承受痛苦", formality: "neutral" },
      { word: "tough it out", nuance: "硬撑过去，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "endure + hardship", example: "They endured great hardship during the war." },
      { pattern: "endure + pain", example: "She endured the pain without complaint." },
      { pattern: "built to endure", example: "These structures were built to endure." }
    ],
    layers: [
      { level: "物理层", meaning: "身体承受痛苦", example: "He endured the freezing cold." },
      { level: "认知层", meaning: "忍受困境不屈服", example: "She endured years of criticism from peers." },
      { level: "精神层", meaning: "经受人生考验而历久弥坚", example: "True love endures through all seasons of life." }
    ]
  },
  "conquer": {
    etymology: { roots: "con- (intensive) + quer (seek/acquire)", origin: "Latin: conquirere (to seek out) → Old French: conquerre", mnemonic: "全力(con-)寻找/获取(quer)→征服" },
    cognates: [
      { word: "query", meaning: "查询（寻找答案）" },
      { word: "acquire", meaning: "获得" },
      { word: "conquest", meaning: "征服（名词）" }
    ],
    synonyms: [
      { word: "defeat", nuance: "打败对手", formality: "neutral" },
      { word: "overcome", nuance: "克服困难", formality: "neutral" },
      { word: "vanquish", nuance: "彻底击败，文学化", formality: "formal" }
    ],
    collocations: [
      { pattern: "conquer + fear", example: "She conquered her fear of public speaking." },
      { pattern: "conquer + territory", example: "The army conquered vast territories." },
      { pattern: "divide and conquer", example: "They used a divide and conquer strategy." }
    ],
    layers: [
      { level: "物理层", meaning: "军事征服", example: "Alexander conquered the Persian Empire." },
      { level: "认知层", meaning: "克服困难/挑战", example: "She conquered the entrance exam." },
      { level: "精神层", meaning: "战胜内心的恐惧与软弱", example: "The greatest conquest is to conquer oneself." }
    ]
  },
  "ponder": {
    etymology: { roots: "ponder- (to weigh)", origin: "Latin: ponderare (to weigh) ← pondus (weight)", mnemonic: "像称重量(pondus)一样掉量思维→沉思" },
    cognates: [
      { word: "pound", meaning: "磅（重量单位）" },
      { word: "ponderous", meaning: "笨重的；沉闷的" },
      { word: "preponderance", meaning: "优势（重量压倒）" }
    ],
    synonyms: [
      { word: "contemplate", nuance: "深思熄虑，更正式", formality: "formal" },
      { word: "think over", nuance: "仔细想想，口语", formality: "informal" },
      { word: "reflect on", nuance: "反思，中性", formality: "neutral" }
    ],
    collocations: [
      { pattern: "ponder + a question", example: "He pondered the question for a long time." },
      { pattern: "ponder over", example: "She pondered over the meaning of the poem." },
      { pattern: "sit and ponder", example: "He sat and pondered his next move." }
    ],
    layers: [
      { level: "物理层", meaning: "低头沉思的姿态", example: "He sat pondering with his chin in his hand." },
      { level: "认知层", meaning: "反复权衡思考", example: "She pondered the implications of the data." },
      { level: "精神层", meaning: "对人生意义的沉思", example: "We ponder the mysteries of existence." }
    ]
  },
  "cherish": {
    etymology: { roots: "cher- (dear) + -ish", origin: "Latin: carus (dear) → Old French: cherir (to hold dear)", mnemonic: "觉得珍贵(cher/dear)→珍惜" },
    cognates: [
      { word: "charity", meaning: "慈善（对人的珍爱）" },
      { word: "caress", meaning: "爱抚（温柔地对待）" },
      { word: "cherub", meaning: "小天使（可爱的）" }
    ],
    synonyms: [
      { word: "treasure", nuance: "像宝藏一样珍视", formality: "neutral" },
      { word: "adore", nuance: "爱慕，带崇拜感", formality: "informal" },
      { word: "hold dear", nuance: "视为珍贵，通用", formality: "neutral" }
    ],
    collocations: [
      { pattern: "cherish + memories", example: "She cherished the memories of her childhood." },
      { pattern: "cherish + the moment", example: "Cherish every moment with your loved ones." },
      { pattern: "deeply cherish", example: "He deeply cherished their friendship." }
    ],
    layers: [
      { level: "物理层", meaning: "小心翠翠地保护", example: "She cherished the old photograph." },
      { level: "认知层", meaning: "重视与珍惜", example: "He cherished the lessons his mentor taught him." },
      { level: "精神层", meaning: "对生命中美好事物的感恩", example: "Cherish the gift of being alive." }
    ]
  },
  "transform": {
    etymology: { roots: "trans- (across/beyond) + form (shape)", origin: "Latin: transformare (to change shape) ← forma (shape)", mnemonic: "形状(form)跨越(trans)变为另一种→转变" },
    cognates: [
      { word: "format", meaning: "格式（形式）" },
      { word: "reform", meaning: "改革（重新塑形）" },
      { word: "conform", meaning: "遵循（形状一致）" }
    ],
    synonyms: [
      { word: "convert", nuance: "转换形式/信仰", formality: "neutral" },
      { word: "revolutionize", nuance: "彻底变革", formality: "formal" },
      { word: "make over", nuance: "改头换面，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "transform + into", example: "The caterpillar transforms into a butterfly." },
      { pattern: "completely transform", example: "Technology has completely transformed our lives." },
      { pattern: "transform + the way", example: "AI is transforming the way we work." }
    ],
    layers: [
      { level: "物理层", meaning: "改变物理形态", example: "Heat transforms ice into water." },
      { level: "认知层", meaning: "改变思维模式", example: "Education transforms how we see the world." },
      { level: "精神层", meaning: "内在的精神蜥变", example: "Suffering can transform a person's soul." }
    ]
  },
  "prevail": {
    etymology: { roots: "pre- (before) + vail (be strong)", origin: "Latin: praevalere (to be stronger) ← valere (to be strong)", mnemonic: "在前面(pre)展现力量(val)→胜出" },
    cognates: [
      { word: "value", meaning: "价值（力量所在）" },
      { word: "valid", meaning: "有效的（有力的）" },
      { word: "valiant", meaning: "英勇的" }
    ],
    synonyms: [
      { word: "triumph", nuance: "大获全胜", formality: "formal" },
      { word: "win out", nuance: "最终获胜，口语", formality: "informal" },
      { word: "overcome", nuance: "克服而取胜", formality: "neutral" }
    ],
    collocations: [
      { pattern: "prevail over", example: "Justice will prevail over injustice." },
      { pattern: "prevail upon", example: "She prevailed upon him to stay." },
      { pattern: "ultimately prevail", example: "Good will ultimately prevail." }
    ],
    layers: [
      { level: "物理层", meaning: "在竞争中获胜", example: "The home team prevailed 3-1." },
      { level: "认知层", meaning: "观点/论点占上风", example: "Common sense prevailed in the debate." },
      { level: "精神层", meaning: "正义与真理终将胜出", example: "The human spirit prevails over despair." }
    ]
  },
  "inspire": {
    etymology: { roots: "in- (into) + spire (breathe)", origin: "Latin: inspirare (to breathe into) ← spirare (to breathe)", mnemonic: "将气息吹入(in+spire)某人体内→激励" },
    cognates: [
      { word: "aspire", meaning: "渴望（向着呼吸）" },
      { word: "expire", meaning: "过期（气息呼出）" },
      { word: "conspire", meaning: "密谋（一起呼吸）" }
    ],
    synonyms: [
      { word: "motivate", nuance: "使产生动力", formality: "neutral" },
      { word: "encourage", nuance: "鼓励，给予勇气", formality: "neutral" },
      { word: "fire up", nuance: "点燃热情，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "inspire + confidence", example: "The leader inspired confidence in the team." },
      { pattern: "inspire sb to do", example: "Her story inspired me to pursue my dream." },
      { pattern: "deeply inspire", example: "His sacrifice deeply inspired the nation." }
    ],
    layers: [
      { level: "物理层", meaning: "吸气（医学义）", example: "The patient inspired deeply after surgery." },
      { level: "认知层", meaning: "激发创意与行动", example: "Nature inspired his greatest paintings." },
      { level: "精神层", meaning: "神圣的启示", example: "The prophets were inspired by divine revelation." }
    ]
  },
  "linger": {
    etymology: { roots: "ling- (long/prolong) + -er (frequentative)", origin: "Old English: lengan (to prolong) ← lang (long)", mnemonic: "时间变长(long/ling)→流连徘徊" },
    cognates: [
      { word: "long", meaning: "长的；渴望" },
      { word: "longing", meaning: "渴望（延伸的感觉）" },
      { word: "length", meaning: "长度" }
    ],
    synonyms: [
      { word: "loiter", nuance: "闲逛，带贬义", formality: "neutral" },
      { word: "dawdle", nuance: "磨蹭，浪费时间", formality: "informal" },
      { word: "tarry", nuance: "逞留，文学化", formality: "formal" }
    ],
    collocations: [
      { pattern: "linger on", example: "The smell of coffee lingered on." },
      { pattern: "linger over", example: "They lingered over dessert." },
      { pattern: "linger in one's mind", example: "The melody lingered in my mind." }
    ],
    layers: [
      { level: "物理层", meaning: "身体逞留不走", example: "She lingered at the doorway." },
      { level: "认知层", meaning: "思绪/记忆久久不散", example: "Doubts lingered in his mind." },
      { level: "精神层", meaning: "对美好事物的留恋", example: "Let your soul linger in moments of grace." }
    ]
  },
  "forge": {
    etymology: { roots: "forg- (to make/shape in fire)", origin: "Latin: fabricare (to fashion) → Old French: forgier (to forge)", mnemonic: "在火炉(forge)中敲打塑造→锻造" },
    cognates: [
      { word: "fabric", meaning: "织物（制作的东西）" },
      { word: "fabricate", meaning: "制造；捏造" },
      { word: "factory", meaning: "工厂（制造场所）" }
    ],
    synonyms: [
      { word: "create", nuance: "创造，通用", formality: "neutral" },
      { word: "build", nuance: "建造，日常", formality: "informal" },
      { word: "fashion", nuance: "精心塑造", formality: "formal" }
    ],
    collocations: [
      { pattern: "forge + ahead", example: "The company forged ahead with its plans." },
      { pattern: "forge + a path", example: "She forged a new path in science." },
      { pattern: "forge + bonds", example: "They forged strong bonds during the project." }
    ],
    layers: [
      { level: "物理层", meaning: "用火锻造金属", example: "The blacksmith forged a sword." },
      { level: "认知层", meaning: "建立关系/开创道路", example: "Two nations forged a historic alliance." },
      { level: "精神层", meaning: "在磨难中锻炼意志", example: "Character is forged in the fires of adversity." }
    ]
  },
  "nurture": {
    etymology: { roots: "nutr- (nourish) + -ure", origin: "Latin: nutritura (nourishment) ← nutrire (to nourish)", mnemonic: "提供营养(nutr)→培育成长" },
    cognates: [
      { word: "nutrition", meaning: "营养" },
      { word: "nutrient", meaning: "营养素" },
      { word: "nurse", meaning: "护士（哺育者）" }
    ],
    synonyms: [
      { word: "foster", nuance: "培养，带保护意味", formality: "formal" },
      { word: "raise", nuance: "抬举，通用", formality: "neutral" },
      { word: "bring up", nuance: "抱大，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "nurture + talent", example: "Schools should nurture young talent." },
      { pattern: "nurture + growth", example: "The program nurtures personal growth." },
      { pattern: "carefully nurture", example: "She carefully nurtured the seedlings." }
    ],
    layers: [
      { level: "物理层", meaning: "嗂养身体", example: "A mother nurtures her baby with milk." },
      { level: "认知层", meaning: "培养能力与兴趣", example: "The mentor nurtured her analytical skills." },
      { level: "精神层", meaning: "滋养心灵", example: "Nurture your soul with kindness and gratitude." }
    ]
  },
  "diminish": {
    etymology: { roots: "di- (apart) + minish (make small)", origin: "Latin: diminuere (to lessen) ← minuere (to make small)", mnemonic: "拆开(di)变小(min)→减少" },
    cognates: [
      { word: "minute", meaning: "微小的；分钟" },
      { word: "minor", meaning: "较小的；未成年人" },
      { word: "minimum", meaning: "最小值" }
    ],
    synonyms: [
      { word: "decrease", nuance: "减少，通用", formality: "neutral" },
      { word: "dwindle", nuance: "逐渐减少至很少", formality: "neutral" },
      { word: "shrink", nuance: "缩小，偏口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "diminish + returns", example: "The law of diminishing returns applies here." },
      { pattern: "greatly diminish", example: "The scandal greatly diminished his reputation." },
      { pattern: "diminish in importance", example: "The issue diminished in importance over time." }
    ],
    layers: [
      { level: "物理层", meaning: "体积/数量减少", example: "The water supply diminished rapidly." },
      { level: "认知层", meaning: "影响力/价值降低", example: "His authority diminished after the failure." },
      { level: "精神层", meaning: "贬低他人价值", example: "Never diminish another person's worth." }
    ]
  },
  "abandon": {
    etymology: { roots: "a- (to) + bandon (control/jurisdiction)", origin: "Old French: abandoner (to surrender) ← à bandon (at one's disposal)", mnemonic: "放弃控制权(bandon)→抛弃" },
    cognates: [
      { word: "ban", meaning: "禁止（控制）" },
      { word: "bandit", meaning: "强盗（被放逐者）" },
      { word: "contraband", meaning: "走私品（违禁品）" }
    ],
    synonyms: [
      { word: "desert", nuance: "逃离、抛弃责任", formality: "neutral" },
      { word: "forsake", nuance: "背弃，文学化", formality: "formal" },
      { word: "ditch", nuance: "丢弃，俗语", formality: "informal" }
    ],
    collocations: [
      { pattern: "abandon + hope", example: "Never abandon hope." },
      { pattern: "abandon + ship", example: "The captain ordered to abandon ship." },
      { pattern: "with reckless abandon", example: "She danced with reckless abandon." }
    ],
    layers: [
      { level: "物理层", meaning: "离开某地/某物", example: "They abandoned the sinking ship." },
      { level: "认知层", meaning: "放弃计划/信念", example: "The company abandoned the project." },
      { level: "精神层", meaning: "完全释放自我", example: "She sang with wild abandon, free of all inhibition." }
    ]
  },
  "devote": {
    etymology: { roots: "de- (completely) + vot (vow)", origin: "Latin: devovere (to vow completely) ← votum (vow)", mnemonic: "完全(de)许愿(vot)→奉献" },
    cognates: [
      { word: "vote", meaning: "投票（表达意愿）" },
      { word: "vow", meaning: "誓言" },
      { word: "devotion", meaning: "奉献；虔诚" }
    ],
    synonyms: [
      { word: "dedicate", nuance: "专注于某事", formality: "formal" },
      { word: "commit", nuance: "投入、承诺", formality: "neutral" },
      { word: "give oneself to", nuance: "全身心投入，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "devote + time to", example: "She devoted years to the research." },
      { pattern: "devote + oneself to", example: "He devoted himself to public service." },
      { pattern: "devote + energy", example: "Devote your energy to what matters most." }
    ],
    layers: [
      { level: "物理层", meaning: "把时间/精力用于", example: "She devoted three hours to practice daily." },
      { level: "认知层", meaning: "专注于事业", example: "He devoted his career to education." },
      { level: "精神层", meaning: "全然奉献于信仰/理想", example: "She devoted her life to the service of others." }
    ]
  },
  "shatter": {
    etymology: { roots: "shatter- (to break apart)", origin: "Middle English: schateren (to scatter/break) ← possibly imitative origin", mnemonic: "声音像“sha-ter”的碎裂声→粉碎" },
    cognates: [
      { word: "scatter", meaning: "散开（碎片飞散）" },
      { word: "shatter-proof", meaning: "防碎的" },
      { word: "shard", meaning: "碎片" }
    ],
    synonyms: [
      { word: "smash", nuance: "猛力打碎，口语", formality: "informal" },
      { word: "demolish", nuance: "彻底摧毁", formality: "formal" },
      { word: "break", nuance: "打破，通用", formality: "neutral" }
    ],
    collocations: [
      { pattern: "shatter + glass", example: "The ball shattered the window." },
      { pattern: "shatter + dreams", example: "The news shattered her dreams." },
      { pattern: "shatter + expectations", example: "She shattered all expectations." }
    ],
    layers: [
      { level: "物理层", meaning: "物体破碎成片", example: "The vase shattered on the floor." },
      { level: "认知层", meaning: "打破记录/预期", example: "She shattered the world record." },
      { level: "精神层", meaning: "心灵的崩溃", example: "His betrayal shattered her trust completely." }
    ]
  },
  "reckon": {
    etymology: { roots: "reckon- (to count/arrange)", origin: "Old English: gerecenian (to arrange, count) ← Proto-Germanic: *rekenjan", mnemonic: "排列整理(reckon)来计算→估计/认为" },
    cognates: [
      { word: "reckoning", meaning: "清算；审判日" },
      { word: "reckon with", meaning: "应对；计算在内" },
      { word: "recognize", meaning: "识别（重新认识）" }
    ],
    synonyms: [
      { word: "calculate", nuance: "精确计算", formality: "neutral" },
      { word: "figure", nuance: "估算，口语", formality: "informal" },
      { word: "estimate", nuance: "估计，中性", formality: "neutral" }
    ],
    collocations: [
      { pattern: "reckon with", example: "She is a force to be reckoned with." },
      { pattern: "I reckon", example: "I reckon it will rain tomorrow." },
      { pattern: "day of reckoning", example: "The day of reckoning has come." }
    ],
    layers: [
      { level: "物理层", meaning: "数字计算", example: "He reckoned the total cost." },
      { level: "认知层", meaning: "估计、认为", example: "I reckon we should leave early." },
      { level: "精神层", meaning: "审判与清算", example: "Every soul must reckon with its own deeds." }
    ]
  },
  "behold": {
    etymology: { roots: "be- (thoroughly) + hold (hold/observe)", origin: "Old English: behealdan (to hold in view, observe)", mnemonic: "彻底(be)抓住(hold)视线→瞻仰" },
    cognates: [
      { word: "hold", meaning: "持有；保持" },
      { word: "beholder", meaning: "观看者" },
      { word: "beholden", meaning: "感恩的（被抛住的）" }
    ],
    synonyms: [
      { word: "observe", nuance: "观察，中性", formality: "neutral" },
      { word: "gaze upon", nuance: "凝视，文学化", formality: "formal" },
      { word: "look at", nuance: "看，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "behold + the beauty", example: "Behold the beauty of the sunset!" },
      { pattern: "lo and behold", example: "Lo and behold, it actually worked!" },
      { pattern: "a sight to behold", example: "The aurora was a sight to behold." }
    ],
    layers: [
      { level: "物理层", meaning: "用眼睛观看", example: "Behold the magnificent waterfall!" },
      { level: "认知层", meaning: "理解与认识", example: "Behold the implications of this discovery." },
      { level: "精神层", meaning: "带着敬畏与惊叹瞻仰", example: "Behold the wonder of creation." }
    ]
  },
  "kindle": {
    etymology: { roots: "kind- (birth/fire)", origin: "Old Norse kynda (to light a fire)", mnemonic: "点亮火种(kynda)→点燃/激起" },
    cognates: [
      { word: "candle", meaning: "蜡烛（小火苗）" },
      { word: "incendiary", meaning: "燃烧的；煎动的" },
      { word: "Kindle", meaning: "Kindle阅读器（点燃知识）" }
    ],
    synonyms: [
      { word: "ignite", nuance: "点火，正式", formality: "neutral" },
      { word: "spark", nuance: "引发火花", formality: "neutral" },
      { word: "light up", nuance: "点亮，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "kindle + a fire", example: "He kindled a fire in the fireplace." },
      { pattern: "kindle + interest", example: "The book kindled her interest in science." },
      { pattern: "kindle + hope", example: "A small victory can kindle new hope." }
    ],
    layers: [
      { level: "物理层", meaning: "点燃火焰", example: "He kindled the campfire with dry twigs." },
      { level: "认知层", meaning: "激发兴趣/想法", example: "The lecture kindled his curiosity." },
      { level: "精神层", meaning: "点燃内心的热情与信念", example: "Faith is a flame that kindles in the darkest hour." }
    ]
  },
  "perceive": {
    etymology: { roots: "per- (through/thoroughly) + ceive (take/seize)", origin: "Latin: percipere (to seize entirely) ← capere (to take)", mnemonic: "彻底(per)抓取(ceive/cap)信息→感知" },
    cognates: [
      { word: "receive", meaning: "接收（再次获取）" },
      { word: "conceive", meaning: "构想（一起抓取）" },
      { word: "deceive", meaning: "欺骗（拿走真相）" }
    ],
    synonyms: [
      { word: "notice", nuance: "注意到，日常", formality: "informal" },
      { word: "detect", nuance: "察觉到，中性", formality: "neutral" },
      { word: "discern", nuance: "辨别，更精细", formality: "formal" }
    ],
    collocations: [
      { pattern: "perceive + as", example: "She is perceived as a strong leader." },
      { pattern: "perceive + a threat", example: "The animal perceived a threat nearby." },
      { pattern: "widely perceived", example: "The policy was widely perceived as unfair." }
    ],
    layers: [
      { level: "物理层", meaning: "感官感知", example: "Bats perceive the world through echolocation." },
      { level: "认知层", meaning: "理解与解读", example: "Different cultures perceive time differently." },
      { level: "精神层", meaning: "洞察更深的真理", example: "The mystic perceives truths hidden from ordinary sight." }
    ]
  },
  "dwell": {
    etymology: { roots: "dwell- (to delay/remain)", origin: "Old English: dwellan (to lead astray, delay) → Middle English: to remain", mnemonic: "停留不走(dwell)→居住/沉浸" },
    cognates: [
      { word: "dwelling", meaning: "住所" },
      { word: "dwell on", meaning: "细想；纠结于" },
      { word: "dweller", meaning: "居民" }
    ],
    synonyms: [
      { word: "reside", nuance: "居住，正式", formality: "formal" },
      { word: "live", nuance: "住，通用", formality: "informal" },
      { word: "inhabit", nuance: "栖息，中性", formality: "neutral" }
    ],
    collocations: [
      { pattern: "dwell on", example: "Don't dwell on past mistakes." },
      { pattern: "dwell in", example: "They dwell in a small village." },
      { pattern: "dwell among", example: "She chose to dwell among the locals." }
    ],
    layers: [
      { level: "物理层", meaning: "居住在某地", example: "They dwell in the mountains." },
      { level: "认知层", meaning: "反复思考/纠结", example: "She tends to dwell on minor details." },
      { level: "精神层", meaning: "心灵的安住之所", example: "Peace dwells within a grateful heart." }
    ]
  },
  "surrender": {
    etymology: { roots: "sur- (over) + render (give back)", origin: "Old French: surrendre (to give over) ← sur- + rendre (to give back)", mnemonic: "把一切交出(render)去(sur-)→投降" },
    cognates: [
      { word: "render", meaning: "给予；渲染" },
      { word: "rendition", meaning: "演绎；移交" },
      { word: "rent", meaning: "租金（交出的费用）" }
    ],
    synonyms: [
      { word: "yield", nuance: "让步，比较温和", formality: "neutral" },
      { word: "capitulate", nuance: "正式投降", formality: "formal" },
      { word: "give up", nuance: "放弃，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "surrender to", example: "The army surrendered to the enemy." },
      { pattern: "unconditional surrender", example: "They demanded unconditional surrender." },
      { pattern: "never surrender", example: "Churchill said: we shall never surrender." }
    ],
    layers: [
      { level: "物理层", meaning: "军事投降", example: "The garrison surrendered at dawn." },
      { level: "认知层", meaning: "放弃控制/抵抗", example: "He surrendered his claim to the property." },
      { level: "精神层", meaning: "臣服于更高力量", example: "To surrender the ego is the path to inner peace." }
    ]
  },
  "manifest": {
    etymology: { roots: "mani- (hand) + fest (struck/seized)", origin: "Latin: manifestus (caught in the act, palpable) ← manus (hand) + -festus (struck)", mnemonic: "用手(mani)能触摸到(fest)→显现" },
    cognates: [
      { word: "manual", meaning: "手动的（用手的）" },
      { word: "manufacture", meaning: "制造（手工制作）" },
      { word: "manipulate", meaning: "操控（用手控制）" }
    ],
    synonyms: [
      { word: "show", nuance: "展示，通用", formality: "informal" },
      { word: "demonstrate", nuance: "证明，中性", formality: "neutral" },
      { word: "evince", nuance: "明确显示，学术", formality: "formal" }
    ],
    collocations: [
      { pattern: "manifest + itself", example: "The disease manifests itself through fever." },
      { pattern: "manifest + destiny", example: "Manifest Destiny shaped American history." },
      { pattern: "clearly manifest", example: "Her talent was clearly manifest." }
    ],
    layers: [
      { level: "物理层", meaning: "物质上显现", example: "Symptoms manifested in the patient." },
      { level: "认知层", meaning: "让想法成为现实", example: "She manifested her vision through hard work." },
      { level: "精神层", meaning: "内在的外在显化", example: "Your thoughts manifest your reality." }
    ]
  },
  "vanquish": {
    etymology: { roots: "vanqu- (to conquer)", origin: "Latin: vincere (to conquer) → Old French: vainquir → vanquish", mnemonic: "像胜利者(vinc/vanqu)一样→彻底击败" },
    cognates: [
      { word: "invincible", meaning: "不可战胜的" },
      { word: "convince", meaning: "说服（用论据征服）" },
      { word: "victor", meaning: "胜利者" }
    ],
    synonyms: [
      { word: "defeat", nuance: "打败，通用", formality: "neutral" },
      { word: "conquer", nuance: "征服，带占领意味", formality: "neutral" },
      { word: "crush", nuance: "压倒性击败，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "vanquish + an enemy", example: "The hero vanquished the dragon." },
      { pattern: "vanquish + evil", example: "Good shall vanquish evil." },
      { pattern: "utterly vanquish", example: "The rebels were utterly vanquished." }
    ],
    layers: [
      { level: "物理层", meaning: "在战斗中击败", example: "The knight vanquished his opponent." },
      { level: "认知层", meaning: "在辩论中压倒", example: "She vanquished every counterargument." },
      { level: "精神层", meaning: "战胜内心的阴暗", example: "He vanquished his deepest fears." }
    ]
  },
  "reconcile": {
    etymology: { roots: "re- (again) + concile (bring together)", origin: "Latin: reconciliare (to bring together again) ← concilium (council)", mnemonic: "再次(re)聚在一起(concile)→和解" },
    cognates: [
      { word: "council", meaning: "委员会（聚集）" },
      { word: "conciliate", meaning: "安抚；调解" },
      { word: "conciliation", meaning: "和解；调停" }
    ],
    synonyms: [
      { word: "resolve", nuance: "解决分歧", formality: "neutral" },
      { word: "harmonize", nuance: "使和谐一致", formality: "formal" },
      { word: "make up", nuance: "和好，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "reconcile + differences", example: "They reconciled their differences." },
      { pattern: "reconcile + with", example: "She reconciled with her estranged brother." },
      { pattern: "hard to reconcile", example: "These two views are hard to reconcile." }
    ],
    layers: [
      { level: "物理层", meaning: "人与人和解", example: "The couple reconciled after the argument." },
      { level: "认知层", meaning: "调和矛盾的观点", example: "Scientists reconcile theory with observation." },
      { level: "精神层", meaning: "与自我/命运和解", example: "She finally reconciled herself to the loss." }
    ]
  },
  "compel": {
    etymology: { roots: "com- (together) + pel (drive)", origin: "Latin: compellere (to drive together) ← pellere (to drive)", mnemonic: "一起(com)驱动(pel)→迫使" },
    cognates: [
      { word: "propel", meaning: "推进（向前驱动）" },
      { word: "expel", meaning: "驱逐（向外驱动）" },
      { word: "repel", meaning: "击退（向回驱动）" }
    ],
    synonyms: [
      { word: "force", nuance: "强迫，直接", formality: "neutral" },
      { word: "oblige", nuance: "使不得不，礼貌", formality: "formal" },
      { word: "make", nuance: "让某人做，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "compel + sb to do", example: "Curiosity compelled her to investigate." },
      { pattern: "feel compelled", example: "I felt compelled to speak up." },
      { pattern: "compelling + evidence", example: "The evidence was compelling." }
    ],
    layers: [
      { level: "物理层", meaning: "用外力迫使", example: "The guards compelled him to move." },
      { level: "认知层", meaning: "强有力地说服", example: "The argument compelled us to rethink." },
      { level: "精神层", meaning: "内心深处的驱动力", example: "A deep sense of justice compelled her to act." }
    ]
  },
  "unravel": {
    etymology: { roots: "un- (reverse) + ravel (tangle)", origin: "Dutch: ravelen (to tangle) → English: unravel (to untangle)", mnemonic: "反向(un)解开纠结(ravel)→解开" },
    cognates: [
      { word: "ravel", meaning: "纠结（也可指解开）" },
      { word: "travel", meaning: "旅行（古法语“劳作”）" },
      { word: "unraveling", meaning: "解开中；崩解中" }
    ],
    synonyms: [
      { word: "untangle", nuance: "解开纠结，口语", formality: "informal" },
      { word: "decipher", nuance: "破解密码/难懂的东西", formality: "formal" },
      { word: "solve", nuance: "解决，通用", formality: "neutral" }
    ],
    collocations: [
      { pattern: "unravel + a mystery", example: "Detectives unraveled the mystery." },
      { pattern: "begin to unravel", example: "His alibi began to unravel." },
      { pattern: "unravel + the truth", example: "Journalists unraveled the truth." }
    ],
    layers: [
      { level: "物理层", meaning: "解开缠绕的线", example: "She unraveled the tangled yarn." },
      { level: "认知层", meaning: "解开复杂问题", example: "Scientists unraveled the genome sequence." },
      { level: "精神层", meaning: "解开内心的困惑", example: "Therapy helped her unravel years of emotional knots." }
    ]
  },
  "bestow": {
    etymology: { roots: "be- (about/upon) + stow (place)", origin: "Old English: bestōwian (to place, store) ← stōw (place)", mnemonic: "把东西放(stow)到某人身上(be-)→赐予" },
    cognates: [
      { word: "stow", meaning: "存放；装载" },
      { word: "stowaway", meaning: "偷渡者" },
      { word: "bestowment", meaning: "赠予（名词）" }
    ],
    synonyms: [
      { word: "grant", nuance: "正式授予", formality: "formal" },
      { word: "give", nuance: "给予，通用", formality: "informal" },
      { word: "confer", nuance: "授予荣誉/学位", formality: "formal" }
    ],
    collocations: [
      { pattern: "bestow + upon", example: "The queen bestowed the title upon him." },
      { pattern: "bestow + an honor", example: "The university bestowed an honorary degree." },
      { pattern: "bestow + a gift", example: "Nature bestowed great beauty on this land." }
    ],
    layers: [
      { level: "物理层", meaning: "送出礼物", example: "He bestowed a ring upon his bride." },
      { level: "认知层", meaning: "授予荣誉/权力", example: "The committee bestowed the award on her." },
      { level: "精神层", meaning: "天赐的禁礼与使命", example: "Life bestows upon us both gifts and burdens." }
    ]
  },
  "strive": {
    etymology: { roots: "strive- (to quarrel/contend)", origin: "Old French: estriver (to quarrel, compete) ← Germanic origin", mnemonic: "像竞争(strive)一样努力→奋斗" },
    cognates: [
      { word: "strife", meaning: "冲突；纷争" },
      { word: "striving", meaning: "奋斗中（现在分词）" },
      { word: "striver", meaning: "奋斗者" }
    ],
    synonyms: [
      { word: "endeavor", nuance: "努力追求，正式", formality: "formal" },
      { word: "struggle", nuance: "挣扎努力", formality: "neutral" },
      { word: "push hard", nuance: "加倍努力，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "strive for", example: "We strive for excellence." },
      { pattern: "strive to achieve", example: "She strove to achieve her goals." },
      { pattern: "constantly strive", example: "He constantly strives to improve." }
    ],
    layers: [
      { level: "物理层", meaning: "身体上的拼搏", example: "Athletes strive to break records." },
      { level: "认知层", meaning: "智力上的追求", example: "Researchers strive for breakthroughs." },
      { level: "精神层", meaning: "对完美与意义的永恒追求", example: "The soul strives toward truth and beauty." }
    ]
  },
  "unveil": {
    etymology: { roots: "un- (remove) + veil (covering)", origin: "Old French: voile (veil) ← Latin: velum (covering, sail)", mnemonic: "去掉(un)面纱(veil)→揭幕" },
    cognates: [
      { word: "veil", meaning: "面纱；遮罩" },
      { word: "reveal", meaning: "揭示（再次揭开）" },
      { word: "velum", meaning: "膜（解剖学）" }
    ],
    synonyms: [
      { word: "reveal", nuance: "揭示，通用", formality: "neutral" },
      { word: "disclose", nuance: "披露信息", formality: "formal" },
      { word: "show off", nuance: "展示，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "unveil + a plan", example: "The CEO unveiled the new strategy." },
      { pattern: "unveil + a statue", example: "The mayor unveiled the statue." },
      { pattern: "officially unveil", example: "Apple officially unveiled the new iPhone." }
    ],
    layers: [
      { level: "物理层", meaning: "揭开覆盖物", example: "They unveiled the monument at the ceremony." },
      { level: "认知层", meaning: "公布新信息/产品", example: "The company unveiled its quarterly results." },
      { level: "精神层", meaning: "揭示深层真理", example: "Art unveils the hidden beauty of existence." }
    ]
  },
  "relinquish": {
    etymology: { roots: "re- (back) + linqu (leave)", origin: "Latin: relinquere (to leave behind) ← linquere (to leave)", mnemonic: "向后(re)放开(linqu)→放弃" },
    cognates: [
      { word: "delinquent", meaning: "违法者（离开正道）" },
      { word: "relict", meaning: "遗物；残留" },
      { word: "relic", meaning: "遗迹（被留下的）" }
    ],
    synonyms: [
      { word: "surrender", nuance: "交出控制权", formality: "neutral" },
      { word: "forfeit", nuance: "被迫放弃", formality: "formal" },
      { word: "let go of", nuance: "放手，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "relinquish + control", example: "He relinquished control of the company." },
      { pattern: "relinquish + power", example: "The king relinquished power peacefully." },
      { pattern: "reluctantly relinquish", example: "She reluctantly relinquished her position." }
    ],
    layers: [
      { level: "物理层", meaning: "松开手中之物", example: "He relinquished the weapon to the officer." },
      { level: "认知层", meaning: "放弃权力/职位", example: "She relinquished her role as chairperson." },
      { level: "精神层", meaning: "放下执念与贪成", example: "To relinquish attachment is to find freedom." }
    ]
  },
  "proclaim": {
    etymology: { roots: "pro- (forth) + claim (cry out)", origin: "Latin: proclamare (to cry out publicly) ← clamare (to shout)", mnemonic: "向前(pro)大声喊(claim)→宣告" },
    cognates: [
      { word: "claim", meaning: "声称；要求" },
      { word: "exclaim", meaning: "惊叫" },
      { word: "acclaim", meaning: "称赞（向着喊好）" }
    ],
    synonyms: [
      { word: "announce", nuance: "宣布，通用", formality: "neutral" },
      { word: "declare", nuance: "正式声明", formality: "formal" },
      { word: "shout out", nuance: "大声说出，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "proclaim + independence", example: "The nation proclaimed its independence." },
      { pattern: "proudly proclaim", example: "She proudly proclaimed her achievement." },
      { pattern: "proclaim + a victory", example: "The general proclaimed victory." }
    ],
    layers: [
      { level: "物理层", meaning: "大声宣告", example: "The herald proclaimed the news in the square." },
      { level: "认知层", meaning: "正式公布决定", example: "The government proclaimed a state of emergency." },
      { level: "精神层", meaning: "宣扬信仰与真理", example: "The prophet proclaimed a message of hope." }
    ]
  },
  "harbor": {
    etymology: { roots: "har- (army) + bor (shelter)", origin: "Old English: herebeorg (army shelter) ← here (army) + beorg (shelter)", mnemonic: "军队(har)的避难所(bor)→港湾/庇护" },
    cognates: [
      { word: "harbinger", meaning: "先驱（提前安排住所者）" },
      { word: "harbour", meaning: "港湾（英式拼写）" },
      { word: "herberge", meaning: "旅馆（古法语）" }
    ],
    synonyms: [
      { word: "shelter", nuance: "提供保护", formality: "neutral" },
      { word: "conceal", nuance: "隐藏，偏负面", formality: "formal" },
      { word: "hold onto", nuance: "内心持有，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "harbor + a grudge", example: "He harbored a grudge for years." },
      { pattern: "harbor + doubts", example: "She harbored doubts about the plan." },
      { pattern: "harbor + fugitives", example: "It is illegal to harbor fugitives." }
    ],
    layers: [
      { level: "物理层", meaning: "提供避风港", example: "The bay harbored dozens of ships." },
      { level: "认知层", meaning: "内心怀有想法", example: "She harbored secret ambitions." },
      { level: "精神层", meaning: "心灵深处藏匿的情感", example: "Do not harbor bitterness; let it go." }
    ]
  },
  "heed": {
    etymology: { roots: "heed- (to care for)", origin: "Old English: hēdan (to care for, observe) ← Proto-Germanic: *hōdjan", mnemonic: "用心(heed)关注→留心/听从" },
    cognates: [
      { word: "heedful", meaning: "留心的；谨慎的" },
      { word: "heedless", meaning: "不留心的；轻率的" },
      { word: "heedfulness", meaning: "警觉；注意" }
    ],
    synonyms: [
      { word: "listen to", nuance: "听从，口语", formality: "informal" },
      { word: "observe", nuance: "遵守；注意到", formality: "neutral" },
      { word: "regard", nuance: "重视，正式", formality: "formal" }
    ],
    collocations: [
      { pattern: "heed + a warning", example: "You should heed the warning signs." },
      { pattern: "heed + advice", example: "She heeded her mentor's advice." },
      { pattern: "pay heed to", example: "Pay heed to the changing weather." }
    ],
    layers: [
      { level: "物理层", meaning: "留意周围环境", example: "Heed the traffic signals." },
      { level: "认知层", meaning: "认真对待建议", example: "Wise leaders heed the counsel of others." },
      { level: "精神层", meaning: "倾听内心的声音", example: "Heed the quiet voice of your conscience." }
    ]
  },
  "venture": {
    etymology: { roots: "vent- (come/arrive) + -ure", origin: "Latin: adventura (about to happen) ← advenire (to arrive)", mnemonic: "冒险前往(vent-come)→冒险" },
    cognates: [
      { word: "adventure", meaning: "冒险（去往的事）" },
      { word: "advent", meaning: "到来" },
      { word: "event", meaning: "事件（发生的事）" }
    ],
    synonyms: [
      { word: "dare", nuance: "敢于尝试", formality: "neutral" },
      { word: "risk", nuance: "冒着风险", formality: "neutral" },
      { word: "take a chance", nuance: "碰碰运气，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "venture into", example: "They ventured into unknown territory." },
      { pattern: "venture out", example: "She ventured out into the storm." },
      { pattern: "joint venture", example: "The two firms formed a joint venture." }
    ],
    layers: [
      { level: "物理层", meaning: "身体上的冒险前行", example: "They ventured deep into the jungle." },
      { level: "认知层", meaning: "尝试新领域/新事业", example: "She ventured into entrepreneurship." },
      { level: "精神层", meaning: "勇敢走出舒适区", example: "To venture beyond fear is to truly live." }
    ]
  },
  "falter": {
    etymology: { roots: "falt- (to stumble/waver)", origin: "Middle English: falteren (to stumble) ← Old Norse: faltrask (to be burdened)", mnemonic: "脚步踉跚(falt)→蹌躄/动摇" },
    cognates: [
      { word: "fault", meaning: "过失；断层" },
      { word: "faltering", meaning: "犹豫的；不稳的" },
      { word: "default", meaning: "违约（失败的结果）" }
    ],
    synonyms: [
      { word: "hesitate", nuance: "犹豫不决", formality: "neutral" },
      { word: "waver", nuance: "动摇不定", formality: "neutral" },
      { word: "stumble", nuance: "绊倒，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "falter in", example: "His confidence never faltered." },
      { pattern: "begin to falter", example: "The economy began to falter." },
      { pattern: "falter under pressure", example: "She did not falter under pressure." }
    ],
    layers: [
      { level: "物理层", meaning: "身体蹌躄/结巴", example: "His voice faltered as he spoke." },
      { level: "认知层", meaning: "信心/动力动摇", example: "The team's resolve began to falter." },
      { level: "精神层", meaning: "信念动摇", example: "Even the strongest faith may falter in darkness." }
    ]
  },
  "ignite": {
    etymology: { roots: "ign- (fire) + -ite", origin: "Latin: ignire (to set on fire) ← ignis (fire)", mnemonic: "火(ignis)点燃→点燃" },
    cognates: [
      { word: "ignition", meaning: "点火（引擎启动）" },
      { word: "igneous", meaning: "火成的（岩石）" },
      { word: "ignitable", meaning: "可燃的" }
    ],
    synonyms: [
      { word: "kindle", nuance: "点燃，偏文学", formality: "formal" },
      { word: "spark", nuance: "引发火花", formality: "neutral" },
      { word: "set fire to", nuance: "放火，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "ignite + a debate", example: "The article ignited a fierce debate." },
      { pattern: "ignite + passion", example: "The speech ignited passion in the crowd." },
      { pattern: "ignite + a revolution", example: "The event ignited a revolution." }
    ],
    layers: [
      { level: "物理层", meaning: "点燃火焰", example: "A spark ignited the dry leaves." },
      { level: "认知层", meaning: "引发讨论/运动", example: "The scandal ignited public outrage." },
      { level: "精神层", meaning: "点燃内心的火焰", example: "A single act of courage can ignite the human spirit." }
    ]
  },
  "evoke": {
    etymology: { roots: "e- (out) + voke (call)", origin: "Latin: evocare (to call out) ← vocare (to call)", mnemonic: "召唤(voke)出来(e-)→唤起" },
    cognates: [
      { word: "invoke", meaning: "调用；祈求" },
      { word: "provoke", meaning: "激怒（向前召唤）" },
      { word: "vocal", meaning: "声音的（与叫唤有关）" }
    ],
    synonyms: [
      { word: "elicit", nuance: "引出反应", formality: "formal" },
      { word: "stir up", nuance: "搅动、唤起，口语", formality: "informal" },
      { word: "arouse", nuance: "唤醒、激发", formality: "neutral" }
    ],
    collocations: [
      { pattern: "evoke + memories", example: "The song evoked childhood memories." },
      { pattern: "evoke + emotions", example: "The painting evokes strong emotions." },
      { pattern: "evoke + a response", example: "His speech evoked a powerful response." }
    ],
    layers: [
      { level: "物理层", meaning: "触发感官反应", example: "The scent evoked the taste of home cooking." },
      { level: "认知层", meaning: "引发联想与思考", example: "The metaphor evoked a new perspective." },
      { level: "精神层", meaning: "触动灵魂深处", example: "Great music evokes the ineffable." }
    ]
  },
  "alleviate": {
    etymology: { roots: "al- (to) + levi (light/lift) + -ate", origin: "Latin: alleviare (to lighten) ← levis (light)", mnemonic: "让负担变轻(levi-light)→减轻" },
    cognates: [
      { word: "levity", meaning: "轻浮；诩谐" },
      { word: "elevate", meaning: "提升（使向上变轻）" },
      { word: "lever", meaning: "杠杆（使变轻的工具）" }
    ],
    synonyms: [
      { word: "relieve", nuance: "缓解，通用", formality: "neutral" },
      { word: "mitigate", nuance: "减轻严重性", formality: "formal" },
      { word: "ease", nuance: "使轻松，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "alleviate + pain", example: "The medicine helped alleviate the pain." },
      { pattern: "alleviate + poverty", example: "The program aims to alleviate poverty." },
      { pattern: "alleviate + suffering", example: "Aid workers strive to alleviate suffering." }
    ],
    layers: [
      { level: "物理层", meaning: "减轻身体疼痛", example: "Ice can alleviate swelling." },
      { level: "认知层", meaning: "缓解压力/负担", example: "Delegation alleviates managerial stress." },
      { level: "精神层", meaning: "减轻心灵的苦痛", example: "Compassion alleviates the suffering of the soul." }
    ]
  },
  "yearn": {
    etymology: { roots: "yearn- (to desire eagerly)", origin: "Old English: giernan (to desire) ← georn (eager, desirous)", mnemonic: "内心热切(georn/yearn)渴望→渴望" },
    cognates: [
      { word: "yearning", meaning: "渴望（名词）" },
      { word: "earn", meaning: "赚得（努力追求而得）" },
      { word: "yearningly", meaning: "渴望地" }
    ],
    synonyms: [
      { word: "long for", nuance: "渴望，通用", formality: "neutral" },
      { word: "crave", nuance: "强烈渴望，带身体感", formality: "neutral" },
      { word: "pine for", nuance: "因思念而愁苦", formality: "formal" }
    ],
    collocations: [
      { pattern: "yearn for", example: "She yearned for freedom." },
      { pattern: "deeply yearn", example: "He deeply yearned to return home." },
      { pattern: "yearn to do", example: "Children yearn to explore the world." }
    ],
    layers: [
      { level: "物理层", meaning: "身体上的渴望", example: "After days without food, he yearned for a meal." },
      { level: "认知层", meaning: "对目标的追求", example: "She yearned for academic recognition." },
      { level: "精神层", meaning: "灵魂对归属的渴望", example: "The soul yearns for something beyond this world." }
    ]
  },
  "dwindle": {
    etymology: { roots: "dwin- (waste away) + -le (frequentative)", origin: "Old English: dwīnan (to waste away) + -le (repeated action)", mnemonic: "不断(le)消耗(dwin)→逐渐减少" },
    cognates: [
      { word: "dwine", meaning: "消失（古英语）" },
      { word: "dwindling", meaning: "正在减少的" },
      { word: "pine", meaning: "愁苦而消瘦（相关词根）" }
    ],
    synonyms: [
      { word: "diminish", nuance: "正式地减少", formality: "formal" },
      { word: "shrink", nuance: "缩小，口语", formality: "informal" },
      { word: "decline", nuance: "下降，中性", formality: "neutral" }
    ],
    collocations: [
      { pattern: "dwindle to", example: "The crowd dwindled to a handful." },
      { pattern: "dwindle away", example: "Their savings dwindled away." },
      { pattern: "rapidly dwindle", example: "Resources are rapidly dwindling." }
    ],
    layers: [
      { level: "物理层", meaning: "物质逐渐减少", example: "The river dwindled to a trickle." },
      { level: "认知层", meaning: "影响力/兴趣消退", example: "Public interest dwindled after the scandal." },
      { level: "精神层", meaning: "希望与活力消失", example: "Without purpose, the spirit dwindles." }
    ]
  },
  "inhabit": {
    etymology: { roots: "in- (in) + habit (dwell/hold)", origin: "Latin: inhabitare (to dwell in) ← habitare (to dwell)", mnemonic: "在里面(in)居住(habit)→栖息" },
    cognates: [
      { word: "habit", meaning: "习惯（住在某状态）" },
      { word: "habitat", meaning: "栖息地" },
      { word: "habitation", meaning: "住所" }
    ],
    synonyms: [
      { word: "occupy", nuance: "占据，中性", formality: "neutral" },
      { word: "dwell in", nuance: "居住，偏文学", formality: "formal" },
      { word: "live in", nuance: "住在，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "inhabit + a region", example: "Polar bears inhabit the Arctic." },
      { pattern: "inhabit + a world", example: "We inhabit a world of rapid change." },
      { pattern: "densely inhabited", example: "The island is densely inhabited." }
    ],
    layers: [
      { level: "物理层", meaning: "居住在某地", example: "Thousands of species inhabit the rainforest." },
      { level: "认知层", meaning: "生活在某种环境中", example: "We inhabit an age of information overload." },
      { level: "精神层", meaning: "安住于某种心境", example: "She inhabits a world of imagination and wonder." }
    ]
  },
  "relish": {
    etymology: { roots: "relish- (taste/flavor)", origin: "Old French: reles (remainder, aftertaste) ← relaisser (to leave behind)", mnemonic: "回味(relish)留下的滋味→享受" },
    cognates: [
      { word: "release", meaning: "释放（放开）" },
      { word: "relish", meaning: "调味料（名词）" },
      { word: "relinquish", meaning: "放弃（留下而离开）" }
    ],
    synonyms: [
      { word: "enjoy", nuance: "享受，通用", formality: "informal" },
      { word: "savor", nuance: "细细品味", formality: "neutral" },
      { word: "delight in", nuance: "以此为乐", formality: "formal" }
    ],
    collocations: [
      { pattern: "relish + the opportunity", example: "She relished the opportunity to travel." },
      { pattern: "relish + a challenge", example: "He relishes a good challenge." },
      { pattern: "truly relish", example: "I truly relish quiet mornings." }
    ],
    layers: [
      { level: "物理层", meaning: "品尝美味", example: "He relished every bite of the meal." },
      { level: "认知层", meaning: "享受某种体验", example: "She relished the intellectual challenge." },
      { level: "精神层", meaning: "全然品味生活", example: "Relish every moment, for life is fleeting." }
    ]
  },
  "envision": {
    etymology: { roots: "en- (in/into) + vision (sight)", origin: "Latin: videre (to see) → visio (sight) → English: envision", mnemonic: "在内心(en)看到(vision)→展望" },
    cognates: [
      { word: "vision", meaning: "视觉；愿景" },
      { word: "visible", meaning: "可见的" },
      { word: "visionary", meaning: "有远见的人" }
    ],
    synonyms: [
      { word: "imagine", nuance: "想象，通用", formality: "neutral" },
      { word: "picture", nuance: "在脑中描绘，口语", formality: "informal" },
      { word: "foresee", nuance: "预见未来", formality: "formal" }
    ],
    collocations: [
      { pattern: "envision + a future", example: "She envisioned a better future." },
      { pattern: "envision + a world", example: "He envisioned a world without poverty." },
      { pattern: "hard to envision", example: "It is hard to envision such change." }
    ],
    layers: [
      { level: "物理层", meaning: "在脑海中构建画面", example: "She envisioned the finished building." },
      { level: "认知层", meaning: "规划未来路径", example: "The CEO envisioned a global expansion." },
      { level: "精神层", meaning: "对理想世界的憧憬", example: "Visionaries envision a more just and peaceful world." }
    ]
  },
  "obliterate": {
    etymology: { roots: "ob- (against) + liter (letter) + -ate", origin: "Latin: obliterare (to erase letters) ← littera (letter)", mnemonic: "把字迹(liter)抹去(ob-)→彻底消灭" },
    cognates: [
      { word: "literal", meaning: "字面的" },
      { word: "literature", meaning: "文学（文字作品）" },
      { word: "literate", meaning: "有读写能力的" }
    ],
    synonyms: [
      { word: "destroy", nuance: "摧毁，通用", formality: "neutral" },
      { word: "annihilate", nuance: "彻底消灭", formality: "formal" },
      { word: "wipe out", nuance: "全部消灭，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "completely obliterate", example: "The bombing completely obliterated the city." },
      { pattern: "obliterate + all traces", example: "They tried to obliterate all traces of evidence." },
      { pattern: "obliterate + from memory", example: "She wished to obliterate the event from memory." }
    ],
    layers: [
      { level: "物理层", meaning: "彻底摧毁物体", example: "The asteroid obliterated the landscape." },
      { level: "认知层", meaning: "抹去记录/痕迹", example: "The regime obliterated historical records." },
      { level: "精神层", meaning: "消除自我边界", example: "In deep meditation, the ego is obliterated." }
    ]
  },
  "commemorate": {
    etymology: { roots: "com- (together) + memor (mindful) + -ate", origin: "Latin: commemorare (to bring to mind) ← memor (mindful)", mnemonic: "一起(com)记住(memor)→纪念" },
    cognates: [
      { word: "memory", meaning: "记忆" },
      { word: "memorial", meaning: "纪念碑/馆" },
      { word: "memorize", meaning: "记住" }
    ],
    synonyms: [
      { word: "celebrate", nuance: "庆祝，偏欢乐", formality: "neutral" },
      { word: "honor", nuance: "尊崇，正式", formality: "formal" },
      { word: "remember", nuance: "记得，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "commemorate + an event", example: "We commemorate the founding of the nation." },
      { pattern: "commemorate + the fallen", example: "The monument commemorates the fallen soldiers." },
      { pattern: "annually commemorate", example: "They annually commemorate the anniversary." }
    ],
    layers: [
      { level: "物理层", meaning: "用仪式/建筑纪念", example: "A plaque commemorates the site of the battle." },
      { level: "认知层", meaning: "记住并传承历史", example: "The exhibition commemorates a pivotal era." },
      { level: "精神层", meaning: "羅念生命与牲牺", example: "We commemorate not just events, but the spirit behind them." }
    ]
  },
  "captivate": {
    etymology: { roots: "captiv- (captured) + -ate", origin: "Latin: captivare (to take captive) ← capere (to seize)", mnemonic: "像俘虏(captive)一样被抓住心→迷住" },
    cognates: [
      { word: "capture", meaning: "捕捉" },
      { word: "captive", meaning: "俘虏" },
      { word: "capable", meaning: "有能力的（能抓住的）" }
    ],
    synonyms: [
      { word: "fascinate", nuance: "令人着迷", formality: "neutral" },
      { word: "enchant", nuance: "像魔法般迷住", formality: "formal" },
      { word: "grab", nuance: "抓住注意力，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "captivate + an audience", example: "The performer captivated the audience." },
      { pattern: "completely captivated", example: "I was completely captivated by the story." },
      { pattern: "captivate + the imagination", example: "The idea captivated the public imagination." }
    ],
    layers: [
      { level: "物理层", meaning: "视觉/听觉上吸引", example: "The sunset captivated everyone on the beach." },
      { level: "认知层", meaning: "智力上的着迷", example: "The theory captivated researchers worldwide." },
      { level: "精神层", meaning: "心灵被深深抓住", example: "Beauty captivates the soul." }
    ]
  },
  "navigate": {
    etymology: { roots: "nav- (ship) + ig (drive) + -ate", origin: "Latin: navigare (to sail) ← navis (ship) + agere (to drive)", mnemonic: "驾驶(ig)船(nav)→导航" },
    cognates: [
      { word: "navy", meaning: "海军（船队）" },
      { word: "nave", meaning: "教堂中殿（船形）" },
      { word: "nautical", meaning: "航海的" }
    ],
    synonyms: [
      { word: "steer", nuance: "操纵方向", formality: "neutral" },
      { word: "maneuver", nuance: "灵活操控", formality: "formal" },
      { word: "find one's way", nuance: "找路，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "navigate + through", example: "She navigated through the crowded streets." },
      { pattern: "navigate + challenges", example: "Leaders must navigate complex challenges." },
      { pattern: "navigate + the waters", example: "They navigated treacherous waters." }
    ],
    layers: [
      { level: "物理层", meaning: "驾驶船只/车辆", example: "The captain navigated the ship through the strait." },
      { level: "认知层", meaning: "应对复杂局面", example: "She navigated the corporate hierarchy skillfully." },
      { level: "精神层", meaning: "在人生旅途中找到方向", example: "We all navigate the journey of life seeking meaning." }
    ]
  },
  "fathom": {
    etymology: { roots: "fathom- (outstretched arms)", origin: "Old English: fæðm (outstretched arms, embrace) → depth measurement", mnemonic: "张开双臂(fathom)测量深度→理解深度" },
    cognates: [
      { word: "fathomless", meaning: "深不可测的" },
      { word: "fathom", meaning: "英寻（深度单位，6英尺）" },
      { word: "unfathomable", meaning: "无法理解的" }
    ],
    synonyms: [
      { word: "understand", nuance: "理解，通用", formality: "neutral" },
      { word: "comprehend", nuance: "全面理解，正式", formality: "formal" },
      { word: "get", nuance: "懂了，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "cannot fathom", example: "I cannot fathom why he left." },
      { pattern: "hard to fathom", example: "The scale of the universe is hard to fathom." },
      { pattern: "fathom + the depth", example: "She tried to fathom the depth of his grief." }
    ],
    layers: [
      { level: "物理层", meaning: "测量水深", example: "Sailors fathomed the depth of the harbor." },
      { level: "认知层", meaning: "理解复杂事物", example: "It is hard to fathom quantum mechanics." },
      { level: "精神层", meaning: "理解生命的深度", example: "Who can fathom the mysteries of the human heart?" }
    ]
  },
  "invoke": {
    etymology: { roots: "in- (upon) + voke (call)", origin: "Latin: invocare (to call upon) ← vocare (to call)", mnemonic: "向上(in)召唤(voke)→祈求/调用" },
    cognates: [
      { word: "evoke", meaning: "唤起（召出）" },
      { word: "provoke", meaning: "激怒（向前召唤）" },
      { word: "revoke", meaning: "撤销（召回）" }
    ],
    synonyms: [
      { word: "call upon", nuance: "请求，口语", formality: "informal" },
      { word: "summon", nuance: "召唤，中性", formality: "neutral" },
      { word: "implore", nuance: "恳求，更迫切", formality: "formal" }
    ],
    collocations: [
      { pattern: "invoke + a law", example: "The lawyer invoked the First Amendment." },
      { pattern: "invoke + a method", example: "The program invokes the API method." },
      { pattern: "invoke + the name of", example: "He invoked the name of his ancestors." }
    ],
    layers: [
      { level: "物理层", meaning: "口头呼唤", example: "The priest invoked the blessing." },
      { level: "认知层", meaning: "引用法律/原则", example: "She invoked her constitutional rights." },
      { level: "精神层", meaning: "祈求更高力量", example: "In prayer, we invoke divine guidance." }
    ]
  },
  "herald": {
    etymology: { roots: "herald- (army commander/announcer)", origin: "Old French: herault ← Germanic: *hariwald (army ruler)", mnemonic: "军队(hari)的统帅(wald)发布消息→预示" },
    cognates: [
      { word: "heraldry", meaning: "纹章学" },
      { word: "Harold", meaning: "哈罗德（人名，军队统帅）" },
      { word: "harbinger", meaning: "先驱（提前通报者）" }
    ],
    synonyms: [
      { word: "announce", nuance: "宣布，通用", formality: "neutral" },
      { word: "signal", nuance: "发出信号", formality: "neutral" },
      { word: "usher in", nuance: "引入，偏口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "herald + a new era", example: "The discovery heralded a new era in medicine." },
      { pattern: "herald + the arrival", example: "Spring flowers herald the arrival of warmer days." },
      { pattern: "widely heralded", example: "The innovation was widely heralded." }
    ],
    layers: [
      { level: "物理层", meaning: "吹号通报消息", example: "The rooster heralded the dawn." },
      { level: "认知层", meaning: "预示重大变化", example: "AI heralds a transformation in every industry." },
      { level: "精神层", meaning: "传递希望的先声", example: "Kindness heralds the dawn of a better humanity." }
    ]
  },
  "sustain": {
    etymology: { roots: "sus- (from below) + tain (hold)", origin: "Latin: sustinere (to hold up) ← sub- (under) + tenere (to hold)", mnemonic: "从下面(sus)托住(tain)→维持" },
    cognates: [
      { word: "contain", meaning: "包含（一起持有）" },
      { word: "maintain", meaning: "维护（手工持有）" },
      { word: "retain", meaning: "保留（持回）" }
    ],
    synonyms: [
      { word: "maintain", nuance: "保持，通用", formality: "neutral" },
      { word: "uphold", nuance: "维护（原则/标准）", formality: "formal" },
      { word: "keep up", nuance: "坚持，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "sustain + growth", example: "The economy sustained steady growth." },
      { pattern: "sustain + an injury", example: "He sustained a minor injury." },
      { pattern: "sustain + life", example: "Water is essential to sustain life." }
    ],
    layers: [
      { level: "物理层", meaning: "维持生命/结构", example: "The bridge sustains heavy traffic daily." },
      { level: "认知层", meaning: "维持努力/注意", example: "It is hard to sustain focus for hours." },
      { level: "精神层", meaning: "支撑心灵的力量", example: "Faith sustains us through the darkest times." }
    ]
  },
  "languish": {
    etymology: { roots: "langu- (faint/weak) + -ish", origin: "Latin: languere (to be faint or weak) → Old French: languiss-", mnemonic: "变得虞弱(langu)→愁苦淡然" },
    cognates: [
      { word: "languid", meaning: "慰懒的；没有活力的" },
      { word: "languor", meaning: "怠惰；软弱" },
      { word: "lax", meaning: "松懈的（相关词根）" }
    ],
    synonyms: [
      { word: "wither", nuance: "枯萎，偏植物", formality: "neutral" },
      { word: "decline", nuance: "衰退，中性", formality: "neutral" },
      { word: "waste away", nuance: "慢慢消耗，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "languish in", example: "He languished in prison for years." },
      { pattern: "languish behind", example: "The project languished behind schedule." },
      { pattern: "left to languish", example: "The park was left to languish." }
    ],
    layers: [
      { level: "物理层", meaning: "身体虞弱消瘦", example: "The patient languished in the hospital bed." },
      { level: "认知层", meaning: "被忽视而停滞", example: "The proposal languished on the desk for months." },
      { level: "精神层", meaning: "心灵的哀愁与消沉", example: "Without purpose, the spirit languishes." }
    ]
  },
  "elicit": {
    etymology: { roots: "e- (out) + licit (entice/draw)", origin: "Latin: elicere (to draw out) ← ex- (out) + lacere (to entice)", mnemonic: "从里面(e-)引诱(licit)出来→引出" },
    cognates: [
      { word: "illicit", meaning: "非法的（不被允许引出）" },
      { word: "delicate", meaning: "精致的（引诱人的）" },
      { word: "solicit", meaning: "请求（向人引出帮助）" }
    ],
    synonyms: [
      { word: "extract", nuance: "提取，中性", formality: "neutral" },
      { word: "evoke", nuance: "唤起（情感/记忆）", formality: "formal" },
      { word: "draw out", nuance: "引出，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "elicit + a response", example: "The question elicited a strong response." },
      { pattern: "elicit + information", example: "The detective elicited key information." },
      { pattern: "elicit + laughter", example: "His joke elicited laughter from the crowd." }
    ],
    layers: [
      { level: "物理层", meaning: "引发身体反应", example: "The test elicited a reflex response." },
      { level: "认知层", meaning: "引出信息/观点", example: "Good questions elicit deeper thinking." },
      { level: "精神层", meaning: "触发内心深处的情感", example: "The poem elicited a profound sense of longing." }
    ]
  },
  "erode": {
    etymology: { roots: "e- (away) + rode (gnaw)", origin: "Latin: erodere (to gnaw away) ← rodere (to gnaw)", mnemonic: "喃咬(rode)使其离开(e-)→侵蚀" },
    cognates: [
      { word: "rodent", meaning: "啰齿类动物（喃咬者）" },
      { word: "corrode", meaning: "腐蚀（一起喃咬）" },
      { word: "erosion", meaning: "侵蚀（名词）" }
    ],
    synonyms: [
      { word: "wear away", nuance: "磨损，口语", formality: "informal" },
      { word: "corrode", nuance: "化学腐蚀", formality: "neutral" },
      { word: "deteriorate", nuance: "恶化，正式", formality: "formal" }
    ],
    collocations: [
      { pattern: "erode + confidence", example: "Scandals erode public confidence." },
      { pattern: "gradually erode", example: "Wind and rain gradually erode the cliffs." },
      { pattern: "erode + trust", example: "Lies erode trust over time." }
    ],
    layers: [
      { level: "物理层", meaning: "地质侵蚀", example: "Water eroded the limestone into caves." },
      { level: "认知层", meaning: "逐渐削弱价值观念", example: "Inflation erodes purchasing power." },
      { level: "精神层", meaning: "信任与信念的磨损", example: "Constant doubt erodes the foundations of faith." }
    ]
  },
  "orchestrate": {
    etymology: { roots: "orchestra (dance place) + -ate", origin: "Greek: orkhestra (dancing place in theater) ← orkheisthai (to dance)", mnemonic: "像指挥乐队(orchestra)一样协调→精心策划" },
    cognates: [
      { word: "orchestra", meaning: "管弦乐队" },
      { word: "orchestration", meaning: "编曲；策划" },
      { word: "orchestral", meaning: "管弦乐的" }
    ],
    synonyms: [
      { word: "coordinate", nuance: "协调，通用", formality: "neutral" },
      { word: "arrange", nuance: "安排，中性", formality: "neutral" },
      { word: "mastermind", nuance: "幕后策划", formality: "formal" }
    ],
    collocations: [
      { pattern: "orchestrate + a campaign", example: "She orchestrated a successful marketing campaign." },
      { pattern: "carefully orchestrate", example: "The event was carefully orchestrated." },
      { pattern: "orchestrate + efforts", example: "He orchestrated the relief efforts." }
    ],
    layers: [
      { level: "物理层", meaning: "指挥乐队演奏", example: "The conductor orchestrated a magnificent symphony." },
      { level: "认知层", meaning: "策划复杂行动", example: "The CEO orchestrated the company's turnaround." },
      { level: "精神层", meaning: "和谐地统筹人生", example: "To orchestrate a meaningful life requires wisdom and balance." }
    ]
  },
  "impede": {
    etymology: { roots: "im- (in/against) + ped (foot)", origin: "Latin: impedire (to shackle the feet) ← in- + pes/pedis (foot)", mnemonic: "脚(ped)被铐住(im-)→阻礙" },
    cognates: [
      { word: "pedestrian", meaning: "行人（用脚走路）" },
      { word: "pedal", meaning: "踏板" },
      { word: "impediment", meaning: "障碍" }
    ],
    synonyms: [
      { word: "hinder", nuance: "妨碍，通用", formality: "neutral" },
      { word: "obstruct", nuance: "阻塞，偏物理", formality: "formal" },
      { word: "slow down", nuance: "减慢，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "impede + progress", example: "Bureaucracy impedes progress." },
      { pattern: "impede + the flow", example: "The dam impedes the flow of water." },
      { pattern: "seriously impede", example: "The embargo seriously impeded trade." }
    ],
    layers: [
      { level: "物理层", meaning: "物理上阻挡", example: "Fallen trees impeded the road." },
      { level: "认知层", meaning: "阻礙进展/发展", example: "Lack of funding impeded the research." },
      { level: "精神层", meaning: "内心障碍阻挡成长", example: "Fear impedes the soul's journey toward freedom." }
    ]
  },
  "traverse": {
    etymology: { roots: "tra- (across) + verse (turn)", origin: "Latin: transversare (to cross over) ← trans- + vertere (to turn)", mnemonic: "转向(verse)横越(tra-)→穿越" },
    cognates: [
      { word: "reverse", meaning: "反转（向回转）" },
      { word: "universe", meaning: "宇宙（一个旋转方向）" },
      { word: "verse", meaning: "诗句（翻转行）" }
    ],
    synonyms: [
      { word: "cross", nuance: "穿越，通用", formality: "informal" },
      { word: "travel across", nuance: "跨越旅行", formality: "neutral" },
      { word: "transit", nuance: "过境，正式", formality: "formal" }
    ],
    collocations: [
      { pattern: "traverse + a landscape", example: "They traversed the vast desert." },
      { pattern: "traverse + difficult terrain", example: "The army traversed difficult terrain." },
      { pattern: "traverse + the globe", example: "She traversed the globe in search of answers." }
    ],
    layers: [
      { level: "物理层", meaning: "穿越地形", example: "Hikers traversed the mountain range." },
      { level: "认知层", meaning: "遍历知识领域", example: "The course traverses many disciplines." },
      { level: "精神层", meaning: "跨越人生阶段", example: "We traverse from innocence to wisdom through experience." }
    ]
  },
  "squander": {
    etymology: { roots: "squander- (to scatter/waste)", origin: "Origin uncertain, possibly Scandinavian or dialectal English (to scatter)", mnemonic: "随意撒(squander)出去→挥霍" },
    cognates: [
      { word: "squandering", meaning: "挥霍中" },
      { word: "scatter", meaning: "散开（相关词根）" },
      { word: "wander", meaning: "漫游（音近词）" }
    ],
    synonyms: [
      { word: "waste", nuance: "浪费，通用", formality: "neutral" },
      { word: "fritter away", nuance: "一点点浪费，口语", formality: "informal" },
      { word: "dissipate", nuance: "消散、挥霍，正式", formality: "formal" }
    ],
    collocations: [
      { pattern: "squander + money", example: "He squandered his inheritance on gambling." },
      { pattern: "squander + an opportunity", example: "Don't squander this opportunity." },
      { pattern: "squander + resources", example: "The company squandered its resources." }
    ],
    layers: [
      { level: "物理层", meaning: "浪费金钱/物资", example: "She squandered her savings on luxury goods." },
      { level: "认知层", meaning: "浪费时间/机会", example: "He squandered years on a dead-end job." },
      { level: "精神层", meaning: "辜负天赋与潜能", example: "To squander one's talent is to betray one's calling." }
    ]
  },
  "amplify": {
    etymology: { roots: "ampl- (large) + -ify (make)", origin: "Latin: amplificare (to enlarge) ← amplus (large) + facere (to make)", mnemonic: "使变大(ampl-large + fy-make)→放大" },
    cognates: [
      { word: "ample", meaning: "充足的；宽敕的" },
      { word: "amplitude", meaning: "振幅；广度" },
      { word: "amplifier", meaning: "放大器" }
    ],
    synonyms: [
      { word: "boost", nuance: "增强，口语", formality: "informal" },
      { word: "magnify", nuance: "放大（视觉）", formality: "neutral" },
      { word: "intensify", nuance: "加强程度", formality: "formal" }
    ],
    collocations: [
      { pattern: "amplify + a signal", example: "The antenna amplifies the signal." },
      { pattern: "amplify + a message", example: "Social media amplifies messages rapidly." },
      { pattern: "amplify + the effect", example: "The drug amplifies the effect of the treatment." }
    ],
    layers: [
      { level: "物理层", meaning: "增强声音/信号", example: "The speaker amplified his voice." },
      { level: "认知层", meaning: "扩大影响力", example: "The report amplified concerns about climate change." },
      { level: "精神层", meaning: "放大内心的感受", example: "Silence amplifies the voice within." }
    ]
  },
  "implore": {
    etymology: { roots: "im- (upon) + plore (weep/cry)", origin: "Latin: implorare (to invoke with tears) ← plorare (to weep)", mnemonic: "对着(im)哭泣哀求(plore)→恳求" },
    cognates: [
      { word: "explore", meaning: "探索（向外哭喊→寻找）" },
      { word: "deplore", meaning: "谴责（向下哭→悲叹）" },
      { word: "imploring", meaning: "哀求的（形容词）" }
    ],
    synonyms: [
      { word: "beg", nuance: "乜求，口语", formality: "informal" },
      { word: "beseech", nuance: "恳求，文学化", formality: "formal" },
      { word: "plead", nuance: "请求，中性", formality: "neutral" }
    ],
    collocations: [
      { pattern: "implore + sb to do", example: "She implored him to stay." },
      { pattern: "implore + forgiveness", example: "He implored forgiveness from the court." },
      { pattern: "implore + with tears", example: "The mother implored with tears in her eyes." }
    ],
    layers: [
      { level: "物理层", meaning: "跪下乜求", example: "She fell to her knees and implored for mercy." },
      { level: "认知层", meaning: "迫切请求帮助", example: "The CEO implored the board to reconsider." },
      { level: "精神层", meaning: "对上天/命运的祈求", example: "In desperation, he implored the heavens for guidance." }
    ]
  },
  "discern": {
    etymology: { roots: "dis- (apart) + cern (separate/sift)", origin: "Latin: discernere (to separate, distinguish) ← cernere (to sift)", mnemonic: "分(dis)开筛选(cern)→辨别" },
    cognates: [
      { word: "concern", meaning: "关心（一起筛选）" },
      { word: "certain", meaning: "确定的（已筛选出）" },
      { word: "decree", meaning: "法令（判定筛选）" }
    ],
    synonyms: [
      { word: "distinguish", nuance: "区分，通用", formality: "neutral" },
      { word: "detect", nuance: "察觉到", formality: "neutral" },
      { word: "make out", nuance: "辨认出，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "discern + a pattern", example: "She discerned a pattern in the data." },
      { pattern: "discern + the truth", example: "It is hard to discern the truth." },
      { pattern: "easily discern", example: "A trained eye can easily discern the difference." }
    ],
    layers: [
      { level: "物理层", meaning: "用眼睐辨别", example: "He discerned a figure in the fog." },
      { level: "认知层", meaning: "理性判断与分析", example: "She discerned the flaw in the argument." },
      { level: "精神层", meaning: "洞察真理与善恶", example: "Wisdom is the ability to discern right from wrong." }
    ]
  },
  "epitomize": {
    etymology: { roots: "epi- (upon) + tom (cut) + -ize", origin: "Greek: epitome (abridgment) ← epi- (upon) + temnein (to cut)", mnemonic: "切(tom)到表面(epi)的精华→成为典范" },
    cognates: [
      { word: "epitome", meaning: "缩影；典范" },
      { word: "atom", meaning: "原子（不可再切）" },
      { word: "anatomy", meaning: "解剖学（切开研究）" }
    ],
    synonyms: [
      { word: "embody", nuance: "体现，中性", formality: "neutral" },
      { word: "represent", nuance: "代表，通用", formality: "neutral" },
      { word: "typify", nuance: "作为典型", formality: "formal" }
    ],
    collocations: [
      { pattern: "epitomize + excellence", example: "Her work epitomizes excellence." },
      { pattern: "epitomize + the spirit", example: "He epitomizes the spirit of adventure." },
      { pattern: "perfectly epitomize", example: "This dish perfectly epitomizes Italian cuisine." }
    ],
    layers: [
      { level: "物理层", meaning: "外在形象的典型", example: "The Eiffel Tower epitomizes Paris." },
      { level: "认知层", meaning: "概念的完美体现", example: "Her career epitomizes dedication." },
      { level: "精神层", meaning: "精神品质的化身", example: "Gandhi epitomizes the power of nonviolent resistance." }
    ]
  },
  "wield": {
    etymology: { roots: "wield- (to control/govern)", origin: "Old English: wieldan (to control, govern) ← Proto-Germanic: *waltijan", mnemonic: "手握权力(wield)→挥舞/掌握" },
    cognates: [
      { word: "power", meaning: "权力（广义控制）" },
      { word: "Walter", meaning: "沃尔特（人名，统治者）" },
      { word: "wieldy", meaning: "易操控的（古语）" }
    ],
    synonyms: [
      { word: "brandish", nuance: "挥舞武器，威胁性", formality: "formal" },
      { word: "handle", nuance: "操作、处理", formality: "neutral" },
      { word: "swing", nuance: "挥动，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "wield + power", example: "The king wielded absolute power." },
      { pattern: "wield + influence", example: "She wields considerable influence." },
      { pattern: "wield + a sword", example: "The knight wielded a mighty sword." }
    ],
    layers: [
      { level: "物理层", meaning: "手持工具/武器", example: "He wielded the hammer with precision." },
      { level: "认知层", meaning: "行使权力/影响", example: "The media wields enormous influence." },
      { level: "精神层", meaning: "运用智慧与美德", example: "Wield compassion as your greatest strength." }
    ]
  },
  "replenish": {
    etymology: { roots: "re- (again) + plen (full) + -ish", origin: "Latin: replenus (refilled) ← re- + plenus (full)", mnemonic: "再次(re)填满(plen)→补充" },
    cognates: [
      { word: "plenty", meaning: "充足；大量" },
      { word: "plenary", meaning: "全体的（完整的）" },
      { word: "replete", meaning: "充满的" }
    ],
    synonyms: [
      { word: "refill", nuance: "重新装满，口语", formality: "informal" },
      { word: "restore", nuance: "恢复，中性", formality: "neutral" },
      { word: "replete", nuance: "使充满，正式", formality: "formal" }
    ],
    collocations: [
      { pattern: "replenish + supplies", example: "We need to replenish our supplies." },
      { pattern: "replenish + energy", example: "Sleep replenishes your energy." },
      { pattern: "replenish + stocks", example: "The store replenished its stocks." }
    ],
    layers: [
      { level: "物理层", meaning: "补充物资/液体", example: "Drink water to replenish lost fluids." },
      { level: "认知层", meaning: "恢复精力/资源", example: "A vacation replenishes creative energy." },
      { level: "精神层", meaning: "滋养心灵", example: "Solitude replenishes the soul." }
    ]
  },
  "converge": {
    etymology: { roots: "con- (together) + verge (incline/turn)", origin: "Latin: convergere (to incline together) ← vergere (to bend)", mnemonic: "一起(con)向同一点倾斜(verge)→汇聚" },
    cognates: [
      { word: "diverge", meaning: "分岐（向不同方向）" },
      { word: "verge", meaning: "边缘；濮临" },
      { word: "merge", meaning: "合并" }
    ],
    synonyms: [
      { word: "meet", nuance: "相遇，口语", formality: "informal" },
      { word: "intersect", nuance: "交叉，中性", formality: "neutral" },
      { word: "confluence", nuance: "汇流，正式", formality: "formal" }
    ],
    collocations: [
      { pattern: "converge on", example: "Protesters converged on the capital." },
      { pattern: "converge at", example: "Several roads converge at this junction." },
      { pattern: "paths converge", example: "Our paths finally converged." }
    ],
    layers: [
      { level: "物理层", meaning: "线路/人群汇聚", example: "The rivers converge near the city." },
      { level: "认知层", meaning: "观点/趋势趋同", example: "The evidence converges on a single conclusion." },
      { level: "精神层", meaning: "多种信仰汇合于一点", example: "All spiritual traditions converge on the truth of love." }
    ]
  },
  "deteriorate": {
    etymology: { roots: "deterior (worse) + -ate", origin: "Latin: deteriorare (to make worse) ← deterior (lower, worse)", mnemonic: "变得更差(deterior)→恶化" },
    cognates: [
      { word: "deterioration", meaning: "恶化（名词）" },
      { word: "deter", meaning: "威慑（使变得更糟）" },
      { word: "detriment", meaning: "损害" }
    ],
    synonyms: [
      { word: "decline", nuance: "下降，中性", formality: "neutral" },
      { word: "degrade", nuance: "降级/质量下降", formality: "formal" },
      { word: "go downhill", nuance: "走下坡路，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "deteriorate + rapidly", example: "His health deteriorated rapidly." },
      { pattern: "deteriorate + into", example: "The discussion deteriorated into argument." },
      { pattern: "continue to deteriorate", example: "Relations continued to deteriorate." }
    ],
    layers: [
      { level: "物理层", meaning: "物质状况变差", example: "The building has deteriorated over decades." },
      { level: "认知层", meaning: "局势/关系恶化", example: "Trust between the two nations deteriorated." },
      { level: "精神层", meaning: "心理/精神状态下滑", example: "Isolation causes the spirit to deteriorate." }
    ]
  },
  "permeate": {
    etymology: { roots: "per- (through) + me (go/pass) + -ate", origin: "Latin: permeare (to pass through) ← meare (to go, pass)", mnemonic: "完全(per)穿过(me)→渗透" },
    cognates: [
      { word: "permeable", meaning: "可渗透的" },
      { word: "impermeable", meaning: "不可渗透的" },
      { word: "meander", meaning: "蜓蜒而行（慢慢穿过）" }
    ],
    synonyms: [
      { word: "penetrate", nuance: "穿透，中性", formality: "neutral" },
      { word: "pervade", nuance: "弥漫，正式", formality: "formal" },
      { word: "seep into", nuance: "渗入，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "permeate + through", example: "Water permeated through the soil." },
      { pattern: "permeate + every aspect", example: "Technology permeates every aspect of life." },
      { pattern: "permeate + the culture", example: "These values permeate the company culture." }
    ],
    layers: [
      { level: "物理层", meaning: "液体/气体渗透", example: "The smell of coffee permeated the room." },
      { level: "认知层", meaning: "思想渗透社会", example: "The philosophy permeated academic discourse." },
      { level: "精神层", meaning: "精神力量渗入存在", example: "A sense of peace permeated her entire being." }
    ]
  },
  "abolish": {
    etymology: { roots: "ab- (away) + ol (grow/nourish) + -ish", origin: "Latin: abolere (to destroy, cause to die) ← ab- + *olere (to grow)", mnemonic: "让它离开(ab)生长(ol)→彻底废除" },
    cognates: [
      { word: "abolition", meaning: "废除（名词）" },
      { word: "abolitionist", meaning: "废奴主义者" },
      { word: "adolescent", meaning: "青少年（正在成长）" }
    ],
    synonyms: [
      { word: "eliminate", nuance: "消除，中性", formality: "neutral" },
      { word: "annul", nuance: "宣布无效，法律", formality: "formal" },
      { word: "do away with", nuance: "取消，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "abolish + slavery", example: "Lincoln helped abolish slavery." },
      { pattern: "abolish + a law", example: "The parliament voted to abolish the law." },
      { pattern: "completely abolish", example: "The new regime completely abolished censorship." }
    ],
    layers: [
      { level: "物理层", meaning: "拆除实体结构", example: "They abolished the old checkpoints." },
      { level: "认知层", meaning: "废除制度/法律", example: "Many countries have abolished the death penalty." },
      { level: "精神层", meaning: "根除不公与压迫", example: "The dream is to abolish all forms of injustice." }
    ]
  },
  "propel": {
    etymology: { roots: "pro- (forward) + pel (drive)", origin: "Latin: propellere (to drive forward) ← pellere (to drive)", mnemonic: "向前(pro)驱动(pel)→推进" },
    cognates: [
      { word: "compel", meaning: "迫使（一起驱动）" },
      { word: "expel", meaning: "驱逐（向外驱动）" },
      { word: "propeller", meaning: "螺旋桨" }
    ],
    synonyms: [
      { word: "drive", nuance: "驱动，通用", formality: "neutral" },
      { word: "thrust", nuance: "猛推，中性", formality: "neutral" },
      { word: "push forward", nuance: "向前推，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "propel + forward", example: "Innovation propels society forward." },
      { pattern: "propel + to fame", example: "The role propelled her to fame." },
      { pattern: "propel + growth", example: "Investment propels economic growth." }
    ],
    layers: [
      { level: "物理层", meaning: "推动物体前进", example: "Rockets propel spacecraft into orbit." },
      { level: "认知层", meaning: "推动事业/发展", example: "Curiosity propels scientific discovery." },
      { level: "精神层", meaning: "内在动力推动成长", example: "A sense of purpose propels the spirit forward." }
    ]
  },
  "exude": {
    etymology: { roots: "ex- (out) + sud (sweat)", origin: "Latin: exsudare (to sweat out) ← sudare (to sweat)", mnemonic: "向外(ex)出汗(sud)→渗出/流露" },
    cognates: [
      { word: "sudor", meaning: "汗液（拉丁词）" },
      { word: "exudate", meaning: "渗出物" },
      { word: "sudorific", meaning: "发汗的" }
    ],
    synonyms: [
      { word: "radiate", nuance: "散发（光/热）", formality: "neutral" },
      { word: "emanate", nuance: "发出，正式", formality: "formal" },
      { word: "ooze", nuance: "慢慢渗出，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "exude + confidence", example: "She exudes confidence in every meeting." },
      { pattern: "exude + charm", example: "He exudes natural charm." },
      { pattern: "exude + warmth", example: "The host exuded warmth and hospitality." }
    ],
    layers: [
      { level: "物理层", meaning: "液体慢慢渗出", example: "The tree exuded sap from its bark." },
      { level: "认知层", meaning: "流露某种气质", example: "The brand exudes luxury and sophistication." },
      { level: "精神层", meaning: "由内而外散发生命力", example: "A person at peace exudes a quiet radiance." }
    ]
  },
  "liberate": {
    etymology: { roots: "liber (free) + -ate", origin: "Latin: liberare (to set free) ← liber (free)", mnemonic: "使变得自由(liber)→解放" },
    cognates: [
      { word: "liberty", meaning: "自由" },
      { word: "liberal", meaning: "自由主义的" },
      { word: "deliver", meaning: "交付（原意“释放”）" }
    ],
    synonyms: [
      { word: "free", nuance: "释放，通用", formality: "informal" },
      { word: "emancipate", nuance: "解放（尤指法律/社会）", formality: "formal" },
      { word: "release", nuance: "释放，中性", formality: "neutral" }
    ],
    collocations: [
      { pattern: "liberate + a country", example: "Allied forces liberated the occupied nation." },
      { pattern: "liberate + from", example: "Education liberates people from ignorance." },
      { pattern: "liberate + the mind", example: "Art liberates the mind." }
    ],
    layers: [
      { level: "物理层", meaning: "从囚禁中释放", example: "The prisoners were liberated by the army." },
      { level: "认知层", meaning: "从旧观念中解放", example: "Science liberates us from superstition." },
      { level: "精神层", meaning: "心灵的彻底自由", example: "To liberate the soul is the ultimate spiritual goal." }
    ]
  },
  "submerge": {
    etymology: { roots: "sub- (under) + merge (plunge)", origin: "Latin: submergere (to plunge under) ← mergere (to dip/plunge)", mnemonic: "潜入(merge)下方(sub)→淹没" },
    cognates: [
      { word: "emerge", meaning: "浮现（从下方出来）" },
      { word: "merge", meaning: "合并（融入）" },
      { word: "immerse", meaning: "沉浸（投入其中）" }
    ],
    synonyms: [
      { word: "immerse", nuance: "沉浸，带专注感", formality: "neutral" },
      { word: "drown", nuance: "淹没，危险含义", formality: "informal" },
      { word: "inundate", nuance: "洪水般淋浸", formality: "formal" }
    ],
    collocations: [
      { pattern: "submerge + in water", example: "The submarine submerged below the surface." },
      { pattern: "submerge + oneself in", example: "She submerged herself in her work." },
      { pattern: "completely submerged", example: "The village was completely submerged by the flood." }
    ],
    layers: [
      { level: "物理层", meaning: "沉入水下", example: "The diver submerged into the deep ocean." },
      { level: "认知层", meaning: "全神贯注于某事", example: "He submerged himself in research for months." },
      { level: "精神层", meaning: "深潜入意识深处", example: "Submerge into silence to discover your inner truth." }
    ]
  },
  "galvanize": {
    etymology: { roots: "Galvani (scientist) + -ize", origin: "Named after Luigi Galvani (1737–1798), who studied bioelectricity", mnemonic: "像电流(Galvani电学)一样刺激→激励" },
    cognates: [
      { word: "galvanic", meaning: "电流的；强烈的" },
      { word: "galvanism", meaning: "电流刺激" },
      { word: "galvanometer", meaning: "电流计" }
    ],
    synonyms: [
      { word: "motivate", nuance: "激励，通用", formality: "neutral" },
      { word: "electrify", nuance: "像电击一样兴奋", formality: "neutral" },
      { word: "fire up", nuance: "点燃热情，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "galvanize + into action", example: "The crisis galvanized the nation into action." },
      { pattern: "galvanize + support", example: "The leader galvanized public support." },
      { pattern: "galvanize + a movement", example: "Her speech galvanized the entire movement." }
    ],
    layers: [
      { level: "物理层", meaning: "电流刺激肌肉", example: "The electric shock galvanized the frog's leg." },
      { level: "认知层", meaning: "激励人们行动", example: "The report galvanized policymakers to act." },
      { level: "精神层", meaning: "唤醒集体意志", example: "A shared vision galvanizes the collective spirit." }
    ]
  },
  "transcribe": {
    etymology: { roots: "trans- (across) + scribe (write)", origin: "Latin: transcribere (to copy across) ← scribere (to write)", mnemonic: "把内容写(scribe)到另一边(trans)→转录" },
    cognates: [
      { word: "describe", meaning: "描述（写下来）" },
      { word: "prescribe", meaning: "开处方（预先写好）" },
      { word: "inscribe", meaning: "铭刻（写在上面）" }
    ],
    synonyms: [
      { word: "copy", nuance: "抷贝，口语", formality: "informal" },
      { word: "record", nuance: "记录，中性", formality: "neutral" },
      { word: "transliterate", nuance: "音译转写，学术", formality: "formal" }
    ],
    collocations: [
      { pattern: "transcribe + an interview", example: "She transcribed the entire interview." },
      { pattern: "transcribe + music", example: "He transcribed the symphony for piano." },
      { pattern: "accurately transcribe", example: "The AI accurately transcribed the speech." }
    ],
    layers: [
      { level: "物理层", meaning: "把声音写成文字", example: "The secretary transcribed the meeting notes." },
      { level: "认知层", meaning: "转化信息形式", example: "DNA transcribes genetic information into RNA." },
      { level: "精神层", meaning: "将内心体验转化为表达", example: "The poet transcribes the emotions of the soul into words." }
    ]
  },
  "oscillate": {
    etymology: { roots: "oscill- (to swing) + -ate", origin: "Latin: oscillare (to swing) ← oscillum (little face/mask, hung as swing decoration)", mnemonic: "像秋千上的小面具(oscillum)摆动→振荡" },
    cognates: [
      { word: "oscillation", meaning: "振荡（名词）" },
      { word: "oscillator", meaning: "振荡器" },
      { word: "oscilloscope", meaning: "示波器" }
    ],
    synonyms: [
      { word: "fluctuate", nuance: "波动，中性", formality: "neutral" },
      { word: "swing", nuance: "摆动，口语", formality: "informal" },
      { word: "vacillate", nuance: "犹豫不决", formality: "formal" }
    ],
    collocations: [
      { pattern: "oscillate between", example: "She oscillated between hope and despair." },
      { pattern: "oscillate rapidly", example: "The signal oscillates rapidly." },
      { pattern: "oscillate around", example: "Prices oscillate around the mean." }
    ],
    layers: [
      { level: "物理层", meaning: "物体来回摆动", example: "The pendulum oscillates steadily." },
      { level: "认知层", meaning: "在两种观点间摇摆", example: "Public opinion oscillated between the two candidates." },
      { level: "精神层", meaning: "内心在希望与绝望间摆荡", example: "The soul oscillates between light and shadow." }
    ]
  },
  "assert": {
    etymology: { roots: "as- (to) + sert (join/bind)", origin: "Latin: asserere (to claim) ← ad- (to) + serere (to join, bind)", mnemonic: "把真理向自己拉紧(sert→绑)→断言" },
    cognates: [
      { word: "assertion", meaning: "断言（名词）" },
      { word: "insert", meaning: "插入（in+sert 绑入）" },
      { word: "desert", meaning: "抛弃（de+sert 解除绑定）" }
    ],
    synonyms: [
      { word: "claim", nuance: "主张，中性偏口语", formality: "neutral" },
      { word: "declare", nuance: "正式宣布", formality: "formal" },
      { word: "insist", nuance: "坚持不让步", formality: "neutral" }
    ],
    collocations: [
      { pattern: "assert + authority", example: "The new manager quickly asserted her authority." },
      { pattern: "assert + rights", example: "Citizens must assert their rights." },
      { pattern: "assert + independence", example: "The colony asserted its independence." }
    ],
    layers: [
      { level: "物理层", meaning: "表明立场或态度", example: "He asserted his claim to the property." },
      { level: "认知层", meaning: "坚持论点或信念", example: "She asserted that the data was reliable." },
      { level: "精神层", meaning: "宣示存在的意义", example: "To assert one's existence is the first act of consciousness." }
    ]
  },
  "acquire": {
    etymology: { roots: "ac- (to) + quire (seek)", origin: "Latin: acquirere ← ad- (to) + quaerere (to seek, ask)", mnemonic: "朝着目标去寻求(quire→quest)→获得" },
    cognates: [
      { word: "acquisition", meaning: "获取；收购" },
      { word: "require", meaning: "需要（re+quire 反复寻求）" },
      { word: "inquire", meaning: "询问（in+quire 向内寻求）" }
    ],
    synonyms: [
      { word: "obtain", nuance: "通过努力获得，正式", formality: "formal" },
      { word: "gain", nuance: "获取，中性通用", formality: "neutral" },
      { word: "get", nuance: "口语化的获得", formality: "informal" }
    ],
    collocations: [
      { pattern: "acquire + knowledge/skills", example: "She acquired extensive knowledge of history." },
      { pattern: "acquire + taste", example: "Coffee is an acquired taste." },
      { pattern: "newly acquired", example: "He showed off his newly acquired car." }
    ],
    layers: [
      { level: "物理层", meaning: "获得实物或财产", example: "The museum acquired a rare painting." },
      { level: "认知层", meaning: "习得技能或知识", example: "Children acquire language naturally." },
      { level: "精神层", meaning: "获得智慧或内在品质", example: "Through suffering, she acquired a profound empathy for others." }
    ]
  },
  "accumulate": {
    etymology: { roots: "ac- (to) + cumul (heap) + -ate", origin: "Latin: accumulare ← ad- (to) + cumulus (heap, pile)", mnemonic: "不断往堆(cumulus→积云)上加→积累" },
    cognates: [
      { word: "accumulation", meaning: "积累（名词）" },
      { word: "cumulus", meaning: "积云（堆叠的云）" },
      { word: "cumulative", meaning: "累积的" }
    ],
    synonyms: [
      { word: "amass", nuance: "大量聚集，正式", formality: "formal" },
      { word: "gather", nuance: "收集，中性", formality: "neutral" },
      { word: "pile up", nuance: "堆积，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "accumulate + wealth", example: "He accumulated wealth over decades." },
      { pattern: "accumulate + evidence", example: "Evidence accumulated against the suspect." },
      { pattern: "gradually accumulate", example: "Dust gradually accumulated on the shelves." }
    ],
    layers: [
      { level: "物理层", meaning: "物质的堆积聚集", example: "Snow accumulated on the rooftops overnight." },
      { level: "认知层", meaning: "经验或知识的渐进积累", example: "She accumulated years of research data." },
      { level: "精神层", meaning: "善行或美德的日积月累", example: "Small acts of kindness accumulate into a lifetime of meaning." }
    ]
  },
  "acknowledge": {
    etymology: { roots: "ac- (to) + knowledge", origin: "Middle English: from ac- (to/intensifier) + knowledge (knowing)", mnemonic: "将事实纳入知识(knowledge)→承认" },
    cognates: [
      { word: "acknowledgment", meaning: "承认；致谢" },
      { word: "knowledge", meaning: "知识" },
      { word: "known", meaning: "已知的" }
    ],
    synonyms: [
      { word: "admit", nuance: "承认（常含不情愿）", formality: "neutral" },
      { word: "recognize", nuance: "认可，正式", formality: "formal" },
      { word: "concede", nuance: "在辩论中让步承认", formality: "formal" }
    ],
    collocations: [
      { pattern: "acknowledge + mistake", example: "He acknowledged his mistake publicly." },
      { pattern: "acknowledge + receipt", example: "Please acknowledge receipt of this email." },
      { pattern: "widely acknowledged", example: "She is widely acknowledged as an expert." }
    ],
    layers: [
      { level: "物理层", meaning: "确认收到信息", example: "She acknowledged the letter with a nod." },
      { level: "认知层", meaning: "承认事实或功劳", example: "The scientist acknowledged the flaw in her theory." },
      { level: "精神层", meaning: "直面内心深处的真相", example: "To acknowledge our own mortality is the beginning of wisdom." }
    ]
  },
  "adapt": {
    etymology: { roots: "ad- (to) + apt (fit)", origin: "Latin: adaptare ← ad- (to) + aptare (to fit, adjust)", mnemonic: "使自己适合(apt→适合)环境→适应" },
    cognates: [
      { word: "adaptation", meaning: "适应；改编" },
      { word: "apt", meaning: "恰当的；有倾向的" },
      { word: "aptitude", meaning: "天资；才能" }
    ],
    synonyms: [
      { word: "adjust", nuance: "微调以适合", formality: "neutral" },
      { word: "modify", nuance: "修改、改造", formality: "formal" },
      { word: "acclimate", nuance: "适应新气候/环境", formality: "formal" }
    ],
    collocations: [
      { pattern: "adapt to + environment", example: "Animals adapt to harsh environments." },
      { pattern: "adapt + strategy", example: "We must adapt our strategy to new challenges." },
      { pattern: "quickly adapt", example: "Children quickly adapt to new schools." }
    ],
    layers: [
      { level: "物理层", meaning: "身体或结构的调整", example: "The chameleon adapted its color to the surroundings." },
      { level: "认知层", meaning: "思维方式的灵活转变", example: "She adapted her teaching style for different students." },
      { level: "精神层", meaning: "在逆境中重塑自我", example: "He adapted to loss by finding new purpose in helping others." }
    ]
  },
  "adhere": {
    etymology: { roots: "ad- (to) + here (stick)", origin: "Latin: adhaerere ← ad- (to) + haerere (to stick, cling)", mnemonic: "紧紧黏附(haerere→黏)在一起→坚持" },
    cognates: [
      { word: "adherence", meaning: "坚持；依附" },
      { word: "adhesive", meaning: "黏合剂" },
      { word: "cohesion", meaning: "凝聚力（co+haerere）" }
    ],
    synonyms: [
      { word: "stick", nuance: "黏附，口语", formality: "informal" },
      { word: "comply", nuance: "遵从规则", formality: "formal" },
      { word: "abide by", nuance: "遵守承诺/法律", formality: "neutral" }
    ],
    collocations: [
      { pattern: "adhere to + rules/principles", example: "All employees must adhere to the code of conduct." },
      { pattern: "strictly adhere", example: "She strictly adhered to the diet plan." },
      { pattern: "adhere to + surface", example: "The paint adhered well to the metal surface." }
    ],
    layers: [
      { level: "物理层", meaning: "物理黏附在表面上", example: "The sticker adhered firmly to the glass." },
      { level: "认知层", meaning: "遵守规则或方法", example: "The team adhered to the agile methodology." },
      { level: "精神层", meaning: "在压力下坚守信念", example: "He adhered to his moral principles even when it cost him dearly." }
    ]
  },
  "admonish": {
    etymology: { roots: "ad- (to) + mon (remind) + -ish", origin: "Latin: admonere ← ad- (to) + monere (to remind, warn)", mnemonic: "面对面提醒(mon→monitor监督)→告诫" },
    cognates: [
      { word: "admonishment", meaning: "告诫（名词）" },
      { word: "monitor", meaning: "监控者（提醒者）" },
      { word: "premonition", meaning: "预感（pre+monere 提前提醒）" }
    ],
    synonyms: [
      { word: "warn", nuance: "警告，中性", formality: "neutral" },
      { word: "reprimand", nuance: "正式批评", formality: "formal" },
      { word: "scold", nuance: "训斥，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "gently admonish", example: "She gently admonished the child." },
      { pattern: "admonish + for", example: "The teacher admonished him for cheating." },
      { pattern: "admonish + to", example: "He admonished them to be more careful." }
    ],
    layers: [
      { level: "物理层", meaning: "口头警告或训斥", example: "The referee admonished the player for the foul." },
      { level: "认知层", meaning: "以道理劝诫", example: "The mentor admonished the student to think before acting." },
      { level: "精神层", meaning: "出于爱的灵魂指引", example: "The elder admonished with the wisdom of a lifetime, knowing true correction grows from compassion." }
    ]
  },
  "advocate": {
    etymology: { roots: "ad- (to) + voc (call) + -ate", origin: "Latin: advocare ← ad- (to) + vocare (to call)", mnemonic: "召唤(voc→voice声音)到身边→为之辩护" },
    cognates: [
      { word: "advocacy", meaning: "倡导；辩护" },
      { word: "vocal", meaning: "声音的；直言的" },
      { word: "vocation", meaning: "使命；职业（被召唤的事业）" }
    ],
    synonyms: [
      { word: "promote", nuance: "推广、促进", formality: "neutral" },
      { word: "champion", nuance: "积极拥护", formality: "neutral" },
      { word: "endorse", nuance: "正式支持", formality: "formal" }
    ],
    collocations: [
      { pattern: "advocate for + rights/change", example: "She advocates for equal rights." },
      { pattern: "strongly advocate", example: "He strongly advocated reform." },
      { pattern: "advocate + approach", example: "Experts advocate a cautious approach." }
    ],
    layers: [
      { level: "物理层", meaning: "公开表态支持", example: "The senator advocated the new policy at the press conference." },
      { level: "认知层", meaning: "以理据倡导观点", example: "The researcher advocated a data-driven approach." },
      { level: "精神层", meaning: "为信念挺身而出", example: "She advocated for justice even when it meant standing alone." }
    ]
  },
  "affirm": {
    etymology: { roots: "af- (to) + firm (strong)", origin: "Latin: affirmare ← ad- (to) + firmare (to make strong, from firmus)", mnemonic: "使之坚固(firm→坚定)→肯定" },
    cognates: [
      { word: "affirmation", meaning: "肯定；确认" },
      { word: "firm", meaning: "坚固的；公司" },
      { word: "confirm", meaning: "确认（con+firm 共同使坚固）" }
    ],
    synonyms: [
      { word: "confirm", nuance: "验证后确认", formality: "neutral" },
      { word: "validate", nuance: "使之有效", formality: "formal" },
      { word: "uphold", nuance: "维护支持", formality: "formal" }
    ],
    collocations: [
      { pattern: "affirm + commitment", example: "She affirmed her commitment to the project." },
      { pattern: "affirm + belief", example: "The experience affirmed his belief in humanity." },
      { pattern: "affirm + decision", example: "The court affirmed the lower court's decision." }
    ],
    layers: [
      { level: "物理层", meaning: "点头或口头表示同意", example: "He affirmed the agreement with a firm handshake." },
      { level: "认知层", meaning: "确认观点或判断正确", example: "The experiment affirmed the theoretical prediction." },
      { level: "精神层", meaning: "以全部意志向生命说'是'", example: "To affirm life in all its fullness is the bravest act of the human spirit." }
    ]
  },
  "allocate": {
    etymology: { roots: "al- (to) + loc (place) + -ate", origin: "Latin: allocare ← ad- (to) + locare (to place, from locus = place)", mnemonic: "放到指定位置(loc→location)→分配" },
    cognates: [
      { word: "allocation", meaning: "分配（名词）" },
      { word: "locate", meaning: "定位" },
      { word: "local", meaning: "本地的（特定位置的）" }
    ],
    synonyms: [
      { word: "assign", nuance: "指定分配", formality: "neutral" },
      { word: "distribute", nuance: "分发给多人", formality: "neutral" },
      { word: "earmark", nuance: "专门拨出", formality: "formal" }
    ],
    collocations: [
      { pattern: "allocate + resources/funds", example: "The government allocated funds for healthcare." },
      { pattern: "allocate + time", example: "She allocated two hours for exercise daily." },
      { pattern: "efficiently allocate", example: "The system efficiently allocates bandwidth." }
    ],
    layers: [
      { level: "物理层", meaning: "将物资分发到各处", example: "The warehouse allocated supplies to each branch." },
      { level: "认知层", meaning: "合理安排时间或注意力", example: "Good leaders allocate attention to what matters most." },
      { level: "精神层", meaning: "将有限的生命赋予意义", example: "How we allocate the hours of our lives reveals what we truly value." }
    ]
  },
  "alter": {
    etymology: { roots: "alter (other)", origin: "Latin: alter (the other of two) → alterare (to make other)", mnemonic: "变成另一个(alter→alternative替代)→改变" },
    cognates: [
      { word: "alteration", meaning: "改变（名词）" },
      { word: "alternative", meaning: "替代方案" },
      { word: "alias", meaning: "别名（另一个身份）" }
    ],
    synonyms: [
      { word: "change", nuance: "最通用的变化", formality: "neutral" },
      { word: "modify", nuance: "局部修改", formality: "formal" },
      { word: "revise", nuance: "修订、校正", formality: "formal" }
    ],
    collocations: [
      { pattern: "alter + course", example: "The storm altered the ship's course." },
      { pattern: "fundamentally alter", example: "The discovery fundamentally altered our understanding." },
      { pattern: "alter + appearance", example: "She altered her appearance with a new hairstyle." }
    ],
    layers: [
      { level: "物理层", meaning: "改变外在形态", example: "The tailor altered the suit to fit perfectly." },
      { level: "认知层", meaning: "改变观点或计划", example: "New evidence altered the direction of the investigation." },
      { level: "精神层", meaning: "经历改变了灵魂的轨迹", example: "That single encounter altered who he was at the deepest level." }
    ]
  },
  "anticipate": {
    etymology: { roots: "ante- (before) + cip (take) + -ate", origin: "Latin: anticipare ← ante (before) + capere (to take, seize)", mnemonic: "提前(ante)抓住(cap→capture)→预期" },
    cognates: [
      { word: "anticipation", meaning: "预期；期待" },
      { word: "participate", meaning: "参与（part+cipate 部分地抓住）" },
      { word: "capable", meaning: "有能力的（能抓住的）" }
    ],
    synonyms: [
      { word: "expect", nuance: "预计会发生", formality: "neutral" },
      { word: "foresee", nuance: "预见未来", formality: "formal" },
      { word: "predict", nuance: "科学预测", formality: "neutral" }
    ],
    collocations: [
      { pattern: "anticipate + needs", example: "A great host anticipates the needs of guests." },
      { pattern: "widely anticipated", example: "The announcement was widely anticipated." },
      { pattern: "anticipate + problems", example: "Engineers must anticipate potential problems." }
    ],
    layers: [
      { level: "物理层", meaning: "预先准备应对事件", example: "She anticipated the rain and brought an umbrella." },
      { level: "认知层", meaning: "预见趋势或变化", example: "The analyst anticipated a shift in consumer behavior." },
      { level: "精神层", meaning: "对未来抱有期待和信心", example: "To anticipate a brighter tomorrow is an act of hope." }
    ]
  },
  "appease": {
    etymology: { roots: "ap- (to) + pease (peace)", origin: "Old French: apaisier ← a- (to) + pais (peace, from Latin pax)", mnemonic: "走向和平(pax→peace)→安抚" },
    cognates: [
      { word: "appeasement", meaning: "绥靖；安抚" },
      { word: "peace", meaning: "和平" },
      { word: "pacify", meaning: "使平静" }
    ],
    synonyms: [
      { word: "placate", nuance: "平息怒气", formality: "formal" },
      { word: "soothe", nuance: "安抚情绪", formality: "neutral" },
      { word: "mollify", nuance: "软化敌意", formality: "formal" }
    ],
    collocations: [
      { pattern: "appease + anger", example: "Nothing could appease his anger." },
      { pattern: "appease + critics", example: "The policy was designed to appease critics." },
      { pattern: "attempt to appease", example: "Their attempt to appease the mob failed." }
    ],
    layers: [
      { level: "物理层", meaning: "满足需求以平息不满", example: "She appeased the hungry child with a snack." },
      { level: "认知层", meaning: "做出让步以化解冲突", example: "The company appeased regulators with new compliance measures." },
      { level: "精神层", meaning: "以牺牲原则换取虚假和平", example: "To appease tyranny is to trade the soul's integrity for a moment's quiet." }
    ]
  },
  "articulate": {
    etymology: { roots: "articul- (small joint) + -ate", origin: "Latin: articulare ← articulus (small joint, diminutive of artus = joint)", mnemonic: "像关节(articulus)一样一节一节连接→清晰表达" },
    cognates: [
      { word: "articulation", meaning: "表达；关节连接" },
      { word: "article", meaning: "文章；物品（一个独立单元）" },
      { word: "artifact", meaning: "人工制品（art+fact）" }
    ],
    synonyms: [
      { word: "express", nuance: "表达，通用", formality: "neutral" },
      { word: "enunciate", nuance: "清晰发音", formality: "formal" },
      { word: "convey", nuance: "传达信息", formality: "neutral" }
    ],
    collocations: [
      { pattern: "articulate + vision/idea", example: "She articulated a compelling vision for the future." },
      { pattern: "clearly articulate", example: "He clearly articulated the requirements." },
      { pattern: "articulate + feelings", example: "It's hard to articulate such complex feelings." }
    ],
    layers: [
      { level: "物理层", meaning: "清晰地发出语音", example: "The speaker articulated each syllable with care." },
      { level: "认知层", meaning: "精确表达复杂思想", example: "She articulated the theory so clearly that everyone understood." },
      { level: "精神层", meaning: "将内心深处的真理化为语言", example: "Only the greatest poets can articulate what the soul feels but cannot name." }
    ]
  },
  "ascend": {
    etymology: { roots: "a- (to) + scend (climb)", origin: "Latin: ascendere ← ad- (to) + scandere (to climb)", mnemonic: "向上攀(scend→scale攀爬)→上升" },
    cognates: [
      { word: "ascent", meaning: "上升；攀登" },
      { word: "descend", meaning: "下降（de+scend）" },
      { word: "transcend", meaning: "超越（trans+scend 攀越过去）" }
    ],
    synonyms: [
      { word: "rise", nuance: "自然上升", formality: "neutral" },
      { word: "climb", nuance: "努力攀登", formality: "neutral" },
      { word: "mount", nuance: "登上，正式", formality: "formal" }
    ],
    collocations: [
      { pattern: "ascend + throne/mountain", example: "The prince ascended the throne." },
      { pattern: "ascend to + power/position", example: "She ascended to the role of CEO." },
      { pattern: "steadily ascend", example: "The trail steadily ascends through the forest." }
    ],
    layers: [
      { level: "物理层", meaning: "身体向上移动", example: "The balloon ascended into the cloudless sky." },
      { level: "认知层", meaning: "地位或能力的提升", example: "Through hard work she ascended to the top of her field." },
      { level: "精神层", meaning: "灵魂向更高境界攀升", example: "In Dante's vision, the soul ascends from darkness through purgatory to paradise." }
    ]
  },
  "assess": {
    etymology: { roots: "as- (to) + sess (sit)", origin: "Latin: assessare ← assidere (to sit beside) ← ad- (to) + sedere (to sit)", mnemonic: "坐在旁边(sess→seat)审定→评估" },
    cognates: [
      { word: "assessment", meaning: "评估（名词）" },
      { word: "session", meaning: "会议（坐在一起）" },
      { word: "preside", meaning: "主持（pre+side 坐在前面）" }
    ],
    synonyms: [
      { word: "evaluate", nuance: "系统评价", formality: "formal" },
      { word: "gauge", nuance: "估量程度", formality: "neutral" },
      { word: "appraise", nuance: "鉴定价值", formality: "formal" }
    ],
    collocations: [
      { pattern: "assess + risk/damage", example: "Engineers assessed the damage after the earthquake." },
      { pattern: "assess + performance", example: "The manager assessed each employee's performance." },
      { pattern: "accurately assess", example: "It's difficult to accurately assess the impact." }
    ],
    layers: [
      { level: "物理层", meaning: "检查实物状况", example: "The inspector assessed the structural integrity of the bridge." },
      { level: "认知层", meaning: "分析形势做出判断", example: "The general assessed the battlefield before giving orders." },
      { level: "精神层", meaning: "审视自我内心", example: "To honestly assess one's own soul requires the courage to see both light and shadow." }
    ]
  },
  "assimilate": {
    etymology: { roots: "as- (to) + simil (similar) + -ate", origin: "Latin: assimilare ← ad- (to) + similis (similar, like)", mnemonic: "使之变得相似(simil→similar)→同化吸收" },
    cognates: [
      { word: "assimilation", meaning: "同化；吸收" },
      { word: "similar", meaning: "相似的" },
      { word: "simulate", meaning: "模拟（使之看起来相似）" }
    ],
    synonyms: [
      { word: "absorb", nuance: "吸收，物理感强", formality: "neutral" },
      { word: "integrate", nuance: "融合为整体", formality: "formal" },
      { word: "digest", nuance: "消化理解", formality: "neutral" }
    ],
    collocations: [
      { pattern: "assimilate + information", example: "It takes time to assimilate so much information." },
      { pattern: "assimilate into + culture", example: "Immigrants gradually assimilated into the culture." },
      { pattern: "fully assimilate", example: "She fully assimilated the local customs." }
    ],
    layers: [
      { level: "物理层", meaning: "身体吸收营养", example: "The body assimilates nutrients from food." },
      { level: "认知层", meaning: "将知识融入理解体系", example: "He assimilated the new concepts into his existing framework." },
      { level: "精神层", meaning: "与新环境/文化融为一体", example: "Over generations, the community assimilated traditions of both homelands into a unique living culture." }
    ]
  },
  "attain": {
    etymology: { roots: "at- (to) + tain (touch/reach)", origin: "Latin: attingere ← ad- (to) + tangere (to touch)", mnemonic: "伸手触及(tang→tangent切线)→达到" },
    cognates: [
      { word: "attainment", meaning: "达到；成就" },
      { word: "tangible", meaning: "可触摸的" },
      { word: "attainable", meaning: "可达到的" }
    ],
    synonyms: [
      { word: "achieve", nuance: "强调努力后的成功", formality: "neutral" },
      { word: "reach", nuance: "到达目标点", formality: "neutral" },
      { word: "accomplish", nuance: "完成任务", formality: "formal" }
    ],
    collocations: [
      { pattern: "attain + goal/success", example: "She attained her lifelong goal." },
      { pattern: "attain + mastery", example: "He attained mastery through years of practice." },
      { pattern: "difficult to attain", example: "True happiness is difficult to attain." }
    ],
    layers: [
      { level: "物理层", meaning: "到达某个高度或位置", example: "The aircraft attained cruising altitude." },
      { level: "认知层", meaning: "达到学术或职业成就", example: "She attained a doctorate at the age of twenty-five." },
      { level: "精神层", meaning: "获得内在的安宁与开悟", example: "After years of meditation, he attained a state of perfect equanimity." }
    ]
  },
  "augment": {
    etymology: { roots: "aug- (increase) + -ment", origin: "Latin: augmentare ← augere (to increase, grow)", mnemonic: "使增长(aug→August最崇高的月份)→增强" },
    cognates: [
      { word: "augmentation", meaning: "增强（名词）" },
      { word: "august", meaning: "崇高的；八月" },
      { word: "auction", meaning: "拍卖（价格不断增加）" }
    ],
    synonyms: [
      { word: "increase", nuance: "增加，通用", formality: "neutral" },
      { word: "enhance", nuance: "提升质量", formality: "formal" },
      { word: "supplement", nuance: "补充不足", formality: "neutral" }
    ],
    collocations: [
      { pattern: "augment + reality", example: "AR technology augments our perception of the world." },
      { pattern: "augment + income", example: "She augmented her income with freelance work." },
      { pattern: "augment + capabilities", example: "AI augments human capabilities." }
    ],
    layers: [
      { level: "物理层", meaning: "增加数量或规模", example: "The army was augmented by fresh recruits." },
      { level: "认知层", meaning: "增强能力或效果", example: "The new software augmented the team's productivity." },
      { level: "精神层", meaning: "扩展人类潜能的边界", example: "Technology promises to augment not just our bodies but the very reach of our imagination." }
    ]
  },
  "avert": {
    etymology: { roots: "a- (from/away) + vert (turn)", origin: "Latin: avertere ← a-/ab- (away from) + vertere (to turn)", mnemonic: "转(vert→reverse反转)开→避免" },
    cognates: [
      { word: "aversion", meaning: "厌恶（转开的感觉）" },
      { word: "divert", meaning: "转移（di+vert）" },
      { word: "revert", meaning: "恢复（re+vert 转回去）" }
    ],
    synonyms: [
      { word: "prevent", nuance: "预防发生", formality: "neutral" },
      { word: "avoid", nuance: "躲开，中性", formality: "neutral" },
      { word: "forestall", nuance: "先发制人地阻止", formality: "formal" }
    ],
    collocations: [
      { pattern: "avert + disaster/crisis", example: "Quick thinking averted a disaster." },
      { pattern: "avert + eyes/gaze", example: "She averted her eyes in embarrassment." },
      { pattern: "narrowly avert", example: "They narrowly averted a collision." }
    ],
    layers: [
      { level: "物理层", meaning: "转开视线或方向", example: "He averted his gaze from the gruesome scene." },
      { level: "认知层", meaning: "预防危机或问题", example: "Diplomacy averted a trade war between the two nations." },
      { level: "精神层", meaning: "以行动改变命运走向", example: "A single act of courage can avert the descent of a nation into darkness." }
    ]
  },
  "baffle": {
    etymology: { roots: "baffle (obstruct)", origin: "Possibly from Scottish bauchle (to disgrace) or French bafouer (to mock); sense of 'impede, confuse' emerged in 16c.", mnemonic: "像隔板(baffle)一样挡住→使困惑" },
    cognates: [
      { word: "bafflement", meaning: "困惑（名词）" },
      { word: "baffling", meaning: "令人困惑的" },
      { word: "baffle (n.)", meaning: "挡板；隔音板" }
    ],
    synonyms: [
      { word: "puzzle", nuance: "使费解，较轻", formality: "neutral" },
      { word: "perplex", nuance: "使迷惑不解", formality: "formal" },
      { word: "confound", nuance: "使震惊困惑", formality: "formal" }
    ],
    collocations: [
      { pattern: "baffle + scientists/experts", example: "The phenomenon baffled scientists for decades." },
      { pattern: "completely baffled", example: "She was completely baffled by the riddle." },
      { pattern: "continue to baffle", example: "The case continues to baffle investigators." }
    ],
    layers: [
      { level: "物理层", meaning: "阻挡声音或流体", example: "The baffles in the exhaust reduced noise." },
      { level: "认知层", meaning: "使人无法理解", example: "The contradictory evidence baffled the jury." },
      { level: "精神层", meaning: "宇宙的神秘令人敬畏地困惑", example: "The sheer vastness of the cosmos continues to baffle and humble the human mind." }
    ]
  },
  "beckon": {
    etymology: { roots: "beck (signal) + -on", origin: "Old English: bēcnan/bīecnan (to signal), from bēacen (beacon, sign)", mnemonic: "像灯塔(beacon)一样发出信号→召唤" },
    cognates: [
      { word: "beacon", meaning: "灯塔；信号灯" },
      { word: "beck", meaning: "点头示意" }
    ],
    synonyms: [
      { word: "summon", nuance: "正式召唤", formality: "formal" },
      { word: "gesture", nuance: "做手势", formality: "neutral" },
      { word: "lure", nuance: "引诱", formality: "neutral" }
    ],
    collocations: [
      { pattern: "beckon + to someone", example: "She beckoned to the waiter." },
      { pattern: "beckon + from afar", example: "The distant peaks beckoned from afar." },
      { pattern: "adventure beckons", example: "Adventure beckons the restless soul." }
    ],
    layers: [
      { level: "物理层", meaning: "用手势或动作示意", example: "He beckoned the taxi with a wave." },
      { level: "认知层", meaning: "吸引注意力或兴趣", example: "New career opportunities beckoned after graduation." },
      { level: "精神层", meaning: "命运或使命无声的召唤", example: "Something beyond the horizon beckoned her — a calling she could not name but could not ignore." }
    ]
  },
  "bewilder": {
    etymology: { roots: "be- (thoroughly) + wilder (lead astray)", origin: "English: be- (intensive prefix) + wilder (to lead into the wild/wilderness)", mnemonic: "完全迷失在荒野(wild→wilderness)中→使困惑" },
    cognates: [
      { word: "bewilderment", meaning: "困惑；迷茫" },
      { word: "wilderness", meaning: "荒野" },
      { word: "wild", meaning: "野生的；混乱的" }
    ],
    synonyms: [
      { word: "confuse", nuance: "使困惑，通用", formality: "neutral" },
      { word: "disorient", nuance: "使失去方向感", formality: "formal" },
      { word: "daze", nuance: "使发懵", formality: "neutral" }
    ],
    collocations: [
      { pattern: "completely bewildered", example: "She was completely bewildered by the news." },
      { pattern: "bewilder + with complexity", example: "The tax code bewilders even accountants." },
      { pattern: "bewildering array", example: "A bewildering array of choices lay before them." }
    ],
    layers: [
      { level: "物理层", meaning: "在陌生环境中迷失方向", example: "The maze bewildered every visitor who entered." },
      { level: "认知层", meaning: "因信息过载而无法理解", example: "The rapid pace of change bewilders many workers." },
      { level: "精神层", meaning: "面对存在的荒诞感到迷茫", example: "The sheer randomness of fate bewilders those who search for meaning." }
    ]
  },
  "bolster": {
    etymology: { roots: "bolster (long pillow)", origin: "Old English: bolster (a long stuffed pillow/cushion), from Proto-Germanic *bolstraz", mnemonic: "像长枕(bolster)一样从下方支撑→加强" },
    cognates: [
      { word: "bolster (n.)", meaning: "长枕；靠垫" }
    ],
    synonyms: [
      { word: "strengthen", nuance: "增强力量", formality: "neutral" },
      { word: "reinforce", nuance: "加固，正式", formality: "formal" },
      { word: "boost", nuance: "提振，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "bolster + confidence/morale", example: "The victory bolstered the team's morale." },
      { pattern: "bolster + economy", example: "New policies bolstered the struggling economy." },
      { pattern: "bolster + support", example: "Fresh evidence bolstered their case." }
    ],
    layers: [
      { level: "物理层", meaning: "用垫子或支架支撑", example: "She bolstered her back with extra pillows." },
      { level: "认知层", meaning: "用证据或资源加强", example: "The data bolstered the researcher's hypothesis." },
      { level: "精神层", meaning: "在困境中支撑信心和意志", example: "The community's solidarity bolstered her spirit during the darkest days." }
    ]
  },
  "breach": {
    etymology: { roots: "breach (break)", origin: "Old English: brēc (breaking); Old French: breche (gap, break in a wall)", mnemonic: "打破(break)城墙→突破/违反" },
    cognates: [
      { word: "breach (n.)", meaning: "缺口；违反" },
      { word: "break", meaning: "打破" },
      { word: "breech", meaning: "枪膛后部" }
    ],
    synonyms: [
      { word: "violate", nuance: "违犯，正式", formality: "formal" },
      { word: "break", nuance: "打破，通用", formality: "neutral" },
      { word: "infringe", nuance: "侵犯权利", formality: "formal" }
    ],
    collocations: [
      { pattern: "breach + contract/agreement", example: "The company breached the terms of the contract." },
      { pattern: "breach + security", example: "Hackers breached the security system." },
      { pattern: "breach + walls", example: "The army breached the fortress walls at dawn." }
    ],
    layers: [
      { level: "物理层", meaning: "打破或穿透屏障", example: "The whale breached the surface in a spectacular leap." },
      { level: "认知层", meaning: "违反规则或协议", example: "The leaked data constituted a serious breach of privacy." },
      { level: "精神层", meaning: "打破信任或道德底线", example: "To breach the trust of those who depend on you is to wound the very fabric of human bonds." }
    ]
  },
  "brood": {
    etymology: { roots: "brood (offspring; sit on eggs)", origin: "Old English: brōd (brood, offspring; warmth for hatching), from Proto-Germanic *brōdą", mnemonic: "像母鸡孵(brood)蛋一样蹲伏→沉思忧虑" },
    cognates: [
      { word: "brood (n.)", meaning: "一窝幼鸟/孩子" },
      { word: "breed", meaning: "繁殖；品种" }
    ],
    synonyms: [
      { word: "ponder", nuance: "沉思，中性", formality: "neutral" },
      { word: "ruminate", nuance: "反刍式思考", formality: "formal" },
      { word: "dwell on", nuance: "纠结于", formality: "informal" }
    ],
    collocations: [
      { pattern: "brood over/about", example: "He brooded over his failures for weeks." },
      { pattern: "sit and brood", example: "She sat and brooded in silence." },
      { pattern: "brood + in darkness", example: "The villain brooded in his dark chamber." }
    ],
    layers: [
      { level: "物理层", meaning: "母鸟孵蛋", example: "The hen brooded over her eggs patiently." },
      { level: "认知层", meaning: "反复思考某件事", example: "He brooded over the decision for days." },
      { level: "精神层", meaning: "在黑暗中沉溺于痛苦", example: "To brood endlessly on past wounds is to let grief become the master of the soul." }
    ]
  },
  "cascade": {
    etymology: { roots: "cascad- (fall)", origin: "Italian: cascata (waterfall) ← cascare (to fall), from Vulgar Latin *casicare ← Latin cadere (to fall)", mnemonic: "像瀑布(cascata)一样层层落下→倾泻" },
    cognates: [
      { word: "cascade (n.)", meaning: "瀑布；级联" },
      { word: "case", meaning: "情况（落下的结果）" },
      { word: "cadence", meaning: "节拍（音乐的落点）" }
    ],
    synonyms: [
      { word: "pour", nuance: "大量流出", formality: "neutral" },
      { word: "flow", nuance: "平缓流动", formality: "neutral" },
      { word: "tumble", nuance: "翻滚落下", formality: "neutral" }
    ],
    collocations: [
      { pattern: "cascade down", example: "Water cascaded down the mountainside." },
      { pattern: "cascade of + events", example: "A cascade of events led to the crisis." },
      { pattern: "cascade through", example: "The failure cascaded through the system." }
    ],
    layers: [
      { level: "物理层", meaning: "水或物体层层跌落", example: "Sunlight cascaded through the canopy of leaves." },
      { level: "认知层", meaning: "事件或效应连锁传播", example: "One error cascaded through the entire supply chain." },
      { level: "精神层", meaning: "情感或灵感如瀑布般涌来", example: "Memories cascaded through her mind — a lifetime compressed into a single trembling moment." }
    ]
  },
  "cease": {
    etymology: { roots: "cess- (to go, yield)", origin: "Latin: cessare (to stop, delay) ← cedere (to go, yield)", mnemonic: "停下脚步不再前行(cess→cede让出)→停止" },
    cognates: [
      { word: "cessation", meaning: "停止（名词）" },
      { word: "ceaseless", meaning: "不停的" },
      { word: "decease", meaning: "死亡（de+cease 彻底停止）" }
    ],
    synonyms: [
      { word: "stop", nuance: "停止，最通用", formality: "neutral" },
      { word: "halt", nuance: "突然停住", formality: "neutral" },
      { word: "desist", nuance: "停止不良行为，正式", formality: "formal" }
    ],
    collocations: [
      { pattern: "cease to exist", example: "The company ceased to exist after bankruptcy." },
      { pattern: "cease fire", example: "Both sides agreed to cease fire." },
      { pattern: "never cease", example: "Her kindness never ceases to amaze me." }
    ],
    layers: [
      { level: "物理层", meaning: "动作或声音的停止", example: "The rain ceased and the sun appeared." },
      { level: "认知层", meaning: "活动或进程的终止", example: "Production ceased due to supply shortages." },
      { level: "精神层", meaning: "永恒理想超越终止", example: "Bodies perish, but the ideals they fought for never cease to inspire." }
    ]
  },
  "circumvent": {
    etymology: { roots: "circum- (around) + vent (come)", origin: "Latin: circumvenire ← circum (around) + venire (to come)", mnemonic: "绕(circum→circle圆)着走来(vent→venture)→规避" },
    cognates: [
      { word: "circumvention", meaning: "规避（名词）" },
      { word: "circumference", meaning: "周长（绕一圈的长度）" },
      { word: "venture", meaning: "冒险（走向前方）" }
    ],
    synonyms: [
      { word: "bypass", nuance: "绕过，中性", formality: "neutral" },
      { word: "evade", nuance: "逃避，含贬义", formality: "neutral" },
      { word: "skirt", nuance: "沿边缘绕过", formality: "neutral" }
    ],
    collocations: [
      { pattern: "circumvent + rules/regulations", example: "They found ways to circumvent the regulations." },
      { pattern: "circumvent + security", example: "Hackers circumvented the security measures." },
      { pattern: "attempt to circumvent", example: "Any attempt to circumvent the law will be punished." }
    ],
    layers: [
      { level: "物理层", meaning: "绕过障碍物", example: "The river circumvents the mountain range." },
      { level: "认知层", meaning: "巧妙避开规则或限制", example: "The company circumvented trade restrictions through a subsidiary." },
      { level: "精神层", meaning: "以智慧而非蛮力克服困难", example: "True strategy circumvents the enemy's strength by redefining the battlefield." }
    ]
  },
  "coerce": {
    etymology: { roots: "co- (together) + erce (enclose)", origin: "Latin: coercere ← co- (together) + arcere (to enclose, shut in)", mnemonic: "将人关(arcere→封闭)在一起→胁迫" },
    cognates: [
      { word: "coercion", meaning: "胁迫（名词）" },
      { word: "coercive", meaning: "强制的" },
      { word: "exercise", meaning: "锻炼（ex+arcere 释放出来）" }
    ],
    synonyms: [
      { word: "force", nuance: "强迫，通用", formality: "neutral" },
      { word: "compel", nuance: "迫使，较正式", formality: "formal" },
      { word: "intimidate", nuance: "以恐吓胁迫", formality: "neutral" }
    ],
    collocations: [
      { pattern: "coerce + into", example: "She was coerced into signing the agreement." },
      { pattern: "coerce + compliance", example: "The government coerced compliance through threats." },
      { pattern: "coerce + confession", example: "The suspect was coerced into a false confession." }
    ],
    layers: [
      { level: "物理层", meaning: "以武力或威胁强制", example: "The guards coerced prisoners into labor." },
      { level: "认知层", meaning: "以权力迫使服从", example: "The corporation coerced smaller competitors into selling." },
      { level: "精神层", meaning: "扼杀良知和自由意志", example: "To coerce a conscience is to extinguish the very spark that makes us human." }
    ]
  },
  "collaborate": {
    etymology: { roots: "col- (together) + labor (work) + -ate", origin: "Latin: collaborare ← com- (together) + laborare (to work)", mnemonic: "一起劳动(labor→labour工作)→合作" },
    cognates: [
      { word: "collaboration", meaning: "合作（名词）" },
      { word: "labor", meaning: "劳动" },
      { word: "elaborate", meaning: "精心制作（e+labor 额外劳作）" }
    ],
    synonyms: [
      { word: "cooperate", nuance: "配合合作", formality: "neutral" },
      { word: "partner", nuance: "搭档合作", formality: "neutral" },
      { word: "team up", nuance: "组队，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "collaborate on/with", example: "They collaborated on a groundbreaking study." },
      { pattern: "collaborate closely", example: "The two teams collaborated closely." },
      { pattern: "collaborate across", example: "Researchers collaborate across borders." }
    ],
    layers: [
      { level: "物理层", meaning: "共同完成具体工作", example: "The builders collaborated to raise the roof beam." },
      { level: "认知层", meaning: "智力合作产出成果", example: "Watson and Crick collaborated to discover the structure of DNA." },
      { level: "精神层", meaning: "超越个体的集体创造", example: "When great minds collaborate, they create something no individual could ever conceive alone." }
    ]
  },
  "conceive": {
    etymology: { roots: "con- (completely) + ceive (take/seize)", origin: "Latin: concipere ← com- (completely) + capere (to take, seize)", mnemonic: "完全抓住(cap→capture)一个想法→构想" },
    cognates: [
      { word: "conception", meaning: "概念；受孕" },
      { word: "perceive", meaning: "感知（per+ceive 彻底抓住）" },
      { word: "receive", meaning: "接收（re+ceive 接回来）" }
    ],
    synonyms: [
      { word: "imagine", nuance: "想象，中性", formality: "neutral" },
      { word: "envision", nuance: "展望未来", formality: "formal" },
      { word: "dream up", nuance: "凭空想出，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "conceive + idea/plan", example: "She conceived a bold plan to save the company." },
      { pattern: "conceive of", example: "It's hard to conceive of a world without music." },
      { pattern: "originally conceived", example: "The project was originally conceived as a small experiment." }
    ],
    layers: [
      { level: "物理层", meaning: "怀孕孕育", example: "She conceived her first child at thirty." },
      { level: "认知层", meaning: "构想出新概念或计划", example: "Einstein conceived the theory of relativity while working as a clerk." },
      { level: "精神层", meaning: "心灵孕育伟大愿景", example: "Whatever the human mind can conceive and believe, it has the power to achieve." }
    ]
  },
  "concede": {
    etymology: { roots: "con- (completely) + cede (go/yield)", origin: "Latin: concedere ← com- (completely) + cedere (to go, yield)", mnemonic: "完全让出道路(cede→cession让渡)→承认/让步" },
    cognates: [
      { word: "concession", meaning: "让步；特许权" },
      { word: "precede", meaning: "在前（pre+cede）" },
      { word: "recede", meaning: "退去（re+cede 走回去）" }
    ],
    synonyms: [
      { word: "admit", nuance: "承认事实", formality: "neutral" },
      { word: "yield", nuance: "让步屈服", formality: "neutral" },
      { word: "grant", nuance: "允许承认", formality: "formal" }
    ],
    collocations: [
      { pattern: "concede + defeat", example: "He conceded defeat gracefully." },
      { pattern: "concede + point", example: "She conceded the point after seeing the evidence." },
      { pattern: "reluctantly concede", example: "He reluctantly conceded that she was right." }
    ],
    layers: [
      { level: "物理层", meaning: "在竞争中认输", example: "The candidate conceded the election at midnight." },
      { level: "认知层", meaning: "承认对方论点正确", example: "The scientist conceded that the data contradicted his hypothesis." },
      { level: "精神层", meaning: "以智慧选择退让", example: "To concede when reason demands is not weakness but the highest form of strength." }
    ]
  },
  "confide": {
    etymology: { roots: "con- (fully) + fide (trust)", origin: "Latin: confidere ← com- (fully) + fidere (to trust)", mnemonic: "完全信任(fide→fidelity忠诚)→倾诉" },
    cognates: [
      { word: "confidence", meaning: "信心；秘密" },
      { word: "confidential", meaning: "机密的" },
      { word: "fidelity", meaning: "忠诚" }
    ],
    synonyms: [
      { word: "trust", nuance: "信任，通用", formality: "neutral" },
      { word: "disclose", nuance: "透露信息", formality: "formal" },
      { word: "open up", nuance: "敞开心扉，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "confide in + someone", example: "She confided in her best friend." },
      { pattern: "confide + secret", example: "He confided a long-held secret." },
      { pattern: "confide + fears", example: "She confided her deepest fears to her diary." }
    ],
    layers: [
      { level: "物理层", meaning: "私下告知", example: "He leaned close and confided the password." },
      { level: "认知层", meaning: "分享隐私信息", example: "The employee confided concerns about safety to the manager." },
      { level: "精神层", meaning: "交出灵魂的脆弱部分", example: "To confide is to hand someone the key to the most guarded chamber of your heart." }
    ]
  },
  "conform": {
    etymology: { roots: "con- (together) + form (shape)", origin: "Latin: conformare ← com- (together) + formare (to shape, from forma = form)", mnemonic: "一起塑造成同一形状(form→形式)→顺从" },
    cognates: [
      { word: "conformity", meaning: "遵从；一致" },
      { word: "reform", meaning: "改革（re+form 重新塑形）" },
      { word: "transform", meaning: "转变（trans+form 跨越塑形）" }
    ],
    synonyms: [
      { word: "comply", nuance: "遵守规定", formality: "formal" },
      { word: "obey", nuance: "服从命令", formality: "neutral" },
      { word: "fit in", nuance: "融入群体，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "conform to + standards/norms", example: "All products must conform to safety standards." },
      { pattern: "pressure to conform", example: "Teenagers face pressure to conform." },
      { pattern: "refuse to conform", example: "She refused to conform to expectations." }
    ],
    layers: [
      { level: "物理层", meaning: "形状或结构符合标准", example: "The parts must conform to exact specifications." },
      { level: "认知层", meaning: "行为符合社会规范", example: "New employees quickly learn to conform to the office culture." },
      { level: "精神层", meaning: "为融入而放弃独特性", example: "To conform blindly is to press your soul into a mold not made for it." }
    ]
  },
  "console": {
    etymology: { roots: "con- (with) + sole (comfort)", origin: "Latin: consolari ← com- (with/together) + solari (to comfort, soothe)", mnemonic: "与人一起(con)慰藉(solari→solace安慰)→安慰" },
    cognates: [
      { word: "consolation", meaning: "安慰（名词）" },
      { word: "solace", meaning: "慰藉" },
      { word: "desolate", meaning: "荒凉的（de+solari 失去安慰）" }
    ],
    synonyms: [
      { word: "comfort", nuance: "使舒适安心", formality: "neutral" },
      { word: "soothe", nuance: "平息情绪", formality: "neutral" },
      { word: "reassure", nuance: "消除疑虑", formality: "neutral" }
    ],
    collocations: [
      { pattern: "console + someone", example: "She tried to console her grieving friend." },
      { pattern: "console + oneself", example: "He consoled himself with the thought that he had tried." },
      { pattern: "difficult to console", example: "The child was difficult to console after the nightmare." }
    ],
    layers: [
      { level: "物理层", meaning: "拥抱或陪伴以安慰", example: "She held his hand to console him." },
      { level: "认知层", meaning: "用道理或话语宽慰", example: "The doctor consoled the family by explaining the treatment plan." },
      { level: "精神层", meaning: "在绝望中给予灵魂光亮", example: "In the darkest hour, only the presence of a true friend can console a shattered soul." }
    ]
  },
  "consolidate": {
    etymology: { roots: "con- (together) + solid (solid) + -ate", origin: "Latin: consolidare ← com- (together) + solidare (to make solid, from solidus)", mnemonic: "使之完全凝固(solid→固体)→巩固" },
    cognates: [
      { word: "consolidation", meaning: "巩固；合并" },
      { word: "solid", meaning: "固体的；坚实的" },
      { word: "solidarity", meaning: "团结（共同的坚固）" }
    ],
    synonyms: [
      { word: "strengthen", nuance: "增强力量", formality: "neutral" },
      { word: "merge", nuance: "合并组织", formality: "formal" },
      { word: "fortify", nuance: "加固防御", formality: "formal" }
    ],
    collocations: [
      { pattern: "consolidate + power/position", example: "The leader consolidated power after the election." },
      { pattern: "consolidate + gains", example: "The army consolidated its gains before advancing." },
      { pattern: "consolidate + debt", example: "She consolidated her student loans into one payment." }
    ],
    layers: [
      { level: "物理层", meaning: "将分散的合为整体", example: "The company consolidated its offices into one building." },
      { level: "认知层", meaning: "巩固知识或成果", example: "Review sessions help students consolidate what they've learned." },
      { level: "精神层", meaning: "将内在力量凝聚为坚实基础", example: "Consolidate your inner peace before facing the storms of the world." }
    ]
  },
  "constrain": {
    etymology: { roots: "con- (together) + strain (tighten)", origin: "Latin: constringere ← com- (together) + stringere (to draw tight, bind)", mnemonic: "紧紧拉(string→stringent严格)在一起→约束" },
    cognates: [
      { word: "constraint", meaning: "约束；限制" },
      { word: "restrict", meaning: "限制（re+strict 拉回来）" },
      { word: "strict", meaning: "严格的（拉紧的）" }
    ],
    synonyms: [
      { word: "restrict", nuance: "限制范围", formality: "neutral" },
      { word: "confine", nuance: "关在里面", formality: "formal" },
      { word: "curb", nuance: "抑制，中性", formality: "neutral" }
    ],
    collocations: [
      { pattern: "constrain + by budget/time", example: "The project was constrained by a tight budget." },
      { pattern: "feel constrained", example: "She felt constrained by the rigid rules." },
      { pattern: "constrain + growth", example: "Regulations constrained economic growth." }
    ],
    layers: [
      { level: "物理层", meaning: "物理束缚或限制", example: "The straitjacket constrained his movements." },
      { level: "认知层", meaning: "规则或条件的限制", example: "Limited resources constrain what we can achieve." },
      { level: "精神层", meaning: "压制自由意志或创造力", example: "Fear constrains the imagination; only courage sets it free." }
    ]
  },
  "convey": {
    etymology: { roots: "con- (together) + vey (way/carry)", origin: "Latin: via (way) → Old French: conveier ← com- (together) + via (way)", mnemonic: "沿着路(via→way)一起运送→传达" },
    cognates: [
      { word: "conveyance", meaning: "运输；传达" },
      { word: "convoy", meaning: "护航队（一起走）" },
      { word: "via", meaning: "经由（通过某路）" }
    ],
    synonyms: [
      { word: "communicate", nuance: "传递信息", formality: "neutral" },
      { word: "express", nuance: "表达情感", formality: "neutral" },
      { word: "relay", nuance: "转达消息", formality: "neutral" }
    ],
    collocations: [
      { pattern: "convey + message/meaning", example: "The painting conveys a sense of solitude." },
      { pattern: "convey + emotions", example: "Words cannot convey how grateful I am." },
      { pattern: "effectively convey", example: "The speaker effectively conveyed the urgency of the situation." }
    ],
    layers: [
      { level: "物理层", meaning: "运送物品到目的地", example: "Trucks conveyed supplies to the disaster zone." },
      { level: "认知层", meaning: "清晰传递信息或意义", example: "The diagram conveys complex data at a glance." },
      { level: "精神层", meaning: "跨越语言传递灵魂的共鸣", example: "Music conveys what words cannot — the ineffable depths of the human heart." }
    ]
  },
  "corrode": {
    etymology: { roots: "cor- (completely) + rode (gnaw)", origin: "Latin: corrodere ← com- (completely) + rodere (to gnaw)", mnemonic: "完全啃蚀(rod→rodent啮齿动物)→腐蚀" },
    cognates: [
      { word: "corrosion", meaning: "腐蚀（名词）" },
      { word: "corrosive", meaning: "腐蚀性的" },
      { word: "erode", meaning: "侵蚀（e+rode 向外啃蚀）" }
    ],
    synonyms: [
      { word: "erode", nuance: "逐渐侵蚀", formality: "neutral" },
      { word: "rust", nuance: "生锈（金属）", formality: "neutral" },
      { word: "deteriorate", nuance: "变坏恶化", formality: "formal" }
    ],
    collocations: [
      { pattern: "corrode + metal/iron", example: "Salt water corrodes iron rapidly." },
      { pattern: "corrode + trust", example: "Lies slowly corrode trust." },
      { pattern: "corrode + from within", example: "The institution corroded from within." }
    ],
    layers: [
      { level: "物理层", meaning: "化学反应腐蚀金属", example: "Acid corroded the copper pipe." },
      { level: "认知层", meaning: "逐渐损害制度或关系", example: "Corruption corrodes public institutions." },
      { level: "精神层", meaning: "怨恨从内部蛀空灵魂", example: "Bitterness corrodes the vessel in which it is stored, not the one it is aimed at." }
    ]
  },
  "covet": {
    etymology: { roots: "covet (desire eagerly)", origin: "Latin: cupiditas (desire) → Old French: coveitier (to desire), from cupere (to long for)", mnemonic: "像丘比特(Cupid)之箭般灼热地渴望→觊觎" },
    cognates: [
      { word: "covetous", meaning: "贪婪的" },
      { word: "cupidity", meaning: "贪欲" },
      { word: "Cupid", meaning: "丘比特（欲望之神）" }
    ],
    synonyms: [
      { word: "desire", nuance: "渴望，中性", formality: "neutral" },
      { word: "envy", nuance: "嫉妒他人所有", formality: "neutral" },
      { word: "crave", nuance: "强烈渴求", formality: "neutral" }
    ],
    collocations: [
      { pattern: "covet + neighbor's", example: "Thou shalt not covet thy neighbor's goods." },
      { pattern: "coveted + prize/position", example: "The coveted award went to a newcomer." },
      { pattern: "secretly covet", example: "He secretly coveted his colleague's promotion." }
    ],
    layers: [
      { level: "物理层", meaning: "渴望得到实物", example: "She coveted the diamond necklace in the window." },
      { level: "认知层", meaning: "嫉妒他人的成就或地位", example: "He coveted his rival's reputation in the field." },
      { level: "精神层", meaning: "贪欲成为灵魂的牢笼", example: "To covet endlessly is to imprison the soul in a cage of its own making." }
    ]
  },
  "crumble": {
    etymology: { roots: "crumb (fragment) + -le (diminutive/frequentative)", origin: "Old English: cruma (crumb, fragment) + -le (repeated action suffix)", mnemonic: "不断变成碎屑(crumb→面包屑)→崩塌" },
    cognates: [
      { word: "crumb", meaning: "碎屑；面包屑" },
      { word: "crumble (n.)", meaning: "酥饼（碎成块的糕点）" }
    ],
    synonyms: [
      { word: "collapse", nuance: "突然倒塌", formality: "neutral" },
      { word: "disintegrate", nuance: "解体分裂", formality: "formal" },
      { word: "fall apart", nuance: "散架，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "crumble + to dust", example: "The ancient wall crumbled to dust." },
      { pattern: "crumble + under pressure", example: "His confidence crumbled under pressure." },
      { pattern: "empires crumble", example: "Even the mightiest empires crumble." }
    ],
    layers: [
      { level: "物理层", meaning: "物质碎裂瓦解", example: "The dry cookie crumbled in her hand." },
      { level: "认知层", meaning: "计划或组织的崩溃", example: "The alliance crumbled after the betrayal." },
      { level: "精神层", meaning: "信念或意志的瓦解", example: "His resolve crumbled when he realized how alone he truly was." }
    ]
  },
  "curtail": {
    etymology: { roots: "curt- (short) + -ail (tail)", origin: "Middle English: from curtal (a horse with a docked tail) ← Old French courtauld ← court (short)", mnemonic: "截短尾巴(curt→短+tail尾)→缩减" },
    cognates: [
      { word: "curtailment", meaning: "缩减（名词）" },
      { word: "curt", meaning: "简短粗鲁的" },
      { word: "curtain", meaning: "窗帘（截断视线的布）" }
    ],
    synonyms: [
      { word: "reduce", nuance: "减少，通用", formality: "neutral" },
      { word: "cut back", nuance: "削减，口语", formality: "informal" },
      { word: "abridge", nuance: "缩减篇幅", formality: "formal" }
    ],
    collocations: [
      { pattern: "curtail + spending/costs", example: "The company curtailed spending during the downturn." },
      { pattern: "curtail + freedom/rights", example: "The law curtailed civil liberties." },
      { pattern: "severely curtail", example: "The storm severely curtailed travel." }
    ],
    layers: [
      { level: "物理层", meaning: "缩短或减少", example: "The event was curtailed due to bad weather." },
      { level: "认知层", meaning: "限制活动或权利", example: "New regulations curtailed the company's expansion plans." },
      { level: "精神层", meaning: "削减自由是对灵魂的阉割", example: "To curtail essential freedoms is to cut the wings from the human spirit." }
    ]
  },
  "deceive": {
    etymology: { roots: "de- (from/down) + ceive (take/seize)", origin: "Latin: decipere ← de- (from, away) + capere (to take, seize)", mnemonic: "从上方扑下来抓住(cap→capture)→欺骗(设陷阱)" },
    cognates: [
      { word: "deception", meaning: "欺骗（名词）" },
      { word: "deceit", meaning: "欺诈" },
      { word: "receive", meaning: "接收（re+ceive 接回来）" }
    ],
    synonyms: [
      { word: "mislead", nuance: "误导", formality: "neutral" },
      { word: "dupe", nuance: "愚弄", formality: "neutral" },
      { word: "hoodwink", nuance: "蒙蔽", formality: "informal" }
    ],
    collocations: [
      { pattern: "deceive + into", example: "He deceived her into signing the contract." },
      { pattern: "appearances deceive", example: "Appearances can deceive." },
      { pattern: "deceive + oneself", example: "Don't deceive yourself about the risks." }
    ],
    layers: [
      { level: "物理层", meaning: "伪装外表以误导", example: "The camouflage deceived the predator." },
      { level: "认知层", meaning: "用谎言制造虚假认知", example: "The fraudster deceived investors with fake reports." },
      { level: "精神层", meaning: "自我欺骗是最深的谎言", example: "The cruelest deception is the one we practice upon ourselves." }
    ]
  },
  "dedicate": {
    etymology: { roots: "de- (completely) + dic (declare) + -ate", origin: "Latin: dedicare ← de- (completely) + dicare (to proclaim, devote)", mnemonic: "完全宣告(dic→dictate)奉献→致力于" },
    cognates: [
      { word: "dedication", meaning: "奉献；题献" },
      { word: "dictate", meaning: "口述；命令" },
      { word: "indicate", meaning: "指示（in+dic 向内宣告）" }
    ],
    synonyms: [
      { word: "devote", nuance: "投入全部精力", formality: "neutral" },
      { word: "commit", nuance: "承诺投入", formality: "neutral" },
      { word: "consecrate", nuance: "神圣地奉献", formality: "formal" }
    ],
    collocations: [
      { pattern: "dedicate + life/time", example: "She dedicated her life to science." },
      { pattern: "dedicate + to the memory of", example: "The monument was dedicated to the fallen." },
      { pattern: "dedicate + oneself", example: "He dedicated himself to the cause." }
    ],
    layers: [
      { level: "物理层", meaning: "将建筑或作品献给某人", example: "The author dedicated the book to her mother." },
      { level: "认知层", meaning: "全身心投入事业", example: "She dedicated years to perfecting the technique." },
      { level: "精神层", meaning: "将生命庄严献给崇高事业", example: "To dedicate oneself to a cause greater than oneself is the noblest form of human action." }
    ]
  },
  "defer": {
    etymology: { roots: "de- (away) + fer (carry)", origin: "Latin: differre ← dis- (apart) + ferre (to carry); also deferre (to carry down → show respect)", mnemonic: "搬到别处(fer→ferry运送)→推迟/尊重" },
    cognates: [
      { word: "deferral", meaning: "推迟（名词）" },
      { word: "deference", meaning: "尊重；顺从" },
      { word: "transfer", meaning: "转移（trans+fer）" }
    ],
    synonyms: [
      { word: "postpone", nuance: "推迟日期", formality: "neutral" },
      { word: "delay", nuance: "延迟，通用", formality: "neutral" },
      { word: "yield to", nuance: "顺从让步", formality: "neutral" }
    ],
    collocations: [
      { pattern: "defer + to someone's judgment", example: "She deferred to the expert's judgment." },
      { pattern: "defer + decision/payment", example: "They deferred the decision until next month." },
      { pattern: "dream deferred", example: "A dream deferred can fester in the heart." }
    ],
    layers: [
      { level: "物理层", meaning: "将事项延后处理", example: "The meeting was deferred to Friday." },
      { level: "认知层", meaning: "尊重权威或专长而让步", example: "The junior doctor deferred to the surgeon's experience." },
      { level: "精神层", meaning: "梦想被流放到永远的'以后'", example: "A dream deferred too long becomes a wound that never heals." }
    ]
  },
  "defy": {
    etymology: { roots: "de- (away) + fy (faith/trust)", origin: "Old French: desfier ← des- (away) + fier (to trust, from Latin fidere)", mnemonic: "解除忠诚(de+fid→fidelity)→违抗" },
    cognates: [
      { word: "defiance", meaning: "违抗；蔑视" },
      { word: "defiant", meaning: "挑衅的" },
      { word: "fidelity", meaning: "忠诚（反义词根）" }
    ],
    synonyms: [
      { word: "resist", nuance: "抵抗", formality: "neutral" },
      { word: "challenge", nuance: "挑战", formality: "neutral" },
      { word: "flout", nuance: "公然藐视", formality: "formal" }
    ],
    collocations: [
      { pattern: "defy + expectations", example: "She defied all expectations." },
      { pattern: "defy + authority", example: "The rebels defied the government's authority." },
      { pattern: "defy + logic/gravity", example: "The acrobat seemed to defy gravity." }
    ],
    layers: [
      { level: "物理层", meaning: "违抗命令或禁令", example: "The protesters defied the curfew and marched on." },
      { level: "认知层", meaning: "挑战传统或预期", example: "The discovery defied conventional scientific wisdom." },
      { level: "精神层", meaning: "灵魂对不义权威的抗命", example: "To defy the powers of an unjust age demands a conviction that transcends fear." }
    ]
  },
  "deliberate": {
    etymology: { roots: "de- (completely) + liber (weigh/balance) + -ate", origin: "Latin: deliberare ← de- (completely) + librare (to weigh, from libra = scales)", mnemonic: "在天平(libra→Libra天秤座)上完全称量→仔细考虑" },
    cognates: [
      { word: "deliberation", meaning: "审议；深思熟虑" },
      { word: "libra", meaning: "天秤座" },
      { word: "equilibrium", meaning: "平衡（equal+libr 平等称量）" }
    ],
    synonyms: [
      { word: "consider", nuance: "考虑，通用", formality: "neutral" },
      { word: "ponder", nuance: "沉思", formality: "neutral" },
      { word: "mull over", nuance: "仔细琢磨，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "deliberate + on/over", example: "The jury deliberated over the verdict." },
      { pattern: "deliberate + carefully", example: "They deliberated carefully before deciding." },
      { pattern: "after much deliberation", example: "After much deliberation, she accepted the offer." }
    ],
    layers: [
      { level: "物理层", meaning: "正式讨论和审议", example: "The committee deliberated for three hours." },
      { level: "认知层", meaning: "系统性地权衡利弊", example: "She deliberated the pros and cons of each option." },
      { level: "精神层", meaning: "在天平上称量灵魂的选择", example: "To deliberate wisely is to hold every possibility on the scales of conscience." }
    ]
  },
  "demolish": {
    etymology: { roots: "de- (down) + mol (build) + -ish", origin: "Latin: demoliri ← de- (down) + moliri (to construct, from moles = massive structure)", mnemonic: "把巨大建筑(moles→massive)拆下来(de)→拆除" },
    cognates: [
      { word: "demolition", meaning: "拆除（名词）" },
      { word: "molecule", meaning: "分子（小结构）" },
      { word: "mole", meaning: "防波堤（巨大结构）" }
    ],
    synonyms: [
      { word: "destroy", nuance: "摧毁，通用", formality: "neutral" },
      { word: "raze", nuance: "夷为平地", formality: "formal" },
      { word: "tear down", nuance: "推倒，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "demolish + building", example: "They demolished the condemned building." },
      { pattern: "demolish + argument", example: "She demolished his argument in seconds." },
      { pattern: "demolish + opposition", example: "The team demolished the opposition 5-0." }
    ],
    layers: [
      { level: "物理层", meaning: "拆除建筑物", example: "The wrecking crew demolished the old factory." },
      { level: "认知层", meaning: "彻底推翻论点", example: "The lawyer demolished the prosecution's case." },
      { level: "精神层", meaning: "拆除旧有的内在结构以重建", example: "Before we can build a better self, we must demolish the walls of our own illusions." }
    ]
  },
  "denounce": {
    etymology: { roots: "de- (down/thoroughly) + nounce (announce)", origin: "Latin: denuntiare ← de- (down) + nuntiare (to announce, from nuntius = messenger)", mnemonic: "彻底地公告(nounce→announce宣布)→谴责" },
    cognates: [
      { word: "denunciation", meaning: "谴责（名词）" },
      { word: "announce", meaning: "宣布" },
      { word: "pronounce", meaning: "发音；宣判" }
    ],
    synonyms: [
      { word: "condemn", nuance: "强烈谴责", formality: "formal" },
      { word: "criticize", nuance: "批评，较轻", formality: "neutral" },
      { word: "call out", nuance: "公开指责，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "denounce + as", example: "She denounced the policy as discriminatory." },
      { pattern: "publicly denounce", example: "The leader publicly denounced the attack." },
      { pattern: "denounce + violence", example: "All parties denounced the act of violence." }
    ],
    layers: [
      { level: "物理层", meaning: "公开宣布反对", example: "The union denounced the unsafe working conditions." },
      { level: "认知层", meaning: "以道义理由谴责行为", example: "Scholars denounced the falsification of data." },
      { level: "精神层", meaning: "良知对不义的庄严审判", example: "To denounce injustice aloud is the sacred duty of every awakened conscience." }
    ]
  },
  "depict": {
    etymology: { roots: "de- (completely) + pict (paint)", origin: "Latin: depingere ← de- (completely) + pingere (to paint)", mnemonic: "完全地绘画(pict→picture图画)→描绘" },
    cognates: [
      { word: "depiction", meaning: "描绘（名词）" },
      { word: "picture", meaning: "图画" },
      { word: "pigment", meaning: "颜料（绘画的材料）" }
    ],
    synonyms: [
      { word: "portray", nuance: "刻画人物", formality: "neutral" },
      { word: "illustrate", nuance: "配图说明", formality: "neutral" },
      { word: "show", nuance: "展示，通用", formality: "neutral" }
    ],
    collocations: [
      { pattern: "depict + scene/life", example: "The mural depicts rural life." },
      { pattern: "accurately depict", example: "The film accurately depicts wartime conditions." },
      { pattern: "depict + as", example: "The media depicted him as a villain." }
    ],
    layers: [
      { level: "物理层", meaning: "用图像再现事物", example: "The cave paintings depict hunting scenes." },
      { level: "认知层", meaning: "用语言或艺术刻画事实", example: "The report depicts the economic situation clearly." },
      { level: "精神层", meaning: "揭示表象之下的真相", example: "The greatest art does not merely depict reality — it reveals the soul beneath the surface." }
    ]
  },
  "deplete": {
    etymology: { roots: "de- (completely) + plete (fill)", origin: "Latin: deplere ← de- (away, completely) + plere (to fill)", mnemonic: "把满(plete→complete完全)的东西倒空(de)→耗尽" },
    cognates: [
      { word: "depletion", meaning: "耗尽（名词）" },
      { word: "complete", meaning: "完整的（com+plete 完全填满）" },
      { word: "replete", meaning: "充满的（re+plete 再填满）" }
    ],
    synonyms: [
      { word: "exhaust", nuance: "用尽，正式", formality: "formal" },
      { word: "drain", nuance: "排干抽空", formality: "neutral" },
      { word: "use up", nuance: "用光，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "deplete + resources/reserves", example: "War depleted the nation's resources." },
      { pattern: "severely depleted", example: "Fish stocks are severely depleted." },
      { pattern: "deplete + energy", example: "The long hike depleted her energy." }
    ],
    layers: [
      { level: "物理层", meaning: "消耗物质资源", example: "Mining has depleted the region's mineral reserves." },
      { level: "认知层", meaning: "精力或注意力的枯竭", example: "Constant multitasking depletes cognitive resources." },
      { level: "精神层", meaning: "掏空未来以满足当下", example: "To deplete the earth for today's comfort is to rob tomorrow's children of their birthright." }
    ]
  },
  "derive": {
    etymology: { roots: "de- (from) + rive (river/stream)", origin: "Latin: derivare ← de- (from) + rivus (stream, river)", mnemonic: "从河流(riv→river)中引水→获得/起源" },
    cognates: [
      { word: "derivation", meaning: "推导；起源" },
      { word: "derivative", meaning: "衍生物；导数" },
      { word: "river", meaning: "河流" }
    ],
    synonyms: [
      { word: "obtain", nuance: "获得，正式", formality: "formal" },
      { word: "stem from", nuance: "源于", formality: "neutral" },
      { word: "get", nuance: "获取，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "derive + from", example: "Many English words derive from Latin." },
      { pattern: "derive + pleasure/satisfaction", example: "She derived great pleasure from music." },
      { pattern: "derive + benefit", example: "Both sides derived benefit from the agreement." }
    ],
    layers: [
      { level: "物理层", meaning: "从源头提取物质", example: "The medicine is derived from a rare plant." },
      { level: "认知层", meaning: "推导出结论或规律", example: "He derived the formula from first principles." },
      { level: "精神层", meaning: "从生活中汲取意义", example: "We derive our deepest joy not from possessions but from purpose." }
    ]
  },
  "devise": {
    etymology: { roots: "de- (out) + vise (see/divide)", origin: "Latin: divisare (to distribute, plan) ← dividere (to divide, separate)", mnemonic: "将问题分(divide→division)而治之→设计策划" },
    cognates: [
      { word: "device", meaning: "设备；策略" },
      { word: "divide", meaning: "分割" },
      { word: "division", meaning: "分割；部门" }
    ],
    synonyms: [
      { word: "invent", nuance: "发明新事物", formality: "neutral" },
      { word: "contrive", nuance: "巧妙设计", formality: "formal" },
      { word: "come up with", nuance: "想出，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "devise + plan/strategy", example: "They devised a strategy to win the market." },
      { pattern: "devise + method/solution", example: "She devised an elegant solution." },
      { pattern: "cleverly devise", example: "He cleverly devised a way to escape." }
    ],
    layers: [
      { level: "物理层", meaning: "设计制造工具", example: "The engineer devised a new locking mechanism." },
      { level: "认知层", meaning: "构思方案或方法", example: "The team devised a three-phase implementation plan." },
      { level: "精神层", meaning: "人类心智克服自然的创造力", example: "The human mind can devise solutions to any obstacle that nature or fate presents." }
    ]
  },
  "devour": {
    etymology: { roots: "de- (completely) + vour (swallow)", origin: "Latin: devorare ← de- (completely) + vorare (to swallow greedily)", mnemonic: "完全吞下(vor→voracious贪婪)→吞噬" },
    cognates: [
      { word: "voracious", meaning: "贪婪的" },
      { word: "carnivore", meaning: "食肉动物" },
      { word: "omnivore", meaning: "杂食动物" }
    ],
    synonyms: [
      { word: "consume", nuance: "消耗，中性", formality: "neutral" },
      { word: "gobble", nuance: "狼吞虎咽，口语", formality: "informal" },
      { word: "engulf", nuance: "吞没，正式", formality: "formal" }
    ],
    collocations: [
      { pattern: "devour + book/food", example: "She devoured the novel in one sitting." },
      { pattern: "devour + with eyes", example: "He devoured the painting with his eyes." },
      { pattern: "flames devour", example: "Flames devoured the old building." }
    ],
    layers: [
      { level: "物理层", meaning: "贪婪地吃掉", example: "The wolf devoured the rabbit in seconds." },
      { level: "认知层", meaning: "如饥似渴地阅读/学习", example: "She devoured every book on the subject." },
      { level: "精神层", meaning: "被某种力量完全吞噬", example: "Grief devoured him until nothing else remained." }
    ]
  },
  "dispel": {
    etymology: { roots: "dis- (apart) + pel (drive)", origin: "Latin: dispellere ← dis- (apart, in all directions) + pellere (to drive, push)", mnemonic: "向四面八方驱赶(pel→repel击退)→驱散" },
    cognates: [
      { word: "compel", meaning: "迫使（com+pel 一起驱赶）" },
      { word: "repel", meaning: "击退（re+pel）" },
      { word: "propel", meaning: "推进（pro+pel 向前驱赶）" }
    ],
    synonyms: [
      { word: "banish", nuance: "驱逐，正式", formality: "formal" },
      { word: "dismiss", nuance: "打消念头", formality: "neutral" },
      { word: "scatter", nuance: "驱散人群", formality: "neutral" }
    ],
    collocations: [
      { pattern: "dispel + myth/rumor", example: "The report dispelled the myth." },
      { pattern: "dispel + doubt/fear", example: "Her words dispelled all doubt." },
      { pattern: "dispel + darkness", example: "A single candle can dispel darkness." }
    ],
    layers: [
      { level: "物理层", meaning: "驱散雾气或人群", example: "The wind dispelled the morning fog." },
      { level: "认知层", meaning: "消除误解或疑虑", example: "The evidence dispelled any remaining doubts." },
      { level: "精神层", meaning: "以真理驱散心灵的幻象", example: "One moment of clarity can dispel a lifetime of illusion." }
    ]
  },
  "disrupt": {
    etymology: { roots: "dis- (apart) + rupt (break)", origin: "Latin: disrumpere ← dis- (apart) + rumpere (to break)", mnemonic: "打碎(rupt→rupture破裂)成碎片→扰乱/颠覆" },
    cognates: [
      { word: "disruption", meaning: "颠覆；中断" },
      { word: "erupt", meaning: "爆发（e+rupt 爆裂出来）" },
      { word: "corrupt", meaning: "腐败（cor+rupt 完全碎裂）" }
    ],
    synonyms: [
      { word: "disturb", nuance: "打扰，较轻", formality: "neutral" },
      { word: "interrupt", nuance: "中断进程", formality: "neutral" },
      { word: "upend", nuance: "彻底颠覆", formality: "neutral" }
    ],
    collocations: [
      { pattern: "disrupt + industry/market", example: "Uber disrupted the taxi industry." },
      { pattern: "disrupt + plans", example: "The storm disrupted travel plans." },
      { pattern: "disruptive + technology", example: "AI is a disruptive technology." }
    ],
    layers: [
      { level: "物理层", meaning: "中断正常运作", example: "The power outage disrupted the factory." },
      { level: "认知层", meaning: "颠覆传统模式", example: "The startup disrupted conventional banking." },
      { level: "精神层", meaning: "打破旧有秩序开辟新天地", example: "True innovation disrupts not just markets but the very way we think about what is possible." }
    ]
  },
  "dissipate": {
    etymology: { roots: "dis- (apart) + sip (throw)", origin: "Latin: dissipare ← dis- (apart) + sipare/supare (to throw, scatter)", mnemonic: "向四面八方抛撒(sip→散播)→消散/挥霍" },
    cognates: [
      { word: "dissipation", meaning: "消散；放荡" },
      { word: "insipid", meaning: "乏味的（in+sipid 无味散去）" }
    ],
    synonyms: [
      { word: "disperse", nuance: "分散开", formality: "neutral" },
      { word: "vanish", nuance: "消失不见", formality: "neutral" },
      { word: "squander", nuance: "挥霍浪费", formality: "neutral" }
    ],
    collocations: [
      { pattern: "dissipate + heat/energy", example: "The fins dissipate heat from the engine." },
      { pattern: "dissipate + tension", example: "Laughter helped dissipate the tension." },
      { pattern: "gradually dissipate", example: "The fog gradually dissipated." }
    ],
    layers: [
      { level: "物理层", meaning: "能量或物质消散", example: "Heat dissipates quickly in cold air." },
      { level: "认知层", meaning: "紧张或疑虑逐渐消退", example: "Her fears dissipated once she saw the results." },
      { level: "精神层", meaning: "痛苦随时间稀释", example: "Even the deepest grief will dissipate if given enough time and enough light." }
    ]
  },
  "distinguish": {
    etymology: { roots: "dis- (apart) + ting (prick/mark) + -uish", origin: "Latin: distinguere ← dis- (apart) + stinguere (to prick, mark)", mnemonic: "用标记(sting→刺)将事物分开→区分" },
    cognates: [
      { word: "distinction", meaning: "区别；卓越" },
      { word: "distinct", meaning: "明显的；不同的" },
      { word: "extinguish", meaning: "熄灭（ex+stinguere 刺灭）" }
    ],
    synonyms: [
      { word: "differentiate", nuance: "细分差异", formality: "formal" },
      { word: "discern", nuance: "辨别细微差异", formality: "formal" },
      { word: "tell apart", nuance: "区分开，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "distinguish + between", example: "It's important to distinguish between fact and opinion." },
      { pattern: "distinguish + oneself", example: "She distinguished herself in the field of medicine." },
      { pattern: "clearly distinguish", example: "The test clearly distinguishes the two compounds." }
    ],
    layers: [
      { level: "物理层", meaning: "辨别外观差异", example: "He could distinguish the bird by its song." },
      { level: "认知层", meaning: "在复杂信息中辨别关键", example: "Wisdom is the ability to distinguish the essential from the trivial." },
      { level: "精神层", meaning: "以卓越使自己与众不同", example: "What distinguishes a life well-lived is not fame but the depth of its compassion." }
    ]
  },
  "diverge": {
    etymology: { roots: "di- (apart) + verge (incline)", origin: "Latin: divergere ← di-/dis- (apart) + vergere (to incline, bend)", mnemonic: "向不同方向倾斜(verge→边缘)→分叉" },
    cognates: [
      { word: "divergence", meaning: "分歧；偏差" },
      { word: "converge", meaning: "汇聚（con+verge 一起倾向）" },
      { word: "verge", meaning: "边缘；趋近" }
    ],
    synonyms: [
      { word: "split", nuance: "分裂，直接", formality: "neutral" },
      { word: "deviate", nuance: "偏离正轨", formality: "formal" },
      { word: "branch off", nuance: "分支出去，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "diverge + from", example: "Their views diverge on this issue." },
      { pattern: "paths/roads diverge", example: "Two roads diverged in a yellow wood." },
      { pattern: "opinions diverge", example: "Expert opinions diverge widely." }
    ],
    layers: [
      { level: "物理层", meaning: "道路或河流分叉", example: "The trail diverges at the old oak tree." },
      { level: "认知层", meaning: "观点或方向出现分歧", example: "The researchers' conclusions diverged significantly." },
      { level: "精神层", meaning: "人生道路的分叉决定命运", example: "At some silent crossroads, our paths diverge, and the choice we make defines who we become." }
    ]
  },
  "dominate": {
    etymology: { roots: "domin- (lord/master) + -ate", origin: "Latin: dominare ← dominus (lord, master) ← domus (house)", mnemonic: "成为房子(domus→domestic)的主人(dominus)→支配" },
    cognates: [
      { word: "domination", meaning: "统治；支配" },
      { word: "domain", meaning: "领域（主人的地盘）" },
      { word: "domestic", meaning: "家庭的（domus=房子）" }
    ],
    synonyms: [
      { word: "control", nuance: "控制，通用", formality: "neutral" },
      { word: "prevail", nuance: "占优势", formality: "formal" },
      { word: "rule", nuance: "统治", formality: "neutral" }
    ],
    collocations: [
      { pattern: "dominate + market/industry", example: "The company dominates the smartphone market." },
      { pattern: "dominate + conversation", example: "He tends to dominate the conversation." },
      { pattern: "dominate + landscape", example: "The mountain dominates the landscape." }
    ],
    layers: [
      { level: "物理层", meaning: "在空间中占据主导", example: "The castle dominates the skyline." },
      { level: "认知层", meaning: "在竞争中占据优势", example: "The team dominated the tournament." },
      { level: "精神层", meaning: "真正的力量是驾驭自我", example: "He who dominates himself is mightier than he who dominates others." }
    ]
  },
  "dread": {
    etymology: { roots: "dread (fear greatly)", origin: "Old English: drǣdan (to fear, advise against), from Proto-Germanic *drēdan", mnemonic: "内心深处的恐惧→畏惧" },
    cognates: [
      { word: "dread (n.)", meaning: "恐惧；畏惧" },
      { word: "dreadful", meaning: "可怕的" },
      { word: "dreadnought", meaning: "无畏舰（不惧怕的）" }
    ],
    synonyms: [
      { word: "fear", nuance: "害怕，通用", formality: "neutral" },
      { word: "apprehend", nuance: "忧虑预感", formality: "formal" },
      { word: "be terrified of", nuance: "极度害怕，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "dread + the thought of", example: "She dreads the thought of public speaking." },
      { pattern: "dread + future/outcome", example: "He dreaded what the test results might show." },
      { pattern: "live in dread", example: "They lived in dread of the next attack." }
    ],
    layers: [
      { level: "物理层", meaning: "对具体威胁的恐惧", example: "The villagers dreaded the approaching storm." },
      { level: "认知层", meaning: "对未来不确定性的焦虑", example: "She dreaded the upcoming performance review." },
      { level: "精神层", meaning: "对存在未知的深层恐惧", example: "The only thing we have to dread is dread itself — the paralysis born of our own imagination." }
    ]
  },
  "eclipse": {
    etymology: { roots: "ec- (out) + lipse (leaving)", origin: "Greek: ekleipsis (abandonment, failing) ← ek- (out) + leipein (to leave)", mnemonic: "光离去(leip→leave离开)了→遮蔽/使黯然失色" },
    cognates: [
      { word: "eclipse (n.)", meaning: "日食/月食" },
      { word: "ellipsis", meaning: "省略号（省略/离开的部分）" }
    ],
    synonyms: [
      { word: "surpass", nuance: "超越", formality: "neutral" },
      { word: "overshadow", nuance: "使相形见绌", formality: "neutral" },
      { word: "outshine", nuance: "光芒盖过", formality: "neutral" }
    ],
    collocations: [
      { pattern: "eclipse + record/rival", example: "The new model eclipsed its predecessor." },
      { pattern: "totally eclipse", example: "Her talent totally eclipsed the competition." },
      { pattern: "eclipse + in popularity", example: "Streaming has eclipsed cable in popularity." }
    ],
    layers: [
      { level: "物理层", meaning: "天体遮蔽另一天体", example: "The moon eclipsed the sun for three minutes." },
      { level: "认知层", meaning: "成就或声望超越他人", example: "The student's work eclipsed that of her teacher." },
      { level: "精神层", meaning: "黑暗暂时遮蔽但永远无法消灭光明", example: "No shadow can forever eclipse the light of truth." }
    ]
  },
  "elucidate": {
    etymology: { roots: "e- (out) + lucid (light) + -ate", origin: "Latin: elucidare ← e- (out) + lucidus (clear, bright) ← lux (light)", mnemonic: "让光(lux→lucid明亮)照出来→阐明" },
    cognates: [
      { word: "elucidation", meaning: "阐明（名词）" },
      { word: "lucid", meaning: "清晰的；清醒的" },
      { word: "translucent", meaning: "半透明的" }
    ],
    synonyms: [
      { word: "clarify", nuance: "使清晰", formality: "neutral" },
      { word: "illuminate", nuance: "照亮/启发", formality: "formal" },
      { word: "spell out", nuance: "详细说明，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "elucidate + mechanism/process", example: "The study elucidated the mechanism of action." },
      { pattern: "elucidate + further", example: "Allow me to elucidate further." },
      { pattern: "elucidate + relationship", example: "The research elucidated the relationship between diet and health." }
    ],
    layers: [
      { level: "物理层", meaning: "使模糊之物变清晰", example: "The diagram elucidated the complex circuit." },
      { level: "认知层", meaning: "用解释照亮深奥概念", example: "The professor elucidated quantum entanglement in simple terms." },
      { level: "精神层", meaning: "以智慧之光照亮真理", example: "To elucidate nature's deepest secrets is the grandest endeavor of the human intellect." }
    ]
  },
  "emanate": {
    etymology: { roots: "e- (out) + man (flow) + -ate", origin: "Latin: emanare ← e- (out of) + manare (to flow)", mnemonic: "从内部流(man→流淌)出来→散发" },
    cognates: [
      { word: "emanation", meaning: "散发物；发出" },
      { word: "immanent", meaning: "内在的（in+man 流在内部）" }
    ],
    synonyms: [
      { word: "radiate", nuance: "辐射发出", formality: "neutral" },
      { word: "emit", nuance: "释放（物理）", formality: "formal" },
      { word: "exude", nuance: "渗出/流露", formality: "neutral" }
    ],
    collocations: [
      { pattern: "emanate + from", example: "A strange smell emanated from the kitchen." },
      { pattern: "light/warmth emanates", example: "Warmth emanated from the fireplace." },
      { pattern: "authority emanates", example: "A quiet authority emanated from her presence." }
    ],
    layers: [
      { level: "物理层", meaning: "光、热、气味从源头发出", example: "Smoke emanated from the chimney." },
      { level: "认知层", meaning: "影响力从中心向外扩散", example: "New policies emanated from the central office." },
      { level: "精神层", meaning: "内在品质自然向外流露", example: "True beauty emanates not from the surface but from the depths of a generous spirit." }
    ]
  },
  "embark": {
    etymology: { roots: "em- (into) + bark (ship)", origin: "French: embarquer ← em- (into) + barque (a type of boat/ship)", mnemonic: "踏上船(barque→bark帆船)→启程/着手" },
    cognates: [
      { word: "embarkation", meaning: "登船；出发" },
      { word: "disembark", meaning: "下船（dis+embark）" },
      { word: "bark/barque", meaning: "帆船" }
    ],
    synonyms: [
      { word: "begin", nuance: "开始，通用", formality: "neutral" },
      { word: "commence", nuance: "正式开始", formality: "formal" },
      { word: "set out", nuance: "出发，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "embark on/upon + journey", example: "She embarked on a new career." },
      { pattern: "embark on + adventure", example: "They embarked on a dangerous adventure." },
      { pattern: "about to embark", example: "We are about to embark on a new chapter." }
    ],
    layers: [
      { level: "物理层", meaning: "登上船只出发", example: "The passengers embarked at dawn." },
      { level: "认知层", meaning: "着手开展新项目", example: "The team embarked on an ambitious research program." },
      { level: "精神层", meaning: "踏上改变命运的旅程", example: "At some point every soul must embark upon the voyage it was born to take." }
    ]
  },
  "embolden": {
    etymology: { roots: "em- (make) + bold + -en", origin: "English: em- (causative prefix) + bold (brave, daring) + -en (verbal suffix)", mnemonic: "使之变得大胆(bold→勇敢)→壮胆" },
    cognates: [
      { word: "bold", meaning: "大胆的；醒目的" },
      { word: "boldness", meaning: "大胆；勇气" }
    ],
    synonyms: [
      { word: "encourage", nuance: "鼓励，中性", formality: "neutral" },
      { word: "empower", nuance: "赋予力量", formality: "neutral" },
      { word: "hearten", nuance: "使振作", formality: "neutral" }
    ],
    collocations: [
      { pattern: "embolden + to act", example: "The victory emboldened them to push further." },
      { pattern: "embolden + opposition", example: "Concessions only emboldened the opposition." },
      { pattern: "feel emboldened", example: "She felt emboldened by their support." }
    ],
    layers: [
      { level: "物理层", meaning: "使人敢于采取行动", example: "The armor emboldened the young knight to charge." },
      { level: "认知层", meaning: "激发信心去面对挑战", example: "The positive feedback emboldened her to submit to a top journal." },
      { level: "精神层", meaning: "一个勇敢的灵魂点燃整代人", example: "One act of defiance can embolden an entire generation to stand for what is right." }
    ]
  },
  "emerge": {
    etymology: { roots: "e- (out) + merge (plunge)", origin: "Latin: emergere ← e- (out of) + mergere (to dip, plunge, sink)", mnemonic: "从水中(merge→沉入)浮出来→出现" },
    cognates: [
      { word: "emergence", meaning: "出现；浮现" },
      { word: "emergency", meaning: "紧急情况（突然浮现的危机）" },
      { word: "submerge", meaning: "沉入（sub+merge）" }
    ],
    synonyms: [
      { word: "appear", nuance: "出现，通用", formality: "neutral" },
      { word: "surface", nuance: "浮出水面", formality: "neutral" },
      { word: "come out", nuance: "出来，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "emerge + from", example: "She emerged from the darkness." },
      { pattern: "emerge + as", example: "He emerged as the leading candidate." },
      { pattern: "newly emerged", example: "A newly emerged butterfly spread its wings." }
    ],
    layers: [
      { level: "物理层", meaning: "从隐蔽处走出", example: "The sun emerged from behind the clouds." },
      { level: "认知层", meaning: "新趋势或事实浮现", example: "A pattern emerged from the data analysis." },
      { level: "精神层", meaning: "从苦难中浮出更强大的自我", example: "From every trial, something stronger emerges if we have the courage to endure." }
    ]
  },
  "empower": {
    etymology: { roots: "em- (put into) + power", origin: "English: em- (causative prefix, put into) + power (ability, strength)", mnemonic: "将力量(power)注入→赋权" },
    cognates: [
      { word: "empowerment", meaning: "赋权（名词）" },
      { word: "power", meaning: "力量；权力" },
      { word: "powerful", meaning: "强大的" }
    ],
    synonyms: [
      { word: "enable", nuance: "使能够", formality: "neutral" },
      { word: "authorize", nuance: "授权，正式", formality: "formal" },
      { word: "strengthen", nuance: "增强力量", formality: "neutral" }
    ],
    collocations: [
      { pattern: "empower + people/women", example: "Education empowers women." },
      { pattern: "empower + to decide", example: "The law empowers citizens to challenge decisions." },
      { pattern: "feel empowered", example: "She felt empowered after the training." }
    ],
    layers: [
      { level: "物理层", meaning: "赋予法律或制度权力", example: "The constitution empowers the court to review laws." },
      { level: "认知层", meaning: "通过知识和技能赋能", example: "Digital literacy empowers communities to participate in the modern economy." },
      { level: "精神层", meaning: "点燃他人内在的力量", example: "To empower another is to light a flame that can never be extinguished." }
    ]
  },
  "enchant": {
    etymology: { roots: "en- (in/upon) + chant (sing)", origin: "Latin: incantare ← in- (upon) + cantare (to sing)", mnemonic: "对其唱咒语(chant→吟唱)→施魔法/迷住" },
    cognates: [
      { word: "enchantment", meaning: "魔法；魅力" },
      { word: "chant", meaning: "吟唱" },
      { word: "incantation", meaning: "咒语" }
    ],
    synonyms: [
      { word: "fascinate", nuance: "使着迷", formality: "neutral" },
      { word: "captivate", nuance: "深深吸引", formality: "neutral" },
      { word: "bewitch", nuance: "以魔力迷惑", formality: "neutral" }
    ],
    collocations: [
      { pattern: "enchant + audience", example: "The performance enchanted the audience." },
      { pattern: "enchant + with beauty", example: "The garden enchanted visitors with its beauty." },
      { pattern: "enchanting + melody", example: "An enchanting melody filled the hall." }
    ],
    layers: [
      { level: "物理层", meaning: "施加魔法", example: "The witch enchanted the spinning wheel." },
      { level: "认知层", meaning: "深深地吸引和打动", example: "The storyteller enchanted children and adults alike." },
      { level: "精神层", meaning: "世界以无形之歌唤醒灵魂", example: "The world is full of magic things, patiently waiting to enchant us." }
    ]
  },
  "encompass": {
    etymology: { roots: "en- (in) + compass (circle around)", origin: "English: en- (in, within) + compass (to go around, encircle)", mnemonic: "用圆规(compass)圈住→包含/围绕" },
    cognates: [
      { word: "compass", meaning: "指南针；范围" },
      { word: "encompassing", meaning: "包含一切的" }
    ],
    synonyms: [
      { word: "include", nuance: "包含，通用", formality: "neutral" },
      { word: "comprise", nuance: "由…组成", formality: "formal" },
      { word: "cover", nuance: "覆盖涵盖", formality: "neutral" }
    ],
    collocations: [
      { pattern: "encompass + wide range", example: "The curriculum encompasses a wide range of subjects." },
      { pattern: "encompass + all aspects", example: "The review encompasses all aspects of the project." },
      { pattern: "encompass + diversity", example: "The festival encompasses diverse cultures." }
    ],
    layers: [
      { level: "物理层", meaning: "在空间上包围", example: "The wall encompasses the entire garden." },
      { level: "认知层", meaning: "涵盖多个领域或方面", example: "Her research encompasses biology, chemistry, and physics." },
      { level: "精神层", meaning: "灵魂大到足以容纳矛盾", example: "The human soul is vast enough to encompass contradictions and still find coherence." }
    ]
  },
  "endow": {
    etymology: { roots: "en- (provide) + dow (gift/dowry)", origin: "Old French: endouer ← en- (provide with) + douer (to endow, from Latin dotare = to provide a dowry)", mnemonic: "给予嫁妆(dow→dowry)→赋予/捐赠" },
    cognates: [
      { word: "endowment", meaning: "捐赠基金；天赋" },
      { word: "dowry", meaning: "嫁妆" },
      { word: "dote", meaning: "溺爱（给予过多）" }
    ],
    synonyms: [
      { word: "bestow", nuance: "赐予，正式", formality: "formal" },
      { word: "grant", nuance: "授予", formality: "formal" },
      { word: "bless", nuance: "赐福", formality: "neutral" }
    ],
    collocations: [
      { pattern: "endow + with talent/rights", example: "Nature endowed her with a beautiful voice." },
      { pattern: "endow + foundation", example: "He endowed the university with $10 million." },
      { pattern: "richly endowed", example: "The region is richly endowed with natural resources." }
    ],
    layers: [
      { level: "物理层", meaning: "捐赠资金或资产", example: "The philanthropist endowed a new library." },
      { level: "认知层", meaning: "赋予天赋或能力", example: "She was endowed with exceptional mathematical talent." },
      { level: "精神层", meaning: "造物主赋予不可剥夺的权利", example: "All humans are endowed with inherent dignity and unalienable rights." }
    ]
  },
  "engulf": {
    etymology: { roots: "en- (in) + gulf (abyss)", origin: "English: en- (into) + gulf (a deep chasm, from Greek kolpos = bay, bosom)", mnemonic: "拉入深渊(gulf→海湾/深渊)→吞没" },
    cognates: [
      { word: "gulf", meaning: "海湾；深渊；鸿沟" }
    ],
    synonyms: [
      { word: "swallow", nuance: "吞下", formality: "neutral" },
      { word: "inundate", nuance: "淹没", formality: "formal" },
      { word: "overwhelm", nuance: "压倒性地淹没", formality: "neutral" }
    ],
    collocations: [
      { pattern: "engulf + in flames", example: "The building was engulfed in flames." },
      { pattern: "engulf + city/region", example: "Floodwaters engulfed the coastal city." },
      { pattern: "engulf + in darkness", example: "Darkness engulfed the valley." }
    ],
    layers: [
      { level: "物理层", meaning: "水或火完全淹没吞没", example: "The tsunami engulfed the harbor." },
      { level: "认知层", meaning: "被问题或危机淹没", example: "The scandal engulfed the entire administration." },
      { level: "精神层", meaning: "被情感的深渊吞噬", example: "Grief engulfed her so completely that the world outside ceased to exist." }
    ]
  },
  "enlighten": {
    etymology: { roots: "en- (cause to be) + light + -en", origin: "English: en- (causative) + light (illumination) + -en (verbal suffix)", mnemonic: "注入光(light→光明)→启蒙/启发" },
    cognates: [
      { word: "enlightenment", meaning: "启蒙；开悟" },
      { word: "light", meaning: "光" },
      { word: "lighten", meaning: "减轻；照亮" }
    ],
    synonyms: [
      { word: "educate", nuance: "教育，系统性", formality: "neutral" },
      { word: "illuminate", nuance: "照亮理解", formality: "formal" },
      { word: "open someone's eyes", nuance: "使人恍然大悟", formality: "informal" }
    ],
    collocations: [
      { pattern: "enlighten + about/on", example: "The documentary enlightened viewers about climate change." },
      { pattern: "enlighten + oneself", example: "She sought to enlighten herself through reading." },
      { pattern: "enlightened + society", example: "An enlightened society values education." }
    ],
    layers: [
      { level: "物理层", meaning: "提供信息或知识", example: "The guide enlightened the tourists about local history." },
      { level: "认知层", meaning: "使人理解深层原理", example: "The lecture enlightened the students about quantum mechanics." },
      { level: "精神层", meaning: "以智慧之光驱散愚昧", example: "To enlighten oneself is the first duty of every rational being." }
    ]
  },
  "entice": {
    etymology: { roots: "en- (in) + tice (kindle/fire)", origin: "Old French: enticier (to stir up, incite) ← Vulgar Latin *intitiare, possibly from titio (firebrand)", mnemonic: "点燃(tice→火种)欲望之火→引诱" },
    cognates: [
      { word: "enticement", meaning: "诱惑（名词）" },
      { word: "enticing", meaning: "诱人的" }
    ],
    synonyms: [
      { word: "tempt", nuance: "引诱（含负面）", formality: "neutral" },
      { word: "lure", nuance: "诱骗", formality: "neutral" },
      { word: "attract", nuance: "吸引，中性", formality: "neutral" }
    ],
    collocations: [
      { pattern: "entice + into", example: "The advertisement enticed customers into the store." },
      { pattern: "entice + with offers", example: "They enticed workers with higher wages." },
      { pattern: "entice + away", example: "Rival firms enticed her away with a better offer." }
    ],
    layers: [
      { level: "物理层", meaning: "用奖励吸引接近", example: "She enticed the stray cat with a bowl of milk." },
      { level: "认知层", meaning: "用承诺诱导决策", example: "The deal enticed investors with promises of high returns." },
      { level: "精神层", meaning: "表象点燃欲望之火", example: "Appearances entice, but only substance endures." }
    ]
  },
  "enumerate": {
    etymology: { roots: "e- (out) + numer (number) + -ate", origin: "Latin: enumerare ← e- (out) + numerare (to count, from numerus = number)", mnemonic: "一个一个数(numer→number数字)出来→列举" },
    cognates: [
      { word: "enumeration", meaning: "列举；枚举" },
      { word: "number", meaning: "数字" },
      { word: "numerous", meaning: "众多的" }
    ],
    synonyms: [
      { word: "list", nuance: "列出，通用", formality: "neutral" },
      { word: "catalog", nuance: "编目", formality: "formal" },
      { word: "count off", nuance: "逐个数出，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "enumerate + reasons/items", example: "She enumerated the reasons for her decision." },
      { pattern: "enumerate + rights", example: "The constitution enumerates fundamental rights." },
      { pattern: "carefully enumerate", example: "He carefully enumerated each step of the process." }
    ],
    layers: [
      { level: "物理层", meaning: "逐一清点物品", example: "The clerk enumerated every item in the inventory." },
      { level: "认知层", meaning: "系统列举论点或证据", example: "The lawyer enumerated five grounds for appeal." },
      { level: "精神层", meaning: "以数字之光命名未知", example: "To enumerate and classify is the first step toward understanding the universe." }
    ]
  },
  "eradicate": {
    etymology: { roots: "e- (out) + radic (root) + -ate", origin: "Latin: eradicare ← e- (out) + radix/radicis (root)", mnemonic: "将根(radic→radical根本的)拔出来→根除" },
    cognates: [
      { word: "eradication", meaning: "根除（名词）" },
      { word: "radical", meaning: "根本的；激进的" },
      { word: "radish", meaning: "萝卜（根菜）" }
    ],
    synonyms: [
      { word: "eliminate", nuance: "消除", formality: "neutral" },
      { word: "abolish", nuance: "废除（制度）", formality: "formal" },
      { word: "wipe out", nuance: "彻底消灭，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "eradicate + disease/poverty", example: "The campaign aims to eradicate malaria." },
      { pattern: "eradicate + corruption", example: "New measures to eradicate corruption were announced." },
      { pattern: "completely eradicate", example: "Smallpox was completely eradicated by 1980." }
    ],
    layers: [
      { level: "物理层", meaning: "连根拔除植物", example: "The gardener eradicated the invasive weeds." },
      { level: "认知层", meaning: "从根源消灭问题", example: "Education is the most powerful tool to eradicate ignorance." },
      { level: "精神层", meaning: "以集体意志铲除人类苦难", example: "We can eradicate suffering if we summon the collective will." }
    ]
  },
  "escalate": {
    etymology: { roots: "escalat- (ladder/stairs)", origin: "Back-formation from escalator ← Spanish escala (ladder) ← Latin scala (staircase, ladder)", mnemonic: "像自动扶梯(escalator)一样不断上升→升级" },
    cognates: [
      { word: "escalation", meaning: "升级（名词）" },
      { word: "escalator", meaning: "自动扶梯" },
      { word: "scale", meaning: "规模；攀登（梯子的引申）" }
    ],
    synonyms: [
      { word: "intensify", nuance: "加剧", formality: "neutral" },
      { word: "amplify", nuance: "放大", formality: "neutral" },
      { word: "ramp up", nuance: "逐步增加，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "escalate + conflict/tension", example: "The dispute escalated into violence." },
      { pattern: "escalate + rapidly", example: "Costs escalated rapidly." },
      { pattern: "escalate + to management", example: "The complaint was escalated to senior management." }
    ],
    layers: [
      { level: "物理层", meaning: "程度或规模逐步升高", example: "The noise escalated as more trucks arrived." },
      { level: "认知层", meaning: "冲突或问题加剧", example: "A minor disagreement escalated into a full crisis." },
      { level: "精神层", meaning: "未化解的不满滚雪球般失控", example: "A small injustice left unaddressed can escalate until it tears a society apart." }
    ]
  },
  "excel": {
    etymology: { roots: "ex- (out/upward) + cel (rise)", origin: "Latin: excellere ← ex- (out, upward) + cellere (to rise, project)", mnemonic: "向上升起(cel→天花板ceiling)超出→擅长" },
    cognates: [
      { word: "excellence", meaning: "卓越" },
      { word: "excellent", meaning: "优秀的" },
      { word: "excelsior", meaning: "更高（拉丁语比较级）" }
    ],
    synonyms: [
      { word: "surpass", nuance: "超越", formality: "neutral" },
      { word: "outperform", nuance: "表现优于", formality: "neutral" },
      { word: "shine", nuance: "出色表现，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "excel at/in", example: "She excels at mathematics." },
      { pattern: "excel + beyond expectations", example: "The team excelled beyond all expectations." },
      { pattern: "excel + academically", example: "He excels academically and athletically." }
    ],
    layers: [
      { level: "物理层", meaning: "在竞技中表现优异", example: "The athlete excelled in the final round." },
      { level: "认知层", meaning: "在专业领域出类拔萃", example: "She excels in both research and teaching." },
      { level: "精神层", meaning: "超越昨天的自己才是真正的卓越", example: "To excel is not to surpass others but to surpass one's former self." }
    ]
  },
  "exert": {
    etymology: { roots: "ex- (out) + ert (join/bind)", origin: "Latin: exserere/exertus ← ex- (out) + serere (to join, attach)", mnemonic: "向外伸展(ex+sert→insert插入的反向)力量→施加" },
    cognates: [
      { word: "exertion", meaning: "努力；用力" },
      { word: "insert", meaning: "插入（向内连接）" },
      { word: "assert", meaning: "断言（向自己连接）" }
    ],
    synonyms: [
      { word: "apply", nuance: "施加，通用", formality: "neutral" },
      { word: "wield", nuance: "行使（权力）", formality: "formal" },
      { word: "put forth", nuance: "付出，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "exert + pressure/influence", example: "The government exerted pressure on the company." },
      { pattern: "exert + effort", example: "She exerted great effort to finish on time." },
      { pattern: "exert + control", example: "The manager exerts tight control over the budget." }
    ],
    layers: [
      { level: "物理层", meaning: "施加物理力量", example: "The machine exerts enormous pressure on the metal." },
      { level: "认知层", meaning: "运用影响力或权力", example: "The media exerts considerable influence on public opinion." },
      { level: "精神层", meaning: "每个人的微小努力汇成进步洪流", example: "Every individual who exerts effort adds to the total force of human progress." }
    ]
  },
  "expedite": {
    etymology: { roots: "ex- (out) + ped (foot) + -ite", origin: "Latin: expedire ← ex- (out of) + pes/pedis (foot) — literally 'to free the feet'", mnemonic: "解开脚(ped→pedestrian行人)上的束缚→加速" },
    cognates: [
      { word: "expedition", meaning: "远征；探险" },
      { word: "pedestrian", meaning: "行人（用脚走的人）" },
      { word: "impede", meaning: "阻碍（im+ped 绊住脚）" }
    ],
    synonyms: [
      { word: "accelerate", nuance: "加速", formality: "neutral" },
      { word: "hasten", nuance: "催促加快", formality: "formal" },
      { word: "speed up", nuance: "加快，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "expedite + process/delivery", example: "We need to expedite the approval process." },
      { pattern: "expedite + shipment", example: "The order was expedited for next-day delivery." },
      { pattern: "expedite + matters", example: "To expedite matters, please submit the form online." }
    ],
    layers: [
      { level: "物理层", meaning: "加快实际流程速度", example: "The new lane expedites traffic flow." },
      { level: "认知层", meaning: "简化手续提高效率", example: "Digital forms expedite the application process." },
      { level: "精神层", meaning: "去除绊脚石让脚步自由迈开", example: "Every tool that can expedite worthy work is a blessing to humankind." }
    ]
  },
  "exploit": {
    etymology: { roots: "ex- (out) + ploit (fold/unfold)", origin: "Latin: explicare (to unfold) → Old French esploit (outcome, achievement)", mnemonic: "把价值一层层展开(plic→fold折叠)抽取→利用/剥削" },
    cognates: [
      { word: "exploitation", meaning: "利用；剥削" },
      { word: "explicit", meaning: "明确的（展开的）" },
      { word: "exploit (n.)", meaning: "英勇事迹" }
    ],
    synonyms: [
      { word: "utilize", nuance: "利用，中性", formality: "neutral" },
      { word: "abuse", nuance: "滥用", formality: "neutral" },
      { word: "take advantage of", nuance: "占便宜，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "exploit + workers/resources", example: "The company exploited cheap labor overseas." },
      { pattern: "exploit + vulnerability", example: "Hackers exploited a security vulnerability." },
      { pattern: "exploit + opportunity", example: "She exploited the opportunity to advance." }
    ],
    layers: [
      { level: "物理层", meaning: "开采或利用资源", example: "The mine exploits rich copper deposits." },
      { level: "认知层", meaning: "利用弱点或机会获利", example: "The algorithm exploits patterns in user behavior." },
      { level: "精神层", meaning: "系统性地榨取他人价值", example: "Those who exploit the labor of others build empires on sand." }
    ]
  },
  "extinguish": {
    etymology: { roots: "ex- (out) + stinguere (to prick/quench)", origin: "Latin: exstinguere ← ex- (completely) + stinguere (to quench, prick out)", mnemonic: "彻底刺灭(stinguere→sting刺)→熄灭" },
    cognates: [
      { word: "extinction", meaning: "灭绝" },
      { word: "distinguish", meaning: "区分（用标记分开）" },
      { word: "instinct", meaning: "本能（内在的刺激）" }
    ],
    synonyms: [
      { word: "quench", nuance: "浇灭（火或渴）", formality: "neutral" },
      { word: "suppress", nuance: "压制", formality: "formal" },
      { word: "put out", nuance: "扑灭，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "extinguish + fire/flame", example: "Firefighters extinguished the blaze." },
      { pattern: "extinguish + hope", example: "Years of failure nearly extinguished his hope." },
      { pattern: "extinguish + debt", example: "The payment extinguished the remaining debt." }
    ],
    layers: [
      { level: "物理层", meaning: "熄灭火焰", example: "Water was used to extinguish the fire." },
      { level: "认知层", meaning: "消除希望或权利", example: "The new law extinguished certain property rights." },
      { level: "精神层", meaning: "企图灭绝不灭的精神之火", example: "No force can extinguish a flame that burns in the hearts of the people." }
    ]
  },
  "fabricate": {
    etymology: { roots: "fabric- (craft/workshop) + -ate", origin: "Latin: fabricare (to make, construct) ← fabrica (workshop) ← faber (craftsman)", mnemonic: "在工坊(fabrica→fabric织物)中精心制造→捏造" },
    cognates: [
      { word: "fabrication", meaning: "捏造；制造" },
      { word: "fabric", meaning: "织物；结构" },
      { word: "prefabricate", meaning: "预制" }
    ],
    synonyms: [
      { word: "invent", nuance: "编造（故事）", formality: "neutral" },
      { word: "forge", nuance: "伪造（文件）", formality: "neutral" },
      { word: "make up", nuance: "编造，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "fabricate + evidence/story", example: "The witness fabricated his testimony." },
      { pattern: "fabricate + components", example: "The factory fabricates steel components." },
      { pattern: "entirely fabricated", example: "The allegations were entirely fabricated." }
    ],
    layers: [
      { level: "物理层", meaning: "制造零部件或产品", example: "The plant fabricates circuit boards." },
      { level: "认知层", meaning: "精心编造虚假信息", example: "The spy fabricated an elaborate cover story." },
      { level: "精神层", meaning: "在虚假之上建造注定崩塌的大厦", example: "Those who fabricate falsehoods build upon a foundation that must crumble." }
    ]
  },
  "facilitate": {
    etymology: { roots: "facil- (easy) + -itate", origin: "Latin: facilitare ← facilis (easy) ← facere (to do, make)", mnemonic: "使事情变得容易做(facil→容易)→促进" },
    cognates: [
      { word: "facilitation", meaning: "促进（名词）" },
      { word: "facility", meaning: "设施；便利" },
      { word: "facile", meaning: "轻而易举的" }
    ],
    synonyms: [
      { word: "enable", nuance: "使能够", formality: "neutral" },
      { word: "expedite", nuance: "加速", formality: "formal" },
      { word: "smooth the way", nuance: "铺平道路，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "facilitate + discussion/learning", example: "The moderator facilitated the discussion." },
      { pattern: "facilitate + trade", example: "The agreement facilitates trade between nations." },
      { pattern: "facilitate + access", example: "The ramp facilitates access for wheelchair users." }
    ],
    layers: [
      { level: "物理层", meaning: "使过程更顺畅", example: "The new bridge facilitates cross-river traffic." },
      { level: "认知层", meaning: "创造条件让学习自然发生", example: "A good teacher facilitates discovery rather than dictating answers." },
      { level: "精神层", meaning: "移除障碍让成长自由发生", example: "The greatest leaders do not command but facilitate the flourishing of those they serve." }
    ]
  },
  "forsake": {
    etymology: { roots: "for- (away) + sake (contend/deny)", origin: "Old English: forsacan ← for- (away, completely) + sacan (to contend, deny, accuse)", mnemonic: "完全否认(sacan→否认)曾有的关系→抛弃" },
    cognates: [
      { word: "forsaken", meaning: "被遗弃的" },
      { word: "sake", meaning: "缘故（为了…的 sake）" }
    ],
    synonyms: [
      { word: "abandon", nuance: "抛弃", formality: "neutral" },
      { word: "desert", nuance: "遗弃（人或岗位）", formality: "neutral" },
      { word: "renounce", nuance: "正式放弃", formality: "formal" }
    ],
    collocations: [
      { pattern: "forsake + family/home", example: "He forsook his family for a life abroad." },
      { pattern: "forsake + beliefs", example: "She refused to forsake her beliefs." },
      { pattern: "God-forsaken", example: "They lived in a God-forsaken wilderness." }
    ],
    layers: [
      { level: "物理层", meaning: "离开一个地方不再回来", example: "The settlers forsook their homeland forever." },
      { level: "认知层", meaning: "放弃信念或原则", example: "He forsook his principles for political gain." },
      { level: "精神层", meaning: "对曾经的承诺和纽带的背叛", example: "I will never leave thee nor forsake thee — a covenant that transcends time." }
    ]
  },
  "fortify": {
    etymology: { roots: "fort- (strong) + -ify (make)", origin: "Latin: fortificare ← fortis (strong) + facere (to make)", mnemonic: "使变得强壮(fort→fortress堡垒)→加固" },
    cognates: [
      { word: "fortification", meaning: "防御工事" },
      { word: "fortress", meaning: "堡垒" },
      { word: "forte", meaning: "强项" }
    ],
    synonyms: [
      { word: "strengthen", nuance: "加强，通用", formality: "neutral" },
      { word: "reinforce", nuance: "增援/加固", formality: "neutral" },
      { word: "bolster", nuance: "支撑加固", formality: "neutral" }
    ],
    collocations: [
      { pattern: "fortify + defenses", example: "The army fortified the city walls." },
      { pattern: "fortify + with vitamins", example: "The cereal is fortified with iron and vitamins." },
      { pattern: "fortify + resolve", example: "The victory fortified their resolve." }
    ],
    layers: [
      { level: "物理层", meaning: "修筑防御工事", example: "The castle was fortified with thick stone walls." },
      { level: "认知层", meaning: "用证据或营养增强", example: "The report was fortified with data from three studies." },
      { level: "精神层", meaning: "逆境为灵魂筑起城墙", example: "Adversity does not weaken the spirit — it fortifies it." }
    ]
  },
  "foster": {
    etymology: { roots: "foster (nourish/feed)", origin: "Old English: fōstrian (to nourish, bring up) ← fōstor (nourishment, food)", mnemonic: "喂养(fōstor→食物/营养)并抚育→培养" },
    cognates: [
      { word: "foster (adj.)", meaning: "寄养的（foster parents）" },
      { word: "food", meaning: "食物（同源：喂养）" }
    ],
    synonyms: [
      { word: "nurture", nuance: "培育，强调关爱", formality: "neutral" },
      { word: "promote", nuance: "促进，正式", formality: "formal" },
      { word: "cultivate", nuance: "培养（如同耕种）", formality: "neutral" }
    ],
    collocations: [
      { pattern: "foster + growth/development", example: "The program fosters personal development." },
      { pattern: "foster + relationships", example: "Trust fosters strong relationships." },
      { pattern: "foster + innovation", example: "The company fosters innovation through open collaboration." }
    ],
    layers: [
      { level: "物理层", meaning: "收养和抚育", example: "The couple fostered three children from difficult backgrounds." },
      { level: "认知层", meaning: "创造环境促进成长", example: "The university fosters critical thinking." },
      { level: "精神层", meaning: "如同养育生命般滋养社会", example: "A society that fosters learning builds a foundation no storm can shake." }
    ]
  },
  "fret": {
    etymology: { roots: "fret (devour/gnaw)", origin: "Old English: fretan (to eat, devour, gnaw) ← Proto-Germanic *fra-etan (to eat up)", mnemonic: "焦虑像虫子一样啃噬(fretan→吞噬)内心→烦恼" },
    cognates: [
      { word: "fretwork", meaning: "镂空雕花（蚀刻出的图案）" },
      { word: "fret (n.)", meaning: "吉他品丝（刻在指板上的）" }
    ],
    synonyms: [
      { word: "worry", nuance: "担忧，通用", formality: "neutral" },
      { word: "agonize", nuance: "极度焦虑", formality: "neutral" },
      { word: "stew", nuance: "闷闷不乐地焦虑，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "fret + about/over", example: "Don't fret over things you can't control." },
      { pattern: "fret + away", example: "She fretted away the hours waiting for news." },
      { pattern: "fret and worry", example: "He fretted and worried all through the night." }
    ],
    layers: [
      { level: "物理层", meaning: "磨损或侵蚀表面", example: "The river fretted away the soft rock over centuries." },
      { level: "认知层", meaning: "反复担忧无法释怀", example: "She fretted about the interview for days." },
      { level: "精神层", meaning: "焦虑从内部吞噬灵魂", example: "To fret upon the stage of life is the lot of every player — yet meaning emerges from how we play our part." }
    ]
  },
  "fulfill": {
    etymology: { roots: "full + fill", origin: "Old English: fullfyllan ← full (complete) + fyllan (to fill)", mnemonic: "完全(full)填满(fill)→实现/满足" },
    cognates: [
      { word: "fulfillment", meaning: "实现；满足感" },
      { word: "full", meaning: "满的；完整的" }
    ],
    synonyms: [
      { word: "accomplish", nuance: "达成目标", formality: "neutral" },
      { word: "realize", nuance: "实现（梦想）", formality: "neutral" },
      { word: "carry out", nuance: "执行，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "fulfill + promise/obligation", example: "He fulfilled his promise to return." },
      { pattern: "fulfill + dream", example: "She finally fulfilled her childhood dream." },
      { pattern: "fulfill + potential", example: "The program helps students fulfill their potential." }
    ],
    layers: [
      { level: "物理层", meaning: "完成任务或订单", example: "The warehouse fulfills orders within 24 hours." },
      { level: "认知层", meaning: "实现目标或承诺", example: "She fulfilled every requirement for graduation." },
      { level: "精神层", meaning: "用行动和意义填满人生的容器", example: "To fulfill one's purpose — that is true happiness." }
    ]
  },
  "garner": {
    etymology: { roots: "garn- (granary/grain)", origin: "Latin: granarium (granary) → Old French gernier (granary) → English garner", mnemonic: "将谷物收入谷仓(granarium→谷仓)→收集/获得" },
    cognates: [
      { word: "granary", meaning: "谷仓" },
      { word: "grain", meaning: "谷物" },
      { word: "garner (n.)", meaning: "谷仓（古语）" }
    ],
    synonyms: [
      { word: "gather", nuance: "收集，通用", formality: "neutral" },
      { word: "accumulate", nuance: "积累", formality: "neutral" },
      { word: "amass", nuance: "大量收集", formality: "formal" }
    ],
    collocations: [
      { pattern: "garner + support/attention", example: "The campaign garnered widespread support." },
      { pattern: "garner + votes", example: "The candidate garnered enough votes to win." },
      { pattern: "garner + praise", example: "The film garnered critical praise." }
    ],
    layers: [
      { level: "物理层", meaning: "收割和储存谷物", example: "The farmers garnered the wheat before the rains." },
      { level: "认知层", meaning: "逐步赢得支持或赞誉", example: "The research garnered international recognition." },
      { level: "精神层", meaning: "从万源采集智慧储入心灵谷仓", example: "To garner wisdom from all sources is the mark of a truly educated mind." }
    ]
  },
  "grapple": {
    etymology: { roots: "grapple (hook/claw)", origin: "Old French: grappil (a hook) ← grappe (hook, bunch of grapes), of Germanic origin", mnemonic: "用钩子(grappil→iron hook)紧紧抓住→搏斗" },
    cognates: [
      { word: "grapple (n.)", meaning: "抓钩" },
      { word: "grape", meaning: "葡萄（成串如钩挂）" }
    ],
    synonyms: [
      { word: "wrestle", nuance: "摔跤/搏斗", formality: "neutral" },
      { word: "struggle", nuance: "挣扎", formality: "neutral" },
      { word: "tackle", nuance: "处理（问题）", formality: "neutral" }
    ],
    collocations: [
      { pattern: "grapple + with a problem", example: "Scientists grapple with the mystery of dark matter." },
      { pattern: "grapple + with an opponent", example: "The wrestlers grappled on the mat." },
      { pattern: "grapple + with emotions", example: "She grappled with her conflicting emotions." }
    ],
    layers: [
      { level: "物理层", meaning: "肉搏式的近身搏斗", example: "The two fighters grappled until one fell." },
      { level: "认知层", meaning: "艰难地处理复杂问题", example: "The team grappled with the budget crisis for months." },
      { level: "精神层", meaning: "与逆境缠斗而不屈服", example: "To grapple with adversity and emerge unbroken — that is the test of character." }
    ]
  },
  "gravitate": {
    etymology: { roots: "gravit- (weight/heaviness) + -ate", origin: "Latin: gravitare ← gravitas (weight, heaviness) ← gravis (heavy)", mnemonic: "被重力(gravitas→gravity引力)牵引→趋向" },
    cognates: [
      { word: "gravity", meaning: "引力；严肃" },
      { word: "grave", meaning: "严重的（沉重的）" },
      { word: "gravitation", meaning: "万有引力" }
    ],
    synonyms: [
      { word: "tend toward", nuance: "倾向于", formality: "neutral" },
      { word: "be drawn to", nuance: "被吸引", formality: "neutral" },
      { word: "drift toward", nuance: "漂向", formality: "neutral" }
    ],
    collocations: [
      { pattern: "gravitate + toward/to", example: "Young people gravitate toward technology." },
      { pattern: "naturally gravitate", example: "Audiences naturally gravitate to compelling stories." },
      { pattern: "gravitate + around", example: "The discussion gravitated around the central theme." }
    ],
    layers: [
      { level: "物理层", meaning: "天体因引力相互吸引", example: "Planets gravitate toward the sun." },
      { level: "认知层", meaning: "自然地被兴趣吸引", example: "She gravitated toward mathematics from an early age." },
      { level: "精神层", meaning: "志同道合的灵魂因内在的引力相互寻找", example: "Kindred spirits gravitate toward each other across the vastness of the world." }
    ]
  },
  "grieve": {
    etymology: { roots: "griev- (heavy/burden)", origin: "Latin: gravare (to burden) ← gravis (heavy) → Old French grever (to burden, harm)", mnemonic: "沉重(gravis→重)的负担压在心上→悲伤" },
    cognates: [
      { word: "grief", meaning: "悲痛" },
      { word: "grievance", meaning: "不满；冤屈" },
      { word: "grave", meaning: "严重的（沉重的）" }
    ],
    synonyms: [
      { word: "mourn", nuance: "哀悼（正式仪式）", formality: "formal" },
      { word: "lament", nuance: "悲叹", formality: "formal" },
      { word: "be heartbroken", nuance: "心碎，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "grieve + for/over", example: "She grieved for her lost friend." },
      { pattern: "grieve + the loss", example: "The nation grieved the loss of a great leader." },
      { pattern: "deeply grieve", example: "We deeply grieve the passing of our colleague." }
    ],
    layers: [
      { level: "物理层", meaning: "因丧失而痛哭", example: "The family grieved at the funeral." },
      { level: "认知层", meaning: "为失去的可能性而悲伤", example: "She grieved the career she had to leave behind." },
      { level: "精神层", meaning: "悲伤是爱的代价", example: "To grieve is not weakness but the price we pay for having truly loved." }
    ]
  },
  "hamper": {
    etymology: { roots: "hamper (shackle/entangle)", origin: "Middle English: hampren (to confine, impede), possibly of Low German origin", mnemonic: "用锁链缠绕束缚→阻碍" },
    cognates: [
      { word: "hamper (n.)", meaning: "大篮子（束缚/装入）" }
    ],
    synonyms: [
      { word: "hinder", nuance: "妨碍", formality: "neutral" },
      { word: "impede", nuance: "阻碍（正式）", formality: "formal" },
      { word: "hold back", nuance: "拖后腿，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "hamper + progress/efforts", example: "Bad weather hampered rescue efforts." },
      { pattern: "hamper + growth", example: "Regulations hamper economic growth." },
      { pattern: "severely hamper", example: "The injury severely hampered his movement." }
    ],
    layers: [
      { level: "物理层", meaning: "物理上束缚或限制", example: "The heavy armor hampered the knight's movement." },
      { level: "认知层", meaning: "阻碍进展或发展", example: "Lack of funding hampered the research." },
      { level: "精神层", meaning: "偏见和无知的无形锁链", example: "Chains of prejudice hamper the march of justice until brave voices demand their removal." }
    ]
  },
  "harness": {
    etymology: { roots: "harness (armor/equipment)", origin: "Old French: harneis (equipment, gear, armor) → English: harness (horse gear, then 'to control/use')", mnemonic: "给马套上挽具(harneis→装备)来控制→驾驭/利用" },
    cognates: [
      { word: "harness (n.)", meaning: "挽具；安全带" }
    ],
    synonyms: [
      { word: "utilize", nuance: "利用，中性", formality: "neutral" },
      { word: "channel", nuance: "引导", formality: "neutral" },
      { word: "tap into", nuance: "开发利用，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "harness + energy/power", example: "Solar panels harness the sun's energy." },
      { pattern: "harness + potential", example: "The mentorship program harnesses untapped potential." },
      { pattern: "harness + technology", example: "We must harness AI for the benefit of society." }
    ],
    layers: [
      { level: "物理层", meaning: "给动物套挽具控制方向", example: "The farmer harnessed the horse to the plow." },
      { level: "认知层", meaning: "有效利用能量或资源", example: "Wind farms harness renewable energy." },
      { level: "精神层", meaning: "驯服自然的野马为人类造福", example: "We must harness the forces of nature for the benefit of all mankind." }
    ]
  },
  "hasten": {
    etymology: { roots: "haste + -en", origin: "English: haste (urgency, speed) + -en (causative suffix)", mnemonic: "使产生haste(急迫)→加速/催促" },
    cognates: [
      { word: "haste", meaning: "匆忙" },
      { word: "hasty", meaning: "仓促的" }
    ],
    synonyms: [
      { word: "accelerate", nuance: "加速", formality: "neutral" },
      { word: "hurry", nuance: "赶快，口语", formality: "informal" },
      { word: "expedite", nuance: "加快处理，正式", formality: "formal" }
    ],
    collocations: [
      { pattern: "hasten + to add", example: "I hasten to add that this is just a theory." },
      { pattern: "hasten + one's departure", example: "The scandal hastened his departure." },
      { pattern: "hasten + the process", example: "Technology has hastened the process of globalization." }
    ],
    layers: [
      { level: "物理层", meaning: "加快移动速度", example: "She hastened her steps through the rain." },
      { level: "认知层", meaning: "加速进程或结果", example: "The economic crisis hastened the fall of the government." },
      { level: "精神层", meaning: "盲目急躁反而误入歧途", example: "Those who hasten without thought often arrive at the wrong destination." }
    ]
  },
  "hinder": {
    etymology: { roots: "hinder (behind/back)", origin: "Old English: hindrian (to hold back, check) ← hinder (behind, at the back)", mnemonic: "从后方(hinder→behind)拖住→阻碍" },
    cognates: [
      { word: "hindrance", meaning: "障碍" },
      { word: "behind", meaning: "在后面" },
      { word: "hind", meaning: "后面的" }
    ],
    synonyms: [
      { word: "obstruct", nuance: "阻塞", formality: "formal" },
      { word: "impede", nuance: "妨碍", formality: "formal" },
      { word: "hold back", nuance: "拖后腿，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "hinder + progress/development", example: "Red tape hinders development." },
      { pattern: "hinder + ability", example: "The injury hinders his ability to play." },
      { pattern: "hinder + rather than help", example: "Micromanagement hinders rather than helps." }
    ],
    layers: [
      { level: "物理层", meaning: "从身后拖拽阻止前进", example: "The heavy pack hindered his climb." },
      { level: "认知层", meaning: "阻碍项目或进展", example: "Poor communication hinders team productivity." },
      { level: "精神层", meaning: "恐惧像无形重力拖住脚步", example: "Do not let fear hinder your first step." }
    ]
  },
  "hover": {
    etymology: { roots: "hover (hang in the air)", origin: "Middle English: hoveren (to linger, hang about), possibly from hoven (to hover)", mnemonic: "悬浮在空中不上不下→盘旋/徘徊" },
    cognates: [
      { word: "hovercraft", meaning: "气垫船" }
    ],
    synonyms: [
      { word: "float", nuance: "漂浮", formality: "neutral" },
      { word: "linger", nuance: "逗留徘徊", formality: "neutral" },
      { word: "hang around", nuance: "闲逛，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "hover + over/above", example: "The helicopter hovered above the building." },
      { pattern: "hover + around", example: "Temperatures hovered around zero." },
      { pattern: "hover + between", example: "She hovered between hope and despair." }
    ],
    layers: [
      { level: "物理层", meaning: "在空中悬停", example: "The hummingbird hovered near the flower." },
      { level: "认知层", meaning: "在两种选择间犹豫不决", example: "The stock price hovered around $50 all week." },
      { level: "精神层", meaning: "希望悬浮在黑暗中拒绝离去", example: "Hope hovers in the darkest night, refusing to be silenced." }
    ]
  },
  "immerse": {
    etymology: { roots: "im- (into) + merse (dip/plunge)", origin: "Latin: immergere ← in- (into) + mergere (to dip, plunge)", mnemonic: "浸入(merge→沉入)水中完全没入→沉浸" },
    cognates: [
      { word: "immersion", meaning: "沉浸" },
      { word: "submerge", meaning: "淹没" },
      { word: "emerge", meaning: "浮现（从水中出来）" }
    ],
    synonyms: [
      { word: "engross", nuance: "全神贯注", formality: "neutral" },
      { word: "absorb", nuance: "吸引/吸收", formality: "neutral" },
      { word: "bury oneself in", nuance: "埋头于，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "immerse + in water", example: "The fabric was immersed in dye." },
      { pattern: "immerse + oneself in", example: "He immersed himself in his research." },
      { pattern: "fully immersed", example: "Students are fully immersed in the language." }
    ],
    layers: [
      { level: "物理层", meaning: "将物体完全浸入液体", example: "She immersed the brush in turpentine." },
      { level: "认知层", meaning: "全身心投入某项活动", example: "He immersed himself in the project for weeks." },
      { level: "精神层", meaning: "在他人的世界中失去自我边界", example: "In the world of books, one can immerse oneself in other lives and return enriched." }
    ]
  },
  "inaugurate": {
    etymology: { roots: "inaugur- (augury/divine omen) + -ate", origin: "Latin: inaugurare (to install after taking auguries) ← augur (soothsayer, diviner)", mnemonic: "经占卜(augur→预言家)确认吉利后正式开始→就职/开创" },
    cognates: [
      { word: "inauguration", meaning: "就职典礼" },
      { word: "augur", meaning: "占卜者；预兆" },
      { word: "auspicious", meaning: "吉利的" }
    ],
    synonyms: [
      { word: "launch", nuance: "启动", formality: "neutral" },
      { word: "initiate", nuance: "开始", formality: "formal" },
      { word: "kick off", nuance: "开始，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "inaugurate + president", example: "The president was inaugurated on January 20th." },
      { pattern: "inaugurate + era/period", example: "The treaty inaugurated a new era of peace." },
      { pattern: "inaugurate + building", example: "The mayor inaugurated the new library." }
    ],
    layers: [
      { level: "物理层", meaning: "正式揭幕或启用", example: "The bridge was inaugurated with a ribbon-cutting ceremony." },
      { level: "认知层", meaning: "开启新制度或时代", example: "The reform inaugurated a period of rapid growth." },
      { level: "精神层", meaning: "以庄严仪式赋予使命感", example: "With his oath the young president inaugurated a new age of civic duty." }
    ]
  },
  "incite": {
    etymology: { roots: "in- (into) + cite (set in motion)", origin: "Latin: incitare ← in- (into, toward) + citare (to set in motion, summon, urge)", mnemonic: "向内点火(cit→激发/驱动)→煽动" },
    cognates: [
      { word: "incitement", meaning: "煽动" },
      { word: "excite", meaning: "激动（ex+cite 向外激发）" },
      { word: "recite", meaning: "背诵（re+cite 重新引出）" }
    ],
    synonyms: [
      { word: "provoke", nuance: "激怒/挑起", formality: "neutral" },
      { word: "instigate", nuance: "唆使", formality: "neutral" },
      { word: "stir up", nuance: "煽动，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "incite + violence/hatred", example: "The speech incited violence." },
      { pattern: "incite + rebellion", example: "The pamphlet incited rebellion." },
      { pattern: "incite + to action", example: "Her words incited the crowd to action." }
    ],
    layers: [
      { level: "物理层", meaning: "煽动人群采取行动", example: "The agitator incited the crowd to riot." },
      { level: "认知层", meaning: "用言辞激发情绪", example: "The article incited public outrage." },
      { level: "精神层", meaning: "语言在灵魂深处点燃火种", example: "Words can heal or wound, inspire or incite — choose them wisely." }
    ]
  },
  "incorporate": {
    etymology: { roots: "in- (into) + corpor- (body) + -ate", origin: "Latin: incorporare ← in- (into) + corpus/corporis (body)", mnemonic: "纳入身体(corpus→body)之中→合并/包含" },
    cognates: [
      { word: "incorporation", meaning: "合并；成立公司" },
      { word: "corporeal", meaning: "有形的；肉体的" },
      { word: "corpse", meaning: "尸体" }
    ],
    synonyms: [
      { word: "include", nuance: "包含，通用", formality: "neutral" },
      { word: "integrate", nuance: "整合", formality: "neutral" },
      { word: "blend in", nuance: "融入，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "incorporate + into", example: "The feedback was incorporated into the design." },
      { pattern: "incorporate + changes", example: "Please incorporate these changes into the report." },
      { pattern: "newly incorporated", example: "The newly incorporated company began operations." }
    ],
    layers: [
      { level: "物理层", meaning: "将成分混合入整体", example: "Incorporate the eggs into the flour mixture." },
      { level: "认知层", meaning: "将新元素融入现有系统", example: "The curriculum incorporates both theory and practice." },
      { level: "精神层", meaning: "将外来影响化为自身血肉", example: "The creative mind incorporates influences, transforming them into something entirely new." }
    ]
  },
  "indulge": {
    etymology: { roots: "in- (in) + dulge (be kind/lenient)", origin: "Latin: indulgere (to be kind, yield, grant, concede)", mnemonic: "对自己宽容(indulgere→宽纵)→放纵/沉溺" },
    cognates: [
      { word: "indulgence", meaning: "放纵；宽容" },
      { word: "indulgent", meaning: "纵容的" }
    ],
    synonyms: [
      { word: "pamper", nuance: "娇惯宠爱", formality: "neutral" },
      { word: "gratify", nuance: "满足欲望", formality: "formal" },
      { word: "treat oneself", nuance: "犒劳自己，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "indulge + in", example: "He indulged in a piece of cake." },
      { pattern: "indulge + a whim", example: "She indulged her whim to travel." },
      { pattern: "indulge + oneself", example: "He indulged himself with a new watch." }
    ],
    layers: [
      { level: "物理层", meaning: "享用美食或奢侈品", example: "She indulged in a long, hot bath." },
      { level: "认知层", meaning: "满足好奇心或兴趣", example: "He indulged his passion for astronomy every weekend." },
      { level: "精神层", meaning: "有意识地允许自己享受当下", example: "Life is short; to indulge occasionally in simple pleasures is not weakness but wisdom." }
    ]
  },
  "infuse": {
    etymology: { roots: "in- (into) + fuse (pour)", origin: "Latin: infundere ← in- (into) + fundere (to pour)", mnemonic: "向内倾注(fundere→pour倒入)→注入/灌输" },
    cognates: [
      { word: "infusion", meaning: "注入；浸泡液" },
      { word: "diffuse", meaning: "扩散（dis+fuse 四散倾倒）" },
      { word: "refuse", meaning: "拒绝（re+fuse 倒回去）" }
    ],
    synonyms: [
      { word: "instill", nuance: "灌输（思想）", formality: "formal" },
      { word: "imbue", nuance: "浸染", formality: "formal" },
      { word: "fill with", nuance: "充满，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "infuse + with energy/life", example: "The director infused the production with new energy." },
      { pattern: "infuse + tea/herbs", example: "Allow the herbs to infuse for five minutes." },
      { pattern: "infuse + capital", example: "The investor infused capital into the startup." }
    ],
    layers: [
      { level: "物理层", meaning: "浸泡提取精华", example: "Infuse the tea leaves in hot water." },
      { level: "认知层", meaning: "注入新理念或资源", example: "The new CEO infused the company with fresh ideas." },
      { level: "精神层", meaning: "创造者的灵魂注入作品", example: "Great art is infused with the living breath of its creator." }
    ]
  },
  "inhibit": {
    etymology: { roots: "in- (in) + hibit (hold/have)", origin: "Latin: inhibere ← in- (in) + habere (to have, hold)", mnemonic: "在内部持有/占据(habere→have)从而阻止→抑制" },
    cognates: [
      { word: "inhibition", meaning: "抑制；拘谨" },
      { word: "exhibit", meaning: "展示（ex+hibit 向外展示）" },
      { word: "prohibit", meaning: "禁止（pro+hibit 预先阻止）" }
    ],
    synonyms: [
      { word: "restrain", nuance: "约束", formality: "neutral" },
      { word: "suppress", nuance: "压制", formality: "neutral" },
      { word: "hold back", nuance: "抑制，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "inhibit + growth", example: "The chemical inhibits bacterial growth." },
      { pattern: "inhibit + creativity", example: "Fear of failure inhibits creativity." },
      { pattern: "inhibit + enzyme", example: "The drug inhibits a key enzyme." }
    ],
    layers: [
      { level: "物理层", meaning: "化学或生理上抑制反应", example: "The antibody inhibits the virus from replicating." },
      { level: "认知层", meaning: "阻止行为或表达", example: "Stage fright inhibited her performance." },
      { level: "精神层", meaning: "自我怀疑从内部锁住创造力", example: "Self-doubt does not protect us — it inhibits us." }
    ]
  },
  "innovate": {
    etymology: { roots: "in- (into) + nov (new) + -ate", origin: "Latin: innovare ← in- (into) + novus (new)", mnemonic: "将新(novus→novel新颖的)注入旧的→创新" },
    cognates: [
      { word: "innovation", meaning: "创新" },
      { word: "novel", meaning: "新颖的；小说" },
      { word: "renovate", meaning: "翻新（re+nov 重新变新）" }
    ],
    synonyms: [
      { word: "pioneer", nuance: "开创", formality: "neutral" },
      { word: "revolutionize", nuance: "彻底革新", formality: "formal" },
      { word: "shake things up", nuance: "打破常规，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "innovate + in/within", example: "The lab innovates in the field of AI." },
      { pattern: "continue to innovate", example: "The company continues to innovate." },
      { pattern: "innovate + or die", example: "In this market, you innovate or die." }
    ],
    layers: [
      { level: "物理层", meaning: "发明新产品或技术", example: "Engineers innovated a lighter battery design." },
      { level: "认知层", meaning: "用新思维改变旧模式", example: "The team innovated a new approach to remote work." },
      { level: "精神层", meaning: "敢于创新者塑造未来", example: "Those who dare to innovate shape the future; those who cling to the past are shaped by it." }
    ]
  },
  "instigate": {
    etymology: { roots: "in- (on) + stig (prick/goad) + -ate", origin: "Latin: instigare ← in- (on, upon) + stigare (to prick, goad)", mnemonic: "用刺(stig→sting刺)戳动→煽动/发起" },
    cognates: [
      { word: "instigation", meaning: "煽动；唆使" },
      { word: "instigator", meaning: "煽动者" },
      { word: "stigma", meaning: "耻辱（被标记/刺印）" }
    ],
    synonyms: [
      { word: "initiate", nuance: "发起，中性", formality: "neutral" },
      { word: "provoke", nuance: "激起", formality: "neutral" },
      { word: "spark", nuance: "点燃，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "instigate + change/reform", example: "She instigated a major reform of the system." },
      { pattern: "instigate + investigation", example: "The report instigated an official investigation." },
      { pattern: "instigate + trouble", example: "He was accused of instigating trouble." }
    ],
    layers: [
      { level: "物理层", meaning: "挑起冲突或行动", example: "The incident instigated a riot." },
      { level: "认知层", meaning: "发起变革或调查", example: "The whistleblower instigated a federal investigation." },
      { level: "精神层", meaning: "用一根刺戳破沉默的表面", example: "Those who instigate change are the ones willing to challenge convention and risk comfort." }
    ]
  },
  "integrate": {
    etymology: { roots: "integr- (whole/untouched) + -ate", origin: "Latin: integrare (to make whole) ← integer (whole, complete, untouched)", mnemonic: "使成为完整(integer→整数/完整)的一体→整合" },
    cognates: [
      { word: "integration", meaning: "整合" },
      { word: "integrity", meaning: "正直；完整性" },
      { word: "integer", meaning: "整数" }
    ],
    synonyms: [
      { word: "combine", nuance: "组合", formality: "neutral" },
      { word: "unify", nuance: "统一", formality: "formal" },
      { word: "blend", nuance: "混合", formality: "neutral" }
    ],
    collocations: [
      { pattern: "integrate + into", example: "The new module integrates into the existing system." },
      { pattern: "integrate + with", example: "The app integrates with third-party services." },
      { pattern: "fully integrated", example: "A fully integrated supply chain." }
    ],
    layers: [
      { level: "物理层", meaning: "将部件组装为整体", example: "The chip integrates millions of transistors." },
      { level: "认知层", meaning: "将知识领域融合", example: "The curriculum integrates science and art." },
      { level: "精神层", meaning: "将多样性化为和谐的完整", example: "To integrate diverse elements into a harmonious whole is the highest expression of creative intelligence." }
    ]
  },
  "intercept": {
    etymology: { roots: "inter- (between) + cept (seize)", origin: "Latin: intercipere ← inter- (between) + capere (to take, seize)", mnemonic: "在途中(inter→之间)截取(capere→capture捕获)→拦截" },
    cognates: [
      { word: "interception", meaning: "拦截" },
      { word: "concept", meaning: "概念（con+cept 一起抓住）" },
      { word: "reception", meaning: "接收（re+cept）" }
    ],
    synonyms: [
      { word: "catch", nuance: "抓住，通用", formality: "neutral" },
      { word: "seize", nuance: "扣押", formality: "formal" },
      { word: "cut off", nuance: "截断，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "intercept + message/signal", example: "Intelligence agencies intercepted the communication." },
      { pattern: "intercept + pass", example: "The defender intercepted the pass." },
      { pattern: "intercept + shipment", example: "Customs intercepted the illegal shipment." }
    ],
    layers: [
      { level: "物理层", meaning: "在空中或途中截住", example: "The missile system intercepted the incoming warhead." },
      { level: "认知层", meaning: "截获情报或通信", example: "The coded message was intercepted and decoded." },
      { level: "精神层", meaning: "在信息到达目标前掌控命运", example: "Those who intercept the messages of their adversaries hold the key to victory." }
    ]
  },
  "intertwine": {
    etymology: { roots: "inter- (between/together) + twine (twist)", origin: "English: inter- (together, mutually) + twine (to twist, wind around)", mnemonic: "相互缠绕(twine→麻绳/缠绕)在一起→交织" },
    cognates: [
      { word: "twine", meaning: "麻绳；缠绕" },
      { word: "entwine", meaning: "缠绕" },
      { word: "twin", meaning: "双胞胎（成对的）" }
    ],
    synonyms: [
      { word: "interweave", nuance: "交织编织", formality: "neutral" },
      { word: "entangle", nuance: "纠缠（含负面）", formality: "neutral" },
      { word: "twist together", nuance: "拧在一起，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "intertwine + with", example: "Their lives became intertwined with ours." },
      { pattern: "closely intertwined", example: "Economics and politics are closely intertwined." },
      { pattern: "intertwined + fates", example: "Their fates were intertwined from the start." }
    ],
    layers: [
      { level: "物理层", meaning: "藤蔓或线缠绕在一起", example: "The vines intertwined around the old fence." },
      { level: "认知层", meaning: "概念或系统密切关联", example: "Technology and society are deeply intertwined." },
      { level: "精神层", meaning: "善恶在生命中不可分割地交织", example: "Joy and sorrow intertwine in every human story." }
    ]
  },
  "intimidate": {
    etymology: { roots: "in- (into) + timid (fearful) + -ate", origin: "Latin: intimidare ← in- (into) + timidus (fearful, timid)", mnemonic: "将胆怯(timidus→timid胆小)注入对方→恐吓" },
    cognates: [
      { word: "intimidation", meaning: "恐吓" },
      { word: "timid", meaning: "胆怯的" },
      { word: "timidity", meaning: "胆怯" }
    ],
    synonyms: [
      { word: "threaten", nuance: "威胁", formality: "neutral" },
      { word: "bully", nuance: "欺凌", formality: "informal" },
      { word: "daunt", nuance: "使怯步", formality: "formal" }
    ],
    collocations: [
      { pattern: "intimidate + witnesses", example: "The gang intimidated witnesses into silence." },
      { pattern: "feel intimidated", example: "New students often feel intimidated." },
      { pattern: "intimidate + into submission", example: "They tried to intimidate the opposition into submission." }
    ],
    layers: [
      { level: "物理层", meaning: "用体力或武力恐吓", example: "The bodyguard's size intimidated the intruder." },
      { level: "认知层", meaning: "用权威或能力使人胆怯", example: "Her expertise intimidated less experienced colleagues." },
      { level: "精神层", meaning: "企图将胆怯注入勇敢的灵魂", example: "No one can intimidate you without your consent." }
    ]
  },
  "invigorate": {
    etymology: { roots: "in- (into) + vigor (life force) + -ate", origin: "Latin: in- (into) + vigor (liveliness, energy) → Medieval Latin invigorare", mnemonic: "注入活力(vigor→vigorous精力充沛)→使振奋" },
    cognates: [
      { word: "vigor", meaning: "活力；精力" },
      { word: "vigorous", meaning: "精力充沛的" },
      { word: "reinvigorate", meaning: "重新焕发活力" }
    ],
    synonyms: [
      { word: "energize", nuance: "给予能量", formality: "neutral" },
      { word: "revitalize", nuance: "使恢复活力", formality: "formal" },
      { word: "pep up", nuance: "提振精神，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "invigorate + body/mind", example: "The morning swim invigorated her body and mind." },
      { pattern: "invigorate + economy", example: "Tax reforms invigorated the economy." },
      { pattern: "feel invigorated", example: "She felt invigorated after the hike." }
    ],
    layers: [
      { level: "物理层", meaning: "恢复身体活力", example: "The cold shower invigorated him instantly." },
      { level: "认知层", meaning: "注入新活力激发创造", example: "New leadership invigorated the stalled project." },
      { level: "精神层", meaning: "大自然将生命力注入灵魂", example: "Nature invigorates all who open themselves to her embrace." }
    ]
  },
  "jeopardize": {
    etymology: { roots: "jeopar- (even game/risk) + -ize", origin: "Old French: jeu parti (an even/divided game, a risky situation) → English jeopardy", mnemonic: "在均等赌局(jeu parti→赌注)中冒险→危及" },
    cognates: [
      { word: "jeopardy", meaning: "危险；危境" }
    ],
    synonyms: [
      { word: "endanger", nuance: "使陷入危险", formality: "neutral" },
      { word: "imperil", nuance: "使处于危险中（正式）", formality: "formal" },
      { word: "put at risk", nuance: "置于风险中，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "jeopardize + safety/security", example: "The leak jeopardized national security." },
      { pattern: "jeopardize + chances", example: "One mistake could jeopardize your chances." },
      { pattern: "jeopardize + future", example: "Short-term gains that jeopardize the future." }
    ],
    layers: [
      { level: "物理层", meaning: "使物理安全受威胁", example: "The structural flaw jeopardized the building's safety." },
      { level: "认知层", meaning: "使计划或目标受损", example: "The scandal jeopardized the election campaign." },
      { level: "精神层", meaning: "以短视赌博危及长远命运", example: "To jeopardize the earth is to jeopardize ourselves." }
    ]
  },
  "juxtapose": {
    etymology: { roots: "juxta (beside) + pose (place)", origin: "Latin: juxta (beside, near) + French poser (to place) ← Latin ponere (to put)", mnemonic: "紧挨着(juxta→adjacent相邻)放置(pose→放)→并列" },
    cognates: [
      { word: "juxtaposition", meaning: "并置；对比" }
    ],
    synonyms: [
      { word: "compare", nuance: "比较", formality: "neutral" },
      { word: "contrast", nuance: "对比差异", formality: "neutral" },
      { word: "set side by side", nuance: "放在一起比，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "juxtapose + with/against", example: "The film juxtaposes poverty with extravagance." },
      { pattern: "juxtapose + images", example: "The artist juxtaposed classical and modern images." },
      { pattern: "deliberately juxtapose", example: "The author deliberately juxtaposes hope and despair." }
    ],
    layers: [
      { level: "物理层", meaning: "将两物紧挨放置", example: "The exhibit juxtaposes ancient and modern pottery." },
      { level: "认知层", meaning: "通过对比揭示差异", example: "The study juxtaposes urban and rural education systems." },
      { level: "精神层", meaning: "并置平凡与非凡以揭示真理", example: "When we juxtapose the ordinary with the extraordinary, we reveal what the eye alone cannot see." }
    ]
  },
  "lament": {
    etymology: { roots: "lament- (cry out/wail)", origin: "Latin: lamentum (wailing, mourning song)", mnemonic: "发出哀悼的歌声(lamentum→悲歌)→哀悼" },
    cognates: [
      { word: "lamentation", meaning: "悲叹；哀歌" },
      { word: "lamentable", meaning: "令人遗憾的" }
    ],
    synonyms: [
      { word: "mourn", nuance: "哀悼", formality: "neutral" },
      { word: "bewail", nuance: "痛哭", formality: "formal" },
      { word: "cry over", nuance: "为…哭泣，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "lament + loss/death", example: "The nation lamented the loss of the hero." },
      { pattern: "lament + the fact that", example: "She lamented the fact that the forest was gone." },
      { pattern: "deeply lament", example: "We deeply lament this tragedy." }
    ],
    layers: [
      { level: "物理层", meaning: "为死者发出悲泣", example: "The mourners lamented at the graveside." },
      { level: "认知层", meaning: "为失去的事物表达遗憾", example: "Critics lament the decline of traditional craftsmanship." },
      { level: "精神层", meaning: "将痛苦化为歌声", example: "To lament what is lost is human; to rebuild from the ashes is divine." }
    ]
  },
  "lure": {
    etymology: { roots: "lure (falconry bait)", origin: "Old French: loirre/luere (falconer's lure, bait) ← Frankish *lothr (bait)", mnemonic: "用猎鹰诱饵(loirre→鹰饵)吸引猎物→引诱" },
    cognates: [
      { word: "lure (n.)", meaning: "诱饵；魅力" },
      { word: "allure", meaning: "魅力（al+lure 向诱饵去）" }
    ],
    synonyms: [
      { word: "entice", nuance: "引诱（点燃欲望）", formality: "neutral" },
      { word: "tempt", nuance: "诱惑", formality: "neutral" },
      { word: "bait", nuance: "引诱上钩，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "lure + into", example: "Scammers lure victims into fake investments." },
      { pattern: "lure + away", example: "The rival company lured talent away." },
      { pattern: "lure + of/with", example: "The lure of easy money proved irresistible." }
    ],
    layers: [
      { level: "物理层", meaning: "用饵诱捕猎物", example: "The fisherman lured the trout with a fly." },
      { level: "认知层", meaning: "用好处或承诺诱导", example: "The scheme lured investors with unrealistic returns." },
      { level: "精神层", meaning: "未知的召唤引诱冒险的心", example: "The call of the unknown lures the adventurous heart beyond the familiar." }
    ]
  },
  "magnify": {
    etymology: { roots: "magn- (great) + -ify (make)", origin: "Latin: magnificare ← magnus (great, large) + facere (to make)", mnemonic: "使变得伟大(magnus→magnificent壮丽)→放大" },
    cognates: [
      { word: "magnification", meaning: "放大" },
      { word: "magnificent", meaning: "壮丽的" },
      { word: "magnitude", meaning: "大小；重要性" }
    ],
    synonyms: [
      { word: "enlarge", nuance: "放大尺寸", formality: "neutral" },
      { word: "amplify", nuance: "增强信号", formality: "neutral" },
      { word: "blow up", nuance: "放大，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "magnify + image/object", example: "The lens magnifies objects 100 times." },
      { pattern: "magnify + problem", example: "Delays only magnify the problem." },
      { pattern: "magnify + importance", example: "The media tends to magnify minor events." }
    ],
    layers: [
      { level: "物理层", meaning: "光学放大", example: "The microscope magnifies cells to visible size." },
      { level: "认知层", meaning: "夸大问题或意义", example: "Fear magnifies perceived risks." },
      { level: "精神层", meaning: "每一个扩展视野的工具都拓展已知世界", example: "Every instrument that magnifies our vision extends the boundaries of the known world." }
    ]
  },
  "mediate": {
    etymology: { roots: "medi- (middle) + -ate", origin: "Latin: mediare (to be in the middle) ← medius (middle)", mnemonic: "站在中间(medius→medium中间)→调解" },
    cognates: [
      { word: "mediation", meaning: "调解" },
      { word: "medium", meaning: "中间；媒介" },
      { word: "medieval", meaning: "中世纪的（中间时代）" }
    ],
    synonyms: [
      { word: "arbitrate", nuance: "仲裁（有决定权）", formality: "formal" },
      { word: "negotiate", nuance: "谈判", formality: "neutral" },
      { word: "go between", nuance: "做中间人，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "mediate + between", example: "She mediated between the two parties." },
      { pattern: "mediate + dispute/conflict", example: "The UN mediated the territorial dispute." },
      { pattern: "mediate + peace", example: "Norway mediated a peace agreement." }
    ],
    layers: [
      { level: "物理层", meaning: "在两方之间传递信息", example: "The translator mediated between the two delegations." },
      { level: "认知层", meaning: "促进双方达成共识", example: "The manager mediated the team conflict successfully." },
      { level: "精神层", meaning: "以智慧和同情成为对立世界的桥梁", example: "To mediate with wisdom and compassion is among the noblest of human endeavors." }
    ]
  },
  "mitigate": {
    etymology: { roots: "mit- (mild/soft) + -igate", origin: "Latin: mitigare ← mitis (mild, soft, gentle) + agere (to do, drive)", mnemonic: "用温和的方式(mitis→mild温和)处理→缓解" },
    cognates: [
      { word: "mitigation", meaning: "缓解（名词）" },
      { word: "mitigating", meaning: "减轻的（mitigating circumstances）" }
    ],
    synonyms: [
      { word: "alleviate", nuance: "减轻（痛苦）", formality: "formal" },
      { word: "lessen", nuance: "减少", formality: "neutral" },
      { word: "take the edge off", nuance: "减缓，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "mitigate + risk/impact", example: "Insurance helps mitigate financial risk." },
      { pattern: "mitigate + effects", example: "Trees mitigate the effects of urban heat." },
      { pattern: "mitigate + damage", example: "Quick action mitigated the flood damage." }
    ],
    layers: [
      { level: "物理层", meaning: "减轻灾害的影响", example: "Sandbags mitigated the flood damage." },
      { level: "认知层", meaning: "降低风险或不良后果", example: "Diversification mitigates investment risk." },
      { level: "精神层", meaning: "以温柔之手缓解苦难", example: "To mitigate suffering wherever it is found — this is the highest calling." }
    ]
  },
  "mobilize": {
    etymology: { roots: "mobil- (movable) + -ize", origin: "Latin: mobilis (movable) ← movere (to move)", mnemonic: "使可以移动(mobilis→mobile移动的)起来→动员" },
    cognates: [
      { word: "mobilization", meaning: "动员" },
      { word: "mobile", meaning: "可移动的" },
      { word: "automobile", meaning: "汽车（auto+mobile 自行移动）" }
    ],
    synonyms: [
      { word: "rally", nuance: "集合", formality: "neutral" },
      { word: "marshal", nuance: "集结/调配", formality: "formal" },
      { word: "round up", nuance: "召集，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "mobilize + troops/resources", example: "The government mobilized the national guard." },
      { pattern: "mobilize + support", example: "The campaign mobilized grassroots support." },
      { pattern: "mobilize + around a cause", example: "Citizens mobilized around environmental protection." }
    ],
    layers: [
      { level: "物理层", meaning: "调动军队或物资", example: "Reserves were mobilized within 48 hours." },
      { level: "认知层", meaning: "组织人力投入行动", example: "Volunteers mobilized to rebuild after the hurricane." },
      { level: "精神层", meaning: "将静止的善意转化为行动的力量", example: "When people of goodwill mobilize, no obstacle is insurmountable." }
    ]
  },
  "mourn": {
    etymology: { roots: "mourn (grieve/remember)", origin: "Old English: murnan (to mourn, be anxious, care about) ← Proto-Germanic *murnan", mnemonic: "在心中牵挂(murnan→忧伤/惦念)逝者→哀悼" },
    cognates: [
      { word: "mourning", meaning: "哀悼；丧期" },
      { word: "mournful", meaning: "悲伤的" }
    ],
    synonyms: [
      { word: "grieve", nuance: "悲痛（内在沉重）", formality: "neutral" },
      { word: "lament", nuance: "哀叹", formality: "formal" },
      { word: "weep for", nuance: "为…哭泣", formality: "neutral" }
    ],
    collocations: [
      { pattern: "mourn + the dead/loss", example: "The community mourned the victims." },
      { pattern: "mourn + passing", example: "We mourn the passing of a great leader." },
      { pattern: "publicly mourn", example: "The nation publicly mourned for a week." }
    ],
    layers: [
      { level: "物理层", meaning: "在葬礼上表达哀痛", example: "Thousands mourned at the state funeral." },
      { level: "认知层", meaning: "为失去的机会或时代惋惜", example: "Scholars mourn the loss of the ancient library." },
      { level: "精神层", meaning: "哀悼是生命节奏中不可或缺的一拍", example: "There is a time to mourn and a time to dance." }
    ]
  },
  "negate": {
    etymology: { roots: "neg- (not/deny) + -ate", origin: "Latin: negare (to deny, say no) ← nec/neg (not)", mnemonic: "说不(neg→negative否定的)→否定/使无效" },
    cognates: [
      { word: "negation", meaning: "否定" },
      { word: "negative", meaning: "消极的；否定的" },
      { word: "negligent", meaning: "疏忽的（neg+lig 不选择关注）" }
    ],
    synonyms: [
      { word: "nullify", nuance: "使无效", formality: "formal" },
      { word: "invalidate", nuance: "使不成立", formality: "formal" },
      { word: "cancel out", nuance: "抵消，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "negate + effect/impact", example: "The benefits were negated by the high costs." },
      { pattern: "negate + argument", example: "New evidence negated the previous argument." },
      { pattern: "effectively negate", example: "The ruling effectively negated the law." }
    ],
    layers: [
      { level: "物理层", meaning: "抵消物理效应", example: "The noise-canceling feature negates ambient sound." },
      { level: "认知层", meaning: "推翻论点或结论", example: "The new study negated previous findings." },
      { level: "精神层", meaning: "冷漠不否定邪恶反而纵容它", example: "Indifference does not negate evil — it enables it." }
    ]
  },
  "neglect": {
    etymology: { roots: "neg- (not) + lect (pick/choose)", origin: "Latin: neglegere ← neg- (not) + legere (to pick, choose, read)", mnemonic: "不去选择(legere→select选择)关注→忽视" },
    cognates: [
      { word: "negligence", meaning: "疏忽" },
      { word: "negligible", meaning: "可忽略的" },
      { word: "select", meaning: "选择（se+lect 分开挑选）" }
    ],
    synonyms: [
      { word: "ignore", nuance: "无视", formality: "neutral" },
      { word: "overlook", nuance: "疏忽遗漏", formality: "neutral" },
      { word: "let slide", nuance: "放任不管，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "neglect + duty/responsibility", example: "He was charged with neglecting his duty." },
      { pattern: "neglect + to mention", example: "She neglected to mention the deadline." },
      { pattern: "benign neglect", example: "The garden thrived under benign neglect." }
    ],
    layers: [
      { level: "物理层", meaning: "未能维护或照料", example: "Years of neglect left the building in ruins." },
      { level: "认知层", meaning: "忽视重要事项或警告", example: "They neglected the warning signs until it was too late." },
      { level: "精神层", meaning: "微小的忽视酿成巨大的灾难", example: "A little neglect may breed great mischief." }
    ]
  },
  "obstruct": {
    etymology: { roots: "ob- (against) + struct (build)", origin: "Latin: obstruere ← ob- (against, in the way) + struere (to build, pile up)", mnemonic: "在前方建(struere→structure结构)起障碍→阻碍" },
    cognates: [
      { word: "obstruction", meaning: "障碍；阻碍" },
      { word: "construct", meaning: "建造（con+struct）" },
      { word: "structure", meaning: "结构" }
    ],
    synonyms: [
      { word: "block", nuance: "阻塞", formality: "neutral" },
      { word: "impede", nuance: "妨碍", formality: "formal" },
      { word: "get in the way", nuance: "挡道，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "obstruct + justice", example: "He was charged with obstructing justice." },
      { pattern: "obstruct + view/path", example: "The pillar obstructed the view of the stage." },
      { pattern: "obstruct + progress", example: "Corruption obstructs economic progress." }
    ],
    layers: [
      { level: "物理层", meaning: "堵塞通道或视线", example: "Fallen debris obstructed the highway." },
      { level: "认知层", meaning: "阻碍法律或制度运作", example: "The senator was accused of obstructing the investigation." },
      { level: "精神层", meaning: "人为建造的墙终将被自由推倒", example: "No wall can forever obstruct the human desire for liberty." }
    ]
  },
  "oppress": {
    etymology: { roots: "op- (against/down) + press (push)", origin: "Latin: opprimere ← ob- (against, down upon) + premere (to press, push)", mnemonic: "从上方向下压(premere→press压)→压迫" },
    cognates: [
      { word: "oppression", meaning: "压迫" },
      { word: "suppress", meaning: "压制" },
      { word: "compress", meaning: "压缩" }
    ],
    synonyms: [
      { word: "persecute", nuance: "迫害", formality: "formal" },
      { word: "subjugate", nuance: "征服使屈服", formality: "formal" },
      { word: "crush", nuance: "压碎", formality: "neutral" }
    ],
    collocations: [
      { pattern: "oppress + people/minority", example: "The regime oppressed religious minorities." },
      { pattern: "oppress + through laws", example: "Unjust laws oppress the poor." },
      { pattern: "feel oppressed", example: "Citizens felt oppressed by censorship." }
    ],
    layers: [
      { level: "物理层", meaning: "用暴力压制", example: "The army oppressed the civilian population." },
      { level: "认知层", meaning: "用制度剥夺权利", example: "Discriminatory policies oppress vulnerable communities." },
      { level: "精神层", meaning: "日复一日地用重量把人压在底层", example: "Where any class is made to feel that society conspires to oppress them, no one is safe." }
    ]
  },
  "originate": {
    etymology: { roots: "origin- (beginning/birth) + -ate", origin: "Latin: origo/originis (beginning, source, birth) ← oriri (to rise, be born)", mnemonic: "从起源(origo→origin)处升起→起源/发起" },
    cognates: [
      { word: "origin", meaning: "起源" },
      { word: "original", meaning: "原创的" },
      { word: "orient", meaning: "东方（太阳升起的地方）" }
    ],
    synonyms: [
      { word: "arise", nuance: "产生", formality: "neutral" },
      { word: "stem from", nuance: "源于", formality: "neutral" },
      { word: "come from", nuance: "来自，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "originate + from/in", example: "The tradition originates from ancient Rome." },
      { pattern: "originate + idea", example: "The idea originated in a casual conversation." },
      { pattern: "originate + with", example: "The proposal originated with the marketing team." }
    ],
    layers: [
      { level: "物理层", meaning: "从某地或某时开始", example: "The fire originated in the basement." },
      { level: "认知层", meaning: "思想或概念的诞生", example: "The theory originated in Einstein's thought experiments." },
      { level: "精神层", meaning: "每一场革命都起源于一个火花", example: "Every revolution originated in a single spark of imagination daring to defy the impossible." }
    ]
  },
  "overwhelm": {
    etymology: { roots: "over- (above) + whelm (submerge)", origin: "Middle English: over- (above, completely) + whelm (to overturn, submerge, cover)", mnemonic: "从头顶(over)完全淹没(whelm→覆盖)→压倒" },
    cognates: [
      { word: "overwhelming", meaning: "压倒性的" },
      { word: "whelm", meaning: "淹没（古语）" }
    ],
    synonyms: [
      { word: "overpower", nuance: "制服", formality: "neutral" },
      { word: "inundate", nuance: "淹没", formality: "formal" },
      { word: "swamp", nuance: "使应接不暇，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "overwhelm + with emotion", example: "She was overwhelmed with gratitude." },
      { pattern: "overwhelm + forces", example: "The enemy overwhelmed the defenders." },
      { pattern: "feel overwhelmed", example: "New parents often feel overwhelmed." }
    ],
    layers: [
      { level: "物理层", meaning: "以压倒性力量击败", example: "The floodwaters overwhelmed the levees." },
      { level: "认知层", meaning: "信息或任务过量导致无法处理", example: "He was overwhelmed by the workload." },
      { level: "精神层", meaning: "不让挑战的巨浪淹没勇气", example: "We must not let the vastness of our challenges overwhelm us." }
    ]
  },
  "penetrate": {
    etymology: { roots: "penetr- (inner part) + -ate", origin: "Latin: penetrare (to enter, reach the inside) ← penitus (inner, deep within)", mnemonic: "进入最内部(penitus→内部深处)→穿透/洞察" },
    cognates: [
      { word: "penetration", meaning: "穿透；渗透" },
      { word: "penetrating", meaning: "敏锐的；穿透的" },
      { word: "impenetrable", meaning: "不可穿透的" }
    ],
    synonyms: [
      { word: "pierce", nuance: "刺穿", formality: "neutral" },
      { word: "permeate", nuance: "渗透", formality: "formal" },
      { word: "get through", nuance: "穿过，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "penetrate + market", example: "The brand penetrated the Asian market." },
      { pattern: "penetrate + defenses", example: "The missile penetrated enemy defenses." },
      { pattern: "penetrate + surface", example: "The drill penetrated the rock surface." }
    ],
    layers: [
      { level: "物理层", meaning: "穿透物理屏障", example: "The bullet penetrated the steel plate." },
      { level: "认知层", meaning: "深入理解复杂问题", example: "Few scholars have penetrated the mystery of this ancient script." },
      { level: "精神层", meaning: "穿透表象触及深藏的真理", example: "Only through sustained inquiry can we penetrate the surface and reach deeper truths." }
    ]
  },
  "perpetuate": {
    etymology: { roots: "perpetu- (continuous/unending) + -ate", origin: "Latin: perpetuare ← perpetuus (continuous) ← per- (through, completely) + petuus (going toward)", mnemonic: "使贯穿(per→through)始终不断→使永续" },
    cognates: [
      { word: "perpetuation", meaning: "永续化" },
      { word: "perpetual", meaning: "永恒的" },
      { word: "perpetuity", meaning: "永久" }
    ],
    synonyms: [
      { word: "sustain", nuance: "维持", formality: "neutral" },
      { word: "preserve", nuance: "保存", formality: "neutral" },
      { word: "keep alive", nuance: "使存续，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "perpetuate + myth/stereotype", example: "The media perpetuates harmful stereotypes." },
      { pattern: "perpetuate + cycle", example: "Poverty perpetuates a cycle of disadvantage." },
      { pattern: "perpetuate + memory", example: "The monument perpetuates the memory of the fallen." }
    ],
    layers: [
      { level: "物理层", meaning: "使物种或传统延续", example: "Seeds perpetuate the species." },
      { level: "认知层", meaning: "使错误观念持续传播", example: "Misinformation perpetuates fear and division." },
      { level: "精神层", meaning: "不作为让邪恶获得永久生命", example: "Complacency does not merely tolerate wrongdoing — it perpetuates it." }
    ]
  },
  "plunge": {
    etymology: { roots: "plunge (dive/thrust)", origin: "Old French: plongier (to plunge, submerge) ← Vulgar Latin *plumbicare (to heave the lead) ← Latin plumbum (lead)", mnemonic: "像铅块(plumbum→plumber水管工)一样重重沉入→投入" },
    cognates: [
      { word: "plunge (n.)", meaning: "跳入；骤降" },
      { word: "plumber", meaning: "水管工（用铅管的人）" },
      { word: "plumb", meaning: "铅锤；探测深度" }
    ],
    synonyms: [
      { word: "dive", nuance: "跳水/俯冲", formality: "neutral" },
      { word: "plummet", nuance: "直线下坠", formality: "neutral" },
      { word: "take the plunge", nuance: "鼓起勇气做，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "plunge + into", example: "He plunged into the cold water." },
      { pattern: "plunge + downward", example: "Stocks plunged 10% in a single day." },
      { pattern: "take the plunge", example: "She decided to take the plunge and start her own business." }
    ],
    layers: [
      { level: "物理层", meaning: "纵身跳入水中或深处", example: "The cliff diver plunged thirty meters into the sea." },
      { level: "认知层", meaning: "数值急剧下降", example: "Temperatures plunged overnight." },
      { level: "精神层", meaning: "义无反顾地投入未知", example: "To plunge into the unknown with an open heart is the beginning of every great adventure." }
    ]
  },
  "proliferate": {
    etymology: { roots: "proli- (offspring) + fer (carry/bear) + -ate", origin: "Latin: proles (offspring) + ferre (to bear, carry)", mnemonic: "大量产生后代(proles→子孙)+承载(ferre→fertile多产)→激增" },
    cognates: [
      { word: "proliferation", meaning: "激增；扩散" },
      { word: "prolific", meaning: "多产的" },
      { word: "proletariat", meaning: "无产阶级（仅有子女的人）" }
    ],
    synonyms: [
      { word: "multiply", nuance: "倍增", formality: "neutral" },
      { word: "spread", nuance: "扩散", formality: "neutral" },
      { word: "mushroom", nuance: "像蘑菇一样冒出，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "proliferate + rapidly", example: "Cancer cells proliferate rapidly." },
      { pattern: "proliferate + weapons", example: "Efforts to prevent nuclear weapons from proliferating." },
      { pattern: "proliferate + online", example: "Fake news proliferates online." }
    ],
    layers: [
      { level: "物理层", meaning: "细胞或生物大量繁殖", example: "Bacteria proliferate in warm, moist conditions." },
      { level: "认知层", meaning: "信息或技术迅速扩散", example: "Social media platforms proliferated in the 2010s." },
      { level: "精神层", meaning: "数据爆炸呼唤智慧的回归", example: "As data proliferates, the need for wisdom grows ever more urgent." }
    ]
  },
  "provoke": {
    etymology: { roots: "pro- (forth) + voke (call)", origin: "Latin: provocare ← pro- (forth, forward) + vocare (to call)", mnemonic: "向前召唤(vocare→voice声音)出反应→激怒/引发" },
    cognates: [
      { word: "provocation", meaning: "挑衅" },
      { word: "provocative", meaning: "挑衅的；发人深省的" },
      { word: "evoke", meaning: "唤起（e+voke）" }
    ],
    synonyms: [
      { word: "incite", nuance: "煽动", formality: "neutral" },
      { word: "aggravate", nuance: "加重/激怒", formality: "neutral" },
      { word: "wind up", nuance: "故意激怒，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "provoke + reaction/response", example: "The article provoked a strong reaction." },
      { pattern: "provoke + anger", example: "His words provoked widespread anger." },
      { pattern: "provoke + thought", example: "The film provokes deep thought." }
    ],
    layers: [
      { level: "物理层", meaning: "刺激身体产生反应", example: "The allergen provoked a severe response." },
      { level: "认知层", meaning: "引发争论或思考", example: "The essay provoked heated debate." },
      { level: "精神层", meaning: "不公正从灵魂深处召唤出反抗", example: "Injustice provokes the spirit of resistance." }
    ]
  },
  "pursue": {
    etymology: { roots: "pur- (forward) + sue (follow)", origin: "Latin: prosequi ← pro- (forward) + sequi (to follow)", mnemonic: "向前(pro)追随(sequi→sequence序列)到底→追求" },
    cognates: [
      { word: "pursuit", meaning: "追求" },
      { word: "prosecute", meaning: "起诉（追究到底）" },
      { word: "sequence", meaning: "序列（依次跟随）" }
    ],
    synonyms: [
      { word: "chase", nuance: "追赶", formality: "neutral" },
      { word: "seek", nuance: "寻求", formality: "neutral" },
      { word: "go after", nuance: "追逐，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "pursue + dream/goal", example: "She pursued her dream of becoming a doctor." },
      { pattern: "pursue + career", example: "He decided to pursue a career in law." },
      { pattern: "pursue + happiness", example: "The right to pursue happiness." }
    ],
    layers: [
      { level: "物理层", meaning: "奔跑追赶目标", example: "The cheetah pursued the gazelle across the plain." },
      { level: "认知层", meaning: "致力于学术或职业目标", example: "She pursued a PhD in astrophysics." },
      { level: "精神层", meaning: "以热情和坚持追随使命", example: "To pursue one's calling with passion is to live a life of true purpose." }
    ]
  },
  "quench": {
    etymology: { roots: "quench (extinguish)", origin: "Old English: cwencan (to extinguish, put out)", mnemonic: "浇灭(cwencan→灭火)渴望的火焰→解渴/扑灭" },
    cognates: [
    ],
    synonyms: [
      { word: "satisfy", nuance: "满足", formality: "neutral" },
      { word: "slake", nuance: "解渴", formality: "formal" },
      { word: "put out", nuance: "扑灭，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "quench + thirst", example: "Nothing quenches thirst like cold water." },
      { pattern: "quench + fire/flames", example: "The rain quenched the forest fire." },
      { pattern: "quench + desire", example: "No success could quench his desire for more." }
    ],
    layers: [
      { level: "物理层", meaning: "浇灭火焰或解渴", example: "She quenched her thirst with spring water." },
      { level: "认知层", meaning: "满足对知识的渴望", example: "The encyclopedia quenched his curiosity temporarily." },
      { level: "精神层", meaning: "真正的渴望永远无法被单一答案浇灭", example: "No single answer can quench the thirst of an inquiring mind." }
    ]
  },
  "radiate": {
    etymology: { roots: "radi- (ray/beam) + -ate", origin: "Latin: radiare (to emit beams) ← radius (ray, spoke of a wheel)", mnemonic: "发射光线(radius→射线)→辐射/散发" },
    cognates: [
      { word: "radiation", meaning: "辐射" },
      { word: "radiant", meaning: "光芒四射的" },
      { word: "radius", meaning: "半径" }
    ],
    synonyms: [
      { word: "emit", nuance: "释放（物理）", formality: "formal" },
      { word: "exude", nuance: "流露", formality: "neutral" },
      { word: "give off", nuance: "发出，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "radiate + warmth/heat", example: "The campfire radiated warmth." },
      { pattern: "radiate + confidence", example: "She radiates confidence." },
      { pattern: "radiate + from", example: "Light radiated from the crystal." }
    ],
    layers: [
      { level: "物理层", meaning: "发出光或热", example: "The sun radiates energy in all directions." },
      { level: "认知层", meaning: "自然流露气质", example: "She radiates calm authority in meetings." },
      { level: "精神层", meaning: "内在温暖像阳光一样照亮周围", example: "People who radiate genuine warmth change the world around them." }
    ]
  },
  "ravage": {
    etymology: { roots: "ravage (plunder)", origin: "Old French: ravir (to seize, snatch) → ravage (devastation)", mnemonic: "像强盗(ravir→掠夺)一样反复洗劫→蹂躏" },
    cognates: [
      { word: "ravage (n.)", meaning: "蹂躏；破坏" },
      { word: "ravish", meaning: "使狂喜；强夺" }
    ],
    synonyms: [
      { word: "devastate", nuance: "彻底摧毁", formality: "formal" },
      { word: "wreck", nuance: "严重损坏", formality: "neutral" },
      { word: "lay waste", nuance: "夷为平地，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "ravage + land/city", example: "The plague ravaged the city." },
      { pattern: "ravaged by war", example: "A nation ravaged by decades of war." },
      { pattern: "ravages of time", example: "The ravages of time spared nothing." }
    ],
    layers: [
      { level: "物理层", meaning: "自然或战争造成大面积破坏", example: "The hurricane ravaged the coastal towns." },
      { level: "认知层", meaning: "反复破坏直至面目全非", example: "Disease ravaged the population for years." },
      { level: "精神层", meaning: "战争蹂躏灵魂留下永恒的伤疤", example: "Conflict ravages not only the land but the souls of all who endure it." }
    ]
  },
  "reclaim": {
    etymology: { roots: "re- (back) + claim (call out/demand)", origin: "Latin: re- (back) + clamare (to cry out, demand)", mnemonic: "重新宣称(clamare→claim要求)所有权→收回" },
    cognates: [
      { word: "reclamation", meaning: "开垦；回收" },
      { word: "claim", meaning: "宣称；要求" },
      { word: "exclaim", meaning: "惊呼" }
    ],
    synonyms: [
      { word: "recover", nuance: "恢复", formality: "neutral" },
      { word: "retrieve", nuance: "取回", formality: "neutral" },
      { word: "take back", nuance: "拿回，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "reclaim + land", example: "The Dutch reclaimed land from the sea." },
      { pattern: "reclaim + identity", example: "She reclaimed her cultural identity." },
      { pattern: "reclaim + materials", example: "The facility reclaims metals from e-waste." }
    ],
    layers: [
      { level: "物理层", meaning: "将荒地开垦为可用之地", example: "Engineers reclaimed the marshland for farming." },
      { level: "认知层", meaning: "重新获得失去的权利或资源", example: "The community reclaimed its public spaces." },
      { level: "精神层", meaning: "重新主张对自我的所有权", example: "To reclaim one's origin is the deepest journey." }
    ]
  },
  "redeem": {
    etymology: { roots: "re- (back) + deem (buy/take)", origin: "Latin: redimere ← re- (back) + emere (to buy, take)", mnemonic: "买回(emere→buy购买)→赎回/挽回" },
    cognates: [
      { word: "redemption", meaning: "赎回；救赎" },
      { word: "exempt", meaning: "免除（ex+empt 买出去）" }
    ],
    synonyms: [
      { word: "atone", nuance: "赎罪", formality: "formal" },
      { word: "salvage", nuance: "挽救", formality: "neutral" },
      { word: "make up for", nuance: "弥补，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "redeem + promise/pledge", example: "He redeemed his promise to return." },
      { pattern: "redeem + oneself", example: "She redeemed herself with a brilliant performance." },
      { pattern: "redeem + coupon", example: "You can redeem this coupon online." }
    ],
    layers: [
      { level: "物理层", meaning: "兑换或赎回物品", example: "She redeemed the voucher at the counter." },
      { level: "认知层", meaning: "通过行动弥补过错", example: "He redeemed his earlier failure with a flawless second attempt." },
      { level: "精神层", meaning: "以牺牲赎买更好的自我", example: "Every soul retains the power to rise and redeem the promise of a better self." }
    ]
  },
  "refine": {
    etymology: { roots: "re- (again) + fine (make fine/pure)", origin: "French: raffiner ← re- (again) + fin (fine, pure)", mnemonic: "反复使之精细(fine→精细)→精炼/改进" },
    cognates: [
      { word: "refinement", meaning: "精炼；优雅" },
      { word: "refinery", meaning: "精炼厂" },
      { word: "fine", meaning: "精细的" }
    ],
    synonyms: [
      { word: "polish", nuance: "打磨", formality: "neutral" },
      { word: "hone", nuance: "磨砺", formality: "neutral" },
      { word: "fine-tune", nuance: "微调，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "refine + process/technique", example: "Scientists refined the experimental method." },
      { pattern: "refine + oil/sugar", example: "The plant refines crude oil." },
      { pattern: "refine + taste", example: "Travel refined his aesthetic taste." }
    ],
    layers: [
      { level: "物理层", meaning: "提纯原材料", example: "The refinery refines crude oil into gasoline." },
      { level: "认知层", meaning: "通过迭代改进想法或技能", example: "Each draft refined the argument further." },
      { level: "精神层", meaning: "反复锤炼直至只剩精华", example: "To refine an idea through tireless iteration — that is the true labor of creation." }
    ]
  },
  "reinforce": {
    etymology: { roots: "re- (again) + in- (in) + force", origin: "French: renforcer ← re- (again) + enforcer (to strengthen)", mnemonic: "再次加强(force→力量)→强化/增援" },
    cognates: [
      { word: "reinforcement", meaning: "增援；强化" },
      { word: "enforce", meaning: "执行；强制" },
      { word: "force", meaning: "力量" }
    ],
    synonyms: [
      { word: "strengthen", nuance: "加强", formality: "neutral" },
      { word: "bolster", nuance: "支撑", formality: "neutral" },
      { word: "beef up", nuance: "加固，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "reinforce + structure", example: "Steel beams reinforce the bridge." },
      { pattern: "reinforce + message/idea", example: "The data reinforces our conclusion." },
      { pattern: "reinforce + behavior", example: "Positive feedback reinforces good behavior." }
    ],
    layers: [
      { level: "物理层", meaning: "用材料加固结构", example: "Workers reinforced the dam with concrete." },
      { level: "认知层", meaning: "通过重复巩固学习", example: "Quizzes reinforce what was taught in class." },
      { level: "精神层", meaning: "每次重复都在加固通往精通的道路", example: "Each practice session reinforces the neural pathways of mastery." }
    ]
  },
  "rekindle": {
    etymology: { roots: "re- (again) + kindle (set fire to)", origin: "English: re- (again) + kindle (to set on fire, from Old Norse kynda)", mnemonic: "再次点燃(kindle→点火)→重燃" },
    cognates: [
      { word: "kindle", meaning: "点燃" },
      { word: "kindling", meaning: "引火物" }
    ],
    synonyms: [
      { word: "revive", nuance: "使复活", formality: "neutral" },
      { word: "renew", nuance: "更新", formality: "neutral" },
      { word: "reignite", nuance: "重新点燃", formality: "neutral" }
    ],
    collocations: [
      { pattern: "rekindle + interest/passion", example: "The trip rekindled her passion for art." },
      { pattern: "rekindle + hope", example: "A small victory rekindled hope." },
      { pattern: "rekindle + relationship", example: "They tried to rekindle their friendship." }
    ],
    layers: [
      { level: "物理层", meaning: "重新点燃火焰", example: "He rekindled the campfire with dry leaves." },
      { level: "认知层", meaning: "恢复失去的兴趣或热情", example: "The documentary rekindled public interest in space." },
      { level: "精神层", meaning: "从灰烬中吹燃希望的余烬", example: "Even the coldest ember can rekindle into flame." }
    ]
  },
  "renounce": {
    etymology: { roots: "re- (back) + nounce (announce)", origin: "Latin: renuntiare ← re- (back) + nuntiare (to announce, report)", mnemonic: "宣布(nuntiare→announce)放回/退回→宣布放弃" },
    cognates: [
      { word: "renunciation", meaning: "放弃声明" },
      { word: "announce", meaning: "宣布" },
      { word: "denounce", meaning: "谴责" }
    ],
    synonyms: [
      { word: "relinquish", nuance: "交出（正式）", formality: "formal" },
      { word: "abandon", nuance: "抛弃", formality: "neutral" },
      { word: "give up", nuance: "放弃，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "renounce + violence/war", example: "The group renounced violence." },
      { pattern: "renounce + citizenship", example: "He renounced his citizenship." },
      { pattern: "renounce + claim/throne", example: "The king renounced the throne." }
    ],
    layers: [
      { level: "物理层", meaning: "正式放弃财产或头衔", example: "She renounced her inheritance." },
      { level: "认知层", meaning: "公开声明放弃信念或立场", example: "The organization renounced its former ideology." },
      { level: "精神层", meaning: "以尊严放弃仇恨是最有力的抵抗", example: "To renounce hatred while standing firm in truth is the most powerful form of resistance." }
    ]
  },
  "reproach": {
    etymology: { roots: "re- (back) + proach (near)", origin: "Old French: reprochier ← Latin re- (back) + prope/propiare (near, to approach)", mnemonic: "走回到面前(proach→approach靠近)指责→责备" },
    cognates: [
      { word: "reproach (n.)", meaning: "责备" },
      { word: "approach", meaning: "靠近" },
      { word: "irreproachable", meaning: "无可指摘的" }
    ],
    synonyms: [
      { word: "rebuke", nuance: "斥责", formality: "formal" },
      { word: "blame", nuance: "责怪", formality: "neutral" },
      { word: "tell off", nuance: "训斥，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "reproach + for", example: "She reproached him for his carelessness." },
      { pattern: "beyond reproach", example: "Her conduct was beyond reproach." },
      { pattern: "self-reproach", example: "He was consumed by self-reproach." }
    ],
    layers: [
      { level: "物理层", meaning: "当面指出错误", example: "The teacher reproached the student for cheating." },
      { level: "认知层", meaning: "带有道德重量地批评", example: "The editorial reproached the government for its inaction." },
      { level: "精神层", meaning: "在责备他人前先审视自己", example: "Before we reproach others, we must first examine the shadows within our own hearts." }
    ]
  },
  "resent": {
    etymology: { roots: "re- (again/intensely) + sent (feel)", origin: "Latin: re- (again, intensely) + sentire (to feel)", mnemonic: "一遍又一遍地重新感受(sentire→sense感觉)伤害→怨恨" },
    cognates: [
      { word: "resentment", meaning: "怨恨" },
      { word: "sentiment", meaning: "情感" },
      { word: "consent", meaning: "同意（一起感受）" }
    ],
    synonyms: [
      { word: "begrudge", nuance: "嫉妒/不满", formality: "neutral" },
      { word: "be bitter about", nuance: "为…心怀苦涩", formality: "neutral" },
      { word: "hold a grudge", nuance: "怀恨在心，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "resent + someone for", example: "He resented her for the promotion." },
      { pattern: "deeply resent", example: "She deeply resented the unfair treatment." },
      { pattern: "resent + being told", example: "He resented being told what to do." }
    ],
    layers: [
      { level: "物理层", meaning: "因不公平对待而愤怒", example: "Workers resented the pay cut." },
      { level: "认知层", meaning: "反复回味伤害产生持久敌意", example: "She resented his success for years." },
      { level: "精神层", meaning: "怨恨是自我投毒", example: "To resent is to drink poison and wait for the other to die." }
    ]
  },
  "revere": {
    etymology: { roots: "re- (intensely) + vere (fear/awe)", origin: "Latin: revereri ← re- (intensely) + vereri (to fear, stand in awe of)", mnemonic: "深深地敬畏(vereri→awe敬畏)→崇敬" },
    cognates: [
      { word: "reverence", meaning: "崇敬" },
      { word: "reverend", meaning: "尊敬的（牧师头衔）" }
    ],
    synonyms: [
      { word: "venerate", nuance: "尊崇（宗教性）", formality: "formal" },
      { word: "admire", nuance: "钦佩", formality: "neutral" },
      { word: "look up to", nuance: "敬仰，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "revere + as", example: "He is revered as a national hero." },
      { pattern: "deeply revered", example: "The temple is deeply revered." },
      { pattern: "revere + for", example: "She is revered for her wisdom." }
    ],
    layers: [
      { level: "物理层", meaning: "在仪式中表达崇敬", example: "Pilgrims revere the ancient shrine." },
      { level: "认知层", meaning: "因品质或成就而深深敬仰", example: "Scientists revere Einstein for his contributions." },
      { level: "精神层", meaning: "社会所崇敬的反映其价值观", example: "Those whom society reveres reflect the values that define it." }
    ]
  },
  "revive": {
    etymology: { roots: "re- (again) + vive (live)", origin: "Latin: revivere ← re- (again) + vivere (to live)", mnemonic: "重新(re)活(vivere→vivid生动的)过来→复苏" },
    cognates: [
      { word: "revival", meaning: "复兴" },
      { word: "survive", meaning: "幸存（sur+vive）" },
      { word: "vivid", meaning: "生动的" }
    ],
    synonyms: [
      { word: "restore", nuance: "恢复", formality: "neutral" },
      { word: "resuscitate", nuance: "急救复苏", formality: "formal" },
      { word: "bring back", nuance: "带回，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "revive + interest/economy", example: "The policy revived the economy." },
      { pattern: "revive + tradition", example: "The festival revives ancient traditions." },
      { pattern: "revive + hopes", example: "The news revived their hopes." }
    ],
    layers: [
      { level: "物理层", meaning: "使失去意识的人苏醒", example: "The paramedics revived the drowning victim." },
      { level: "认知层", meaning: "使衰落的事物重新繁荣", example: "Investment revived the declining neighborhood." },
      { level: "精神层", meaning: "在至暗时刻后灵魂获得重生", example: "Spring arrives to revive the sleeping earth, as does the human spirit after its darkest hours." }
    ]
  },
  "saturate": {
    etymology: { roots: "satur- (full/sated) + -ate", origin: "Latin: saturare (to fill full, glut) ← satur (full, sated)", mnemonic: "使完全饱和(satur→满足/饱)→浸透" },
    cognates: [
      { word: "saturation", meaning: "饱和" },
      { word: "satisfy", meaning: "满足" },
      { word: "satiate", meaning: "使充分满足" }
    ],
    synonyms: [
      { word: "soak", nuance: "浸泡", formality: "neutral" },
      { word: "drench", nuance: "湿透", formality: "neutral" },
      { word: "flood", nuance: "大量充斥", formality: "neutral" }
    ],
    collocations: [
      { pattern: "saturate + market", example: "The market is saturated with similar products." },
      { pattern: "saturate + with color", example: "The sunset saturated the sky with gold." },
      { pattern: "fully saturated", example: "The soil is fully saturated after the rain." }
    ],
    layers: [
      { level: "物理层", meaning: "使完全浸透", example: "Rain saturated the ground." },
      { level: "认知层", meaning: "充斥到无法再吸收更多", example: "The news cycle saturated audiences with coverage." },
      { level: "精神层", meaning: "让美浸透日常的每一刻", example: "Let beauty saturate the everyday." }
    ]
  },
  "scrutinize": {
    etymology: { roots: "scrutin- (search/examine) + -ize", origin: "Latin: scrutari (to search carefully, rummage) ← scruta (rags, trash, old stuff)", mnemonic: "像翻旧货(scruta→废品)一样仔细翻查→审查" },
    cognates: [
      { word: "scrutiny", meaning: "审查" },
      { word: "inscrutable", meaning: "难以理解的" }
    ],
    synonyms: [
      { word: "examine", nuance: "检查", formality: "neutral" },
      { word: "inspect", nuance: "视察", formality: "formal" },
      { word: "go over with a fine-tooth comb", nuance: "细查，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "scrutinize + closely", example: "The auditors scrutinized the accounts closely." },
      { pattern: "scrutinize + every detail", example: "She scrutinized every detail of the contract." },
      { pattern: "under scrutiny", example: "The deal is under intense scrutiny." }
    ],
    layers: [
      { level: "物理层", meaning: "仔细检查外观或文件", example: "The guard scrutinized every passport." },
      { level: "认知层", meaning: "深入分析政策或数据", example: "Researchers scrutinized the methodology." },
      { level: "精神层", meaning: "自由社会的公民有义务审查权力", example: "Citizens have the duty to scrutinize the actions of those who govern." }
    ]
  },
  "seize": {
    etymology: { roots: "seize (grasp)", origin: "Old French: seisir (to take possession) ← Frankish *satjan (to set, put in place)", mnemonic: "猛然抓住并据为己有→夺取" },
    cognates: [
      { word: "seizure", meaning: "扣押；发作" }
    ],
    synonyms: [
      { word: "grab", nuance: "抓住", formality: "neutral" },
      { word: "capture", nuance: "捕获", formality: "neutral" },
      { word: "snatch", nuance: "夺走，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "seize + opportunity/moment", example: "She seized the opportunity to speak." },
      { pattern: "seize + power/control", example: "The rebels seized control of the capital." },
      { pattern: "seize + the day", example: "Carpe diem — seize the day!" }
    ],
    layers: [
      { level: "物理层", meaning: "用力抓住物体", example: "He seized the rope before it slipped away." },
      { level: "认知层", meaning: "抓住机会或夺取权力", example: "The opposition seized the moment to strike." },
      { level: "精神层", meaning: "抓住转瞬即逝的当下", example: "Seize the day, for time waits for no one." }
    ]
  },
  "sever": {
    etymology: { roots: "sever (separate)", origin: "Old French: sevrer ← Latin separare (to separate)", mnemonic: "彻底分离(separare→separate分开)→切断" },
    cognates: [
      { word: "severance", meaning: "切断；遣散费" },
      { word: "several", meaning: "几个（分开的）" },
      { word: "separate", meaning: "分开" }
    ],
    synonyms: [
      { word: "cut", nuance: "切", formality: "neutral" },
      { word: "detach", nuance: "拆开", formality: "neutral" },
      { word: "chop off", nuance: "砍断，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "sever + ties/relations", example: "The country severed diplomatic ties." },
      { pattern: "sever + connection", example: "The accident severed the power line." },
      { pattern: "sever + limb", example: "The blade severed the branch cleanly." }
    ],
    layers: [
      { level: "物理层", meaning: "物理切断", example: "The saw severed the metal beam." },
      { level: "认知层", meaning: "断绝关系或联系", example: "She severed all contact with the group." },
      { level: "精神层", meaning: "为了新生必须切断旧的纽带", example: "Some bonds must be severed so that new growth may begin." }
    ]
  },
  "simulate": {
    etymology: { roots: "simul- (similar/like) + -ate", origin: "Latin: simulare (to make like, imitate) ← similis (similar, like)", mnemonic: "使变得相似(similis→similar相似)→模拟" },
    cognates: [
      { word: "simulation", meaning: "模拟" },
      { word: "similar", meaning: "相似的" },
      { word: "simultaneous", meaning: "同时的" }
    ],
    synonyms: [
      { word: "imitate", nuance: "模仿", formality: "neutral" },
      { word: "replicate", nuance: "复制", formality: "formal" },
      { word: "fake", nuance: "假装，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "simulate + conditions", example: "The lab simulates zero-gravity conditions." },
      { pattern: "simulate + scenario", example: "The drill simulated an earthquake scenario." },
      { pattern: "computer-simulated", example: "Computer-simulated models predict weather." }
    ],
    layers: [
      { level: "物理层", meaning: "在受控环境中再现现象", example: "The wind tunnel simulates flight conditions." },
      { level: "认知层", meaning: "用模型预测系统行为", example: "The software simulates market fluctuations." },
      { level: "精神层", meaning: "通过数学透镜窥见现实的架构", example: "To simulate complex systems is to glimpse the architecture of reality." }
    ]
  },
  "soar": {
    etymology: { roots: "soar (fly high)", origin: "Old French: essorer (to fly up, dry in the air) ← Vulgar Latin *exaurare ← Latin ex- (up) + aura (air, breeze)", mnemonic: "在气流(aura→空气)中向上飞升→翱翔" },
    cognates: [
      { word: "soaring", meaning: "翱翔的；飙升的" }
    ],
    synonyms: [
      { word: "glide", nuance: "滑翔", formality: "neutral" },
      { word: "rise", nuance: "上升", formality: "neutral" },
      { word: "skyrocket", nuance: "飙升，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "soar + above/over", example: "The eagle soared above the canyon." },
      { pattern: "prices/stocks soar", example: "Oil prices soared overnight." },
      { pattern: "spirits soar", example: "Her spirits soared after the good news." }
    ],
    layers: [
      { level: "物理层", meaning: "鸟借气流高飞", example: "Hawks soar in wide circles." },
      { level: "认知层", meaning: "数值或情绪急剧攀升", example: "Demand soared during the holiday season." },
      { level: "精神层", meaning: "灵魂超越重力的自由", example: "The soul that soars knows no boundaries." }
    ]
  },
  "solicit": {
    etymology: { roots: "sol- (whole) + licit (stir/move)", origin: "Latin: sollicitare ← sollus (whole, entire) + citare (to set in motion, rouse)", mnemonic: "全身心(sollus→whole)地激发(citare→激动)恳求→请求" },
    cognates: [
      { word: "solicitation", meaning: "请求" },
      { word: "solicitor", meaning: "律师（英国）" },
      { word: "solicitous", meaning: "关怀的" }
    ],
    synonyms: [
      { word: "request", nuance: "请求", formality: "neutral" },
      { word: "petition", nuance: "正式请愿", formality: "formal" },
      { word: "ask for", nuance: "要求，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "solicit + advice/feedback", example: "The manager solicited feedback from the team." },
      { pattern: "solicit + donations", example: "The charity solicited donations door to door." },
      { pattern: "solicit + bids", example: "The city solicited bids for the construction project." }
    ],
    layers: [
      { level: "物理层", meaning: "上门征求或推销", example: "Volunteers solicited signatures on the street." },
      { level: "认知层", meaning: "正式征求意见或建议", example: "The board solicited expert opinions before deciding." },
      { level: "精神层", meaning: "恳切寻求智慧是智慧本身的起点", example: "To solicit the counsel of the wise is the first act of wisdom itself." }
    ]
  },
  "speculate": {
    etymology: { roots: "specul- (watch/observe) + -ate", origin: "Latin: speculari (to observe, watch from a height) ← specere (to look)", mnemonic: "从高处观望(specere→spectacle景象)→推测/思索" },
    cognates: [
      { word: "speculation", meaning: "推测；投机" },
      { word: "spectacle", meaning: "景象" },
      { word: "inspect", meaning: "检查" }
    ],
    synonyms: [
      { word: "conjecture", nuance: "推测（学术）", formality: "formal" },
      { word: "theorize", nuance: "构建理论", formality: "formal" },
      { word: "guess", nuance: "猜测，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "speculate + about/on", example: "Experts speculate about the cause." },
      { pattern: "speculate + in stocks", example: "He speculated in tech stocks." },
      { pattern: "wildly speculate", example: "The media wildly speculated about the verdict." }
    ],
    layers: [
      { level: "物理层", meaning: "在金融市场投机", example: "Day traders speculate on stock price movements." },
      { level: "认知层", meaning: "基于不完全信息推理", example: "Scientists speculate that the universe is expanding." },
      { level: "精神层", meaning: "大胆思索是自由心灵的特权", example: "To speculate boldly is the privilege of the free mind." }
    ]
  },
  "subdue": {
    etymology: { roots: "sub- (under) + due (lead)", origin: "Latin: subducere ← sub- (under) + ducere (to lead)", mnemonic: "引导到下方(ducere→duke公爵/领导者)使之臣服→制服" },
    cognates: [
      { word: "subdued", meaning: "克制的；柔和的" },
      { word: "conduct", meaning: "引导（con+duct）" },
      { word: "induce", meaning: "诱导（in+duce）" }
    ],
    synonyms: [
      { word: "suppress", nuance: "压制", formality: "neutral" },
      { word: "quell", nuance: "镇压", formality: "formal" },
      { word: "tame", nuance: "驯服", formality: "neutral" }
    ],
    collocations: [
      { pattern: "subdue + enemy/opponent", example: "The army subdued the rebellion." },
      { pattern: "subdue + emotions", example: "She subdued her anger with effort." },
      { pattern: "subdued + lighting/tone", example: "The restaurant had subdued lighting." }
    ],
    layers: [
      { level: "物理层", meaning: "用武力制服对手", example: "Police subdued the suspect without injury." },
      { level: "认知层", meaning: "控制住激烈的情绪", example: "He subdued his impatience during the meeting." },
      { level: "精神层", meaning: "驾驭自身激情是最伟大的征服", example: "To subdue one's own passions requires greater strength than to vanquish a thousand enemies." }
    ]
  },
  "succumb": {
    etymology: { roots: "suc- (under) + cumb (lie down)", origin: "Latin: succumbere ← sub- (under) + cumbere (to lie down)", mnemonic: "在重压之下(sub)躺倒(cumbere→incumbent任职者)→屈服" },
    cognates: [
      { word: "incumbent", meaning: "在任者（躺在职位上的人）" },
      { word: "recumbent", meaning: "斜躺的" }
    ],
    synonyms: [
      { word: "yield", nuance: "让步", formality: "neutral" },
      { word: "capitulate", nuance: "投降（正式）", formality: "formal" },
      { word: "give in", nuance: "认输，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "succumb + to temptation", example: "He succumbed to the temptation of easy money." },
      { pattern: "succumb + to pressure", example: "The government succumbed to public pressure." },
      { pattern: "succumb + to illness", example: "She succumbed to cancer at age 60." }
    ],
    layers: [
      { level: "物理层", meaning: "因疾病或伤害而死亡", example: "The patient succumbed to his injuries." },
      { level: "认知层", meaning: "在压力下放弃抵抗", example: "The company succumbed to competitive pressure." },
      { level: "精神层", meaning: "在绝望中躺倒而不是站起", example: "The brave do not succumb to despair but find within it the seeds of resilience." }
    ]
  },
  "supplant": {
    etymology: { roots: "sup- (from below) + plant (sole of foot)", origin: "Latin: supplantare ← sub- (from below) + planta (sole of the foot) — literally 'to trip up'", mnemonic: "从脚下(planta→脚底)绊倒→取代/排挤" },
    cognates: [
      { word: "plant", meaning: "种植；脚底" },
      { word: "transplant", meaning: "移植" }
    ],
    synonyms: [
      { word: "replace", nuance: "替换，通用", formality: "neutral" },
      { word: "supersede", nuance: "取而代之（正式）", formality: "formal" },
      { word: "oust", nuance: "赶走", formality: "neutral" }
    ],
    collocations: [
      { pattern: "supplant + predecessor", example: "The new technology supplanted the old." },
      { pattern: "supplant + with", example: "Coal was supplanted with natural gas." },
      { pattern: "gradually supplant", example: "E-books gradually supplanted print editions." }
    ],
    layers: [
      { level: "物理层", meaning: "新事物替代旧事物", example: "Smartphones supplanted traditional cameras." },
      { level: "认知层", meaning: "新理论取代旧范式", example: "Heliocentrism supplanted the geocentric model." },
      { level: "精神层", meaning: "每个时代以承诺与危险并存地取代上一个", example: "Each age supplants the last with both promise and peril." }
    ]
  },
  "surmount": {
    etymology: { roots: "sur- (over) + mount (climb)", origin: "French: surmonter ← sur- (over, above) + monter (to climb, mount)", mnemonic: "爬到(monter→mount攀登)上面(sur→over)→克服/超越" },
    cognates: [
      { word: "surmountable", meaning: "可克服的" },
      { word: "mount", meaning: "攀登；山" },
      { word: "mountain", meaning: "山脉" }
    ],
    synonyms: [
      { word: "overcome", nuance: "克服", formality: "neutral" },
      { word: "conquer", nuance: "征服", formality: "neutral" },
      { word: "get over", nuance: "克服，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "surmount + obstacle/challenge", example: "She surmounted every challenge." },
      { pattern: "surmount + difficulties", example: "The team surmounted numerous difficulties." },
      { pattern: "seemingly insurmountable", example: "The task seemed insurmountable." }
    ],
    layers: [
      { level: "物理层", meaning: "翻越物理障碍", example: "The climbers surmounted the final ridge." },
      { level: "认知层", meaning: "克服困难或挫折", example: "Through ingenuity, they surmounted the technical hurdle." },
      { level: "精神层", meaning: "墙的存在是为了让你证明决心", example: "Every wall can be surmounted by those who want it badly enough." }
    ]
  },
  "sway": {
    etymology: { roots: "sway (swing/oscillate)", origin: "Middle English: sweyen (to swing, move) ← Old Norse sveigja (to bend, swing)", mnemonic: "像树枝一样来回摆动(sveigja→弯曲/摆动)→摇摆/影响" },
    cognates: [
      { word: "sway (n.)", meaning: "摇摆；影响力" }
    ],
    synonyms: [
      { word: "influence", nuance: "影响", formality: "neutral" },
      { word: "swing", nuance: "摇摆", formality: "neutral" },
      { word: "win over", nuance: "说服，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "sway + opinion/voters", example: "The speech swayed public opinion." },
      { pattern: "sway + in the wind", example: "The trees swayed in the breeze." },
      { pattern: "hold sway", example: "Old traditions still hold sway." }
    ],
    layers: [
      { level: "物理层", meaning: "身体或物体来回摇摆", example: "The ship swayed on the waves." },
      { level: "认知层", meaning: "影响或改变他人看法", example: "Emotional appeals can sway a jury." },
      { level: "精神层", meaning: "摇摆而不折断是韧性的艺术", example: "To sway without breaking is the art of resilience." }
    ]
  },
  "tarnish": {
    etymology: { roots: "tarnish (make dull)", origin: "Old French: ternir/terniss- (to make dull, darken) ← Frankish *tarnjan (to conceal, darken)", mnemonic: "使变暗变黯淡(ternir→使失去光泽)→玷污" },
    cognates: [
      { word: "tarnish (n.)", meaning: "锈蚀；污点" }
    ],
    synonyms: [
      { word: "stain", nuance: "染污", formality: "neutral" },
      { word: "blemish", nuance: "瑕疵", formality: "neutral" },
      { word: "sully", nuance: "玷污（正式）", formality: "formal" }
    ],
    collocations: [
      { pattern: "tarnish + reputation/image", example: "The scandal tarnished his reputation." },
      { pattern: "tarnish + silver", example: "Silver tarnishes when exposed to air." },
      { pattern: "tarnished + legacy", example: "His legacy was tarnished by the cover-up." }
    ],
    layers: [
      { level: "物理层", meaning: "金属氧化失去光泽", example: "The copper roof tarnished to green over time." },
      { level: "认知层", meaning: "名誉受损", example: "One lie can tarnish years of trust." },
      { level: "精神层", meaning: "一旦失去光泽就难以恢复", example: "Guard your honor well, for once tarnished, it is not easily restored." }
    ]
  },
  "thrive": {
    etymology: { roots: "thrive (prosper/grasp)", origin: "Old Norse: þrífask (to thrive, grasp for oneself) ← þrífa (to grasp, seize)", mnemonic: "主动抓住(þrífa→grasp)环境中的养分→茁壮成长" },
    cognates: [
      { word: "thriving", meaning: "蓬勃发展的" }
    ],
    synonyms: [
      { word: "flourish", nuance: "繁荣", formality: "neutral" },
      { word: "prosper", nuance: "兴旺", formality: "neutral" },
      { word: "do well", nuance: "做得好，口语", formality: "informal" }
    ],
    collocations: [
      { pattern: "thrive + in/on", example: "The plant thrives in sunlight." },
      { pattern: "thrive + under pressure", example: "She thrives under pressure." },
      { pattern: "thrive + and grow", example: "The business thrived and grew rapidly." }
    ],
    layers: [
      { level: "物理层", meaning: "生物在适宜环境中旺盛生长", example: "Cacti thrive in arid conditions." },
      { level: "认知层", meaning: "在有利条件下蓬勃发展", example: "Innovation thrives in open cultures." },
      { level: "精神层", meaning: "在合适条件下任何种子都能长成参天大树", example: "Even the smallest seed can thrive and grow into a mighty tree that shelters generations." }
    ]
  },
  "topple": {
    etymology: { roots: "top + -ple (frequentative)", origin: "English: from top (summit) + -le (frequentative suffix)", mnemonic: "从顶部(top)摇晃倒下→推翻" },
    cognates: [
      { word: "top", meaning: "顶部" }
    ],
    synonyms: [
      { word: "overthrow", nuance: "推翻政权", formality: "formal" },
      { word: "bring down", nuance: "击倒", formality: "informal" },
      { word: "oust", nuance: "赶下台", formality: "neutral" }
    ],
    collocations: [
      { pattern: "topple + regime", example: "The uprising toppled the dictator." },
      { pattern: "topple + from power", example: "He was toppled from power." },
      { pattern: "topple over", example: "The statue toppled over." }
    ],
    layers: [
      { level: "物理层", meaning: "物体从高处倾倒", example: "The tower of blocks toppled." },
      { level: "认知层", meaning: "推翻权力结构", example: "The scandal toppled the government." },
      { level: "精神层", meaning: "最小的勇气行动可以推翻暴政之塔", example: "The smallest act of courage can topple the tallest tower of tyranny." }
    ]
  },
  "transmit": {
    etymology: { roots: "trans- (across) + mit (send)", origin: "Latin: transmittere ← trans- (across) + mittere (to send)", mnemonic: "跨越发送(mittere→missile)→传输" },
    cognates: [
      { word: "transmission", meaning: "传输" },
      { word: "emit", meaning: "释放" },
      { word: "submit", meaning: "提交" }
    ],
    synonyms: [
      { word: "broadcast", nuance: "广播", formality: "neutral" },
      { word: "relay", nuance: "转发", formality: "neutral" },
      { word: "pass along", nuance: "传递", formality: "informal" }
    ],
    collocations: [
      { pattern: "transmit + data", example: "The antenna transmits the signal." },
      { pattern: "transmit + disease", example: "Mosquitoes transmit malaria." },
      { pattern: "transmit + knowledge", example: "Teachers transmit knowledge." }
    ],
    layers: [
      { level: "物理层", meaning: "发送信号或数据", example: "The satellite transmits data to Earth." },
      { level: "认知层", meaning: "传播知识或信息", example: "Books transmit ideas across centuries." },
      { level: "精神层", meaning: "将智慧传递给后人是最真实的遗产", example: "The truest legacy is the wisdom we transmit to those who come after." }
    ]
  },
  "undermine": {
    etymology: { roots: "under + mine (dig)", origin: "English: under (beneath) + mine (to dig tunnels)", mnemonic: "在地下挖掘掏空根基→暗中破坏" },
    cognates: [
      { word: "mine", meaning: "矿；挖掘" }
    ],
    synonyms: [
      { word: "weaken", nuance: "削弱", formality: "neutral" },
      { word: "sabotage", nuance: "蓄意破坏", formality: "neutral" },
      { word: "eat away at", nuance: "侵蚀", formality: "informal" }
    ],
    collocations: [
      { pattern: "undermine + authority", example: "The leak undermined public confidence." },
      { pattern: "undermine + efforts", example: "Corruption undermines development." },
      { pattern: "systematically undermine", example: "The campaign systematically undermined trust." }
    ],
    layers: [
      { level: "物理层", meaning: "从地下挖空基础", example: "Erosion undermined the riverbank." },
      { level: "认知层", meaning: "暗中削弱权威或信任", example: "Misinformation undermines institutions." },
      { level: "精神层", meaning: "内部腐蚀比外部攻击更致命", example: "Complacency undermines democracy from within." }
    ]
  },
  "unleash": {
    etymology: { roots: "un- (release) + leash", origin: "English: un- (reverse) + leash (restraining strap)", mnemonic: "解开皮带释放→释放" },
    cognates: [
      { word: "leash", meaning: "皮带" }
    ],
    synonyms: [
      { word: "release", nuance: "释放", formality: "neutral" },
      { word: "let loose", nuance: "放开", formality: "informal" },
      { word: "set free", nuance: "解放", formality: "neutral" }
    ],
    collocations: [
      { pattern: "unleash + power", example: "The storm unleashed its fury." },
      { pattern: "unleash + potential", example: "Education unleashes potential." },
      { pattern: "unleash + upon", example: "They unleashed chaos." }
    ],
    layers: [
      { level: "物理层", meaning: "解开束缚释放", example: "The handler unleashed the hounds." },
      { level: "认知层", meaning: "激发潜力或启动", example: "New policy unleashed growth." },
      { level: "精神层", meaning: "释放不可控力量改变命运", example: "The atom, once unleashed, changed the fate of mankind." }
    ]
  },
  "uphold": {
    etymology: { roots: "up + hold", origin: "English: up (high) + hold (maintain)", mnemonic: "高举并持住→维护" },
    cognates: [
    ],
    synonyms: [
      { word: "maintain", nuance: "维持", formality: "neutral" },
      { word: "defend", nuance: "捍卫", formality: "neutral" },
      { word: "stand by", nuance: "坚持", formality: "informal" }
    ],
    collocations: [
      { pattern: "uphold + law", example: "Courts uphold the constitution." },
      { pattern: "uphold + values", example: "We uphold democratic values." },
      { pattern: "uphold + decision", example: "The appeals court upheld the ruling." }
    ],
    layers: [
      { level: "物理层", meaning: "支撑不让倒下", example: "Pillars uphold the roof." },
      { level: "认知层", meaning: "维护法律或制度", example: "Judges uphold the rule of law." },
      { level: "精神层", meaning: "像举旗帜一样捍卫信念", example: "To uphold the law is the first duty of the citizen." }
    ]
  },
  "usurp": {
    etymology: { roots: "usurp (seize for use)", origin: "Latin: usurpare (to seize for use without right)", mnemonic: "非法占用→篡夺" },
    cognates: [
      { word: "usurpation", meaning: "篡夺" },
      { word: "usurper", meaning: "篡位者" }
    ],
    synonyms: [
      { word: "seize", nuance: "夺取", formality: "neutral" },
      { word: "commandeer", nuance: "强征", formality: "formal" },
      { word: "grab", nuance: "抢夺", formality: "informal" }
    ],
    collocations: [
      { pattern: "usurp + power", example: "The general usurped the presidency." },
      { pattern: "usurp + authority", example: "The committee usurped authority." },
      { pattern: "usurp + role", example: "AI might usurp certain roles." }
    ],
    layers: [
      { level: "物理层", meaning: "武力夺取权位", example: "The duke usurped the throne." },
      { level: "认知层", meaning: "非法占据他人权限", example: "The department usurped functions." },
      { level: "精神层", meaning: "不义之权带来不安之心", example: "Power obtained illegitimately forever haunts the usurper." }
    ]
  },
  "validate": {
    etymology: { roots: "valid- (strong) + -ate", origin: "Latin: validare ← validus (strong) ← valere (to be strong)", mnemonic: "使有力(validus→valid)→验证" },
    cognates: [
      { word: "validation", meaning: "验证" },
      { word: "valid", meaning: "有效的" },
      { word: "valor", meaning: "英勇" }
    ],
    synonyms: [
      { word: "confirm", nuance: "确认", formality: "neutral" },
      { word: "verify", nuance: "核实", formality: "neutral" },
      { word: "back up", nuance: "支持", formality: "informal" }
    ],
    collocations: [
      { pattern: "validate + hypothesis", example: "The experiment validated the theory." },
      { pattern: "validate + data", example: "Please validate the input." },
      { pattern: "validate + feelings", example: "A therapist validates your feelings." }
    ],
    layers: [
      { level: "物理层", meaning: "确认有效", example: "The machine validated the ticket." },
      { level: "认知层", meaning: "用证据证实理论", example: "The study validated earlier findings." },
      { level: "精神层", meaning: "经证据锻造才配称真理", example: "Every theory must be validated by evidence." }
    ]
  },
  "vindicate": {
    etymology: { roots: "vindic- (claim/avenge) + -ate", origin: "Latin: vindicare (to claim, set free, avenge)", mnemonic: "伸张正义(vindicare)→平反" },
    cognates: [
      { word: "vindication", meaning: "平反" },
      { word: "vindictive", meaning: "报复性的" }
    ],
    synonyms: [
      { word: "justify", nuance: "证明合理", formality: "neutral" },
      { word: "exonerate", nuance: "洗清罪名", formality: "formal" },
      { word: "clear one's name", nuance: "正名", formality: "informal" }
    ],
    collocations: [
      { pattern: "vindicate + decision", example: "History vindicated her decision." },
      { pattern: "feel vindicated", example: "He felt vindicated by the results." },
      { pattern: "vindicate + rights", example: "The ruling vindicated their rights." }
    ],
    layers: [
      { level: "物理层", meaning: "证据洗清冤屈", example: "DNA evidence vindicated the wrongly convicted." },
      { level: "认知层", meaning: "证明之前判断正确", example: "The crash vindicated cautious investors." },
      { level: "精神层", meaning: "时间为坚持真理者平反", example: "Time shall vindicate those who stood for truth." }
    ]
  },
  "wane": {
    etymology: { roots: "wane (decrease)", origin: "Old English: wanian (to lessen)", mnemonic: "像月亮渐渐减少→衰退" },
    cognates: [
      { word: "wane (n.)", meaning: "衰退" },
      { word: "want", meaning: "缺乏（古义）" }
    ],
    synonyms: [
      { word: "decline", nuance: "下降", formality: "neutral" },
      { word: "ebb", nuance: "消退", formality: "neutral" },
      { word: "peter out", nuance: "渐消", formality: "informal" }
    ],
    collocations: [
      { pattern: "wane + in popularity", example: "The trend waned." },
      { pattern: "wax and wane", example: "Enthusiasm waxes and wanes." },
      { pattern: "on the wane", example: "The empire was on the wane." }
    ],
    layers: [
      { level: "物理层", meaning: "月亮亏缺", example: "The moon wanes after full." },
      { level: "认知层", meaning: "影响力减退", example: "Interest waned over time." },
      { level: "精神层", meaning: "一切荣耀终将消退如月之亏", example: "All glory wanes, as cloud-capped towers dissolve." }
    ]
  },
  "warrant": {
    etymology: { roots: "warrant (guarantee)", origin: "Old French: garant (guarantor) ← Frankish *warand", mnemonic: "提供担保(garant→guarantee)→保证/授权" },
    cognates: [
      { word: "warranty", meaning: "保修" },
      { word: "guarantee", meaning: "保证" }
    ],
    synonyms: [
      { word: "justify", nuance: "使合理", formality: "neutral" },
      { word: "authorize", nuance: "授权", formality: "formal" },
      { word: "call for", nuance: "需要", formality: "informal" }
    ],
    collocations: [
      { pattern: "warrant + investigation", example: "The issue warrants investigation." },
      { pattern: "warrant + action", example: "Evidence warrants action." },
      { pattern: "search warrant", example: "Police obtained a warrant." }
    ],
    layers: [
      { level: "物理层", meaning: "法律授权", example: "The judge issued a warrant." },
      { level: "认知层", meaning: "证据证明行动合理", example: "The data warrants a strategy change." },
      { level: "精神层", meaning: "权力只有被授权时才合法", example: "No authority is legitimate unless warranted by consent." }
    ]
  },
  "withstand": {
    etymology: { roots: "with (against) + stand", origin: "Old English: withstandan ← wið (against) + standan (to stand)", mnemonic: "面对(with→against)站稳→承受" },
    cognates: [
    ],
    synonyms: [
      { word: "endure", nuance: "忍受", formality: "neutral" },
      { word: "resist", nuance: "抵抗", formality: "neutral" },
      { word: "tough out", nuance: "硬撑", formality: "informal" }
    ],
    collocations: [
      { pattern: "withstand + pressure", example: "The structure withstands earthquakes." },
      { pattern: "withstand + scrutiny", example: "The theory withstands analysis." },
      { pattern: "withstand + test of time", example: "Great art withstands time." }
    ],
    layers: [
      { level: "物理层", meaning: "在冲击下不倒", example: "The dam withstood the flood." },
      { level: "认知层", meaning: "经受审视不动摇", example: "The argument withstands logic." },
      { level: "精神层", meaning: "逆境中站稳是品格的锻造", example: "Character forged in adversity withstands any tempest." }
    ]
  },
  "wither": {
    etymology: { roots: "wither (dry up)", origin: "Middle English: wideren (to dry up, shrivel)", mnemonic: "暴露风中干枯→枯萎" },
    cognates: [
      { word: "weather", meaning: "天气" }
    ],
    synonyms: [
      { word: "shrivel", nuance: "萎缩", formality: "neutral" },
      { word: "wilt", nuance: "枯萎", formality: "neutral" },
      { word: "dry up", nuance: "干枯", formality: "informal" }
    ],
    collocations: [
      { pattern: "wither + and die", example: "The plant withered and died." },
      { pattern: "wither + away", example: "Support withered away." },
      { pattern: "withering + criticism", example: "A withering critique." }
    ],
    layers: [
      { level: "物理层", meaning: "植物失水枯萎", example: "Flowers withered in the heat." },
      { level: "认知层", meaning: "力量逐渐消失", example: "His enthusiasm withered." },
      { level: "精神层", meaning: "凡必死之物枯萎但真理永存", example: "Mortal things wither, but truth endures." }
    ]
  },
  "wrangle": {
    etymology: { roots: "wrangle (dispute noisily)", origin: "Low German: wrangeln (to dispute)", mnemonic: "嘈杂地争论→争辩" },
    cognates: [
      { word: "wrangler", meaning: "牛仔；争论者" }
    ],
    synonyms: [
      { word: "quarrel", nuance: "吵架", formality: "neutral" },
      { word: "bicker", nuance: "争嘴", formality: "informal" },
      { word: "haggle", nuance: "讨价还价", formality: "neutral" }
    ],
    collocations: [
      { pattern: "wrangle + over", example: "They wrangled over terms." },
      { pattern: "wrangle + with", example: "She wrangled with bureaucracy." },
      { pattern: "political wrangling", example: "Wrangling delayed the vote." }
    ],
    layers: [
      { level: "物理层", meaning: "牛仔驯牛般混乱争斗", example: "Cowboys wrangle cattle." },
      { level: "认知层", meaning: "就条款激烈争论", example: "Lawmakers wrangled over the budget." },
      { level: "精神层", meaning: "不倾听的争吵淹没智慧", example: "Debate enriches; quarrel impoverishes." }
    ]
  },
  "yield": {
    etymology: { roots: "yield (pay/give)", origin: "Old English: gieldan (to pay, render)", mnemonic: "交出/付出→产出/让步" },
    cognates: [
      { word: "yield (n.)", meaning: "产量" },
      { word: "guild", meaning: "行会" }
    ],
    synonyms: [
      { word: "produce", nuance: "生产", formality: "neutral" },
      { word: "surrender", nuance: "投降", formality: "neutral" },
      { word: "give way", nuance: "让步", formality: "informal" }
    ],
    collocations: [
      { pattern: "yield + results", example: "The investment yielded high returns." },
      { pattern: "yield + to pressure", example: "He yielded to pressure." },
      { pattern: "yield + harvest", example: "The field yields two harvests." }
    ],
    layers: [
      { level: "物理层", meaning: "土地产出作物", example: "The farm yielded a record crop." },
      { level: "认知层", meaning: "让步或交出", example: "The company yielded to regulatory demands." },
      { level: "精神层", meaning: "经历严冬后大地交出最好的果实", example: "The earth yields its finest fruit after the harshest winter." }
    ]
  },
  "abate": {
    etymology: { roots: "a- (to) + bate (beat down)", origin: "Old French: abatre (to beat down)", mnemonic: "被打倒减弱→减少" },
    cognates: [
      { word: "abatement", meaning: "减弱" },
      { word: "batter", meaning: "猛击" }
    ],
    synonyms: [
      { word: "subside", nuance: "平息", formality: "neutral" },
      { word: "diminish", nuance: "减少", formality: "formal" },
      { word: "die down", nuance: "平息", formality: "informal" }
    ],
    collocations: [
      { pattern: "abate + storm", example: "The storm began to abate." },
      { pattern: "show no signs of abating", example: "Protests show no signs of abating." },
      { pattern: "abate + nuisance", example: "Measures to abate noise." }
    ],
    layers: [
      { level: "物理层", meaning: "风暴减弱", example: "The winds abated by evening." },
      { level: "认知层", meaning: "危机消退", example: "Anger abated after the apology." },
      { level: "精神层", meaning: "每场暴风都必须减弱", example: "Every tempest must abate." }
    ]
  },
  "abstain": {
    etymology: { roots: "abs- (away) + tain (hold)", origin: "Latin: abstinere ← abs- (away) + tenere (to hold)", mnemonic: "远离不持有→戒除" },
    cognates: [
      { word: "abstinence", meaning: "节制" },
      { word: "abstention", meaning: "弃权" },
      { word: "contain", meaning: "包含" }
    ],
    synonyms: [
      { word: "refrain", nuance: "克制", formality: "neutral" },
      { word: "forgo", nuance: "放弃", formality: "formal" },
      { word: "pass on", nuance: "不参与", formality: "informal" }
    ],
    collocations: [
      { pattern: "abstain + from", example: "She abstained from voting." },
      { pattern: "abstain + from alcohol", example: "He abstained from alcohol." },
      { pattern: "choose to abstain", example: "Several members abstained." }
    ],
    layers: [
      { level: "物理层", meaning: "不摄入某物", example: "He abstained from sugar." },
      { level: "认知层", meaning: "在表决中弃权", example: "Three countries abstained." },
      { level: "精神层", meaning: "在诱惑前主动不取是微妙的力量", example: "To abstain when excess beckons requires subtle strength." }
    ]
  },
  "adorn": {
    etymology: { roots: "ad- (to) + orn (equip)", origin: "Latin: adornare ← ad- + ornare (to equip, decorate)", mnemonic: "为之装饰(ornare→ornament)→美化" },
    cognates: [
      { word: "adornment", meaning: "装饰" },
      { word: "ornament", meaning: "装饰品" },
      { word: "ornate", meaning: "华丽的" }
    ],
    synonyms: [
      { word: "decorate", nuance: "装饰", formality: "neutral" },
      { word: "embellish", nuance: "点缀", formality: "neutral" },
      { word: "dress up", nuance: "打扮", formality: "informal" }
    ],
    collocations: [
      { pattern: "adorn + with", example: "The hall was adorned with flowers." },
      { pattern: "adorn + walls", example: "Paintings adorn the walls." },
      { pattern: "beautifully adorned", example: "A beautifully adorned manuscript." }
    ],
    layers: [
      { level: "物理层", meaning: "用饰物美化", example: "She adorned her hair with ribbons." },
      { level: "认知层", meaning: "用修辞点缀文字", example: "The speech was adorned with metaphors." },
      { level: "精神层", meaning: "我们选择装点什么揭示内心诗意", example: "What we adorn reveals the poetry of the human heart." }
    ]
  },
  "atone": {
    etymology: { roots: "at + one", origin: "English: at + one (to become one, reconcile)", mnemonic: "使成为一体(at one)→赎罪/和解" },
    cognates: [
      { word: "atonement", meaning: "赎罪" }
    ],
    synonyms: [
      { word: "repent", nuance: "忏悔", formality: "formal" },
      { word: "make amends", nuance: "弥补", formality: "neutral" },
      { word: "make it up to", nuance: "补偿", formality: "informal" }
    ],
    collocations: [
      { pattern: "atone + for", example: "He atoned for his mistakes." },
      { pattern: "atone + sins", example: "Atoning for sins." },
      { pattern: "seek to atone", example: "She sought to atone." }
    ],
    layers: [
      { level: "物理层", meaning: "通过行动补偿过错", example: "He worked to atone for the harm." },
      { level: "认知层", meaning: "真诚承认错误", example: "Repentance is the first step to atone." },
      { level: "精神层", meaning: "赎罪是修复断裂使分离重归一体", example: "To atone is to commit to a better future." }
    ]
  },
  "besiege": {
    etymology: { roots: "be- (around) + siege (sit)", origin: "Old French: assieger ← ad- + sedere (to sit)", mnemonic: "围坐(siege→sit)周围→围攻" },
    cognates: [
      { word: "siege", meaning: "围攻" },
      { word: "sedentary", meaning: "久坐的" }
    ],
    synonyms: [
      { word: "surround", nuance: "包围", formality: "neutral" },
      { word: "blockade", nuance: "封锁", formality: "formal" },
      { word: "mob", nuance: "围住", formality: "informal" }
    ],
    collocations: [
      { pattern: "besiege + city", example: "The army besieged the fortress." },
      { pattern: "besieged by requests", example: "Besieged by interview requests." },
      { pattern: "besiege + with questions", example: "Reporters besieged the spokesperson." }
    ],
    layers: [
      { level: "物理层", meaning: "军事围城", example: "Crusaders besieged the city for months." },
      { level: "认知层", meaning: "被问题包围", example: "The help desk was besieged." },
      { level: "精神层", meaning: "被怀疑围攻需要信念来解放", example: "The mind besieged by doubt needs courage." }
    ]
  },
  "brandish": {
    etymology: { roots: "brand (sword/fire) + -ish", origin: "Old French: brandir ← brand (sword blade)", mnemonic: "挥舞火焰之剑(brand)→炫耀" },
    cognates: [
      { word: "brand", meaning: "品牌（原义：烙印）" }
    ],
    synonyms: [
      { word: "wave", nuance: "挥动", formality: "neutral" },
      { word: "flourish", nuance: "炫示", formality: "neutral" },
      { word: "flash", nuance: "亮出", formality: "informal" }
    ],
    collocations: [
      { pattern: "brandish + weapon", example: "He brandished a knife." },
      { pattern: "brandish + credentials", example: "She brandished her PhD." },
      { pattern: "brandish + threat", example: "Brandished nuclear threats." }
    ],
    layers: [
      { level: "物理层", meaning: "威胁性挥舞武器", example: "The robber brandished a gun." },
      { level: "认知层", meaning: "炫耀性展示资格", example: "He brandished statistics." },
      { level: "精神层", meaning: "恐惧中挥舞武器者往往伤己", example: "Those who brandish weapons in fear often cut themselves." }
    ]
  },
  "calibrate": {
    etymology: { roots: "calibr- (standard) + -ate", origin: "Arabic: qālib (mold) → French calibre → English calibrate", mnemonic: "按标准模具(qālib→caliber)调准→校准" },
    cognates: [
      { word: "calibration", meaning: "校准" },
      { word: "caliber", meaning: "口径；才干" }
    ],
    synonyms: [
      { word: "adjust", nuance: "调整", formality: "neutral" },
      { word: "fine-tune", nuance: "微调", formality: "neutral" },
      { word: "tweak", nuance: "微调", formality: "informal" }
    ],
    collocations: [
      { pattern: "calibrate + instrument", example: "Calibrated the scale." },
      { pattern: "calibrate + expectations", example: "Calibrate our expectations." },
      { pattern: "carefully calibrated", example: "A carefully calibrated response." }
    ],
    layers: [
      { level: "物理层", meaning: "使仪器与标准对齐", example: "The thermometer must be calibrated." },
      { level: "认知层", meaning: "精确调整策略", example: "The message was carefully calibrated." },
      { level: "精神层", meaning: "以同等严谨校准仪器和心智", example: "We must calibrate instruments and minds with equal rigor." }
    ]
  },
  "clamor": {
    etymology: { roots: "clamor (shout)", origin: "Latin: clamor ← clamare (to cry out)", mnemonic: "众人齐声呼喊(clamare→claim)→喧嚷" },
    cognates: [
      { word: "claim", meaning: "声称" },
      { word: "exclaim", meaning: "惊呼" }
    ],
    synonyms: [
      { word: "demand", nuance: "要求", formality: "neutral" },
      { word: "outcry", nuance: "抗议", formality: "neutral" },
      { word: "kick up a fuss", nuance: "大吵", formality: "informal" }
    ],
    collocations: [
      { pattern: "clamor + for", example: "Citizens clamored for reform." },
      { pattern: "public clamor", example: "The public clamor grew." },
      { pattern: "clamor + to be heard", example: "Voices clamored." }
    ],
    layers: [
      { level: "物理层", meaning: "发出嘈杂声响", example: "The marketplace clamored." },
      { level: "认知层", meaning: "公众强烈要求", example: "Voters clamored for tax cuts." },
      { level: "精神层", meaning: "大众为正义高呼时明智者倾听", example: "When the masses clamor for justice, wise rulers listen." }
    ]
  },
  "cling": {
    etymology: { roots: "cling (stick/shrink)", origin: "Old English: clingan (to stick, adhere, shrink)", mnemonic: "因恐惧收缩紧贴→紧抓不放" },
    cognates: [
    ],
    synonyms: [
      { word: "hold on", nuance: "抓住", formality: "neutral" },
      { word: "adhere", nuance: "粘附", formality: "formal" },
      { word: "hang on", nuance: "紧抓", formality: "informal" }
    ],
    collocations: [
      { pattern: "cling + to", example: "She clung to hope." },
      { pattern: "cling + tightly", example: "The child clung to its mother." },
      { pattern: "cling + to the past", example: "He clings to old methods." }
    ],
    layers: [
      { level: "物理层", meaning: "身体紧贴", example: "Wet clothes clung to her skin." },
      { level: "认知层", meaning: "执着于旧事物", example: "Some managers cling to old styles." },
      { level: "精神层", meaning: "紧握熟悉会错过未知的馈赠", example: "Those who cling too tightly miss the gifts of the unknown." }
    ]
  },
  "coincide": {
    etymology: { roots: "co- (together) + incide (fall upon)", origin: "Latin: coincidere ← co- + incidere ← in- + cadere (to fall)", mnemonic: "一起落在同一处→巧合" },
    cognates: [
      { word: "coincidence", meaning: "巧合" },
      { word: "incident", meaning: "事件" },
      { word: "accident", meaning: "意外" }
    ],
    synonyms: [
      { word: "overlap", nuance: "重叠", formality: "neutral" },
      { word: "correspond", nuance: "对应", formality: "formal" },
      { word: "line up", nuance: "吻合", formality: "informal" }
    ],
    collocations: [
      { pattern: "coincide + with", example: "The meeting coincides with my flight." },
      { pattern: "happen to coincide", example: "Events happened to coincide." },
      { pattern: "views coincide", example: "Our views coincide." }
    ],
    layers: [
      { level: "物理层", meaning: "两事件同时发生", example: "The eclipse coincided with the solstice." },
      { level: "认知层", meaning: "观点一致", example: "Findings coincide with predictions." },
      { level: "精神层", meaning: "准备与机会相遇就是运气", example: "When preparation meets opportunity, the two coincide in what the world calls luck." }
    ]
  },
  "condone": {
    etymology: { roots: "con- (completely) + done (give/forgive)", origin: "Latin: condonare ← con- + donare (to forgive)", mnemonic: "完全赦免(donare→donate)→纵容" },
    cognates: [
      { word: "donate", meaning: "捐赠" },
      { word: "pardon", meaning: "赦免" }
    ],
    synonyms: [
      { word: "tolerate", nuance: "容忍", formality: "neutral" },
      { word: "overlook", nuance: "忽视", formality: "neutral" },
      { word: "turn a blind eye", nuance: "视而不见", formality: "informal" }
    ],
    collocations: [
      { pattern: "condone + violence", example: "We do not condone violence." },
      { pattern: "refuse to condone", example: "She refused to condone it." },
      { pattern: "tacitly condone", example: "Silence tacitly condones abuse." }
    ],
    layers: [
      { level: "物理层", meaning: "默许不良行为", example: "The school does not condone bullying." },
      { level: "认知层", meaning: "通过不作为隐性赞同", example: "Ignoring fraud condones it." },
      { level: "精神层", meaning: "沉默就是纵容", example: "To say nothing in the face of injustice is to condone it." }
    ]
  },
  "conjure": {
    etymology: { roots: "con- (together) + jure (swear)", origin: "Latin: conjurare ← con- + jurare (to swear)", mnemonic: "共同宣誓施咒→变魔术" },
    cognates: [
      { word: "conjurer", meaning: "魔术师" },
      { word: "jury", meaning: "陪审团" },
      { word: "perjure", meaning: "做伪证" }
    ],
    synonyms: [
      { word: "summon", nuance: "召唤", formality: "neutral" },
      { word: "evoke", nuance: "唤起", formality: "formal" },
      { word: "magic up", nuance: "变出", formality: "informal" }
    ],
    collocations: [
      { pattern: "conjure + image", example: "The name conjures paradise." },
      { pattern: "conjure + from nothing", example: "She conjured a meal." },
      { pattern: "conjure up", example: "Music conjured old memories." }
    ],
    layers: [
      { level: "物理层", meaning: "表演魔术", example: "The magician conjured a rabbit." },
      { level: "认知层", meaning: "唤起记忆或想象", example: "The smell conjured childhood." },
      { level: "精神层", meaning: "用语言之力从虚无召唤世界", example: "The poet conjures worlds from words alone." }
    ]
  },
  "contend": {
    etymology: { roots: "con- (together) + tend (stretch)", origin: "Latin: contendere ← con- + tendere (to stretch)", mnemonic: "一起拉紧用力→竞争" },
    cognates: [
      { word: "contention", meaning: "争论" },
      { word: "contender", meaning: "竞争者" },
      { word: "tension", meaning: "紧张" }
    ],
    synonyms: [
      { word: "compete", nuance: "竞争", formality: "neutral" },
      { word: "argue", nuance: "主张", formality: "neutral" },
      { word: "vie", nuance: "争夺", formality: "formal" }
    ],
    collocations: [
      { pattern: "contend + with", example: "She contended with obstacles." },
      { pattern: "contend + for", example: "Five teams contend for the title." },
      { pattern: "contend + that", example: "He contends the policy is flawed." }
    ],
    layers: [
      { level: "物理层", meaning: "竞技角力", example: "Wrestlers contended for gold." },
      { level: "认知层", meaning: "提出论点辩论", example: "Critics contend the study is flawed." },
      { level: "精神层", meaning: "在竞技场中与尘土和汗水搏斗", example: "The credit belongs to those who contend in the arena." }
    ]
  },
  "decree": {
    etymology: { roots: "de- (fully) + cree (decide)", origin: "Latin: decernere ← de- + cernere (to decide)", mnemonic: "彻底裁定(cernere→discern)→颁布" },
    cognates: [
      { word: "decree (n.)", meaning: "法令" },
      { word: "discern", meaning: "辨别" }
    ],
    synonyms: [
      { word: "order", nuance: "命令", formality: "neutral" },
      { word: "proclaim", nuance: "宣布", formality: "formal" },
      { word: "rule", nuance: "裁定", formality: "neutral" }
    ],
    collocations: [
      { pattern: "decree + that", example: "The king decreed taxes be raised." },
      { pattern: "by decree", example: "Changed by decree." },
      { pattern: "decree + law", example: "Decreed emergency measures." }
    ],
    layers: [
      { level: "物理层", meaning: "颁布法律命令", example: "The emperor decreed a celebration." },
      { level: "认知层", meaning: "以权威做最终决定", example: "The court decreed equal division." },
      { level: "精神层", meaning: "自然法令变化是唯一的永恒", example: "Nature decrees that all things must change." }
    ]
  },
  "disperse": {
    etymology: { roots: "dis- (apart) + perse (scatter)", origin: "Latin: dispergere ← dis- + spargere (to scatter)", mnemonic: "四面八方撒播(spargere→sparse)→分散" },
    cognates: [
      { word: "dispersal", meaning: "散布" },
      { word: "sparse", meaning: "稀疏的" }
    ],
    synonyms: [
      { word: "scatter", nuance: "四散", formality: "neutral" },
      { word: "disseminate", nuance: "传播", formality: "formal" },
      { word: "break up", nuance: "散开", formality: "informal" }
    ],
    collocations: [
      { pattern: "disperse + crowd", example: "Police dispersed the crowd." },
      { pattern: "disperse + seeds", example: "Wind disperses seeds." },
      { pattern: "disperse + throughout", example: "Population dispersed throughout." }
    ],
    layers: [
      { level: "物理层", meaning: "人群分散", example: "Tear gas dispersed protesters." },
      { level: "认知层", meaning: "传播思想", example: "Internet disperses knowledge." },
      { level: "精神层", meaning: "善行如种子远播超越起源", example: "Good deeds disperse far beyond their origin." }
    ]
  },
  "distort": {
    etymology: { roots: "dis- (apart) + tort (twist)", origin: "Latin: distorquere ← dis- + torquere (to twist)", mnemonic: "扭偏原状(torquere→torque)→扭曲" },
    cognates: [
      { word: "distortion", meaning: "扭曲" },
      { word: "torture", meaning: "折磨" },
      { word: "contort", meaning: "扭曲" }
    ],
    synonyms: [
      { word: "twist", nuance: "歪曲", formality: "neutral" },
      { word: "misrepresent", nuance: "虚假陈述", formality: "formal" },
      { word: "spin", nuance: "编说辞", formality: "informal" }
    ],
    collocations: [
      { pattern: "distort + truth", example: "The article distorted facts." },
      { pattern: "distort + image", example: "The lens distorts." },
      { pattern: "grossly distort", example: "Grossly distorts reality." }
    ],
    layers: [
      { level: "物理层", meaning: "使形状变形", example: "Heat distorts metal." },
      { level: "认知层", meaning: "歪曲事实", example: "Propaganda distorts perception." },
      { level: "精神层", meaning: "政治语言扭曲真相", example: "Political language is designed to distort the truth." }
    ]
  },
  "emancipate": {
    etymology: { roots: "e- (out) + mancip (hand/ownership) + -ate", origin: "Latin: emancipare ← e- + mancipium (slave) ← manus (hand) + capere (take)", mnemonic: "从他人手中取出→解放" },
    cognates: [
      { word: "emancipation", meaning: "解放" },
      { word: "manuscript", meaning: "手稿" },
      { word: "manipulate", meaning: "操控" }
    ],
    synonyms: [
      { word: "liberate", nuance: "解放", formality: "formal" },
      { word: "free", nuance: "释放", formality: "neutral" },
      { word: "set free", nuance: "放走", formality: "informal" }
    ],
    collocations: [
      { pattern: "emancipate + slaves", example: "Lincoln emancipated the slaves." },
      { pattern: "emancipate + from", example: "Education emancipates the mind." },
      { pattern: "emancipated + minor", example: "An emancipated minor." }
    ],
    layers: [
      { level: "物理层", meaning: "从奴役中解放", example: "The proclamation emancipated millions." },
      { level: "认知层", meaning: "从偏见中解放", example: "Critical thinking emancipates the mind." },
      { level: "精神层", meaning: "归还人类尊严的与生俱来的权利", example: "To emancipate is to restore human dignity." }
    ]
  },
  "embody": {
    etymology: { roots: "em- (in) + body", origin: "English: em- (put into) + body", mnemonic: "使进入身体化为实体→体现" },
    cognates: [
      { word: "embodiment", meaning: "化身" },
      { word: "body", meaning: "身体" }
    ],
    synonyms: [
      { word: "represent", nuance: "代表", formality: "neutral" },
      { word: "personify", nuance: "拟人化", formality: "formal" },
      { word: "stand for", nuance: "代表", formality: "informal" }
    ],
    collocations: [
      { pattern: "embody + values", example: "The constitution embodies ideals." },
      { pattern: "embody + spirit", example: "She embodies perseverance." },
      { pattern: "embody + change", example: "Be the change — embody it." }
    ],
    layers: [
      { level: "物理层", meaning: "以实体呈现", example: "The sculpture embodies grace." },
      { level: "认知层", meaning: "完美代表某种品质", example: "The design embodies simplicity." },
      { level: "精神层", meaning: "你整个人就是价值观的化身", example: "The greatest leaders embody their values." }
    ]
  },
  "enrich": {
    etymology: { roots: "en- (make) + rich", origin: "French: enrichir ← en- + riche (rich)", mnemonic: "使变得富有→丰富" },
    cognates: [
      { word: "enrichment", meaning: "丰富" },
      { word: "rich", meaning: "富有的" }
    ],
    synonyms: [
      { word: "enhance", nuance: "增强", formality: "neutral" },
      { word: "augment", nuance: "增加", formality: "formal" },
      { word: "add to", nuance: "增添", formality: "informal" }
    ],
    collocations: [
      { pattern: "enrich + experience", example: "Travel enriches the mind." },
      { pattern: "enrich + soil", example: "Compost enriches soil." },
      { pattern: "enrich + uranium", example: "The facility enriches uranium." }
    ],
    layers: [
      { level: "物理层", meaning: "增加营养含量", example: "Cereal enriched with vitamins." },
      { level: "认知层", meaning: "使知识更丰富", example: "Reading enriches vocabulary." },
      { level: "精神层", meaning: "每个新想法丰富理解的火焰", example: "Every new idea enriches the flame of understanding." }
    ]
  },
  "exempt": {
    etymology: { roots: "ex- (out) + empt (take)", origin: "Latin: eximere ← ex- + emere (to take)", mnemonic: "从中取出→免除" },
    cognates: [
      { word: "exemption", meaning: "免除" },
      { word: "example", meaning: "例子" },
      { word: "redeem", meaning: "赎回" }
    ],
    synonyms: [
      { word: "excuse", nuance: "免除", formality: "neutral" },
      { word: "waive", nuance: "放弃要求", formality: "formal" },
      { word: "let off", nuance: "放过", formality: "informal" }
    ],
    collocations: [
      { pattern: "exempt + from", example: "Charities are exempt from taxes." },
      { pattern: "tax-exempt", example: "A tax-exempt organization." },
      { pattern: "exempt + from duty", example: "Diplomats are exempt." }
    ],
    layers: [
      { level: "物理层", meaning: "免除义务或费用", example: "Students are exempt from the fee." },
      { level: "认知层", meaning: "排除在规则之外", example: "The agreement exempts small businesses." },
      { level: "精神层", meaning: "没有人应被免除正义的要求", example: "No person should be exempt from the demands of justice." }
    ]
  },
  "exacerbate": {
    etymology: { roots: "ex- (thoroughly) + acerb (bitter)", origin: "Latin: exacerbare ← ex- + acerbus (bitter, harsh)", mnemonic: "使更加苦涩(acerbus→acerbic)→加剧" },
    cognates: [
      { word: "exacerbation", meaning: "加剧" },
      { word: "acerbic", meaning: "尖刻的" }
    ],
    synonyms: [
      { word: "worsen", nuance: "恶化", formality: "neutral" },
      { word: "aggravate", nuance: "加重", formality: "neutral" },
      { word: "make worse", nuance: "使更糟", formality: "informal" }
    ],
    collocations: [
      { pattern: "exacerbate + problem", example: "Drought exacerbated the crisis." },
      { pattern: "exacerbate + tensions", example: "The speech exacerbated tensions." },
      { pattern: "further exacerbate", example: "Delays further exacerbated costs." }
    ],
    layers: [
      { level: "物理层", meaning: "使病情加重", example: "Pollution exacerbates illness." },
      { level: "认知层", meaning: "使矛盾升级", example: "Misinformation exacerbates divisions." },
      { level: "精神层", meaning: "不加控制的情绪如伤口撒盐", example: "Unchecked emotion exacerbates problems." }
    ]
  },
  "fluctuate": {
    etymology: { roots: "fluct- (wave) + -ate", origin: "Latin: fluctuare ← fluctus (wave) ← fluere (to flow)", mnemonic: "像波浪(fluctus→flux)起伏→波动" },
    cognates: [
      { word: "fluctuation", meaning: "波动" },
      { word: "flux", meaning: "流动" },
      { word: "fluent", meaning: "流利的" }
    ],
    synonyms: [
      { word: "vary", nuance: "变化", formality: "neutral" },
      { word: "oscillate", nuance: "振荡", formality: "formal" },
      { word: "go up and down", nuance: "上下", formality: "informal" }
    ],
    collocations: [
      { pattern: "fluctuate + between", example: "Temperatures fluctuate 0-10°." },
      { pattern: "fluctuate + wildly", example: "Prices fluctuated wildly." },
      { pattern: "fluctuate + over time", example: "Demand fluctuates yearly." }
    ],
    layers: [
      { level: "物理层", meaning: "数值上下波动", example: "Voltage fluctuates with load." },
      { level: "认知层", meaning: "情绪或市场起伏", example: "Opinion fluctuates with events." },
      { level: "精神层", meaning: "智者在波动中学会航行", example: "The wise navigate as conditions fluctuate." }
    ]
  },
  "hurl": {
    etymology: { roots: "hurl (throw violently)", origin: "Middle English: hurlen (to throw with force)", mnemonic: "猛力投掷→猛投" },
    cognates: [
    ],
    synonyms: [
      { word: "throw", nuance: "扔", formality: "neutral" },
      { word: "fling", nuance: "猛抛", formality: "neutral" },
      { word: "chuck", nuance: "随手扔", formality: "informal" }
    ],
    collocations: [
      { pattern: "hurl + insults", example: "The mob hurled insults." },
      { pattern: "hurl + into", example: "He hurled himself into the project." },
      { pattern: "hurl + stones", example: "Protesters hurled stones." }
    ],
    layers: [
      { level: "物理层", meaning: "用力投掷", example: "She hurled the javelin." },
      { level: "认知层", meaning: "猛烈抛出攻击", example: "Critics hurled accusations." },
      { level: "精神层", meaning: "有时须把自己猛掷入虚空才发现翅膀", example: "One must sometimes hurl oneself into the void to discover wings." }
    ]
  },
  "infringe": {
    etymology: { roots: "in- (in) + fringe (break)", origin: "Latin: infringere ← in- + frangere (to break)", mnemonic: "侵入并打碎(frangere→fracture)→侵犯" },
    cognates: [
      { word: "infringement", meaning: "侵犯" },
      { word: "fracture", meaning: "骨折" },
      { word: "fragment", meaning: "碎片" }
    ],
    synonyms: [
      { word: "violate", nuance: "违反", formality: "formal" },
      { word: "breach", nuance: "违约", formality: "neutral" },
      { word: "trespass on", nuance: "侵入", formality: "informal" }
    ],
    collocations: [
      { pattern: "infringe + upon rights", example: "The law infringes privacy." },
      { pattern: "infringe + patent", example: "The product infringes our patent." },
      { pattern: "infringe + freedom", example: "Censorship infringes freedom." }
    ],
    layers: [
      { level: "物理层", meaning: "侵入领地", example: "The fence infringes property." },
      { level: "认知层", meaning: "违反法律或知识产权", example: "The app infringes patents." },
      { level: "精神层", meaning: "渐进式侵蚀自由根基", example: "Infringing sacred rights undermines democracy." }
    ]
  },
  "loom": {
    etymology: { roots: "loom (appear dimly)", origin: "Low German: lōmen (to move slowly)", mnemonic: "巨大模糊形体在雾中显现→逼近" },
    cognates: [
      { word: "looming", meaning: "迫在眉睫的" }
    ],
    synonyms: [
      { word: "approach", nuance: "靠近", formality: "neutral" },
      { word: "impend", nuance: "迫近", formality: "formal" },
      { word: "hang over", nuance: "笼罩", formality: "informal" }
    ],
    collocations: [
      { pattern: "loom + large", example: "The deadline looms large." },
      { pattern: "loom + ahead", example: "Challenges loom ahead." },
      { pattern: "loom + over", example: "The mountain loomed over." }
    ],
    layers: [
      { level: "物理层", meaning: "巨大形体隐约出现", example: "The ship loomed from fog." },
      { level: "认知层", meaning: "威胁迫近", example: "Economic crisis looms." },
      { level: "精神层", meaning: "未来像未知海洋逼近", example: "The future looms — fearsome to the timid, thrilling to the brave." }
    ]
  },
  "pertain": {
    etymology: { roots: "per- (through) + tain (hold)", origin: "Latin: pertinere ← per- + tenere (to hold)", mnemonic: "贯穿持有关联→属于/关于" },
    cognates: [
      { word: "pertinent", meaning: "相关的" },
      { word: "retain", meaning: "保持" },
      { word: "contain", meaning: "包含" }
    ],
    synonyms: [
      { word: "relate", nuance: "相关", formality: "neutral" },
      { word: "concern", nuance: "涉及", formality: "neutral" },
      { word: "have to do with", nuance: "与…有关", formality: "informal" }
    ],
    collocations: [
      { pattern: "pertain + to", example: "Rules pertaining to safety." },
      { pattern: "information pertaining", example: "Information pertaining to the case." },
      { pattern: "as it pertains to", example: "As it pertains to our topic." }
    ],
    layers: [
      { level: "物理层", meaning: "属于或归属", example: "Documents pertain to the 2020 audit." },
      { level: "认知层", meaning: "与某主题相关", example: "The chapter pertains to biology." },
      { level: "精神层", meaning: "关于人类的知识都丰富自我认知", example: "Knowledge pertaining to the human condition enriches understanding." }
    ]
  },
  "placate": {
    etymology: { roots: "plac- (calm) + -ate", origin: "Latin: placare (to calm, appease)", mnemonic: "使平静(placare→placid)→安抚" },
    cognates: [
      { word: "placid", meaning: "平静的" },
      { word: "implacable", meaning: "不可安抚的" }
    ],
    synonyms: [
      { word: "appease", nuance: "安抚", formality: "neutral" },
      { word: "pacify", nuance: "使平静", formality: "formal" },
      { word: "calm down", nuance: "使冷静", formality: "informal" }
    ],
    collocations: [
      { pattern: "placate + critics", example: "The concession was to placate critics." },
      { pattern: "attempt to placate", example: "Attempted to placate the customer." },
      { pattern: "fail to placate", example: "The apology failed to placate." }
    ],
    layers: [
      { level: "物理层", meaning: "用行动安抚", example: "Gifts to placate the crowd." },
      { level: "认知层", meaning: "用让步缓解冲突", example: "Policy change to placate stakeholders." },
      { level: "精神层", meaning: "仅凭承诺无法安抚受苦者", example: "One cannot placate the oppressed with promises alone." }
    ]
  },
  "pledge": {
    etymology: { roots: "pledge (guarantee)", origin: "Old French: plege (guarantee) ← Frankish *plegan", mnemonic: "用名誉担保→承诺" },
    cognates: [
    ],
    synonyms: [
      { word: "vow", nuance: "发誓", formality: "formal" },
      { word: "promise", nuance: "承诺", formality: "neutral" },
      { word: "give one's word", nuance: "保证", formality: "informal" }
    ],
    collocations: [
      { pattern: "pledge + allegiance", example: "Pledge allegiance to the flag." },
      { pattern: "pledge + support", example: "They pledged support." },
      { pattern: "pledge + to do", example: "She pledged to fight." }
    ],
    layers: [
      { level: "物理层", meaning: "以实物抵押", example: "He pledged his estate." },
      { level: "认知层", meaning: "正式承诺行动", example: "Nations pledged to reduce emissions." },
      { level: "精神层", meaning: "一旦给出的承诺比锁链更坚固", example: "A word once given is a bond stronger than any chain." }
    ]
  },
  "precipitate": {
    etymology: { roots: "pre- (headlong) + cipit (head) + -ate", origin: "Latin: praecipitare ← prae- + caput (head)", mnemonic: "头朝下坠落→促成突变" },
    cognates: [
      { word: "precipitation", meaning: "降水" },
      { word: "precipitous", meaning: "陡峭的" },
      { word: "capital", meaning: "首都" }
    ],
    synonyms: [
      { word: "trigger", nuance: "触发", formality: "neutral" },
      { word: "hasten", nuance: "加速", formality: "formal" },
      { word: "spark", nuance: "引发", formality: "informal" }
    ],
    collocations: [
      { pattern: "precipitate + crisis", example: "The incident precipitated a crisis." },
      { pattern: "precipitate + change", example: "The discovery precipitated revolution." },
      { pattern: "precipitate + decline", example: "Scandal precipitated his decline." }
    ],
    layers: [
      { level: "物理层", meaning: "化学沉淀", example: "Cooling precipitates crystals." },
      { level: "认知层", meaning: "促使事件突然发生", example: "The leak precipitated a reshuffle." },
      { level: "精神层", meaning: "引发巨变的事件在当时往往不被认出", example: "Events that precipitate change are rarely recognized in the moment." }
    ]
  },
  "preside": {
    etymology: { roots: "pre- (before) + side (sit)", origin: "Latin: praesidere ← prae- + sedere (to sit)", mnemonic: "坐在最前面→主持" },
    cognates: [
      { word: "presidency", meaning: "总统任期" },
      { word: "president", meaning: "总统" },
      { word: "reside", meaning: "居住" }
    ],
    synonyms: [
      { word: "chair", nuance: "主持", formality: "neutral" },
      { word: "oversee", nuance: "监督", formality: "neutral" },
      { word: "run", nuance: "负责", formality: "informal" }
    ],
    collocations: [
      { pattern: "preside + over", example: "The judge presides over the trial." },
      { pattern: "preside + at", example: "She presided at the ceremony." },
      { pattern: "preside + during", example: "He presided during crisis." }
    ],
    layers: [
      { level: "物理层", meaning: "坐主位主持", example: "The chairman presided." },
      { level: "认知层", meaning: "领导组织", example: "She presided over rapid growth." },
      { level: "精神层", meaning: "主持者须以更高标准要求自己", example: "Those who preside must hold themselves to a higher standard." }
    ]
  },
  "rejuvenate": {
    etymology: { roots: "re- (again) + juven (young) + -ate", origin: "Latin: re- + juvenis (young)", mnemonic: "再次变年轻(juvenis→juvenile)→恢复活力" },
    cognates: [
      { word: "rejuvenation", meaning: "恢复青春" },
      { word: "juvenile", meaning: "青少年的" },
      { word: "junior", meaning: "年幼的" }
    ],
    synonyms: [
      { word: "revitalize", nuance: "恢复活力", formality: "formal" },
      { word: "refresh", nuance: "提神", formality: "neutral" },
      { word: "give new life to", nuance: "注入新生命", formality: "informal" }
    ],
    collocations: [
      { pattern: "rejuvenate + skin", example: "The treatment rejuvenates skin." },
      { pattern: "rejuvenate + economy", example: "Investment rejuvenated the economy." },
      { pattern: "feel rejuvenated", example: "She felt rejuvenated." }
    ],
    layers: [
      { level: "物理层", meaning: "使身体年轻化", example: "The spa rejuvenated her skin." },
      { level: "认知层", meaning: "为衰落事物注入活力", example: "New ideas rejuvenated the department." },
      { level: "精神层", meaning: "每个黎明是灵魂重生的机会", example: "Each dawn offers the chance to rejuvenate the soul." }
    ]
  },
  "retaliate": {
    etymology: { roots: "re- (back) + tali (same kind) + -ate", origin: "Latin: retaliare ← re- + talis (of such kind)", mnemonic: "以同样方式回击→报复" },
    cognates: [
      { word: "retaliation", meaning: "报复" }
    ],
    synonyms: [
      { word: "avenge", nuance: "复仇", formality: "formal" },
      { word: "get back at", nuance: "报复", formality: "informal" },
      { word: "strike back", nuance: "反击", formality: "neutral" }
    ],
    collocations: [
      { pattern: "retaliate + against", example: "The army retaliated." },
      { pattern: "retaliate + with", example: "She retaliated with a lawsuit." },
      { pattern: "retaliate + in kind", example: "They retaliated in kind." }
    ],
    layers: [
      { level: "物理层", meaning: "以武力回击", example: "Troops retaliated with airstrikes." },
      { level: "认知层", meaning: "反击不公正", example: "The company retaliated with a counter-suit." },
      { level: "精神层", meaning: "以眼还眼使世界失明", example: "The instinct to retaliate is natural; the wisdom to forgive is divine." }
    ]
  },
  "salvage": {
    etymology: { roots: "salv- (save) + -age", origin: "Latin: salvare (to save) → Old French salver", mnemonic: "从灾难中拯救→打捞" },
    cognates: [
      { word: "salvation", meaning: "拯救" },
      { word: "save", meaning: "保存" }
    ],
    synonyms: [
      { word: "rescue", nuance: "营救", formality: "neutral" },
      { word: "recover", nuance: "回收", formality: "neutral" },
      { word: "save what you can", nuance: "尽量挽回", formality: "informal" }
    ],
    collocations: [
      { pattern: "salvage + from wreckage", example: "Salvaged equipment from the ship." },
      { pattern: "salvage + reputation", example: "Tried to salvage reputation." },
      { pattern: "salvage + operation", example: "A major salvage operation." }
    ],
    layers: [
      { level: "物理层", meaning: "从废墟打捞", example: "Divers salvaged artifacts." },
      { level: "认知层", meaning: "从失败中挽回价值", example: "The team salvaged the project." },
      { level: "精神层", meaning: "从每次挫折中都能挽回教训", example: "From every setback, something of value can be salvaged." }
    ]
  },
  "suppress": {
    etymology: { roots: "sup- (under) + press (push)", origin: "Latin: supprimere ← sub- + premere (to press)", mnemonic: "压到下面→压制" },
    cognates: [
      { word: "suppression", meaning: "压制" },
      { word: "oppress", meaning: "压迫" },
      { word: "compress", meaning: "压缩" }
    ],
    synonyms: [
      { word: "stifle", nuance: "扼杀", formality: "neutral" },
      { word: "quash", nuance: "撤销", formality: "formal" },
      { word: "stamp out", nuance: "消灭", formality: "informal" }
    ],
    collocations: [
      { pattern: "suppress + dissent", example: "The regime suppressed dissent." },
      { pattern: "suppress + evidence", example: "The report was suppressed." },
      { pattern: "suppress + emotions", example: "He suppressed his anger." }
    ],
    layers: [
      { level: "物理层", meaning: "武力镇压", example: "Military suppressed the uprising." },
      { level: "认知层", meaning: "压制信息或情感", example: "The company suppressed the safety report." },
      { level: "精神层", meaning: "真理虽被压制终会重见天日", example: "Truth, though suppressed, always finds its way to the light." }
    ]
  },
  "transgress": {
    etymology: { roots: "trans- (across) + gress (step)", origin: "Latin: transgredi ← trans- + gradi (to step)", mnemonic: "走过界线→越界/违反" },
    cognates: [
      { word: "transgression", meaning: "越界" },
      { word: "progress", meaning: "进步" },
      { word: "digress", meaning: "离题" }
    ],
    synonyms: [
      { word: "violate", nuance: "违反", formality: "formal" },
      { word: "sin", nuance: "犯罪", formality: "neutral" },
      { word: "cross the line", nuance: "越界", formality: "informal" }
    ],
    collocations: [
      { pattern: "transgress + law", example: "He transgressed the law." },
      { pattern: "transgress + norms", example: "Artists transgress norms." },
      { pattern: "transgress + against", example: "She transgressed rules." }
    ],
    layers: [
      { level: "物理层", meaning: "越过边界", example: "Trespassers face prosecution." },
      { level: "认知层", meaning: "违反法律或道德", example: "The company transgressed regulations." },
      { level: "精神层", meaning: "犯错是人性但学习是品格", example: "All mortals transgress, but character is measured by learning." }
    ]
  },
  "unify": {
    etymology: { roots: "uni- (one) + -fy (make)", origin: "Latin: unificare ← unus (one) + facere (to make)", mnemonic: "使成为一(unus→unit)→统一" },
    cognates: [
      { word: "unification", meaning: "统一" },
      { word: "uniform", meaning: "统一的" },
      { word: "unique", meaning: "独特的" }
    ],
    synonyms: [
      { word: "unite", nuance: "联合", formality: "neutral" },
      { word: "consolidate", nuance: "巩固", formality: "formal" },
      { word: "bring together", nuance: "汇聚", formality: "informal" }
    ],
    collocations: [
      { pattern: "unify + nation", example: "The leader unified the nation." },
      { pattern: "unify + around", example: "Unified around a common goal." },
      { pattern: "unify + standards", example: "Unify technical standards." }
    ],
    layers: [
      { level: "物理层", meaning: "将分散部分合并", example: "Bismarck unified the German states." },
      { level: "认知层", meaning: "使理论一致", example: "Einstein sought to unify physics." },
      { level: "精神层", meaning: "团结人民是领导力最高表现", example: "To unify a people around shared purpose is the highest act of leadership." }
    ]
  },
  "vanish": {
    etymology: { roots: "vanish (become empty)", origin: "Latin: vanescere ← vanus (empty, vain)", mnemonic: "化为虚空(vanus→vanity)→消失" },
    cognates: [
      { word: "vanity", meaning: "虚荣" },
      { word: "vain", meaning: "徒劳的" },
      { word: "evanescent", meaning: "转瞬即逝的" }
    ],
    synonyms: [
      { word: "disappear", nuance: "消失", formality: "neutral" },
      { word: "evaporate", nuance: "蒸发", formality: "neutral" },
      { word: "go poof", nuance: "消失", formality: "informal" }
    ],
    collocations: [
      { pattern: "vanish + without a trace", example: "The plane vanished." },
      { pattern: "vanish + into thin air", example: "Money vanished into thin air." },
      { pattern: "vanish + from sight", example: "The ship vanished." }
    ],
    layers: [
      { level: "物理层", meaning: "从视线消失", example: "Fog vanished as sun rose." },
      { level: "认知层", meaning: "事物不再存在", example: "Files vanished from the server." },
      { level: "精神层", meaning: "文明消亡但思想不朽", example: "Civilizations vanish, but their ideas endure forever." }
    ]
  },
  "vilify": {
    etymology: { roots: "vil- (worthless) + -ify (make)", origin: "Latin: vilificare ← vilis (cheap, base) + facere (to make)", mnemonic: "使变得低贱(vilis→vile)→诽谤" },
    cognates: [
      { word: "vilification", meaning: "诽谤" },
      { word: "vile", meaning: "卑鄙的" },
      { word: "villain", meaning: "恶棍" }
    ],
    synonyms: [
      { word: "slander", nuance: "口头诽谤", formality: "neutral" },
      { word: "defame", nuance: "损害名誉", formality: "formal" },
      { word: "trash-talk", nuance: "说坏话", formality: "informal" }
    ],
    collocations: [
      { pattern: "vilify + opponents", example: "The campaign vilified opposition." },
      { pattern: "vilify + in media", example: "Vilified in the press." },
      { pattern: "unfairly vilify", example: "Whistleblowers unfairly vilified." }
    ],
    layers: [
      { level: "物理层", meaning: "公开攻击名誉", example: "Tabloids vilified the celebrity." },
      { level: "认知层", meaning: "以人身攻击代替论证", example: "The tactic was to vilify, not debate." },
      { level: "精神层", meaning: "今天诋毁改革者明天将尊敬他们", example: "Those who vilify the reformer today will honor them tomorrow." }
    ]
  },
  "exemplify": {
    etymology: { roots: "exempl- (example) + -ify (make)", origin: "Latin: exemplificare ← exemplum (example) + facere (to make)", mnemonic: "使成为范例(exemplum→example)→例证" },
    cognates: [
      { word: "exemplification", meaning: "举例" },
      { word: "example", meaning: "例子" },
      { word: "exemplary", meaning: "模范的" }
    ],
    synonyms: [
      { word: "illustrate", nuance: "说明", formality: "neutral" },
      { word: "demonstrate", nuance: "展示", formality: "neutral" },
      { word: "be a poster child for", nuance: "代言", formality: "informal" }
    ],
    collocations: [
      { pattern: "exemplify + values", example: "She exemplifies hard work." },
      { pattern: "exemplify + trend", example: "This case exemplifies a trend." },
      { pattern: "best exemplified by", example: "Best exemplified by this experiment." }
    ],
    layers: [
      { level: "物理层", meaning: "作为典型案例", example: "The building exemplifies modernism." },
      { level: "认知层", meaning: "用实例说明原理", example: "The experiment exemplifies entropy." },
      { level: "精神层", meaning: "以行动体现美德比说教更有力", example: "Those who exemplify virtue teach more powerfully than any sermon." }
    ]
  }
};
