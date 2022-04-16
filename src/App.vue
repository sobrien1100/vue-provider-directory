<template>
<div class=container>
  <Header title="Provider Directory"/> 
  <Providers @delete-provider="deleteProvider" :providers="providers" />
</div>
</template>

<script>
import Header from './components/Header'
import Providers from './components/Providers'

export default {
  name: 'App',
  components: {
    Header, 
    Providers    
  }, 
  data() {
    return {
      providers: []
    }
  },
  methods: {
    deleteProvider(email_address) {
      console.log('provider', email_address)
      this.providers = this.providers.filter((provider) => provider.email_address != email_address )
    }
  },
  created() {
    this.providers = [
        {
          "last_name": "Harris",
          "first_name": "Mike",
          "email_address": "mharris@updox.com",
          "specialty": "Pediatrics",
          "practice_name": "Harris Pediatrics"
        },
        {
          "last_name": "Carlson",
          "first_name": "Mike",
          "email_address": "mcarlson@updox.com",
          "specialty": "Orthopedics",
          "practice_name": "Carlson Orthopedics"
        },
        {
          "last_name": "Juday",
          "first_name": "Tobin",
          "email_address": "tjuday@updox.com",
          "specialty": "General Medicine",
          "practice_name": "Juday Family Practice"
        }
    ]

  }
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
