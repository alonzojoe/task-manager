<template>
    <div className="flex justify-between items-center gap-5 mb-5">
        <div class="space-x-5">
            <Button @click="taskStore.markCompleted(task.id)" v-if="!task.completed">&nbsp;&nbsp;&nbsp;&nbsp</Button>
            <span :class="{ 'line-through': task.completed }"> {{ task.title }}</span>
        </div>
        <Button type="button" variant="red" @click="taskStore.removeTask(task.id)">Delete</Button>
    </div>
</template>

<script setup>
import useTaskStore from '../store/taskStore';
import Button from "../components/Button.vue"
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