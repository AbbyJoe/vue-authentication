<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <a class="navbar-brand font-weight-bold" href="#" style="letter-spacing:3px; font-size:27px">Huddle</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Dashboard" >Dashboard</router-link>
                </li>
                <li class="nav-item" v-if="!ifAuthenticated">
                    <router-link class="nav-link" to="/Login" >Login</router-link>
                </li>
                <li class="nav-item" v-if="!ifAuthenticated">
                    <router-link class="nav-link" to="/Signup">Sign Up</router-link>
                </li>
                <li class="nav-item" v-if="ifAuthenticated">
                    <router-link class="nav-link" to="/" @click="logout">Log Out</router-link>
                </li>
            </ul>
        </div>
        </nav>
  </div>
</template>

<script>
export default {
    computed: {
        ifAuthenticated () {
        return this.$store.getters.ifAuthenticated

        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    }

}
</script>

<style>
    .bg-primary{
        background-color: #674bb1 !important;
    }
</style>