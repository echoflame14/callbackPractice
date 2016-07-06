/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  //Code Here for first
  function first(arr,cb) {
  	var firstName = arr[0];
	cb(firstName);
  }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
  function last(arr,cb) {
  	var lastName = arr[arr.length-1];
	cb(lastName);
  }

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
  function multiply(num1,num2,cb) {
  	var answer = num1 * num2;
	cb(answer);
  }

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
  function contains(arr,str,cb){
	  var test = false;
	  for (var i = 0; i < arr.length; i++) {
	  		if (arr[i] === str) {
	  			test = true;
	  		}
	  }
	  cb(test);
  }

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq
	 function uniq(arr,cb) {
	 	 var newArr = [];
	 	for (var i = 0; i < arr.length; i++) {
	 		if (newArr.indexOf(arr[i]) === -1) {
	 			newArr.push(arr[i]);
	 		}
	 	}
		cb(newArr);
	 }


uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
	 function each(arr,cb) {

		for (var i = 0; i < arr.length; i++) {
				var item = arr[i];
				var indice = i;
				cb(item,indice);
		}
	}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById
function getUserById(arr,str,cb) {
	var user;
	for (var i = 0; i < arr.length; i++) {
			if(arr[i].id === "16t"){
				user = arr[i];
			}
	}
	cb(user);
}

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
