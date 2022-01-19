const container = document.querySelector("#container");

// create sub container with 16 divs, append to container, repeat 16 times

for(let i = 0; i < 16; i++) {
    let subContainer = document.createElement('div');
    subContainer.setAttribute('class', 'sub-container');
    for(let i = 0; i < 16; i++) {
        let childDiv = document.createElement('div');
        childDiv.setAttribute('class', 'box');
        subContainer.appendChild(childDiv);

    }
    container.appendChild(subContainer);
}

const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {

    box.addEventListener("mouseover", () => box.style.backgroundColor = "black");
});