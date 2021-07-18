<template>
<div>
  <ProfessionalInfo :professionalId="$route.params.id" />
</div>
</template>
<script>
import ProfessionalInfo from '../components/ProfissionalInfo.vue'

export default {
    data () {
                
      return{
        profissional: {}
      }
    },
    components: {
      ProfessionalInfo
    },
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