
function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}
luckyDraw("joe")
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message))

  .then(() => luckyDraw("caroline"))
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message))

  .then(() => luckyDraw("Sabrina"))
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
