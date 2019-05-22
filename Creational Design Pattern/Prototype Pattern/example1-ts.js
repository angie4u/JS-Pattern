var Address = /** @class */ (function () {
    function Address(streetAddress, city, country) {
        this.streetAddress = streetAddress;
        this.city = city;
        this.country = country;
    }
    Address.prototype.deepCopy = function () {
        return new Address(this.streetAddress, this.city, this.country);
    };
    Address.prototype.toString = function () {
        return "Address: " + this.streetAddress + ", " +
            (this.city + ", " + this.country);
    };
    return Address;
}());
var Person = /** @class */ (function () {
    function Person(name, address) {
        this.name = name;
        this.address = address;
    }
    Person.prototype.deepCopy = function () {
        return new Person(this.name, this.address.deepCopy());
    };
    Person.prototype.toString = function () {
        return this.name + " lives at " + this.address;
    };
    return Person;
}());
var john = new Person('John', new Address('123 London Road', 'London', 'UK'));
var jane = john.deepCopy();
jane.name = 'Jane';
jane.address.streetAddress = '321 Angel St';
console.log(john.toString());
console.log(jane.toString());
