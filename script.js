let share=document.querySelector('#icon-share');
let menu=document.querySelector('.share-icons');
share.onmouseover=function(){
  menu.style.opacity='1';
  menu.style.visibility='visible';
};

share.onmouseout=function(){
  setTimeout(function(){
    menu.style.opacity='0';
    menu.style.visibility='hidden';
  },500);
}
