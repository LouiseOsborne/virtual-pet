const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });

    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });

    it('has an initial hunger of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });

    it('has an initial fitness of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });

});

describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });

    it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();

        expect(pet.hunger).toEqual(5);
      });

    it('decreases the fitness by 3', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });

    
});

describe('walk', () => {
    it('increases the fitness by 4', () => {
        const pet = new Pet('Fido');

        pet.fitness = 8;    
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
        
});

describe('feed', () => {
    it('decreases the hunger level by 3', () => {
        const pet = new Pet('Fido');

        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });
    
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('checkUp', () => {
    it('checks if fitness is 3 or less and if so returns need to walk', () => {
        const pet = new Pet('Fido');

        pet.fitness = 2;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I need a walk');
    });

    it('checks if hunger is 5 or more and if so returns as hungry', () => {
        const pet = new Pet('Fido');

        pet.hunger = 5;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I am hungry');
    });

    it('checks pet hunger is 5 or more and if pet fitness is 3 or less, if so returns as hungry and need to walk', () => {
        const pet = new Pet('Fido');

        pet.hunger = 5;
        pet.fitness = 3;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });

    it('checks if pet is hungry or needs exercise, but it is fine so returns feeling great', () => {
        const pet = new Pet('Fido');

        pet.hunger = 3;
        pet.fitness = 10;
        pet.checkUp();
        
        expect(pet.checkUp()).toBe('I feel great!');
    });
});

