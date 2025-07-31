
const dices = document.querySelectorAll('.dice');
const btnroll = document.querySelector('.btn1');



btnroll.addEventListener('click',()=>{
         
        randomIndex = Math.floor(Math.random()*dices.length)
        console.log(randomIndex)

        removeclass();
        setTimeout(()=>{
            const choice = dices[randomIndex].classList.add('active');
        },500)

})

function removeclass(){

    

    setTimeout(()=>{
        dices.forEach(dice => {
        dice.classList.add('spin');
        dice.classList.remove('active');
        dice.classList.remove('spin');
    });

    },500)
    

}




