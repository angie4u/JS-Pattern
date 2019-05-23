class Address
{
  public streetAddress: string;
  public city: string;
  public country: string;

  constructor(streetAddress: string, city: string, country:string) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }

  toString =() => 
  {
    return `Address: ${this.streetAddress}, ` +
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
    this.address = address; //!
  }

  toString = () =>
  {
    return `${this.name} lives at ${this.address}`;
  }

  greet = () =>
  {
    console.log(
      `Hi, my name is ${this.name}, ` +
      `I live at ${this.address.toString()}`
    );
  }
}

class Serializer
{
  public types: any;
  constructor(types: any){
    this.types = types;
  }

  public object: any;
  markRecursive(object: any)
  {
    // anoint each object with a type index
    let idx = this.types.findIndex(t => {
      return t.name === object.constructor.name;
    });
    if (idx !== -1)
    {
      object['typeIndex'] = idx;

      for (let key in object)
      {
        if (object.hasOwnProperty(key) && object[key] != null)
          this.markRecursive(object[key]);
      }
    }
  }

  reconstructRecursive(object: any)
  {
    if (object.hasOwnProperty('typeIndex'))
    {
      let type = this.types[object.typeIndex];
      let obj = new type();
      for (let key in object)
      {
        if (object.hasOwnProperty(key) && object[key] != null) {
          obj[key] = this.reconstructRecursive(object[key]);
        }
      }
      delete obj.typeIndex;
      return obj;
    }
    return object;
  }

  clone(object: any)
  {
    this.markRecursive(object);
    let copy = JSON.parse(JSON.stringify(object));
    return this.reconstructRecursive(copy);
  }
}

export const serializationTest = () => {
    let john = new Person('John', new Address('123 London Road', 'London', 'UK'));

    let jane = JSON.parse(JSON.stringify(john));

    jane.name = 'Jane';
    jane.address.streetAddress = '321 Angel St';

    john.greet();
    // this won't work
    // jane.greet();

    // try a dedicated serializer
    let s = new Serializer([Person,Address]); // pain point
    jane = s.clone(john);

    jane.name = 'Jane';
    jane.address.streetAddress = '321 Angel St';

    console.log(john.toString());
    console.log(jane.toString());
}