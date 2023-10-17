const content = document.getElementById("content")

function initialPageTop () {
    //creating restaurant title and appending 
    const title = document.createElement("div")
    title.classList.add("title")
    title.innerHTML = "Sal's Famous Pizzeria"
    content.appendChild(title)

    //creating menubar and appending to content div 
    const menuBar = document.createElement("div")
    menuBar.classList.add("menuBar")
    content.appendChild(menuBar)

    //creating all menu bar options and appending to menu bar div 
    const home = document.createElement("div")
    const menu = document.createElement("div")
    const contact = document.createElement("div")

    home.classList.add("home", "menuItem")
    menu.classList.add("menu", "menuItem")
    contact.classList.add("contact", "menuItem")

    home.innerHTML = "Home"
    menu.innerHTML = "Menu"
    contact.innerHTML = "Contact"

    menuBar.appendChild(home)
    menuBar.appendChild(menu)
    menuBar.appendChild(contact)

    //creating new div to display each tab
    const tab = document.createElement("div")
    tab.setAttribute('id', 'tabContainer')
    content.appendChild(tab) 

    const tabContent = document.createElement("div")
    tabContent.setAttribute('id', 'tab')
    tab.appendChild(tabContent)
}

export default initialPageTop