# cars-db

## Install

	npm install https://github.com/beltingdv/cars-db.git
    
## Usage

```javascript
const carsDb = require('cars-db');

// Connect to database
carsDb.connect('DATABASE_URL');

// Get all
carsDb.getAll();
/*
Returns:

[{
    "_id" : "5995ec8f39b7840300ff8605",
    "make" : "Ford",
    "year" : 2010,
    "__v" : 0
}, {
    "_id" : "4495ec8f39b7840300ff8605",
    "make" : "Mazda",
    "year" : 2017,
    "__v" : 0
}]
*/

// Get by ID
carsDb.get('5995ec8f39b7840300ff8605');
/*
Returns:

{
    "_id" : "5995ec8f39b7840300ff8605",
    "make" : "Ford",
    "year" : 2010,
    "__v" : 0
}
*/

// Create
carsDb.add({ 
    make: 'Lexus',
    year: 2014
});

// Update by ID
carsDb.update('ID', { 
    make: 'Lexus',
    year: 2012
});

// Delete by ID
carsDb.remove('ID');
```

## Task

Create a REST API with endpoints to create, get all, and get by ID. The endpoint to get by ID should return  a list of models in addition to the make and year. Models can be retrieved for a given make and year combination using the `GetModels` command as documented in the following API:

[http://www.carqueryapi.com/documentation/api-usage/](http://www.carqueryapi.com/documentation/api-usage/)

Use the following connection string for the local MongoDB database:

	mongodb://localhost:27017/cars
