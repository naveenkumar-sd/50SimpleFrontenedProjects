const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")
const text = "we are love programming"
let idx =1;
let speed = 300/speedEl.value;


writeText()

function writeText(){
    textEl.innerText = text.slice(0,idx)

    idx++

    if(idx>text.length){
        idx = 1
    }

    setTimeout(writeText, speed)

}

speedEl.addEventListener('input',(e)=>{
    speed = 300/e.target.value
})

const textEl2 = document.getElementById("text2")
const speedEl2 = document.getElementById("speed2")
const text2 = "we also love film making"
let idx2 = 1;
let speed2 = 300/speedEl2.value;

writeText2()

function writeText2(){
    textEl2.innerText = text2.slice(0,idx2)

    idx2++

    if(idx2>text2.length){
        idx2 = 1
    }

    setTimeout(writeText2,speed2)
}

speedEl2.addEventListener('input',(e)=>{
    speed2 = 300 / e.target.value
})