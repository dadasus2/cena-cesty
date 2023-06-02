
function Vypocitej() {
    const length = document.getElementById('length').value
    const consumption = document.getElementById('consumption').value
    const fuel = document.getElementById('fuel').value
    let output = document.getElementById('output')


    perLiter = consumption / 100
    let price = perLiter * fuel * length
    price = Math.round(price)

    if (output.textContent.includes(price)) {

        output.textContent = `Cena vaší cesty je: ${price} Kč`
    }

    else {
        output.textContent += ` ${price} Kč`

    }


    return price

}

function Smaz() {
    let form = document.getElementById('form')
    output.textContent = "Cena vaší cesty je: "
    form.reset()
}
