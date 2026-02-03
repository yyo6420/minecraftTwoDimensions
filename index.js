const gameBoard = document.getElementById("gameBoard");

const createSky = () => {
  for (let skyBlock = 1; skyBlock <= 1800; skyBlock++) {
    const div = document.createElement("div");
    div.id = `block-${skyBlock}`;
    div.classList = "block sky";
    gameBoard.append(div);
  }
};

const createGrass = () => {
  for (let grassBlock = 601; grassBlock <= 660; grassBlock++) {
    const block = document.getElementById(`block-${grassBlock}`);
    block.classList = "block grass";
  }
};

const createErth = () => {
  for (let earthBlock = 661; earthBlock <= 900; earthBlock++) {
    const block = document.getElementById(`block-${earthBlock}`);
    block.classList = "block earth";
  }
};

const createStone = () => {
  for (let stoneBlock = 901; stoneBlock <= 1680; stoneBlock++) {
    const block = document.getElementById(`block-${stoneBlock}`);
    block.classList = "block stone";
  }
};

const createRock = () => {
  for (let rockBlock = 1681; rockBlock <= 1800; rockBlock++) {
    const block = document.getElementById(`block-${rockBlock}`);
    block.classList = "block rock";
  }
};

createSky();

createGrass();

createErth();

createStone();

createRock()