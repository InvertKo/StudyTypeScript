import * as fs from 'fs'
import {promisify} from 'util'

//비동기화 방식으로 promise 사용
console.log("start");

const readFile =promisify(fs.readFile);
readFile('data.txt',{ encoding: 'utf-8' }).then((data:string)=>{
    console.log(data);
}
).catch((e)=>{
    console.log(e);
})
console.log("end");
// 마찬가지로 비동기화이기에 console.log가 전부 출력된 후 파일이 읽어진다



//promise를 사용하여 파일을 합치는 예시이다.
const readFile1 =promisify(fs.readFile);
const writeFile1 =promisify(fs.writeFile);


const data = readFile1('data.txt',{ encoding: 'utf-8' });
const datasum = readFile1('data2.txt',{ encoding: 'utf-8' });

console.log("시작");
Promise.all([data,datasum]).then((values:string[])=>{
    const out = values[0]+values[1];
    console.log("out");    
    writeFile1('out.txt',out)
}).catch(error=>{
    console.log(error);
})
console.log("종료");

//여기서 핵심은 정상적인 루트일경우 then으로 , 오류발생시 catch로 이동 
