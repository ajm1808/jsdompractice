const list=document.getElementsByTagName("li");

const code=document.getElementsByClassName("not-orange");


// list.length; //gives amount of items in list
// list[0];//first item
// list[3];//fourth item
// list[0].style.color="red";//first item change font to red

console.log(list.length)


for(i=0;i<list.length;i++){
    list[i].style.color="orange"
}

//changes all list items to orange


for(i=0;i<code.length;i++){
    code[i].style.color="red"
}

//changes code (not orange) items to red