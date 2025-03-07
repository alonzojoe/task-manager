<template>
    <div>
        <h2>All Tasks</h2>

        <div>
            <div v-for="task in taskStore.tasks">{{ task.title }}</div>
        </div>
    </div>
</template>

<script setup>
import useTaskStore from '../store/taskStore';

const taskStore = useTaskStore()
</script>

<style scoped></style>