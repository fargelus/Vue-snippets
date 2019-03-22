Vue.component('Filters', {
  template: `
  <section class="filters">
    <h1>Lets hear some quotes</h1>

    <ul>
      <li v-for="quote in filteredQuotes">
        {{ quote.author }} said &laquo;{{ quote.phrase }}&raquo;
        (upvoted {{ quote.upvotes }} times)
      </li>
    </ul>

    <button type="button" @click="reverseOrder">Reverse quotes order</button>
    <button type="button" @click="changePopularityMode">{{ popularityPhrase.current }}</button>

    <h3>Only Yoda quotes</h3>
    <p>Yoda said: {{quotes | yoda}}</p>

    <hr>

    <div class="live-search">
      <div class="form-group">
        <label for="query">
          What are you looking for?
        </label>
        <div><input v-model="query" id="query"></div>
      </div>

      <div v-show="query">
        <h3>Search results:</h3>
        <ul v-if="filterByQuery.length" class="list-group">
          <li class="list-group-item" v-for="filtered in filterByQuery">
            &laquo;{{ filtered.phrase }}&raquo;
          </li>
        </ul>
        <div v-else>
          Not found!!!
        </div>
      </div>
    </div>

  </section>`,

  data: () => {
    return {
      query: '',
      order: 1,
      popularityPhrase: {
        famous: 'Show famous stories',
        reset: 'Show all stories',
        current: 'Show famous stories',
      },
      filteredQuotes: [],
      quotes: [
        {
          phrase: 'With great power comes great responsibility',
          author: 'Uncle Ben',
          upvotes: 28,
        },
        {
          phrase: 'We are living in the yellow submarine',
          author: 'The Beatles',
          upvotes: 8,
        },
        {
          phrase: 'Fear is the path to darkside',
          author: 'Yoda',
          upvotes: 51,
        },
      ],
    };
  },

  created() {
    this.filteredQuotes = this.orderedByUpvotes();
  },

  methods: {
    orderedByUpvotes() {
      const that = this;
      return _.sortBy(this.quotes, (quote) => {
        return quote.upvotes * this.order;
      });
    },

    reverseOrder() {
      this.order *= -1;
      this.filteredQuotes = this.orderedByUpvotes();
    },

    changePopularityMode() {
      const { popularityPhrase } = this;
      const { current, famous, reset } = popularityPhrase;

      const isFamous = current === famous;
      popularityPhrase.current = isFamous ? reset : famous;
    },
  },

  computed: {
    filterByQuery() {
      const inputPhrase = this.query.toLowerCase();
      return this.quotes.filter(el => {
        const searchDest = el.phrase.toLowerCase();
        return searchDest.includes(inputPhrase);
      });
    },
  },

  filters: {
    yoda: (value) => {
      const yodaPhrase = value.find(el => el.author === 'Yoda');
      return _.isObject(yodaPhrase) ? `"${yodaPhrase.phrase}"` : 'nothing';
    },
  }
});
