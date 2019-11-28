[![Version](https://img.shields.io/npm/v/se-orgnr-generator)](https://www.npmjs.com/package/se-orgnr-generator)
[![Count](https://img.shields.io/npm/dt/se-orgnr-generator)](https://www.npmjs.com/package/se-orgnr-generator)
[![License](https://img.shields.io/npm/l/se-orgnr-generator)](https://github.com/robertherber/se-orgnr-generator/blob/master/package.json)

# se-orgnr-generator

Supersimple dependency-free library for generation Swedish organization numbers with TypeScript bindings.

## Install

`yarn install se-orgnr-generator`

or

`npm install se-orgnr-generator`

## Example

```javascript
import generateOrganizationNumber from 'se-orgnr-generator';

const organizationNumber = generateOrganizationNumber();
```

## Validation

This library is tested with among other tests by generating 100 000 organization numbers that are validated against [se-orgnr-validator](https://www.npmjs.com/package/se-orgnr-validator)