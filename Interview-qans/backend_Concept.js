/* ! Function currying
    Function currying is a technique of evaluating a function with multiple arguments,
      into a sequence of functions with a single argument.
    It is also known as partial function application.
*/
const add = (a, b) => {
    return a + b;
  };
  const add5 = (b) => add(5, b);
  console.log(add5(3)); // 8
  
  // ------------------------------------------------------------------------------------------------------
  
  //! Event loop
  //? The event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program. It works by making a request to some "event provider" (which generally blocks the request until an event has arrived), and then it calls the relevant event handler ("dispatches the event").
  //? The event loop allows the program to perform other tasks while waiting for the event provider to return an event.
  //? In simple terms, the event loop is a loop that looks for, and dispatches, events in an application. It works by making a request to the browser API (for example, an XHR request), and then it will listen for a response.
  //? When the response is received, the callback function that was passed to the API is executed.
  //? This callback is then added to the "callback queue", which is a list of callbacks to be executed.
  //? The event loop keeps checking this queue and when the stack is empty, it will take the first callback on the list and execute it.
  //? This process continues until the queue is empty as well.
  //? This is what is meant by "event loop": an infinite loop that is only broken when the call stack is empty.
  
  // Example
  const eventLoop = () => {
    console.log("This will be printed first");
    setTimeout(() => {
      console.log("This will be printed after 3 seconds");
    }, 3000);
    console.log("This will be printed second");
  };
  
  eventLoop();
  
  // ------------------------------------------------------------------------------------------------------
  
  //! Callback
  //? Callbacks are used so that a function can call another function. A callback function can run after another function has finished.
  //? Callbacks are important because they help us write asynchronous JavaScript.
  
  // Example
  const callbackFn = (req, res, next) => {
    console.log("This is a callback function");
    next();
  };
  
  // ------------------------------------------------------------------------------------------------------
  
  //! Promises
  //? Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. A Promise is created by using the new keyword and passing it a function with two parameters, resolve and reject. These are methods used to determine the outcome of the promise. The resolve and reject parameters are methods used to determine the outcome of the Promise. The syntax looks like this:
  
  //* const myPromise = new Promise((resolve, reject) => {
  //*   do something
  //* });
  
  // Example
  const myPromise = new Promise((resolve, reject) => {
    const x = 5;
    const y = 10;
    if (x === y) {
      resolve();
    } else {
      reject();
    }
  });
  
  myPromise
    .then(() => {
      console.log("Success");
    })
    .catch(() => {
      console.log("Error");
    });
  
  // ------------------------------------------------------------------------------------------------------
  
  //! Async/Await
  //? Async/Await is a new way to write asynchronous code. It is built on top of promises but it cleans up the syntax so we can write asynchronous code that looks synchronous.
  
  const asynchronousFunction = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Async/Await is awesome");
      }, 1000);
    });
  };
  
  const callAsyncFunction = async () => {
    console.log("calling");
    const result = await asynchronousFunction();
    console.log(result);
  };
  
  callAsyncFunction();
  
  // ------------------------------------------------------------------------------------------------------
  
  //! Higher order functions
  //? A higher-order function is a function that either accepts functions as parameters, returns a function, or both. Higher-order functions allow us to abstract over actions, not just values. They come in several forms. For example, we can have functions that create new functions.
  
  // Example
  const sub = (a, b) => {
    return a - b;
  };
  const subFrom20 = (a) => sub(20, a);
  console.log(subFrom20(5)); // 15
  
  // ------------------------------------------------------------------------------------------------------
  
  //! Closure
  //? Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). It is the combination in which the function is enclosed with its lexical environment. In simple words it can access the variables or objects from its parent block.
  
  //?Coming to the uses of closures:
  //* 1) In JavaScript, we can use private variables and methods using closures.
  //* 2) Closures help in maintaining the state between function calls without using a global variable.
  
  // Example
  const addition = (a) => {
    let c = 6;
    return (b) => {
      return a + b + c;
    };
  };
  const adding5 = addition(5);
  console.log(adding5(3)); // 14
  
  // ------------------------------------------------------------------------------------------------------
  
  //! Hoisting
  //? Accessing the function or variable before it is declared is known as hoisting.
  
  // Example 1
  console.log(x);
  var x = 5;
  console.log(x);
  
  // Example 2
  console.log(x);
  let x = 5;
  console.log(x);
  
  // Example 3
  console.log(x);
  const x = 5;
  console.log(x);
  
  // ------------------------------------------------------------------------------------------------------
  
  //! Middlewares
  //? Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
  //? If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
  
  // Example
  const express = require("express");
  const app = express();
  
  const myLogger = (req, res, next) => {
    console.time("Request");
    next();
    console.timeEnd("Request");
  };
  
  app.use(myLogger);
  
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
  app.listen(3000);
  
  // ------------------------------------------------------------------------------------------------------
  
  //! MVC middleware
  //? MVC stands for Model-View-Controller. It is a software design pattern that separates an application into three main logical components: the model, the view, and the controller. Each of these components are built to handle specific development aspects of an application.
  //? The model is the data, the view is the user interface, and the controller is the glue between the two taking the data and presenting that to the view of the user.
  
  // ------------------------------------------------------------------------------------------------------
  
  //! Types of middleware
  //? There are five types of middleware:
  //* 1) Application-level middleware - app.use(req, res, next)
  //* 2) Router-level middleware - router.use(req, res, next)
  //* 3) Error-handling middleware - app.use(err, req, res, next)
  //* 4) Built-in middleware - app.use(express.json())
  //* 5) Third-party middleware - app.use(cors())
  
  // ------------------------------------------------------------------------------------------------------
  
  //! API
  //? API stands for Application Programming Interface. It is a set of functions and procedures that allow the creation of applications that access the features or data of an operating system, application, or other service.
  
  // ------------------------------------------------------------------------------------------------------
  
  //! REST API
  //? REST stands for Representational State Transfer. It is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server.
  
  // ------------------------------------------------------------------------------------------------------
  
  //! HTTP methods
  //? HTTP methods are used to define the action that needs to be performed on a given resource. The most common HTTP methods are GET, POST, PUT, PATCH, and DELETE.
  //* 1) GET - Requests a representation of the specified resource. Requests using GET should only retrieve data.
  //* 2) POST - Used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
  //* 3) PUT - Replaces all current representations of the target resource with the request payload.
  //* 4) DELETE - Deletes the specified resource.
  //* 5) PATCH - Used to apply partial modifications to a resource.
  
  // ------------------------------------------------------------------------------------------------------
  
  //! SQl vs NoSQL
  //? SQL stands for Structured Query Language. It is a language designed to allow both technical and non-technical users query, manipulate, and transform data from a relational database. And it is very useful in handling structured data.
  //? NoSQL stands for Not Only SQL. It is a non-relational database that stores and retrieves data without needing to define the table structure and data types. It is very useful in handling unstructured data.
  
  // ------------------------------------------------------------------------------------------------------
  
  //! Relational database
  //? Relational databases are based on the relational model, an intuitive, straightforward way of representing data in tables. Each row in the table is a record with a unique ID called the key. The columns of the table hold attributes of the data, and each record usually has a value for each attribute, making it easy to establish the relationships among data points.
  
  // ------------------------------------------------------------------------------------------------------
  
  //! Non-relational database
  //? Non-relational databases are not based on the relational model. Instead, they are based on the document model, key-value pairs, graph databases, or wide-column stores. These models are better suited to the types of data that web, search, and mobile applications handle.
  
  // ------------------------------------------------------------------------------------------------------
  
  //! MongoDB
  //? MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
  
  // ------------------------------------------------------------------------------------------------------
  
  //! Mongoose
  //? Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
  //? Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
  
  // ------------------------------------------------------------------------------------------------------
  
  //! Mongoose Schema
  //? A Mongoose schema defines the structure of the document, default values, validators, etc., whereas, Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
  //? A Mongoose schema maps to a MongoDB collection and defines the shape of the documents within that collection.
  
  // ------------------------------------------------------------------------------------------------------
  
  //! Mongoose Model
  //? A Mongoose model is a wrapper on the Mongoose schema. A Mongoose schema defines the structure of the document, default values, validators, etc., whereas, Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
  //? A Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc. Generally, each collection (table) in the database should have a corresponding Mongoose model.
  //? A Mongoose model is a class with which we construct documents. In this sense, models are the equivalent of constructors compiled from our Schema definitions.
  //? Models are responsible for creating and reading documents from the underlying MongoDB database.
  
  // ------------------------------------------------------------------------------------------------------
  
  //! Express
  //? Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  