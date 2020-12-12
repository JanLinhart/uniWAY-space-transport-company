const navSlide=()=>{
    const burger=document.querySelector('nav .menu')
    const nav=document.querySelector('nav .nav-links');

     burger.addEventListener('click', ()=>{
         nav.classList.toggle("nav-active")
     })


}
navSlide();