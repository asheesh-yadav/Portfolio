let menu = document.querySelector(".left-menue");


let f = 0;
menu.addEventListener('click', () => {
    let ul =document.querySelector("ul");
    if (f == 0) {
        ul.style.transform =  `translateX(0%)`;
        f = 1;
    }
     else {
    ul.style.transform =  `translateX(-200%)`;
    f=0;
     }
    
});




let inp = document.querySelectorAll('input , textarea');
inp.forEach((inpt) =>{
    inpt.addEventListener("keyup",()=>{
         inpt.style.backgroundImage = "none"
         inpt.style.backgroundColor = "#152032";
    });
});


// know more clicks
let model1 = document.querySelector("#modal1");
let model2 = document.querySelector("#modal2");
let model3 = document.querySelector("#modal3");
let model4 = document.querySelector("#modal4");
let model5 = document.querySelector("#modal5");

let know_more1 = document.querySelector("#know_more1");
let know_more2 = document.querySelector("#know_more2");
let know_more3 = document.querySelector("#know_more3");
let know_more4 = document.querySelector("#know_more4");
let know_more5 = document.querySelector("#know_more5");




know_more1.addEventListener('click',()=>{
    model1.classList.remove('hide'); 
    model1.classList.add('project_model'); 
 })

 know_more2.addEventListener('click',()=>{
    model2.classList.remove('hide'); 
    model2.classList.add('project_model'); 
 })

 know_more3.addEventListener('click',()=>{
    model3.classList.remove('hide'); 
    model3.classList.add('project_model'); 
 })

 know_more4.addEventListener('click',()=>{
    model4.classList.remove('hide'); 
    model4.classList.add('project_model'); 
 })


know_more5.addEventListener('click',()=>{
    model5.classList.remove('hide'); 
    model5.classList.add('project_model'); 
 })


let closeButtons = document.querySelectorAll(".close");
closeButtons.forEach((closeBtn) => {
    closeBtn.addEventListener('click', (event) => {
        let modal = event.target.closest('.project_model');
        if (modal) {
            modal.classList.add('hide');
            modal.classList.remove('project_model');
        }
    });
});



