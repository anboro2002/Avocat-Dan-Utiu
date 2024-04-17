// hamburger menu pt mobile si tablet
const hamMenu = document.querySelectorAll(".ham-menu");
const offScreen = document.querySelectorAll(".off-screen-menu");

hamMenu.forEach((hamMenu,index) =>{
    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        offScreen[index].classList.toggle("active");
    });
});

// dropdown menu pt servicii in desktop

const dropDownToggle = document.querySelector(".dropdown-toggle");
const dropDownMenu = document.querySelector(".dropdown-menu");

// deschide meniul la hover
    dropDownToggle.addEventListener("mouseenter", () =>{
        dropDownToggle.classList.toggle("show");
        dropDownMenu.classList.toggle("show");
    });



// inchide meniul la click in afara meniului
    document.body.addEventListener("click", (event) => {
        if(!dropDownMenu.contains(event.target)){
            dropDownMenu.classList.remove("show");
        }
    });