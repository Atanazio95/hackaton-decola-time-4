<template>
  <v-simple-table>
    <template v-slot:default>
      
      <tbody>
          <tr  v-for="profissional of listaProfissionais" :key="profissional.nome">
            <v-container class="profissional-lista">
                 <td>
                    <v-avatar center>
                    <img :src="profissional.imagem" class="my-10">
                    </v-avatar>
                  <div class="perfil-info">
                    {{ profissional.nome }}
                  </div>
                  <div class="perfil-info">
                    {{ profissional.local }}
                  </div>
                  
                  <div class="perfil-info">

                   <div class="text-center">
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ on, attrs }">
        <router-link :to="`/perfilprofissional/${profissional.nome}`">
        <v-btn
        class="botton-perfil"
          color= #0066CC
          dark
          v-bind="attrs"
          v-on="on"
        >
          Ver Perfil
        </v-btn>
        </router-link>
      </template>
      <v-list>
        <v-subheader>Perfil</v-subheader>
        <v-list-item
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
        >
          <v-list-item-avatar>
            <v-avatar
              size="32px"
              tile
            >
              <img
                :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                :alt="tile.title"
              >
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-title>{{ tile.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
  </div>
                    
                  </div>
                  </td>
            </v-container>
 
        </tr>
        
      </tbody>
    </template>
  </v-simple-table>
</template>
 
<script>
  export default {
 
    name: 'ListaProfissionais',
    
    data () {
      return{
        listaProfissionais: []
      }
    },
    
  
    created() {
      fetch('https://it3-gdf-default-rtdb.firebaseio.com/saude/profissionais.json')
      .then(resposta => resposta.json())
      .then(json => {
        this.listaProfissionais = json
        console.log(this.listaProfissionais);
      });
    }
  }
</script>
 
<style>
   .profissional-lista{
    height: 250px;
    border: solid grey 2px;
    padding: 5vw 14vw;
  }
  .botao{
    text-align: center;
  }
  .perfil-info{
    text-align: center;
    display: flex;
    justify-content: space-around;
    padding-top: 8px;
  }
  div.container td{
    text-align: center;
    width: 90vw;
    color: black;
  }
 </style>