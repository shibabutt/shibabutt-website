<template>
    <div class="paticales">
        <div class="waveWrapper waveAnimation">
            <div class="waveWrapperInner bgTop">
                <div class="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div>
            </div>
            <div class="waveWrapperInner bgMiddle">
                <div class="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"></div>
            </div>
            <div class="waveWrapperInner bgBottom">
                <div class="wave waveBottom" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TestPaticles',
        components: {},
        props: {},
        data() {
            return {
                option: {
                    background: {
                        color: {
                            value: '#fff'
                        }
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {enable: false, mode: 'bubble'},
                            onclick: {enable: true, mode: 'push'},
                            resize: true
                        },
                        modes: {
                            grab: {distance: 400, line_linked: {opacity: 1}},
                            bubble: {distance: 250, size: 0, duration: 2, opacity: 0, speed: 3},
                            repulse: {distance: 400, duration: 0.4},
                            push: {particles_nb: 4},
                            remove: {particles_nb: 2}
                        }
                    },
                    detectRetina: true
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
