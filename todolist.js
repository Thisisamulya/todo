let i=0
const input = document.querySelector("#enter")
const form = document.querySelector("#todooform")
const list = document.querySelector("#todos")
form.addEventListener("submit",function(e){
    e.preventDefault();
    if (i>=5){
       return 
    }
    let newValue= input.value;
    let li=document.createElement("LI");
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "cbid";
    li.style.border='1px solid white';
    li.style.borderRadius="15px"
    li.style.backdropFilter="blur(10px)"
    li.style.padding="12px 7px 12px 5px"
    li.style.display="flex";
    li.style.flexDirection="rowreverse";
    li.style.fontSize="24px"
    li.append(checkbox)
    li.append(newValue);
    list.append(li);
    list.style.padding="2px 7px 3px 7px"
    input.value="";
    i++
})

