class Price {
    constructor() {
        this.oneUserPrice = 5
        this.finalPrice = 0
        this.checkBoxCommercialValue = false
        this.checkBoxNonCommercialValue = true
        this.sliderValue = 5

        this.init()
    }

    init() {

        this.slider = document.querySelector(".section-prices-calc_price-slider")
        this.usersOutput = document.querySelector(".section-prices-calc__users-output")
        this.priceOutput = document.querySelector(".section-prices-calc__price-output")

        this.checkBoxCommercial = document.querySelector("#commercial")
        this.checkBoxNonCommercial = document.querySelector("#non-commercial")

        this.checkBoxCommercial.onchange = this.onCommercialCheckBoxChange.bind(this)
        this.checkBoxNonCommercial.onchange = this.onNonCommercialCheckBoxChange.bind(this)

        this.slider.oninput = this.onSliderInput.bind(this)

        this.countPrice()
        this.render()
    }

    render() {

        this.usersOutput.innerHTML = this.sliderValue

        this.checkBoxCommercial.checked = this.checkBoxCommercialValue
        this.checkBoxNonCommercial.checked = this.checkBoxNonCommercialValue

        this.priceOutput.innerHTML = `${this.finalPrice} zł/miesiąc`
    }

    countPrice() {
        if (this.checkBoxNonCommercialValue === true) {
            this.finalPrice = 0
            this.sliderValue = 1
        }
        else {
            this.finalPrice = this.oneUserPrice * this.sliderValue
        }
    }

    onCommercialCheckBoxChange() {
        this.checkBoxCommercialValue = true
        this.checkBoxNonCommercialValue = false

        this.countPrice()

        this.render()
    }

    onNonCommercialCheckBoxChange() {
        this.checkBoxCommercialValue = false
        this.checkBoxNonCommercialValue = true

        this.countPrice()

        this.render()
    }

    onSliderInput() {
        this.sliderValue = this.slider.value

        this.onCommercialCheckBoxChange()

        this.countPrice()

        this.render()
    }

    // disableSliderDivElements() {

    //     for (let i = 0, l = this.allSliderRowElements.length; i < l; ++i) {
    //         this.allSliderRowElements[i].readOnly = true;
    //         this.allSliderRowElements[i].disabled = true;
    //     }
    // }
    // enableSliderDivElements() {

    //     for (let i = 0, l = this.allSliderRowElements.length; i < l; ++i) {
    //         this.allSliderRowElements[i].readOnly = false;
    //         this.allSliderRowElements[i].disabled = false;
    //     }
    // }
}

const price = new Price()