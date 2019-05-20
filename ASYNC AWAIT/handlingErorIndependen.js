let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./handlingErorIndependenLibrary.js')

// Write your code below:



async function serveDinner() {
     let vegetablePromise = steamBroccoli()
     let strachPromise = cookRice()
     let proteinPromise = bakeChicken()
     let sidePromise = cookBeans()

  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await strachPromise}, ${await proteinPromise}, and ${await sidePromise}`)
}

serveDinner()