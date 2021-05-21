<template>
  <section id="banner">
    <div class="backtotop" :class="{'display': show_back_to_top}">
      <a href="#banner" v-scroll-to="'#banner'">
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </a>
    </div>
    <div class="container zindex banner__container">
      <div class="row">
        <div class="col-lg-7 banner-txt">
          <img :src="require('@/assets/images/logo-1000.png')" class="img-fluid mobile-banner-img">

          <h3 class="title-main">
            The World's first meme token that rewards you,<br />
            without giving a shit to Elon Musk or Vitalik Buterin
            <br />
          </h3>

          <div class="banner-links">
            <a href="https://twitter.com/ShibabuttToken" target="_blank">
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <span>@ShibaButtToken</span>
            </a>

            <a href="https://t.me/ShibaButt" target="_blank">
              <i class="fa fa-telegram" aria-hidden="true"></i>
              <span>@ShibaButt</span>
            </a>

            <a href="#" target="_blank" style="opacity:0.5;cursor:default;">
              <i class="fa fa-file" aria-hidden="true"></i>
              <span>Contract (Soon)</span>
            </a>
          </div>

          <div class="sub-main">
            <div class="row buy-cta">
              <div class="col-lg-12 col-md-7 buy-cta-inner_" style="padding-left:0">
                <h3>
                  Soon on <img :src="require('@/assets/images/pancakeswap.png')" style="height: 50px;margin-left:10px">
                </h3>
              </div>
            </div>
          </div>


        </div>
        <div class="col-lg-5">
          <div class="desktop-banner-img">
            <img :src="require('@/assets/images/logo-1000.png')" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Banner',
    data() {
        return {
            show_back_to_top: false
        }
    },
    methods: {
      launchApp() {
        
      },
      onScroll() {
        if (!this.always_fixed_navbar) {
          // Get the current scroll position
          const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
          // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
          if (currentScrollPosition < 30) {
            this.show_back_to_top = false
          } else {
            this.show_back_to_top = true
          }
        }
      },
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'breakpoint-sass';
  @import '../assets/scss/_variables.scss';
  
  #banner {
    padding: 100px 0;
    width: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;

    @include breakpoint($breakpoint-tablet) {
      padding-top: 150px;
    }

    @include breakpoint($breakpoint-desktop-large) {
      padding-top: 0;
    }

    &:before {
      display: none;
    }

    &:after {
      display: none;
    }
  }

  .banner__container {
    @include breakpoint($breakpoint-desktop-large) {
      height: 100vh;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 120px;
    }
  }
  
  .banner-txt {
    padding-bottom: 55px;
    text-align: center;

    h3 {
      font-size: 33px;
      font-family: 'Baloo Da 2', cursive;
      color: #fff;
      padding-top: 0;
      padding-bottom: 0;
      line-height: 12px;

      @include breakpoint($breakpoint-tablet) {
        font-size: 36px;
        line-height: 36px;
      }

      @include breakpoint($breakpoint-desktop) {
        font-size: 50px;
        line-height: 50px;
        text-align: left;
      }
    }

    p {
      padding: 0px;
      font-size: 18px;
      color: black;
      line-height: 26px;
      font-family: 'Baloo Da 2', cursive;

      @include breakpoint($breakpoint-tablet) {
        font-size: 16px;
        padding-right: 40px;
        padding-bottom: 45px;
      }
    }

    a {
      font-size: 8px;
      padding: 14px 20px;
      border-radius: 50px;
      color: white !important;
      background-size: 200% auto;
      background-image: linear-gradient(90deg, #f701e3, #ffee00 51%, #f701e3);
      font-family: 'Baloo Da 2', cursive;
      position: relative;
      -webkit-transition: all linear .3s;
      -o-transition: all linear .3s;
      transition: all linear .3s;

      @include breakpoint($breakpoint-tablet) {
        font-size: 18px;
      }
    }

    .small {
      padding: 0px!important;
      font-size: 11px;

      @include breakpoint($breakpoint-tablet) {
        font-size: 25px;
      }

      a {
        padding: 2px 10px!important;
        font-size: 14px!important;

        &:hover {
          background-position: 100%;
        }
      }
    }
  }

  .banner-links {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;
    margin-bottom: 20px;

    @include breakpoint($breakpoint-tablet) {
      margin-top: 30px;
      margin-bottom: 30px;
    }

    a {
      background: none;
      color: #fff;
      font-size: 40px;

      @include breakpoint($breakpoint-desktop) {
        font-size: 55px;
      }

      span {
        font-size: 14px;
        display: block;
        margin-top: -8px;
      }
    }
  }

  .buy-cta {
    h3 {
      text-align: center;
    }

    .buy-cta-inner {
      @include breakpoint($breakpoint-desktop) {
        padding-left: 0px;
        width: 100%;
        max-width: none;
        flex: none;
      }
    }
  }

  .mobile-banner-img {
    display: block;
    width: 62%;
    margin: 0 auto 20px;

    @include breakpoint($breakpoint-tablet) {
      width: 42%;
    }

    @include breakpoint($breakpoint-desktop) {
      display: none;
    }
  }

  .subscripe-btn {
    margin-top: 40px;
    margin-bottom: 20px;
    
    a {
      background: #fff;
    }
  }

  .desktop-banner-img {
    display: none;

    @include breakpoint($breakpoint-desktop) {
      display: block;
      text-align: center;
      position: relative;
      top: calc(50% - 50px);
      // top: 50%;
      transform: translateY(-50%);
    }
  }
  
</style>
