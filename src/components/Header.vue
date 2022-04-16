<template>
    <header>
        <h1>{{ title }}</h1>
        <Button @toggle-add-provider="$emit('toggle-add-provider')" 
        :text="showAddProvider ? 'Close' : 'Add Provider'" 
        :color="showAddProvider ? 'red' : 'green'"/>
    </header>
</template>

<script>
import Button from './Button'

export default {
    name: 'Header',
    props: {
        title: String,
        showAddProvider: Boolean
    },
    components: {
    Button,    
  }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>