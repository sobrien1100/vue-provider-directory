<template>
  <div class="container">
    <Header
      @toggle-add-provider="toggleAddProvider"
      title="Provider Directory"
      :showAddProvider="showAddProvider"
    />
    <AddProvider v-show="showAddProvider" @add-provider="addProvider" />
    <SortFilter
      @provider-search="providerSearch"
      @provider-sort="providerSort"
    />
    <Providers @delete-provider="deleteProvider" :providers="providers" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Providers from "./components/Providers";
import AddProvider from "./components/AddProvider";
import SortFilter from "./components/SortFilter";
import MOCK_DATA from "./MOCK_DATA.json";

export default {
  name: "App",
  components: {
    Header,
    Providers,
    AddProvider,
    SortFilter,
  },
  data() {
    return {
      providers: MOCK_DATA,
      filterProviders: [],
      showAddProvider: false,
      filterText: null,
      sortDirection: null,
    };
  },
  methods: {
    providerSort(sortText) {
      if (this.sortField === sortText) {
        switch (this.sortDirection) {
          case null:
            this.sortDirection = "asc";
            break;
          case "asc":
            this.sortDirection = "desc";
            break;
          case "desc":
            this.sortDirection = "asc";
            break;
        }
      } else {
        this.sortDirection = "asc";
      }

      console.log('this.sortDirection' , this.sortDirection)

      switch (sortText) {
        case "first":
          this.sortField = "first";
          this.providers.sort((a, b) => {
            const sign =
              a.first_name.toLowerCase() > b.first_name.toLowerCase() ? 1 : -1;
            return this.sortDirection === "asc" ? sign : -sign;
          });
          break;
        case "last":
          this.sortField = "last";
          this.providers.sort((a, b) => {
            const sign =
            a.last_name.toLowerCase() > b.last_name.toLowerCase() ? 1 : -1;
            return this.sortDirection === "asc" ? sign : -sign;
          });
          break;
        case "email":
          this.sortField = "email";
          this.providers.sort((a, b) => {
            const sign =
            a.email_address.toLowerCase() > b.email_address.toLowerCase() ? 1 : -1; 
            return this.sortDirection === "asc" ? sign : -sign;
          });
          break;
        case "specialty":
          this.sortField = "specialty";
          this.providers.sort((a, b) => { 
            const sign =
            a.specialty.toLowerCase() > b.specialty.toLowerCase() ? 1 : -1;
            return this.sortDirection === "asc" ? sign : -sign;
          });
          break;
        case "practice":
          this.sortField = "practice";
          this.providers.sort((a, b) => {
            const sign =
            a.practice_name.toLowerCase() > b.practice_name.toLowerCase()? 1 : -1;
            return this.sortDirection === "asc" ? sign : -sign;
          });
          break;
      }
    },
    providerSearch(filterText) {
      this.providers = MOCK_DATA;
      this.providers = this.providers.filter((provider) => {
        return provider.first_name
          .toLowerCase()
          .includes(filterText.toLowerCase());
      });

      console.log("providers after first name search", this.providers);

      if (this.providers.length === 0) {
        this.providers = MOCK_DATA;
        this.providers = this.providers.filter((provider) => {
          return provider.last_name
            .toLowerCase()
            .includes(filterText.toLowerCase());
        });
      }

      console.log("Providers log After", this.providers);
    },
    toggleAddProvider() {
      this.showAddProvider = !this.showAddProvider;
    },
    addProvider(provider) {
      this.providers = [...this.providers, provider];
    },
    deleteProvider(email_address) {
      console.log("delete provider", email_address);
      if (confirm("Are you sure?")) {
        this.providers = this.providers.filter(
          (provider) => provider.email_address != email_address
        );
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: sans-serif;
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
