<template>
  <v-content>
    <v-container fluid shop>
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon value="card.heart">
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>
export default {
  name: 'Shop',
  components: {
  },
  data: () => ({
    //
    cards: [
      { title: '外星太空站民宿', flex: '12', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
      { title: '外星快速道路', flex: '6', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
      { title: '外星快速道路1', flex: '6', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
      { title: '外星快速道路2', flex: '6', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
      { title: '外星快速道路3', flex: '6', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
      { title: '外星快速道路4', flex: '6', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
      { title: '太空旅遊跳星球套票', flex: '6', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' }
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
