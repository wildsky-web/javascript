const o = {color: "blue"}
function sayColor() {
    console.log(this.color)
}

const objectSayColor = sayColor.bind(o)
objectSayColor()
