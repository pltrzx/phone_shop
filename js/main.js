'use strict'

const body = document.body

class PhoneDiv {
    constructor( phone ) {
        this.brand = phone.brand
        this.model = phone.model
        this.screen = phone.screen
        this.camera = phone.camera
        this.battery = phone.battery
        this.RAM = phone.RAM
        this.ROM = phone.ROM
        this.image = phone.image
        this.price = phone.price

        this.div = document.createElement('div')
        this.div.className = 'phone-card'
        this.fillCard()
    }

    fillCard() {
        body.append( this.div )
    }
}

let phoneDivesList = []

PRODUCTS.forEach( addPhone )

function addPhone( phone ) {
    phoneDivesList.push( new PhoneDiv(phone) )
}