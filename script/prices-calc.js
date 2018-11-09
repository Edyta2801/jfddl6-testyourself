const slider = document.querySelector("#price-slider")
const output = document.querySelector(".section-prices-calc__users-output")

const checkBoxCommercial = document.querySelector("#commercial")
const checkBoxNonCommercial = document.querySelector("#non-commercial")



output.innerHTML = slider.value

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
}
