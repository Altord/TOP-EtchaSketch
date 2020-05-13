// Modal operation
var modal = document.getElementById("myModal");
var btn = document.getElementById("inst");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





//The Grid/Game

const container = document.querySelector('#container');
let cell = document.getElementsByClassName("content");
let column = 16;
let row = 16;

createGrid(row,column);
artCell();
gridReset();
aestheticColor();
rainbowColor();
blackColor();
changeSize();





function gridReset(){
    let clearBtn = document.getElementById('clear');
    clearBtn.addEventListener('click',function(){
    container.innerHTML = '';
    createGrid(row,column);
    artCell();


    });
}

function rainbowColor(){
    let rainbowBtn = document.getElementById('rainbow_button');
    rainbowBtn.addEventListener('click',function(){
        for (let i = 0; i < cell.length; i++) {
            cell[i].onmouseover = function () {
                this.classList.add('rainbowCell'); //Changes the color to rainbowColor();
            }

        }
    })
}

function blackColor(){
    let blackBtn = document.getElementById('black_button');
    blackBtn.addEventListener('click', function(){

        for (let i = 0; i < cell.length; i++){
            cell[i].onmouseover = function(){
                this.classList.add('blackCell')
            }
        }
    })
}


function aestheticColor(){
    let aesetheticBtn = document.getElementById('vaporwave_button');
    aesetheticBtn.addEventListener('click', function(){

        for (let i = 0; i < cell.length; i++){
            cell[i].onmouseover = function(){
                this.classList.add('vpCell')
            }
        }
    })
}

function createGrid (row,column){ //creates with CSS a Grid sized 'row' x 'column'
    let cell = row*column;
    container.style.setProperty("--row-size",row);
    container.style.setProperty("--column-size",column);
    for (let total = 0; total<cell; total++ ){
        let creation = document.createElement("div");
        creation.setAttribute("class","content");
        container.appendChild(creation);
    }
}

function changeSize(){
    let change = document.getElementById('resize');
    change.addEventListener('click',function(){
        let row = document.getElementById('value1').value;
        let column = document.getElementById('value2').value;
        container.innerHTML = '';
        createGrid(row,column);
        artCell();

    })
}



function artCell(){

    for(let i = 0; i<cell.length; i++){

        cell[i].onmouseover= function(){
           this.classList.add('blackCell'); //Covers the current content with playing
        }
    }
}



