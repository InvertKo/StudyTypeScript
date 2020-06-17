import * as express from 'express'  //express 선언문 
const app = express();

//추가 항목
app.use((req, res, next)=>{
	console.log('hello 1')
	next()
})

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World');
  console.log('hello 2')
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

// 'hello 1'이 먼저 출력되고 'hello 2'가 console값으로 찍힌다.