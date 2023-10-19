function contactPageLoad() {
    const tab = document.getElementById("tab")
    const contactTab = document.createElement('div')
    contactTab.classList.add('contactTab')
    tab.appendChild(contactTab)

    const phone = document.createElement('div')
    const address = document.createElement('div')
    const map = document.createElement('div')

    phone.classList.add('contactText')
    address.classList.add('contactText')
    map.setAttribute('id', 'map')

    phone.innerHTML = '📞 123 456 789'
    address. innerHTML = "🏠 Hollywood Boulevard 42, Los Angeles, USA"

    contactTab.appendChild(phone)
    contactTab.appendChild(address)
    contactTab.appendChild(map)





    
}

export default contactPageLoad