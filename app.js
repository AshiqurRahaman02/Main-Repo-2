const sharedRepo = require('./shared-repo/index');

const num = 10;

const result1 = sharedRepo.multiplyByFive(num);
console.log(`10 multiplied by 5 is: ${result1}`);

const result2 = sharedRepo.multiplyByNine(num);
console.log(`10 multiplied by 9 is: ${result2}`);
