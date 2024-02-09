export class Task {
    id: string; 
    description: string; 
    completed: boolean; 

    constructor(description: string) {
        this.id = generateId(); // Generem un ID per a la task
        this.description = description; // Assignem la descripció rebuda com a paràmetre
        this.completed = false; // Inicialment, la task no està completa
    }

    // Mètode per marcar la task com a completa
    markAsCompleted(): void {
        this.completed = true; // Canviem l'estat de la task a completa
    }
}

// Funció per generar un ID aleatori
function generateId(): string {
    const characters = '0123456789'; 
    const idLength = 2; 
    let id = ''; 
    for (let i = 0; i < idLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length); 
        id += characters.charAt(randomIndex); 
    }
    return id; 
}