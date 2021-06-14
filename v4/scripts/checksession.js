
let userSession = null;

$(document).ready(function() {
    userSession = session.findBySession(getCookie("session"));
    if (!userSession) {
        alert("Você precisa estar autenticado para acessar esta área");
        redirectToPage("../index.html");
    }
});