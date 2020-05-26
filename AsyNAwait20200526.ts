import * as fs from 'fs'
import {promisify} from 'util'

// Async와 Await
// 함수 앞에 async를 붙이고 비동기로 되어 있는 항수를 콜하면서await를 붙인다.

const readingFile =promisify(fs.readFile);

async function getData(filename:string){
    try{
        return await readingFile(filename,{encoding:'utf-8'})
    }catch(e){
        throw new Error(e.toString());
    }
}//fun getdata

async function wri(){
    try{
        const data =await getData('data.txt');
        console.log(data);
    }catch(e){
        console.log(e);
    }
}//fun wir


// 함수실행 
console.log("start");
wri();
console.log("end");