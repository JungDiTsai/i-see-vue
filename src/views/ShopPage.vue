<template>
  <v-content>
    <v-carousel cycle height="300">
      <v-carousel-item
        v-for="(item,i) in cardsItem"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-row align="center">
      <v-item-group
        v-model="window"
        class="shrink mr-6"
        mandatory
        tag="v-flex"
      >
        <v-item
          v-for="n in length"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <div>
            <v-btn
              :input-value="active"
              icon
              @click="toggle"
            >
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </div>
        </v-item>
      </v-item-group>

      <v-col>
        <v-window
          v-model="window"
          class="elevation-1"
          vertical
        >
          <v-window-item
            v-for="n in length"
            :key="n"
          >
            <v-card flat>
              <v-card-text>
                <v-row class="mb-4" align="center">
                  <v-avatar color="grey" class="mr-4"></v-avatar>
                  <strong class="title"> {{ itemName }}</strong>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </v-row>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
export default {
  name: 'Shop',
  components: {
  },
  mounted () {
    // console.log(this.$route.params.id)
  },
  computed: {
    itemName () {
      let itemName = ''
      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i].shopId === this.$route.params.id) {
          itemName = this.cards[i].title
        }
      }
      return itemName
    },
    cardsItem () {
      let cardsItem = ''
      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i].shopId === this.$route.params.id) {
          cardsItem = this.cards[i].items
        }
      }
      return cardsItem
    }
  },
  data: () => ({
    //
    length: 3,
    window: 0,
    cards: [
      { title: '外星太空站民宿', shopId: 'tagert1', flex: '12', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', items: [{ src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }] },
      { title: '外星快速道路', shopId: 'tagert2', flex: '6', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', items: [{ src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }] },
      { title: '外星快速道路1', shopId: 'tagert3', flex: '6', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', items: [{ src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }] },
      { title: '外星快速道路2', shopId: 'tagert4', flex: '6', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', items: [{ src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }] },
      { title: '外星快速道路3', shopId: 'tagert5', flex: '6', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', items: [{ src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }] },
      { title: '外星快速道路4', shopId: 'tagert6', flex: '6', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', items: [{ src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }] },
      { title: '太空旅遊跳星球套票', shopId: 'tagert7', flex: '6', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', items: [{ src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' }, { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }] }
    ],
    items: [
      { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }
    ]
  })
}
</script>

<style lang="scss" scoped>
.shop{
  max-height: calc(100vh - 100px);
  height: calc(100vh - 100px);
  overflow-y: scroll;
  max-width: 100%;
}
</style>
