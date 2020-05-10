


class Ninja{
    constructor(name="DefaultName", hp=100, speed=3, strength=3){
        this.name = name;
        this.hp = hp;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(this.name, this.hp, this.speed, this.strength);
    }

    drinkSake(){
        this.hp += 10;
    }

}

class Sensei extends Ninja {
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What 1 programmer can do in one month, 2 programmers can do in 2 months");
    }

    showStats(){
        super.showStats();
    }
}






const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();



const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

superSensei.showStats();














