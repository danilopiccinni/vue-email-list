const { createApp } = Vue

createApp({
  data() {
    return {
        eMails : [],
    }
  },

  mounted() {

    // ciclo che crea 10 mail
    for (let i = 0 ; i < 10 ; i++) {

        // tramite '.get' chiediamo un oggetto tramite un link api 
        // e al suo interno oltre alle svariate informazioni dell'oggetto conterrà la nostra mailrichiesta 
                                                                            // tramite il '.then' specifichiamo a quel punto (cioè quando abbiamo ricevuto l'informazione richiesta cin il '.get')
                                                                            // avvia una funzione (arrow funcition in questo caso) che ci restituisce l'informazione presa con il '.get' in una variabile chiamata di solito in questi casi 'res'
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
            
            //inserissce ogni volta l'informazione (in questo caso l'email richiesta)
            // a cui accediamo con il percorso solito che si usano per gli oggetti ('.data' e '.response' per trovare il l'informazione che ci serve) 
            this.eMails.push(res.data.response)
            
            // test
            console.log(res.data.response)
        })

    }

    // test
    console.log(this.eMails)
  }
}).mount('#app')
