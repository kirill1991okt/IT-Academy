//Задача 1

function Person(personAge){
    this.name = 'Вася';

    var self = this;

    function getFormattedAge() {
        return personAge + ' лет';
    }

    this.showInfo = function(){
        console.log('Привет, меня зовут ' + self.name + ', мне ' + getFormattedAge())
    }
}




function Employee(personAge, salary){
    Person.apply(this, arguments)
    this.salary = salary;

    var personShowInfo = this.showInfo;
    this.showInfo = function(){
        personShowInfo();
        console.log('Моя зарплата ' + this.salary + '$');
    }

}


// Задача 2

function Person(personAge){
    this.name = 'Вася';
    this._personAge = personAge;
}

Person.prototype._getFormattedAge = function(){
    return this._personAge + ' лет';
}

Person.prototype.showInfo = function(){
    console.log('Привет, меня зовут ' + this.name + ', мне ' + this._getFormattedAge())
}



function Employee(personAge, salary){
    Person.apply(this, arguments);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.construstor = Employee;

Employee.prototype.showInfo = function(){
    Person.prototype.showInfo.apply(this, arguments);
    console.log('Моя зарплата ' + this.salary + '$');
}
