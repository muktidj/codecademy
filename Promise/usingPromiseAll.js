const {checkAvailability} = require('./usingPromise.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:

//step 1
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co');

const checkPants = checkAvailability('pants', 'Favorite Supply Co');

const checkBags = checkAvailability('bags','Favorite Supply Co');

const promiseArr = [checkSunglasses, checkPants, checkBags ];

Promise.all(promiseArr);
//end step 1

//step 2 and 3

Promise.all(promiseArr)
 .then(onFulfill)
 .catch(onReject);

//end step 2 and 3
 


/*Read me 

step 1 Create three variables each assigned to a separate promise:

checkSunglasses should be assigned the value returned from invoking checkAvailability() with 'sunglasses' as its first argument and 'Favorite Supply Co.' a s its second argument.
checkPants should be assigned the value returned from invoking checkAvailability() with 'pants' as its first argument and 'Favorite Supply Co.' as its second argument.
checkBags should be assigned the value returned from invoking checkAvailability() with 'bags' as its first argument and 'Favorite Supply Co.' as its second argument.
3.
Invoke Promise.all() with an array containing 


4.Chain a .then() to the promise returned from Promise.all(). You should pass in onFulfill to serve as the success handler.

5.Add a .catch() to the chain. You should pass in onReject to serve as the failure handler.
*/