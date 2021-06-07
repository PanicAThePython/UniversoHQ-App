function filterProfile(id = null){

    let profile;
    let selectInput = document.getElementById('profiles') || {}

    let herois = document.querySelector("#Heroi");
    let viloes = document.querySelector("#Vilao");
    let antiherois = document.querySelector("#Anti-heroi");
    let instruct = document.querySelector("#instruction");

    const MenuMap = {
        Heroi: "./character-profile-table.html#Heroi",
        "Anti-heroi" : "./character-profile-table.html#Anti-heroi",
        Vilao: "./character-profile-table.html#Vilao"
    }
    
    if(!herois || !viloes || !antiherois){
        window.location.href= MenuMap[id]
    }

    if (id == null){
        profile = document.querySelector("#profiles").value || "";
    }
    else{
        profile = id
        selectInput.value = id
    }

    if (profile == "Heroi"){
        herois.classList.remove("invisible");
        antiherois.classList.add("invisible");
        viloes.classList.add("invisible");
        instruct.classList.add("invisible");
    }
    else if (profile == "Vilao" || profile == "viloes"){
        viloes.classList.remove("invisible");
        herois.classList.add("invisible");
        antiherois.classList.add("invisible");
        instruct.classList.add("invisible");
    }
    else if (profile == "Anti-heroi" || profile == "antiherois"){
        antiherois.classList.remove("invisible");
        herois.classList.add("invisible");
        viloes.classList.add("invisible");
        instruct.classList.add("invisible");
    }
}