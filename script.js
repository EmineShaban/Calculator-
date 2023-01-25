let display = document.getElementById('display')
let buttons = Array.from(document.getElementsByTagName('button'))
console.log(display.value)

buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target)
        switch (e.target.innerText) {
            case 'C':
                display.value = '';
                break;
            case "=":
                try {
                    display.value = eval(display.value)
                } catch {
                    display.value = 'Error!'
                }
                break;
            default:
                display.value += e.target.innerText
        }
    })
})
