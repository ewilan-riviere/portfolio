<template>
  <v-layout column justify-center align-center>
    <div>
      <h3>
        {{ title }}
      </h3>
      <h4>
        {{ subtitle }}
      </h4>
    </div>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: 'NuxtJS',
      subtitle: 'Ewilan Rivière Portfolio'
    }
  }
}
</script>
