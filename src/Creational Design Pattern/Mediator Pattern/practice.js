class Mediator
{
  // todo
  constructor(){
      // mediator key point ??
      this.participants = [];
  }
  broadcast(n, currentParticipant){
    // this.participants.foreach(participant => {
    //   if(participant !== currentParticipant){
    //     participant.value += n;
    //   }
    // });
    for(let participant of this.participants){
      if(participant !== currentParticipant){
        participant.value += n;
      }
    }
  }
  
}

class Participant
{
  constructor(mediator)
  {
    // todo
    mediator.participants.push(this);
    this.mediator = mediator;
    this.value = 0;
    

  }

  say(n)
  {
    // todo
    // we need to broadcast through mediator
    this.mediator.broadcast(n,this);
    
  }
}

let mediator = new Mediator();
let p1 = new Participant(mediator);
let p2 = new Participant(mediator);

p1.say(3);
p2.say(2);

console.log(p1.value);
console.log(p2.value);

