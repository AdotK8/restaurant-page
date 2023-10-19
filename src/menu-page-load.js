//this function generates the menu page

function menuPageLoad (){
    const tab = document.getElementById("tab");
    const menuTab = document.createElement('div');
    menuTab.classList.add('menuTab')
    tab.appendChild(menuTab)

        for (let i=0; i < 4; i++) {
    const newDiv = document.createElement("div")
    newDiv.classList.add('menuCard');
    menuTab.appendChild(newDiv);
        }

    const menu1 = document.querySelector(".menuTab :nth-child(1)");
    const menu2 = document.querySelector(".menuTab :nth-child(2)");
    const menu3 = document.querySelector(".menuTab :nth-child(3)");
    const menu4 = document.querySelector(".menuTab :nth-child(4)");

    const pic1 = document.createElement('div');
    const pic2 = document.createElement('div');
    const pic3 = document.createElement('div');
    const pic4 = document.createElement('div');

    pic1.classList.add('menuPic');
    pic2.classList.add('menuPic');
    pic3.classList.add('menuPic');
    pic4.classList.add('menuPic');

    pic1.setAttribute('id', 'pic1')
    pic2.setAttribute('id', 'pic2')
    pic3.setAttribute('id', 'pic3')
    pic4.setAttribute('id', 'pic4')

    menu1.appendChild(pic1);
    menu2.appendChild(pic2);
    menu3.appendChild(pic3);
    menu4.appendChild(pic4);

    const title1 = document.createElement('h2');
    const title2 = document.createElement('h2');
    const title3 = document.createElement('h2');
    const title4 = document.createElement('h2');

    title1.classList.add('menuTitle');
    title2.classList.add('menuTitle');
    title3.classList.add('menuTitle');
    title4.classList.add('menuTitle');

    title1.innerHTML = "Salsiccia"
    title2.innerHTML = "Gamberi"
    title3.innerHTML = "Pepe"
    title4.innerHTML = "Disgustoso"

    menu1.appendChild(title1);
    menu2.appendChild(title2);
    menu3.appendChild(title3);
    menu4.appendChild(title4);

    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');
    const para4 = document.createElement('p');

    para1.classList.add('para');
    para2.classList.add('para');
    para3.classList.add('para');
    para4.classList.add('para');

    para1.innerHTML = "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    para2.innerHTML = "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
    para3.innerHTML = "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
    para4.innerHTML = "Tomato sauce, Bacon, Pineapple, Olives, Basil"

    menu1.appendChild(para1);
    menu2.appendChild(para2);
    menu3.appendChild(para3);
    menu4.appendChild(para4);

}

export default menuPageLoad