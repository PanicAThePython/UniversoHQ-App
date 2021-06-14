

let heroPage = 0;
let villainPage = 0;
let antiHeroesPage = 0;

let tableHeroes = null;
let tableVilains = null;
let tableAntiHeroes = null;

$(document).ready(function() {
    tableHeroes = $("#listagem-body-heroes");
    tableVilains = $("#listagem-body-vilains");
    tableAntiHeroes = $("#listagem-body-anti-heroes");

    loadTable(tableHeroes, character.getByPage(heroPage, "Herói"));
    loadTable(tableVilains, character.getByPage(villainPage, "Vilão"));
    loadTable(tableAntiHeroes, character.getByPage(antiHeroesPage, "Anti-herói"));
});


function decrementFunc(targetVar) {
    if (targetVar <= 0)
        return 0;
    
    return targetVar - 1;
}

function incrementFunc(targetVar) {
    return targetVar + 1;
}

function decrementPage(str) {
    switch (str) {
        case 'heroes':
            heroPage = decrementFunc(heroPage);
            $("#heroes-page").text(heroPage + 1);
            loadTable(tableHeroes, character.getByPage(heroPage, "Herói"));
            break;
        case 'anti-heroes':
            antiHeroesPage = decrementFunc(antiHeroesPage);
            $("#anti-heroes-page").text(antiHeroesPage + 1);
            loadTable(tableAntiHeroes, character.getByPage(antiHeroesPage, "Anti-herói"));
            break;
        case 'villain':
            villainPage = decrementFunc(villainPage);
            $("#villain-page").text(villainPage + 1);
            loadTable(tableVilains, character.getByPage(villainPage, "Vilão"));
            break;
    }
}


function incrementPage(str) {
    switch (str) {
        case 'heroes':
            heroPage = incrementFunc(heroPage);
            $("#heroes-page").text(heroPage + 1);
            loadTable(tableHeroes, character.getByPage(heroPage, "Herói"));
            break;
        case 'anti-heroes':
            antiHeroesPage = incrementFunc(antiHeroesPage);
            $("#anti-heroes-page").text(antiHeroesPage + 1);
            loadTable(tableAntiHeroes, character.getByPage(antiHeroesPage, "Anti-herói"));
            break;
        case 'villain':
            villainPage = incrementFunc(villainPage);
            $("#villain-page").text(villainPage + 1);
            loadTable(tableVilains, character.getByPage(villainPage, "Vilão"));
            break;
    }
}


function loadTable(table, chars) {
    table.empty();

    chars.forEach((char, index) => {
        table.append(`<tr class="character row">
        <td class="character-name">${char.nome}</td>
        <td>${char.ego}</td>
        <td>${char.franquia}</td>
        <td>${char.perfil}</td>
        <td>${char.poderes}</td>
        <td><button type="button" name="updateCharacter${char.id}" class='update-btn' id="updateCharacter${char.id}" onClick="updateCharacter('${char.id}')" ><img src="../images/edit.png" alt="editar"></button><button type="button" class='delete-btn' name="deleteCharacter${char.id}" id="deleteCharacter${char.id}" onClick="deleteCharacter('${char.id}')"><img src="../images/trash.png" alt="deletar"></button></td>
    </tr>`);

    });
}

function updateCharacter(charId) {
    redirectToPage(`/pages/character-register.html?charId=${charId}`);
}

function deleteCharacter(charId) {
    character.remove(charId);
    loadTable(tableHeroes, character.getByPage(heroPage, "Herói"));
    loadTable(tableVilains, character.getByPage(villainPage, "Vilão"));
    loadTable(tableAntiHeroes, character.getByPage(antiHeroesPage, "Anti-herói"));
}