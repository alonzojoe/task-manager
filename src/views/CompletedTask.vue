<template>
    <div>
        <h2>Completed Tasks</h2>
        <div>
            <div v-for="task in taskStore.completedTasks">
                {{ task.title }}
                <button type="button" @click="taskStore.removeTask(task.id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import useTaskStore from '../store/taskStore';

const taskStore = useTaskStore()
</script>

<style scoped></style>