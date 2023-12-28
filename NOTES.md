# Notes

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:

- ✅ DONE Initial refactor - file names, description, function name, backlog.md
- ✅ DONE Examples
- ✅ DONE User stories + UATs

User Story 1: Game created
As a user, I want to see empty board and game created message

- 🚧 IN PROGRESS UAT1.1 When game start then I should see '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created'

Pomodoro 2:

- ⚠ TODO Setup Sonarcloud
- ✅ DONE UAT1.1 When game start then I should see '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created'

User Story 2: Step on the bomb
As a user, I want to see when player steps on the bomb and game end message

- ✅ DONE UAT2.1 When player steps on the bomb [1;1] then I should see '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.'

- ✅ DONE UAT2.2 When player steps on the bomb [0;0] then I should see '+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.'

- ✅ DONE UAT2.3 When player steps on the bomb [2;0] then I should see '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|X| | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.'

- 🚧 IN PROGRESS Refactor duplicate code + resolve complexity 5

Pomodoro 3:

- ⚠ TODO Setup Sonarcloud
- ✅ DONE Refactor duplicate code + resolve complexity 5
- ✅ DONE more UATs

Pomodoro 4:

- ✅ DONE Setup Sonarcloud

User Story 3: Reveal the number of bombs around
As a user, I want to see the number of bombs around when player reveals the square and appropriate message

- ✅ DONE UAT3.1 When player clears square [2;0] and there are 3 bombs around then I should see '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] 3 bombs around your square.'
- ✅ DONE remove bugs and code smells from sonarcloud

- ✅ DONE UAT3.2 When player clears square [0;0] and there is 1 bomb around then I should see '+-+-+-+\n|1| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] 1 bomb around your square.'

- ⚠ TODO Refactor createBoardBody function - high complexity & duplicate code
- ⚠ TODO Refactor createBoardMessage function - high complexity & duplicate code
- ⚠ TODO Add more stories and UATs

Pomodoro 5:

- 🚧 IN PROGRESS Refactor createBoardBody function - high complexity & duplicate code

Pomodoro 6:

- 🚧 IN PROGRESS Refactor createBoardBody function - high complexity & duplicate code
- ⚠ TODO Refactor createBoardMessage function - high complexity & duplicate code
- ⚠ TODO Add more stories and UATs
- ✅ DONE UAT3.3 When player clears square [2;0] and there are 2 bombs around then I should see '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|2| | |\n+-+-+-+\n\n[Sandbox 3x3] 1 bomb around your square.'

Pomodoro 7:

- 🚧 IN PROGRESS Refactor createBoardBody function - high complexity & duplicate code
- ⚠ TODO Add more stories and UATs
- 🚧 IN PROGRESS Refactor checkForBombsAround
- ✅ DONE Removed createBoardMessage

Pomodoro 8:

- ✅ DONE Refactor createBoardBody function - high complexity & duplicate code
- ⚠ TODO Add more stories and UATs
- 🚧 IN PROGRESS Refactor checkForBombsAround
- ✅ DONE Refactor createDrawSymbol
- ✅ DONE new User story + UATs

Pomodoro 9:

- ⚠ TODO Add more stories and UATs
- ✅ DONE UAT4.1 When player flags the square [0;1] as a bomb location then I should see '+-+-+-+\n|\*| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.'
- ✅ DONE UAT4.2 When player flags 2 squares as bombs [0;1,1;1] then I should see '+-+-+-+\n|_|_| |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.'
- 🚧 IN PROGRESS UAT4.3 When player reveal the [2;0] and then flags 3 squares as bombs [1;0 + 1;1 + 2;1] then I should see '+-+-+-+\n| | | |\n+-+-+-+\n|_|_| |\n+-+-+-+\n|3|\*| |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.'
- 🚧 IN PROGRESS update tests

Pomodoro 10:

- ⚠ TODO Add more stories and UATs
- 🚧 IN PROGRESS UAT4.3 When player reveal the [2;0] and then flags 3 squares as bombs [1;0 + 1;1 + 2;1] then I should see '+-+-+-+\n| | | |\n+-+-+-+\n|_|_| |\n+-+-+-+\n|3|\*| |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb.'
- ✅ DONE update tests
- 🚧 IN PROGRESS find the way how to save board
- ⚠ TODO use previousBoard in createBoardBody function

Pomodoro 11:

- ⚠ TODO Add more stories and UATs
- 🚧 IN PROGRESS find the way how to save board
- ✅ DONE use previousBoard in createBoardBody function
- ✅ DONE Refactor all tests
- 🚧 IN PROGRESS Refactor createBoardBody because of complexity 6
- ✅ DONE new user story
- 🚧 IN PROGRESS UAT5.1 UAT5.1 When player reveal the [2;0 + 0;0 + 0;1 + 0;2 + 2;2 + 1;2] and win the game then I should see '+-+-+-+\n|2|2|1|\n+-+-+-+\n|_|_|2|\n+-+-+-+\n|3|\*|2|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!'

Pomodoro 12:

- ✅ DONE UAT5.1 UAT5.1 When player reveal the [2;0 + 0;0 + 0;1 + 0;2 + 2;2 + 1;2] and win the game then I should see '+-+-+-+\n|2|2|1|\n+-+-+-+\n|_|_|2|\n+-+-+-+\n|3|\*|2|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!'
- ⚠ TODO Refactor createBoardBody - complexity
- ⚠ TODO Refactor createBoardMessage - complexity
- ⚠ TODO Refactor createDrawSymbol - complexity
- ⚠ TODO Refactor checkForBombsAround - complexity

Pomodoro 13:

- ✅ DONE Add more stories and UATs
- 🚧 IN PROGRESS UAT6.1 When player reveal the [0;0] and bomb is at [0;2] then I should see
  '+-+-+-+\n|_|1| |\n+-+-+-+\n|_|1|1|\n+-+-+-+\n|_|_|\_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!'

Pomodoro 14:

- 🚧 IN PROGRESS UAT6.1 When player reveal the [0;0] and bomb is at [0;2] then I should see
  '+-+-+-+\n|_|1| |\n+-+-+-+\n|_|1|1|\n+-+-+-+\n|_|_|\_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!'

Pomodoro 14:

- ✅ DONE UAT6.1 When player reveal the [0;0] and bomb is at [0;2] then I should see
  '+-+-+-+\n|_|1| |\n+-+-+-+\n|_|1|1|\n+-+-+-+\n|_|_|\_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!'
- ✅ DONE UAT6.2 When player reveal the [0;0] and bomb are at [0;2,2,0] then I should see '+-+-+-+\n|_|1| |\n+-+-+-+\n|1|2|1|\n+-+-+-+\n| |1|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!'
