<script setup>
    import { computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'

    const router = useRouter()
    const route = useRoute()
    
    
    
    function toto() {
        console.log("plop")
    }
    
    const props=defineProps({
      msg: {
        type: String,
        required: true,
        default: "Message"
      },
      pter: {
        type: String,
        required: false
      },
      
      
    })
    
    
    const search = computed({
        get() {
            
        },
        async set(search) {
            console.log(search)
            const url = 'http://163.172.211.49/pter/db_02/readVille_3.php?term='+search
            const Response = await fetch(url,{
                method: 'get',
                dataType: "json",
                headers: {
                  'Content-Type': 'application/json'
                }
              })
            const data = await Response.json()
            console.log (data)
            //return route.query.search ?? ''
        }
    }) 
    

</script>

<template>
  
  <div>
    <h1 class="green">Message : {{ msg }} </h1>
    <h2> {{ pter }}</h2>
   
   
   
    <h3>
      Création d'un CRUD
    </h3>
  </div>
  <div>
      <h4>Liste des villes</h4>
       Search: <input v-model="search" maxlength="20">
  </div>
  <div>
      <h4>Ville </h4>
      Nom : <input v-model="nom_ville">
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.green {
    color: green;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
