
document.addEventListener('DOMContentLoaded',()=>{
    const heading = document.querySelector('h1');

    heading.style.pointer='cursor';

    heading.addEventListener('click',()=>{
        heading.textContent = 'You Clicked the project Starter!';
        heading.style.color = 'Blue';
    });
});