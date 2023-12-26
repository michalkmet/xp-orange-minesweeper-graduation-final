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
  let drawSymbol = ' ';
  let emptyBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  let drawSymbolArr = previousBoard.length === 0 ? emptyBoard : previousBoard;
  console.log('drawSymbolArr1: ', drawSymbolArr);
  for (let i = 0; i < 9; i++) {
    console.log(drawSymbolArr[i]);
    if (drawSymbolArr[i] === ' ') {
      drawSymbol = createDrawSymbol(i, playerPick[i], bombLocations[i], bombsAround, playerPickType);
      if (drawSymbol != ' ') {
        boardMessage = createBoardMessage(drawSymbol, bombsAround[i]);
      }
      drawSymbolArr[i] = drawSymbol;
    }
  }
  console.log('drawSymbolArr: ', drawSymbolArr);
  return drawBoard(drawSymbolArr, boardMessage);
}

function createBoardMessage(drawSymbol, bombsAround) {
  let boardMessage = '';
  if (drawSymbol === 'X') {
    boardMessage = '[Sandbox 3x3] BOOM! – Game Over.';
  } else if (drawSymbol === '*') {
    boardMessage = '[Sandbox 3x3] Square flagged as bomb.';
  } else {
    let bombsStr = bombsAround > 1 ? drawSymbol + ' bombs' : drawSymbol + ' bomb';
    boardMessage = '[Sandbox 3x3] ' + bombsStr + ' around your square.';
  }
  console.log('boardMessage from createBoardMessage: ', boardMessage);
  return boardMessage;
}

function createDrawSymbol(i, playerPick, bombLocation, bombsAround, playerPickType) {
  let drawSymbol = ' ';
  if (playerPick === true) {
    if (playerPickType === 'Flag') {
      drawSymbol = '*';
    } else {
      drawSymbol = bombLocation === true ? 'X' : '' + bombsAround[i];
    }
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
  boardBody += boardMessage;
  console.log('boardMessage: ', boardMessage);
  return [boardBody, drawSymbolArr];
}

function checkForBombsAround(bombLocations) {
  let bombsAround = [0, 0, 0, 0, 0, 0, 0, 0, 0];
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
  for (let i = 0; i < 9; i++) {
    let checkForCoordinates = coordinatesForBombsCheck[i];
    let bombCount = 0;
    for (let j = 0; j < checkForCoordinates.length; j++) {
      if (bombLocations[checkForCoordinates[j]] === true) {
        bombCount++;
      }
    }
    bombsAround[i] = bombCount;
  }
  return bombsAround;
}

module.exports = mineSweeper;
