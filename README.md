# vue-provider-directory

## Assignment
Create a simple web-based contact directory that presents users with a list of contacts and allows them to add, edit, and delete. For convenience, users should be able to sort, filter, and search the contacts in the directory. Contacts should contain first name, last name, email, practice name, and specialty. 

Example input:
```
[
	{
		"last_name": "Harris",
		"first_name": "Mike",
		"email_address": "mharris@updox.com",
		"specialty": "Pediatrics",
		"practice_name": "Harris Pediatrics"
	},
	{
		"last_name": "Carlson",
		"first_name": "Mike",
		"email_address": "mcarlson@updox.com",
		"specialty": "Orthopedics",
		"practice_name": "Carlson Orthopedics"
	},
	{
		"last_name": "Juday",
		"first_name": "Tobin",
		"email_address": "tjuday@updox.com",
		"specialty": "General Medicine",
		"practice_name": "Juday Family Practice"
	}
]
```

## How-To
This application was built using Vue.js and is avalible for testing throug use of npm. JSON data is embedded in the project located in the /src/MOCK_DATA.json file. JSON Data will be refreshed upon page reload or application restart. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Assumptions

1. First Name, Last Name, and Email address are required and will never be null.
2. JSON will come formed correctly. 
3. No values including email address are required to be unique

## Design Choices
I Decided to use Vue.js for this project as it was the preferred language and I wanted to get exposure to the framework. This lead to making a few concessions when writing the code such as performing the sorting of providers with a series of buttons rather than a drowpdown. Another concession was using a switch statment to emit values realted to the sorting rather than programatically making the buttons and automating the Provider data to return an index for sorting.<br>
I made the decision to add a search functionality as it assisted me in understanding the framework, and also was an easier starting point before moving on to the sorting. This search functionality currently only operates on first and last name. 