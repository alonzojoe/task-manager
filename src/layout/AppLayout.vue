<template>
    <div>
        <router-link to="/">All Tasks</router-link>
        <router-link to="/completed">Completed Tasks</router-link>

        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="inputTitle">
            <button>Add Task</button>
        </form>
        <pre>{{ taskStore.tasks }}</pre>
        <div>
            <router-view />
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue"
import useTaskStore from "../store/taskStore"
import { setLocalStorage } from "../libs/utils"

const taskStore = useTaskStore()


const inputTitle = ref("")

const handleSubmit = () => {
    if (inputTitle.value.trim() === "") {
        alert('Task Title is required!')
        return
    }
    taskStore.addTask(inputTitle.value)
}

watch(
    () => taskStore.tasks,
    (newValue) => {
        console.log("Updated tasks:", newValue);
        setLocalStorage("tasks", newValue);
    },
    { deep: true }
)

onMounted(() => {
    taskStore.setItem()
})

</script>

<style lang="scss" scoped></style>