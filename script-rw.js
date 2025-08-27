document.addEventListener('DOMContentLoaded', () => {
  fetch('questions.json')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load questions.json');
      return response.json();
    })
    .then(data => {
      displayChapters(data);
    })
    .catch(error => console.error('Error loading questions:', error));
});

function displayChapters(questions) {
  const chaptersDiv = document.getElementById('chapters');
  const chapterMap = {};

  // Nhóm câu hỏi theo chương
  questions.forEach(q => {
    const chapter = q.chuyenDe;
    if (!chapterMap[chapter]) {
      chapterMap[chapter] = [];
    }
    chapterMap[chapter].push(q);
  });

  // Tạo nội dung cho từng chương
  for (let i = 1; i <= 6; i++) {
    const chapterQuestions = chapterMap[i] || [];
    if (chapterQuestions.length > 0) {
      const chapterDiv = document.createElement('div');
      chapterDiv.className = 'chapter';
      chapterDiv.setAttribute('data-chapter', i);

      const chapterTitle = document.createElement('h3');
      chapterTitle.textContent = `Chương ${i}: ${getChapterName(i)}`;
      chapterDiv.appendChild(chapterTitle);

      chapterQuestions.forEach((q, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';

        const questionTitle = document.createElement('h4');
        questionTitle.textContent = `Câu ${index + 1}: ${q.question}`;
        resultItem.appendChild(questionTitle);

        // Hiển thị 4 đáp án từ options, đánh dấu đáp án đúng bằng màu xanh
        q.options.forEach((option, optIndex) => {
          const optionPara = document.createElement('p');
          // Tách ký tự đầu (A, B, C, D) để so sánh với q.answer
          const optionLetter = option.charAt(0);
          if (optionLetter === q.answer) {
            optionPara.classList.add('correct');
          }
          optionPara.textContent = option;
          resultItem.appendChild(optionPara);
        });

        const explanationPara = document.createElement('p');
        explanationPara.className = 'explanation';
        // Chuyển \[...\] thành \(...\)
        let explanationText = q.explanation.replace(/\\\[/g, '\\(').replace(/\\\]/g, '\\)');
        explanationPara.innerHTML = `Hướng dẫn giải: ${explanationText}`;
        resultItem.appendChild(explanationPara);

        chapterDiv.appendChild(resultItem);
      });

      chaptersDiv.appendChild(chapterDiv);
    }
  }

  // Gọi MathJax để render LaTeX
  if (typeof MathJax !== 'undefined') {
    MathJax.typesetPromise().then(() => {
      console.log('MathJax rendered successfully');
    }).catch(err => console.error('MathJax rendering error:', err));
  }

  filterChapters(); // Áp dụng bộ lọc mặc định
}

function getChapterName(chapter) {
  const chapterNames = {
    1: 'Nguyên tử',
    2: 'Nguyên tố, đồng vị, nguyên tử khối',
    3: 'Bảng tuần hoàn',
    4: 'Phân tử, đơn chất, hợp chất',
    5: 'Liên kết hóa học',
    6: 'Hóa trị và công thức hóa học'
  };
  return chapterNames[chapter] || 'Chương không xác định';
}

function filterChapters() {
  const select = document.getElementById('chapterSelect');
  const selectedChapter = select.value;
  const chapters = document.querySelectorAll('.chapter');

  chapters.forEach(chapter => {
    const chapterNum = chapter.getAttribute('data-chapter');
    if (selectedChapter === 'all' || chapterNum === selectedChapter) {
      chapter.style.display = 'block';
    } else {
      chapter.style.display = 'none';
    }
  });
}