const gameBoard = document.getElementById("gameBoard");
const toolsContainer = document.querySelector(".toolsContainer");
let randomNumberOfTrees = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
let currentCorsuer = "default";
let leafCounter = document.createElement("h2");
let leavesBlocksCounter = 0;
let leafBlock = undefined;
let earthCounter = document.createElement("h2");
let earthBlocksCounter = 0;
let earthBlock = undefined;
let grassCounter = document.createElement("h2");
let grassBlocksCounter = 0;
let grassBlock = undefined;
let treeTrunkCounter = document.createElement("h2");
let treeTrunkBlocksCounter = 0;
let treeTrunkBlock = undefined;
let stoneCounter = document.createElement("h2");
let stoneBlocksCounter = 0;
let stoneBlock = undefined;
let goldCounter = document.createElement("h2");
let goldBlocksCounter = 0;
let goldBlock = undefined;
let diamondsCounter = document.createElement("h2");
let diamondsBlocksCounter = 0;
let diamondsBlock = undefined;

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

const placeDiamondsRandomly = () => {
  for (let diamonds = 1; diamonds <= 15; diamonds++) {
    const randomPlace = Math.floor(Math.random() * (1680 - 901 + 1)) + 901;
    const block = document.getElementById(`block-${randomPlace}`);
    block.classList = "block diamonds";
  }
};

const placeGoldRandomly = () => {
  for (let goldBlock = 1; goldBlock <= 15; goldBlock++) {
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
  } else if (image === "./cursor/leaves.jpg") {
    currentCorsuer = "leaves";
  } else if (image === "./cursor/grass.jpg") {
    currentCorsuer = "grass";
  } else if (image === "./cursor/earth.jpg") {
    currentCorsuer = "earth";
  } else if (image === "./cursor/treeTrunk.jpg") {
    currentCorsuer = "treeTrunk";
  } else if (image === "./cursor/diamonds.png") {
    currentCorsuer = "diamonds";
  } else if (image === "./cursor/gold.png") {
    currentCorsuer = "gold";
  } else if (image === "./cursor/stone.jpg") {
    currentCorsuer = "stone";
  }
};
gameBoard.addEventListener("click", (event) => {
  if (
    currentCorsuer === "pickaxe" &&
    (event.target.className.includes("stone") ||
      (currentCorsuer === "pickaxe" &&
        event.target.className.includes("diamonds")) ||
      (currentCorsuer === "pickaxe" && event.target.className.includes("gold")))
  ) {
    if (event.target.className.includes("stone")) {
      if (stoneBlock === undefined) {
        stoneBlock = document.createElement("div");
        stoneBlock.className = "resourceBlock";

        const stoneImage = document.createElement("img");
        stoneImage.className = "toolsImage";
        stoneImage.src = "./cursor/stone.jpg";
        stoneImage.alt = "תמונה של אבן";
        stoneImage.onclick = () => changeCursor("./cursor/stone.jpg");

        stoneBlocksCounter++;
        stoneCounter.textContent = stoneBlocksCounter.toString();

        stoneBlock.append(stoneImage, stoneCounter);
        toolsContainer.appendChild(stoneBlock);
      } else {
        stoneBlocksCounter++;
        stoneCounter.textContent = stoneBlocksCounter.toString();
      }
    } else if (event.target.className.includes("gold")) {
      if (goldBlock === undefined) {
        goldBlock = document.createElement("div");
        goldBlock.className = "resourceBlock";

        const goldImage = document.createElement("img");
        goldImage.className = "toolsImage";
        goldImage.src = "./cursor/gold.png";
        goldImage.alt = "תמונה של זהב";
        goldImage.onclick = () => changeCursor("./cursor/gold.png");

        goldBlocksCounter++;
        goldCounter.textContent = goldBlocksCounter.toString();

        goldBlock.append(goldImage, goldCounter);
        toolsContainer.appendChild(goldBlock);
      } else {
        goldBlocksCounter++;
        goldCounter.textContent = goldBlocksCounter.toString();
      }
    } else {
      if (diamondsBlock === undefined) {
        diamondsBlock = document.createElement("div");
        diamondsBlock.className = "resourceBlock";

        const diamondsImage = document.createElement("img");
        diamondsImage.className = "toolsImage";
        diamondsImage.src = "./cursor/diamonds.png";
        diamondsImage.alt = "תמונה של יהלום";
        diamondsImage.onclick = () => changeCursor("./cursor/diamonds.png");

        diamondsBlocksCounter++;
        diamondsCounter.textContent = diamondsBlocksCounter.toString();

        diamondsBlock.append(diamondsImage, diamondsCounter);
        toolsContainer.appendChild(diamondsBlock);
      } else {
        diamondsBlocksCounter++;
        diamondsCounter.textContent = diamondsBlocksCounter.toString();
      }
    }
    event.target.classList = "block sky";
  } else if (
    currentCorsuer === "axe" &&
    event.target.className.includes("treeTrunk")
  ) {
    if (treeTrunkBlock === undefined) {
      treeTrunkBlock = document.createElement("div");
      treeTrunkBlock.className = "resourceBlock";

      const treeTrunkImage = document.createElement("img");
      treeTrunkImage.className = "toolsImage";
      treeTrunkImage.src = "./cursor/treeTrunk.jpg";
      treeTrunkImage.alt = "תמונה של גזע";
      treeTrunkImage.onclick = () => changeCursor("./cursor/treeTrunk.jpg");

      treeTrunkBlocksCounter++;
      treeTrunkCounter.textContent = treeTrunkBlocksCounter.toString();

      treeTrunkBlock.append(treeTrunkImage, treeTrunkCounter);
      toolsContainer.appendChild(treeTrunkBlock);
    } else {
      treeTrunkBlocksCounter++;
      treeTrunkCounter.textContent = treeTrunkBlocksCounter.toString();
    }
    event.target.classList = "block sky";
  } else if (
    (currentCorsuer === "shoval" && event.target.className.includes("earth")) ||
    (currentCorsuer === "shoval" && event.target.className.includes("grass"))
  ) {
    if (event.target.className.includes("earth")) {
      if (earthBlock === undefined) {
        earthBlock = document.createElement("div");
        earthBlock.className = "resourceBlock";

        const earthImage = document.createElement("img");
        earthImage.className = "toolsImage";
        earthImage.src = "./cursor/earth.jpg";
        earthImage.alt = "תמונה של אדמה";
        earthImage.onclick = () => changeCursor("./cursor/earth.jpg");

        earthBlocksCounter++;
        earthCounter.textContent = earthBlocksCounter.toString();

        earthBlock.append(earthImage, earthCounter);
        toolsContainer.appendChild(earthBlock);
      } else {
        earthBlocksCounter++;
        earthCounter.textContent = earthBlocksCounter.toString();
      }
    } else {
      if (grassBlock === undefined) {
        grassBlock = document.createElement("div");
        grassBlock.className = "resourceBlock";

        const grassImage = document.createElement("img");
        grassImage.className = "toolsImage";
        grassImage.src = "./cursor/grass.jpg";
        grassImage.alt = "תמונה של דשא";
        grassImage.onclick = () => changeCursor("./cursor/grass.jpg");

        grassBlocksCounter++;
        grassCounter.textContent = grassBlocksCounter.toString();

        grassBlock.append(grassImage, grassCounter);
        toolsContainer.appendChild(grassBlock);
      } else {
        grassBlocksCounter++;
        grassCounter.textContent = grassBlocksCounter.toString();
      }
    }
    event.target.classList = "block sky";
  } else if (
    currentCorsuer === "shears" &&
    event.target.className.includes("leaves")
  ) {
    if (leafBlock === undefined) {
      leafBlock = document.createElement("div");
      leafBlock.className = "resourceBlock";

      const leavesImage = document.createElement("img");
      leavesImage.className = "toolsImage";
      leavesImage.src = "./cursor/leaves.jpg";
      leavesImage.alt = "תמונה של עלים";
      leavesImage.onclick = () => changeCursor("./cursor/leaves.jpg");

      leavesBlocksCounter++;
      leafCounter.textContent = leavesBlocksCounter.toString();

      leafBlock.append(leavesImage, leafCounter);
      toolsContainer.appendChild(leafBlock);
    } else {
      leavesBlocksCounter++;
      leafCounter.textContent = leavesBlocksCounter.toString();
    }
    event.target.classList = "block sky";
  } else if (event.target.className.includes("sky")) {
    if (currentCorsuer === "leaves") {
      leavesBlocksCounter--;
      leafCounter.textContent = leavesBlocksCounter.toString();
      event.target.className = "block leaves";
      if (leavesBlocksCounter === 0) {
        toolsContainer.removeChild(leafBlock);
        leafBlock = undefined;
        currentCorsuer = "default";
        document.body.style.cursor = "auto";
      }
    } else if (currentCorsuer === "grass") {
      grassBlocksCounter--;
      grassCounter.textContent = grassBlocksCounter.toString();
      event.target.className = "block grass";
      if (grassBlocksCounter === 0) {
        toolsContainer.removeChild(grassBlock);
        grassBlock = undefined;
        currentCorsuer = "default";
        document.body.style.cursor = "auto";
      }
    } else if (currentCorsuer === "earth") {
      earthBlocksCounter--;
      earthCounter.textContent = earthBlocksCounter.toString();
      event.target.className = "block earth";
      if (earthBlocksCounter === 0) {
        toolsContainer.removeChild(earthBlock);
        earthBlock = undefined;
        currentCorsuer = "default";
        document.body.style.cursor = "auto";
      }
    } else if (currentCorsuer === "treeTrunk") {
      treeTrunkBlocksCounter--;
      treeTrunkCounter.textContent = treeTrunkBlocksCounter.toString();
      event.target.className = "block treeTrunk";
      if (treeTrunkBlocksCounter === 0) {
        toolsContainer.removeChild(treeTrunkBlock);
        treeTrunkBlock = undefined;
        currentCorsuer = "default";
        document.body.style.cursor = "auto";
      }
    } else if (currentCorsuer === "diamonds") {
      diamondsBlocksCounter--;
      diamondsCounter.textContent = diamondsBlocksCounter.toString();
      event.target.className = "block diamonds";
      if (diamondsBlocksCounter === 0) {
        toolsContainer.removeChild(diamondsBlock);
        diamondsBlock = undefined;
        currentCorsuer = "default";
        document.body.style.cursor = "auto";
      }
    } else if (currentCorsuer === "gold") {
      goldBlocksCounter--;
      goldCounter.textContent = goldBlocksCounter.toString();
      event.target.className = "block gold";
      if (goldBlocksCounter === 0) {
        toolsContainer.removeChild(goldBlock);
        goldBlock = undefined;
        currentCorsuer = "default";
        document.body.style.cursor = "auto";
      }
    } else if (currentCorsuer === "stone") {
      stoneBlocksCounter--;
      stoneCounter.textContent = stoneBlocksCounter.toString();
      event.target.className = "block stone";
      if (stoneBlocksCounter === 0) {
        toolsContainer.removeChild(stoneBlock);
        stoneBlock = undefined;
        currentCorsuer = "default";
        document.body.style.cursor = "auto";
      }
    }
  }
});

const sky = createSky();
const grass = createGrass();
const earth = createErth();
const stone = createStone();
const rock = createRock();
const diamonds = placeDiamondsRandomly();
const gold = placeGoldRandomly();
for (let tree = 0; tree < randomNumberOfTrees; tree++) {
  createTree();
}
