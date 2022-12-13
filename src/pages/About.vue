<template>
  <div>B</div>
  <p>姓名:{{ name }}</p>
  <p>
    <button type="button" @click="changeName(true)">改变姓名</button>
    <button type="button" @click="changeName(false)">重置</button>
  </p>

  <p>年龄:{{ age.dat }}</p>
  <p>
    <button type="button" @click="changeAge(true)">改变年龄</button>
    <button type="button" @click="changeAge(false)">重置</button>
  </p>
  <child :names="name" :ages="age.dat"></child>
</template>
<script lang="ts">
  import { ref, defineComponent, watch, reactive } from "vue"
  import child from "@/components/child.vue"
  export default defineComponent({
    name: "HelloWorld",
    components: {
      child,
    },
    props: {
      msg: {
        type: String,
        required: true,
      },
    },
    setup: () => {
      const count = ref(0)
      const name = ref<string>("张三")
      const age = reactive({ dat: "23" })
      const changeName = (bool: boolean) => {
        if (bool) {
          name.value = "李四"
        } else {
          name.value = "张三"
        }
      }
      const changeAge = (bool: boolean) => {
        if (bool) {
          age.dat = "25"
        } else {
          age.dat = "23"
        }
      }
      watch(
        name,
        (newValue, oldValue) => {
          console.log(this) //undefined;箭头函数绑定父级作用域的上下文，所以this不会指向当前的组件
          console.log(newValue, oldValue)
        },
        { deep: false, immediate: false },
      )

      watch(
        () => age.dat,
        (newValue, oldValue) => {
          console.log(newValue, oldValue)
        },
      )
      return { count, changeName, name, age, changeAge }
    },
  })
</script>
