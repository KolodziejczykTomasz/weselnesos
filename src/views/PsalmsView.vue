<script setup lang="ts">
import PageNavigation from '@/components/PageNavigation.vue';
</script>
<template>
 <aside>
      <PageNavigation/>
    </aside>
    <main>
    <h1>Pslamy</h1>
    </main>
<router-view />
</template>
<style scoped>
h1{
    margin-top: 500px;
    color: black;
}

aside{
  display: flex;
  height: 100%;
  border: 1px solid red;
  width: 20%;
}

main {
  display: flex;
  border: 1px solid orange;
  width: 80%;
  height: 100%;

}

</style>
