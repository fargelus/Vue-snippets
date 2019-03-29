Vue.component('Mayor', {
  template:
    `<section>
      <h2>Candidates for mayor of Vue city</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="person in candidates">
          {{ person.name }} {{ person.voices }}
          &nbsp;&nbsp;
          <button type="button" class="btn btn-dark" @click="upvote(person)">
            Vote!
          </button>
        </li>
      </ul>

      <br>

      <div>
        Our mayor is <strong>{{ winner }}</strong>
      </div>
    </section>`,

  data: () => {
    return {
      candidates: [
        {
          name: 'Mr. Pink',
          voices: 145,
        },
        {
          name: 'Mr. Black',
          voices: 140,
        },
        {
          name: 'Mr. White',
          voices: 135,
        },
        {
          name: 'Mr. Brown',
          voices: 130,
        },
      ]
    }
  },

  created() {
    window.addEventListener('keyup', this.clearAllVotes);
  },

  methods: {
    upvote(person) {
      person.voices++;
    },

    clearAllVotes(ev) {
      if (ev.key === 'c') {
        const cand = this.candidates;
        this.candidates = _.map(cand, (person) => {
          person.voices = 0;
          return person;
        });
      }
    }
  },

  computed: {
    winner: function () {
      const newMayor = _.max(this.candidates, (person) => person.voices);
      return newMayor.voices === 0 ? 'nobody' : newMayor.name;
    },
  },
});
