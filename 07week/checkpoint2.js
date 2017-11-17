'use strict'

/*
Convert array to lines: "Marylyn Manroe paid 19.99 for a chair in new york city new york"
MM ->  attribute
1999 --> attribute
chair --> attribute
new york --> attribute
New York --> attribute

Convert object to a string using the map function.

Take the following array of objects and console.log each user 
and their corresponding data in the following form: "user_name paid 
amount for product in city, state." using map.
*/

let userArray = [
    {
            "customer": {
                "id": 1,
                "customerName":"Marilyn Monroe",
                "customerCity":"New York City",
                "customerState":"NY",
                "product":"Yellow Chair",
                "productPrice": 19.99
            }
        },
        {
            "customer": {
                "id": 2,
                "customerName":"Abraham Lincoln",
                "customerCity":"Boston",
                "customerState":"MA",
                "product":"Movie Tickets",
                "productPrice": 27.00
            }
        },
                {
            "customer": {
                "id": 3,
                "customerName":"John F. Kennedy",
                "customerCity":"Dallas",
                "customerState":"TX",
                "product":"Mustang Convertible",
                "productPrice": 24999.99
            }
        },
                {
            "customer": {
                "id": 4,
                "customerName":"Martin Luther King",
                "customerCity":"Burmingham",
                "customerState":"AL",
                "product":"Sandwiches",
                "productPrice": 7.99
            }
        },
];

// Convert object to a string using the map function
const mapObject = userArray.map((x) => {
   // console.log(x.customer.customerName); 

   // assign each attribute a name
   let name = x.customer.customerName;
   let price = x.customer.productPrice;
   let item = x.customer.product;
   let city = x.customer.customerCity;
   let state = x.customer.customerState;

   // print string
   console.log(name + " paid " + price + " for a " + item + " in " + city + ", " + state + ".");
});