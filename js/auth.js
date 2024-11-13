// auth.js
class SessionManager {
    constructor() {
        this.currentSession = null;
        this.user = null;
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('auth-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleUserAuth();
        });

        document.getElementById('create-session').addEventListener('click', () => {
            this.createSession();
        });

        document.getElementById('join-session').addEventListener('click', () => {
            this.joinSession();
        });
    }

    handleUserAuth() {
        const name = document.getElementById('name').value;
        const username = document.getElementById('username').value;
        const zipcode = document.getElementById('zipcode').value;

        this.user = { name, username, zipcode };
        document.querySelector('.session-controls').style.display = 'block';
    }

    createSession() {
        if (!this.user) return;
        
        const sessionCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        this.currentSession = {
            code: sessionCode,
            host: this.user,
            participants: [this.user],
            preferences: {}
        };

        this.startSession();
    }

    joinSession() {
        if (!this.user) return;

        const joinCode = document.getElementById('join-code').value.toUpperCase();
        this.currentSession = {
            code: joinCode,
            host: { name: 'Host User' },
            participants: [this.user],
            preferences: {}
        };

        this.startSession();
    }

    startSession() {
        document.getElementById('current-session-code').textContent = this.currentSession.code;
        document.getElementById('auth-screen').classList.remove('active');
        document.getElementById('swipe-screen').classList.add('active');
        
        // Initialize the swipe interface
        if (window.swipeInterface) {
            window.swipeInterface.initialize();
        } else {
            console.error('Swipe interface not initialized');
        }
    }
}

// Initialize the session manager
window.sessionManager = new SessionManager();