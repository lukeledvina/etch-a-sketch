const container = document.querySelector("#container");

const button = document.querySelector("#clear");
// create sub container with 16 divs, append to container, repeat 16 times


//get user input, replace 16 with that
// divide 800 by the user input amount, set div width to that amount
function createGrid(userInput=16) {
    if(userInput > 100){
        userInput = 100;
    }
    for(let i = 0; i < userInput; i++) {
        let subContainer = document.createElement('div');
        subContainer.setAttribute('class', 'sub-container');
        subContainer.style.minHeight = `${800/ userInput}`
        for(let i = 0; i < userInput; i++) {
            let childDiv = document.createElement('div');
            childDiv.setAttribute('class', 'box');
            childDiv.style.width = `${800 / userInput}`
            
            subContainer.appendChild(childDiv);
    
        }
         
        container.appendChild(subContainer);
    }
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener("mouseover", () => box.style.backgroundColor = "black");
});
}
createGrid();



function resetContainerChildren(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


button.addEventListener('click', () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.style.backgroundColor = "white");
    resetContainerChildren(container);
    createGrid(parseInt(prompt("Enter a new number of rows for the grid:")));
})