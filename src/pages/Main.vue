<template>
    <div class="padding-top-100">
        <test-paticles/>
        <banner/>
        <!-- <subscribe/> -->
        <why/>
        <fair/>
        <secured/>
        <tokenomics/>
        <community/>
        <!-- <subscribe2/> -->
        <time-line/>
    </div>
</template>

<script>
    import Banner from "../components/Banner";
    // import Subscribe from "../components/Subscribe";
    import Why from "../components/Why";
    import Fair from "../components/Fair";
    import Secured from "../components/Secured";
    import Tokenomics from "../components/Tokenomics";
    // import Subscribe2 from "../components/Subscribe2";
    import TestPaticles from "../components/TestPaticles";
    import TimeLine from "../components/TimeLine";
    import Community from "../components/Community";
    // import FAQ from "../components/FAQ";

    // import {FlipClock} from '@mvpleung/flipclock';

    export default {
        name: 'Main',
        components: {
            // FAQ,
            TimeLine,
            TestPaticles,
            // Team,
            // Subscribe2,
            Tokenomics,
            Community,
            Why,
            Fair,
            Secured,
            // Subscribe,
            Banner
            // FlipClock
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

