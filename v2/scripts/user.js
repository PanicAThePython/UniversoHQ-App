const user = {}

user.getAll = function() {
    const users = localStorage.getItem("users");

    if ((users == undefined) || (users == null))
        return [];

    return JSON.parse(users);
}

user.findByEmail = function(email) {
    const users = user.getAll();
    return users.filter(user => user.email == email)[0];
}

user.findByEmailAndPassword = function(email, password) {
    const userFound = user.findByEmail(email);
    if (!userFound)
        return null;
    
    if (MD5(password) == userFound.password)
        return userFound;
    else
        return null;
}

user.create = function(obj) {
    let userFound = user.findByEmail(obj.email);
    if (userFound) {
        return {
            success: false,
            message: "Email already exists"
        }
    }
    if ((obj.password == null) || (obj.password == "")) {
        return {
            success: false, 
            message: "Password can't be empty"
        }
    }
    const allUsers = user.getAll();
    obj = {...obj, password: MD5(obj.password)};
    allUsers.push(obj);
    localStorage.setItem("users", JSON.stringify(allUsers));
    return {
        success: true,
        message: "User has been created"
    }
}



