# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dango3010/lotide`

**Require it:**

`const _ = require('@dango3010/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: prints out the first element of an array
* `tail`: prints out the other elements of an array
* `middle`: prints out the middle elements of an array
* `assertArraysEqual`: compares two arrays
* `eqArrays`: compares two arrays
* `assertEqual`: compares two arrays
* `assertObjectsEqual`: compares two objects
* `eqObjects`: compares two objects
* `countLetters`: counts the frequency of each letter in a string 
* `countOnly`: counts the frequency of the requeted words in an array
* `findKey`: output the key that have a particular key value from an object
* `findKeyByValue`: find key that has a specific key value from an object
* `flatten`: prints out one aray
* `letterPositions`: find a position of a letter in a string
* `map`: prints out the first letter of each word in an array
* `mode`: prints out the # that has the most frequency
* `takeUntil`: prints out the array of positive numbers
* `without`: prints out an array excluding one specific word