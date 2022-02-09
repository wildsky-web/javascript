/* 原型链 */
function SuperType() {
    this.property = true
}
var property = false
// call和apply作用是一致的，仅仅是接收参数方式不同
// call和apply第一个参数都是作用域，不同在于
// apply第二个参数接受的是Array实例或者arguments对象，而call必须枚举出所有参数
SuperType.prototype.getSuperValue = function () {
    console.log(this);
    return this.property
}

