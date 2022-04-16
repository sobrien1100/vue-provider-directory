<template>
        <h3>Search By Name</h3>
        <div class="form-control">
        <input 
            type="text" 
            v-model="filterText" 
            placeholder="Enter Search Text"
            @input="onSearch(filterText)" />
        </div>
</template>


<script>
export default {
  name: 'SortFilter',
  data() {
    return {
      filterText: '',      
    }
  },
  methods: {
    onSearch(e) {     
        console.log(e) 
        // this.filterText = e.data;
        console.log(this.filterText)
      
        this.$emit('provider-search', e)
    },
  },
}
</script>