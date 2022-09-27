


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
| 提示文字 | $(selector).focus(); $(selector).blur(); | $(selector).focus(function() { if($(this.val() == '搜索中...') { $(this).val("")} )}) | $(selector).blur(function() { if($(this.val() == "") { $(this).val("搜索中...")} )}) |  
| 文字閃爍 | setInterval(code, millisec); clearInterval(id_of_setinterval); |  |  |  
| 文字自動縮排 | $.elasticTextArea(selector) |  |  |  
| 浮動視窗 | $(selector).floatdiv(params) |  |  |  
|  |  |  |  |  
|  |  |  |  |  
|  |  |  |  |  
|  |  |  |  |  
|  |  |  |  |  







