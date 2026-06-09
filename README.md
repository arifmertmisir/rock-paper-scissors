JS Project

# Rock Paper Scissors

A console-based Rock Paper Scissors game built with vanilla JavaScript as part of [The Odin Project](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors) Foundations curriculum.

## 📋 Assignment Requirements

### Step 1: Project Structure

- [x] Created a new Git repository
- [x] Created a blank HTML document with an external JavaScript file linked via script tag

### Step 2: Computer Choice Logic

- [x] Created a `getComputerChoice` function that randomly returns `"rock"`, `"paper"` or `"scissors"`

### Step 3: Human Choice Logic

- [x] Created a `getHumanChoice` function that returns the user's input via `prompt`

### Step 4: Score Variables

- [x] Declared `humanScore` and `computerScore` in the global scope, initialized to `0`

### Step 5: Single Round Logic

- [x] Created a `playRound(humanChoice, computerChoice)` function
- [x] `humanChoice` is case-insensitive (e.g. "ROCK", "RocK" all work)
- [x] Logs the round result (e.g. `"You lose! Paper beats Rock"`)
- [x] Increments the correct score variable based on the round winner

### Step 6: Full Game Logic

- [x] Created a `playGame` function
- [x] Plays 5 rounds by calling `playRound` 5 times using a loop
- [x] Declares the overall winner at the end

## 🎮 How to Play

1. Open `index.html` in your browser
2. Open the browser console (F12 or Cmd+Option+I)
3. Enter your choice when prompted: `rock`, `paper` or `scissors`
4. Play 5 rounds — the player with the most wins takes the game!

## 🖥️ Console Output

![Game Output](./assets/preview.png)

## 🛠️ Built With

- HTML
- JavaScript (Vanilla)
