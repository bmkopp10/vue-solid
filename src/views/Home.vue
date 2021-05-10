<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import serviceContainer, { ServiceTypes } from '@/container';
import IHTTPClient from '@/services/IHTTPClient';
import {defineComponent} from "@vue/composition-api"; // @ is an alias to /src
import exampleService  from '@/services/exampleService';
import IexampleService from '@/services/IexampleService';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    // TODO: The component should have an instance of exampleService, not an implementation of IHTTPCLIENT
    const service = serviceContainer.resolve<IHTTPClient>(ServiceTypes.HTTPCLIENT);
    console.log(service.get('I cannot believe this works'));
    // const myService = serviceContainer.resolve(exampleService);
    // console.log(myService.getItem());
    // console.log(service.getPallet());

    return {

    }
  }
});
</script>
