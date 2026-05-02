const SQUARE_COUNT = 100;
const TIMER_SPEED = 16.6;
const SPEED = 5;
document.addEventListener('DOMContentLoaded', ()=>{
    const colorSquare = document.querySelector("#square");
    colorSquare.addEventListener('mouseover', ()=>{
        //alert("OMG YOU CLICKED ME");
        colorSquare.style.backgroundColor = getColor();
    });

    let box = document.querySelector("#box");

    for (let i = 0;i < SQUARE_COUNT; i++){
        //make the element but its not anytjing or on the page
        let square = document.createElement('img');
        //set attributes/properties of that element
        square.src = "laughing_man.jpg";
        square.alt = "Catch the Laughing Man!";
        square.className = "square"

        square.addEventListener('mouseover', ()=>{
            square.src = "Orochimaru.jpg";
        })
        square.addEventListener('mouseout', ()=>{
            square.src = "laughing_man.jpg";
        })

        box.appendChild(square);
    }
   Array.from(box.children).forEach((element)=>{
        const parent = element.parentElement;
        const maxX = parent.clientWidth - element.clientWidth;
        const maxY = parent.clientHeight - element.clientHeight;

        let dx = SPEED * (Math.random()*2-1); //This gives a number from -1 to 0.999999
        let dy = SPEED * (Math.random()*2-1);

        let x = parseInt(element.style.left) || 225;
        let y = parseInt(element.style.top) || 175;
        setInterval(()=>{

            if(x <= 0 || x >= maxX){
                dx *= -1;
                element.style.borderColor = getColor();
            }
            if(y <= 0 || y >= maxY){
                dy *= -1;
                element.style.borderColor = getColor();
            }

            x += dx;
            y += dy;

            element.style.left = x + "px";
            element.style.top = y + "px";
        }, TIMER_SPEED)
    });

});

function getColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}