function sum(a, b) {
    return a + b
}

function callSum1(a, b) {
    return sum.apply(this, arguments)
}

function callSum2(a, b) {
    return sum.apply(this, [a, b])
}

console.log(callSum1(1, 1)) // 2
console.log(callSum2(1, 1)) // 2


color = "red"
const o = {color: "blue"}

function sayColor() {
    console.log(this.color)
}
sayColor()
sayColor.call(globalThis)
sayColor.call(o)