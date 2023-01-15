let galaxEl = document.querySelector('#galax')
let wrongEl = document.querySelector('#wrong')
let rightEl = document.querySelector('#right')
let infoEl = document.querySelector('#info')
let normEl = document.querySelector('#norm')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let wrong = 0
let right = 0
let bokstaver = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let bokstav = bokstaver[Math.floor(Math.random()*26)]
galaxEl.innerHTML = bokstav
document.addEventListener('keyup', async (e) =>{
    bokstav = bokstaver[Math.floor(Math.random()*26)]
    console.log(normEl.value, galaxEl.innerHTML, normEl.value == galaxEl.innerHTML)
    if (normEl.value == galaxEl.innerHTML){
        infoEl.innerHTML = `Correct`
        galaxEl.innerHTML = bokstav
        right += 1
        rightEl.innerHTML = `You have ${right} right in a row`
    }
    else{
        infoEl.innerHTML = `Wrong`
        wrong += 1
        right = 0
        rightEl.innerHTML = `You have ${right} right in a row`
        wrongEl.innerHTML = `You have ${wrong} mistakes`
    }
    normEl.value = ""
})
