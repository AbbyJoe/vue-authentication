<template>
  <div>
      <Navbar/>
      <div class="global-container">
        <div class="card login-form">
            <div class="card-body">
                <h3 class="card-title text-center">Sign Up to Huddle</h3>
                <div class="card-text">
                    <!--
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> -->
                    <form @submit.prevent="signup">
                        <!-- to error: add class "has-danger" -->
                        <div class="form-group">
                            <label for="exampleInputEmail1">Full Name</label>
                            <input type="text" class="form-control form-control-sm" id="exampleInputName" aria-describedby="nameHelp"
                            v-model.number="name">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <!-- <a href="#" style="float:right;font-size:12px;">Forgot password?</a> -->
                            <input type="password" class="form-control form-control-sm" id="exampleInputPassword1" v-model="password">
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Sign up</button>
                        
                        <div class="sign-up" style="color: #674bb1">
                            Already have an account? <router-link to="/login">Login</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
    components: {
        Navbar
    },
    data:() =>({
        name: '',
        email: '',
        password: ''
    }),
    methods: {
        signup() {
            const formData = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('signup', {
                email: formData.email,
                password: formData.password
            })
        }
    }
}
</script>

<style scoped>
    html,body { 
        height: 100%; 
        background-color: #f5f5f5;

    }
     .btn-primary {
        background-color: #674bb1 !important
    }
    label {
        color: #674bb1 !important

    }
    .card {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    .global-container{
        height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }

    form{
        padding-top: 10px;
        font-size: 14px;
        margin-top: 30px;
    }

    .card-title{ font-weight:300; color: #674bb1; }

    .btn{
        font-size: 14px;
        margin-top:20px;
    }


    .login-form{ 
        width:400px;
        margin:30px;
    }

    .sign-up{
        text-align:center;
        padding:30px 0 0;
    }

    .alert{
        margin-bottom:-30px;
        font-size: 13px;
        margin-top:20px;
    }
</style>