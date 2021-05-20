<template>

    <section id="tokenomics">
        <div class="container" style="padding-top: 100px">
            <div class="row header-text text-center about-header">
                <div class="col-lg-12">
                    <h3 class="tokenomics--title">TOKENOMICS</h3>
                </div>
            </div>
            <div class="row about-pa">
                <div class="col-lg-10 col-md-12 m-auto about-item">
                    <div class="row">
                        <div class="col-lg-4 col-sm-8 m-sm-auto col-md-5 text-center">
                            <div class="about-img ai-one">
                                <img :src="require('@/assets/images/logo-1000.png')" alt="about-img" class="img-fluid">
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-1"></div>
                        <div class="col-lg-7 col-md-6 tokenomic-content">
                            <div class="about-txt">
                                <h3 style="color:#226ad6;">Token Stuff</h3>
                                <p>Total Supply: TBD ShibaButt<br></p>

                                <ul class="ul-token-stuff">
                                    <li>96% tokens are locked into liquidity pool and LP are burned forever.</li>
                                    <li>2% Tokens will be used for AirDrop and contests</li>
                                    <li>2% tokens will be used as marketing funds to bring $SHIBU to the Moon, Mars and Jupiter</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Tokenomics',
        components: {},
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
