# Chemistry07

Welcome to **Chemistry07**, a web-based application designed to assist users in learning chemistry through a test practice mode and a review section. The project is organized into two main parts: a test practice interface and a review interface, both utilizing a shared `questions.json` data file with MathJax support for mathematical formulas.

## Demo
Check out the live demo here: [https://mãsiêu.vn/github/chemistry07/](https://xn--msiu-goa8b.vn/github/chemistry07/)

## Features
### Test Practice Mode
- Interactive quiz with chemistry questions from 6 chapters.
- Multiple-choice options with real-time feedback.
- Timer and score tracking (if implemented).

### Review Mode
- Browse questions categorized into 6 chapters.
- Display 4 answer options per question, with the correct answer highlighted in green.
- Detailed explanations with mathematical formulas rendered via MathJax.
- Filter questions by chapter using a dropdown menu.

### General
- Responsive design for desktop and mobile devices.
- Dynamic content loading from a JSON file.

## Technologies Used
- **HTML5**: Structure for both test and review interfaces.
- **CSS3**: Styling with a dark theme and responsive layout.
- **JavaScript**: Dynamic functionality for test and review modes.
- **MathJax**: Rendering of mathematical expressions.
- **JSON**: Data storage for questions and explanations.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/lemasieu/chemistry07.git
   ```
2. **Navigate to the Project Directory**
   ```bash
   cd chemistry07
   ```
3. **Open the Project**
   - Open `index.html` for the test practice mode or `review.html` for the review mode in a web browser.
   - Ensure an internet connection is available for MathJax to load from its CDN.

## Usage
### Test Practice Mode
- Access via `index.html`.
- Answer questions and receive immediate feedback.
- (Note: Specific features like timer or score depend on `script.js` implementation.)

### Review Mode
- Access via `review.html`.
- Use the dropdown menu to select a chapter (1-6) or view all chapters.
- Each question shows its text, 4 answer options (correct one in green), and an explanation.

## File Structure
- `index.html`: Main file for the test practice interface.
- `styles.css`: CSS file for styling the test interface.
- `script.js`: JavaScript file for test mode functionality.
- `review.html`: Main file for the review interface.
- `style-rw.css`: CSS file for styling the review interface.
- `script-rw.js`: JavaScript file for review mode functionality.
- `questions.json`: JSON file containing the question data for both modes.

## Contributing
Feel free to fork this repository and submit pull requests. Suggestions and improvements are welcome!

## License
This project is open-source. See the [LICENSE](LICENSE) file for more details (if applicable).

## Contact
For questions or support, please open an issue on the [GitHub repository](https://github.com/lemasieu/chemistry07) or contact the maintainer.

---

*Last updated: August 27, 2025*