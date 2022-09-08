// Your code here

const block = document.getElementById('dodger');
block.style.backgroundColor = 'red';

document.addEventListener('keydown', (event)=>{
    if(event.key === 'ArrowLeft'){
       moveDodgerLeft();
        
    }
    else if(event.key === "ArrowRight"){
        moveDodgerRight();
        
    }
   

});
function moveDodgerLeft(){
    const leftPos = block.style.left.replace("px","");
    const left = parseInt(leftPos,10);
    if(left>0){
        block.style.left = `${left-1}px`;
    }
}

function moveDodgerRight(){
    const rightPos = block.style.left.replace("px","");
    const right = parseInt(rightPos,10);
    if(right<360){
        block.style.left = `${right+1}px`;
    }
}

