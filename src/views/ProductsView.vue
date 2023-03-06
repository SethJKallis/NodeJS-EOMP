<template>
    <div>
        <table class="table table-hover table-striped table-dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product">
                    <td>{{ product.id }}</td>
                    <td>{{ product.prodDescription }}</td>
                    <td>R{{ product.price }}</td>
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