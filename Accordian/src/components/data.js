const data = [
  {
    id: 1,
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables. This includes the outer function's variables, the inner function's own variables, and global variables. Closures are created every time a function is created, at function creation time.",
  },
  {
    id: 2,
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "In JavaScript, == is the equality operator that checks for value equality with type coercion, meaning it converts the operands to the same type before making the comparison. === is the strict equality operator that checks for both value and type equality, meaning no type conversion is performed.",
  },
  {
    id: 3,
    question: "What is a promise in JavaScript?",
    answer:
      "A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. Promises have three states: pending, fulfilled, and rejected.",
  },
  {
    id: 4,
    question: "What is the purpose of a RESTful API?",
    answer:
      "A RESTful API is designed to take advantage of existing protocols. It's an architectural style for designing networked applications, relying on a stateless, client-server, cacheable communications protocol -- the HTTP. RESTful APIs use HTTP requests to perform CRUD (Create, Read, Update, Delete) operations on resources.",
  },
  {
    id: 5,
    question:
      "What is the difference between front-end and back-end development?",
    answer:
      "Front-end development refers to the part of web development that involves creating the user interface and user experience elements of a website or web application. It includes working with HTML, CSS, and JavaScript to build the visual and interactive aspects of a site. Back-end development involves the server side of web development, where developers focus on databases, server logic, authentication, and application integration using languages such as PHP, Python, Ruby, and frameworks like Node.js.",
  },
];

export default data;
