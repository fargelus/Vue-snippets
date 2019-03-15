Vue.component('Filters', {
  template: `
  <section class="filters">
    <h1>Lets hear some quotes</h1>

    <ul>
      <li v-for="quote in quotes">{{ quote.author }} said &laquo;{{ quote.phrase }}&raquo;</li>
    </ul>

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
      quotes: [
        {
          phrase: 'With great power comes great responsibility',
          author: 'Uncle Ben',
        },
        {
          phrase: 'We are living in the yellow submarine',
          author: 'The Beatles',
        },
        {
          phrase: 'Fear is the path to darkside',
          author: 'Yoda',
        },
      ],
    };
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
      return value.find(el => el.author === 'Yoda');
    },
  }
});
