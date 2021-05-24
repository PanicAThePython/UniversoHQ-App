function openMenu(){

    let menu = document.querySelector("#menu-list");

    if (menu.classList.contains("invisible")){
        menu.classList.remove("invisible");
    }else{
        menu.classList.add("invisible");
    }
}