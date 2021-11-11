import GalacticAge from './../src/js/agecalc.js';

describe('GalacticAge', () => {



  test('should correctly create an object from user inputted planet', () => {
    const planet = new GalacticAge("Mercury");
    expect(planet.userPlanet).toEqual("Mercury");  
  });

  test('should correctly create an object from user inputted planet and age', () => {
    const planet = new GalacticAge("Mercury", 20)
    expect(planet.userPlanet).toEqual("Mercury");
    expect(planet.userAge).toEqual(20);
  })
});    