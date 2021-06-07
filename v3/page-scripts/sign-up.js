


function registerUser() {
    const name = $("#name").val();
    const email = $("#email").val();
    const password = $("#password").val();
    const confirmPassword = $("#confirm-password").val();

    if (password != confirmPassword) {
        alert("Password does not match");
        return;
    }

    const userObj = {
        name,
        email,
        password
    }

    const response = user.create(userObj);
    if (response.success) {
        alert(response.message);
        redirectToPage("../index.html");
    }
    else 
        alert(response.message);
}
