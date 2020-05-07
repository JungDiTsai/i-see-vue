<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      color="#222"
      app
      right
    >
      <v-list dense>
        <v-list-item to="/" dark color="white">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about" dark color="white">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>about</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="black"
      dark
    >
      <v-spacer />
      <v-toolbar-title >Application</v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
        <router-view></router-view>
    <v-footer
      color="black"
      app
    >
      <v-spacer />

      <span class="white--text">&copy; 2020 By Jung</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'AppLayoutsDemosBaselineFlipped',

  components: {
  },

  data: () => ({
    //
    drawer: true
  })
}
</script>
