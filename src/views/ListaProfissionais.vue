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
                    {{ profissional.signo }}
                  </div>
                  <div class="perfil-info">
                    {{ profissional.servicos }}
                  </div>
                  <div class="perfil-info">
                    <v-button class="botao"><v-icon left>mdi-message</v-icon></v-button>
                    <v-button><v-icon>mdi-phone-in-talk</v-icon></v-button>
                    <v-button><v-icon>mdi-message-video</v-icon></v-button>
                    <v-button><v-icon>mdi-star</v-icon></v-button>
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
    padding: 10vw;
  }
  .botao{
    padding: 5hvw;
    text-align: center;
  }
  .perfil-info{
    text-align: center;
    display: flex;
    justify-content: space-around;
    padding-top: 8px;
  }
  img{
    text-align: center;
  }
 </style>