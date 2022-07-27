// Задание № 5 (Модуль E4).

/*
Переписать консольное приложение из предыдущего юнита на классы.
*/

// Решение:

class ElectricalAppliance {
    constructor(name, manufacturer) {
        this.name = name;
        this.manufacturer = manufacturer;
    }

    getInfo() {
        return `The ${this.name} is manufacturied by ${this.manufacturer}.`
    }

    getPowerConsumption = function (power) {
        return `Power Consumption of the ${this.name} is ${power} W.`
    }

    getTurn = function (on_off) {
        return `The ${this.name} is switched ${on_off}.`
    }
}


class Lighting extends ElectricalAppliance {
    constructor(name, manufacturer, typeOfLamp) {
        super(name);
        this.manufacturer = manufacturer
        this.typeOfLamp = typeOfLamp;
    }

    getPowerConsumption = function (power) {
        return `Electricity consumption of the ${this.name} is ${power} W.`
    }
}

class PC extends ElectricalAppliance {
    constructor(name, manufacturer, display) {
        super(name);
        this.manufacturer = manufacturer;
        this.display = display;
    }

    getTurn = function (on_off) {
        return `This ${this.name} is switched ${on_off}.`
    }

    getInfo() {
        return `The ${this.name} is manufacturied by ${this.manufacturer}. Display is ${this.display}'.`
    }
}


const iron = new ElectricalAppliance("iron", "Tefal");

console.log(iron.getInfo());
console.log(iron.getPowerConsumption(650));
console.log(iron.getTurn("on"));


const lamp = new Lighting("lamp", "Xiaomi", "LED");

console.log(lamp.getInfo());
console.log(lamp.getPowerConsumption(20));
console.log(lamp.getTurn("off"));


const computer = new PC("computer", "Ginzu", 21);

console.log(computer.getInfo());
console.log(computer.getPowerConsumption(380));
console.log(computer.getTurn("on"));

