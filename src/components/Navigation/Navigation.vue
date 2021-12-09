<template>
    <nav class="navigation">
        <div class="wrap_nav">
            <router-link to="/" class="nav_item">
                <font-awesome-icon :icon="['far', 'user']" class="nav_icon"/>
                <span class="nav_text">ABOUT</span>
            </router-link>
            <router-link to="/resume" class="nav_item">
                <font-awesome-icon :icon="['far', 'id-badge']" class="nav_icon"/>
                <span class="nav_text">RESUME</span>
            </router-link>
            <router-link to="/works" class="nav_item">
                <font-awesome-icon :icon="['fas', 'briefcase']" class="nav_icon"/>
                <span class="nav_text">WORKS</span>
            </router-link>
        </div>
    </nav>
</template>

<script>

</script>


<style scoped src='./Navigation.module.css'></style>