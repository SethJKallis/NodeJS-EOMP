<template>
    <div>
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
                    <td>{{ product.id }}</td>
                    <td>{{ product.prodDescription }}</td>
                    <td>R{{ product.price }}</td>
                    <td>
                        <div class="btn-group">
                            <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="product.id">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" :id="product.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5">Modal title</h1>
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
                            <button class="btn btn-danger">DELETE</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core'
export default{
    setup(){
        const store = useStore();
        store.dispatch('fetchProducts');
        let products = computed(() => store.state.products);
        return{
            products
        }
    }
}
</script>