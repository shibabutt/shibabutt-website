<template>
    <div class="padding-top-100">
        <test-paticles/>
        <banner/>
        <why/>
        <fair/>
        <secured/>
        <tokenomics/>
        <community/>
        <time-line/>
    </div>
</template>

<script>
    import Banner from "../components/Banner";
    import Why from "../components/Why";
    import Fair from "../components/Fair";
    import Secured from "../components/Secured";
    import Tokenomics from "../components/Tokenomics";
    import TestPaticles from "../components/TestPaticles";
    import TimeLine from "../components/TimeLine";
    import Community from "../components/Community";

    export default {
        name: 'Main',
        components: {
            TimeLine,
            TestPaticles,
            Tokenomics,
            Community,
            Why,
            Fair,
            Secured,
            Banner
        },
        props: {},
        data() {
            return {
                option_clock: {
                    time: 0,
                    clockFace: 'DailyCounter',
                    countdown: true,
                }
            }
        },
        mounted() {
            let now = new Date()

            let y = now.getUTCFullYear()
            let m = now.getUTCMonth()
            let d = now.getUTCDate()
            let h = now.getUTCHours()
            let mi = now.getUTCMinutes()
            let s = now.getUTCSeconds()

            var current_date = new Date(Date.UTC(y, m, d, h, mi, s))
            let target_date = new Date(Date.UTC(2021, 3, 12, 7, 0, 0))

            let diff = target_date.getTime() - current_date.getTime()

            if (diff > 0) {
                this.option_clock.time = diff / 1000
                this.$forceUpdate()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

