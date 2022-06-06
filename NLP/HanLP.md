
conda install -c conda-forge jpype1  
pip install pyhanlp  

from pyhanlp import *
content = "现如今，机器学习和深度学习带动人工智能飞速的发展，并在图片处理、语音识别领域取得巨大成功。"
print(HanLP.segment(content))

自然語言處理--用人工智慧看懂中文 鄭捷  

NR > 人名










