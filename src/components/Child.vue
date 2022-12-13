<template>
  <p>接受父组件传过来的值：{{ names + "," + ages }}</p>
</template>

<script lang="ts">
  import { ref, defineComponent, watch, reactive } from "vue"
  export default defineComponent({
    name: "Child",
    props: {
      names: {
        type: String,
        required: true,
      },
      ages: {
        type: String,
        required: true,
      },
    },
    setup: () => {},
  })
</script>
