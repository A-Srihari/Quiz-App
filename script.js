// ─────────────────────────────────────────────
// QUESTION BANK
// ─────────────────────────────────────────────
const BANK = {
  java: [
    {
      q: "Which keyword is used to create a subclass in Java?",
      opts: ["implements", "inherits", "extends", "super"],
      a: 2,
    },
    {
      q: "What is the default value of an int variable in Java?",
      opts: ["null", "undefined", "0", "-1"],
      a: 2,
    },
    {
      q: "Which of these is NOT a primitive data type in Java?",
      opts: ["int", "float", "String", "char"],
      a: 2,
    },
    {
      q: "What does JVM stand for?",
      opts: [
        "Java Virtual Machine",
        "Java Variable Method",
        "Java Verified Module",
        "Java Version Manager",
      ],
      a: 0,
    },
    {
      q: "Which method is the entry point of a Java program?",
      opts: ["start()", "run()", "main()", "init()"],
      a: 2,
    },
    {
      q: "What is the size of a 'long' data type in Java?",
      opts: ["32 bits", "16 bits", "64 bits", "128 bits"],
      a: 2,
    },
    {
      q: "Which collection does NOT allow duplicate elements?",
      opts: ["ArrayList", "LinkedList", "HashSet", "Vector"],
      a: 2,
    },
    {
      q: "What is the output of: System.out.println(10 % 3)?",
      opts: ["3", "1", "0", "2"],
      a: 1,
    },
    {
      q: "Which keyword prevents a method from being overridden?",
      opts: ["static", "abstract", "final", "private"],
      a: 2,
    },
    {
      q: "What is autoboxing in Java?",
      opts: [
        "Converting int to String",
        "Converting a primitive to its wrapper class",
        "Automatic memory management",
        "Type casting",
      ],
      a: 1,
    },
    {
      q: "Which interface must be implemented to sort objects using Collections.sort()?",
      opts: ["Sortable", "Orderable", "Comparable", "Comparator"],
      a: 2,
    },
    {
      q: "What does the 'super' keyword do?",
      opts: [
        "Refers to current class",
        "Refers to parent class",
        "Creates a superclass",
        "Overrides a method",
      ],
      a: 1,
    },
    {
      q: "Which access modifier makes a member accessible only within the same class?",
      opts: ["protected", "default", "public", "private"],
      a: 3,
    },
    {
      q: "What is the parent class of all classes in Java?",
      opts: ["Base", "Root", "Object", "Class"],
      a: 2,
    },
    {
      q: "Which exception is thrown when dividing by zero in Java?",
      opts: [
        "NullPointerException",
        "ArithmeticException",
        "NumberFormatException",
        "RuntimeException",
      ],
      a: 1,
    },
    {
      q: "What is the purpose of the 'finally' block?",
      opts: [
        "Runs only on success",
        "Runs only on exception",
        "Always runs after try-catch",
        "Catches all exceptions",
      ],
      a: 2,
    },
    {
      q: "Which method converts a String to an integer?",
      opts: [
        "Integer.convert()",
        "Integer.parse()",
        "Integer.parseInt()",
        "String.toInt()",
      ],
      a: 2,
    },
    {
      q: "What is a constructor in Java?",
      opts: [
        "A method that returns an object",
        "A special method called when an object is created",
        "A static method",
        "A method to destroy objects",
      ],
      a: 1,
    },
    {
      q: "Which loop is guaranteed to execute at least once?",
      opts: ["for", "while", "do-while", "enhanced for"],
      a: 2,
    },
    {
      q: "What does 'static' mean in Java?",
      opts: [
        "The variable can't change",
        "Belongs to class, not instance",
        "Method can't be inherited",
        "Only runs once",
      ],
      a: 1,
    },
    {
      q: "Which data structure uses LIFO order?",
      opts: ["Queue", "LinkedList", "Stack", "HashMap"],
      a: 2,
    },
    {
      q: "What is an interface in Java?",
      opts: [
        "A class with only abstract methods",
        "A concrete class",
        "A type of variable",
        "A package",
      ],
      a: 0,
    },
    {
      q: "What is method overloading?",
      opts: [
        "Same method name, different parameters",
        "Same method name, same parameters",
        "Overriding in subclass",
        "Using super keyword",
      ],
      a: 0,
    },
    {
      q: "Which keyword is used to handle exceptions?",
      opts: ["handle", "catch", "intercept", "trap"],
      a: 1,
    },
    {
      q: "What does 'this' keyword refer to in Java?",
      opts: [
        "Parent class object",
        "Static class",
        "Current class instance",
        "Child class object",
      ],
      a: 2,
    },
  ],
  sql: [
    {
      q: "Which SQL command is used to retrieve data from a database?",
      opts: ["FETCH", "GET", "SELECT", "RETRIEVE"],
      a: 2,
    },
    {
      q: "Which clause is used to filter rows in a SQL query?",
      opts: ["HAVING", "FILTER", "WHERE", "WHEN"],
      a: 2,
    },
    {
      q: "What does DDL stand for?",
      opts: [
        "Data Definition Language",
        "Data Display Language",
        "Database Design Logic",
        "Data Driven Language",
      ],
      a: 0,
    },
    {
      q: "Which command removes a table and its structure permanently?",
      opts: ["DELETE", "TRUNCATE", "REMOVE", "DROP"],
      a: 3,
    },
    {
      q: "Which JOIN returns all rows from the left table and matching rows from the right?",
      opts: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "FULL JOIN"],
      a: 2,
    },
    {
      q: "Which aggregate function returns the number of rows?",
      opts: ["SUM()", "COUNT()", "TOTAL()", "NUM()"],
      a: 1,
    },
    {
      q: "What does the DISTINCT keyword do?",
      opts: [
        "Sorts results",
        "Removes duplicate values",
        "Limits the result",
        "Filters nulls",
      ],
      a: 1,
    },
    {
      q: "Which constraint ensures a column cannot have NULL values?",
      opts: ["UNIQUE", "PRIMARY KEY", "NOT NULL", "FOREIGN KEY"],
      a: 2,
    },
    {
      q: "What is the correct syntax to add a new record?",
      opts: ["ADD INTO", "INSERT INTO", "PUT INTO", "APPEND INTO"],
      a: 1,
    },
    {
      q: "Which clause filters groups when using aggregate functions?",
      opts: ["WHERE", "FILTER", "HAVING", "GROUP FILTER"],
      a: 2,
    },
    {
      q: "What does a PRIMARY KEY enforce?",
      opts: [
        "Unique and NOT NULL values",
        "Only NOT NULL values",
        "Only unique values",
        "Foreign references",
      ],
      a: 0,
    },
    {
      q: "Which SQL function returns the current date and time?",
      opts: ["CURDATE()", "TODAY()", "NOW()", "DATETIME()"],
      a: 2,
    },
    {
      q: "Which operator checks for a pattern in a column?",
      opts: ["MATCHES", "LIKE", "SIMILAR", "CONTAINS"],
      a: 1,
    },
    {
      q: "What does GROUP BY do in SQL?",
      opts: [
        "Sorts rows",
        "Filters rows",
        "Groups rows with same values",
        "Joins tables",
      ],
      a: 2,
    },
    {
      q: "Which SQL command modifies existing data in a table?",
      opts: ["MODIFY", "CHANGE", "ALTER", "UPDATE"],
      a: 3,
    },
    {
      q: "What is a subquery?",
      opts: [
        "A stored procedure",
        "A query inside another query",
        "A view",
        "A trigger",
      ],
      a: 1,
    },
    {
      q: "Which keyword sorts results in descending order?",
      opts: ["SORT DESC", "ORDER DESC", "DESC", "DESCENDING"],
      a: 2,
    },
    {
      q: "What does TRUNCATE do differently from DELETE?",
      opts: [
        "Removes structure too",
        "Cannot be rolled back and removes all rows",
        "Removes only one row",
        "Requires WHERE clause",
      ],
      a: 1,
    },
    {
      q: "Which JOIN returns only matching rows from both tables?",
      opts: ["LEFT JOIN", "FULL JOIN", "CROSS JOIN", "INNER JOIN"],
      a: 3,
    },
    {
      q: "What is a foreign key?",
      opts: [
        "A key from another database",
        "A column referencing the primary key of another table",
        "A backup primary key",
        "An encrypted key",
      ],
      a: 1,
    },
    {
      q: "Which command creates a new database?",
      opts: [
        "MAKE DATABASE",
        "BUILD DATABASE",
        "NEW DATABASE",
        "CREATE DATABASE",
      ],
      a: 3,
    },
    {
      q: "What does the UNION operator do?",
      opts: [
        "Joins tables",
        "Combines result sets removing duplicates",
        "Multiplies rows",
        "Creates a new table",
      ],
      a: 1,
    },
    {
      q: "Which statement changes a table structure?",
      opts: ["MODIFY TABLE", "CHANGE TABLE", "ALTER TABLE", "UPDATE TABLE"],
      a: 2,
    },
    {
      q: "What does NULL represent in SQL?",
      opts: ["Zero", "Empty string", "Unknown or missing value", "False"],
      a: 2,
    },
    {
      q: "Which clause limits the number of rows returned?",
      opts: ["TOP", "MAX", "LIMIT", "ROWS"],
      a: 2,
    },
  ],
  quant: [
    { q: "What is 15% of 240?", opts: ["36", "34", "38", "32"], a: 0 },
    {
      q: "A train travels 360 km in 4 hours. What is its speed in km/h?",
      opts: ["80", "85", "90", "100"],
      a: 2,
    },
    {
      q: "If A can do a job in 10 days and B in 15 days, how many days together?",
      opts: ["5", "6", "7", "8"],
      a: 1,
    },
    {
      q: "Simple interest on ₹5000 at 8% per annum for 3 years?",
      opts: ["₹1000", "₹1100", "₹1200", "₹1500"],
      a: 2,
    },
    {
      q: "Two numbers in ratio 3:5 have a sum of 64. What are they?",
      opts: ["24 and 40", "20 and 44", "30 and 34", "16 and 48"],
      a: 0,
    },
    {
      q: "Shopkeeper sells at 20% profit. Cost price ₹500. Selling price?",
      opts: ["₹550", "₹580", "₹600", "₹620"],
      a: 2,
    },
    {
      q: "What is the LCM of 12 and 18?",
      opts: ["24", "36", "48", "54"],
      a: 1,
    },
    {
      q: "6 workers finish a job in 8 days. Workers needed in 4 days?",
      opts: ["10", "12", "14", "16"],
      a: 1,
    },
    {
      q: "Average of 5 numbers is 40. Removing one makes it 38. Removed number?",
      opts: ["44", "46", "48", "50"],
      a: 2,
    },
    {
      q: "A pipe fills a tank in 6 hours. Fraction filled in 2 hours?",
      opts: ["1/4", "1/3", "2/5", "1/2"],
      a: 1,
    },
    {
      q: "Compound interest on ₹10000 at 10% per annum for 2 years?",
      opts: ["₹1900", "₹2000", "₹2100", "₹2200"],
      a: 2,
    },
    {
      q: "Price up 20%, quantity down 10%. Net effect on expenditure?",
      opts: ["8% increase", "10% increase", "12% increase", "8% decrease"],
      a: 0,
    },
    {
      q: "What is the square root of 1764?",
      opts: ["40", "42", "44", "46"],
      a: 1,
    },
    {
      q: "In how many ways can 4 books be arranged on a shelf?",
      opts: ["16", "20", "24", "48"],
      a: 2,
    },
    {
      q: "A sum doubles in 8 years at simple interest. Rate of interest?",
      opts: ["10%", "12%", "12.5%", "15%"],
      a: 2,
    },
    { q: "What is 30% of 30% of 900?", opts: ["81", "82", "83", "84"], a: 0 },
    { q: "If 3x + 7 = 22, what is x?", opts: ["3", "4", "5", "6"], a: 2 },
    {
      q: "Car: 300 km at 60 km/h and 200 km at 40 km/h. Average speed?",
      opts: ["48", "50", "52", "54"],
      a: 1,
    },
    { q: "What is the HCF of 36 and 48?", opts: ["6", "9", "12", "18"], a: 2 },
    {
      q: "Loss of 25% by selling at ₹375. What was the cost price?",
      opts: ["₹450", "₹480", "₹500", "₹520"],
      a: 2,
    },
    {
      q: "What is the value of 2³ × 3²?",
      opts: ["54", "66", "72", "80"],
      a: 2,
    },
    {
      q: "Perimeter of rectangle is 56 cm. Length is 16 cm. Breadth?",
      opts: ["10", "12", "14", "16"],
      a: 2,
    },
    {
      q: "Class of 40, boys to girls ratio 3:5. How many girls?",
      opts: ["20", "22", "25", "30"],
      a: 2,
    },
    {
      q: "Sold for ₹840 at 5% loss. What was the cost price?",
      opts: ["₹860", "₹870", "₹880", "₹900"],
      a: 2,
    },
    {
      q: "Probability of getting a head when a coin is tossed?",
      opts: ["1/4", "1/3", "1/2", "2/3"],
      a: 2,
    },
  ],
  reasoning: [
    {
      q: "Find the odd one out: Apple, Mango, Carrot, Banana",
      opts: ["Apple", "Mango", "Carrot", "Banana"],
      a: 2,
    },
    {
      q: "Complete the series: 2, 4, 8, 16, ?",
      opts: ["24", "28", "32", "36"],
      a: 2,
    },
    {
      q: "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      opts: ["Book", "Student", "School", "Subject"],
      a: 2,
    },
    {
      q: "Which number is missing: 1, 4, 9, 16, ?, 36",
      opts: ["20", "22", "24", "25"],
      a: 3,
    },
    {
      q: "If Monday is the 1st day, what day is the 15th?",
      opts: ["Sunday", "Monday", "Tuesday", "Wednesday"],
      a: 1,
    },
    {
      q: "Man says 'She is my father's only son's daughter'. Who is she?",
      opts: ["Niece", "Sister", "Daughter", "Cousin"],
      a: 2,
    },
    {
      q: "Find the missing term: AZ, BY, CX, ?",
      opts: ["DV", "DW", "EW", "EV"],
      a: 1,
    },
    {
      q: "Arjun is 8th from left and 12th from right. How many in the row?",
      opts: ["18", "19", "20", "21"],
      a: 1,
    },
    {
      q: "Complete the series: 3, 6, 11, 18, 27, ?",
      opts: ["36", "38", "40", "42"],
      a: 2,
    },
    {
      q: "Find the odd one out: Triangle, Square, Circle, Cone",
      opts: ["Triangle", "Square", "Circle", "Cone"],
      a: 3,
    },
    {
      q: "If '+' means '×', '×' means '÷', '÷' means '+', find: 4 + 3 × 6 ÷ 2",
      opts: ["6", "7", "8", "9"],
      a: 2,
    },
    {
      q: "Complete: 1, 1, 2, 3, 5, 8, 13, ?",
      opts: ["18", "19", "20", "21"],
      a: 3,
    },
    {
      q: "If South-West is opposite North-East, opposite of South-East is?",
      opts: ["North-East", "North-West", "South-West", "East"],
      a: 1,
    },
    {
      q: "A > B, C > D, B > C. Who is lightest?",
      opts: ["A", "B", "C", "D"],
      a: 3,
    },
    {
      q: "Complete the analogy: Pen : Writer :: Brush : ?",
      opts: ["Canvas", "Paint", "Painter", "Art"],
      a: 2,
    },
    {
      q: "If BOOK is coded as CPPL, how is DESK coded?",
      opts: ["EFLT", "ETLT", "EFTL", "EFLT"],
      a: 0,
    },
    {
      q: "A is B's brother. C is B's mother. D is C's father. What is A to D?",
      opts: ["Grandson", "Son", "Grandfather", "Brother"],
      a: 0,
    },
    {
      q: "How many times does digit '3' appear from 1 to 50?",
      opts: ["5", "6", "7", "8"],
      a: 0,
    },
    {
      q: "A clock shows 3:15. Angle between hour and minute hands?",
      opts: ["7.5°", "8.5°", "9.5°", "10°"],
      a: 0,
    },
    {
      q: "All cats are animals. Some animals are dogs. What definitely follows?",
      opts: [
        "All cats are dogs",
        "Some cats are dogs",
        "No cat is a dog",
        "None of these",
      ],
      a: 3,
    },
    {
      q: "ABCD is a square. Folded along AC, what shape is formed?",
      opts: ["Rectangle", "Pentagon", "Triangle", "Rhombus"],
      a: 2,
    },
    { q: "Series: 5, 10, 20, 40, ?", opts: ["60", "70", "80", "100"], a: 2 },
    {
      q: "Complete analogy: Fish : Water :: Bird : ?",
      opts: ["Tree", "Nest", "Sky", "Feathers"],
      a: 2,
    },
    {
      q: "If RAIN = 4 letters, SNOW = 4, HAIL = 4, what is STORM?",
      opts: ["4", "5", "6", "7"],
      a: 1,
    },
    {
      q: "Series: 100, 91, 83, 76, 70, ?",
      opts: ["64", "65", "66", "67"],
      a: 1,
    },
  ],
};

const SUBJECT_LABELS = {
  java: "☕ Java",
  sql: "🗄️ SQL",
  quant: "🔢 Quant Aptitude",
  reasoning: "🧩 Reasoning",
};

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
let selectedSubject = null;
let selectedCount = null;
let selectedTimer = null; // seconds; 0 = no limit

let quizQuestions = [];
let current = 0;
let score = 0;
let timeouts = 0;
let answered = false;

let timerInterval = null;
let timeRemaining = 0;

const LETTERS = ["A", "B", "C", "D"];
const CIRCUMFERENCE = 2 * Math.PI * 22; // r=22

// ─────────────────────────────────────────────
// SETUP
// ─────────────────────────────────────────────
function selectSubject(sub, btn) {
  document
    .querySelectorAll(".subject-btn")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  selectedSubject = sub;
  checkReady();
}

function selectCount(n, btn) {
  document
    .querySelectorAll(".count-pill")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  selectedCount = n;
  checkReady();
}

function selectTimer(n, btn) {
  document
    .querySelectorAll(".timer-pill")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  selectedTimer = n;
  checkReady();
}

function checkReady() {
  document.getElementById("start-btn").disabled = !(
    selectedSubject &&
    selectedCount &&
    selectedTimer !== null
  );
}

// ─────────────────────────────────────────────
// QUIZ
// ─────────────────────────────────────────────
function shuffle(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
}

function startQuiz() {
  quizQuestions = shuffle(BANK[selectedSubject]).slice(0, selectedCount);
  current = 0;
  score = 0;
  timeouts = 0;

  document.getElementById("q-total").textContent = selectedCount;
  document.getElementById("quiz-subject-tag").textContent =
    SUBJECT_LABELS[selectedSubject];

  // hide timer row if No Limit
  document.getElementById("timer-row").style.display =
    selectedTimer === 0 ? "none" : "flex";

  showScreen("quiz-screen");
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  stopTimer();

  const data = quizQuestions[current];
  document.getElementById("q-num").textContent = current + 1;
  document.getElementById("live-score").textContent = score;
  document.getElementById("progress-fill").style.width =
    (current / selectedCount) * 100 + "%";
  document.getElementById("question-text").textContent = data.q;

  // reset question card style
  const qCard = document.getElementById("question-card");
  qCard.classList.remove("timed-out");

  const feedback = document.getElementById("feedback-bar");
  feedback.className = "feedback-bar";
  feedback.textContent = "";
  document.getElementById("next-row").classList.remove("show");

  // render options
  const grid = document.getElementById("options-grid");
  grid.innerHTML = "";
  data.opts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-letter">${LETTERS[i]}</span>${opt}`;
    btn.onclick = () => selectAnswer(i);
    grid.appendChild(btn);
  });

  // start timer if needed
  if (selectedTimer > 0) startTimer(selectedTimer);
}

// ─────────────────────────────────────────────
// TIMER
// ─────────────────────────────────────────────
function startTimer(seconds) {
  timeRemaining = seconds;
  updateTimerUI(seconds, seconds);

  const wrap = document.getElementById("timer-ring-wrap");
  wrap.className = "timer-ring-wrap"; // reset urgency class

  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerUI(timeRemaining, seconds);

    // urgency classes
    const pct = timeRemaining / seconds;
    if (pct <= 0.2) {
      wrap.className = "timer-ring-wrap timer-danger";
    } else if (pct <= 0.4) {
      wrap.className = "timer-ring-wrap timer-warn";
    }

    if (timeRemaining <= 0) {
      stopTimer();
      handleTimeout();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerUI(remaining, total) {
  const fill = document.getElementById("timer-ring-fill");
  const numEl = document.getElementById("timer-num");
  const subLbl = document.getElementById("timer-sub-label");

  const fraction = total > 0 ? remaining / total : 1;
  const offset = CIRCUMFERENCE * (1 - fraction);

  fill.style.strokeDasharray = CIRCUMFERENCE;
  fill.style.strokeDashoffset = offset;

  numEl.textContent = remaining > 0 ? remaining : 0;
  subLbl.textContent = remaining === 1 ? "second left" : "seconds left";
}

function handleTimeout() {
  if (answered) return;
  answered = true;
  timeouts++;

  const data = quizQuestions[current];
  const buttons = document.querySelectorAll(".option-btn");
  const feedback = document.getElementById("feedback-bar");
  const qCard = document.getElementById("question-card");

  buttons.forEach((b) => (b.disabled = true));
  buttons[data.a].classList.add("correct"); // reveal correct answer

  qCard.classList.add("timed-out");
  feedback.textContent = `⏱ Time's up! The correct answer was: ${data.opts[data.a]}`;
  feedback.className = "feedback-bar timeout-fb show";

  document.getElementById("next-row").classList.add("show");
}

// ─────────────────────────────────────────────
// ANSWER
// ─────────────────────────────────────────────
function selectAnswer(index) {
  if (answered) return;
  answered = true;
  stopTimer();

  const data = quizQuestions[current];
  const buttons = document.querySelectorAll(".option-btn");
  const feedback = document.getElementById("feedback-bar");

  buttons.forEach((b) => (b.disabled = true));

  if (index === data.a) {
    score++;
    buttons[index].classList.add("correct");
    feedback.textContent = "✓ Correct! Well done.";
    feedback.className = "feedback-bar correct-fb show";
  } else {
    buttons[index].classList.add("wrong");
    buttons[data.a].classList.add("correct");
    feedback.textContent = `✗ Incorrect. Correct answer: ${data.opts[data.a]}`;
    feedback.className = "feedback-bar wrong-fb show";
  }

  document.getElementById("live-score").textContent = score;
  document.getElementById("next-row").classList.add("show");
}

function nextQuestion() {
  current++;
  if (current >= quizQuestions.length) showResult();
  else loadQuestion();
}

// ─────────────────────────────────────────────
// RESULT
// ─────────────────────────────────────────────
function showResult() {
  stopTimer();
  document.getElementById("progress-fill").style.width = "100%";

  const total = quizQuestions.length;
  const pct = Math.round((score / total) * 100);
  const wrong = total - score - timeouts;

  document.getElementById("big-score").textContent = `${score}/${total}`;
  document.getElementById("stat-correct").textContent = score;
  document.getElementById("stat-wrong").textContent = wrong < 0 ? 0 : wrong;
  document.getElementById("stat-timeout").textContent = timeouts;
  document.getElementById("stat-pct").textContent = pct + "%";
  document.getElementById("result-subject-tag").textContent =
    SUBJECT_LABELS[selectedSubject];

  // hide timeout stat if no timer
  document.querySelector("#stat-timeout").closest(".stat-box").style.display =
    selectedTimer === 0 ? "none" : "block";

  let icon, title, sub;
  if (pct === 100) {
    icon = "🏆";
    title = "Perfect Score!";
    sub = "Flawless! You nailed every single question.";
  } else if (pct >= 80) {
    icon = "🌟";
    title = "Excellent!";
    sub = "Outstanding performance. Almost perfect!";
  } else if (pct >= 60) {
    icon = "👍";
    title = "Good Job!";
    sub = "Solid effort. Keep sharpening your skills!";
  } else if (pct >= 40) {
    icon = "📚";
    title = "Keep Learning!";
    sub = "Room to grow — review and try again!";
  } else {
    icon = "💪";
    title = "Keep Practicing!";
    sub = "Everyone starts somewhere. Give it another shot!";
  }

  document.getElementById("result-icon").textContent = icon;
  document.getElementById("result-title").textContent = title;
  document.getElementById("result-sub").textContent = sub;

  showScreen("result-screen");
}

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────
function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goSetup() {
  stopTimer();
  showScreen("setup-screen");
}
function retryQuiz() {
  startQuiz();
}
