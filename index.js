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

const createTree = () => {
  const randomPlace = Math.floor(Math.random() * (596 - 544 + 1)) + 544;
  const randomTreeTrunkHight = Math.floor(Math.random() * (5 - 2) + 2);
  const block = document.getElementById(`block-${randomPlace}`);
  for (
    let treeTrunkBlock = 0;
    treeTrunkBlock <= randomTreeTrunkHight + 5;
    treeTrunkBlock++
  ) {
    const trunkBlock = document.getElementById(
      `block-${randomPlace - 60 * treeTrunkBlock}`,
    );
    if (treeTrunkBlock > randomTreeTrunkHight) {
      trunkBlock.classList = "block leves";
    } else {
      trunkBlock.classList = "block treeTrunk";
    }
  }

  block.classList = "block treeTrunk";

  for (let leaves = 1; leaves <= 3; leaves++) {
    const leaf = document.getElementById(
      `block-${randomPlace - 60 * randomTreeTrunkHight + leaves}`,
    );
    const leaf2 = document.getElementById(
      `block-${randomPlace - 60 * (randomTreeTrunkHight + 1) + leaves}`,
    );

    if (leaves >= 1 && leaves <= 2) {
      const leaf3 = document.getElementById(
        `block-${randomPlace - 60 * (randomTreeTrunkHight + 2) + leaves}`,
      );

      const leaf4 = document.getElementById(
        `block-${randomPlace - 60 * (randomTreeTrunkHight + 3) + leaves}`,
      );

      if (leaves === 1) {
        const leaf5 = document.getElementById(
          `block-${randomPlace - 60 * (randomTreeTrunkHight + 4) + leaves}`,
        );
        leaf5.classList = "block leves";
      }

      leaf3.classList = "block leves";
      leaf4.classList = "block leves";
    }

    leaf.classList = "block leves";
    leaf2.classList = "block leves";
  }

  for (let leaves = 1; leaves <= 3; leaves++) {
    const leaf = document.getElementById(
      `block-${randomPlace - 60 * randomTreeTrunkHight - leaves}`,
    );
    const leaf2 = document.getElementById(
      `block-${randomPlace - 60 * (randomTreeTrunkHight + 1) - leaves}`,
    );

    if (leaves >= 1 && leaves <= 2) {
      const leaf3 = document.getElementById(
        `block-${randomPlace - 60 * (randomTreeTrunkHight + 2) - leaves}`,
      );
      const leaf4 = document.getElementById(
        `block-${randomPlace - 60 * (randomTreeTrunkHight + 3) - leaves}`,
      );

      if (leaves === 1) {
        const leaf5 = document.getElementById(
          `block-${randomPlace - 60 * (randomTreeTrunkHight + 4) - leaves}`,
        );
        leaf5.classList = "block leves";
      }

      leaf3.classList = "block leves";
      leaf4.classList = "block leves";
    }

    leaf.classList = "block leves";
    leaf2.classList = "block leves";
  }
};
createSky();

createGrass();

createErth();

createStone();

createRock();

createTree();
