
/* Resaltar la opcion de menu que se escoja */
const menuprincipal = document.querySelectorAll('.menu-boton');

menuprincipal.forEach(function(item){ 
  item.addEventListener('mouseover',function(e){
    const actualItem = document.querySelector('.active');
    actualItem.classList.remove('active');
    e.target.classList.add('active');
  });
});

/* Boton de ir arriba */
const btn_scrolltop = document.getElementById("btn_scrolltop")
    btn_scrolltop.addEventListener('click',() => {
      window.scrollTo(0,0)
})

  window.onscroll = () => {
    add_btn_scrolltop()
  }

const add_btn_scrolltop = () => {
  if (window.scrollY < 300) {
    btn_scrolltop.classList.remove("btn-scrolltop-on")
  } else {
    btn_scrolltop.classList.add("btn-scrolltop-on")
  }
}