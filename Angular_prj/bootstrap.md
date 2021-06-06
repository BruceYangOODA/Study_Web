## [Youtube bootstrap tutorial for beginners](https://www.youtube.com/playlist?list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V)  


## [index]
Grid System 網格系統  
pull位置  
img  
visible, hidden  
font  
blockquotes and lists  
--list-group  
table  
button  
--button-group  
icon  
dropdown  
forms  
--input  
--input-group  
--checkbox  
--radio  
--select  
--form-control-static  






### [Bootstrap Icons](https://icons.getbootstrap.com/)  





### Grid System 網格系統  
[影片 網格系統](https://www.youtube.com/watch?v=GDwWmrpCa30&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=3&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  

--col-xs-* (< 768px) Extra small - Mobile Phone  
--col-sm-* (> 768px) Small - Tablets  
--col-md-* (> 992px) Medium - Desktop  
--col-lg-* (>1200px) Large - Desktop  

offset  
--col-md-6 col-md-offset-3  物件佔6,左右空白佔3  

### pull位置  
[影片 pull位置](https://www.youtube.com/watch?v=2-tHexxFixA&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=8&ab_channel=kudvenkat)  

--pull-left  
--pull-right  
--center-block  


### img  
[影片 畫廊](https://www.youtube.com/watch?v=2-tHexxFixA&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=8&ab_channel=kudvenkat)  

--img-responsive  圖片隨外框縮放  

### visible, hidden  
[影片visible, hidden](https://www.youtube.com/watch?v=3AW-txuBByI&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=8&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  

--visible-xs  --visible-sm  --visible-md  --visible-lg  
--hidden-xs  --hidden-sm  --hidden-md  --hidden-lg  

--visible-*-block  
--visible-*-inline  在字串之間  
--visible-*-inline-block  在字串之間,以區塊  

--visible-print  列印時出現  
--hidden-print  列印時隱藏  

### font  
[影片 font](https://www.youtube.com/watch?v=TueaztnRkAQ&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=10&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  

預設設定  
Font size 14px  
Line height 1.428  

Inline text elements 字段元素  
<標籤>  樣式  
< u >  Underline  底線  
< s >  Strikethrough  畫線  
< mark >  Highlight  底光  
< em >  Emphasize or Italicize  斜體  
< strong >  Bold  粗體  
< sub >  Subscript  上半段  
< sup >  Superscript  下半段  

text alignment 字段對齊   
--text-left  Left align  靠左  
--text-center  Center align  置中  
--text-right  Right align  靠右  
--text-justify  Justify  自動斷行  
--text-nowrap  nowrap  不斷行  


### blockquotes and lists  
[影片 blockquotes and lists](https://www.youtube.com/watch?v=4MZg5mupiJI&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=11&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  

< blockquote class="blockquote-reverse">< /blockquote >  區塊段落  
--blockquote-reverse 讓區塊靠右  

< ul class="list-inline">< li >< /li >< /ul >  
--list-inline  讓li橫排  
--list-unstyled  不帶基本樣式  

< dl class="dl-horizontal">
< dt >< /dt > 標題
< dd >< /dd > 描述
< /dl>
--dl-horizontal  讓 dt dd 橫排  

#### list-group   
[影片 list groups](https://www.youtube.com/watch?v=sMMqPuBo2tw&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=12&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  

List Group  
< div class="list-group" >  
< a class="list-group-item list-group-item-danger">danger< /a >  
< button class="list-group-item list-group-item-info">info< /button >  
< button class="list-group-item list-group-item-success">success< /button >  
< span>< div class="list-group-item list-group-item-warning badge">warning< /div>< /span>
< /div>    

標題 - 描述  
< div class="list-group" >  
< a class="list-group-item">  
< h4 class="list-group-item-heading"> XXX < /h4>
< p class="list-group-item-text"> XXX < /p>
< /a >  
< /div>    

--list-group  包裹LIST  
--list-group-item  子組件  
--list-group-item-heading  子組件標題  
--list-group-item-text  子組件描述  

### table  
[影片 table](https://www.youtube.com/watch?v=67_FboS47qc&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=15&ab_channel=kudvenkat)  

table  
<標籤>  樣式  
--table-striped  隔行樣式  
--table-bordered  邊線  
--table-hover  Hover  
--table-condensed  縮排空格  
--table-response  自動調適大小  

tr 樣式  
--active  --danger  --info  --success  --warning  

### button  
[影片 button](https://www.youtube.com/watch?v=klFyW05p7EY&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=15&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  

Button樣式  
--btn-default  --btn-primary  --btn-success  --btn-info  --btn-warning  --btn-danger  
--btn-link  偽裝成 < a>的 button  
--btn-block  縮放到區塊的大小  

大小樣式  
--btn-lg  --btn-md  --btn-sm  

#### button-group  
[影片 button-group](https://www.youtube.com/watch?v=CKGQu8Hz2bY&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=18&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  

< div class="btn-group">  
< button>XXX< /button>  
< button>XXX< /button>  
< /div>  

大小樣式  
--btn-group-lg  --btn-group-sm  --btn-group-xs  

垂直樣式  
--btn-group-vertical   

自動調整大小  
--btn-group-justified  
如果內部包含 標籤 button,就要用 < div class="btn-group"> 包裹  


### icon  
[影片 icon](https://www.youtube.com/watch?v=aSz5chzgLRM&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=16&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
[Bootstrap Icons](https://icons.getbootstrap.com/)  

在標籤內部加上 < span class="ICON樣式">< /span>  

### dropdown  
[影片 dropdown](https://www.youtube.com/watch?v=okGRZB_0SfI&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=17&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  

< div class="dropdown">  
< button data-toggle="dropdown" class="dropdown-toggle">  XXX  < /button>  
< ul class="dropdown-menu">  展開區域  
< li class="dropdown-header"> XXX < /li>  
< li class="divider">< /li>  
< li >< a href="#"> XXX < /a>< /li>  
< /ul>  
< /div>  

--dropdown-toggle  指定這個 DOM 是 觸發器  
--data-toggle  指定展開區域是 dropdown-menu    
--dropdown-menu  展開區域
--dropdown-header  標題文字  
--divider  分隔線  

Menu向上展開  
< div class="dropup">  
< div class="dropdown">< /div>  
< /div>  

### forms  
[影片 forms](https://www.youtube.com/watch?v=-avU9Crq45U&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=20&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  

< form class="form-inline">  
< div class="form-group">  
< label class="control-label"> XXX < /label>  
< input class="form-control" type="txt">  
< /div>  
< btuuon type="submit">< /button>  
< /form>  

--form-inline  橫排元素  
--form-horizontal  直列元素 元素內部橫排  
--form-group  包裹元素  
--form-group-lg  樣式大小  
--form-group-sm  樣式大小  
--form-control  bootstrap樣式   
--control-lable  子組件label  

[影片 formcontrol](https://www.youtube.com/watch?v=wov68WL2aCs&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=22&ab_channel=kudvenkat)  


#### input  
[影片 input](https://www.youtube.com/watch?v=QXTys7TeZsQ&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=24&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  

< input class="form-control input-lg" type="text"/>

--input-lg  --input-sm  樣式大小  

#### input-group  
[影片 input-group](https://www.youtube.com/watch?v=YyCWPCix7PU&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=25&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
[影片 button in input-group](https://www.youtube.com/watch?v=pix2y9F4JDM&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V&index=26&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  

< div class="input-group">  
< span class="input-group-addon">  
< span class="glyphicon glyphicon-envelope">  
< /span>  
< /span>  
< input type="text" class="form-control" />  
< /div>  

--input-group  群組  
--input-group-addon  附加物   
--input-group-lg  樣式大小  
--input-group-sm  樣式大小  

< div class="input-group">  
< input type="text" class="form-control"/>  
< div class="input-group-btn">  
< button type="button"> XXX < /button>  
< button type="button">< span class="glyphicon glyphicon-envelope">< /span> XXX < /button>  

< button type="button" class="dropdown-toogle" data-goggle="dropdown"> XXX < /button>  
< ul class="dropdown-menu">  
< li> XXX< /li>  
< li> XXX< /li>  
< /ul>  
< /div>  
< /div>  

--input-group-btn  按鈕群組  

#### checkbox  

< div class="checkbox">  
< label class="checkbox-inline">  
< input type="checkbox" value="1" /> XXX  
< /label>  
< label class="checkbox-inline">  
< input type="checkbox" value="2" /> XXX  
< /label>  
< /div>  

--checkbox  bootstrap樣式  
--checkbox-inline  橫排checkbox  

#### radio  

< div class="radio">  
< label>  
< input type="radio" name="XXX" value="1" /> XXX  
< /label>  
< div class="radio">  
< label>  
< input type="radio" name="XXX" value="2" /> XXX  
< /label>  
< /div>  

< label class="radio-inlie">  
< input type="radio" name="XXX" value="1" /> XXX  
< /label>  

--radio  bootstrap樣式  
--radio-inline  橫排radio  

#### select  

<select multiple class="form-control">  
< option> XXX < /option>  
< /select>  

multiple  複選  

#### form-control-static  

< label > XXX < /label>  
< p class="form-control-static"> XXX < /p>  

--form-control-static  與前面的 label 自動標齊  












