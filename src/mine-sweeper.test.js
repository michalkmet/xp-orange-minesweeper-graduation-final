const mineSweeper = require('./mine-sweeper');

describe('User Story 1: Game created', () => {
  it('UAT1.1 When game start then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created"', () => {
    expect(mineSweeper([])).toBe('+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created');
  });
});

describe('User Story 2: Step on the bomb', () => {
  it('UAT2.1 When player steps on the bomb [1;1] then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."', () => {
    let playerPick = [false, false, false, false, true, false, false, false, false];
    let expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.';
    expect(mineSweeper(playerPick)).toBe(expectedBoard);
  });
  it('UAT2.2 When player steps on the bomb [0;0] then I should see"+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."', () => {
    let playerPick = [true, false, false, false, false, false, false, false, false];
    let bombLocations = [true, false, false, false, false, false, false, false, false];
    let expectedBoard = '+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.';
    expect(mineSweeper(playerPick, bombLocations)).toBe(expectedBoard);
  });
});
