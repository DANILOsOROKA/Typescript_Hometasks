type Session = {
    date: string;
    time: string;
    timestamp: number;
};

function saveVisit(): void {
    const now = new Date();
    const session: Session = {
        date: now.toLocaleDateString('uk-UA'),
        time: now.toLocaleTimeString('uk-UA'),
        timestamp: now.getTime()
    };
    
    const sessionsJSON = localStorage.getItem('sessionsList');
    let sessionsList: Session[] = sessionsJSON ? JSON.parse(sessionsJSON) : [];
    sessionsList.push(session);
    localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
}

saveVisit();