# GS Moulid Game - Phaser Starter

This is a minimal Phaser (v3) starter project added to globalsolutions6/GS-Moulid-Game.

What it contains
- index.html — game entry using Phaser from CDN
- src/main.js — Phaser bootstrap
- src/scenes/PlayScene.js — simple player movement, one moving enemy, scoring and reset

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

How to extend
- Add assets/ and load images/sprites in preload()
- Create additional scenes and add them to the config
- Hook up scoring, levels, UI, and sounds

If you want, I can:
- Add an assets folder with placeholder art
- Wire up a simple menu and game over scene
- Configure CI to build and deploy to GitHub Pages

