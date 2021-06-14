$(document).ready(function() {
    const paramValue = getUrlParameter("charId");
    if (paramValue != null) {
        $("#registerOrUpdateBtn").text("Editar");
        $("#charId").val(paramValue);
        loadChar(paramValue);
    }  
});

function loadChar(charId) {
    const char = character.findById(charId);
    if (!char) {
        alert("ID de personagem inválido");
        return;
    }

    $("#nome").val(char.nome);
    $("#ego").val(char.ego);
    $("#poderes").val(char.poderes);
    $(`input[name=franquia][value=${char.franquia}]`).prop('checked', true);
    $(`input[name=perfil][value=${char.perfil}]`).prop('checked', true);
}

function registerOrUpdate() {
    const charId = $("#charId").val();

    if (charId != "")
        updateChar(charId);
    else
        createChar();
}

function isValidCharacter(char) {
    if ((char.nome == undefined) || (char.nome.length <= 0))
        return { success: false, message: "Nome inválido" };
    
    if ((char.ego == undefined) || (char.ego.length <= 0))
        return { success: false, message: "Ego inválido" };

    if ((char.franquia == undefined) || (char.franquia.length <= 0))
        return { success: false, message: "Franquia inválida" };

    if ((char.perfil == undefined) || (char.perfil.length <= 0))
        return { sucess: false, message: "Perfil inválido" };

    if ((char.poderes == undefined) || (char.poderes.length <= 0))
        return { success: false, message: "Poderes inválidos" };

    return { success: true };
}

function clearFields() {
    $("#nome").val("");
    $("#ego").val("");
    $("#poderes").val("");
}


function createChar() {
    const nome = $("#nome").val();
    const ego = $("#ego").val();
    const franquia = $("input[name=franquia]:checked").val();
    const perfil = $("input[name=perfil]:checked").val();
    const poderes = $("#poderes").val();

    const char = {
        nome,
        ego,
        franquia,
        perfil,
        poderes
    };

    const isValidCharResponse = isValidCharacter(char);
    if (!isValidCharResponse.success) {
        alert(isValidCharResponse.message);
        return;
    }
    const charId = character.create(char);
    clearFields();
    alert(character.findIndexById(charId));
    alert(`Personagem registrado com sucesso\nID: ${charId}`);
}


function updateChar(charId) {
    const nome = $("#nome").val();
    const ego = $("#ego").val();
    const franquia = $("input[name=franquia]:checked").val();
    const perfil = $("input[name=perfil]:checked").val();
    const poderes = $("#poderes").val();

    const char = {
        id: charId,
        nome,
        ego,
        franquia,
        perfil,
        poderes
    };

    const isValidCharResponse = isValidCharacter(char);
    if (!isValidCharResponse.success) {
        alert(isValidCharResponse.message);
        return;
    }

    character.update(char);
    alert(`Personagem editado com sucesso\nID: ${charId}`);
}