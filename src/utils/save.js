export function loadHighScore(){
  const v = localStorage.getItem('gs_moulid_highscore');
  return v ? parseInt(v, 10) : 0;
}

export function saveHighScore(score){
  const cur = loadHighScore();
  if (score > cur) {
    localStorage.setItem('gs_moulid_highscore', score);
    return true;
  }
  return false;
}
