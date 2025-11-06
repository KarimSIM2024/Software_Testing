// todo.spec.js
const TodoList = require('../../todo');
// describe Groups related tests together (like a test suite).
// Here, it groups all tests about TodoList
describe("TodoList", function () {
    let todo;

// beforeEach() → Runs before each test, so every test starts fresh with an empty TodoList.
    beforeEach(function () {
        todo = new TodoList();
    });

    // --- UNIT TESTS ---> Ensures small parts work correctly on their own.

    // it() → Defines a single test case.
    // Each it() block checks one behavior.
    // expect(...).toBe(...) → Checks if a value matches what we expect.
    // If it doesn’t, the test fails.

    // Adding
    it("should add a new task", function () {
        todo.addTask("Buy milk");
        expect(todo.getAllTasks().length).toBe(1);
        expect(todo.getAllTasks()[0].title).toBe("Buy milk");
    });

    // Validating
    // expect(...).toThrowError(...) → Checks if a function throws an error when expected.
    it("should throw error if task is invalid", function () {
        expect(function () {
            todo.addTask("");
        }).toThrowError("Task must be a non-empty string");
    });

    // --- INTEGRATION TESTS ---> Tests how different parts work together.
    // Ensures the functions interact properly.
    // check combined behavior (addTask + markDone + getPendingTasks).

    it("should mark a task as done and not appear in pending tasks", function () {
        todo.addTask("Study Jasmine");
        todo.markDone("Study Jasmine");
        const pending = todo.getPendingTasks();
        expect(pending.length).toBe(0);
    });


    // check combined behavior (addTask + markDone + getPendingTasks).
    it("should handle multiple tasks correctly", function () {
        todo.addTask("Read");
        todo.addTask("Write");
        todo.markDone("Read");

        const all = todo.getAllTasks();
        const pending = todo.getPendingTasks();

        expect(all.length).toBe(2);
        expect(pending.length).toBe(1);
        expect(pending[0].title).toBe("Write");
    });
});