/* eslint-disable @typescript-eslint/ban-ts-ignore */

import generateOrganizationNumber from '.';

describe('se-orgnr-generator', () => {
  it('Should generate a string of length 10', () => {
    const number = generateOrganizationNumber();

    expect(number).toHaveLength(10);
  });

  it('Should generate a string of length 12 starting with 16', () => {
    const number = generateOrganizationNumber({ length: 12 });

    expect(number).toHaveLength(12);
    expect(number.substring(0, 2)).toEqual('16');
  });

  it('Should generate a string of length 10', () => {
    const number = generateOrganizationNumber({ length: 10 });

    expect(number).toHaveLength(10);
  });

  it('Should generate a organization number starting with 5 by default', () => {
    const number = generateOrganizationNumber();

    expect(number[0]).toEqual('5');
  });

  it('Should throw if 0 is starting number', () => {
    // @ts-ignore
    expect(() => generateOrganizationNumber({ classNumber: '0' })).toThrowError(
      'Invalid classNumber, should be a 1-9, see https://sv.wikipedia.org/wiki/Organisationsnummer#Organisationsnummer for examples',
    );
  });

  it('Should throw if length is 11', () => {
    // @ts-ignore
    expect(() => generateOrganizationNumber({ length: 11 })).toThrowError(
      'Invalid length, should be 10 or 12, see https://sv.wikipedia.org/wiki/Organisationsnummer',
    );
  });

  it('Should override starting number', () => {
    const number = generateOrganizationNumber({ classNumber: '6' });

    expect(number[0]).toEqual('6');
  });

  it('Should have a separator', () => {
    const number = generateOrganizationNumber({ withSeparator: true });

    expect(number).toHaveLength(11);
    expect(number[6]).toEqual('-');
  });
});
