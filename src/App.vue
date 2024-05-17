<!--
A simple markdown editor.
-->

<script setup>
/* 
import { ref,watchEffect } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


/*
watchEffect(async () => {
  // cet effet va être exécuté directement puis
  // de nouveau chaque fois que currentBranch.value change
  const url = 'http://163.172.211.49/pter/db_02/readVille_3.php?term=par'
  const Response = await fetch(url,{
    method: 'GET',
    dataType: "json",
    data:"",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log(Response)
  const data= await Response.json()
  console.log(data)
    //console.log("Success:", result);
  //console.log (receive.json())
})
*/
</script>

<template>
  
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style>

</style>