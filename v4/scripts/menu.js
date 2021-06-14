function openMenu(){

    let menu = document.querySelector("#menu-list");
    $("#menu-user").text(`Olá, ${userSession.name}`);

    if (menu.classList.contains("invisible")){
        menu.classList.remove("invisible");
    }else{
        menu.classList.add("invisible");
    }
}

