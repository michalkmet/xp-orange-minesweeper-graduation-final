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
- ⚠ TODO Refactor board creation + remove duplicate code

User Story 3: Reveal the number of bombs around
As a user, I want to see the number of bombs around when player reveals the square and appropriate message

- ✅ DONE UAT3.1 When player clears square [2;0] and there are 3 bombs around then I should see '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n[Sandbox 3x3] 3 bombs around your square.'
- 🚧 IN PROGRESS remove bugs and code smells from sonarcloud
