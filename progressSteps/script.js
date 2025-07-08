
const progress  = document.getElementById('progress')
const prev  = document.getElementById('prev')
const next  = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click',() => {

    currentActive++

    if(currentActive > circles.length){
        currentActive = 4
    }

    console.log(currentActive);  
    
    colorfill()

})

prev.addEventListener('click',()=>{
    currentActive--

    if(currentActive<1){
        currentActive = 1;
    }

    colorfill()
})

function colorfill(){
    circles.forEach((circle,idx)=>{
        if(idx<currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width=((actives.length - 1) / (circles.length-1))*100+'%';

    if(currentActive == circles.length){
        next.disabled = true
    }else if(currentActive == 1){
        prev.disabled = true
    }else{
        prev.disabled =  false
        next.disabled = false
    }
        
}


// for round container 

const progressRound = document.getElementById('progressRound')
const round1 = document.getElementById('roundcircle1')
const roundprev = document.getElementById('roundprev')
const roundnext = document.getElementById('roundnext')

let angle = 0;

roundnext.addEventListener('click',()=>{
    if(angle<360){
        angle += 90;
        updatecircle();
    }
})

roundprev.addEventListener('click',()=>{
    if(angle>0){
        angle -=90;
        updatecircle();
    }
})

function updatecircle(){
    progressRound.style.background = `conic-gradient(green ${angle}deg,white ${angle}deg)`;
    round1.textContent = `${(angle/360)*100}%`;
}



