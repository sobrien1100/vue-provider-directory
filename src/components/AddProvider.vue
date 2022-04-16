<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>First Name</label>
      <input 
      type="text" 
      v-model="first_name" 
      name="first_name" 
      placeholder="Enter First Name" />
    </div>
    <div class="form-control">
      <label>Last Name</label>
      <input
        type="text"
        v-model="last_name"
        name="last_name"
        placeholder="Enter Last Name"
      />
    </div>
     <div class="form-control">
      <label>Email Address</label>
      <input
        type="text"
        v-model="email_address"
        name="email_address"
        placeholder="example@example.com"
      />
    </div>
     <div class="form-control">
      <label>Specialty</label>
      <input
        type="text"
        v-model="specialty"
        name="specialty"
        placeholder="Enter Specialty"
      />
    </div>
     <div class="form-control">
      <label>Practice Name</label>
      <input
        type="text"
        v-model="practice_name"
        name="practice_name"
        placeholder="Enter Practice Name"
      />
    </div>
    <input type="submit" value="Save Provider" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: 'AddProvider',
  data() {
    return {
      first_name: '',
      last_name: '',
      email_address: '',
      specialty: '',
      practice_name: ''
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      if (!this.first_name) {
        alert('Please add a Provider')
        return
      }
      const newProvider = {
        last_name: this.last_name,
        first_name: this.first_name,
        email_address: this.email_address, 
        specialty: this.specialty, 
        practice_name: this.practice_name
      }

      console.log(newProvider)
      
      this.$emit('add-provider', newProvider)
      this.last_name = ''
      this.first_name = ''
      this.email_address = ''
      this.specialty = ''
      this.practice_name = ''
    },
  },
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>