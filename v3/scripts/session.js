

const session = {};

session.getAll = function() {
    const sessions = localStorage.getItem("sessions");

    if ((sessions == undefined) || (sessions == null))
        return [];

    return JSON.parse(sessions);
}

session.findBySession = function(sessionStr) {
    const sessions = session.getAll();
    return sessions.filter(session => session.session == sessionStr)[0];
}

session.findByEmail = function(email) {
    const sessions = session.getAll();
    return sessions.filter(session => session.email == email)[0];
}

session.generateValid = function() {
    let sessionStr = MD5(makeId());
    while (session.findBySession(sessionStr)) {
        sessionStr = MD5(makeId());
    }
    return sessionStr;
}


session.create = function(user) {
    const sessionStr = session.generateValid();
    const allSessions = session.getAll();
    if (session.findByEmail(user.email)) {
        const index = allSessions.findIndex(session => session.email == user.email);
        allSessions.splice(index, 1);
    }
    allSessions.push({...user, session: sessionStr});
    localStorage.setItem("sessions", JSON.stringify(allSessions));
    return sessionStr;
}