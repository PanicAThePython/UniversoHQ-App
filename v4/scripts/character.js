

const character = {};

character.getAll = function() {
    const characters = localStorage.getItem('characters');

    if ((characters == null) || (characters == undefined))
        return [];

    return JSON.parse(characters);
}


character.findById = function(id) {
    const characters = character.getAll();
    return characters.filter(char => char.id == id)[0];
}

character.findByUserEmail = function(email) {
    const characters = character.getAll();
    return characters.filter(char => char.userEmail == email);
}

character.generateValidId = function() {
    let id = MD5(makeId());

    while (character.findById(id) != null) {
        id = MD5(makeId());
    }
    return id;
}

character.create = function(model) {
    const id = character.generateValidId();
    model.id = id;
    model.userEmail = userSession.email;
    const characters = character.getAll();
    characters.push(model);
    localStorage.setItem('characters', JSON.stringify(characters));
    return id;
}

character.findIndexById = function(id) {
    const characters = character.getAll();
    return characters.findIndex(char => char.id == id);
}

character.update = function(model) {
    const characters = character.getAll();
    const index = character.findIndexById(model.id);
    characters[index].nome = model.nome;
    characters[index].ego = model.ego;
    characters[index].franquia = model.franquia;
    characters[index].perfil = model.perfil;
    characters[index].poderes = model.poderes;
    localStorage.setItem('characters', JSON.stringify(characters));
}

character.remove = function(id) {
    const characters = character.getAll();
    const index = character.findIndexById(id);
    characters.splice(index, 1);
    localStorage.setItem('characters', JSON.stringify(characters));
}

character.getByPage = function(page, profileName = null,limit = 20) {
    const toSkip = page * limit;
    let buffer = [];
    const characters = character.findByUserEmail(userSession.email);
    const newLimit = limit * (page == 0 ? 1 : page * 2);
    for (let i = toSkip; i < newLimit; i++) {
        const currentChar = characters[i];
        if (currentChar == undefined) {
            break;
        }
        
        buffer.push(characters[i]);
    }
    if (profileName) {
        buffer = buffer.filter(char => char.perfil == profileName);
    }
    return buffer;
}

character.findByProfile = function(profileName) {
    return character.findByUserEmail(userSession.email).filter(char => char.perfil == profileName);
}