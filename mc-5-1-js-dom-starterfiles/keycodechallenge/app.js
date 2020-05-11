

    const key1 = document.getElementById("key1");
const key2 = document.getElementById("key2");
const key3 = document.getElementById("key3");
const input = document.getElementById("keycode");

document.querySelector(".wrap").style.  visibility="hidden";



document.addEventListener("keydown",(event) => {
    key1.textContent=event.key;
    key2.textContent=event.code;
    key3.textContent=event.which;
    input.textContent=(`This key code is ${event.keyCode}`);
    document.querySelector(".wrap").style.visibility="hidden";
});

