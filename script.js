const container = document.querySelector(".container");

let boxes = 16;
function createGrid(boxes){
    boxSize = 480/boxes;
    for(let i = 0; i < boxes*boxes ; i++){
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        container.appendChild(box);
    }
    changeColor();
}
createGrid(boxes);
const changeSizeBtn = document.querySelector(".changeSize");

changeSizeBtn.addEventListener("click", () =>{
    size = window.prompt("Enter new Size 1 - 100");
    size *= 1;
    console.log(Number.isInteger(size));
    if(1 <= size && size <= 100 && size != null && Number.isInteger(size)){
        boxes = size;
        deleteBoxes();
        createGrid(boxes);
        changeColor();
    }
    else{
        alert("enter a valid size");
    }
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener("click", () =>{
    clearBoxes();
});

function deleteBoxes(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box =>{
        box.remove();
    });
}

function clearBoxes(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box =>{
        box.style.background = "white";
    });
    changeColor();
}

function changeColor(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box =>{
        box.addEventListener("mouseover",()=>{
            console.log("hovering");
            box.style.background = 'black';
        });

    });
}
