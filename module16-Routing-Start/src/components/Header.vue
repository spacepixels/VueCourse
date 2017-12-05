<template>
    <ul class="nav nav-pills">
            <!-- Adding the exact keyword means the style will only be attached if the path matches exactly
                Othewise you will find that the home page path which starts with / will always be matched and thus be active.
             -->
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/user" tag="li" active-class="active" exact><a>User</a></router-link>
            <!--<router-link to="/user/2" tag="li" active-class="active" exact><a>User 2</a></router-link>-->
    </ul>
</template>