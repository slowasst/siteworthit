import express from 'express';// Importa il modulo express
import cors from 'cors'; // Importa il modulo cors
import fs from 'fs'; // Importa il modulo fs per leggere file (in questo caso db.json)

const app = express();
const port = 5000; // Porta diversa da quella di React (di solito 3000)

// Abilita CORS per permettere richieste dal tuo frontend React
// Questo è cruciale in fase di sviluppo perché React e Express gireranno su porte diverse
app.use(cors());
app.use(express.json());

// Un semplice array di dati che il server invierà
const tutto = JSON.parse(fs.readFileSync('db.json'));

app.post('/api/getgiochi', (req, res) => {
    // Invia i dati come JSON
    // TODO: se c'è un filtro per titolo filtrare i titoli (req.body)
    
    let risric = []; //risric è la variabile che conterrà i titoli filtrati
    let titoli = tutto.titoli || []; //titoli e la variabile dei titoli presi da db.json, se non ce ne sono sarà un array vuoto
    if (req.body && req.body.titolo) {
        //filtri reg*x per filtrare i titoli
        
        titoli.forEach(element,i => {
            if(lement.Titolo.toLowerCase().includes(req.body.titolo.toLowerCase())){
                risric.push(element); //Se il titolo contiene la ricerca, aggiungilo all'array risric
            }
        });

    }
    risric = titoli; //risric sarà uguale a titoli
    res.json({risric}); // Invia i titoli come risposta JSON
}
);

// Avvia il server
app.listen(port, () => {
    console.log(`Server Express in ascolto su http://localhost:${port}`);
});
