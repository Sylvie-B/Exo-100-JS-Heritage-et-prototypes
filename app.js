function Vehicule(color, wheelNbr, mark){
    this.color = color;
    this.wheel = wheelNbr;
    this.mark = mark;

    this.start = function () {
        console.log('starting');
    }
    this.stop = function () {
        console.log('arret');
    }
}

let Bike = function (color, wheelNbr, mark, wheelSpoke, paint) {
    Vehicule.call(this, color, wheelNbr, mark);
    this.wheelSpoke = wheelSpoke;
    this.paint = paint;
}
Bike.prototype = Object.create(Vehicule.prototype); // copie de proto parent
Bike.prototype.constructor = Bike; // assignation du constructeur

Bike.prototype.monter = function () {
    console.log('je monte sur mon velo');
}

let Car = function (color, wheelNbr, mark, assurance, owner) {
    Vehicule.call(this, color, wheelNbr, mark);
    this.assurance = assurance;
    this.owner = owner;
}
Car.prototype = Object.create(Vehicule.prototype);
Car.prototype.constructor = Car;

Car.prototype.wash = function () {
    console.log('carwash');
}
