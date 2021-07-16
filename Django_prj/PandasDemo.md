
## [Youtube Python Pandas Tutorial](https://www.youtube.com/watch?v=ZyhVh-qRZPA&list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS&index=1&ab_channel=CoreySchafer)  

## [Pandas API](https://pandas.pydata.org/pandas-docs/stable/reference/index.html)  

[sample data](https://insights.stackoverflow.com/survey)  

[index]  
#### Indexes  
#### Update Row  
#### Add Remove Row  
#### Sort Data  
#### Data Explore  
#### Date Data  

$ conda install xlwt xlrd openpyxl  

import pandas as pd  

從檔案建立DF   
df = pd.read_csv('file_uri', index_col='key')   指定某個欄位為 index  
df = pd.read_csv('file_uri', index_col='Column')   行列互換    


df.shape  矩陣長度  
df.info()  
pd.set_option('pattern', value)  
ex. pd.set_option('display.max_columns', 85)  

從物件建立DF  
josn_object = { 'key': [array1], 'key2':[array2] }  
df = pd.DataFrame(json_object)  
df['key']  
df.key  
type(df['key'])  -> pandas.core.series.Series  

df[['key','key2']]  


### Indexes  

[影片](https://www.youtube.com/watch?v=Lw2rlcxScZY&list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS&index=4&ab_channel=CoreySchafer)  

df.columns  回傳 欄位名稱陣列  
df.iloc[N]  回傳 第 N row  
df.iloc[[0,1], C] 回傳第 0,1 row 的第 C 欄位  
df.iloc[[0,1], 'key'] 回傳第 0,1 row 的 key 欄位  
df.iloc[[0,1], ['key','key2']] 回傳第 0,1 row 的 key, key2 欄位  

df['key'].value_counts()  回傳欄位所有值的 次數統計  
ex 'Yes' 71257  'No' 17626  

df.loc[N]  回傳 第 N row,與iloc的差異，loc可以用 key當索引,iloc 只能用數字 ->(index location)   
df.loc[[0:2], 'key':'key2']  

df.set_index('key', inplace=True)  以欄位key 為 index ; inplace 是否取代原欄位資料  
df.index  回傳 index陣列物件  

df.sort_index()  排序,以str順序或int大小  
df.sort_index(ascending=False)  排序,逆排  

df.reset_index(inplace=True)  欄位以 length 重排  

filter = (df.['key'] == 'AAA') 回傳 boolean陣列 欄位key是否等於 'AAA'   
df[filter]  回傳 filter為True 的陣列  
df.loc[filter]  回傳 filter為True 的陣列    

filter = df['key'].str.contains('Python', na=False)  
df.loc[filter, 'key']  回傳 filter為True 的陣列    


### Update Row  

[影片](https://www.youtube.com/watch?v=DCDe29sIKcE&list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS&index=5&ab_channel=CoreySchafer)  

df.columns = [x.upper() for x in df.columns]  操作修改標題   
df.columns = df.columns.str.replace('_', ' ')   
df.rename(columns={'first_name':'first', 'last_name':'last'}, inplace=True)  

df.at[2, 'key'] = value  修改 第2 row, 欄位 key的值  

df['key'] = df['key'].str.lower()  把欄位 key的英文字母小寫  

df['key'].apply(function)  傳方法修改欄位的值  

ex.  
def update_email(email):  
&nbsp; &nbsp; &nbsp; return email.upper()  

df['key'] = df['key'].apply(update_email)  

df['key'] = df['key'].apply(lambda x: x.lower())   匿名方法  

df['key'] = df['key'].map({'AAA':'BBB'})  把'AAA' 修改為 'BBB'  
df['key'] = df['key'].replace({'AAA':'BBB'})  把'AAA' 修改為 'BBB'  

df['key'] = df['key'].map({'Yes': True, 'No': False})  ex.  


### Add Remove Row  

[影片](https://www.youtube.com/watch?v=HQ6XO9eT-fc&list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS&index=6&ab_channel=CoreySchafer)  

df['full_name'] = df['first'] + ' ' +df['last']  

df.drop(columns=['first', 'last'], inplace=True)  刪除欄位  
df.drop(index=N)   刪除第N列  

row_data = { 'first':'AAA', 'email':'N/A' }  
df.append(row_data, ignore_index=True) 新增一列    
row_data 可以換成 陣列 變成新增N列    


### Sort Data  

[影片](https://www.youtube.com/watch?v=T11QYVfZoD0&list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS&index=7&ab_channel=CoreySchafer)  

df.sort_values(by='key', asending=False)  
df.sort_values(by=['key', 'key2'], asending=[False, True])   

df.sort_index()  
df['key'].sort_values()  回傳 index, key欄位 排序後的陣列  
df.sort_values(by='key', inplace=True)  


### Data Explore  

[影片](https://www.youtube.com/watch?v=txMdrV1Ut64&list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS&index=8&ab_channel=CoreySchafer)  

df.shape  
df.describe()  
df['key'].count()  
df['key'].value_counts()   回傳 (值, 出現次數) 的 陣列  

country_grp = df.groupby(['Country'])  以欄位值為key,製作 陣列物件  
country_grp.get_group('China')  

df.dropna()  捨棄 空值的 row  
df.fillna('MISSING')  


### Date Data  

[影片](https://www.youtube.com/watch?v=UFuo7EHI8zc&list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS&index=10&ab_channel=CoreySchafer)  

df['Date'] = pd.to_datetime(df['Date', format='%Y-%m-%d %I-%p'])  
df.loc[0, 'Date'].day_name()   回傳 'Friday'  

d_parser = lambda x: pd.datetime.strptime(x, '%Y-%m-%d %I-%p')  
df = pd.read_csv('file_uri', parse_dates=['Date'], date_parser=d_parser)   


### R/W Data  

[影片](https://www.youtube.com/watch?v=N6hyN6BW6ao&list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS&index=11&ab_channel=CoreySchafer)  

df.to_csv('file_uri', sep='\t')  

df.to_excel('file_uri')  

df.to_json('file_uri', orient='records', lines=True)  

test = pd.read_csv('file_uri')  
test = pd.read_excel('file_uri', index_col='key')  

test = df.read_json('file_uri', orient='records', lines=True)  

[test = pd.read_sql(.........)](https://youtu.be/N6hyN6BW6ao?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS&t=1561)  



