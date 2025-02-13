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
        box.style.opacity = 1;
    });
    changeColor();
}

function changeColor(){
    const boxes = document.querySelectorAll('.box');
    const randomColors = document.querySelector('.randomColors');
    let toggle = false;
    randomColors.addEventListener('click', ()=>{
        if(toggle == false){
            toggle = true;
        }
        else{
            toggle == false;
        }
    });
    boxes.forEach(box =>{
        let shade = 0;
        box.addEventListener("mouseover",(e)=>{;
            if (toggle == true){
                shade += .1
                e.target.style.background = getRandom();
                e.target.style.opacity = shade;
                console.log(e.target);
            }
            else{
                shade += .1
                e.target.style.background = 'black';
                e.target.style.opacity = shade;
                console.log(e.target);
            }
        });
    });
}



function getRandom(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}