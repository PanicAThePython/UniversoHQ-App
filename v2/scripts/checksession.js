

$(document).ready(function() {
    const sessionFound = session.findBySession(getCookie("session"));
    if (!sessionFound) {
        alert("You need to be authenticated");
        redirectToPage("../index.html");
    }
});