console.log('Hello World! 🌎')
// Create Class Here
class Player {
    constructor(public name: string, public type: string, public level: number, private isVIP?: boolean) {}

    details(): string {
        return `${this.isVIP ? 'VIP ' : ''}${this.name}, Type is ${this.type}, Level is ${this.level}`;
    }

}

// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", +"85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);

console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77
