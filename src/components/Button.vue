<template>
    <button :type="type" :class="`${btnClass} ${width} cursor-pointer text-md shadow-xl px-2 py-1 rounded-md`">
        <slot>Button Name</slot>
    </button>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    variant: {
        type: String,
        default: 'green'
    },
    width: String,
    type: {
        type: String,
        default: 'button'
    }
})

const btnClass = computed(() => {
    return {
        'green': 'border border-green-400 bg-green-400 hover:bg-green-500 text-white',
        'red': 'border border-red-400 bg-red-400 hover:bg-red-500 text-white',
        'dark': 'border border-gray-800 bg-gray-900 text-white'
    }[props.variant]
})
</script>

<style scoped></style>