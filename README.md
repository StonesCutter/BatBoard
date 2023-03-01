---------------------- SCREENS --------------------------

1. START - functional component
2. TUTORIAL - functional component
3. RANKING - functional component
4. GAME - class component
5. GAME OVER - functional component
6. SKIN ???

---------------------- COMPONENTS --------------------------

- Form [? - per il login]
- Button (bottone e input text) - fatto
- Obstacle
- Character - Fatto
- Coin - Fatto
- Ground - fatto
- ScoreList (la classifica vera e propria, con le cards)
- ScoreNumber (il numero che mostra il punteggio, da usare sia nel Ranking screen che durante il gioco)
- gamePhrase (per titolo, game start, game over e ranking title) - fatto
- scoreCard ( per game over score e dentro il ranking per la classifica) - fatto

---------------------- STATI -----------------------------

- GAME Screen states:

1. isPlayerAlive: boolean
2. scores: number
3. coordinates {X,Y}
4. rotation: degrees
5. isGamePaused: boolean

---

Routing -

1. passare come parametro il nome dell'utente
   (da usare per esempio nel gameover e nel ranking)
2. passare come parametro la score della partita attuale finita

---------------------- FUNZIONI --------------------------
Utils functions

- SetGetLocalstorage
- stringMatch (da utilizzare se utenti uguali)
- collision (ostacoli) (sia per ostacoli che per il coin)

GAME screen functions:

- goUp
- goDown ( set timeout a loop )
- updateRanking (carica le score sul local storage)
- countScores (contare e mostrare le score)

RANKING screen functions:

- showRanking (preleva le info dal local storage e le ordina)

## OBSTACLE COMPONENT functions:

BUTTON COMPONENT functions:

- callback

CHARACTER COMPONENT functions:

- loop movement function

[?]

- aboveBelowCollision (che poi non è collisione)
  -----------------------LOCAL STORAGE----------------------------
  [] {user: , punteggio: , best: }

---

Piano d'azione:


Palette Colori:
Secondario: #c498cc
Primario: #c0c0c0
Sfondo: #040404