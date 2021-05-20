<template>
    <section id="timeline">
        <div class="container">
            <div class="row header-text text-center about-header pb-5">
                <div class="col-lg-12">
                    <h3>ROADMAP</h3>
                </div>
            </div>

            <div class="row roadmap-content">
                <div class="col-4 roadmap-image">
                    <div sticky-container style="width: 100%; height: 100%">
                        <div class="sticky" v-sticky="stickyEnabled" sticky-offset="{top: 0, bottom: 0}"
                             sticky-side="both" on-stick="onStick" sticky-z-index="20">
                            <img :src="require('@/assets/images/logo-1000.png')" width="100%" style="padding-top: 120px">
                        </div>
                    </div>
                </div>

                <div class="col-8 roadmap-text">
                    <vue-timeline-update
                        title="<i>Stage #1</i>"
                        description="Core development<br />Launch<br />Marketing (ads/influencers)<br />Begin adoption platform development and testing<br />Coingecko Application<br />CoinMarketCap Application<br />Blockfolio Application"
                        icon="code"
                        color="green"
                        theme="light"
                    />

                    <vue-timeline-update
                        title="<i>Stage #2</i>"
                        description="Establish a partnership network<br />CEX Application<br />NFT auctions to fund bigger scale donations<br />Shiba Butt e-shop release"
                        icon="code"
                        color="green"
                        theme="light"
                    />
                    
                    <vue-timeline-update    
                        title="<i>Stage #3</i>"
                        description="Larger scale marketing<br />Additional CEX Applications<br />Staking and farm options for Shiba Butt holders"
                        icon="code"
                        color="green"
                        theme="light"
                    />
                    
                    <vue-timeline-update    
                        title="<i>Stage #4</i>"
                        description="Binance Listing<br /><br /><u>World Domination</u>"
                        icon="code"
                        color="green"
                        theme="light"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'TimeLine',
        props: {},
        data() {
            return {
                stickyEnabled: true
            }
        },
        methods: {
            onStick() {
                
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
