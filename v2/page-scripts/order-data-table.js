function orderBy(){
    let selectValue = document.querySelector("#order_by").value
    switch(selectValue){
        case "0":
            let ordedByEgo = orderByEgo()
            clearTable()
            replaceDataTable(ordedByEgo)
            break
        case "1":
            let ordedByEgoReverse = orderByEgo().reverse()
            clearTable()
            replaceDataTable(ordedByEgoReverse)
            break
        case "2":
            let ordedByName = orderByName()
            clearTable()
            replaceDataTable(ordedByName)
            break
        case "3":
            let ordedByNameReverse = orderByName().reverse()
            clearTable()
            replaceDataTable(ordedByNameReverse)
            break
        default:
            break
    }
}

function orderByName(){
    let characters = document.querySelectorAll(".character")
    let counter = 0
    let ordedCharacters = []

    for (var i = 0; i < characters.length; i++){
        if (ordedCharacters.length == 0){
            ordedCharacters[counter] = characters[i]
        }
        else{
            if (characters[i].innerText.split("\t")[0] < ordedCharacters[counter].innerText.split("\t")[0]){
                ordedCharacters[counter+1] = ordedCharacters[counter]
                ordedCharacters[counter] = characters[i]
                counter++
            }
            else{
                ordedCharacters[counter+1] = characters[i]
                counter++
            }  
        }
    }

    return ordedCharacters;
}

function orderByEgo(){
    let characters = document.querySelectorAll(".character")
    let counter = 0
    let ordedCharacters = []

    for (var i = 0; i < characters.length; i++){
        if (ordedCharacters.length == 0){
            ordedCharacters[counter] = characters[i]
        }
        else{
            if (characters[i].innerText.split("\t")[1] < ordedCharacters[counter].innerText.split("\t")[1]){
                ordedCharacters[counter+1] = ordedCharacters[counter]
                ordedCharacters[counter] = characters[i]
                counter++
            }
            else{
                ordedCharacters[counter+1] = characters[i]
                counter++
            }  
        }
    }

    return ordedCharacters;
}

function clearTable(){
    let rows = document.querySelectorAll(".row")
    
    for (var i = 0; i < rows.length; i++){
        rows[i].remove()
    }
}

function replaceDataTable(ordedByName){
    let characters = document.querySelector("#listagem-body")

    for (var i = 0; i < ordedByName.length; i++){
        characters.append(ordedByName[i])

        let tr = document.createElement('tr')
        let td = document.createElement('td')
        let div = document.createElement('div')

        div.classList.add('division')
        td.setAttribute("colspan", "6")
        td.append(div)
        tr.append(td)
        tr.classList.add('row')

        characters.appendChild(tr)
    }
}