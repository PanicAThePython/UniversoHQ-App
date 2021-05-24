function filterProfile(){

    let profile = document.querySelector("#profiles");
    let herois = document.querySelector("#herois");
    let viloes = document.querySelector("#viloes");
    let antiherois = document.querySelector("#antiherois");
    let instruct = document.querySelector("#instruction");

    if (profile.value == "Herói"){
        herois.classList.remove("invisible");
        antiherois.classList.add("invisible");
        viloes.classList.add("invisible");
        instruct.classList.add("invisible");
    }
    else if (profile.value == "Vilão"){
        viloes.classList.remove("invisible");
        herois.classList.add("invisible");
        antiherois.classList.add("invisible");
        instruct.classList.add("invisible");
    }
    else if (profile.value == "Anti-herói"){
        antiherois.classList.remove("invisible");
        herois.classList.add("invisible");
        viloes.classList.add("invisible");
        instruct.classList.add("invisible");
    }
}