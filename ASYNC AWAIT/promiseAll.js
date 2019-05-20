let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./handlingErorIndependenLibrary.js')

// Write your code below:

async function serveDinnerAgain() {
      let foodArray = await Promise.all([steamBroccoli(), cookRice(), cookBeans(), bakeChicken()])

      
      console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]} , ${foodArray[2]} ,${foodArray[3]}`)
}

serveDinnerAgain()