<template>
  <div class="flex flex-col space-y-4" v-cypress-target="'logs'">
    <div class="container flex items-center justify-between px-6 py-4 mx-auto border rounded" v-cypress-target="'log'" v-for="log in logs">
      <p class="mx-3">{{ log }}</p>
    </div>
  </div>
</template>

<script>
import * as Logger from '../Logger'

export default {
  data: () => ({
    logs: Logger.logs
  })
}
</script>
