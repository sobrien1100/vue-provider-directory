<template>
<div class=container>
  <Header @toggle-add-provider="toggleAddProvider" title="Provider Directory" :showAddProvider="showAddProvider"/> 
  <AddProvider v-show="showAddProvider" @add-provider="addProvider" />
  <SortFilter @provider-search="providerSearch" />
  <Providers @delete-provider="deleteProvider" :providers="providers" />
  
</div>
</template>

<script>
import Header from './components/Header'
import Providers from './components/Providers'
import AddProvider from './components/AddProvider'
import SortFilter from './components/SortFilter'
import MOCK_DATA from './MOCK_DATA.json'


export default {
  name: 'App',
  components: {
    Header, 
    Providers, 
    AddProvider, 
    SortFilter
  }, 
  data() {
    return {
      providers: MOCK_DATA,
      filterProviders: [], 
      showAddProvider: false, 
      filterText: null, 
    }
  },
  methods: {
    providerSearch(filterText) {
      this.providers = MOCK_DATA
      this.providers = this.providers.filter((provider) => {
        return provider.first_name.toLowerCase().includes(filterText.toLowerCase())
      })

      console.log("Providers log After", this.providers)
    },
    toggleAddProvider() {
      this.showAddProvider = !this.showAddProvider
    },
    addProvider(provider) {
      this.providers = [...this.providers, provider]
    }, 
    deleteProvider(email_address) {
      console.log('provider', email_address)
      this.providers = this.providers.filter((provider) => provider.email_address != email_address )
    }
  }, 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 50%;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
