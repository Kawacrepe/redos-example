import { performance } from 'node:perf_hooks';

const regex = /A(B|C+)+D/;

const doSomething = (str) => {
  const start = performance.now();
  regex.test(str);
  const end = performance.now();
  console.log(`Time: ${(end - start) / 1000} s`);
};

// Valid
doSomething('ABCD');
doSomething('ACCCCCCCCCCCCCCCCCCCCCCCCCCCCD');

// Invalid, blocks the event loop and take a long time before getting completed
doSomething('ACCCCCCCCCCCCCCCCCCCCCCCCCCCCX');