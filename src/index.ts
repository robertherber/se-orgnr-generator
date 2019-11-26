const POSSIBLE_NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  VALID_CLASS_NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  CHARCODE_0 = '0'.charCodeAt(0),
  VALID_LENGTHS = [10, 12],
  MAPPING_EVEN = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];

function getLuhnRemainder(value): number {
  let length = value.length,
    accumulator = 0,
    bit = 0;

  while (length-- > 0) {
    accumulator += (bit ^= 1)
      ? value.charCodeAt(length) - CHARCODE_0
      : MAPPING_EVEN[value.charCodeAt(length) - CHARCODE_0];
  }

  return accumulator % 10;
}

function getControlNumber(rawValue): string {
  const value = rawValue;

  return value + ((10 - getLuhnRemainder(value + '0')) % 10).toString();
}

const getRandomFromArray = array => {
  const index = Math.floor(Math.random() * array.length),
    entry = array[index];

  return entry;
};

interface OrganizationNumberOptions {
  classNumber?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  length?: 10 | 12;
  withSeparator?: boolean;
}

const generateOrganizationNumber = ({
  classNumber = '5',
  length = 10,
  withSeparator = false,
}: OrganizationNumberOptions = {}): string => {
  const classNumberString = classNumber.toString();

  if (VALID_CLASS_NUMBERS.indexOf(classNumberString) === -1) {
    throw new Error(
      'Invalid classNumber, should be a 1-9, see https://sv.wikipedia.org/wiki/Organisationsnummer#Organisationsnummer for examples',
    );
  }

  if (VALID_LENGTHS.indexOf(length) === -1) {
    throw new Error('Invalid length, should be 10 or 12, see https://sv.wikipedia.org/wiki/Organisationsnummer');
  }

  const orgNrArray = [classNumberString];

  for (let i = 0; i < 8; i++) {
    const nextNumber = getRandomFromArray(POSSIBLE_NUMBERS);
    orgNrArray.push(nextNumber);
  }

  const orgNr = getControlNumber(orgNrArray.join('')),
    orgNrWithSeparator = withSeparator ? orgNr.slice(0, 6) + '-' + orgNr.slice(6) : orgNr;

  return length === 10 ? orgNrWithSeparator : '16' + orgNrWithSeparator;
};

export default generateOrganizationNumber;
