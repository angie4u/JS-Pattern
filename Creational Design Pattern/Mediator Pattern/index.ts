class Person
{
    public name: string;
    public chatLog: string[] = []; 
    private chatLog2: Array<string>;
    public room: ChatRoom;

    constructor(name: string)
    {
        this.name = name;

    }
    receive(sender: string, message: string){
        const s = `${sender}: '${message}'`;
        this.chatLog.push(s);
        console.log(`[${this.name}'s chat session] ${s}`)
    }

    say(message: string)
    {
        this.room.broadcast(this.name, message);
    }

    pm(who, message)
    {
        this.room.message(this.name, who, message);
        
    }
    
}

class ChatRoom
{
    private people: Array<Person> = [];
    
    join(p: Person)
    {
        const joinMsg = `${p.name} joins the chat`;
        this.broadcast('room', joinMsg);
        p.room = this;
        this.people.push(p);
    }
    broadcast(source: string, message: string)
    {
        for (let p of this.people){
            if(p.name !== source)
                p.receive(source, message);
        }
    }

    message(source: string, destination: string, message: string)
    {
        for (let p of this.people){
            if(p.name === destination)
                p.receive(source, message);
        }
    }
}

let room = new ChatRoom();
let john = new Person('John');
let jane = new Person('Jane');

room.join(john);
room.join(jane);

john.say('hi room');
jane.say('oh, hey john');

let simon = new Person('Simon');
room.join(simon);
simon.say('hi everyone!');

jane.pm('Simon', 'Glad to join us');


