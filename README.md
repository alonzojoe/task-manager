# Simple Task manager

This is a sample task manager where you can add, marke as done, delete a Task using Vue 3 Composition API, Vue Router, Pinia and Tailwindcss.

## How to Run

Follow these steps to get the project up and running:

1. Clone the repository:
   git clone https://github.com/alonzojoe/task-manager.git

2. Navigate into the project directory:
   cd task-manager

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

5. Open your browser and visit http://localhost:5173 to view the landing page.

Coding Process:

1. First I setup the App Router of the page navigation between All Tasks, and Completed Tasks using vue-router.

2. Next is to create a utils helper function for localStorage to set and get item in localStorage

3. Then I create a store for tasks using Pinia State management, for state I created a tasks array,
next is to create actions for updating the of state, addingTask, markCompleted, removeTask and setTasks to the item in localStorage, then I created a getter for completedTasks filtering the tasks with completedProperty set to true.

4. Apply the state, action getters in template to display and modify tasks, includes storing and retrieving tasks in localStorage.

5. Code splitting: Create re-usable component to be used within the entire app.

6. Finally styling using tailwindcss.

Created By: Joenell Alonzo
