Vue.component('Greetings', {
  props: ['name', 'gender'],

  data: () => {
    return {
      salute: 'Hello',
    };
  },

  computed: {
    reactiveGender() {
      return this.gender;
    },

    reactiveName() {
      return this.name ? this.name : 'stranger';
    },
  },

  methods: {
    isMale() {
      return this.reactiveGender === 'male';
    },

    isFemale() {
      return this.reactiveGender === 'female';
    },

    appeal() {
      return this.reactiveGender === 'male' ? 'Mr.' : 'Miss';
    },
  },

  template: `
    <div class="root">
      <div v-if="isMale() || isFemale()">
        <h1> {{salute}} {{appeal()}} {{ reactiveName }} </h1>
      </div>
      <div v-else>
        <h1> Enter a valid gender, human!!!</h1>
      </div>
    </div>`
})

Vue.component('Profile', {
  template: `<div>
                <div class="entry-message">
                  <Greetings :name="name" :gender="gender"/>
                </div>

                <div class="controls">
                  <div>
                    <label for="gender-input">
                      Enter your gender:
                    </label>
                    <input id="gender-input" v-model="gender">
                  </div>
                  <br>
                  <div>
                    <label for="name-input">
                        Enter your name:
                    </label>
                    <input v-model="name" id="name-input">
                  </div>
                </div>
              </div>`,
  data: () => {
    return {
      gender: 'male',
      name: 'Alex',
    };
  },
});
