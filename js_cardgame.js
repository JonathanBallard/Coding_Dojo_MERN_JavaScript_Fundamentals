
class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        if(target instanceof Unit){
            //reduce target res by power
            target.res -= this.power;
        }
        else {
            console.log('Card must be type: Unit')
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, amt){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.amt = amt;
    }
    play(target){
        if(target instanceof Unit){
            if(this.stat == "power"){
                target.power += this.amt;
            }
            else if(this.stat == "res"){
                target.res += this.amt;
            }
        }
        else {
            console.log('Card must be type: Unit')
        }
        
    }
    read(){
        console.log(this.text);
    }
}







const HardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", 'res', 3)
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", 'res', -2)
const PairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", 'power', 2)



//player 1
const RedBeltNinja = new Unit("Red Belt Ninja",3,3,4)
HardAlgorithm.play(RedBeltNinja);

//player 2
const BlackBeltNinja = new Unit("Black Belt Ninja",4,5,4)
UnhandledPromiseRejection.play(RedBeltNinja);

//player 1
PairProgramming.play(RedBeltNinja);
RedBeltNinja.attack(BlackBeltNinja);





























