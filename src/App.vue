<template>
  <div id="app">
       <div id="demo">
  <img src="./assets/menu.png" id="Menu" v-if="!show" @click="show = !show" />
  
  <transition name="fade">
    <div id="menuMain" v-if="show">
      <img src="./assets/batu.png" id="Menufalse" @click="show = !show" />
      <div id="menuMain2">
      <p @click="toHome">Home</p>
      <p @click="toAbout">abouts</p>
    </div>
    </div>
  </transition>
</div>
<router-view/>    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import router from './router'


export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return {
      show: true
    }
  },
  methods: {
    toHome(){
      router.push({ path: '/' })
      this.show = false
    },
    toAbout(){
      router.push({ path: '/about' })
      this.show = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-weight: bold;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#Menu {
  z-index: 10;
  position: fixed;
  top:20px;
  left:20px;
  width: 20px;
  height:20px;
}

#Menufalse{
  z-index: 10;
  position: fixed;
  top:20px;
  left:20px;
  width: 20px;
  height:20px;

}
#menuMain{
  z-index: 5;
  background: #696969;
  color: aliceblue;
  position : fixed;
  top : 0;
  left : 0;
  width: 100vw;
  height: 100vh;
}

#menuMain2{
  margin-top: 50px;
}

</style>
