const express = require('express');
const path = require('path');
const { obtenirCitationAleatoire, obtenirCitations } = require('./app');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Route API pour citation aléatoire
app.get('/api/citation/aleatoire', (req, res) => {
  const citation = obtenirCitationAleatoire();
  res.json(citation);
});

// Route API pour toutes les citations
app.get('/api/citations', (req, res) => {
  res.json(obtenirCitations());
});

// Route principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
});

module.exports = app;
