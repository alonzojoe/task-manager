<template>
    <div>
        <h2 class="text-center text-2xl mb-5">Completed Tasks</h2>
        <div v-if="taskStore.completedTasks.length > 0">
            <div v-for="task in taskStore.completedTasks" :key="task.id">
                <Task :task="task" :done="true" />
            </div>
        </div>
        <p v-else>No completed tasks found.</p>
    </div>
</template>

<script setup>
import useTaskStore from '../store/taskStore';
import Task from "../components/Task.vue"
const taskStore = useTaskStore()
</script>

<style scoped></style>