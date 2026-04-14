"use strict";
function saveVisit() {
    const now = new Date();
    const session = {
        date: now.toLocaleDateString('uk-UA'),
        time: now.toLocaleTimeString('uk-UA'),
        timestamp: now.getTime()
    };
    const sessionsJSON = localStorage.getItem('sessionsList');
    let sessionsList = sessionsJSON ? JSON.parse(sessionsJSON) : [];
    sessionsList.push(session);
    localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
}
saveVisit();
