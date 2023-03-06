<template>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#userModal'+userId">
  Edit
</button>

<!-- Modal -->
<div class="modal fade" :id="'userModal'+userId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-dark" id="exampleModalLabel">Edit User</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
            <input type="number" name="id" :value="userId" class="form-control">
          <input type="text" name="firstName" class="form-control" :placeholder="this.user.firstName" v-model="payloadTemplate.firstName" required>
          <input type="text" name="lastName" class="form-control" :placeholder="this.user.lastName" v-model="payloadTemplate.lastName" required>
          <input type="text" name="gender" class="form-control" :placeholder="this.user.gender" v-model="payloadTemplate.gender" required>
          <input type="email" name="email" class="form-control" :placeholder="this.user.emailAdd" v-model="payloadTemplate.emailAdd" required>
          <input type="text" name="userRole" class="form-control" :placeholder="this.user.userRole" v-model="payloadTemplate.userRole" required>
          <input type="text" name="userProfile" class="form-control" :placeholder="this.user.userProfile" v-model="payloadTemplate.userProfile" required>
          <input type="password" name="userPass" class="form-control" placeholder="Enter Password" v-model="payloadTemplate.userPass" required>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="editUser(userId)">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core'
export default{
    inheritAttrs:false,
    props: ['user', 'userId'],
    setup(){
        const store = useStore();
    
        let users = computed(() => store.state.users)
        let payloadTemplate = {
            firstName: '',
            lastName: '',
            gender: '',
            emailAdd: '',
            userRole: '',
            userProfile: '',
            userPass: ''
        }

        let payload = async (userId) => {
            let payload = await {
                userID: await userId,
                firstName: payloadTemplate.firstName,
                lastName: payloadTemplate.lastName,
                gender: payloadTemplate.gender,
                emailAdd: payloadTemplate.emailAdd,
                userRole: payloadTemplate.userRole,
                userProfile: payloadTemplate.userProfile,
                userPass: payloadTemplate.userPass
            }
            return payload
        }
        

        const editUser = async (userId) => {
            console.log(await payload(userId));
            store.dispatch('updateUser', await payload(userId));
            store.dispatch('fetchUsers');
            location.reload();
        }
        return{
            payloadTemplate,
            editUser,
            payload,
            users
        }
    }
}
</script>