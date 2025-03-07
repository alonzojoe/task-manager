<template>
    <div class="h-[100dvh] w-full flex flex-col items-center">
        <div class="flex space-x-4 mb-4">
            <router-link to="/" class="pb-2 border-b-2 border-white hover:border-gray-400"
                :class="{ '!border-black': $route.path === '/' }">
                All Tasks
            </router-link>
            <router-link to="/completed" class="pb-2 border-b-2 border-white hover:border-gray-400"
                :class="{ '!border-black': $route.path === '/completed' }">
                Completed Tasks
            </router-link>
        </div>


        <form @submit.prevent="handleSubmit" class="space-y-3">
            <InputText type="text" v-model="inputTitle" placeholder="Enter Task Title..." />
            <Button width="w-full" type="submit" variant="dark">Add Task</Button>
        </form>
        <div class="my-5">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue"
import { setLocalStorage } from "../libs/utils"
import useTaskStore from "../store/taskStore"
import InputText from "../components/InputText.vue"
import Button from "../components/Button.vue"

const taskStore = useTaskStore()


const inputTitle = ref("")

const handleSubmit = () => {
    if (inputTitle.value.trim() === "") {
        alert('Task Title is required!')
        return
    }
    taskStore.addTask(inputTitle.value)
    inputTitle.value = ""
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