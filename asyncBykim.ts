const puppeteer1 = require("puppeteer");

async function getFile() {
    const browser = await puppeteer1.launch(
        { executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe' },
        { headless: true }
    );
    const page = await browser.newPage();
    await page.goto("https://finance.daum.net/domestic/kospi200");

    const result = await page.evaluate(()=>{
        const lastCommitMessage = (document.querySelector(
            "#boxEntryChange > div.box_contents > div > table > tbody > tr > th > a"
            ) as HTMLSpanElement)?.innerText

            const readme = document.querySelector(
                "#boxEntryChange > div.box_contents > div > table > thead > tr > th:nth-child(1)"
            );
        return{lastCommitMessage,readme}    
    })//result

    console.log(result)
    await browser.close()
}//getFile()

getFile().catch(err => console.error(err))


