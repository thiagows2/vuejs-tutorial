new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Teste')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})