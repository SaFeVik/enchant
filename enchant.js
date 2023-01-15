let galaxEl = document.querySelector('#galax')
let galax1El = document.querySelector('#galax1')
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
let bokstav = bokstaver[Math.floor(Math.random()*26)]+bokstaver[Math.floor(Math.random()*26)]+bokstaver[Math.floor(Math.random()*26)]

galaxEl.innerHTML = bokstav.charAt(0)+bokstav.charAt(1)
galax1El.innerHTML = bokstav.charAt(2)

console.log(bokstav.charAt(0), bokstav.charAt(1), bokstav.charAt(2))

document.addEventListener('keyup', async (e) =>{
    console.log("norm:",normEl.value,"galax:", bokstav.charAt(0),bokstav.charAt(1), bokstav.charAt(2), e.key == bokstav.charAt(2))

    if (e.key == bokstav.charAt(2)){
        bokstav = bokstaver[Math.floor(Math.random()*26)]+bokstav.charAt(0)+bokstav.charAt(1)+bokstav.charAt(2)
        infoEl.innerHTML = `Correct`
        galaxEl.innerHTML = bokstav.charAt(0)+bokstav.charAt(1)
        galax1El.innerHTML = bokstav.charAt(2)
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
})
document.addEventListener('keydown', async (e) =>{
    normEl.value = ""
})