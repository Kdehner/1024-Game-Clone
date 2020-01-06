export function getPopulated(blocks) {
  const populated = [];
  for (let block of blocks) {
    let id = block.getTile;
    if (id) {
      populated.push(id - 1);
    } else {
      continue;
    }
  }
  return populated;
}

export function randomBlock(populated) {
  let random;
  while (true) {
    const min = Math.ceil(1);
    const max = Math.floor(16);
    random = (Math.floor(Math.random() * (max - min + 1)) + min) - 1;
    if (populated.includes(random)) {
      continue;
    } else {
      return random;
    }
  }
}