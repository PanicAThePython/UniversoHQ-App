var searchCharacter = document.querySelector('#filter_table')

searchCharacter.addEventListener('input', function(){
    var characters = document.querySelectorAll('.character')
    var divisions = document.querySelectorAll(".division")

    if (this.value.length > 0){
        for (var i = 0; i < characters.length; i++){
            var character = characters[i]
            var division = divisions[i+1]
            console.log(character)
            var characterContent = character.textContent
            var expression = new RegExp(this.value, "i")
            if(!expression.test(characterContent)){
                character.classList.add("invisible")
                division.classList.add("invisible")
            }
            else{
                character.classList.remove("invisible")
                division.classList.remove("invisible")
            }
        }
    }
    else{
        for(var i = 0; i < characters.length; i++){
            var character = characters[i]
            var division = divisions[i+1]
            character.classList.remove("invisible")
            division.classList.remove("invisible")
        }
    }
})