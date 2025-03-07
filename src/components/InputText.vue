<template>
    <input :type="type"
        class="w-full px-2 py-1 text-md bg-white border outline-none focus:ring-0 border-gray-300 rounded-md placeholder-gray-400 focus:ring-indigo-500"
        :value="modelValue" :placeholder="props.placeholder" @input="handleChange" />
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: ""
    },
    modelValue: [String, Number]
})

const emits = defineEmits(['update:modelValue'])

const handleChange = (event) => {
    emits('update:modelValue', event.target.value)
}
</script>

<style lang="scss" scoped></style>