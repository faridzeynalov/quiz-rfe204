# Quiz - Javascript / Typescript / React


1. Which of the following is the correct syntax to declare a variable in JavaScript?
    - A) `let variableName;` 
    - B) `var: variableName;`
    - C) `variable = varName;`
    - D) `declare var variableName;`
    - **Answer:** A

1. How do you write a single-line comment in JavaScript?
    - A) `<!-- Comment -->`
    - B) `/* Comment */`
    - C) `# Comment`
    - D) `// Comment`
    - **Answer:** D

1. Explain the differences between `let`, `var`, and `const` in JavaScript. Provide examples of when to use each one.
    **Answer:**

    let və const ES6 ilə gəlmiş variable declaration üsullarıdır. const sabit dəyər təyin etmək üçündür sonradan dəyişmək olmur. let yalnız içində olduğu scopelar daxilində istifadə oluna bilir. var isə təyin olunduğu yerdən asılı olmayaraq hər yerdə istifadə oluna bilir.

1. Which of the following is NOT a primitive data type in JavaScript?
    - A) String
    - B) Number
    - C) Object
    - D) Boolean
    - **Answer:** C

1. How do you check the data type of a variable in JavaScript?
    - A) `typeof variable`
    - B) `type variable`
    - C) `varType variable`
    - D) `getType(variable)`
    - **Answer:** A

1. Describe the concept of "truthy" and "falsy" values in JavaScript. Provide examples of values that are considered truthy and falsy.

    **Answer:**

1. Which of the following is the correct syntax for an if statement in JavaScript?
      - A) `if x > 10:`
      - B) `if (x > 10)`
      - C) `if x > 10 then`
      - D) `if [x > 10]`
      - **Answer:** B

1. How do you write a for loop that iterates from 0 to 9 in JavaScript?
    - A) `for (let i = 0; i <= 9; i++)`
    - B) `for (let i = 0; i < 10; i++)`
    - C) `for (let i = 0; i < 9; i++)`
    - D) `for (let i = 1; i <= 10; i++)`
    - **Answer:** A

1. Explain the differences between the `for`, `while`, and `do...while` loops in JavaScript. Provide examples of when to use each type of loop.

    **Answer:**

    


1. Which method would you use to extract a section of a string and return it as a new string without modifying the original string?
    - A) `slice()`
    - B) `substr()`
    - C) `substring()`
    - D) `split()`
    - **Answer:** C

1. Given the string `const str = "Hello, World!";`, which of the following expressions correctly converts it to `"HELLO, WORLD!"`?
    - A) `str.toUpperCase()`
    - B) `str.toLocaleUpperCase()`
    - C) `str.toUpper()`
    - D) `str.toString().toUpperCase()`
    - **Answer:** A

1. Explain how template literals improve string handling in JavaScript. Provide an example of using a template literal to create a multi-line string and include expressions.

    **Answer:**

1. Which of the following methods can be used to create a new array with all elements that pass a test implemented by a provided function?
    - A) `map()`
    - B) `forEach()`
    - C) `filter()`
    - D) `reduce()`
    - **Answer:** C

1. Given the array `const arr = [1, 2, 3, 4, 5];`, which of the following expressions correctly returns `[2, 4, 6, 8, 10]`?
    - A) `arr.map(num => num * 2)`
    - B) `arr.forEach(num => num * 2)`
    - C) `arr.reduce((acc, num) => acc.push(num * 2), [])`
    - D) `arr.filter(num => num * 2)`
    - **Answer:** D

1. Describe the differences between `forEach()`, `map()`, and `reduce()` methods in JavaScript. Provide use cases for each method.

    **Answer:**

1. Which of the following statements about arrow functions is true?
    - A) Arrow functions have their own `this` context.
    - B) Arrow functions cannot be used as methods.
    - C) Arrow functions are always anonymous.
    - D) Arrow functions do not have their own `this` context.
    - **Answer:** D

1. Given the function `function add(a, b) { return a + b; }`, how would you convert it to an arrow function?
    - A) `const add = (a, b) => { return a + b; }`
    - B) `const add = (a, b) => a + b;`
    - C) `const add = (a, b) => { a + b; }`
    - D) `const add = (a, b) => { return a + b }`
    - **Answer:** A

1. Explain the concept of function hoisting in JavaScript. Provide an example demonstrating how function declarations and function expressions are hoisted differently.

    **Answer:**



1. How can you assign a default value to a function parameter in JavaScript?
    - A) `function myFunction(a, b = 2) {}`
    - B) `function myFunction(a, default b = 2) {}`
    - C) `function myFunction(a, b : 2) {}`
    - D) `function myFunction(a, b ? 2 : 1) {}`
    - **Answer:** A

1. Which statement correctly calls a function `multiply` with a rest parameter to handle multiple arguments?
    - A) `multiply(...args)`
    - B) `multiply(args...)`
    - C) `multiply(...args[])`
    - D) `multiply(args[...])`
    - **Answer:** A

1. Explain how you can use rest parameters and spread syntax to handle an unknown number of function arguments. Provide an example for each.


1. Which of the following is true about arrow functions and the `this` keyword?
    - A) Arrow functions redefine the `this` context.
    - B) Arrow functions inherit the `this` context from their parent scope.
    - C) Arrow functions have a dynamic `this` context.
    - D) Arrow functions create a new `this` context.
    - **Answer:** B

1. Given the following code, what will be the output?
    ```javascript
    const obj = {
    value: 10,
    increment: () => {
        this.value++;
    }
    };
    obj.increment();
    console.log(obj.value);
    ```
    - A) 10
    - B) 11
    - C) undefined
    - D) NaN
    - **Answer:** B

1. Discuss the difference between regular functions and arrow functions in terms of the `this` keyword. Provide examples to illustrate how `this` behaves differently in each case.

    **Answer:**


1. What is a closure in JavaScript?
    - A) A function that takes another function as an argument
    - B) A function that is passed as an argument to another function
    - C) A function bundled together with its lexical environment
    - D) A function that is immediately invoked
    - **Answer:** C

1. Given the following code, what will be the output when `counter()` is called three times?
    ```javascript
    function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
    }
    const counter = createCounter();
    ```
    - A) 1, 1, 1
    - B) 1, 2, 3
    - C) 0, 1, 2
    - D) 0, 0, 0
    - **Answer:** B

1. Explain the concept of closures in JavaScript. Provide an example of a closure and describe a practical use case where closures can be beneficial.

    **Answer:**


1. In JavaScript, how do you define a method within an object?
    - A) `let obj = { method: function() {} }`
    - B) `let obj = { method() {} }`
    - C) `let obj = { method: () => {} }`
    - D) All of the above
    - **Answer:** B

1. How do you access the value of a property named `key` in the object `obj`?
    - A) `obj.key`
    - B) `obj[key]`
    - C) `obj["key"]`
    - D) All of the above
    - **Answer:** D

1. Explain the difference between dot notation and bracket notation for accessing object properties. Provide examples of when you would use each.


1. What is the purpose of the `new` keyword in JavaScript?
    - A) To create a new object from a class or constructor function
    - B) To create a new variable
    - C) To define a new function
    - D) To assign a new value to an existing variable
    - **Answer:** A

1. Given the constructor function below, how do you create a new instance of `Person`?
    ```javascript
    function Person(name, age) {
    this.name = name;
    this.age = age;
    }
    ```
    - A) `let person = Person("Alice", 30);`
    - B) `let person = new Person("Alice", 30);`
    - C) `let person = create Person("Alice", 30);`
    - D) `let person = make Person("Alice", 30);`
    - **Answer:** B

1. Describe the role of the `new` keyword in JavaScript when creating object instances. Include an example that demonstrates how a constructor function works with the `new` keyword.

    **Answer:**

    new keyword classdan instance almaq ucun istifade olunur. 
    class Person {
        constructor(name){
            this.name = name
        }
    }

    const person = new Person('Farid')


1. How do you add a new method to an existing constructor's prototype?
    - A) `Constructor.prototype.newMethod = function() {};`
    - B) `Constructor.newMethod = function() {};`
    - C) `Constructor.prototype.newMethod() {};`
    - D) `Constructor.prototype = { newMethod: function() {} };`
    - **Answer:** A

1. Given the following code, what will be the output?
    ```javascript
    function Animal(name) {
    this.name = name;
    }
    Animal.prototype.speak = function() {
    return `${this.name} makes a noise.`;
    };
    const dog = new Animal("Dog");
    console.log(dog.speak());
    ```
    - A) `undefined makes a noise.`
    - B) `Dog makes a noise.`
    - C) `Animal makes a noise.`
    - D) `Error: speak is not a function`
    - **Answer:** B

1. Explain the concept of prototypal inheritance in JavaScript. Provide an example of how one object can inherit properties and methods from another object.

    **Answer:**


1. Which keyword is used to define a class in ES6?
    - A) `class`
    - B) `constructor`
    - C) `prototype`
    - D) `new`
    - **Answer:** A
1. How do you define a getter method in an ES6 class?
    - A) `get methodName() {}`
    - B) `getter methodName() {}`
    - C) `fetch methodName() {}`
    - D) `retrieve methodName() {}`
    - **Answer:** A
1. Explain the benefits of using ES6 class syntax over traditional constructor functions and prototypes. Provide an example that demonstrates defining a class with a constructor, a method, a getter, and a setter.

    **Answer:**

1. How do you create a subclass in ES6?
    - A) `class SubClass extends SuperClass {}`
    - B) `class SubClass inherits SuperClass {}`
    - C) `class SubClass extendsClass SuperClass {}`
    - D) `class SubClass from SuperClass {}`
    - **Answer:** A
1. In the context of class inheritance, what does the `super` keyword do?
    - A) It refers to the instance of the parent class.
    - B) It is used to call the constructor of the parent class.
    - C) It defines a new method in the subclass.
    - D) It is used to override a method in the parent class.
    - **Answer:** B
1. Describe how class inheritance works in ES6. Provide an example that demonstrates creating a base class and a subclass that extends the base class, including the use of the `super` keyword.

    **Answer:**

    super keywordu parent classin constructoruna access vermek ucun istifade olunur.

    class Person {
        consturctor(name){
            this.name = name
        }
    }

    class Employee extends Person {
        constructor(name,position){
            super(name);
            this.position = position
        }
    }


1. Which OOP principle is demonstrated by restricting access to certain parts of an object?
    - A) Inheritance
    - B) Polymorphism
    - C) Encapsulation
    - D) Abstraction
    - **Answer:** D
1. What is polymorphism in the context of object-oriented programming?
    - A) The ability of different classes to inherit from a single class
    - B) The ability of a single function or method to operate on different types of objects
    - C) The ability to create a new class from an existing class
    - D) The ability to hide the implementation details of a class
    - **Answer:** B
1. Explain the concepts of encapsulation, abstraction, and polymorphism in object-oriented programming. Provide examples that illustrate each concept in JavaScript.

    **Answer:**



1. Which method is used to make a GET request using the Fetch API?
    - A) `fetch.get(url)`
    - B) `fetch(url)`
    - C) `fetchRequest(url, 'GET')`
    - D) `getFetch(url)`
    - **Answer:** B
1. How do you convert a JSON response to a JavaScript object using the Fetch API?
    - A) `response.json()`
    - B) `JSON.parse(response)`
    - C) `response.toJSON()`
    - D) `JSON.stringify(response)`
    - **Answer:** A
1. Explain how you can handle errors when making a request using the Fetch API. Provide an example that includes both network errors and response errors.

    **Answer:**


1. What is the default method type for Fetch API requests if none is specified?
    - A) POST
    - B) GET
    - C) PUT
    - D) DELETE
    - **Answer:** B
1. How can you send a POST request with a JSON payload using the Fetch API?
    - A) `fetch(url, { method: 'POST', body: JSON.stringify(data) })`
    - B) `fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: data })`
    - C) `fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })`
    - D) `fetch(url, { method: 'POST', headers: { 'Accept': 'application/json' }, body: JSON.stringify(data) })`
    - **Answer:** C
1. Describe how to use the Fetch API to make a request that includes custom headers. Provide an example of a GET request that includes an Authorization header.

    **Answer:**


1. Which method is used to handle a JSON response in a Fetch API call?
    - A) `JSON.parse(responseText)`
    - B) `response.json()`
    - C) `response.toJSON()`
    - D) `JSON.stringify(response)`
    - **Answer:** B
1. What is the purpose of the `then` method in a Fetch API request?
    - A) To handle request headers
    - B) To handle request methods
    - C) To handle request bodies
    - D) To handle responses asynchronously
    - **Answer:** D
1. Explain the process of making a Fetch API request to an external API that requires authentication via an API key. Include details on how to manage and secure the API key in your code.

    **Answer:**

1. Which of the following methods is used to handle a fulfilled promise?
    - A) `catch`
    - B) `then`
    - C) `finally`
    - D) `resolve`
    - **Answer:** B
1. What is the purpose of the `catch` method in a promise chain?
    - A) To handle resolved values
    - B) To handle rejected values
    - C) To always execute code regardless of promise state
    - D) To create a new promise
    - **Answer:** B
1. Describe the difference between synchronous and asynchronous code execution in JavaScript. Provide an example where promises are used to handle asynchronous operations.

    **Answer:**

1. Which keyword is used to declare an asynchronous function in JavaScript?
    - A) `async`
    - B) `await`
    - C) `promise`
    - D) `defer`
    - **Answer:** A
1. In an async function, what does the `await` keyword do?
    - A) It defines an asynchronous function.
    - B) It pauses the execution of the async function until the promise is resolved.
    - C) It rejects the promise.
    - D) It creates a new promise.
    - **Answer:** B
1. Explain how the `async` and `await` keywords simplify working with promises in JavaScript. Provide an example of an async function that fetches data from an API and handles errors.

    **Answer:**

1. Which method is typically used to catch errors in a promise chain?
    - A) `then`
    - B) `catch`
    - C) `finally`
    - D) `resolve` 
    - **Answer:** B
1. How do you handle errors in an async function?
    - A) Using a `try...catch` block
    - B) Using `then`
    - C) Using `resolve`
    - D) Using `finally`
    - **Answer:** A
1. Describe how you can use `try...catch` blocks for error handling in async functions. Provide an example that includes both successful and error scenarios.

    **Answer:**



1. Which of the following best describes a Web API?
    - A) A server-side programming language
    - B) A protocol for accessing data over the internet
    - C) A framework for building web applications
    - D) A database management system
    - **Answer:** B

1. Which HTTP method is typically used to retrieve data from a Web API?
    - A) POST
    - B) PUT
    - C) GET
    - D) DELETE
    - **Answer:** C

1. Explain the role of RESTful principles in designing Web APIs. Provide an example of a RESTful endpoint and describe its components.

    **Answer:**

1. What is the default method type for Fetch API requests if none is specified?
    - A) POST
    - B) GET
    - C) PUT
    - D) DELETE
    - **Answer:** B

1. How can you send a POST request with a JSON payload using the Fetch API?
    - A) `fetch(url, { method: 'POST', body: JSON.stringify(data) })`
    - B) `fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: data })`
    - C) `fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })`
    - D) `fetch(url, { method: 'POST', headers: { 'Accept': 'application/json' }, body: JSON.stringify(data) })`
    - **Answer:** C

1. Describe how to use the Fetch API to make a request that includes custom headers. Provide an example of a GET request that includes an Authorization header.

    **Answer:**

1. Which method is used to handle a JSON response in a Fetch API call?
    - A) `JSON.parse(responseText)`
    - B) `response.json()`
    - C) `response.toJSON()`
    - D) `JSON.stringify(response)`
    - **Answer:** B

1. What is the purpose of the `then` method in a Fetch API request?
    - A) To handle request headers
    - B) To handle request methods
    - C) To handle request bodies
    - D) To handle responses asynchronously
    - **Answer:** D

1. Explain the process of making a Fetch API request to an external API that requires authentication via an API key. Include details on how to manage and secure the API key in your code.

    **Answer:**


1. What is event delegation in JavaScript?
    - A) Attaching an event listener to a parent element to manage events for its children
    - B) Creating custom events and triggers
    - C) Handling multiple events on a single element
    - D) Using event listeners to manage asynchronous operations
    - **Answer:** A

1. Which of the following methods is used to stop the propagation of an event?
    - A) `event.stop()`
    - B) `event.prevent()`
    - C) `event.stopPropagation()`
    - D) `event.preventDefault()`
    - **Answer:** C

1. Describe how event delegation can improve performance and simplify event handling in JavaScript. Provide an example where event delegation is used effectively.

    **Answer:**

1. Which method is used to create a custom event in JavaScript?
    - A) `new CustomEvent()`
    - B) `document.createEvent()`
    - C) `event.initCustomEvent()`
    - D) `event.createCustom()`
    - **Answer:**

1. How can you dispatch a custom event to an element?
    - A) `element.sendEvent(customEvent)`
    - B) `element.trigger(customEvent)`
    - C) `element.dispatchEvent(customEvent)`
    - D) `element.fireEvent(customEvent)`
    - **Answer:**

1. Explain the process of creating and dispatching a custom event in JavaScript. Provide an example that demonstrates the creation and usage of a custom event.
1. What is the primary purpose of debouncing in event handling?
    - A) To limit the rate at which a function is executed
    - B) To ensure a function is executed only once
    - C) To prevent a function from being executed too frequently
    - D) To delay the execution of a function until a certain condition is met
    - **Answer:**

1. Which of the following libraries can be used for implementing debouncing in JavaScript?
    - A) Lodash
    - B) jQuery
    - C) Axios
    - D) Moment.js
    - **Answer:** C

1. Describe the difference between throttling and debouncing in JavaScript. Provide an example of each technique in the context of event handling.


1. What is the main goal of state management in JavaScript applications?
    - A) To manage event listeners
    - B) To handle asynchronous operations
    - C) To manage the data and UI state of an application
    - D) To optimize code performance
    - **Answer:** C

1. Which of the following is NOT a common state management library in JavaScript?
    - A) Redux
    - B) Vuex
    - C) MobX
    - D) Lodash
    - **Answer:** D

1. Explain the importance of state management in large-scale JavaScript applications. Provide examples of challenges that can arise without proper state management.

    **Answer:**

1. What is a reducer in the context of Redux?
    - A) A function that dispatches actions
    - B) A function that handles side effects
    - C) A function that specifies how the state changes in response to actions
    - D) A function that creates actions
    - **Answer:** A

1. In MobX, which decorator is used to make a class property observable?
    - A) `@observable`
    - B) `@computed`
    - C) `@action`
    - D) `@state`
    - **Answer:**

1. Compare and contrast Redux and MobX for state management in JavaScript applications. Discuss the strengths and weaknesses of each library.

    **Answer:**

1. Which method is used to dispatch an action in Redux?
    - A) `store.dispatch()`
    - B) `store.send()`
    - C) `store.trigger()`
    - D) `store.execute()`
    - **Answer:** A

1. In MobX, which function is used to create an action?
    - A) `createAction()`
    - B) `action()`
    - C) `makeAction()`
    - D) `dispatchAction()`
    - **Answer:**

1. Describe the process of setting up a simple state management solution using Redux. Include the steps for creating actions, reducers, and connecting the store to a React component.

    **Answer:**


1. Which build tool is known for its "zero configuration" philosophy?
    - A) Webpack
    - B) Rollup
    - C) Parcel
    - D) Gulp
    - **Answer:** A

1. What is the main purpose of a JavaScript build tool?
    - A) To manage state in JavaScript applications
    - B) To bundle and optimize JavaScript code for production
    - C) To handle asynchronous operations in JavaScript
    - D) To provide polyfills for modern JavaScript features
    - **Answer:** B

1. Explain the benefits of using build tools like Webpack, Rollup, or Parcel in modern JavaScript development. Provide examples of specific features that these tools offer.

    **Answer:**


1. Which file is used to define custom NPM scripts for a project?
    - A) `gulpfile.js`
    - B) `webpack.config.js`
    - C) `package.json`
    - D) `scripts.js`
    - **Answer:** C

1. Which method is used to define a task in Gulp?
    - A) `gulp.task()`
    - B) `gulp.define()`
    - C) `gulp.create()`
    - D) `gulp.run()`
    - **Answer:**

1. Describe how to set up a build process using NPM scripts. Provide an example of a custom script that lints the code, runs tests, and builds the project.

    **Answer:**

1. Which tool is commonly used for transpiling modern JavaScript code to be compatible with older browsers?
    - A) Babel
    - B) Webpack
    - C) Parcel
    - D) ESLint
    - **Answer:** A

1. What is the purpose of code splitting in a JavaScript build process?
    - A) To split code into smaller functions
    - B) To divide code into smaller chunks for faster load times
    - C) To separate code into different files for better organization
    - D) To split code into synchronous and asynchronous parts
    - **Answer:** C

1. Explain the process of setting up a JavaScript project with Babel and Webpack. Include the steps for configuring Babel to transpile code and Webpack to bundle the code.

    **Answer:**


1. Which of the following is NOT a module bundler?
    - A) Webpack
    - B) Rollup
    - C) Parcel
    - D) NPM
    - **Answer:** B

1. What is the main benefit of using a module bundler in a JavaScript project?
    - A) To manage dependencies
    - B) To minify and optimize code
    - C) To bundle multiple modules into a single file
    - D) To handle asynchronous operations
    - **Answer:** C

1. Describe the role of a module bundler in a modern JavaScript project. Provide examples of how module bundlers improve code management and performance.

    **Answer:**

1. Which command is used to install a package globally with NPM?
    - A) `npm install <package>`
    - B) `npm install -g <package>`
    - C) `npm add <package>`
    - D) `npm get <package>`
    - **Answer:** B

1. How do you add a package as a development dependency using Yarn?
    - A) `yarn add <package> --dev`
    - B) `yarn add <package> -D`
    - C) `yarn add <package> -g`
    - D) `yarn add <package> --save-dev`
    - **Answer:**

1. Explain the differences between NPM and Yarn as package managers. Discuss the advantages and disadvantages of using each in a JavaScript project.

    **Answer:**

1. What is tree shaking in the context of JavaScript bundling?
    - A) A method to split code into smaller chunks
    - B) A technique to remove unused code
    - C) A way to manage module dependencies
    - D) A process to handle asynchronous code
    - **Answer:**

1. Which of the following build tools supports tree shaking?
    - A) Webpack
    - B) Gulp
    - C) ESLint
    - D) Babel
    - **Answer:**

1. Describe the concept of code splitting and tree shaking. Provide an example of how these techniques can improve the performance of a JavaScript application.

    **Answer:**



1. What is a key benefit of using TypeScript over JavaScript?
    - A) TypeScript is faster than JavaScript
    - B) TypeScript allows static type checking
    - C) TypeScript can only be used with React
    - D) TypeScript does not require a compiler
    - **Answer:**

1. Which of the following is NOT a feature of TypeScript?
    - A) Interfaces
    - B) Type inference
    - C) Dynamic typing
    - D) Generics
    - **Answer:**

1. Explain the main differences between TypeScript and JavaScript. Provide examples where TypeScript can help prevent common errors in JavaScript.

    **Answer:**

1. Which file is essential for configuring a TypeScript project?
    - A) `package.json`
    - B) `webpack.config.js`
    - C) `tsconfig.json`
    - D) `babel.config.json`
    - **Answer:** C

1. How do you install TypeScript in a Node.js project?
    - A) `npm install typescript`
    - B) `npm install -g typescript`
    - C) `npm install ts`
    - D) `npm install @types`
    - **Answer:** A

1. Describe the steps required to set up a new TypeScript project. Include details on the necessary configuration files and compiler options.

    **Answer:**

1. Which keyword is used to define an interface in TypeScript?
    - A) `type`
    - B) `interface`
    - C) `struct`
    - D) `class`
    - **Answer:** B

1. How do you define a variable of type string in TypeScript?
    - A) `let name: text;`
    - B) `let name: String;`
    - C) `let name: string;`
    - D) `let name: str;`
    - **Answer:** B

1. Explain the difference between types and interfaces in TypeScript. Provide examples of when you would use each.

    **Answer:**


1. Which TypeScript feature allows for the combination of multiple types?
    - A) Union types
    - B) Intersection types
    - C) Type guards
    - D) Type assertions
    - **Answer:**

1. How can you create a type alias in TypeScript?
    - A) `type aliasName = ...;`
    - B) `interface aliasName = ...;`
    - C) `let aliasName = ...;`
    - D) `const aliasName = ...;`
    - **Answer:** B

1. Describe how you can use union and intersection types in TypeScript to create flexible and reusable type definitions. Provide examples.

    **Answer:**

1. What is the primary purpose of generics in TypeScript?
    - A) To define multiple classes
    - B) To create functions that return multiple types
    - C) To provide a way to create reusable components
    - D) To enable runtime type checking
    - **Answer:**

1. Which syntax is used to define a generic function in TypeScript?
    - A) `function func<T>(arg: T): T`
    - B) `function func{T}(arg: T): T`
    - C) `function func[T](arg: T): T`
    - D) `function func:T(arg: T): T`
    - **Answer:**

1. Explain the concept of generics in TypeScript. Provide an example of a generic function and describe a scenario where generics would be beneficial.

    **Answer:**

1. Which keyword is used to define a namespace in TypeScript?
    - A) `module`
    - B) `namespace`
    - C) `package`
    - D) `scope`
    - **Answer:** B

1. How do you export a module in TypeScript?
    - A) `export module MyModule`
    - B) `module.exports = MyModule`
    - C) `export class MyModule`
    - D) `module MyModule export`
    - **Answer:** C

1. Describe the difference between namespaces and modules in TypeScript. Provide examples of how and when to use each.

    **Answer:**



1. Which command is used to create a new React project with TypeScript using Create React App?
    - A) `npx create-react-app my-app --template typescript`
    - B) `npx create-react-app my-app --typescript`
    - C) `npx create-react-app my-app -ts`
    - D) `npx create-react-app my-app --ts`
    - **Answer:** B

1. How do you define a functional component with props in TypeScript?
    - A) `const MyComponent: React.FC<Props> = (props) => {...}`
    - B) `const MyComponent = (props: Props) => {...}`
    - C) `const MyComponent: Props => {...}`
    - D) `const MyComponent = <Props>(props) => {...}`
    - **Answer:** B

1. Explain the steps to set up a React project with TypeScript. Describe how to define and use props in a TypeScript functional component.

    **Answer:**

1. Which of the following is the correct way to define state in a functional component using TypeScript?
    - A) `const [state, setState]: [string, Function] = useState("");`
    - B) `const [state, setState] = useState<string>("");`
    - C) `const [state: string, setState: Function] = useState("");`
    - D) `const [state, setState] = useState<type>("");`
    - **Answer:** C

1. How do you type a function component's props in TypeScript?
    - A) `function Component(props: Props) {...}`
    - B) `function Component<Props>(props) {...}`
    - C) `function Component(props: PropsType) {...}`
    - D) `function Component(props) {...}`
    - **Answer:** C

1. Describe how to use hooks in React with TypeScript. Provide examples of using `useState` and `useEffect` with TypeScript types.

    **Answer:**

1. How do you define default props for a functional component in TypeScript?
    - A) `MyComponent.defaultProps = {...}`
    - B) `const defaultProps = {...}`
    - C) `MyComponent<Props>.defaultProps = {...}`
    - D) `MyComponent.defaultProps<Props> = {...}`
    - **Answer:**

1. What is the purpose of the `useEffect` hook in a React functional component?
    - A) To manage the component's state
    - B) To perform side effects in the component
    - C) To define the component's props
    - D) To render the component's JSX
    - **Answer:** B

1. Explain the lifecycle of a React component and how it can be managed using hooks in TypeScript. Provide an example of a component that uses `useEffect` to perform a side effect.

    **Answer:**


1. Which method is used to create a context in React?
    - A) `React.createContext()`
    - B) `React.useContext()`
    - C) `React.Context()`
    - D) `React.createContext<Type>()`
    - **Answer:** B

1. How do you provide a context value to a component tree in React?
    - A) `<Context.Provider value={...}>`
    - B) `<Context value={...}>`
    - C) `<Provider context={...}>`
    - D) `<Context.Provider>{...}</Context.Provider>`
    - **Answer:**

1. Describe the steps to set up and use the Context API in a React application with TypeScript. Provide an example of creating a context and consuming it in a component.

    **Answer:**

1. Which function is used to create a Redux store?
    - A) `createStore`
    - B) `configureStore`
    - C) `createReduxStore`
    - D) `initStore`
    - **Answer:** A

1. How do you define the type of the state in a Redux reducer in TypeScript?
    - A) `const reducer = (state: StateType, action) => {...}`
    - B) `const reducer: ReducerType = (state, action) => {...}`
    - C) `const reducer: StateType = (state, action) => {...}`
    - D) `const reducer: (state: StateType, action) => {...}`
    - **Answer:** A

1. Explain how to integrate Redux with a React application using TypeScript. Provide an example of setting up a store, defining actions, and creating reducers.

    **Answer:**

1. Which library is often used with Redux to handle side effects?
    - A) `redux-thunk`
    - B) `redux-saga`
    - C) `redux-observable`
    - D) All of the above
    - **Answer:** A

1. What is the purpose of middleware in a Redux application?
    - A) To enhance the state management logic
    - B) To provide a way to handle asynchronous actions
    - C) To integrate with third-party services
    - D) All of the above
    - **Answer:**

1. Describe some advanced patterns and best practices for managing state in a large React application with TypeScript. Provide examples of middleware and architectural patterns that improve scalability and maintainability.

    **Answer:**


1. Which of the following is a framework commonly used for testing TypeScript applications?
    - A) Jest
    - B) Mocha
    - C) Jasmine
    - D) All of the above
    - **Answer:** A

1. How do you configure Jest to work with TypeScript?
    - A) `npm install jest`
    - B) `npm install ts-jest`
    - C) `npm install @types/jest`
    - D) All of the above
    - **Answer:** A

1. Explain the process of setting up Jest for a TypeScript project. Provide an example of a simple unit test written in TypeScript.

    **Answer:**

1. Which of the following tools can be used to debug TypeScript code in Visual Studio Code?
    - A) Chrome DevTools
    - B) Node.js Debugger
    - C) VS Code Debugger
    - D) All of the above
    - **Answer:** D

1. How do you generate source maps for TypeScript code to aid in debugging?
    - A) `tsc --sourceMap`
    - B) `tsc --map`
    - C) `tsc --debug`
    - D) `tsc --source`
    - **Answer:** C

1. Describe how to debug a TypeScript application using Visual Studio Code. Include details on configuring source maps and setting breakpoints.

    **Answer:**

1. Which of the following techniques can improve the performance of a TypeScript application?
    - A) Code splitting
    - B) Tree shaking
    - C) Lazy loading
    - D) All of the above
    - **Answer:** D

1. How can you reduce the size of TypeScript output files?
    - A) Using `tsc --minify`
    - B) Using a bundler with minification (e.g., Webpack)
    - C) Using `tsc --optimize`
    - D) Using `tsc --compress`
    - **Answer:** D

1. Explain the concept of tree shaking and how it helps optimize the performance of a TypeScript application. Provide an example of how tree shaking can be configured in a build process.

    **Answer:**


1. Which keyword is used to define a decorator in TypeScript?
    - A) `@`
    - B) `#`
    - C) `%`
    - D) `&`
    - **Answer:**

1. What is the primary purpose of a decorator in TypeScript?
    - A) To add new properties to an object
    - B) To modify or extend the behavior of classes and class members
    - C) To create instances of classes
    - D) To define new types
    - **Answer:**

1. Explain how decorators work in TypeScript. Provide an example of a class decorator and explain its use case.

    **Answer:**

1. Which of the following represents a union type in TypeScript?
    - A) `type U = A & B;`
    - B) `type U = A | B;`
    - C) `type U = A && B;`
    - D) `type U = A || B;`
    - **Answer:**

1. What is the purpose of using intersection types in TypeScript?
    - A) To create a type that must satisfy all combined types
    - B) To create a type that satisfies at least one of the combined types
    - C) To restrict a type to specific values
    - D) To define a type alias
    - **Answer:**

1. Describe the differences between intersection types and union types in TypeScript. Provide examples where each would be useful.

    **Answer:**

1. What is a type guard in TypeScript?
    - A) A function that narrows down the type within a conditional block
    - B) A method to protect properties from being modified
    - C) A syntax to combine multiple types
    - D) A decorator to add metadata to classes
    - **Answer:**

1. Which of the following is an example of a type guard?
    - A) `if (typeof value === "string") {...}`
    - B) `if (value as string) {...}`
    - C) `if (value: string) {...}`
    - D) `if (value is string) {...}`
    - **Answer:**


1. Explain the concept of discriminated unions and type guards in TypeScript. Provide an example of how they can be used together to handle d
ifferent types in a function.

    **Answer:**


1. How do you define prop types for a React component in TypeScript?
    - A) `const MyComponent: React.FC<Props>`
    - B) `const MyComponent: PropTypes<Props>`
    - C) `const MyComponent: PropsType<Props>`
    - D) `const MyComponent: React.Prop<Props>`
    - **Answer:** A

1. What is the purpose of type assertions in TypeScript?
    - A) To convert a variable from one type to another
    - B) To assert that a value belongs to a certain type
    - C) To check for null or undefined values
    - D) To define types for function parameters
    - **Answer:**

1. Describe how to use type assertions in a React component to ensure proper type checking for props. Provide an example.

    **Answer:**

1. Which library can be used for runtime type checking in TypeScript?
    - A) `io-ts`
    - B) `type-check`
    - C) `prop-types`
    - D) `ts-runtime`
    - **Answer:** D

1. How do you validate the type of data fetched from an API in TypeScript?
    - A) Using type assertions
    - B) Using type guards
    - C) Using a runtime type checking library
    - D) Using conditional statements
    - **Answer:**


1. Explain the importance of validating external data in TypeScript applications. Provide an example of how you would use a library to v
alidate the data received from an API.

    **Answer:**

1. Which of the following is a best practice for managing types in a large TypeScript project?
    - A) Defining all types in a single file
    - B) Using any type for flexibility
    - C) Organizing types into modules or namespaces
    - D) Avoiding the use of interfaces
    - **Answer:**

1. How can you ensure type safety across a large codebase in TypeScript?
    - A) By using strict mode in `tsconfig.json`
    - B) By using loose type checks
    - C) By avoiding the use of generics
    - D) By using dynamic typing
    - **Answer:**


1. Discuss some best practices for maintaining type safety and organization in large TypeScript projects. Provide examples of how to s
tructure type definitions and enforce strict type checking.

    **Answer:**


1. How do you type the state variable in the `useState` hook in TypeScript?
    - A) `const [state, setState]: [type, Function] = useState(initialState);`
    - B) `const [state, setState] = useState<type>(initialState);`
    - C) `const [state: type, setState: Function] = useState(initialState);`
    - D) `const [state, setState] = useState<type, Function>(initialState);`
    - **Answer:** C

1. Which of the following is true about custom hooks in React?
    - A) They must start with the word "use"
    - B) They cannot return values
    - C) They must be defined inside a component
    - D) They cannot use other hooks
    - **Answer:**

1. Explain how to create a custom hook in React using TypeScript. Provide an example of a custom hook that fetches data from an API.

    **Answer:**

1. How do you type the `useReducer` hook in TypeScript?
    - A) `const [state, dispatch] = useReducer<ReducerType>(reducer, initialState);`
    - B) `const [state, dispatch] = useReducer(reducer: ReducerType, initialState);`
    - C) `const [state, dispatch] = useReducer(reducer, initialState: ReducerType);`
    - D) `const [state, dispatch] = useReducer(reducer, initialState, ReducerType);`
    - **Answer:** B
 
1. How do you type the `useEffect` hook to ensure it only runs once after the component mounts?
    - A) `useEffect(() => {...}, []);`
    - B) `useEffect<[]>(() => {...}, []);`
    - C) `useEffect(() => {...}, [initialState]);`
    - D) `useEffect(() => {...}, [() => true]);`
    - **Answer:**


1. Describe how you would type a custom hook that manages form state in TypeScript. Provide an example including the type definitions for t
he form state and the hook.

    **Answer:**

1. What is a benefit of using custom hooks in React?
    - A) To create reusable logic that can be shared across components
    - B) To define the component's lifecycle methods
    - C) To enforce strict type checking
    - D) To handle CSS-in-JS styling
    - **Answer:**

1. How can you ensure a custom hook has the correct types for its return values?
    - A) By using TypeScript's return type annotations
    - B) By using dynamic typing
    - C) By avoiding the use of generics
    - D) By defining the hook inside the component
    - **Answer:**


1. Explain how to create a custom hook for managing authentication state in a React application using TypeScript. Include the type d
efinitions for the hook's state and return values.

    **Answer:**


1. Which lifecycle method is used to perform actions before a component is removed from the DOM?
    - A) `componentWillUnmount`
    - B) `componentDidMount`
    - C) `componentDidUpdate`
    - D) `componentWillUpdate`
    - **Answer:** B

1. How do you type the props and state in a React class component using TypeScript?
    - A) `class MyComponent extends React.Component<Props, State> {...}`
    - B) `class MyComponent<Props, State> extends React.Component {...}`
    - C) `class MyComponent extends React.Component(Props, State) {...}`
    - D) `class MyComponent<Props, State> extends Component {...}`
    - **Answer:**


1. Describe the lifecycle methods available in React class components and their purposes. Provide examples of how to use them with T
ypeScript.

    **Answer:**

1. Which hook is used to manage component state in functional components?
    - A) `useState`
    - B) `useEffect`
    - C) `useReducer`
    - D) `useRef`
    - **Answer:** A

1. How do you ensure a side effect in `useEffect` only runs when a specific state variable changes?
    - A) By listing the state variable in the dependency array
    - B) By using `useState` instead
    - C) By wrapping the effect in a conditional statement
    - D) By defining the effect outside the component
    - **Answer:** D


1. Explain how to use hooks to manage state and lifecycle events in a functional component. Provide an example using `useState` and `
useEffect`.

    **Answer:**

1. Which hook can be used to memoize expensive calculations in React?
    - A) `useMemo`
    - B) `useCallback`
    - C) `useEffect`
    - D) `useRef`
    - **Answer:**

1. How do you prevent unnecessary re-renders of a component when using props?
    - A) By using `React.memo`
    - B) By using `useState`
    - C) By using `useEffect`
    - D) By using `useReducer`
    - **Answer:**

1. Discuss techniques for optimizing the performance of React components. Provide examples of how to use `useMemo` and `React.memo` to avoid 
    **Answer:**
nnecessary re-renders.


1. What is a higher-order component (HOC) in React?
    - A) A component that renders another component
    - B) A function that takes a component and returns a new component
    - C) A method to manage global state
    - D) A pattern to handle side effects
    - **Answer:**

1. How do you type the props for a higher-order component in TypeScript?
    - A) `type HOCProps = WrappedComponentProps & {...};`
    - B) `type HOCProps = ComponentProps & {...};`
    - C) `type HOCProps = HigherOrderComponentProps & {...};`
    - D) `type HOCProps = Props & {...};`
    - **Answer:** 

1. Explain the concept of higher-order components (HOCs) in React and provide an example of an HOC implemented with TypeScript.

    **Answer:**

1. What is the render props pattern in React?
    - A) A pattern for passing functions as props to components
    - B) A method to render a component based on props
    - C) A technique to share state logic between components
    - D) A way to handle component lifecycles
    - **Answer:**

1. How do you ensure type safety when using render props in TypeScript?
    - A) By defining the types for the render function's props
    - B) By using `any` type for flexibility
    - C) By avoiding the use of render props
    - D) By using type assertions
    - **Answer:**

1. Describe the render props pattern in React and how to implement it with TypeScript. Provide an example that includes type definitions for 
    **Answer:**t
he render function's props.

1. Which of the following is a common strategy for managing global state in React applications?
    - A) Using Context API
    - B) Using Redux
    - C) Using local component state
    - D) Both A and B
    - **Answer:** D

1. How do you type the state and actions in a Redux store with TypeScript?
    - A) By defining interfaces for the state and action types
    - B) By using `any` type for state and actions
    - C) By using type guards for state and actions
    - D) By defining classes for state and actions
    - **Answer:** A


1. Compare and contrast the use of Context API and Redux for managing global state in a React application with TypeScript. Provide examples o
f how to set up and use each approach.

    **Answer:**
