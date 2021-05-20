<template>
    <section id="subscribe">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 m-auto">
                    <div class="sub-main">
                        <div class="row buy-cta">
                            <div class="col-lg-3 col-md-5 subscripe-btn">
                                <a href="#" target="_blank">$SHIBU</a>
                            </div>
                            <div class="col-lg-8 col-md-7" style="padding-left:0">
                                <h3>
                                    Buy on <img :src="require('@/assets/images/pancakeswap.png')" style="height: 50px;margin-left:10px">
                                </h3>
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
        name: 'Subscribe',
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .buy-cta {
        justify-content: center;
        align-items: center;
    }
</style>
