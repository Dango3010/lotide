const assertEqual = require('../assertEqual');
const head = require('../head');

//test codes of head.js
assertEqual(head([5,6,7]), 8);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));
assertEqual(head([1]), 1);