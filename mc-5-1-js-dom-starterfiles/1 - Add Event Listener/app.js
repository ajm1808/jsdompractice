const myHeading = document.getElementById("heading");
//myHeading is a variable referring to the element in the document with ID "heading"
myHeading.addEventListener("click",()=>{
    myHeading.style.color = "purple";
});

//to that variable, adding addEventListener so that when it clicks it runs the function - this changes the color to purple when clicked.