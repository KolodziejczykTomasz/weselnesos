<script setup lang="ts">

</script>
<template>
 
    <div class="page-footer">
      <p>Copyright © 2023 - weselne.sos.pl - All Rights Reserved.</p>    
      <router-link to="/cookies"> <p>Polityka prywatności</p></router-link>
    </div>


</template>
<style scoped>

.page-footer {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color:#553898;
  border-top: 1px solid #553898;
}


.page-footer p {
  margin-bottom: -5px;
}

.page-footer a {  
  list-style: none;
  text-decoration: none;
  color:#553898;
}

.page-footer a:hover {
  color: #b09aee;
} 
</style>