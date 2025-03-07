<template>
    <div>
        <h2>Completed Tasks</h2>
        <div>
            <div v-for="task in taskStore.tasks" :key="task.id">
                <Task :task="task" :done="true" />
            </div>
        </div>
    </div>
</template>

<script setup>
import useTaskStore from '../store/taskStore';
import Task from "../components/Task.vue"
const taskStore = useTaskStore()
</script>

<style scoped></style>