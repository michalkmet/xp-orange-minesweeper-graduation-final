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
  // console.log('playerMove: ', playerMove);
  let playerPick = playerMove.playerPick;
  // console.log('playerPick: ', playerPick);
  let playerPickType = playerMove.playerPickType;
  // console.log('playerPickType: ', playerPickType);
  console.log('previousBoard: ', previousBoard);
  [board, drawSymbolArr] = createWholeBoard(playerPick, bombLocations, playerPickType, previousBoard);
  console.log(board);
  return [board, drawSymbolArr];
}

function createWholeBoard(playerPick, bombLocations, playerPickType, previousBoard) {
  let board = '';
  let boardMessage = '';
  let drawSymbolArr = [];
  let bombsAround = checkForBombsAround(bombLocations);
  // console.log('bombsAround: ', bombsAround);

  if (playerPick.includes(true) === false) {
    boardMessage = '[Sandbox 3x3] Game created';
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n' + boardMessage;
  } else {
    [board, drawSymbolArr] = createBoardBody(playerPickType, playerPick, bombLocations, bombsAround, previousBoard);
  }
  return [board, drawSymbolArr];
}

function createBoardBody(playerPickType, playerPick, bombLocations, bombsAround, previousBoard) {
  let boardMessage = '';
  let emptyBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  let boardMessageArr = [];
  let autoReveal = false;
  let drawSymbolArr = previousBoard.length === 0 ? emptyBoard : previousBoard;
  // console.log('drawSymbolArr1: ', drawSymbolArr);
  for (let i = 0; i < 9; i++) {
    [drawSymbolArr, boardMessage, autoReveal] = drawSymbolAndBoardMessage(i, drawSymbolArr, playerPickType, playerPick, bombLocations, bombsAround, autoReveal);
    // console.log('drawSymbolArr: ', drawSymbolArr);
    console.log('boardMessage: ', boardMessage);
    if (boardMessage != '') {
      boardMessageArr.push(boardMessage);
    }
  }
  return drawBoard(drawSymbolArr, boardMessageArr[0]);
}

function drawSymbolAndBoardMessage(i, drawSymbolArr, playerPickType, playerPick, bombLocations, bombsAround, autoReveal) {
  let drawSymbol = ' ';
  let boardMessage = '';
  // console.log('i: ', i);
  // console.log('check If drawSymbolArr[i] is empty: ', drawSymbolArr[i]);
  if (drawSymbolArr[i] === ' ') {
    drawSymbol = createDrawSymbol(i, playerPick[i], bombLocations[i], bombsAround, playerPickType, autoReveal);
    // console.log('createDrawSymbol drawSymbol: ', drawSymbol);
    if (drawSymbol === '_') {
      // TODO - we need to check neighbors
      drawSymbolArr = revealNeighbors(i, drawSymbolArr, bombsAround);
      autoReveal = true;
      // console.log('drawSymbolArr!: ', drawSymbolArr);
    }
    if (drawSymbol != ' ' && drawSymbol != '_') {
      boardMessage = createBoardMessage(drawSymbol, bombsAround[i]);
    }
    drawSymbolArr[i] = drawSymbol;
  }
  return [drawSymbolArr, boardMessage, autoReveal];
}

function revealNeighbors(i, drawSymbolArr, bombsAround) {
  // TODO we need to find the way how to do it recursively
  console.log('revealNeighbors');
  // console.log('coordinates: ', coordinatesForBombsCheck);
  // console.log('bombsAround: ', bombsAround);
  // console.log('drawSymbolArr: ', drawSymbolArr);
  let checkForCoordinates = coordinatesForBombsCheck[i];
  // console.log('checkForCoordinates: ', checkForCoordinates);
  for (let j = 0; j < checkForCoordinates.length; j++) {
    // console.log('checkForCoordinates[j]: ', checkForCoordinates[j]);
    // console.log('bombsAround[checkForCoordinates[j]]: ', bombsAround[checkForCoordinates[j]]);

    drawSymbolArr[checkForCoordinates[j]] = bombsAround[checkForCoordinates[j]];
    // console.log('drawSymbolArr[checkForCoordinates[j]]: ', drawSymbolArr[checkForCoordinates[j]]);
  }
  console.log('drawSymbolArr from revealNeighbors: ', drawSymbolArr);
  return drawSymbolArr;
}

function createBoardMessage(drawSymbol, bombsAround) {
  console.log('createBoardMessage');
  console.log('drawSymbol: ', drawSymbol);
  let boardMessage = '';
  if (drawSymbol === 'X') {
    boardMessage = '[Sandbox 3x3] BOOM! – Game Over.';
  } else if (drawSymbol === '*') {
    boardMessage = '[Sandbox 3x3] Square flagged as bomb.';
  } else {
    let bombsStr = bombsAround > 1 ? drawSymbol + ' bombs' : drawSymbol + ' bomb';
    boardMessage = '[Sandbox 3x3] ' + bombsStr + ' around your square.';
  }
  return boardMessage;
}

function createDrawSymbol(i, playerPick, bombLocation, bombsAround, playerPickType, autoReveal) {
  console.log('createDrawSymbol');
  let drawSymbol = ' ';
  if (playerPick === true) {
    if (playerPickType === 'Flag') {
      drawSymbol = '*';
    } else {
      drawSymbol = bombLocation === true ? 'X' : '' + bombsAround[i];
    }
  } else if (autoReveal === true) {
    drawSymbol = '' + bombsAround[i];
  }
  return drawSymbol;
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

  if (!drawSymbolArr.includes(' ')) {
    boardMessage = '[Sandbox 3x3] the land is cleared! GOOD JOB!';
  }
  boardBody += boardMessage;
  return [boardBody, drawSymbolArr];
}

function checkForBombsAround(bombLocations) {
  let bombsAround = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let bombCountSymbol = '';
  for (let i = 0; i < 9; i++) {
    let checkForCoordinates = coordinatesForBombsCheck[i];
    let bombCount = 0;
    for (let j = 0; j < checkForCoordinates.length; j++) {
      if (bombLocations[checkForCoordinates[j]] === true) {
        bombCount++;
      }
    }

    if (bombLocations[i] === true) {
      bombCountSymbol = ' ';
    } else {
      if (bombCount === 0) {
        bombCountSymbol = '_';
      } else {
        bombCountSymbol = bombCount;
      }
    }
    bombsAround[i] = bombCountSymbol;

    // console.log('bombsAround[i]: ', bombsAround[i]);
  }
  return bombsAround;
}

module.exports = mineSweeper;
