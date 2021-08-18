/* 
YOU MUST USE ES6+ SINTAX.
*/

/* ------------------ 01 ------------------ */

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]

    function filterByValue(arr, key) {}
*/

function filterByValue(arr, key) {
	return arr.filter((value) => key in value);
}

/* ------------------ 02 ------------------ */

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
    
    function find(arr, searchValue) {}
*/

function find(arr, searchValue) {
	let findArr = arr.filter((value) => value === searchValue);

	if (findArr.length === 0) findArr = undefined;

	return findArr;
}

/* ------------------ 03 ------------------ */

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.
Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}

    function findInObj(arr, key, searchValue) {}
*/

function findInObj(arr, key, searchValue) {
	let newArr = arr.filter((value) => key in value && value[key] === searchValue);

	if (newArr.length > 0) return newArr[0];
}

/* ------------------ 04 ------------------ */

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')

    function removeVowels(str)  {}
    */

function removeVowels(str) {
	var arr = str.split('');
	var vowels = ['a', 'e', 'i', 'u'];

	return arr
		.filter((value) => vowels.indexOf(value.toLowerCase()) === -1)
		.join('')
		.toLowerCase();
}

/* ------------------ 05 ------------------ */

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).
Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
    function doubleOddNumbers(arr) {}

*/

function doubleOddNumbers(arr) {
	return arr
		.filter((value) => {
			return value % 2 !== 0;
		})
		.map((v) => {
			return v * 2;
		});
}

/* ------------------ 06 ------------------ */

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']

    function extractKey(arr, key) {}
*/

function extractKey(arr, key) {
	return arr.map((value, index, array) => value[key]);
}

/* ------------------ 07 ------------------ */

/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.
Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']

    function extractValue(arr, key) {}
*/

function extractValue(arr, key) {
	return arr.reduce((acc, value, i) => (acc = acc.concat(value[key])), []);
}

/* ------------------ 08 ------------------ */

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};

    function vowelCount(str) {}
*/

function vowelCount(str) {
	let arr = str.split('');
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	let counter = new Object();
	arr.forEach((v, i, a) => {
		let value = v.toLowerCase();
		if (vowels.indexOf(value) !== -1) {
			if (!counter.hasOwnProperty(value)) counter[value] = 1;
			else counter[value]++;
		}
	});

	return counter;
}

/* ------------------ 09 ------------------ */

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
Examples:
    hasNoDuplicates([1,2,3,2]) // false
    hasNoDuplicates([1,2,3]) // true

    function hasNoDuplicates(arr) {}
*/

function hasNoDuplicates(arr) {
	return arr.every((value, index, array) => array.lastIndexOf(value) === index);
}

/* ------------------ 10 ------------------ */

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.
Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]

       function addKeyAndValue(arr, key, value) {}
*/

function addKeyAndValue(arr, key, value) {
	return arr.reduce((acc, val) => {
		val[key] = value;
		acc = acc.concat(val);
		return acc;
	}, []);
}

/* ------------------ 11 ------------------ */

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 
Examples:
    function isEven(val){
        return val % 2 === 0;
    }
    var arr = [1,2,3,4,5,6,7,8];
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]

    function partition(arr, callback) {}
*/

function partition(arr, callback) {
	return arr.reduce(
		(acc, value) => {
			if (callback(value)) acc[0] = acc[0].concat(value);
			else acc[1] = acc[1].concat(value);
			return acc;
		},
		[[], []]
	);
}

/* ------------------ 12 ------------------ */

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.
Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false

    function hasCertainKey(arr, key) {}
*/

function hasCertainKey(arr, key) {
	return arr.every((value) => key in value);
}
