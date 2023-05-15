<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Doradzamy i pomagamy w organizacji ślubu</template>   
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Śledzimy najnowsze trendy</template>    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Budujemy największą bazę ślubną</template>
    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Znajdź nas</template>
    <p><a href="facebook.com/sosweselne" target="_blank" rel="noopener">Facebook</a></p>
    <p><a href="mailto:redakcja.weselne.sos@gmail.com" target="_blank" rel="noopener">Napisz do nas</a></p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Wspieramy Pary Młode</template>   
  </WelcomeItem>
</template>
