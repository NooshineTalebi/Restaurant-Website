window.addEventListener('load', function(){
    AOS.init();
});

const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');

document.onclick = function(e){
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle')
    {
        toggle.classList.remove('active');
        toggle.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    toggle.classList.toggle('active');
}
