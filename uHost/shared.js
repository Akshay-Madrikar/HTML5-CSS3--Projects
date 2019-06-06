
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNo = document.querySelector('.modal__actions button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(selectPlanButtons);

for(var i=0; i<selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click',function(){
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

backdrop.addEventListener('click',function(){
     mobileNav.style.display = 'none';
     if(modal){
     modal.style.display = 'none';}
     backdrop.style.display = 'none';
});

if(modalNo){
modalNo.addEventListener('click',function(){
    if(modal){
        modal.style.display = 'none';}
        backdrop.style.display = 'none';
});}

toggleButton.addEventListener('click',function(){
     mobileNav.style.display = 'block';
     backdrop.style.display = 'block'; 
});
