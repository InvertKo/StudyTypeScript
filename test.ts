const puppeteer = require('puppeteer');

try{(async () => {
    const browser = await puppeteer.launch(
      { executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe' },
      { headless: true }
    );
    console.log("start");
    const page = await browser.newPage();
    await page.goto('https://finance.daum.net/domestic/kospi200');
    await page.waitFor(1000);
    
    //사용변수
    const target = new Map();
    const part = new Map();
    let tempPart,tempVal;


    //종목명
    let tempTarget = await page.$eval(
      "#boxEntryChange > div.box_contents > div > table > tbody > tr > th > a", element => {
        return element.textContent;
      });
    
      for(let i = 2; i<9; i++){
         //종목명
      tempPart= await page.$eval(
        "#boxEntryChange > div.box_contents > div > table > thead > tr > th:nth-child("+i+")", element => {
          return element.textContent;
      });
      //현재가  ~ 시가총액(억)
       tempVal= await page.$eval(
        "#boxEntryChange > div.box_contents > div > table > tbody > tr.first > td:nth-child("+i+") > span", element => {
          return element.textContent;
      });
      part.set(tempPart, tempVal);

    }
     
      // 종목당 값 세팅
      target.set(tempTarget,part);

       //종목당 값 출력 
      //이중맵
      target.forEach((value,key)=>{
        console.log(key); //종목명
        value.forEach((value,key)=>{ 
            console.log(key+':'+value);//하위항목
        })
      })
    await browser.close();
    console.log("end");
  
})()}
catch(err){
  console.error;
}