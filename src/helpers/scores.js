const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M4mA6zQYqBozYzOVwTbWY/scores';

const submitScore = (name, points) => {
  if (points <= 0) {
    return;
  }

  const score = { user: name, score: points };

  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });
};

const getScores = async () => {
  const data = await fetch(URL);
  const scores = await data.json();
  const leaderboard = [];

  scores.result
    .sort((a, b) => (a.score > b.score ? -1 : 1))
    .forEach(c => {
      if (leaderboard.every(d => d.user !== c.user) && leaderboard.length < 5) {
        leaderboard.push(c);
      }
    });

  return leaderboard;
};

export { submitScore, getScores };