import { defineStore } from "pinia";
import { getLocalStorage } from "../libs/utils";

const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(task) {
      const newTasks = {
        id: Date.now(),
        title: task,
        completed: false,
      };
      this.tasks.push(newTasks);
    },
    markCompleted(id) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    },
    removeTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    setItem() {
      const storedTasks = getLocalStorage("tasks");
      this.tasks = storedTasks ?? [];
    },
  },
  getters: {
    completedTasks: (state) => {
      return state.tasks.filter((task) => task.completed);
    },
  },
});

export default useTaskStore;
