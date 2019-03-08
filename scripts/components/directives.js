Vue.component('directives', {
  template: `<div>
                <div v-if="!message">
                  <h1>You must send message for help!</h1>
                  <p>Pray for help immediately</p>
                </div>
                <h2 v-else>You want to send: {{message}}</h2>

                <textarea v-model="message"></textarea>
                <button v-show="message">Send message for help!</button>
             </div>`,
  data: () => {
    return {
      message: '',
    };
  }
});
