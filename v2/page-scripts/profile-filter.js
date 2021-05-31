function filterProfile(id = null){

    let profile;
    if (id == null){
        profile = document.querySelector("#profiles").value;
    }
    else{
        // console.log(document.querySelector("#profiles").getElementsByClassName(id))
        // document.querySelector("#profiles").value = document.querySelector("#profiles").getElementsByClassName(id)
        profile = id
    }
    
    let herois = document.querySelector("#herois");
    let viloes = document.querySelector("#viloes");
    let antiherois = document.querySelector("#antiherois");
    let instruct = document.querySelector("#instruction");

    console.log(profile)

    if (profile == "Heroi"){
        herois.classList.remove("invisible");
        antiherois.classList.add("invisible");
        viloes.classList.add("invisible");
        instruct.classList.add("invisible");
        //document.querySelector("#profiles").onselect = document.querySelector("#profiles .Heroi").outerText
    }
    else if (profile == "Vilao"){
        viloes.classList.remove("invisible");
        herois.classList.add("invisible");
        antiherois.classList.add("invisible");
        instruct.classList.add("invisible");
    }
    else if (profile == "Anti-heroi"){
        antiherois.classList.remove("invisible");
        herois.classList.add("invisible");
        viloes.classList.add("invisible");
        instruct.classList.add("invisible");
    }
}