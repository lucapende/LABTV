// 1. Importa le librerie necessarie
import express from 'express';
import { join } from 'path';

// 2. Crea un'istanza dell'applicazione Express
const app = express();

// 3. Definisci la porta su cui il server ascolterà
// Usa la porta fornita dall'ambiente di hosting (come Render) o la 3000 per lo sviluppo locale
const port = process.env.PORT || 3000;

// 4. Configura Express per servire file statici
// Il middleware 'express.static' serve tutti i file all'interno della cartella 'public'
// Il 'path.join' garantisce che il percorso sia corretto su qualsiasi sistema operativo
app.use(express.static(join(__dirname, 'public')));

// 5. Avvia il server in ascolto sulla porta definita
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});