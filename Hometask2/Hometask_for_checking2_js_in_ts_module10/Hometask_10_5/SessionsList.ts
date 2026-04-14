type SessionDate = {
    date: string;
    time: string;
    timestamp: number;
};

function displaySessions(): void {
    const container = document.getElementById('sessionsContainer');
    if (!container) return;
    
    const sessionsJSON = localStorage.getItem('sessionsList');
    if (!sessionsJSON) {
        container.innerHTML = '<p>Ще не було жодного відвідування</p>';
        return;
    }
    
    const sessionsList: SessionDate[] = JSON.parse(sessionsJSON);
    
    container.innerHTML = `<pre>${JSON.stringify(sessionsList, null, 2)}</pre>`;
}

displaySessions();