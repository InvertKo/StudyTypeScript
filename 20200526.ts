import $ from 'jquery'; // jquery import
//clas테스트 
class sum{
    num1:number; 
    num2:number;

    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    getSum():number{
        return this.num1*this.num2;
    }
}//sum

let sumTest : sum = new sum(3,5);
console.log(sumTest.getSum());



class textNintSum{
    text1 :string;
    test2: string;
}//textNintSum