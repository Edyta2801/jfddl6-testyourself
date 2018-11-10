const slider = document.querySelector("#price-slider")
const usersOutput = document.querySelector(".section-prices-calc__users-output")
const priceOutput = document.querySelector(".section-prices-calc__price-output")

const checkBoxCommercial = document.querySelector("#commercial")
const checkBoxNonCommercial = document.querySelector("#non-commercial")

usersOutput.innerHTML = slider.value

slider.oninput = function () {
    output.innerHTML = slider.value
}

checkBoxCommercial.onchange = function () {
    checkBoxCommercial.checked = true
    checkBoxNonCommercial.checked = false
}
checkBoxNonCommercial.onchange = function () {
    checkBoxCommercial.checked = false
    checkBoxNonCommercial.checked = true

    priceOutput.innerHTML = '0 zł'
}
