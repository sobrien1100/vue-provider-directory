<template>
    <button @click="onClick()" :style="{background: color}" class="btn">Add Provider</button>
</template>

<script>
export default {
    name: 'Button' ,
    props: {
        text: String, 
        color: String, 
    },
    methods: {
        onClick() {
            console.log('click')
        }

    }
}
</script>