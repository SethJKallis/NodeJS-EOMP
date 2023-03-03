<template>
  <div class="admin">
    <div class="productCRUD">  
      <h2>Products Table</h2>
      <table class="table table-hover table-striped table-dark">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Edit/Delete</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="product in products" :key="product">
                      <td>{{ product.prodName }}</td>
                      <td>{{ product.prodDescription }}</td>
                      <td>R{{ product.price }}</td>
                      <td>
                        <div class="btn-group">
                            <UpdateProduct :product="product" :productId="product.id"/>
                                <button class="btn btn-danger" v-on:click="deleteProduct(product.id)">Delete</button>
                        </div>
                      </td>
                  </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="d-flex justify-content-center">
                    <AddProduct/>
                  </td>
                </tr>
              </tfoot>
          </table>     
    </div>
    <div class="userCRUD">
      <table class="table table-hover table-striped table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Gender</th>
            <th>Email Address</th>
            <th>Role</th>
            <th>Profile Image URL</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.userProfile }}</td>

            <td>
              <div class="btn-group">
                <UpdateUser :user="user" :userId="user.userID"/>
                <button class="btn btn-danger">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>

        

  </div>
</template>

<script>
import UpdateProduct from '../components/UpdateProduct.vue'
import AddProduct from '../components/AddProduct.vue'
import UpdateUser from '../components/UpdateUser.vue'
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';

export default{
  setup(){
    const store = useStore();
    store.dispatch('fetchProducts');
    store.dispatch('fetchUsers');
    let user = computed(() => store.state.user);

    let products = computed(() => store.state.products);
    let users = computed(() => store.state.users);

    const deleteProduct = async (id) => {
      store.dispatch('deleteProduct', id);
      store.dispatch('fetchProducts');
      location.reload();
    }

    return{
      products,
      users,
      user,
      deleteProduct,
    }
  },
  components: {
    UpdateProduct,
    AddProduct,
    UpdateUser
  },
  props:['product','productId']
}
</script>