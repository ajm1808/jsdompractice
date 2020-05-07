const eKey=document.getElementsByClassName("key-description");

const codeD=document.getElementsByClassName("code-description");

const eWhich=document.getElementsByClassName("which-description");

const input=document.querySelector("input");




function keycode(){
    let key = event.keyCode;
    console.log(key);
    }

    // button.addEventListener('click', () => {
    //     let listItem = document.createElement('li');
    
    //     let list = document.getElementsByTagName('ul')[0];
    //     listItem.textContent = input.value;
        
    //     list.appendChild(listItem);
    
    //     input.value = '';
    // })
    
    // removeBtn.addEventListener('click', () => {
    //     let listItem = document.querySelector('li:last-child');
    //     let list = document.getElementsByTagName('ul')[0];
    
    //     list.removeChild(listItem);
    // })
    
    // /*New code below*/
    
    // document.addEventListener("click",(event)=>{
    //     console.log(event);
    //     console.log(event.target);
    // })
    
    // list.addEventListener("mouseover",()=>{
    //     if(event.target.tagName=="LI"){event.target.textContent=event.target.textContent.toUpperCase();}
    // })
    // list.addEventListener("mouseout",()=>{
    //     if(event.target.tagName=="LI"){event.target.textContent=event.target.textContent.toLowerCase();}
    // })
    
    // //have to add the if to the above - otherwise it removes the list functionality. It only applies changes to LI rather than Ul