<template>
    <section id="overview">
        <div class="container">
            <div class="row header-text text-center" id="features">
                <div class="col-lg-12">
                    <h3>WHY SHIBABUTT</h3>
                </div>
            </div>
            <div class="row over-pa">
                <div class="col-lg-9 col-sm-12 m-auto">
                    <div class="row overview-text">
                        Shiba Butt is our mascotte inu,<br />
                        spreading love from his back with a lovely face.<br />
                        We love dogs and memes and taking life not so serious.<br />
                        We also think crypto world is a great deal for humanity and we hope with this experimental token to give a smiles to real people, without the sponsorship of Elon Musk and Vitalik Butterin 🙂
                        <br />
                        <br />
                        So if you missed $DOGE and $SHIB real pourpose, join us in our journey to the moon!

                        <img :src="require('@/assets/images/moon.jpg')" class="why-moon">
                    </div>
                </div>
            </div>
        </div>

        <img :src="require('@/assets/images/why.gif')" class="why-card">
    </section>
</template>

<script>
    export default {
        name: 'Why',
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import 'breakpoint-sass';
    @import '../assets/scss/_variables.scss';

    .why-card {
        position: absolute;
        z-index: -1;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        top: -35px;
        left: 50%;
        transform: translateX(-50%);

        @include breakpoint($breakpoint-tablet) {
           left: 87%;
            top: 0;
        }

        @include breakpoint($breakpoint-desktop) {
            
        }
    }

    .why-moon {
        width: 30%;
        margin: 10px auto 30px;
        transform: rotate(-25deg);
        -webkit-box-shadow: 0px 0px 10px 0px #ddd;
        -moz-box-shadow: 0px 0px 10px 0px #ddd;
        -o-box-shadow: 0px 0px 10px 0px #ddd;
        box-shadow: 0px 0px 10px 0px #ddd;

        @include breakpoint($breakpoint-tablet) {
            margin: 30px auto 30px;
        }

        @include breakpoint($breakpoint-desktop-large) {
            margin: 60px auto 30px;
        }
    }
</style>
