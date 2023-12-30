const mineSweeper = require('./mine-sweeper');

let board = '';
let drawSymbolArr = [];

const scenarios = {
  uat11: {
    bombLocations: [false, false, false, false, false, false, false, false, false],
    playerMove: {
      playerPickType: 'Reveal',
      playerPick: [false, false, false, false, false, false, false, false, false],
    },
    expectedBoard: '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created',
  },
  uat21: {
    bombLocations: [false, false, false, false, true, false, false, false, false],
    playerMove: {
      playerPickType: 'Reveal',
      playerPick: [false, false, false, false, true, false, false, false, false],
    },
    expectedBoard: '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.',
  },
  uat22: {
    bombLocations: [true, false, false, false, false, false, false, false, false],
    playerMove: {
      playerPickType: 'Reveal',
      playerPick: [true, false, false, false, false, false, false, false, false],
    },
    expectedBoard: '+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.',
  },
  uat23: {
    bombLocations: [false, false, false, false, false, false, true, false, false],
    playerMove: {
      playerPickType: 'Reveal',
      playerPick: [false, false, false, false, false, false, true, false, false],
    },
    expectedBoard: '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|X| | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.',
  },
  uat31: {
    bombLocations: [false, false, false, true, true, false, false, true, false],
    playerMove: {
      playerPickType: 'Reveal',
      playerPick: [false, false, false, false, false, false, true, false, false],
    },
    expectedBoard: '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] 3 bombs around your square.',
  },
  uat32: {
    bombLocations: [false, false, false, false, true, false, false, true, false],
    playerMove: {
      playerPickType: 'Reveal',
      playerPick: [true, false, false, false, false, false, false, false, false],
    },
    expectedBoard: '+-+-+-+\n|1| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] 1 bomb around your square.',
  },
};

describe('User Story 1: Game created', () => {
  it('UAT1.1 When game start then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created"', () => {
    [board, drawSymbolArr] = mineSweeper(scenarios.uat11.playerMove, scenarios.uat11.bombLocations);
    expect(board).toBe(scenarios.uat11.expectedBoard);
  });
});

describe('User Story 2: Step on the bomb', () => {
  it('UAT2.1 When player steps on the bomb [1;1] then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."', () => {
    [board, drawSymbolArr] = mineSweeper(scenarios.uat21.playerMove, scenarios.uat21.bombLocations);
    expect(board).toBe(scenarios.uat21.expectedBoard);
  });
  it('UAT2.2 When player steps on the bomb [0;0] then I should see"+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."', () => {
    [board, drawSymbolArr] = mineSweeper(scenarios.uat22.playerMove, scenarios.uat22.bombLocations);
    expect(board).toBe(scenarios.uat22.expectedBoard);
  });
  it('UAT2.3 When player steps on the bomb [2;0] then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|X| | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."', () => {
    [board, drawSymbolArr] = mineSweeper(scenarios.uat23.playerMove, scenarios.uat23.bombLocations);
    expect(board).toBe(scenarios.uat23.expectedBoard);
  });
});

describe('User Story 3: Reveal the number of bombs around', () => {
  it('UAT3.1 When player clears square [2;0] and there are 3 bombs around then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] 3 bombs around your square."', () => {
    [board, drawSymbolArr] = mineSweeper(scenarios.uat31.playerMove, scenarios.uat31.bombLocations);
    expect(board).toBe(scenarios.uat31.expectedBoard);
  });
  it('UAT3.2 When player clears square [0;0] and there is 1 bomb around then I should see "+-+-+-+\n|1| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] 1 bomb around your square."', () => {
    [board, drawSymbolArr] = mineSweeper(scenarios.uat32.playerMove, scenarios.uat32.bombLocations);
    expect(board).toBe(scenarios.uat32.expectedBoard);
  });
  it('UAT3.3 When player clears square [2;0] and there are 2 bombs around then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|2| | |\n+-+-+-+\n\n[Sandbox 3x3] 1 bomb around your square."', () => {
    let bombLocations = [false, false, false, false, true, false, false, true, false];
    let playerMove = {
      playerPickType: 'Reveal',
      playerPick: [false, false, false, false, false, false, true, false, false],
    };
    let expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|2| | |\n+-+-+-+\n\n[Sandbox 3x3] 2 bombs around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
});

describe('User Story 4: flag the square', () => {
  it('UAT4.1 When player flags the square [0;1] as a bomb location then I should see "+-+-+-+\n|*| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb."', () => {
    let bombLocations = [true, false, false, false, false, false, false, false, false];
    let playerMove = {
      playerPickType: 'Flag',
      playerPick: [true, false, false, false, false, false, false, false, false],
    };
    let expectedBoard = '+-+-+-+\n|*| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
  it('UAT4.2 When player flags 2 squares as bombs [0;1,1;1] then I should see "+-+-+-+\n|*|*| |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb."', () => {
    let bombLocations = [true, false, false, false, false, false, false, false, false];
    let playerMove = {
      playerPickType: 'Flag',
      playerPick: [true, true, false, false, false, false, false, false, false],
    };
    let expectedBoard = '+-+-+-+\n|*|*| |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
  it('UAT4.3 When player reveal the [2;0] and then flags 3 squares as bombs [1;0 + 1;1 + 2;1] then I should see "+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb."', () => {
    let bombLocations = [false, false, false, true, true, false, false, true, false];
    let playerMove = {
      playerPickType: 'Reveal',
      playerPick: [false, false, false, false, false, false, true, false, false],
    };
    let expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] 3 bombs around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
    playerMove = {
      playerPickType: 'Flag',
      playerPick: [false, false, false, true, true, false, false, true, false],
    };
    expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);
  });
});

describe('User Story 5: Victory', () => {
  it('UAT5.1 When player reveal the [2;0 + 0;0 + 0;1 + 0;2 + 2;2 + 1;2] and win the game then I should see "+-+-+-+\n|2|2|1|\n+-+-+-+\n|*|*|2|\n+-+-+-+\n|3|*|2|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!"', () => {
    let bombLocations = [false, false, false, true, true, false, false, true, false];
    let playerMove = {
      playerPickType: 'Reveal',
      playerPick: [false, false, false, false, false, false, true, false, false],
    };
    let expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] 3 bombs around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);

    playerMove = {
      playerPickType: 'Flag',
      playerPick: [false, false, false, true, false, false, false, false, false],
    };
    expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n|*| | |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);

    playerMove = {
      playerPickType: 'Flag',
      playerPick: [false, false, false, false, true, false, false, false, false],
    };
    expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);

    playerMove = {
      playerPickType: 'Flag',
      playerPick: [false, false, false, false, false, false, false, true, false],
    };
    expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);

    playerMove = {
      playerPickType: 'Reveal',
      playerPick: [true, false, false, false, false, false, false, true, false],
    };
    expectedBoard = '+-+-+-+\n|2| | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] 2 bombs around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);

    playerMove = {
      playerPickType: 'Reveal',
      playerPick: [false, true, false, false, false, false, false, true, false],
    };
    expectedBoard = '+-+-+-+\n|2|2| |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] 2 bombs around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);

    playerMove = {
      playerPickType: 'Reveal',
      playerPick: [false, false, true, false, false, false, false, true, false],
    };
    expectedBoard = '+-+-+-+\n|2|2|1|\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] 1 bomb around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);

    playerMove = {
      playerPickType: 'Reveal',
      playerPick: [false, false, false, false, false, true, false, false, false],
    };
    expectedBoard = '+-+-+-+\n|2|2|1|\n+-+-+-+\n|*|*|2|\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] 2 bombs around your square.';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);

    playerMove = {
      playerPickType: 'Reveal',
      playerPick: [false, false, false, false, false, false, false, false, true],
    };
    expectedBoard = '+-+-+-+\n|2|2|1|\n+-+-+-+\n|*|*|2|\n+-+-+-+\n|3|*|2|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations, drawSymbolArr);
    expect(board).toBe(expectedBoard);
  });
});

describe('User Story 6: Automatic square opening', () => {
  it('UAT6.1 When player reveal the [0;0] and bomb is at [0;2] then I should see "+-+-+-+\n|_|1| |\n+-+-+-+\n|_|1|1|\n+-+-+-+\n|_|_|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!"', () => {
    let bombLocations = [false, false, true, false, false, false, false, false, false];
    let playerMove = {
      playerPickType: 'Reveal',
      playerPick: [true, false, false, false, false, false, false, false, false],
    };
    let expectedBoard = '+-+-+-+\n|_|1| |\n+-+-+-+\n|_|1|1|\n+-+-+-+\n|_|_|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
  it('UAT6.2 When player reveal the [0;0] and bomb are at [0;2,2,0] then I should see "+-+-+-+\n|_|1| |\n+-+-+-+\n|_|1|1|\n+-+-+-+\n|_|_|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!"', () => {
    let bombLocations = [false, false, true, false, false, false, true, false, false];
    let playerMove = {
      playerPickType: 'Reveal',
      playerPick: [true, false, false, false, false, false, false, false, false],
    };
    let expectedBoard = '+-+-+-+\n|_|1| |\n+-+-+-+\n|1|2|1|\n+-+-+-+\n| |1|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
  it('UAT6.3 When player reveal the [2;2] and bomb is at [2,0] then I should see "+-+-+-+\n|_|_|_|\n+-+-+-+\n|1|1|_|\n+-+-+-+\n| |1|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!"', () => {
    let bombLocations = [false, false, false, false, false, false, true, false, false];
    let playerMove = {
      playerPickType: 'Reveal',
      playerPick: [false, false, false, false, false, false, false, false, true],
    };
    let expectedBoard = '+-+-+-+\n|_|_|_|\n+-+-+-+\n|1|1|_|\n+-+-+-+\n| |1|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
  it('UAT6.4 When player reveal the [2;2] and bombs are at [0;1,0;2] then I should see "+-+-+-+\n| |2| |\n+-+-+-+\n|1|2|1|\n+-+-+-+\n|_|_|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!"', () => {
    let bombLocations = [true, false, true, false, false, false, false, false, false];
    let playerMove = {
      playerPickType: 'Reveal',
      playerPick: [false, false, false, false, false, false, false, false, true],
    };
    let expectedBoard = '+-+-+-+\n| |2| |\n+-+-+-+\n|1|2|1|\n+-+-+-+\n|_|_|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!';
    [board, drawSymbolArr] = mineSweeper(playerMove, bombLocations);
    expect(board).toBe(expectedBoard);
  });
});
