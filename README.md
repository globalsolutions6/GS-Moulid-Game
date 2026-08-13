# GS Moulid Game - Phaser Starter

This is a minimal Phaser (v3) starter project added to globalsolutions6/GS-Moulid-Game.

What it contains
- index.html — game entry using Phaser from CDN
- src/main.js — Phaser bootstrap (now registers Menu, Play, and GameOver scenes)
- src/scenes/MenuScene.js — main menu with start button and high-score display
- src/scenes/PlayScene.js — player movement, one moving enemy, scoring and transition to Game Over
- src/scenes/GameOverScene.js — shows final score, saves high-score to localStorage and restarts
- src/utils/save.js — small helper to load/save high score from localStorage

How to run (quick)
1. Clone the repo:
   git clone https://github.com/globalsolutions6/GS-Moulid-Game.git
2. Change directory and checkout the branch with the starter:
   cd GS-Moulid-Game
   git checkout feature/initial-game
3. Serve the folder over HTTP (ES modules require an HTTP server):
   - Python 3: python -m http.server 8000
   - or using npm: npm run start
4. Open http://localhost:8000 in your browser and the game will load.

Gameplay
- From the Menu select START to play.
- Controls: arrow keys to move the green square (player).
- Avoid the red square (enemy). Score increases over time; colliding will send you to the Game Over screen.
- High scores are stored in localStorage under the key `gs_moulid_highscore`.

Next steps I can do for you
- Add placeholder art and sounds to an assets/ directory and update preload() to use them.
- Add a proper sprite-based player and animations.
- Add levels, obstacles, and additional enemy types.
- Deploy to GitHub Pages or set up a GitHub Action to publish on push.

Tell me which next step you'd like or say "Do all" and I will implement everything and push it to the feature branch.
