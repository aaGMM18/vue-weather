<template>
  <div class="container-fluid p-0 m-0 row">
    <sidebar />
    <maincontent />
  </div>
</template>

<script type="text/javascript">
import sidebar from "./components/sidebar.vue";
import maincontent from "@/components/maincontent.vue";


export default {
  name: "App",
  components: {
    sidebar,
    maincontent,
  },
};
</script>

<style>

</style>
