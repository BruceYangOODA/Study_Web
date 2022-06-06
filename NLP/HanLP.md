
conda install -c conda-forge jpype1  
pip install pyhanlp  

from pyhanlp import *
content = "现如今，机器学习和深度学习带动人工智能飞速的发展，并在图片处理、语音识别领域取得巨大成功。"
print(HanLP.segment(content))

自然語言處理--用人工智慧看懂中文 鄭捷  

5.44 命名實體識別(Named Entity Recognition, NER)  
又稱為[專名識別]，他的主要工作是對於一篇待處理文字，識別出其中的
人名(Person)  
地名(Location)  
組織機構名(Organization)  
日期(Date)  
時間(Tome)  
百分數(Percentage)  
貨幣(Monetary Value)  
這7大類命名實體  

6.27 配價理論  
配價理論源於一種具體的類比。泰斯尼耶爾把句子比喻成化學元素中的分子，分子是由最小按照一定的價結合到一起的。動詞是句子的[中心]，所有的成分都是圍繞著句子的中心動詞展開的。那們[中心]動詞的價就決定了句子的成分結構。他稱那些被中心動詞直接支配的成分為[行動元]，那些造成輔助作用的成分為[狀態元]。一個動詞能夠帶的行動元個數就是它的價。  



3.05 中文詞語分類系統對照表
| 縮寫 | 名稱 | 詞性 | 屬性|
| :-----| ----: | :----: | :----: |
| NR | 人名 | 名詞N | 實詞 |
| NS | 地名 | 名詞N | 實詞 |
| NT | 機構團體 | 名詞N | 實詞 |
| NZ | 其他專名 | 名詞N | 實詞 |
| T | 時間詞 | 時間詞T | 實詞 |
| S | 處所詞 | 處所詞S | 實詞 |
| F | 方位詞 | 方位詞F | 實詞 |
| M | 數詞 | 數詞M | 實詞 |
| Q | 量詞 | 量詞Q | 實詞 |
| V | 動詞 | 動詞V | 實詞 |
| A | 形容詞 | 形容詞A | 實詞 |
| Z | 狀態詞 | 狀態詞Z | 實詞 |
| R | 代詞 | 代詞R | 實詞 |
| VD | 副動詞 | 兼類別述詞 | 實詞 |
| VN | 名動詞 | 兼類別述詞 | 實詞 |
| AD | 副形詞 | 兼類別述詞 | 實詞 |
| AN | 名形詞 | 兼類別述詞 | 實詞 |
| B | 區別詞 | 區別詞B | 實詞 |
| D | 副詞 | 副詞D | 實詞 |
| P | 介詞 | 介詞P | 虛詞 |
| C | 連詞 | 連詞C | 虛詞 |
| U | 助詞 | 助詞U | 虛詞 |
| Y | 語氣詞 | 語氣詞Y | 虛詞 |
| O | 擬聲詞 | 擬聲詞O | 虛詞 |
| E | 嘆詞 | 嘆詞E | 虛詞 |
| I | 成語 | 成語I | 實詞 |
| L | 慣用語 | 慣用語L | 實詞 |
| J | 簡稱略語 | 簡稱略語J | 實詞 |
| W | 標點符號 | 標點符號W | 虛詞 |
| UN | 未知詞 | 未知詞UN | 實詞 |

5.21中文子句類別表
| 縮寫 | 英文說明 | 中文說明 |
| :-----| ----: | :----: |
| ADJP | Adjective phrase | 形容詞子句 |
| ADVP | Adverbial phrase headed by AD(adverb) | 由副詞開頭的副詞子句、狀語 |
| CLP | Classifier phrase | 量詞子句 |
| CP | Clause headed by C(complementizer) | 用補語啟動的補語從句、關係從句 |
| DNP | Phrase formed by "XP+DEG" | XP+DEG 結構組成的子句  |
| DP | Deteminer phrase | 限定詞子句 |
| DVP | Phrase formed by "XP+DEV" | XP+DEV 結構組成的子句 |
| FRAG | fragment | 片段 |
| IP | Simple clause headed by I(INFL) | 簡單句 |
| LCP | Phrase formed by "XP+LC" | 處所詞為中心語的子句 |
| LST | List maker | 用於解釋說明性的清單標記子句 |
| NP | Noun phrase | 名詞子句 |
| PP | Preposition phrase | 介詞子句 |
| PRN | Parenthetical | 插入語 |
| QP | Quantifier phrase | 數詞子句 |
| UCP | unidentical coordination phrase | 非一致性並列子句 |
| VP | Verb phrase | 動詞子句 |


HanLP詞性標註集   
| 縮寫 | 名稱 | 詞性 | 詞性 |
| :-----| ----: | :----: | :----: |
| A | 形容詞 | 形容詞A | 形容詞A |
| AD | 副形詞 | 形容詞A | 形容詞A |
| AG | 形容詞性語素 | 形容詞A | 形容詞A |
| AL | 形容詞性慣用語 | 形容詞A | 形容詞A |
| AN | 名形詞 | 形容詞A | 形容詞A |
| B | 區別詞 | 區別詞B | 區別詞B |
| begin | 僅用於始##始 | 區別詞B | 區別詞B |
| BG | 區別詞性語素 | 區別詞B | 區別詞B |
| BL | 區別詞性慣用語 | 區別詞B | 區別詞B |
| C | 連詞 | 連詞C | 連詞C |
| CC | 並列連詞 | 連詞C | 連詞C |
| D | 副詞 | 副詞D | 副詞D |
| E | 嘆詞 | 嘆詞E | 嘆詞E | 
| end | 僅用於終##終 | 嘆詞E | 嘆詞E | 
| F | 方位詞 | 方位詞F | 方位詞F | 
| G | 學術詞彙 | 學術詞彙G | 學術詞彙G | 
| GB | 生物相關詞彙 | 生物相關詞彙GB | 學術詞彙G | 
| GBC | 生物類別 | 生物相關詞彙GB | 學術詞彙G | 
| GC | 化學相關詞彙 | 化學相關詞彙GC | 學術詞彙G | 
| GG | 地理地質相關詞彙 | 地理地質相關詞彙GG | 學術詞彙G | 
| GI | 計算機相關詞彙 | 計算機相關詞彙GI | 學術詞彙G | 
| GM | 數學相關詞彙 | 數學相關詞彙GM | 學術詞彙G | 
| GP | 物理相關詞彙 | 物理相關詞彙GP | 學術詞彙G | 
| H | 前綴 | 前綴H | 前綴H | 
| I | 成語 | 成語I | 成語I | 
| J | 簡稱略語 | 簡稱略語J | 簡稱略語J | 
| K | 後綴 | 後綴K | 後綴K | 
| L | 習用語 | 習用語L | 習用語L | 
| M | 數詞 | 數詞M | 數詞M | 
| MG | 數語詞 | 數詞M | 數詞M |  
| MQ | 數量詞 | 數詞M | 數詞M |  
| N | 名詞 | 名詞N | 名詞N | 
| NB | 生物名 | 名詞N | 名詞N | 
| NBA | 動無名 | 生物名NB | 名詞N | 
| NBC | 動物綱目 | 生物名NB | 名詞N | 
| NBP | 植物名 | 生物名NB | 名詞N | 
| NF | 食品 | 食品NF | 名詞N | 
| NG | 名詞性語素 | 名詞性語素NG | 名詞N | 
| NH | 醫藥疾病等健康相關名詞 | 醫藥疾病等健康相關名詞NH | 名詞N | 
| NHD | 疾病 | 醫藥疾病等健康相關名詞NH | 名詞N | 
| NHM | 藥品 | 醫藥疾病等健康相關名詞NH | 名詞N | 
| NI | 機構相關 | 機構相關NI | 名詞N | 
| NIC | 下屬機構 | 機構相關NI | 名詞N | 
| NIS | 機構後綴 | 機構相關NI | 名詞N | 
| NIT | 教育相關機構 | 機構相關NI | 名詞N | 
| NL | 名詞性慣用語 | 名詞性慣用語NL | 名詞N | 
| NM | 物品名 | 物品名NM | 名詞N | 
| NMC | 化學品名 | 化學品名NMC | 名詞N |  
| NN | 工作相關名詞 | 工作相關名詞NN | 名詞N |  
| NND | 職業 | 工作相關名詞NN | 名詞N |  
| NNT | 職務職稱 | 工作相關名詞NN | 名詞N |  
| NR | 人名 | 人名NR | 名詞N |  
| NR1 | 複姓 | 人名NR | 名詞N | 
| NR2 | 蒙古姓名 | 人名NR | 名詞N | 
| NRF | 音譯人名 | 人名NR | 名詞N | 
| NRJ | 日語人名 | 人名NR | 名詞N | 
| NS | 地名 | 地名NS | 名詞N | 
| NSF | 音譯地名 | 地名NS | 名詞N | 
| NT | 機構團體名 | 機構團體名NT | 名詞N | 
| NTC | 公司名 | 機構團體名NT | 名詞N | 
| NTCB | 銀行 | 機構團體名NT | 名詞N | 
| NTCF | 工廠 | 機構團體名NT | 名詞N | 
| NTCH | 酒店賓館 | 機構團體名NT | 名詞N | 
| NTH | 醫院 | 機構團體名NT | 名詞N | 
| NTO | 政府機構 | 機構團體名NT | 名詞N | 
| NTS | 中小學 | 機構團體名NT | 名詞N | 
| NTU | 大學 | 機構團體名NT | 名詞N | 
| NX | 字母專名 | 字母專名NX | 名詞N |  
| NZ | 其他專名 | 其他專名NZ | 名詞N |  
| O | 擬聲詞 | 擬聲詞O | 擬聲詞O | 
| P | 介詞 | 介詞P | 介詞P | 
| PBA | 介詞把 | 介詞P | 介詞P | 
| PBEI | 介詞被 | 介詞P | 介詞P | 
| Q | 量詞 | 量詞Q | 量詞Q | 
| QG | 量詞語素 | 量詞語素QG | 量詞Q | 
| QT | 時量詞 | 時量詞QT | 量詞Q | 
| QV | 動量詞 | 動量詞QV | 量詞Q | 
| | | | | 





