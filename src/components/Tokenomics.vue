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
                                <h3>Total Supply: 69.000.000 $SHIBU</h3>
                                <br>

                                <ul class="ul-token-stuff">
                                    <li><b>96% tokens</b> are locked into liquidity pool and LP are burned forever.</li>
                                    <li><b>2% tokens</b> will be used for AirDrop and contests</li>
                                    <li><b>2% tokens</b> will be used as marketing funds to bring <i>$SHIBU</i> to the Moon, Mars and Jupiter</li>
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
