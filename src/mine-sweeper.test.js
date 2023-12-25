const mineSweeper = require('./mine-sweeper');

describe('User Story 1: Game created', () => {
  it('UAT1.1 When game start then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created"', () => {
    let bombLocations = [false, false, false, false, false, false, false, false, false];
    let playerPick = [false, false, false, false, false, false, false, false, false];
    let playerPickType = 'Reveal';
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    expect(mineSweeper(playerMove, bombLocations)).toBe('+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created');
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
    expect(mineSweeper(playerMove, bombLocations)).toBe(expectedBoard);
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
    expect(mineSweeper(playerMove, bombLocations)).toBe(expectedBoard);
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
    expect(mineSweeper(playerMove, bombLocations)).toBe(expectedBoard);
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
    expect(mineSweeper(playerMove, bombLocations)).toBe(expectedBoard);
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
    expect(mineSweeper(playerMove, bombLocations)).toBe(expectedBoard);
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
    expect(mineSweeper(playerMove, bombLocations)).toBe(expectedBoard);
  });
});

describe('User Story 4: flag the square', () => {
  it('UAT4.1 When player flags the square [0;1] as a bomb location then I should see "+-+-+-+\n|*| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb."', () => {
    let playerPickType = 'flag';
    let playerPick = [true, false, false, false, false, false, false, false, false];
    let bombLocations = [true, false, false, false, false, false, false, false, false];
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n|*| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.';
    expect(mineSweeper(playerMove, bombLocations)).toBe(expectedBoard);
  });
  it('UAT4.2 When player flags 2 squares as bombs [0;1,1;1] then I should see "+-+-+-+\n|*|*| |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb."', () => {
    let playerPickType = 'flag';
    let playerPick = [true, true, false, false, false, false, false, false, false];
    let bombLocations = [true, false, false, false, false, false, false, false, false];
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n|*|*| |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.';
    expect(mineSweeper(playerMove, bombLocations)).toBe(expectedBoard);
  });
  it('UAT4.3 When player reveal the [2;0] and then flags 3 squares as bombs [1;0 + 1;1 + 2;1] then I should see "+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb."', () => {
    let playerPickType = 'flag';
    let playerPick = [false, false, false, false, false, false, true, false, false];
    let bombLocations = [false, false, false, true, true, false, false, true, false];
    let playerMove = {
      playerPickType: playerPickType,
      playerPick: playerPick,
    };
    let expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.';
    expect(mineSweeper(playerMove, bombLocations)).toBe(expectedBoard);
  });
});
