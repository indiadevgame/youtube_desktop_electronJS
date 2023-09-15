let menu_bar= document.querySelector(".res_menu_bar");
let side_menu = document.querySelector(".yt_slidebar_menu");

menu_bar.addEventListener("click",()=>{
    side_menu.classList.toggle("toggle_side_bar_active_display_show");
})