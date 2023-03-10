import Obstacle from "../components/funcComponents/obstacle/Obstacle";

function moveObj(objList, speed) {
  // here we move the list of objects at a certain speed
  //if (time % speed === 0) {
  objList.map(function (item) {
    {
      item.position = item.position - speed;
      //console.log("position", item.getBoundingClientRect());
    }
  });
  // }
}

function removePassedObjects(objList) {
  let filteredList = objList.filter((obj) => obj.position >= 0);
  return filteredList;
}

function pushToObjList(objList, time, speed, type) {
  //here we update the list of objects with the new one - push
  let randomHeight = null;
  if (time % speed === 0) {
    if (type === "obstacle") {
      randomHeight = generateHeightObs();
      objList.push({
        height: randomHeight,
        position: 100,
        top: generateYPositionObj(randomHeight, "obstacle"),
        scoreGiven: false,
      });
    }
    //console.log("lunghezza lista di oggetti", objList.length, objList);
  }
}

function generateNewObs(height, position, top) {
  return (
    <Obstacle customHeight={height} customPosition={position} customTop={top} />
  );
}

/*function generateNewCoins(position, top) {
  return <Coin customPosition={position} customTop={top} />;
}*/

function generateHeightObs() {
  return Math.floor(Math.random() * 30) + 20;
}

function generateYPositionObj(height, type) {
  if (type === "obstacle") {
    let top = null;
    Math.round(Math.random()) === 0 ? (top = 0) : (top = 100 - height);
    return top;
  }
}

function checkCollision(
  objList,
  type,
  charLeft,
  charTop,
  charWidth,
  charHeight
) {
  let collidableWidth = (charWidth * 100) / window.innerWidth;
  let collidableHeight = (charHeight * 100) / window.innerHeight;
  let collidablePosY = (charTop * 100) / window.innerHeight;
  let hasCollided = false;

  if (objList != null) {
    //console.log("coord Y: ", charTop, "collidablePosY: ", collidablePosY);
    if (
      collidablePosY <= collidableHeight ||
      collidablePosY >= 100 - collidableHeight
    ) {
      //console.log("Fuori dai bordi!");
      return true;
    }

    let filteredList = objList.filter(
      (obj) =>
        obj.position >= 50 - collidableWidth &&
        obj.position <= 50 + collidableWidth
    );
    filteredList.map(function (item) {
      {
        /*console.log(
            "[",
            item.top,
            "] :",
            100 - item.height,
            "<=",
            Math.round(collidablePosY),
            "+",
            Math.round(collidableHeight)
          );*/
        if (
          (item.top === 0 &&
            item.height >= collidablePosY - collidableHeight) ||
          (item.top !== 0 &&
            100 - item.height <= collidablePosY + collidableHeight + 20)
        ) {
          console.log("Ha colliso!!");
          //return true;
          hasCollided = true;
        }

        //item.position = item.position - speed;
        //console.log("position", item.getBoundingClientRect());
        //console.log("passati per fine funzione");
        //return true;
      }
    });

    if (hasCollided) {
      return true;
    } else {
      return false;
    }
  }
}

function checkScore(objList, scoreCount) {
  if (objList != null) {
    objList.map(function (item) {
      if (item.position < 40 && item.scoreGiven === false) {
        item.scoreGiven = true;
        scoreCount++;
      }
    });
    let objListAndScores = { objList, scoreCount };
    return objListAndScores;
  }
}

function renderItems(itemsList, type) {
  return itemsList?.map(function (item, key) {
    return (
      <div key={`${key}-${Math.random()}`}>
        {type === "obstacle" &&
          generateNewObs(item.height, item.position, item.top)}
      </div>
    );
  });
}

export {
  moveObj,
  generateNewObs,
  renderItems,
  pushToObjList,
  removePassedObjects,
  checkCollision,
  checkScore,
};
