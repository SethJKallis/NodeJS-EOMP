<template>
  <body> 
    <div class="home">
        <div class="content">
            <h1><span>Vans Sneakers</span>
            Up to <span id="span2">50%</span>off
            </h1>
            <p>Come One Come All! Get your Vans Sneakers right here at affordable prices 
                <br>We have a variety of Vans Sneakers in the store, and we have all the latest Vans sneakers and socks so your are never left behind when it comes to Vans fashion. 
            </p>
            <div class="btn"><button href="">Shop Now</button></div>
        </div>
        <div class="img">
            <img src="https://i.postimg.cc/KvXMjTMM/Home.jpg" alt="HomeImg">
        </div>
    </div>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </body>
</template>


<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* change height to min-height for mobile */
  font-family: sans-serif;
  background-color: #F0F0F0;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* change alignment for mobile */
  text-align: center; /* center text for mobile */
  margin: 0 20px; /* add some margin for mobile */
}

h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
}

#span2 {
  color: #E84C3D;
}

p {
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 40px;
}

.btn {
  display: flex;
  justify-content: center; /* center button for mobile */
}

button {
  background-color: #E84C3D;
  color: #FFFFFF;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
}

.img img {
  max-width: 100%; /* change max-width to 100% for mobile */
}

/* add media query for mobile screens */
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 36px;
  }
  p {
    font-size: 16px;
    line-height: 24px;
  }
  .btn {
    margin-top: 20px;
  }
}
</style>

<script>

export default {
}
</script>
