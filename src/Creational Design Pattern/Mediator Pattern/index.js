var Person = /** @class */ (function () {
    function Person(name) {
        this.chatLog = [];
        this.name = name;
    }
    Person.prototype.receive = function (sender, message) {
        var s = sender + ": '" + message + "'";
        this.chatLog.push(s);
        console.log("[" + this.name + "'s chat session] " + s);
    };
    Person.prototype.say = function (message) {
        this.room.broadcast(this.name, message);
    };
    Person.prototype.pm = function (who, message) {
        this.room.message(this.name, who, message);
    };
    return Person;
}());
var ChatRoom = /** @class */ (function () {
    function ChatRoom() {
        this.people = [];
    }
    ChatRoom.prototype.join = function (p) {
        var joinMsg = p.name + " joins the chat";
        this.broadcast('room', joinMsg);
        p.room = this;
        this.people.push(p);
    };
    ChatRoom.prototype.broadcast = function (source, message) {
        for (var _i = 0, _a = this.people; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.name !== source)
                p.receive(source, message);
        }
    };
    ChatRoom.prototype.message = function (source, destination, message) {
        for (var _i = 0, _a = this.people; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.name === destination)
                p.receive(source, message);
        }
    };
    return ChatRoom;
}());
var room = new ChatRoom();
var john = new Person('John');
var jane = new Person('Jane');
room.join(john);
room.join(jane);
john.say('hi room');
jane.say('oh, hey john');
var simon = new Person('Simon');
room.join(simon);
simon.say('hi everyone!');
jane.pm('Simon', 'Glad to join us');
