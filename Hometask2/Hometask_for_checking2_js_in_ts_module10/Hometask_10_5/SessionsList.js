"use strict";
function displaySessions() {
    const container = document.getElementById('sessionsContainer');
    if (!container)
        return;
    const sessionsJSON = localStorage.getItem('sessionsList');
    if (!sessionsJSON) {
        container.innerHTML = '<p>Ще не було жодного відвідування</p>';
        return;
    }
    const sessionsList = JSON.parse(sessionsJSON);
    container.innerHTML = `<pre>${JSON.stringify(sessionsList, null, 2)}</pre>`;
}
displaySessions();
