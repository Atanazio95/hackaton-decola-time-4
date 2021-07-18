<template>
  <v-card
    max-width="375"
    class="mx-auto"
  >
    <v-img
      src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
      height="300px"
      dark
    >
      <v-row class="fill-height">
        

        <v-card-title class="white--text name pl-6 pt-12">
          <div class="text-h4">
            Mark Zuckerberg
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
          <v-list-item-title>(11) 555-6789</v-list-item-title>
          <v-list-item-subtitle>Telefone</v-list-item-subtitle>
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
          <v-list-item-title>Empresário</v-list-item-title>
          <v-list-item-subtitle>Ocupação</v-list-item-subtitle>
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
          <v-list-item-title>White Plains, NY</v-list-item-title>
          <v-list-item-subtitle>Endereço</v-list-item-subtitle>
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
<style scoped>
.botton-redes {
    margin: 15px;

}
.name {
    flex-direction: column-reverse;
}
</style>