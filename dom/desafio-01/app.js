src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js">


    new Vue({
      el: '#desafio',
      data: {
        nameAndAge: 'Thiago (20)',
        age3x: '20'
      },
      methods: {
        randon: function() {
          return (Math.random())
        }
      }
    })
