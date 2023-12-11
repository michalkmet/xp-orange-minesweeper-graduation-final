# Backlog

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

User Story 1: Game created
As a user, I want to see empty board and game created message

```
- ⚠ TODO UAT1.1 When game start then I should see '
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
- ⚠ TODO UAT2.1 When player steps on the bomb [1;1] then I should see '
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
- ⚠ TODO UAT2.2 When player steps on the bomb [0;0] then I should see '
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
- ⚠ TODO UAT2.3 When player steps on the bomb [2;0] then I should see '
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

- ⚠ TODO UAT3.1 When player clears square [2;0] and there are 3 bombs around then I should see '

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

- ⚠ TODO UAT3.2 When player clears square [0;0] and there is 1 bomb around then I should see '

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

- ⚠ TODO UAT3.3 When player clears square [2;0] and there are 2 bombs around then I should see '

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
