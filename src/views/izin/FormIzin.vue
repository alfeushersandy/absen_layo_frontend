<template>
    <div class="container-fluid mb-5 mt-4 dashboard">
        <div class="row">
            <div class="col-md-3 mb-4">
                <UserMenuComponent />
            </div>
            <div class="col-md-7 md-mb-5">
                <FormIzinComponent title="Form izin"/>
            </div>
        </div>
    </div>
</template>
<script>
import FormIzinComponent from '../../components/FormIzin.vue';
import UserMenuComponent from '../../components/UserMenu.vue';
    
export default {
        name: 'IzinComponent',

        components: {
            FormIzinComponent,
            UserMenuComponent
        }
    }
</script>