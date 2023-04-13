window.addEventListener('load', function(){
    AOS.init();
});

const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');

document.onclick = function(e){
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle')
    {
        toggle.classList.remove('active');
        sidebar.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}



const menuTeam = document.querySelector(".team-item");
const teamSection = document.querySelector(".team");
menuTeam.addEventListener('click' , () => {
    teamSection.scrollIntoView();
})



const LunchSection = document.querySelector(".lunch-section");
const [...menuItems] = document.querySelectorAll(".menu-item");
console.log(menuItems);
LunchSection.addEventListener("click" , ()=>{
    menuItems.forEach((menu) => {
        if(menu.classList.contains("menu-lunch")){
            menu.classList.add("active");
        }else{
            menu.classList.add("hidden")
        }
    })
})



