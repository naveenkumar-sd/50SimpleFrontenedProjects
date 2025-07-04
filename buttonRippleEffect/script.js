const buttons = document.querySelectorAll('.ripple')

console.log(buttons);


buttons.forEach(button => {
    button.addEventListener('click',function(e){
        const x = e.pageX
        const y = e.pageY
        
        const buttonTop = this.offsetTop
        const buttonLeft = this.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top= yInside + 'px'
        circle.style.left = xInside + 'px'

        if (this.classList.contains('ripple-vertical')) {
            circle.classList.add('vertical');
        } else if (this.classList.contains('ripple-horizontal')) {
            circle.classList.add('horizontal');
        } else if (this.classList.contains('ripple-zoomout')) {
            circle.classList.add('zoomout');
        }

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)

    })
})
