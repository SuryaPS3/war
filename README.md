# War Card Game 🃏

A web-based implementation of the classic card game "War" where you battle against the computer to see who has the highest cards!

## 🎮 Game Description

War is a simple card game where two players (you vs computer) draw cards simultaneously, and the player with the higher card wins the round. The player who wins the most rounds when all cards are drawn is declared the winner!

## 🚀 Features

- **Interactive Web Interface**: Clean, responsive design with visual card display
- **Real-time Scoring**: Live scoreboard tracking wins for both players
- **Automatic Deck Management**: Automatically creates and shuffles a new deck when needed
- **Visual Card Display**: Shows actual playing card images for each draw
- **Game Progress Tracking**: Displays remaining cards in the deck
- **Winner Declaration**: Announces round winners and final game winner

## 🛠️ Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling and responsive design with Google Fonts (Exo 2)
- **Vanilla JavaScript**: Game logic and API interactions
- **Deck of Cards API**: External API for card deck management and card images

## 📁 Project Structure

```
War/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── index.js           # JavaScript game logic
├── table.png          # Game table background image
└── README.md          # This documentation
```

## 🎯 How to Play

1. **Start the Game**: 
   - Open `index.html` in your web browser
   - Click "Draw" to start playing (a deck will be automatically created)
   - Or click "New Deck" to manually create a fresh deck

2. **Playing Rounds**:
   - Click "Draw" to draw two cards (one for you, one for the computer)
   - The higher card wins the round
   - Card hierarchy: 2 < 3 < 4 < 5 < 6 < 7 < 8 < 9 < 10 < J < Q < K < A
   - Tied cards result in no points for either player

3. **Winning**:
   - The game continues until all 52 cards are drawn (26 rounds)
   - The player with the most round wins is declared the final winner

## 🔧 Setup Instructions

### Local Development
1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Start playing immediately!

## 🌐 API Integration

This game uses the [Deck of Cards API](https://deckofcardsapi.com/) for:
- Creating and shuffling new decks
- Drawing cards with real card images
- Managing deck state throughout the game

## 🎨 Game Interface

- **Header**: Shows game title and remaining cards
- **Score Board**: Real-time score tracking (Computer vs You)
- **Card Display**: Visual representation of drawn cards
- **Game Controls**: "New Deck" and "Draw" buttons
- **Status Updates**: Current round winner announcements

## 🏆 Game Rules

- Each round, both players draw one card
- Higher card wins the round (Ace is highest, 2 is lowest)
- Ties award no points to either player
- Player with most round wins after 26 rounds wins the game
- Game automatically ends when deck is empty

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements such as:
- Enhanced UI/UX design
- Sound effects
- Animation improvements
- Additional game modes
- Mobile responsiveness enhancements

## 📄 License

This project is open source and available under standard web development practices.

---

**Enjoy playing War! May the highest cards be with you! 🎲**
