const hamMenu = document.querySelectorAll(".ham-menu");
const offScreen = document.querySelectorAll(".off-screen-menu");

hamMenu.forEach((hamMenu,index) =>{
    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        offScreen[index].classList.toggle("active");
    });
});
