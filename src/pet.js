
const MINIMUM_FITNESS = 0;
const FITNESS_LIMIT = 3;
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const HUNGER_LIMIT = 5;
const MAXIMUM_HUNGER = 10;
const MAXIMUM_AGE = 30;


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
        return this.age < MAXIMUM_AGE && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
    }
};

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } else {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3 ;
    };
};

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    else if((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    };
};

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    else if((this.hunger - 3) <= MINIMUM_HUNGER) {
        this.hunger = MINIMUM_HUNGER;
    } else {
        this.hunger -= 3;
    };
};

Pet.prototype.checkUp = function() {
    if(!this.isAlive){
        throw new Error('Your pet is no longer alive')
    }
    else if((this.fitness <= FITNESS_LIMIT)&&(this.hunger >= HUNGER_LIMIT)){
        return 'I am hungry AND I need a walk';
    }
    else if(this.fitness <= FITNESS_LIMIT){
        return 'I need a walk';
    }
    else if((this.hunger >= HUNGER_LIMIT)){
        return 'I am hungry';
    } else {
        return 'I feel great!';
    };
};

Pet.prototype.haveChild = function(childName) {
    if(!this.isAlive) {
      throw new Error('Your pet is no longer alive :(')
    } else {
      const child = new Pet(childName);
      this.children.push(child);
      return this.children;
    };
  };

  

module.exports = Pet;