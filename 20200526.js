var infomation = /** @class */ (function () {
    function infomation(name, age) {
        if (age === void 0) { age = 4; }
        this.name = name;
        this.age = age;
    } //생성자
    infomation.prototype.info = function () {
        return '${this.name} has ${this.age}.';
    };
    return infomation;
}()); //클래스 fun
var test01 = new infomation("kim");
console.log(test01.info());
