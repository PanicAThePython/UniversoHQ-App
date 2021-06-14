


function signIn() {
    console.log("hello");
    const email = $("#email").val();
    const password = $("#password").val();

    const userFound = user.findByEmailAndPassword(email, password);
    if (!userFound) {
        alert("Usuário ou senha incorretos");
        return;
    }

    const sessionStr = session.create(userFound);
    document.cookie = `session=${sessionStr}; path=/`;
    redirectToPage("./pages/data-table.html");
    
}