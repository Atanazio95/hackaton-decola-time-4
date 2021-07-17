<template>
 <v-app>
   <AppTopBar/>
   <Inicio/>
 </v-app>
</template>

<script>

import AppTopBar from './components/shared/AppTopBar.vue'
import Inicio from './views/Inicio.vue'

export default {
  name: "App",

  components: { 
    Inicio,
    AppTopBar,
  },

  
};
</script>

