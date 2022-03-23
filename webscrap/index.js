const puppeteer = require('puppeteer');
//const  { puppeteer, ConsoleMessage, Page, JSHandle } = require('puppeteer');
const fs = require('fs');
//import { ConsoleMessage, Page, JSHandle } from 'puppeteer';


var browser;
var page;
// 已滿18歲按鈕 selector    
const buttonSelector = 'body > div.bbs-screen.bbs-content.center.clear > form > div:nth-child(2) > button';  
const footer_message = 'div.bbs-footer-message';//body > #main-container > 
ScrapStart = async () => {


    const content = await page.content();
    console.log('content',content);
}


initBrowser = async () => {
    console.log('initBrowser...');
    browser = await puppeteer.launch({ headless: true });
    //如果為false則會開啟瀏覽器，適合用作於debug時。
    page = await browser.newPage();   

}

redirectBtnClick = async (page, targetBtn) => {
    console.log('checkBtnClick...');
    //await page.goto(ScrapSrc);
    await page.click(targetBtn);
    //await page.waitForNavigation();
}

gotoPageByLink = async (page, targetLink, waitSelector='') => {
    await page.goto(targetLink);
    if(waitSelector != '')
        await page.waitForSelector(waitSelector, {timeout: 1000});
}

// 取得 TITLE 的連結資訊
getPageTitleInfos = async (page, targetSelector) => {
    const Targets = await page.$$(targetSelector); 
    const InfoResults = [];
    for(const Target of Targets) {
        const LINK_INFO = await page.evaluate((_link) => {    
            const _ID = _link.href.match(/(?<=Gossiping\/)(.*)(?=.html)/g)[0]            
            return {
                href: _link.href,
                text: _link.innerText,
                id: _ID
            }
        }, Target)
        InfoResults.push(LINK_INFO);
        //console.log('LINK_INFO',LINK_INFO)
    }
    return InfoResults
}

// 取得 上一頁 的連結資訊
getPreviousPageInfo = async (page, targetSelector) => {
    const targets = await page.$$(targetSelector); 
    const InfoResults = [];
    for(const target of targets) {
        const LINK_INFO = await page.evaluate((_link) => {    
           // const _ID = _link.href.match(/(?<=Gossiping\/)(.*)(?=.html)/g)[0]            
            return {
                href: _link.href,
                text: _link.innerText,
              //  id: _ID
            }
        }, target);
        InfoResults.push(LINK_INFO);
        //console.log('LINK_INFO',LINK_INFO)
    }
    return InfoResults[1]
}

// 爬取文章內容
scrapContent = async(page) => {
    const MainContentNode = await page.$('#main-content')
    const MainContent = await page.evaluate((el) => el.innerText, MainContentNode)
    //console.log('MainContent',MainContent)
    const ContentList = MainContent.match(/(.*)\s/g)
    const QUO_REGEX = /^: /
    const QUO_REGEX2 = /^※ 引述/
    const QUO_REGEX3 = /^--/
    for(let i =0; i<ContentList.length ;i++) {
        ContentList[i]= ContentList[i].trim()
        //console.log(c[i])        
        //console.log(i,REGEX.test(c[i]))
        if(QUO_REGEX.test(ContentList[i])) {
           // console.log(i,c[i])
           ContentList[i] = ''   
        }
        else if(QUO_REGEX2.test(ContentList[i])) {
            ContentList[i] = ''   
        }
        else if(QUO_REGEX3.test(ContentList[i])) {
            ContentList[i] = ''   
        }
    }
    const PO_REGEX = /^※\s文章網址/
    let index = -1;
    for(let i =0; i<ContentList.length ;i++) {
        //c[i]= c[i].trim()
        //console.log(c[i])        
        //console.log(i,REGEX.test(c[i]))
        if(PO_REGEX.test(ContentList[i])) {
    //        console.log(i,c[i])        
            index = i
        }
    }

    const CONTENTS = []
    if(index != -1) {
        for(let i=0 ; i<index ; i++) {
            if(ContentList[i] != '')
            CONTENTS.push(ContentList[i])
        }
    }
    return CONTENTS
}

saveTitleInfo = async(TitleLinksList) => {
    let TitleLogger = fs.createWriteStream(__dirname+'/TitleInfo.txt',{flags:'a'}); 
    for(const Link of TitleLinksList) {
        TitleLogger.write((Link.id+'\n'))        
        TitleLogger.write((Link.text+'\n'))
        TitleLogger.write((Link.href+'\n'))         
        TitleLogger.write(('\n'))
    }
    TitleLogger.end();
}
savePreviousPageInfo = async(PreviousPageInfoList) => {
    let InfoLogger = fs.createWriteStream(__dirname+'/PreviousPageInfo.txt',{flags:'a'});
    for(const line of PreviousPageInfoList) {
        InfoLogger.write((line+'\n'))
    }
    InfoLogger.end();
}

main = async () => {
    await initBrowser();
    //const TargetLink = 'https://www.ptt.cc/bbs/Gossiping/index.html';
    const TargetLink = 'https://www.ptt.cc/bbs/Gossiping/index39037.html'
    const PageWaitSelector = '#action-bar-container > div.action-bar > div.btn-group.btn-group-paging > a';
    const TitleWaitSelector = 'div.r-list-container.action-bar-margin.bbs-screen > div.r-ent > div.title > a';
    const FooterWaitSelector = 'div.bbs-footer-message';
    await gotoPageByLink(page,TargetLink);
    await redirectBtnClick(page, buttonSelector);   
    await page.waitForSelector(footer_message, {timeout: 1000});
    let PreviousPageInfo;
    let PreviousPageInfoList = [];
    let TitleLinks;
    let TitleLinksList = [];
    let PttContents;
    let COUNTER = 0;

    if(!fs.existsSync('test'))  {                
        fs.mkdirSync('test')
    }   
    else {
        //console.log('fs.existsSync',fs.existsSync('test'))
    }  

    // forloop
    while(COUNTER < 10000) {
        //try{
    if(COUNTER != 0) {    
        await gotoPageByLink(page,PreviousPageInfo.href);
}
    // PreviousPageInfo.href = 'https://www.ptt.cc/bbs/Gossiping/index38921.html'

    
    PreviousPageInfo = await getPreviousPageInfo(page, PageWaitSelector);
    console.log('PrePage',PreviousPageInfo); 

    TitleLinks = await getPageTitleInfos(page, TitleWaitSelector); 
    //console.log('TitleLinks',TitleLinks)

    for(let i=TitleLinks.length-1; i>-1 ; i--) {
        // link.href 'https://www.ptt.cc/bbs/Gossiping/M.1647192678.A.1D0.html'
        // link.text '[問卦] 認真問吃到難吃的可以跟老闆說嗎'
        // link.id M.1647192678.A.1D0
        
        await gotoPageByLink(page, TitleLinks[i].href, FooterWaitSelector);
        PttContents = await scrapContent(page);
        //console.log('PttContents',PttContents);
        //fs.writeFile(__dirname+'/test.txt', PttContents, {flag:'wx'},function(err) {})
        //fs.open(__dirname+'/test.txt', 'a', (eff, fd) =>{})
                
        let logger = fs.createWriteStream(__dirname+'/test/'+TitleLinks[i].id+'.txt')
        for(const line of PttContents) {
            logger.write((line+'\n'))
        }
        logger.end();
        COUNTER++;
        console.log('save...',COUNTER,TitleLinks[i].text)
        await page.waitForTimeout(1000);

        TitleLinksList.push(TitleLinks[i])
        

        if(COUNTER%100==0) {
            await saveTitleInfo(TitleLinksList); 
            TitleLinksList = [];

            await savePreviousPageInfo(PreviousPageInfoList);       
            PreviousPageInfoList = [];
        }
        }

        PreviousPageInfoList.push(PreviousPageInfo.href);
        
   // }
   // catch{}
    }
    await saveTitleInfo(TitleLinksList); 
    TitleLinksList = [];
    await savePreviousPageInfo(PreviousPageInfoList);       
    PreviousPageInfoList = [];


  /*
    
    await page.waitForSelector(footer_message, {timeout: 2000});
    const content = await page.content();
    console.log('content',content.match(/(.*)(?=※ 發信站\: 批踢踢實業坊\(ptt\.cc\))/g));   
*/
// let content = await page.content();    
    // console.log('content',content);   

/*
    const content = await page.content();
    console.log('content',content);    
    */
/*
const target = await page.$eval('div.r-list-container.action-bar-margin.bbs-screen')
console.log('target',target.innerHTML)
console.log('target',typeof(target))
*/
/*
const target = await page.$('div.r-list-container.action-bar-margin.bbs-screen')
const targetText = await page.evaluate((ele) => ele.innerHTML, target)
console.log(targetText)
console.log(typeof(target),target)
*/
    
        /*
        const aa = await page.evaluate((el) => el.outerHTML, target)
        const bb = await page.evaluate((el) => el.innerText, target)
        const cc = await page.evaluate((el) => {return {href:el.href,text:el.innerText}}, target)
        console.log('aa',aa)
        console.log('bb',bb)
        console.log('cc',cc)*/
   
    
    console.log('END SCRAPER')
}
main();
single = async() => {
    await initBrowser();
    await redirectBtnClick(page, buttonSelector);   
    await page.waitForSelector(footer_message, {timeout: 3000});
    const testHREF = 'https://www.ptt.cc/bbs/Gossiping/M.1646504691.A.91F.html';
    await page.goto(testHREF)
    await page.waitForSelector(footer_message, {timeout: 3000});
    //const content = await page.content();
    //console.log(content)
    const a = await page.$('#main-content')
    const b = await page.evaluate((el) => el.innerText,a)
    console.log('b',b)
    const c = b.match(/(.*)\s/g)
    const QUO_REGEX = /^: /
    const QUO_REGEX2 = /^※ 引述/
    const QUO_REGEX3 = /^--/
    for(let i =0; i<c.length ;i++) {
        c[i]= c[i].trim()
        //console.log(c[i])        
        //console.log(i,REGEX.test(c[i]))
        if(QUO_REGEX.test(c[i])) {
           // console.log(i,c[i])
            c[i] = ''   
            
        }
        else if(QUO_REGEX2.test(c[i])) {
            c[i] = ''   
        }
        else if(QUO_REGEX3.test(c[i])) {
            c[i] = ''   
        }
    }

    const PO_REGEX = /^※\s文章網址/g
    let index = -1;
    for(let i =0; i<c.length ;i++) {
        //c[i]= c[i].trim()
        //console.log(c[i])        
        //console.log(i,REGEX.test(c[i]))
        if(PO_REGEX.test(c[i])) {
    //        console.log(i,c[i])        
            index = i
        }
    }

    const TITLE = []
    if(index != -1) {
        for(let i=0 ; i<index ; i++) {
            if(c[i] != '')
                TITLE.push(c[i])
        }
    }
    console.log(TITLE);
    /*
    const d = c.map(ele => {
        //ele = ele.trim()
        ele = 'c'
        return ele
        console.log('ele',ele)
    })*/

   // console.log('C',c)


}
// single()

