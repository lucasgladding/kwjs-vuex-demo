<template>
  <div id="app" class="p-4">
    <div id="nav" class="flex flex-row -mx-2 mb-8">
      <router-link to="/" class="mx-2">Home</router-link>
      <router-link to="/about" class="mx-2">About</router-link>
      <router-link to="/events" class="mx-2">Events</router-link>
    </div>
    <router-view/>
  </div>
</template>
