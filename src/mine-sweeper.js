const coordinatesForBombsCheck = {
  0: [1, 3, 4],
  1: [0, 2, 3, 4, 5],
  2: [1, 4, 5],
  3: [0, 1, 4, 6, 7],
  4: [0, 1, 2, 3, 5, 6, 7, 8],
  5: [1, 2, 4, 7, 8],
  6: [3, 4, 7],
  7: [3, 4, 5, 6, 8],
  8: [4, 5, 7],
};

function mineSweeper(playerMove, bombLocations, previousBoard = []) {
  let board = '';
  let drawSymbolArr = [];
  [board, drawSymbolArr] = createWholeBoard(playerMove, bombLocations, previousBoard);
  console.log(board);
  return [board, drawSymbolArr];
}

function createWholeBoard(playerMove, bombLocations, previousBoard) {
  let board = '';
  let boardMessage = '';
  let drawSymbolArr = [];
  let bombsAround = checkForBombsAround(bombLocations);

  if (playerMove.playerPick.includes(true) === false) {
    boardMessage = '[Sandbox 3x3] Game created';
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n' + boardMessage;
  } else {
    [board, drawSymbolArr] = createBoardBody(playerMove, bombLocations, bombsAround, previousBoard);
  }
  return [board, drawSymbolArr];
}

function createBoardBody(playerMove, bombLocations, bombsAround, previousBoard) {
  let emptyBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  let boardMessageArr = [];
  let autoReveal = false;
  let drawSymbolArr = previousBoard.length === 0 ? emptyBoard : previousBoard;
  [drawSymbolArr, autoReveal, boardMessageArr] = iterateThroughBoard('', autoReveal, drawSymbolArr, boardMessageArr, playerMove, bombLocations, bombsAround);
  if (checkIfWon(bombLocations, drawSymbolArr, autoReveal)) {
    boardMessageArr[0] = '[Sandbox 3x3] the land is cleared! GOOD JOB!';
  }
  return drawBoard(drawSymbolArr, boardMessageArr[0]);
}

function iterateThroughBoard(boardMessage, autoReveal, drawSymbolArr, boardMessageArr, playerMove, bombLocations, bombsAround) {
  let boardMessageStr = boardMessage;
  for (let i = 0; i < 9; i++) {
    [drawSymbolArr, boardMessageStr, autoReveal] = drawSymbolAndBoardMessage(i, drawSymbolArr, playerMove, bombLocations, bombsAround, autoReveal);
    if (boardMessageStr != '') {
      boardMessageArr.push(boardMessageStr);
    }
  }
  return [drawSymbolArr, autoReveal, boardMessageArr];
}

function checkIfWon(bombLocations, drawSymbolArr, autoReveal) {
  let bombsCountTotal = 0;
  let bombsCountInBoardTotal = 0;
  for (let j = 0; j < 9; j++) {
    bombsCountTotal = increaseBombCountTotal(bombLocations[j], bombsCountTotal);
    bombsCountInBoardTotal = increaseBombCountInBoardTotal(drawSymbolArr[j], bombsCountInBoardTotal);
  }
  return determineResult(autoReveal, bombsCountTotal, bombsCountInBoardTotal);
}

function increaseBombCountInBoardTotal(square, bombsCountInBoardTotal) {
  if (square === ' ') {
    bombsCountInBoardTotal++;
  }
  return bombsCountInBoardTotal;
}

function increaseBombCountTotal(square, bombsCountTotal) {
  if (square === true) {
    bombsCountTotal++;
  }
  return bombsCountTotal;
}

function determineResult(autoReveal, bombsCountTotal, bombsCountInBoardTotal) {
  let result = false;
  if (autoRevealAndBombsTotal(autoReveal, bombsCountTotal, bombsCountInBoardTotal) || bombsCountInBoardTotal === 0) {
    result = true;
  }
  return result;
}

function autoRevealAndBombsTotal(autoReveal, bombsCountTotal, bombsCountInBoardTotal) {
  return autoReveal && bombsCountTotal === bombsCountInBoardTotal;
}

function drawSymbolAndBoardMessage(i, drawSymbolArr, playerMove, bombLocations, bombsAround, autoReveal) {
  let drawSymbol = ' ';
  let boardMessage = '';
  if (drawSymbolArr[i] === ' ') {
    drawSymbol = createDrawSymbol(i, playerMove, bombLocations[i], bombsAround, autoReveal);
    [drawSymbolArr, autoReveal, boardMessage] = addDrawSymbolAndSetBoardMessage(drawSymbol, drawSymbolArr, i, bombsAround, autoReveal, boardMessage);
    drawSymbolArr[i] = drawSymbol;
  }
  return [drawSymbolArr, boardMessage, autoReveal];
}

function addDrawSymbolAndSetBoardMessage(drawSymbol, drawSymbolArr, i, bombsAround, autoReveal, boardMessage) {
  const bombOrEmptySquare = [' ', '_'];
  if (drawSymbol === '_') {
    drawSymbolArr = revealNeighbors(i, drawSymbolArr, bombsAround);
    autoReveal = true;
  }
  if (!bombOrEmptySquare.includes(drawSymbol)) {
    boardMessage = createBoardMessage(drawSymbol, bombsAround[i]);
  }
  return [drawSymbolArr, autoReveal, boardMessage];
}

function revealNeighbors(i, drawSymbolArr, bombsAround) {
  let checkForCoordinates = coordinatesForBombsCheck[i];
  let coordinatesForCheckArr = [];
  coordinatesForCheckArr.push(...checkForCoordinates);
  let alreadyCheckedSquares = [];
  do {
    let square = coordinatesForCheckArr.shift();
    alreadyCheckedSquares.push(square);
    drawSymbolArr[square] = bombsAround[square];
    coordinatesForCheckArr = coordinatesForCheckArr.concat(coordinatesForBombsCheck[square]);
    coordinatesForCheckArr = coordinatesForCheckArr.filter((item, idx) => coordinatesForCheckArr.indexOf(item) === idx);
  } while (trueCondition(coordinatesForCheckArr, alreadyCheckedSquares));
  return drawSymbolArr;
}

function trueCondition(coordinatesForCheckArr, alreadyCheckedSquares) {
  return coordinatesForCheckArr.length != 0 && alreadyCheckedSquares.length < 9;
}

function createBoardMessage(drawSymbol, bombsAround) {
  let bombAndSignSymbols = ['X', '*'];
  if (bombAndSignSymbols.includes(drawSymbol)) {
    return createBombAndSignMessage(drawSymbol);
  } else {
    return createBombsAroundMessage(bombsAround, drawSymbol);
  }
}

function createBombAndSignMessage(drawSymbol) {
  if (drawSymbol === 'X') {
    return '[Sandbox 3x3] BOOM! – Game Over.';
  } else {
    return '[Sandbox 3x3] Square flagged as bomb.';
  }
}

function createBombsAroundMessage(bombsAround, drawSymbol) {
  let bombsStr = bombsAround > 1 ? drawSymbol + ' bombs' : drawSymbol + ' bomb';
  return '[Sandbox 3x3] ' + bombsStr + ' around your square.';
}

function createDrawSymbol(i, playerMove, bombLocation, bombsAround, autoReveal) {
  if (playerMove.playerPick[i] === true) {
    return createDrawSymbolWhenPlayerPick(playerMove.playerPickType, bombLocation, bombsAround, i);
  } else if (autoReveal === true) {
    return '' + bombsAround[i];
  }
  return ' ';
}

function createDrawSymbolWhenPlayerPick(playerPickType, bombLocation, bombsAround, i) {
  if (playerPickType === 'Flag') {
    return '*';
  } else {
    return bombOrBombsAround(bombLocation, bombsAround[i]);
  }
}

function bombOrBombsAround(bombLocation, bombsAround) {
  return bombLocation === true ? 'X' : '' + bombsAround;
}

function drawBoard(drawSymbolArr, boardMessage) {
  let boardBody = '';
  boardBody += '+-+-+-+\n';
  boardBody += '|' + drawSymbolArr[0] + '|' + drawSymbolArr[1] + '|' + drawSymbolArr[2] + '|\n';
  boardBody += '+-+-+-+\n';
  boardBody += '|' + drawSymbolArr[3] + '|' + drawSymbolArr[4] + '|' + drawSymbolArr[5] + '|\n';
  boardBody += '+-+-+-+\n';
  boardBody += '|' + drawSymbolArr[6] + '|' + drawSymbolArr[7] + '|' + drawSymbolArr[8] + '|\n';
  boardBody += '+-+-+-+\n\n';
  boardBody += boardMessage;
  return [boardBody, drawSymbolArr];
}

function checkForBombsAround(bombLocations) {
  let bombsAround = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < 9; i++) {
    let checkForCoordinates = coordinatesForBombsCheck[i];
    let bombCount = 0;
    for (let coordinates of checkForCoordinates) {
      bombCount = increaseBombCount(bombLocations[coordinates], bombCount);
    }
    bombsAround[i] = createBombCountSymbol(bombCount, bombLocations, i);
  }
  return bombsAround;
}

function increaseBombCount(square, bombCount) {
  if (square === true) {
    bombCount++;
  }
  return bombCount;
}

function createBombCountSymbol(bombCount, bombLocations, i) {
  let bombCountSymbol = '';
  if (bombLocations[i] === true) {
    bombCountSymbol = ' ';
  } else if (bombCount === 0) {
    bombCountSymbol = '_';
  } else {
    bombCountSymbol = bombCount;
  }
  return bombCountSymbol;
}

module.exports = mineSweeper;
