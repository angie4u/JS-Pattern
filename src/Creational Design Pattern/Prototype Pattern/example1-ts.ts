class Address
{
    public streetAddress: string;
    public city: string;
    public country: string;
    constructor(streetAddress: string, city: string, country: string)
    {
        this.streetAddress = streetAddress;
        this.city = city;
        this.country = country;
    }
    
    deepCopy()
    {
        return new Address(
            this.streetAddress,
            this.city,
            this.country
        );
    }

    toString()
    {
        return `Address: ${this.streetAddress}, `+
            `${this.city}, ${this.country}`;
    }
}

class Person
{
    public name: string;
    public address: Address;
    constructor(name: string, address: Address)
    {
        this.name = name;
        this.address = address;
    }
    deepCopy()
    {
        return new Person(
            this.name,
            this.address.deepCopy()
        );
    }
    toString()
    {
        return `${this.name} lives at ${this.address}`
    }
}

export const exampleTest = () => {
    let john = new Person('John',
        new Address('123 London Road', 'London', 'UK'));

    let jane = john.deepCopy();

    jane.name = 'Jane';
    jane.address.streetAddress = '321 Angel St';

    console.log(john.toString());
    console.log(jane.toString());
}