function openWithFilter(){
    console.log(window.location.href.split("#"))
    let id = window.location.href.split("#")[1]
    filterProfile(id)
}