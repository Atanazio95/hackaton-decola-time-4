<template>
  <v-card
    max-width="375"
    class="mx-auto"
   
  >
    <v-img
      :src="profissional.imagem"
      height="300px"
      dark
    >
      <v-row class="fill-height">
        

        <v-card-title class="white--text name pl-6 pt-12">
          <div class="text-h5">
            {{ profissional.nome }}
          </div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(55) 1194545-1234</v-list-item-title>
          <v-list-item-subtitle>Celular</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{profissional.signo}}</v-list-item-title>
          <v-list-item-subtitle>Signo</v-list-item-subtitle>
        </v-list-item-content>

        
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>aliconnors@example.com</v-list-item-title>
          <v-list-item-subtitle>Email</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
        <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{profissional.servicos[0]}}, 
              {{profissional.servicos[1]}}, 
              {{profissional.servicos[2]}}
          </v-list-item-title>
          <v-list-item-subtitle>Serviços</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{profissional.local}}</v-list-item-title>
          <v-list-item-subtitle>Localização</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-human-greeting-proximity
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
              Redes Sociais
          </v-list-item-title>
          <v-list-item-subtitle>  <v-icon class="botton-redes">mdi-instagram</v-icon>
              <v-icon class="botton-redes">mdi-facebook</v-icon>
              <v-icon class="botton-redes">mdi-twitter</v-icon>
              <v-icon class="botton-redes">mdi-youtube</v-icon>
              <v-icon class="botton-redes">mdi-linkedin</v-icon></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
    props: {
      professionalId: Number,
    },
    data () {          
      return{
        profissional: null
      }
    },
    created() {
      fetch('https://it3-gdf-default-rtdb.firebaseio.com/saude/profissionais.json')
      .then(resposta => resposta.json())
      .then(json => {
        this.profissional= json[this.professionalId]
      });
    }
}
</script>

<style scoped>
.botton-redes {
    margin: 15px;

}
.name {
    flex-direction: column-reverse;
}
</style>