1. Use SFC (Single file component) 
File composition
<script> ... js </script>
<template> ... Html </template>
<style scoped> ... css/scss </style> 

2. Use composition API.
const someProperty = ref<type>(initValue);
someProperty.value = ...

3. Use scoped styles every single file. Keep global files separate.
<style scoped> ... css/scss </style> 

4. Use computed properties for class possible states.
<script>
const isActive = ref(true)
const error = ref(null)

const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))
</script>

<template >
<div :class="classObject"></div>
</template >

5. Use emit events whenever you need a callback from a child component.
Even though it can be tempting to pass functions as props in Vue, it's considered an anti-pattern.
//PARENT
<script>
const childMsg = ref("No child msg yet");
</script>

<template>
  <main>
    <ChildComp @response="(msg) => (childMsg = msg)" />
    It will show message that children returns.
    <p>{{ childMsg }}</p>
  </main>
</template>

//CHILD
<script setup lang="ts">
const emit = defineEmits(["response"]);

emit("response", "hello from child");
</script>

<template>
  <h2>Child component</h2>
</template>

*The following syntax will return binded class - active when the isActive is true.
<div :class="{ active: isActive }"></div>

6. Adding classes to the components looks to me like an antipattern.
 <MyComponent class="baz boo" /><MyComponent class="baz boo" />

7. Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs.
So prefer v-show if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime.

8. It's not recommended to use v-if and v-for on the same element due to implicit precedence. (v-if has precedence)

9. You may also iterate (similar to the Object.keys())
<script setup>
import { reactive } from 'vue'

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>

<template>
	<ul>
    <li v-for="(value, key, index) in myObject">
		  {{ index }}. {{ key }}: {{ value }} //0. title: How to do lists in Vue etc...
		</li>
  </ul>
</template>

10. Be careful when mutating an array in computed method.
It is recommended to use when filtering or sorting but we should always operate on the original array.
const numbers = ref([1, 2, 3, 4, 5])

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0)
})

Mution methods:
push()
pop()
shift()
unshift()
splice()
sort()
reverse()

11. Forms
Trimming text automatically
<input v-model.trim="msg" />
Input only number (parses with parseFloat())
<input v-model.number="age" />
Custom form values
<input type="radio" v-model="pick" :value="first" />
<input type="radio" v-model="pick" :value="second" />

12. Use Watchers mostly on the single properties instead of objects - try to avoid deep watchers (this may be performacne expensive)
//DEEP WATCHERS

//Fires when property is a new item
watch(
  () => state.someObject,
  (newValue, oldValue) => {
    // Note: `newValue` will be equal to `oldValue` here
    // *unless* state.someObject has been replaced
  },
  { deep: true }
)

//Fires when gets NEW OBJECT 
watch(
  () => state.someObject,
  () => {
    // fires only when state.someObject is replaced
  }
)

//Fires everytime property change 
const obj = reactive({ count: 0 })

watch(obj, (newValue, oldValue) => {
  // fires on nested property mutations
  // Note: `newValue` will be equal to `oldValue` here
  // because they both point to the same object!
})

obj.count++

//Shallow watcher
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

13. WatchEffects allows us to perform a side effect immediately while automatically tracking the effect's reactive dependencies. 
watchEffect(async () => {
  const response = await fetch(url.value)
  data.value = await response.json()
})

14. By default, user-created watcher callbacks are called before Vue component updates. 
If you want to access the DOM in a watcher callback after Vue has updated it, you need to specify the flush: 'post'
watch(source, callback, {
  flush: 'post'
})

watchEffect(callback, {
  flush: 'post'
})

15. Use object syntax when assigning props
defineProps({
  title: String,
  likes: Number
})

Typescript: 
<script setup lang="ts">
defineProps<{
  title?: string
  likes?: number
}>()
</script>

16. Sending props as object vs single props
<BlogPost v-bind="post" /> -> Multiple props in post {post: 'name', count: 5}
<BlogPost :id="post.id" :title="post.title" /> -> Every prop separately