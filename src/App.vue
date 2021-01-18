<template>
    <div id="app" v-bind:style="{ height: `${heightApp}px` }">
      <div class="canvas">
        <vue-canvas-nest :config="{color:'255,255,255', count: 88, opacity: 1, zIndex: -2000, count: 60, pointColor:'255,255,255'}" class="canva_chaild"></vue-canvas-nest>
        <vue-canvas-nest :config="{color:'255,255,255', count: 88, opacity: 1, zIndex: -2000, count: 60, pointColor:'255,255,255'}" class="canva_chaild"></vue-canvas-nest>
        <vue-canvas-nest :config="{color:'255,255,255', count: 88, opacity: 1, zIndex: -2000, count: 60, pointColor:'255,255,255'}" class="canva_chaild"></vue-canvas-nest>
        <vue-canvas-nest :config="{color:'255,255,255', count: 88, opacity: 1, zIndex: -2000, count: 60, pointColor:'255,255,255'}" class="canva_chaild"></vue-canvas-nest>
      </div>
      <Navigation />
      <Avatar class="mobile-none"/>
      <div class="slide mobile-none">
        <transition name="slide"  mode="out-in">
          <router-view />
        </transition>
      </div>

      <div class="mobile">
        <Avatar />
        <div class="slide">
          <transition name="slide"  mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
</template>

<script>
  import Navigation from '@/components/Navigation/Navigation';
  import Avatar from '@/components/Avatar/Avatar';
  import vueCanvasNest from 'vue-canvas-nest';
  export default {
    data() {
      if(document.documentElement.clientWidth <=  510){
        return {
            heightApp:document.documentElement.clientHeight
        }
      }
      if(document.documentElement.clientWidth <=  768){
        return {
            heightApp:document.documentElement.clientHeight - 40
        }
      }      
      return {
          heightApp:document.documentElement.clientHeight - 86
      }
    },
    components: {
      Navigation, Avatar, vueCanvasNest
    },
  }
</script>

<style scoped>
  .canvas {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column wrap;
    height: 100%;
    z-index: -100;
  }
  .canva_chaild {
    width: 50%;
    height: 50%
  }
  #app {
    width: 1140px;
    margin: 43px auto 0 auto;
    color: #e5eaee;
    display: flex;
    justify-content: center;
  }
  .mobile {
    display: none;
  }
  .slide-enter-active {
    transition: all .4s ease;
  }
  .slide-leave-active {
    transition: all .4s ease;
  }
  .slide-enter, .slide-leave-active {
    transform: translateX(-540px);
  }
  @media (max-width: 1199px) {
    #app {
      width: 930px;
    }
    .slide-enter, .slide-leave-active {
      transform: translateX(-330px);
    }
  }
  @media (max-width: 960px) {
    #app {
      width: 720px;
    }
  }
  @media (max-width: 768px) {
     #app {
      width: 510px;
      height: calc(100% - 50px);
      margin: 20px auto 0 auto;
    }
    .mobile {
      display: block;
    }
    .mobile-none {
      display: none;
    }
    .mobile {
      overflow-y: auto;
      scrollbar-color: #2B2D2E #1c1e1f;
      scrollbar-width:  thin;
    }
    .mobile::-webkit-scrollbar {
      width: 7px;
      background-color: #1c1e1f;
    }
    .mobile::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background-color: #2B2D2E;
    }
    .slide-enter-active {
      transition: none;
    }
    .slide-leave-active {
      transition: none;
    }
    .slide-enter, .slide-leave-active {
      transform: translateX(0);
    }
  }
  @media (max-width: 510px) {
     #app {
      width: 100%;
      margin-top: 0;
    }
    .canvas {
      display: none;
    }
    .mobile {
      width: calc(100% - 45px);
    }
  }

</style>
