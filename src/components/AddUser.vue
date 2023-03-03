<template>
    <div class="container-fluid">
      <div class="row">
        <h2 class="display-2">Registration</h2>
      </div>
      <div class="row">
        <div class="col">
          <form class="form" @submit.prevent="signUp">
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  class="form-control"
                  type="text"
                  placeholder="First Name"
                  required
                  v-model="payload.firstName"
                />
                <i class="bi bi-person"></i>
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  required
                  v-model="payload.lastName"
                />
                <i class="bi bi-person"></i>
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email Address"
                  required
                  v-model="payload.emailAdd"
                />
                <i class="bi bi-envelope"></i>
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required
                  v-model="payload.userPass"
                />
                <i class="bi bi-person-fill"></i>
              </span>
            </div>
            <div class="form-control-wrapper" v-if="userMsg">
              <label class="form-control bg-gradient">{{ userMsg }}</label>
            </div>
            <div class="form-control-wrapper">
              <button type="submit" class="btn btn-success w-100">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  import { computed } from "@vue/runtime-core";
  import { useStore } from "vuex";
  
  export default {
    setup() {
      const payload = {
        firstName: "",
        lastName: "",
        emailAdd: "",
        userPass: "",
      };
  
      const store = useStore();
  
      const signUp = async () => {
        try {
          const response = await axios.post(
            "http://localhost:3200/users",
            payload
          );
          const { data } = response;
          store.commit("setMessage", data.message);
          store.dispatch("fetchUsers");
        } catch (error) {
          console.log(error);
        }
      };
  
      const userMsg = computed(() => store.state.message);
  
      return {
        payload,
        userMsg,
        signUp,
      };
    },
    name: 'AddUser'
  };
  </script>
  <style scoped>
  .container-fluid {
    background-color: #f5f5f5;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  
  .display-2 {
    color: #444444;
  }
  
  .form {
    margin-top: 50px;
  }
  
  .form-control-wrapper {
    margin-bottom: 20px;
  }
  
  .inline {
    display: inline-block;
    position: relative;
  }
  
  .form-control {
    font-size: 16px;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #dddddd;
    padding-left: 35px;
    width: 100%;
    background-color: #f5f5f5;
  }
  
  .form-control:focus {
    border-color: #cccccc;
    box-shadow: none;
  }
  
  .form-control:focus + .bi {
    color: #cccccc;
  }
  
  .bi {
    position: absolute;
    font-size: 24px;
    top: 9px;
    left: 7px;
    color: #dddddd;
  }
  
  .btn-success {
    background-color: #444444;
    border: none;
    border-radius: 0;
    font-size: 20px;
    font-weight: 400;
    margin-top: 30px;
  }
  
  .btn-success:hover {
    background-color: #333333;
    border-color: #333333;
  }
  
  label.form-control {
    font-size: 16px;
    border: none;
    border-radius: 0;
    padding-left: 35px;
    width: 100%;
    background-color: #f5f5f5;
    color: #444444;
  }
  
  label.bg-gradient {
    background: linear-gradient(to right, #444444, #555555);
    color: #ffffff;
  }
  </style>