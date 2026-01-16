//Testing of event loop
const fs = require('fs');
console.log("Event loop phase 1");

setTimeout(()=>{
    console.log("settimer"),1000
},setTimeout(()=>{
    console.log("settimer 2 "),0
}));
setImmediate(()=>{
    console.log("setImmediate")
});
process.nextTick(()=>{
    console.log("Highest priority")
});
Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("end");
