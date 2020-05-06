const image=document.getElementById("cat");

const button=document.getElementById("submit");

button.addEventListener("click",()=>{
    if(image.style.display=="none"){
        image.style.display="block";
        button.textContent="show"
    }
    else {
        image.style.display="none";
        button.textContent="show"
    }
})

// image style display "none" makes the image disappear. "block" makes it appear