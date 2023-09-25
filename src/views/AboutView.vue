<template>
  <div>
    <p>1. Text Interpolation: {{ msg }}</p><br> <!--1.a)This is an example of Text Interoplation, 
      we use the {{  }} brackets for it and the text inside will be replaced by the value of "msg"-->
    <p v-html="htmlContent"></p><br><!--1.b)This is an example of RAW HTML, In order to output real HTML, we need to use the v-html directive:-->
    <button v-bind:id="buttonId">Click ME!!</button><br><br> <!--1.c) We use the v-bind:id because {{  }} cannot be used inside HTML attributes or tags.-->
    <p>4. JavaScript Expressions: {{ 5 + 2 }} is equal to {{ "the number of colors in a " + name }}</p><br>
    <!--1.d) In this example, we use JavaScript functions inside the {{  }}-->
    <button @click="increment">Count is: {{ count }}</button><br><!--2. Button which increments when pressed.-->
    <p>Has the singer released any songs?</p>
    <span>{{ publishedSongs }}</span><br>
    <p v-bind:class="textClass">This text has a class binding.</p><br><!--5.a) Binding HTML Class.-->
    <p v-bind:style="textStyles">This text has an inline style binding.</p><br><!-- 5.b) Binding a single inline style property using v-bind:style -->
    <ul>
      <li v-for="(value, key, index) in myObject">
        {{ index }}. {{ key }}: {{ value }}
      </li>
    </ul><br>
    <h2>List Rendering with a Range</h2>
    <ul>
      <li v-for="n in 5" :key="n">Number {{ n }}</li> <!-- 6.b) v-for with a Range, the range here is from 1 to 5.-->
    </ul><br>
    <h2>List Rendering with v-for and v-if</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        <span>{{ user.name }}</span>
        <span v-if="user.isVerified"> (Verified)</span> <!-- 6.d) Use of v-for with v-if, v-for cycles through the array and v-if displays whether the person is verified or not. -->
      </li>
    </ul><br>
    <h2>List Rendering with a Component</h2>
  <ul>
    <user-item v-for="user in users" :key="user.id" :user="user"></user-item> <!-- 6.e) Example of v-for with a component.-->
  </ul>
  
  <button @click="incrementCountInline">Increment (Inline)</button><!-- Inline Event Handler -->

  
  <button @click="incrementCountMethod">Increment (Method)</button><!-- Method Event Handler -->

  
  <p>Count: {{ count }}</p><br><!-- Display the count -->

  <h2>Form Input Bindings</h2>
    
    
    <label for="text-input">Text Input:</label><!-- 8.a) v-model with <input type="text"> -->
    <input type="text" id="text-input" v-model="textInput" /><br />
    <p>Text Input Value: {{ textInput }}</p>

    
    <label for="checkbox-input">Checkbox:</label><!-- 8.a) v-model with <input type="checkbox"> -->
    <input type="checkbox" id="checkbox-input" v-model="checkboxInput" /><br />
    <p>Checkbox Value: {{ checkboxInput }}</p>

    
    <div>
      <label for="radio-input1">Radio 1:</label> <!-- 8.a) v-model with <input type="radio"> -->
      <input type="radio" id="radio-input1" value="radio1" v-model="radioInput" />
    </div>
    <div>
      <label for="radio-input2">Radio 2:</label>
      <input type="radio" id="radio-input2" value="radio2" v-model="radioInput" />
    </div>
    <p>Selected Radio Value: {{ radioInput }}</p>

    
    <label for="select-input">Select:</label> <!-- 8.a) Select Dropdown -->
    <select id="select-input" v-model="selectedOption">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    <p>Selected Option: {{ selectedOption }}</p>

    
    <label for="textarea-input">Textarea:</label> <!-- 8.a) Textarea for multiline text input -->
    <textarea id="textarea-input" v-model="textareaInput"></textarea>
    <p>Textarea Value: {{ textareaInput }}</p>

    <h2>v-model Modifiers</h2>

   
    <label for="lazy-input">Lazy Modifier:</label> <!-- 8.b) v-model modifier, .lazy Modifier -->
    <input type="text" id="lazy-input" v-model.lazy="lazyInput" /><br />
    <p>Lazy Input Value: {{ lazyInput }}</p>

    <label for="number-input">Number Modifier:</label><!-- 8.b) v-model modifier, .number Modifier -->
    <input type="text" id="number-input" v-model.number="numberInput" /><br />
    <p>Number Input Value (as Number): {{ numberInput }}</p>

    <label for="trim-input">Trim Modifier:</label><!-- 8.b) v-model modifier, .trim Modifier -->
    <input type="text" id="trim-input" v-model.trim="trimInput" /><br />
    <p>Trimmed Input Value: {{ trimInput }}</p><br>
    <p>
    Ask a yes/no question:
    <input v-model="question" />
    </p>
    <p>{{ answer }}</p><br>

    <h1>Vue 3 Modal Example</h1>
    <button @click="showModal">Open Modal</button> <!-- Implementing Components-->
    


  </div>
</template>


<script>
export default {

  data() {
    return {
      msg: "Im Doing SIT - 120!!",
      htmlContent: '<span style="color: red;">I am now using RAW HTML</span>',
      buttonId: "my-button",
      name: "Rainbow",
      textClass: 'highlight',
      textStyles: {
        color: 'red',
        fontSize: '23px',
      },
      users: [
        { id: 1, name: 'Ayan', isVerified: false },
        { id: 2, name: 'Ben', isVerified: true },
        { id: 3, name: 'Jacki', isVerified: true },
      ],
      textInput: '',
      checkboxInput: false,
      radioInput: '',
      selectedOption: '',
      textareaInput: '',
      lazyInput: '',
      numberInput: 0,
      trimInput: '',
    };
  },
  setup() {
    const count = ref(0);

    //7.a) An Example of Inline Event Handler
    const incrementCountInline = () => {
      countt.value++;
    };

    //7.b) An Example of method Event Handler
    const incrementCountMethod = () => {
      count.value++;
    };

    return {
      count,
      incrementCountInline,
      incrementCountMethod,
    };
  },
};
</script>


<script setup>
import { ref, onMounted, reactive, computed, watch } from 'vue'//3. 
const count = ref(0)
function increment() {
  count.value++
}
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
const singer = reactive({
  name: 'Justing Bieber',
  songs: [
    'Never give up',
    'Peaches',
    'Sorry!'
  ]
})
const publishedSongs = computed(() => { //4. Use of Computed Properties. These allow us to perform calculations based on our data.
  return singer.songs.length > 0 ? 'Yes' : 'No'
})
const myObject = reactive({
  title: 'How to win a race',
  author: 'Ayan Mohammad',
  publishedAt: '2004-05-18' // 6.a)Implementation of v-for with an Object.
})
const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

watch(question, async (newQuestion) => { //9. Implementing Watcher
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})
</script>
