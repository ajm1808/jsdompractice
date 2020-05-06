const listItems=document.querySelectorAll("li:nth-child(even)");

//document.querySelectorAll("li") - this will list all items in li in an array (displaying amount of items)

//document.querySelector("li") - will return the first item.

//document.querySelector("#heading") - id selector

//document.querySelector (".list-parent") - class selector

console.log(listItems);
console.log(listItems.length);



for (let i=0;i<listItems.length;i++){
    listItems[i].style.color="lightgreen";
}