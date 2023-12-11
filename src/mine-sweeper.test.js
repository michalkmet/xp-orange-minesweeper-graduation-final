const mineSweeper = require('./mine-sweeper');

describe('User Story 1: Game created', () => {
  it('UAT1.1 When game start then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created"', () => {
    expect(mineSweeper([], [])).toBe('+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created');
  });
});

describe('User Story 2: Step on the bomb', () => {
  it('UAT2.1 When player steps on the bomb [1;1] then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."', () => {
    let playerPick = [false, false, false, false, true, false, false, false, false];
    let bombLocations = [false, false, false, false, true, false, false, false, false];
    let expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.';
    expect(mineSweeper(playerPick, bombLocations)).toBe(expectedBoard);
  });
  it('UAT2.2 When player steps on the bomb [0;0] then I should see"+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."', () => {
    let playerPick = [true, false, false, false, false, false, false, false, false];
    let bombLocations = [true, false, false, false, false, false, false, false, false];
    let expectedBoard = '+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.';
    expect(mineSweeper(playerPick, bombLocations)).toBe(expectedBoard);
  });
  it('UAT2.3 When player steps on the bomb [2;0] then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|X| | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."', () => {
    let playerPick = [false, false, false, false, false, false, true, false, false];
    let bombLocations = [false, false, false, false, false, false, true, false, false];
    let expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|X| | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.';
    expect(mineSweeper(playerPick, bombLocations)).toBe(expectedBoard);
  });
});

describe('User Story 3: Reveal the number of bombs around', () => {
  it('UAT3.1 When player clears square [2;0] and there are 3 bombs around then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] 3 bombs around your square."', () => {
    let playerPick = [false, false, false, false, false, false, true, false, false];
    let bombLocations = [false, false, false, false, true, true, false, true, false];
    let expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] 3 bombs around your square.';
    expect(mineSweeper(playerPick, bombLocations)).toBe(expectedBoard);
  });
});
