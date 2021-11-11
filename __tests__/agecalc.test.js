import { exportAllDeclaration } from '@babel/types';
import GalacticAge from './../src/js/agecalc.js';

describe('GalacticAge', () => {

  test('should correctly create an object from user inputted age', () => {
    const age = new GalacticAge(20);
    expect(age.userAge).toEqual(20);
  })

  test('should correctly calculate user inputted age on Mercury', () => {
    const age = new GalacticAge(30);
    expect(age.mercury).toEqual(125);
  })

  test('should correctly calculate user inputted age on Venus', () => {
    const age = new GalacticAge(30);
    expect(age.venus).toEqual(48.39);
  })

  test('should correctly calculate user inputted age on Mars', () => {
    const age = new GalacticAge(30);
    expect(age.mars).toEqual(15.96)
  })

  test('should correctly calculate user inputted age on Jupiter', () => {
    const age = new GalacticAge(30);
    expect(age.jupiter).toEqual(2.53);
  })

  test('should correctly create an object from user inputted age and life expectancy', () => {
    const ageLife = new GalacticAge(30, 75.5);
    expect(ageLife.userLifeExpectancy).toEqual(75.5);
  })

  test('should correctly calculate life expectancy on mercury based on relative age', () => {
    const ageLife = new GalacticAge(30, 75.5);
    expect(ageLife.mercuryLifeExpectancy()).toEqual(189.58)
  })
});    