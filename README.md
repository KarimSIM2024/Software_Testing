# Todo List Application

A simple Todo List application built with JavaScript, featuring comprehensive unit and integration tests using Jasmine.

## Author

**Karim Wael Balbaa**  
ID: 241482823

## Features

- Add tasks to your todo list
- Mark tasks as completed
- View all tasks
- View only pending tasks
- Input validation for task creation

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Software_Testing
```

2. Install dependencies:
```bash
npm install
```

## Usage

```javascript
const TodoList = require('./todo');

// Create a new todo list
const todo = new TodoList();

// Add tasks
todo.addTask("Buy milk");
todo.addTask("Study JavaScript");

// Mark a task as done
todo.markDone("Buy milk");

// Get all tasks
const allTasks = todo.getAllTasks();

// Get only pending tasks
const pendingTasks = todo.getPendingTasks();
```

## Running Tests

This project uses [Jasmine](https://jasmine.github.io/) as the testing framework.

To run the tests:

```bash
npx jasmine
```

## Test Coverage

The test suite includes:

### Unit Tests
- **Adding tasks**: Verifies that tasks can be added to the list
- **Input validation**: Ensures invalid inputs (empty strings, non-strings) throw appropriate errors

### Integration Tests
- **Task completion workflow**: Tests the interaction between `addTask()`, `markDone()`, and `getPendingTasks()`
- **Multiple tasks handling**: Verifies the system correctly manages multiple tasks with different completion states

## Project Structure

```
Software_Testing/
├── todo.js                    # Main TodoList class implementation
├── spec/
│   └── support/
│       ├── jasmine.mjs       # Jasmine configuration
│       └── todo.spec.js      # Test suite for TodoList
├── package.json               # Project dependencies
└── README.md                  # This file
```

## API Reference

### `TodoList` Class

#### Constructor
```javascript
const todo = new TodoList()
```
Creates a new empty todo list.

#### Methods

##### `addTask(task)`
Adds a new task to the list.

- **Parameters:**
  - `task` (string): The task description (must be a non-empty string)
- **Throws:** `Error` if task is empty or not a string
- **Example:**
  ```javascript
  todo.addTask("Buy groceries");
  ```

##### `markDone(taskTitle)`
Marks a task as completed.

- **Parameters:**
  - `taskTitle` (string): The title of the task to mark as done
- **Example:**
  ```javascript
  todo.markDone("Buy groceries");
  ```

##### `getAllTasks()`
Returns all tasks in the list.

- **Returns:** Array of task objects with `title` and `done` properties
- **Example:**
  ```javascript
  const tasks = todo.getAllTasks();
  // Returns: [{ title: "Buy groceries", done: false }, ...]
  ```

##### `getPendingTasks()`
Returns only the tasks that are not completed.

- **Returns:** Array of pending task objects
- **Example:**
  ```javascript
  const pending = todo.getPendingTasks();
  // Returns only tasks where done === false
  ```

## Technologies Used

- **JavaScript (Node.js)**
- **Jasmine** - Testing framework

## License

This project is open source and available for educational purposes.

