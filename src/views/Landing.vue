<template>
  <div>
      <Navbar />
      <div class="container">
  <header>
    <img src="https://i.postimg.cc/dtMXdQRp/logo.png" alt="logo" />
  </header>

  <main>
    <div class="landing-img">
      <img src="https://i.postimg.cc/YCSmzmwS/illustration-mockups-1.png" alt="mockup" />
    </div>

    <div class="landing-text">
      <h1>Build The Community <br>
        Your Fans Will Love</h1>
      <p>Huddle re-imagines the way we build communities. You have
        a voice, but so does your audience. Create connections with
        your users as you engage in genuine discussion.
      </p>
      <button><router-link to="/signup">Register</router-link></button>
    </div>
  </main>

  <footer>
    <ul>
      <li><a href="#"><img src="https://i.postimg.cc/QxGtjn4r/facebook-circle-1.png" alt="facebook icon"></a></li>
      <li><a href="#"><img src="https://i.postimg.cc/TwcJ9WHk/instagram-circle-1.png" alt="instagram icon"></a></li>
      <li><a href="#"><img src="https://i.postimg.cc/ZYWsFwx2/twitter-circle-1.png" alt="twitter icon"></a></li>
    </ul>
  </footer>

</div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
    components: {
        Navbar,
    }

}
</script>

<style scoped>
        * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #674bb1 !important;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  background-image: url(https://i.postimg.cc/nrSWWDM1/bg-mobile.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.container {
  max-width: 375px;
  margin: 0 auto;
  padding: 30px;
}

header img {
  height: 30px;
}

header {
  margin-bottom: 3rem;
}

main {
  text-align: center;
}

.landing-img img {
  height: 209px;
  margin-bottom: 24px;
}

h1 {
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
}

p {
  font-size: 1rem;
  margin-bottom: 24px;
}

button {
  background-color: #fff;
  color: #674bb1;
  border-radius: 999px;
  border: none;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  padding: 1.2rem 5rem;
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 30px;
  transition: ease 0.5s;
}

button:hover {
  background-color: #674bb1;
  color: #fff;
}

footer ul {
  display: flex;
  justify-content: center;
  padding: 10px;
}

footer li {
  list-style: none;
}

footer li a {
  padding: 10px;
}

</style>