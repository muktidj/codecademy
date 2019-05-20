const menu = {
    _courses: {
        _appetizers: [],
        _drinks: [],
        _desserts: [],

        get appetizers() {
            return this._appetizers;
        },
        set appetizers(appetizersIn) {
            this._appetizers = appetizersIn;
        },
        get drinks() {
            return this._drinks;
        },
        set drinks(drinksIn) {
            this._drinks = drinksIn;
        },
        get desserts() {
            return this._desserts;
        },
        set desserts(dessertsIn) {
            this._desserts = dessertsIn;
        },
    },

    get courses() {
        return {
            appetizers: this._courses.appetizers,
            drinks: this._courses.drinks,
            desserts: this._courses.desserts,
        };
    },

    ///===============================================================

// Inside the menu object, we are going to create a method called.addDishToCourse() which will be used to add a new dish to the specified course on the menu.
// The method should take in three parameters: the courseName, the dishName, and the dishPrice.


    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };

        this._courses[courseName].push(dish);
    },

/*todo :There are a few steps in getting the .getRandomDishFromCourse() to work.

1. Retrieve the array of the given course's dishes from the menu's _courses object and store in a variable called dishes.

2.Generate a random index by multiplying Math.random() by the length of the dishes array(This will guarantee that the random number will be between 0 and the length of the array)

3.Round that generated number to a whole number by using Math.floor() on the result.

4.Return the dish located at that index in dishes.
*/

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

/*
Now that we have a way to get a random dish from a course, we can create a .generateRandomMeal() function which will automatically generate a three-course meal for us. The function doesn't need to take any parameters.

1.The function should create an appetizer variable which should be the result of calling the .getRandomDishFromCourse() method when we pass in an appetizers string to it.

2.Create a main variable and dessert variable the same way you created the appetizer variable, but make sure to pass in the right course type.

3.Calculates the total price and returns a string that contains the name of each of the dishes and the total price of the meal, formatted as you like.

*/

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('drinks');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is Rp ${totalPrice.toFixed(3)}.`;
    },
};

/*
Now that we've finished our menu, object, let's use it to create a menu by adding some appetizers, drinks, and desserts with the .addDishToCourse() function. Add at least 3 dishes to each course (or more if you like!).
*/
menu.addDishToCourse('appetizers', 'Nasi Goreng', 15.000);
menu.addDishToCourse('appetizers', 'Sop Kambing', 15.000);
menu.addDishToCourse('appetizers', 'Sate', 14.000);

menu.addDishToCourse('drinks', 'Susu Jahe', 5.000);
menu.addDishToCourse('drinks', 'Es Jeruk', 8.000);
menu.addDishToCourse('drinks', 'Cipas', 20.000);

menu.addDishToCourse('desserts', 'Kentang Goreng', 7.500);
menu.addDishToCourse('desserts', 'Jamur', 9.000);
menu.addDishToCourse('desserts', 'Siomay', 5.000);



/*Once your menu has items inside it, generate a meal by using the.generateRandomMeal() function on your menu, and save it to a variable called meal.Lastly, print out your meal variable to see what meal was generated for you.*/
let meal = menu.generateRandomMeal();

console.log(meal);