var searchCharacter = document.querySelector('#filter_table')

searchCharacter.addEventListener('input', function(){
    var characters = document.querySelectorAll('.character')

    if (this.value.length > 0){
        for (var i = 0; i < characters.length; i++){
            var character = characters[i]
            console.log(character)
            var characterContent = character.textContent
            var expression = new RegExp(this.value, "i")
            if(!expression.test(characterContent)){
                character.classList.add("invisible")
                character.classList.remove("division")
            }
            else{
                character.classList.remove("invisible")
                //character.classList.add("division")
            }
        }
    }
    else{
        for(var i = 0; i < characters.length; i++){
            var character = characters[i]
            character.classList.remove("invisible")
            //character.classList.add("division")
        }
    }
})