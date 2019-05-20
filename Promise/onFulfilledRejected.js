let {checkInventory} = require('./library,.js');

let order = [['sunglasses', 1], ['bags', 2]];


let handleSuccess = (resolvedValue) => {
      console.log(resolvedValue);
    };
    
    let handleFailure = (rejectReason) => {
      console.log(rejectReason);
    };

    checkInventory(order)
      .then(handleSuccess, handleFailure);
