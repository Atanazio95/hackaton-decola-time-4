<template>
  <div class="app-top-bar">

    <v-app-bar app color="red" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link class="link-home" to="/">
          Saúde para todos <v-icon>mdi-hospital-box-outline</v-icon>
        </router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="red">
    
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Início
              </v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/ListaProfissionais">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-bag-checked</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Profissionais
              </v-list-item-title>
            </v-list-item>
          </router-link>

           <router-link to="/perfilusuario">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Perfil
              </v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  name: 'AppTopBar',
  data() {
    return {
      drawer: false,
      group: null,
    }
  }
}
</script>

<style scoped>
.app-top-bar a {
  text-decoration: none;
  color: white;
}
</style>


