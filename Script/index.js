const dropdown_menu = document.querySelector('.dropdown-menu');
const burger = document.querySelector('.burger');
const btnIcon = document.querySelector('.burger i');
const likeBtn = document.querySelectorAll('#like-btn i');
const check = document.querySelectorAll('#check');
const card = document.querySelectorAll('#card');
const deleteBtn = document.querySelectorAll('#xmark');




burger.addEventListener("click", function(){
    dropdown_menu.classList.toggle('open');


    if(dropdown_menu.classList.contains('open')){
        btnIcon.classList.replace('fa-bars', 'fa-xmark');
        
    }
    else {
        btnIcon.classList.replace('fa-xmark', 'fa-bars');
    }
    // const isOpen = dropdown_menu.classList.contains('open');

    // btnIcon.classList = isOpen
    // ? 'fa-solid fa-xmark'
    // : 'fa-solid fa-bars'
    
});


likeBtn.forEach((element, index) => {
    element.addEventListener("click", () => {
        var countLikes;
        if(check[index].style.display != 'block'){
            check[index].style.display = 'block';
            likeBtn[index].style.color = '#0266FF';
            likeBtn[index].classList.replace('fa-regular', 'fa-solid');
            countLikes =+ 1;
            
        }
        else {
            check[index].style.display = 'none';
            likeBtn[index].style.color = '#C0BFCF';
        }
    }
)}
);


deleteBtn.forEach((element, index) => {
    element.addEventListener('click', () => {
        card[index].remove();
        alert(`You Sccessfully Delete!`);
    })
})