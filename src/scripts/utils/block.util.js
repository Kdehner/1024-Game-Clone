export function getPopulated(blocks) {
  const populated = [];
  for (let row of blocks) {
    for (let block of row) {
      let id = block.getTile;
      if (id) {
        populated.push(id);
      } else {
        continue;
      }
    }
  }
  return populated;
}

export function randomBlock(populated) {
  let random;
  while (true) {
    const min = Math.ceil(1);
    const max = Math.floor(16);
    random = (Math.floor(Math.random() * (max - min + 1)) + min);
    if (populated.includes(random )) {
      continue;
    } else {
      return random;
    }
  }
}

export function getBlockIndex(id, blocks) {
  for(const row of blocks) {
    const block = row.find(block => block.getId === id);
    if(block) {
      return block.getIndex;
    }
  }
}

