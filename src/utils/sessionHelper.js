export function setSession(session) {

    sessionStorage.setItem('session', session);
}

export function getSession() {

    return JSON.parse(sessionStorage.getItem('session'))
}

export function removeSession() {

  sessionStorage.removeItem('session');
}
