<template>
<div class="provider">
    <table>
    <tr>
        <td style="text-align:left">
            <h3>{{provider.first_name}} {{provider.last_name}}</h3>
        </td>
        <td style="text-align:right">
            <b>Specialty:</b> {{provider.specialty }}
        </td>
        <td rowspan="2" style="text-align:center">  
            <i @click="onDelete(provider.email_address)" 
            class="fas fa-times fa-2x"></i>
        </td>
    </tr>
    <tr>
        <td>
            Email: {{provider.email_address}}
        </td>
        <td style="text-align:right"> 
            <b>Practice Name:</b> {{provider.practice_name}}
        </td>
    </tr>
    </table>
</div>
</template>

<script>
export default {
    name: 'Provider' ,
    props: {
        provider: Object
    } ,
    methods: {
        onDelete(email_address) {
            console.log(email_address);
            this.$emit('delete-provider', email_address)
        }
    }
}

</script>

<style scope>
.fas {
  color: red;
}
.provider {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.provider h3 {
  display: flex;
  align-items: center;
  justify-content: left;
}
.provider p {
  display: flex;
  align-items: right;
  justify-content: right;
}
table {
  width: 100%;
}
i {
    padding-left: 20px;
}

</style>