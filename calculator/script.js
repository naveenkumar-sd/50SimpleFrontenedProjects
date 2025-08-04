
const btns = document.querySelectorAll('.btn');
const inputfield = document.getElementById('input');



for(let i=0;i<btns.length;i++){

    btns[i].addEventListener('click',()=>{
        let btnval = btns[i].textContent;
        if(btnval === 'CLS'){
            clearvalue();
        }else if(btnval === '='){
            calculateval();
        }else{
            appendval(btnval);
        }
    })
    
}

function clearvalue(){
    inputfield.value = " ";
}

function calculateval(){
    inputfield.value = eval(inputfield.value);
}

function appendval(buttonvalue){

    inputfield.value += buttonvalue;
}