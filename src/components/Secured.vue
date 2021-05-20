<template>
    <section id="secured">
        <div class="container">
            <div class="row header-text text-center" id="features">
                <div class="col-lg-12">
                    <h3>Highly Secured</h3>
                </div>
            </div>
            <div class="row over-pa">
                <div class="col-lg-9 col-sm-12 m-auto">
                    <div class="row overview-text">
                        Contracts are uploaded and verified on BSCScan, and all LPs generated from fair launch will be burned.<br />
                        We will renounce ownership of the contract, that’s meaning no exploits are possible.<br />
                        Shiba Butt owner is his community.<br />
                        Plus NOT a single token will be sent to Vitalik Buterin or Elon Musk :)

                        <div class="musk-card">
                            <img src="https://media0.giphy.com/media/iykYOrZgXbsmA/giphy.webp" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Secured',
        props: {}
    }
</script>

<style lang="scss" scoped>
    @import 'breakpoint-sass';
    @import '../assets/scss/_variables.scss';

    #secured {
        width: 100vw;
        overflow: hidden;
    }

    .musk-card {
        margin: 50px auto 10px;
        width: 100%;
        position: relative;
        z-index: 0;

        @include breakpoint($breakpoint-tablet) {
            
        }

        @include breakpoint($breakpoint-desktop) {
            
        }

        &:after {
            content: 'NO WAY';
            color: #ff0000;
            font-size: 80px;
            font-weight: bold;
            position: absolute;
            text-align: center;
            width: 100%;
            top: 28px;
            left: -5px;
            transform: rotate(-25deg) scale(1.25);
            transform-origin: center center;
            // transform: translate(-50%, -50%);
            
            z-index: 10;

            @include breakpoint($breakpoint-tablet) {
                font-size: 130px;
                top: 98px;
            }

            @include breakpoint($breakpoint-desktop-large) {
                font-size: 160px;
                top: 120px;
            }
        }

        img {
            width: 100%;
        }
    }
</style>
