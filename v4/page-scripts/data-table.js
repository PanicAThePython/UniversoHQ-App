
let page = 0;

$(document).ready(function() {
    loadTable(character.getByPage(page));
});

function decrementPage() {
    if (page == 0) {
        alert("Não é possível decrementar");
        return;
    }
    page--;
    $("#pagination-number").text(page + 1);
    loadTable(character.getByPage(page));
}

function incrementPage() {
    page++;
    $("#pagination-number").text(page + 1);
    loadTable(character.getByPage(page));
}

function loadTable(chars) {
    $("#listagem-body").empty();

    chars.forEach((char, index) => {
        $("#listagem-body").append(`<tr class="character row">
        <td class="character-name">${char.nome}</td>
        <td>${char.ego}</td>
        <td>${char.franquia}</td>
        <td>${char.perfil}</td>
        <td>${char.poderes}</td>
        <td><button type="button" name="updateCharacter${index}" class='update-btn' id="updateCharacter${index}" onClick="updateCharacter('${char.id}')" ><img src="../images/edit.png" alt="editar"></button><button type="button" class='delete-btn' name="deleteCharacter${index}" id="deleteCharacter${index}" onClick="deleteCharacter('${char.id}')"><img src="../images/trash.png" alt="deletar"></button></td>
    </tr>`);

    });
}

function updateCharacter(charId) {
    redirectToPage(`/pages/character-register.html?charId=${charId}`);
}

function deleteCharacter(charId) {
    character.remove(charId);
    loadTable(character.getByPage(page));
}