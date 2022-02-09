"use strict"
function outer() {
    inner()
}

function inner() {
    console.log(inner.caller);
    console.log(inner.caller)
}

outer()