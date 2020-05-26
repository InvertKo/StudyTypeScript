import * as fs from 'fs'

//동기화방식으로 Text 출력
console.log("동기화 :date reading start");

let data: string = fs.readFileSync('data.txt', { encoding: 'utf-8' }); //txt파일을 data객체 담는다
console.log(data);
console.log("동기화: data reading end");

//비동기화방식으로 Text 출력
console.log("비동기화 :date reading start");
fs.readFile('data.txt', { encoding: 'utf-8' }, (error, data: string) => { console.log(data) }
);
console.log("비동기화: data reading end");

// 동기화 방식일 경우 순서대로 실행하지만, 비동기화일 경우 파일을 읽기전에 console 로그가 먼저 실행된다.
