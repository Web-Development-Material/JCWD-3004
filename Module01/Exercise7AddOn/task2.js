class Employee {
    constructor (name, age, salary){
        this.name = name
        this.age = age
        this.salary = salary
    }
}
class Manager extends Employee {
    constructor (name, age, salary, timeSize){
        super(name, age, salary,)
        this.timeSize = timeSize
    }
    

    getDetails(){
        return {
            name : this.name,
            age : this.age,
            salary : this.salary,
            timeSize : this.timeSize
        }
    }
    calculateBonus(){
        return this.salary * this.timeSize
        
    }
}
class Developer extends Employee {
    constructor (name, age, salary){
        super(name, age, salary)
        this.language = []
    }
    addLanguage(language){
        return {
            language : this.language.push(language)
        }
    }
    getDetails(){
        return {
            name : this.name,
            age : this.age,
            salary : this.salary,
            language : this.language
        }
    }
}

const manager = new Manager ("Alice", 35, 8000, 5)
const developer = new Developer ( "jane", 25, 6000)

developer.addLanguage("javascript")
developer.addLanguage("phyton")
console.log(manager.getDetails())
console.log(developer.getDetails())
console.log("Bonus for " + manager.name + " : " + manager.calculateBonus())