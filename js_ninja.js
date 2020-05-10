


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
        this.health += 10;
    }

}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


















