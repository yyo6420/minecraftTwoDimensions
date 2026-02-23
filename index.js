const gameBoard = document.getElementById("gameBoard");
const toolsContainer = document.querySelector(".toolsContainer");
let earthBlocksCounter = 0;
let treeTrunkBlocksCounter = 0;
let goldBlocksCounter = 0;
let leavesBlocksCounter = 0;
let leafBlock = undefined;
let currentCorsuer = "default";

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
  const block = document.getElementById(`block-${randomPlace}`);
  const randomTreeTrunkHight = Math.floor(Math.random() * (5 - 2) + 2);
  for (
    let treeTrunkBlock = 0;
    treeTrunkBlock <= randomTreeTrunkHight + 5;
    treeTrunkBlock++
  ) {
    const trunkBlock = document.getElementById(
      `block-${randomPlace - 60 * treeTrunkBlock}`,
    );
    if (treeTrunkBlock > randomTreeTrunkHight) {
      trunkBlock.classList = "block leaves";
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
        leaf5.classList = "block leaves";
      }

      leaf3.classList = "block leaves";
      leaf4.classList = "block leaves";
    }

    leaf.classList = "block leaves";
    leaf2.classList = "block leaves";
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
        leaf5.classList = "block leaves";
      }

      leaf3.classList = "block leaves";
      leaf4.classList = "block leaves";
    }

    leaf.classList = "block leaves";
    leaf2.classList = "block leaves";
  }
};

const placeDiamondRandomly = () => {
  for (let diamond = 1; diamond <= 10; diamond++) {
    const randomPlace = Math.floor(Math.random() * (1680 - 901 + 1)) + 901;
    const block = document.getElementById(`block-${randomPlace}`);
    block.classList = "block diamonds";
  }
};

const placeGoldRandomly = () => {
  for (let goldBlock = 1; goldBlock <= 10; goldBlock++) {
    const randomPlace = Math.floor(Math.random() * (1680 - 901 + 1)) + 901;
    const block = document.getElementById(`block-${randomPlace}`);
    block.classList = "block gold";
  }
};

const changeCursor = (image) => {
  document.body.style.cursor = `url(${image}) , auto`;
  if (image === "/cursor/pickaxe.png") {
    currentCorsuer = "pickaxe";
  } else if (image === "/cursor/axe.png") {
    currentCorsuer = "axe";
  } else if (image === "/cursor/shovel.png") {
    currentCorsuer = "shoval";
  } else if (image === "/cursor/shears.png") {
    currentCorsuer = "shears";
  }
};
gameBoard.addEventListener("click", (event) => {
  if (
    currentCorsuer === "pickaxe" &&
    (event.target.className.includes("stone") ||
      event.target.className.includes("diamonds") ||
      event.target.className.includes("gold"))
  ) {
    event.target.classList = "block sky";
  } else if (
    currentCorsuer === "axe" &&
    event.target.className.includes("treeTrunk")
  ) {
    event.target.classList = "block sky";
  } else if (
    currentCorsuer === "shoval" &&
    event.target.className.includes("earth")
  ) {
    event.target.classList = "block sky";
  } else if (
    currentCorsuer === "shears" &&
    event.target.className.includes("leaves")
  ) {
    event.target.classList = "block sky";
    if (leafBlock === undefined) {
      leafBlock = document.createElement("div");
      leafBlock.classList = "block leaves";
      leavesBlocksCounter++;
      leafBlock.textContent = leavesBlocksCounter.toString();
      toolsContainer.appendChild(leafBlock);
    } else {
      leavesBlocksCounter++;
      leafBlock.textContent = leavesBlocksCounter.toString();
    }
  }
});

const sky = createSky();
const grass = createGrass();
const earth = createErth();
const stone = createStone();
const rock = createRock();
const tree = createTree();
const tree2 = createTree();
const tree3 = createTree();
const tree4 = createTree();
const diamond = placeDiamondRandomly();
const gold = placeGoldRandomly();
