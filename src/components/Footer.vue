<template>
    <div>
        <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div class="footer-logo">
                            <p>
                                <img :src="require('@/assets/images/shibabutt.png')" class="footer-logo"><br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <section id="footer-btm">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="fop-btm text-center">
                            <h2>Copyright © 2021. All rights reserved by <a href="https://shibabutt.finance">ShibaButt
                                Finance</a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        methods: {
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import 'breakpoint-sass';
    @import '../assets/scss/_variables.scss';

    .footer-logo {
        margin: 0 auto;
        text-align: center;
        width: 80%;
    }
</style>
