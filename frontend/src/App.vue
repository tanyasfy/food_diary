<script setup lang="ts">
import { provideWebsocketService } from '@/service/websocketService';

provideWebsocketService();
</script>

<template>

  <RouterView />
</template>
