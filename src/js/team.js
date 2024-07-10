import {Character} from "./character.js";

class Team {
    constructor() {
       this.team = [
        new Character('Лучник', 'Bowman', 50, 1, 40, 10),
        new Character('Мечник', 'Swordsman', 50, 1, 40,10),
        new Character('Мертвец', 'Undead', 50, 1, 25, 25),
        new Character('Зомби', 'Zombie', 50, 1, 30, 15)
       ] 
    }
    *[Symbol.iterator]() {
       for(const person of this.team) {
        yield person
       }
      }
    
}


const person = new Team()


console.log(person)
