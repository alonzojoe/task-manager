<template>
    <div>
        <button @click="taskStore.markCompleted(task.id)" v-if="!done">[]</button>
        {{ task.title }}
        <button type="button" @click="taskStore.removeTask(task.id)">Delete</button>
    </div>
</template>

<script setup>
import useTaskStore from '../store/taskStore';
const props = defineProps({
    task: Object,
    done: {
        type: Boolean,
        default: false,
        required: false
    }
})
const taskStore = useTaskStore()
</script>

<style lang="css" scoped></style>