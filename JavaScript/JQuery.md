


| CAPTION | METHOD | DESC | NOTE |  
| :---- | :---- | :----: | :---- |  
| 顯示頁面 | $(selector).show(speed, callback) |  |  |  
| 隱藏頁面 | $(selector).hide(speed, callback) |  |  |  
| 切換頁面 | $(selector).toggle(speed, callback) |  |  |  
| 淡入 | $(selector).fadeIn(speed, callback) |  |  |  
| 淡出 | $(selector).fadeOut(speed, callback) |  |  |  
| 收縮頁面 | $(selector).slideUp(speed, callback) |  |  |  
| 展開頁面 | $(selector).slideDown(speed, callback) |  |  |  
| 動畫 | $(selector).animate({params}, speed, callback) |  |  |  
| 停止動畫 | $(selector).stop(stopAll, goToEnd) | stopAll:是否應該清除動畫佇列 goToEnd:是否立即完成目前動畫 |  |  
| 另開連結 | $(selector).attr({target:"_blank"}); |  |  |  
| 另開連結 | $(selector).click(function() { $(this).attr('target','_blank')}) |  |  |  
| 另開連結 | window.open(URL, name, features, replace) | name:新視窗名稱 |  |  
| 滾動卷軸 | $(selector).scrollTop(offset) |  |  |  
| 滾動卷軸 | $scrollTo(selector, speed) |  |  |  
| 自動調整高度 | $(selector).height(length) | $(selector).load(function() { var vHeight = $(this).contents() .find("body").height(); $(this).height(vHeight<300?300:vHeight); }) |  |  
| 取得滑鼠座標 | $(document).mousemove(function (e) { x=e.screenX; y=e.screenY;}) |  |  |  
| 取得滑鼠視窗座標 | $(document).mousemove(function (e) { x=e.clientX; y=e.clientY; }) |  |  |  
| 阻止文字換行 | str.replace(regexp, replacement) | str.replace(/\r\n/g, '\\n').replace(/\n/g, '') |  |  
| 字數限制 | $(selector).charCount({ allowed:150, waring:120, counterText:"剩餘字數:"}) |  |  |  
| 字數限制 | var type = this.tagName.toLowerCase(): null; var inputType = this.type?this.type.toLowerCase(): null; | if(type=='input' && inputType == 'text' or inputType == 'password') { this.maxLength=max; } | else if(type=='textarea') { this.onkeyup = function() { if(this.value.length > max) { this.value = this.value.substring(0,max)}}} | 
| 提示文字 | $(selector).focus(); $(selector).blur(); | $(selector).focus(function() { if($(this.val() == '搜索中...') { $(this).val("")} )}) | $(selector).blur(function() { if($(this.val() == "") { $(this).val("搜索中...")} )}) |  
| 文字閃爍 | setInterval(code, millisec); clearInterval(id_of_setinterval); |  |  |  
| 文字自動縮排 | $.elasticTextArea(selector) |  |  |  
| 浮動視窗 | $(selector).floatdiv(params) |  |  |  
| 取得元素的索引值 | $(selector).index() | 取得第一個匹配到的索引值；沒有(-1) |  |  
| 插入內容在選擇器結尾 | $(selector).append(content) |  |  |  
| 插入內容在選擇器結尾 | $(content).appendTo(selector) |  |  |  
| 插入內容在選擇器開頭 | $(selector).prepend(content) |  |  |  
| 插入內容在選擇器開頭 | $(content).prependTo(selector) |  |  |  
| 在選擇器後方插入內容 | $(selector).after(content) |  |  |  
| 在選擇器後方插入內容 | $(content).insertAfter(selector) |  |  |  
| 在選擇器前方插入內容 | $(selector).before(content) |  |  |  
| 在選擇器前方插入內容 | $(content).insertBefore(selector) |  | |  
| 複製選擇器內容 | $(selector).clone(includeEvents: boolean=false) | includeEvents: 事件一併複製 |  |  
| 替換選擇器內容 | $(selector).replaceWith(content) | content: HTML or 選擇器 or 新元素: document.createElement('div') |  |  
| 替換選擇器內容 | $(selector).html(content) | content: HTML or string |  |  
| 刪除選擇器 | $(selector).remove() |  |  |  
| 清空選擇器內容 | $(selector).empty() |  |  |  
| 綁定事件 | $(selector).bind(event, data, callback) | event: click |  |  
| checkbox全選 | $(selector).click(function() { $(:checkobx).each(callback)}) | $(this).prop('checked',true) | prop(propertyName, value): 取得元素屬性並設定值 |  
| checkbox全選 | $(selector).click(function() { $(:checkobx).each(callback)}) | $(this).prop('checked',false) |  |  
| 禁用Enter | $("input").keypress(function(e) { var keyCode = e.keyCode? e.keyCode : e.which ? e.which : e.charCode; }) | if(keyCode ==13) { return false } else { return true; } |  |  
| 禁用右鍵 | $(document).bind("contextmenu", function(e) { return false;}) |  |  |  
| IE禁用文字選取 | $(document).bind("selectstart", function(e) { return false }) |  |  |  
| 輸入框focus高亮 | window.onload = function() { for(var i=0; i<$("input").length; i++) { }} | $("input")[i].onfocus = function() { this.calssName="css-text-high"} | $("input")[i].onblur = function() { this.calssName="css-text"} |  
| 輸入事件 | $(selector).bind("keyup", function(e) { var theValue = $(this).val(); }) |  |  |  
| 子物件點擊事件 | $(document).delegate("a", "click", callback) |  | var root = location.href.replace(location.pathname + loaction.search + location.hash, ''); window.open(this.href); return false; | $(selector).delegate(childSelector, event, data, callback) | 
| 固定Table表頭 | $(selector).chromatable({ width: "900px", height: "400px", scrolling: "yes"}) |  |  |  
| 防止頁面重複提交按鈕 | $(selector).click(function() { $(selector).attr("disabled", "disabled"); return false; }) | 點擊後，立刻禁用 |  |  
| 取得點選的select | $(selector).change(fucntion() { var str=""; $("select :selected").each(callback)}); | str += $(this).text() + "," |  |  
| 禁止輸入空白 | onkeyup="value=value.replcae(/\s/g, "")" |  |  |  
| 禁止元素的預設行為 | $("a").attr("href","井"); $("a").click(function(event) {}) | event.preventDefault(); | preventDefault() 阻止元素的預設行為; IE: window.event.returnValue=false |  
| 測試某個元素是否可見 | if($(selector).is(":visible")) {...} | is(":visible") 檢測一 display:none; 檢測二 type="hidden"表單元素; 檢測三 width=0 height=0; 檢測四 隱藏的父元素  |  |  
| 禁用輸入框 | $(selector).attr("disabled","disabled") |  |  |  
| 啟用輸入框 | $(selector).removeAttr("disabled") |  |  |  
| 監聽INPUT | $(selector).bind("input propertychange", callback) |  |  |  
| 監聽INPUT | < input type="text" oninput=方法(event) onpropertychange=方法(event) /> |  |  |  
| 雙擊不選取文字 | var clearSelection = function() { if(document.selection && document.selection.empty) { document.selection.empty(); }  else if(window.getSelection) { var sel = window.getSelection(); sel.removeAllRanges(); }} | $(selector).bind("dblclick", fucntion() { clearSelection(); }) |  |  
| 設定時間間隔 | var int = self.setInterval("clock()",50); | function clock() { var t = new Data(); document.getElementById("clock").value = t; } |  |  
| 設定時間延遲 | function timeMsg() { var t = setTimeout("log()", 1000); } | fuction log() { ... } | < input type="button" onclick="timeMsg()" / > |  
| hover延遲顯示 | fuction addMega() { $ (this).addClass("hovering"); }  function removeMega( ) { $ (this).removeClass("hovering"); } | var megaConfig = { interval:500, sensitivity:4, timeout:500, over:addMega, out:removeMega } | $(selector).hoverIntent(megaConfig); |  
| 取得頁面載入時間 | var start_time = new Date(); var end_time=""; | var t = setInterval(function() { if(document.readyState == "complete") { calTotalTime(); }}, 500) | function calTotalTime() { end_time = new Date(); var vTotalTime = end_time.getTime() - start_time.getTime(); clearInterval(t); } |  
| 用Enter鍵模擬Tab鍵 | < script type="text/javascript" for="document" event="onkeydown" > ... < /script> | if(event.keyCode==13 && event.srcElement.type!="buton" && event.srcElement.type!="reset" && event.srcElement.type!="textarea" && event.srcElement.type!="" ) { event.keyCode=9; } | widnow.onload=fucntion() { documenet.getElementById("thetest").focus(); } |  
| DIV自動置中 | $(document).ready(function() { }) | $(selector).center(); | $(window).bind("resize", function() { $(selector).center({transition:500}); }) |  
| 新增hover類別 | $(selector).hover(handlerIn, handlerOut); | $("li").hover( function() {}, function() {}) |  |  
| 自動完成autocomplete | var availableTags = {"A","B"}; | $(selector).autocomplete({ source:availableTags, scroll:true}) |  |  
| 滑鼠拖曳 | var _move=false; var _x, _y; | $(selector).click(function() {}).mousedown(fucntion(e) { _move=true; _x=e.pageX-parseInt($(".drag").css("left"); _y=e.pageY-parseInt($(".drag").css("top")); $("drag").fadeTo(20, 0.5); )}) | $(document).mousemove(function(e) { if(_move) { var x=e.pageX - _x; y=e.pageY - _y; $(".drag").css({top:y, left:x}); }}).mouseup(function() { _move=false; $(".drag").fadeTo("fast", 1)}); |  
| 滑鼠拖曳 | $(selector).draggable({ cursor:"move", cursorAt:{top:56, left:56}}); | $(selector).draggable("enable");啟用禁用的拖曳功能 $(selector).draggable("disable");禁用的拖曳功能 | $(selector).draggable("destroy");刪除拖曳功能 |  
| 限制拖曳範圍 | $(selector).draggable({axis:"y"});只能垂直拖曳 | $(selector).draggable({axis:"x"});只能水平拖曳 | $(selector).draggable({containment: "idName or parent", scroll: false, distance:20 });只能在目標容器內,超過20像素才開始 |  
| 拖曳到目標容器 | $("#draggable").draggable(); | $("#droppable").droppable({ drop: function(event, ui) {}}); | $("#droppable").droppable({ accept: "selectorName"});只允許accept拖曳至此 |  
| 不能選擇文字 | $(selector).disableSelection(); |  |  |  
| 可調整大小 | $(selector).resizable(); |  |  |  
| 無法顯示圖片 | $("img").error(function() { $("img").replaceWith(HTML_CODE)}) | $("img").error(function() { $("img").attr("src", "DEFAULT_IMG_URL")}) |  |  
| 顯示loading圖直至頁面載入完成 | window.onload(function() { $(selector).fadeOut(); }) |  |  |  
| 將圖片存入快取 | $.preloadImages('IMG_URL'); | function($) { var cache = []; $.preLoadImages = function() { var args_len = arguments.length; for(var i=arge_len; i--;) { var cacheImage = document.createElement('img'); cacheImage.src = arguments[i]; cache.push(cacheImage); } } } |  |  
| 批次載入圖片 | window.setTimeout(function() { .CODE. }, 500) | var img = $("< img >").attr("src", NEXT_IMG_URL).load(function() { $("div").append(img)}); |  |  
| hover圖片特效 | $(document).ready(function() { $(" # img img").mouseover(function() { $(" # img img").not(this).animate({opacity:0.1},400); })  | .mouseout(function() {$(" # img img").animate({opacity:1}, 400)}); )} |  |  
| 取得圖片顯示尺寸 | $(selector).append("寬度:"+($("img:first").width() )); | $(selector).append("高度:"+($("img:first").height() )); |  |  
| 取得圖片原始尺寸 | $("< img / >").attr("src", "IMG_URL").load(fucntion() { CODE }) | var imgWidth=this.width; var imgHeight=this.height; |  |  
| 切換陣列圖片 | var images=new Array(4); var n=0; images[0]="IMG_ONE_URL"; images[1]="IMG_TWO_URL"; | $(selector).click(function() { $(selector2).fadeOut(1000, callback) }) | $(selector2).css("backround-image", "url('+image[n]+')");  $(selector2).fadeIn(); if(n>3) { n=0; } else { n=n+1; } |  
| 按比例縮放圖片 | $(window).bind("load", function() { $(selectors).each( function() { callback })}); | var maxWidth=200; var maxHeight=200; var ratio=0; var width=$(this).width(); var height=$(this).height(); | if(width>maxWidth) { ratio=maxWidth/width; $(this).css("width",maxWidth); $(this).css("height",height * ratio);  if(height>maxHeight) { ratio=maxHeight/height; $(this).css("height",maxHeight); $(this).css("width", width * ratio); }} |  
| 圖片放大預覽 | 初始放大body區域 $("body").zoomTo();  | 點擊圖片放大 $(".zoom").click(function(evt) { evt.stopPropagation(); $(this).zoomTo(); }) | 點擊body恢復圖片大小 $("widnow").click(function(evt) { evt.stopPropagation(); $(body).zoomTo(); })  |  
| 圖片動態縮放 | $(selector).imgZoom({ showOverlay: true}); |  |  |  
| hover圖片放大 | 當滑鼠mouseover圖片,body新增一個div放圖片 | 當滑鼠mouseout圖片,body移除div圖片 |  |  
| 畫廊淡出淡入圖片 | $(selector).hover(callback1, callback2) | $(this).find(selector2).fadeOut(); | $(selector2).attr("src", NEXT_IMG_URL); $(this).find(selector2).fadeIn(); |  
| 拖曳圖片 | $(window).bind("mousemove", function(evt) { CODE }) | if(!move) return; var obj=$(selector); mouseX=evt.pageX; mouseY=evt.pageY; x=obj.position().left; y=obj.position().top; obj.css({left:x+(mouseX-currx), top:y+(mouseY-curry)}); currx=evt.pageX; curry=evt.pageY; | $(selector).mouseup(function() { move=false; }) |  
|  |  |  |  |  
| 驗證Email | var mailExp = new RegExp(/^[\w\-\.]+@[\w\-\.]+[\.\w]+$/); | mailExp.test(targetSTR); |  |  
| 自動調整螢幕寬度 | < meta name="viewport" content="width=device-width, initial-scale=1">|  |  |  
| bind(type [,data], fn) | blur, foucus, load, resize, scroll, unload, click, dblckick, | mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, | change, select, submit, keydown, keypress, keyup, error, |  
|  |  |  |  |  
|  |  |  |  |  
|  |  |  |  |  
|  |  |  |  |  
|  |  |  |  |  










