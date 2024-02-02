<script>
import AboutView from "./views/AboutView.vue";
export default {
    data() {
        return {
            tab: null,
        };
    },
};
</script>

<template>
    <div>
        <nav>
            <div class="sub-nav">
                <router-link
                    tag="button"
                    style="text-decoration: none; color: inherit"
                    to="/shop"
                    class="link"
                >
                    <v-btn variant="plain" size="x-large">SHOP</v-btn>
                </router-link>
                <router-link
                    style="text-decoration: none; color: inherit"
                    to="/faq"
                    class="link"
                    v-ripple
                >
                    <v-btn variant="plain" size="x-large">FAQ</v-btn>
                </router-link>
            </div>
            <router-link style="text-decoration: none; color: inherit" to="/">
                <h1>TITLE</h1>
                <!-- !!!! -->
            </router-link>
            <div class="sub-nav">
                <router-link
                    style="text-decoration: none; color: inherit"
                    to="/about"
                    v-ripple
                    class="link"
                >
                    <v-btn variant="plain" size="x-large">ABOUT</v-btn>
                </router-link>
                <router-link
                    style="text-decoration: none; color: inherit"
                    to="/contact"
                    v-ripple
                    class="link"
                >
                    <v-btn variant="plain" size="x-large">contact</v-btn>
                </router-link>
            </div>
        </nav>
        <v-divider :thickness="4"></v-divider>
        <router-view />
    </div>
</template>

<style scoped>
h1 {
    font-family: "Single Day", cursive;
    font-size: xx-large;
    color: #76323f;
}
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20%;
}
.sub-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10rem;
}
.sub-nav > * {
    font-family: "Single Day", cursive;
    font-size: xx-large;
}
</style>
