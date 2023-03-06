<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand me-5" href="#">SNL SHOES</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-lg-flex" id="navbarNav">
      <ul class="navbar-nav w-100 justify-content-around">
        <li class="nav-item">
            <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/login">Login</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/register">Register</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/products">Products</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
    </div>
    
  </div>
</nav>
    </div>
</template>

<style scoped>



nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default{
    name: 'NavBar'
}
</script>