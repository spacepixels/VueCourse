<template>
    <div>
        <div class="form-group">
            <label class="col-form-label" for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" placeholder="First Name" v-model="person.firstName">
        </div>
        <div class="form-group">
            <label class="col-form-label" for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" placeholder="Last Name" v-model="person.lastName">
        </div>
    </div>
</template>

<script>

    export default {
        props: ['person']
    }
</script>