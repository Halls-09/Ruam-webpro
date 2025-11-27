function onclick(){
    console.log('clicked');
    this.style.background='lightblue';
}     
const baby = document.querySelector('.Inbox');
baby.addEventListener('click', onclick);
const mom = document.querySelector('.Outbox');
mom.addEventListener('click', onclick);

function onreset(){
    const box1 = document.querySelector('.Inbox');
    const box2 = document.querySelector('.Outbox');
    box1.style.background='white';
    box2.style.background='lightpink';
    console.log('reseted');
}
const reset = document.querySelector('.reset');
reset.addEventListener('click', onreset);