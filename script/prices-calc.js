const slider = document.querySelector("#price-slider")
const output = document.querySelector(".section-prices-calc__users-output")

const checkBoxCommercial = document.getElementById("#commercial")
const checkBoxNonCommercial = document.querySelector("#non-commercial")



output.innerHTML = slider.value

slider.oninput = function () {
    output.innerHTML = slider.value
}

checkBoxCommercial.onclick = function () {
    checkBoxCommercial.checked = true
    checkBoxNonCommercial.checked = false
}
checkBoxNonCommercial.onclick = function () {
    checkBoxCommercial.checked = false
    checkBoxNonCommercial.checked = true
}
