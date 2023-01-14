let galaxEl = document.querySelector('#galax')
let normEl = document.querySelector('#norm')
let wrongEl = document.querySelector('#wrong')
let rightEl = document.querySelector('#right')
let infoEl = document.querySelector('#info')
let keyboardEl = document.querySelector('#keyboard')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let wrong = 0
let right = 0
let bokstaver = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let bokstav = bokstaver[Math.floor(Math.random()*26)]
galaxEl.innerHTML = bokstav
document.addEventListener('keyup', async (e) =>{
    keyboardEl.value = ""
    normEl.innerHTML = e.code[3]
    bokstav = bokstaver[Math.floor(Math.random()*26)]
    console.log(normEl.innerHTML, galaxEl.innerHTML, normEl.innerHTML == galaxEl.innerHTML)
    if (normEl.innerHTML == galaxEl.innerHTML){
        infoEl.innerHTML = `Correct`
        galaxEl.innerHTML = bokstav
        right += 1
        rightEl.innerHTML = `You have ${right} right in a row`
        await sleep(1000)
        normEl.innerHTML = "-"
    }
    else{
        infoEl.innerHTML = `Wrong`
        wrong += 1
        right = 0
        rightEl.innerHTML = `You have ${right} right in a row`
        wrongEl.innerHTML = `You have ${wrong} mistakes`
    }
})