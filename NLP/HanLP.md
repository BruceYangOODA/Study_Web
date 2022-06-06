
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










