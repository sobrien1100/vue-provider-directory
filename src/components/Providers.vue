<template>
    <div :key="provider.email_address" v-for="provider in providers">
        <Provider @delete-provider="$emit('delete-provider', provider.email_address)" :provider="provider" />
    </div>
</template>


<script>
import Provider from './Provider'

export default {
    name: 'Providers' , 
    props: {
        providers: Array
    }, 
    components: {
        Provider
    },
    emits: ['delete-provider'],
}
</script>