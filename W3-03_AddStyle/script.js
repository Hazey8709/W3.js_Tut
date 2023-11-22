//! Add Style By ID:
//s Get a reference to the HTML element you want to listen for clicks on
const addById = document.getElementById("d1_BtnAdd");
const removeById = document.getElementById("d1_BtnRemove");

//s Define the callback addStyle()
function addStyle() {
    w3.addStyle("#div-1", "color", "blue");

    //s Log:
    console.log('addStyle(): Clicked');
}

//s Define the callback removeStyle()
function removeStyle() {
    w3.addStyle("#div-1", "color", "black");

    //s Log:
    console.log('removeStyle(): Clicked');
}

//s Add the event listener to the button
addById.addEventListener("click", addStyle);
removeById.addEventListener("click", removeStyle);
