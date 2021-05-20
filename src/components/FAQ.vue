<template>
    <section id="faq">
        <div class="container" style="padding-top: 70px">
            <div class="row header-text text-center team-header">
                <div class="col-lg-12">
                    <h3>F<span>A</span>Q</h3>
                </div>
            </div>

            <div class="faq-content">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item v-for="(item,index) in data_faq" :title="item.title" :key="index" :name="index">
                        <div v-html="item.desc">
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>


        </div>
    </section>
</template>

<script>
    export default {
        name: 'FAQ',
        components: {},
        props: {},
        data() {
            return {
                activeNames: [0],
                data_faq: [
                    {
                        title: 'How to buy?',
                        desc: 'SWhale is listed on pancakeswap exchange and it will be listed in many other exchanges !'
                    },
                    {
                        title: 'What happens when I swap my BNB for SWHALE ?',
                        desc: '6% is used to increase the liquidity pool, 3% is redistributed to SWHALE holders, 3% is used as funds for saving the oceans and all the whales !!'
                    },
                    {
                        title: 'How is the the treasury fund managed ',
                        desc: 'Every trade contributes in building up the treasury funds.The team will be able to withdraw from the treasury only 10% weekly '
                    },
                ]
            }
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .faq-content {
        padding: 40px 100px;
        background-color: white;
        margin-top: 70px;
        border-radius: 10px;
        box-shadow: 0 31px 35px rgb(0 0 0 / 10%);
    }

</style>
