// this funtion loads the four elemends inside blank tab 

function homePageLoad () {
    
    const tab = document.getElementById("tab")

    const homeTab = document.createElement('div');
    homeTab.classList.add('homeTab')
    tab.appendChild(homeTab)

    const textOne = document.createElement('div')
    const textTwo = document.createElement('div')
    const pic = document.createElement('div')
    const textThree = document.createElement('div')

    textOne.classList.add("text")
    textTwo.classList.add("text")
    pic.classList.add('homePic')
    textThree.classList.add("text")

    textOne.innerHTML = "Best Pizza In Your Country"
    textTwo.innerHTML = "Made With Passion Since 1904"
    textThree.innerHTML = "Order Online or Visit Us"

    homeTab.appendChild(textOne);
    homeTab.appendChild(textTwo);
    homeTab.appendChild(pic);
    homeTab.appendChild(textThree);

}
export default homePageLoad