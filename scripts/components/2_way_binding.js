Vue.component('greetings', {
  template: `<div>
                <h1>{{ greetings }}, {{ name ? name : 'stranger' }}!</h1>
                <label for="name-input">
                    Enter your name:
                </label>
                <input v-model="name" id="name-input">
              </div>`,
  data: () => {
    return {
      greetings: 'Greetings your majesty',
      name: '',
    }
  },
});
