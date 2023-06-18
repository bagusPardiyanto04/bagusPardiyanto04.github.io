// toggle class actife
// hamburger navbar
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');
hamburger.onclick=(f) =>{
    navbarNav.classList.toggle('active');
    f.preventDefault();
}
document.addEventListener('click',function(e){
    if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');

    }
});
// ketika search ditekan search muncul
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const sb = document.querySelector('#search')
sb.onclick=(f)=>{
    searchForm.classList.toggle('active');
    searchBox.focus();
    f.preventDefault();
    searchBox.value=''
}
document.addEventListener('click',function(e){
    if(!sb.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
});
// shoping card
const shopingCard = document.querySelector('.shoping-card');
const shoping = document.querySelector('#shoping-cart');
// const sb = document.querySelector('#search')
shoping.onclick=(f) =>{
    shopingCard.classList.toggle('active');
    f.preventDefault();
}
document.addEventListener('click',function(e){
    if(!shoping.contains(e.target) && !shopingCard.contains(e.target)){
        shopingCard.classList.remove('active');
    }
});

// navbar toggle selasai

// modal
const itemDetailModal = document.querySelector('#item-detail-modal')
const itemDetailButton = document.querySelectorAll('.item-detail-buton')
const tombolClose = document.querySelector('.close-icon')

itemDetailButton.forEach((btn) => {
    btn.onclick = (e) => {
    itemDetailModal.style.display='flex';
    e.preventDefault();

}
})
tombolClose.onclick=(e)=>{
    itemDetailModal.style.display='none'
    e.preventDefault();
}
window.onclick = (e) => {
    if(e.target === itemDetailModal ){
        itemDetailModal.style.display='none'
        e.preventDefault();
    }
}