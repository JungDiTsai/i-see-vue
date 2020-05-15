<template>
<v-content>
      <v-container
        class="fill-height"
        fluid
      >
  <v-card
    class="mx-auto"
    max-width="434"
    tile
  >
    <v-img
      height="100%"
      src="../assets/images/profileBg.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
            <v-img :src="require('../assets/images/avatar1.jpg')"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">Jung Tsai</v-list-item-title>
              <v-list-item-subtitle>Fronted-End Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
        </v-container>
    </v-content>
</template>

<script>
export default {
  name: 'About',
  components: {
  },
  data: () => ({
  })
}
</script>

<style lang="scss" scoped>
</style>
