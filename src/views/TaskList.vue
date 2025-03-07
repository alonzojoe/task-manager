<template>
    <div>
        <h2 class="text-center text-2xl mb-5">All Tasks</h2>

        <div v-if="taskStore.tasks.length > 0">
            <div v-for="task in taskStore.tasks" :key="task.id">
                <Task :task="task" />
            </div>
        </div>
        <p v-else>No records found. Would you like to add some?</p>
    </div>
</template>

<script setup>
import useTaskStore from '../store/taskStore';
import Task from "../components/Task.vue"
const taskStore = useTaskStore()
</script>

<style scoped></style>