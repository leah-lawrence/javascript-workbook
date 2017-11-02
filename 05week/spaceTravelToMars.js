'use strict';

let assert = require('assert');

let jobTypes = {
    pilot: 'MAV',
    mechanic: 'Repair Ship',
    commander: 'Main Ship',
    programmer: 'Any Ship!'
};

class CrewMember {
    constructor(name, job, specialSkill, ship) {
        this.name = name;
        this.job = job;
        this.specialSkill = specialSkill;
        this.ship = null;
    }
    enterShip(assignShip) {
        assignShip.crew.push(this);
        this.ship = assignShip;
    }
}

class Ship {
    constructor(name, type, ability) {
        this.name = name;
        this.type = type;
        this.ability = ability;
        this.crew = [];
    }
    missionStatement() {
        if (this.crew.length === 0) {
            return "Can't perform a mission yet.";
        }
        return this.ability;
    }
}


// Ship
let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');

// Crew
let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');


/********

CrewMember
  job
  name
  special skill
  ship // the ship the crewmember is currently on
  enterShip(ship) // take ship object and add person to the list of crew it has

Ship
  name
  type
  ability
  crew() // this is the list of crew currently in the ship)
  missionStatement() // this function either returns the ship's ability as a string,if there is a crewmember whose job matches the ship's type

Of the crewmember class, should have name, job, specialSkill, ship(the ship the crewmember is currently on)

Crewmember should call a function called enterShip (this function takes in a ship object, this function adds the crew member to the ship's crew)

The ship class should have name, type, ability, list of crew(this is the list of crew currently in the ship);

The ship class should have the following function: mission statement(this function either returns the ship's ability as a string, 
if there is a crewmember whose job matches the ship's type) 
Otherwise, it should return "can not perform a mission, yet!"

s1.missionStatement(); // can not start
s1.enterShip(s1)
s2.missionStatement() // Destined for mars

********/

//tests
if (typeof describe === 'function') {
    describe('CrewMember', function() {
        it('should have a name, a job, a specialSkill and ship upon instantiation', function() {
            var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
            assert.equal(crewMember1.name, 'Rick Martinez');
            assert.equal(crewMember1.job, 'pilot');
            assert.equal(crewMember1.specialSkill, 'chemistry');
            assert.equal(crewMember1.ship, null);
        });

        it('can enter a ship', function() {
            let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
            let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
            crewMember1.enterShip(mav);
            assert.equal(crewMember1.ship, mav);
            assert.equal(mav.crew.length, 1);
            assert.equal(mav.crew[0], crewMember1);
        });
    });

    describe('Ship', function() {
        it('should have a name, a type, an ability and an empty crew upon instantiation', function() {
            let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
            assert.equal(mav.name, 'Mars Ascent Vehicle');
            assert.equal(mav.type, 'MAV');
            assert.equal(mav.ability, 'Ascend into low orbit');
            assert.equal(mav.crew.length, 0);
        });

        it('can return a mission statement correctly', function() {
            let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
            let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
            let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
            let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
            assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
            assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

            crewMember1.enterShip(mav);
            assert.equal(mav.missionStatement(), "Ascend into low orbit");

            crewMember2.enterShip(hermes);
            assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
        });
    });
}