const citations = [
  { id: 1, auteur: "Albert Einstein", texte: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre." },
  { id: 2, auteur: "Oscar Wilde", texte: "Soyez vous-même, les autres sont déjà pris." },
  { id: 3, auteur: "Victor Hugo", texte: "La vie est un sommeil, l'amour en est le rêve." },
  { id: 4, auteur: "Confucius", texte: "Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie." },
  { id: 5, auteur: "Gandhi", texte: "Sois le changement que tu veux voir dans le monde." }
];

function obtenirCitationAleatoire() {
  const index = Math.floor(Math.random() * citations.length);
  return citations[index];
}

function obtenirCitations() {
  return citations;
}

function ajouterCitation(auteur, texte) {
  const citation = { 
    id: citations.length + 1, 
    auteur, 
    texte 
  };
  citations.push(citation);
  return citation;
}

module.exports = { 
  obtenirCitationAleatoire, 
  obtenirCitations, 
  ajouterCitation 
};
