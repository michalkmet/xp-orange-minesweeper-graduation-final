const mineSweeper = require('./mine-sweeper');

let board = '';
let drawSymbolArr = [];

describe('User Story 1: Game created', () => {
  it('UAT1.1 When game start then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created"', () => {
    let bombLocations = [false, false, false, false, false, false, false, false, false];
    let playerPick = [false, false, false, false, false, false, false, false, false];
    let playerPickType = 'Reveal';
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
});

describe('User Story 2: Step on the bomb', () => {
  it('UAT2.1 When player steps on the bomb [1;1] then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."', () => {
    let playerPick = [false, false, false, false, true, false, false, false, false];
    let bombLocations = [false, false, false, false, true, false, false, false, false];
    let playerPickType = 'Reveal';
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
  it('UAT2.2 When player steps on the bomb [0;0] then I should see"+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."', () => {
    let playerPick = [true, false, false, false, false, false, false, false, false];
    let bombLocations = [true, false, false, false, false, false, false, false, false];
    let playerPickType = 'Reveal';
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
  it('UAT2.3 When player steps on the bomb [2;0] then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|X| | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."', () => {
    let playerPick = [false, false, false, false, false, false, true, false, false];
    let bombLocations = [false, false, false, false, false, false, true, false, false];
    let playerPickType = 'Reveal';
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|X| | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
});

describe('User Story 3: Reveal the number of bombs around', () => {
  it('UAT3.1 When player clears square [2;0] and there are 3 bombs around then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] 3 bombs around your square."', () => {
    let playerPick = [false, false, false, false, false, false, true, false, false];
    let bombLocations = [false, false, false, true, true, false, false, true, false];
    let playerPickType = 'Reveal';
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] 3 bombs around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
  it('UAT3.2 When player clears square [0;0] and there is 1 bomb around then I should see "+-+-+-+\n|1| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] 1 bomb around your square."', () => {
    let playerPick = [true, false, false, false, false, false, false, false, false];
    let bombLocations = [false, true, false, false, false, false, false, false, false];
    let playerPickType = 'Reveal';
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n|1| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] 1 bomb around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
  it('UAT3.3 When player clears square [2;0] and there are 2 bombs around then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|2| | |\n+-+-+-+\n\n[Sandbox 3x3] 1 bomb around your square."', () => {
    let playerPick = [false, false, false, false, false, false, true, false, false];
    let bombLocations = [false, false, false, false, true, false, false, true, false];
    let playerPickType = 'Reveal';
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|2| | |\n+-+-+-+\n\n[Sandbox 3x3] 2 bombs around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
});

describe('User Story 4: flag the square', () => {
  it('UAT4.1 When player flags the square [0;1] as a bomb location then I should see "+-+-+-+\n|*| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb."', () => {
    let playerPickType = 'Flag';
    let playerPick = [true, false, false, false, false, false, false, false, false];
    let bombLocations = [true, false, false, false, false, false, false, false, false];
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n|*| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
  it('UAT4.2 When player flags 2 squares as bombs [0;1,1;1] then I should see "+-+-+-+\n|*|*| |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb."', () => {
    let playerPickType = 'Flag';
    let playerPick = [true, true, false, false, false, false, false, false, false];
    let bombLocations = [true, false, false, false, false, false, false, false, false];
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n|*|*| |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
  it('UAT4.3 When player reveal the [2;0] and then flags 3 squares as bombs [1;0 + 1;1 + 2;1] then I should see "+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb."', () => {
    let playerPickType = 'Reveal';
    let playerPick = [false, false, false, false, false, false, true, false, false];
    let bombLocations = [false, false, false, true, true, false, false, true, false];
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] 3 bombs around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);

    playerPick = [false, false, false, true, true, false, false, true, false];
    playerPickType = 'Flag';
    playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);
  });
});

describe('User Story 5: Victory', () => {
  it('UAT5.1 When player reveal the [2;0 + 0;0 + 0;1 + 0;2 + 2;2 + 1;2] and win the game then I should see "+-+-+-+\n|2|2|1|\n+-+-+-+\n|*|*|2|\n+-+-+-+\n|3|*|2|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!"', () => {
    let playerPickType = 'Reveal';
    let playerPick = [false, false, false, false, false, false, true, false, false];
    let bombLocations = [false, false, false, true, true, false, false, true, false];
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] 3 bombs around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);

    playerPick = [false, false, false, true, false, false, false, false, false];
    playerPickType = 'Flag';
    playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n|*| | |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);

    playerPick = [false, false, false, false, true, false, false, false, false];
    playerPickType = 'Flag';
    playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);

    playerPick = [false, false, false, false, false, false, false, true, false];
    playerPickType = 'Flag';
    playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);

    playerPick = [true, false, false, false, false, false, false, true, false];
    playerPickType = 'Reveal';
    playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    expectedBoard = '+-+-+-+\n|2| | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] 2 bombs around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);

    playerPick = [false, true, false, false, false, false, false, true, false];
    playerPickType = 'Reveal';
    playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    expectedBoard = '+-+-+-+\n|2|2| |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] 2 bombs around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);

    playerPick = [false, false, true, false, false, false, false, true, false];
    playerPickType = 'Reveal';
    playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    expectedBoard = '+-+-+-+\n|2|2|1|\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] 1 bomb around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);

    playerPick = [false, false, false, false, false, true, false, false, false];
    playerPickType = 'Reveal';
    playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    expectedBoard = '+-+-+-+\n|2|2|1|\n+-+-+-+\n|*|*|2|\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] 2 bombs around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);

    playerPick = [false, false, false, false, false, false, false, false, true];
    playerPickType = 'Reveal';
    playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    expectedBoard = '+-+-+-+\n|2|2|1|\n+-+-+-+\n|*|*|2|\n+-+-+-+\n|3|*|2|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);
  });
});

describe('User Story 6: Automatic square opening', () => {
  it('UAT6.1 When player reveal the [0;0] and bomb is at [0;2] then I should see "+-+-+-+\n|_|1| |\n+-+-+-+\n|_|1|1|\n+-+-+-+\n|_|_|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!"', () => {
    let playerPickType = 'Reveal';
    let playerPick = [true, false, false, false, false, false, false, false, false];
    let bombLocations = [false, false, true, false, false, false, false, false, false];
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n|_|1| |\n+-+-+-+\n|_|1|1|\n+-+-+-+\n|_|_|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
  it('UAT6.2 When player reveal the [0;0] and bomb are at [0;2,2,0] then I should see "+-+-+-+\n|_|1| |\n+-+-+-+\n|_|1|1|\n+-+-+-+\n|_|_|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!"', () => {
    let playerPickType = 'Reveal';
    let playerPick = [true, false, false, false, false, false, false, false, false];
    let bombLocations = [false, false, true, false, false, false, true, false, false];
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n|_|1| |\n+-+-+-+\n|1|2|1|\n+-+-+-+\n| |1|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
  it('UAT6.3 When player reveal the [2;2] and bomb is at [2,0] then I should see "+-+-+-+\n|_|_|_|\n+-+-+-+\n|1|1|_|\n+-+-+-+\n| |1|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!"', () => {
    let playerPickType = 'Reveal';
    let playerPick = [false, false, false, false, false, false, false, false, true];
    let bombLocations = [false, false, false, false, false, false, true, false, false];
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n|_|_|_|\n+-+-+-+\n|1|1|_|\n+-+-+-+\n| |1|_|\n+-+-+-+\n\nSandbox 3x3] the land is cleared! GOOD JOB!';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
});
