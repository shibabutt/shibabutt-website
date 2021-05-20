<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" :class="{'nav-bg':have_nav}">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img :src="require('@/assets/images/shibabutt.png')" class="header-logo">
            </a>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    @click="show_nav_mobile = !show_nav_mobile"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            
            <div class="collapse navbar-collapse menu-main" :class="{'show': show_nav_mobile}"
                 id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto menu-item" style="align-items: center">
                    <li class="nav-item">
                        <a class="nav-link" href="#overview"
                           @click="show_nav_mobile=false"
                           v-scroll-to="'#overview'">
                            Overview
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#fair"
                           @click="show_nav_mobile=false"
                           v-scroll-to="'#fair'">
                            Fair Launch
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#secured"
                           @click="show_nav_mobile=false"
                           v-scroll-to="'#secured'">
                            Security
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tokenomics"
                           @click="show_nav_mobile=false"
                           v-scroll-to="'#tokenomics'">
                            Tokenomics
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#timeline"
                           @click="show_nav_mobile=false"
                           v-scroll-to="'#timeline'">
                            Roadmap
                        </a>
                    </li>


                    <li class="nav-item">
                        <a class="nav-link bor super" href="#" target="_blank">Buy Now</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                have_nav: false,
                always_fixed_navbar: false,
                show_nav_mobile: false
            }
        },
        methods: {
            onScroll() {
                if (!this.always_fixed_navbar) {
                    // Get the current scroll position
                    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
                    // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
                    if (currentScrollPosition < 30) {
                        this.have_nav = false
                    } else {
                        this.have_nav = true
                    }
                }
            },
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.onScroll)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import 'breakpoint-sass';
    @import '../assets/scss/_variables.scss';
    
    .header-logo {
        width: 240px;

        @include breakpoint($breakpoint-tablet) {
            width: 300px;
        }
    }

    .navbar-light .navbar-nav .nav-link.super {
        padding: 20px 25px !important;
        margin-right: 25px !important;
        cursor: pointer;
    }
</style>
