<template>
    <div>
        <h2>All Tasks</h2>

        <div>
            <div v-for="task in taskStore.tasks" :key="task.id">
                <Task :task="task" />
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