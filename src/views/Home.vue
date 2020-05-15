<template>
<v-content class="home-bg">
      <v-container
        class="fill-height"
        fluid
      >
        <h1 class="text-effect blur">HI! THIS IS JUNG "OUTERSPACE!" </h1>
        <router-link to="/shop">Shop</router-link>
        <img class="earth" src="../assets/images/earth.png" alt="">
        <div class="flyout" @mouseover="showToggle('over')" @mouseout="showToggle('out')">
          <img src="../assets/images/spaceman.png" alt="">
          <v-avatar class="avatarfly" :style="{'opacity':peace}">
            <img
              src="../assets/images/avatarfly.png"
              alt="Jung"
            >
          </v-avatar>
        </div>
      </v-container>
    </v-content>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: () => ({
    peace: 0
  }),
  methods: {
    showToggle (param) {
      if (param === 'over') {
        this.peace = 1
      } else {
        this.peace = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-bg{
  background-image: url('../assets/images/star.png');
}
.flyout{
  position: absolute;
  right: 0;
  animation: fly 3s infinite linear;
}
.avatarfly{
  position:absolute;
  top: 105px;
  left: 190px;
  transform:scaleX(-1);
  opacity: 0;
  transition:0.3s;
}
.earth{
  position: absolute;
  top: 60%;
  animation: earthRotate 3s infinite linear;
}
.text-effect {
  font-size:72px;
  margin: auto;
  margin-top: 15px;
  &.blur{
    filter:drop-shadow(0px 4px 4px white);
    animation: textEffect1 1s infinite linear;
  }
}
@keyframes fly {
  0%{bottom:150px;right: 0;}
  50%{bottom:100px;right: 0;}
  100%{bottom:150px;right: 0;}
}
@keyframes earthRotate {
  from{transform:rotate(0)}
  to{transform:rotate(360deg)}
}
@keyframes textEffect1 {
  0%{filter:drop-shadow(0px 4px 4px white);}
  33%{filter:drop-shadow(2px 2px 6px white);}
  66%{filter:drop-shadow(4px 0px 4px white);}
  100%{filter:drop-shadow(0px 2px 4px white);}
}
</style>
