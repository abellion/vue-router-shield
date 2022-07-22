<template>
  <div class="bg-white border-b">
    <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize">
      <router-link to="/baz/qux-1" custom v-slot="{ isActive, href, navigate }">
        <a :href="href" v-on:click="navigate" class="border-b-2 text-gray-800 mx-1.5 sm:mx-6 hover:border-blue-500" :class="{ 'border-blue-500': isActive === true, 'border-transparent': isActive !== true }" v-cypress-target="'baz-qux-1-view'">
          Qux 1
        </a>
      </router-link>

      <router-link to="/baz/qux-2" custom v-slot="{ isActive, href, navigate }">
        <a :href="href" v-on:click="navigate" class="border-b-2 text-gray-800 mx-1.5 sm:mx-6 hover:border-blue-500" :class="{ 'border-blue-500': isActive === true, 'border-transparent': isActive !== true }" v-cypress-target="'baz-qux-2-view'">
          Qux 2
        </a>
      </router-link>
    </div>
  </div>

  <router-view>
    <div class="mt-6">
      <logs></logs>
    </div>
  </router-view>
</template>

<script>
import Logs from '../../../components/Logs.vue'

export default {
  components: {
    Logs
  }
}
</script>
