<template>
  <div class="form-control">
    <div>
      <h3>Search By Name</h3>
      <input
        type="text"
        v-model="filterText"
        placeholder="Enter Search Text"
        @input="onSearch(filterText)"
      />
    </div>
    <div>
        <button @click="onClick('first')" :style="{background: color}" class="btn2">Sort By First Name</button>
        <button @click="onClick('last')" :style="{background: color}" class="btn2">Sort By Last Name</button>
        <button @click="onClick('email')" :style="{background: color}" class="btn2">Sort By Email</button>
        <button @click="onClick('specialty')" :style="{background: color}" class="btn2">Sort By Specialty</button>
        <button @click="onClick('practice')" :style="{background: color}" class="btn2">Sort By Practice Name</button>

 
    </div>
  </div>
</template>


<script>
export default {
  name: "SortFilter",
  data() {
    return {
      filterText: "",
      sortField: ""
    };
  },
  methods: {
    onSearch(e) {
      console.log(e);
      // this.filterText = e.data;
      console.log(this.filterText);

      this.$emit("provider-search", e);
    },
    onClick(e) {
        this.$emit("provider-sort", e);
    }
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
h3 {
  padding-right: 5px;
}
.btn2 {
  padding: 5px 10px;
  margin: 2px;
  border-radius: 2px;  
  font-size: 10px;
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none;  
  font-family: inherit;
}
</style>