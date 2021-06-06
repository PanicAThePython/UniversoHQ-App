

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
    const characters = character.getAll();
    characters.push(model);
    localStorage.setItem('characters', JSON.stringify(characters));
    return id;
}

character.remove = function(id) {
    const characters = character.getAll();
    const index = characters.findIndex(char => char.id == id);
    characters.splice(index, 1);
    localStorage.setItem('characters', JSON.stringify(characters));
}