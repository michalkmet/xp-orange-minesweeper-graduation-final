# Backlog

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

User Story 1: Game created
As a user, I want to see empty board and game created message

```
- ✅ DONE UAT1.1 When game start then I should see '
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+

[Sandbox 3x3] Game created'
```

User Story 2: Step on the bomb
As a user, I want to see when player steps on the bomb and game end message

```
- ✅ DONE UAT2.1 When player steps on the bomb [1;1] then I should see '
+-+-+-+
| | | |
+-+-+-+
| |X| |
+-+-+-+
| | | |
+-+-+-+

[Sandbox 3x3] BOOM! – Game Over.
```

```
- ✅ DONE UAT2.2 When player steps on the bomb [0;0] then I should see '
+-+-+-+
|X| | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+

[Sandbox 3x3] BOOM! – Game Over.
```

```
- ✅ DONE UAT2.3 When player steps on the bomb [2;0] then I should see '
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
|X| | |
+-+-+-+

[Sandbox 3x3] BOOM! – Game Over.
```

User Story 3: Reveal the number of bombs around
As a user, I want to see the number of bombs around when player reveals the square and appropriate message

- ✅ DONE UAT3.1 When player clears square [2;0] and there are 3 bombs around then I should see '

```
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
|3| | |
+-+-+-+

[Sandbox 3x3] 3 bombs around your square.
```

- ✅ DONE UAT3.2 When player clears square [0;0] and there is 1 bomb around then I should see '

```
+-+-+-+
|1| | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+

[Sandbox 3x3] 1 bomb around your square.
```

- ✅ DONE UAT3.3 When player clears square [2;0] and there are 2 bombs around then I should see '

```
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
|2| | |
+-+-+-+

[Sandbox 3x3] 2 bombs around your square.
```

User Story 4: flag the square
As a user, I want to see the \* on the square when player decided to flag square as a bomb location and appropriate message

- ✅ DONE UAT4.1 When player flags the square [0;1] as a bomb location then I should see '

```
+-+-+-+
|*| | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+

[Sandbox 3x3] Square flagged as bomb.
```

- ✅ DONE UAT4.2 When player flags 2 squares as bombs [0;1,1;1] then I should see '

```
+-+-+-+
|*|*| |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+

[Sandbox 3x3] Square flagged as bomb.
```

- ✅ DONE UAT4.3 When player reveal the [2;0] and then flags 3 squares as bombs [1;0 + 1;1 + 2;1] then I should see '

```
+-+-+-+
| | | |
+-+-+-+
|*|*| |
+-+-+-+
|3|*| |
+-+-+-+

[Sandbox 3x3] Square flagged as bomb.
```

User Story 5: Victory
As a user, I want to see the victory message and cleared board when player win

- ✅ DONE UAT5.1 When player reveal the [2;0 + 0;0 + 0;1 + 0;2 + 2;2 + 1;2] and win the game then I should see '

```
+-+-+-+
|2|2|1|
+-+-+-+
|*|*|2|
+-+-+-+
|3|*|2|
+-+-+-+

[Sandbox 3x3] the land is cleared! GOOD JOB!
```

User Story 6: Automatic square opening
As a user, I want to see functionality - when player clear a square with 0 neighboring bombs, all its neighbors will automatically open

- ✅ DONE UAT6.1 When player reveal the [0;0] and bomb is at [0;2] then I should see '

```
+-+-+-+
|_|1| |
+-+-+-+
|_|1|1|
+-+-+-+
|_|_|_|
+-+-+-+

[Sandbox 3x3] the land is cleared! GOOD JOB!
```

- ✅ DONE UAT6.2 When player reveal the [0;0] and bomb are at [0;2,2,0] then I should see '

```
+-+-+-+
|_|1| |
+-+-+-+
|1|2|1|
+-+-+-+
| |1|_|
+-+-+-+

[Sandbox 3x3] the land is cleared! GOOD JOB!
```

- ✅ DONE UAT6.3 When player reveal the [2;2] and bomb is at [2;0] then I should see '

```
+-+-+-+
|_|_|_|
+-+-+-+
|1|1|_|
+-+-+-+
| |1|_|
+-+-+-+

[Sandbox 3x3] the land is cleared! GOOD JOB!
```

- ✅ DONE UAT6.4 When player reveal the [2;2] and bombs are at [0;1,0;2] then I should see '

```
+-+-+-+
| |2| |
+-+-+-+
|1|2|1|
+-+-+-+
|_|_|_|
+-+-+-+

[Sandbox 3x3] the land is cleared! GOOD JOB!
```
