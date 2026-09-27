# Chemistry07

A web-based tool for practicing and reviewing chemistry questions across 6 chapters, featuring interactive tests and detailed explanations with MathJax support.

## 🚀 Live Demo

Check out the live demo: [https://www.sieu.io.vn/github/chemistry07](https://www.sieu.io.vn/github/chemistry07)

## ✨ Features

### Test Practice Mode
- **Interactive Quiz** – Practice chemistry questions from 6 chapters
- **Multiple-Choice Options** – Select from 4 answer choices per question
- **Real-Time Feedback** – See immediately whether your answer is correct
- **Timer & Score Tracking** – (If implemented in `script.js`)

### Review Mode
- **Browse Questions by Chapter** – Questions are categorized into 6 chapters for easy review
- **4 Answer Options** – Each question displays 4 options with the correct answer highlighted in green
- **Detailed Explanations** – Each question includes an explanation with mathematical formulas rendered via MathJax
- **Chapter Filter** – Use the dropdown menu to select a chapter (1–6) or view all chapters

### General
- **Responsive Design** – Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Content** – Questions are loaded dynamically from a JSON file
- **Dark Theme** – Clean, modern dark interface for comfortable use

## 🛠️ Technologies Used

- **HTML5** – Structure for both test and review interfaces
- **CSS3** – Styling with a dark theme and responsive layout
- **JavaScript (Vanilla)** – Dynamic functionality for test and review modes
- **MathJax** – Rendering of mathematical expressions
- **JSON** – Data storage for questions and explanations

## 📁 Project Structure

```
chemistry07/
├── index.html       # Main file for the test practice interface
├── styles.css       # CSS file for styling the test interface
├── script.js        # JavaScript file for test mode functionality
├── review.html      # Main file for the review interface
├── style-rw.css     # CSS file for styling the review interface
├── script-rw.js     # JavaScript file for review mode functionality
├── questions.json   # JSON file containing the question data for both modes
└── README.md        # Project documentation
```

## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/lemasieu/chemistry07.git
   ```
2. **Navigate to the project folder**
   ```bash
   cd chemistry07
   ```
   
3. **Run the application with a local server**

⚠️ Important: This project loads data from a JSON file, so you need to use a local development server instead of opening `index.html` directly in your browser to avoid CORS issues.

- **Using VS Code** – Install the "Live Server" extension, right-click on `index.html`, and select "Open with Live Server"
- **Using Python** – Run `python -m http.server` (Python 3) or `python -m SimpleHTTPServer` (Python 2) and open `http://localhost:8000`
- **Using Node.js** – Install `http-server` globally (`npm install -g http-server`) and run `http-server` in the project folder

## 📝 How It Works

### Test Practice Mode

1. **Access via `index.html`** – Open the test practice interface in your browser
2. **Answer questions** – Select one of the multiple-choice options for each question
3. **Receive feedback** – Get immediate feedback on whether your answer is correct
4. **Track your progress** – The score and (if implemented) timer keep track of your performance

### Review Mode

1. **Access via `review.html`** – Open the review interface in your browser
2. **Select a chapter** – Use the dropdown menu to choose a chapter (1–6) or view all chapters
3. **Browse questions** – Each question displays:
   - The question text
   - 4 answer options (the correct answer is highlighted in green)
   - A detailed explanation with mathematical formulas rendered via MathJax
4. **Switch chapters** – Change the dropdown selection to review questions from different chapters

**How questions are stored:**

The `questions.json` file contains all question data for both modes, including:

- Question text
- Answer options
- Correct answer
- Chapter number
- Detailed explanation

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request or open an Issue.
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License
This project is open-source and available under the MIT License.
