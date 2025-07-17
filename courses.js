// Tab Navigation
const tabLinks = document.querySelectorAll('.tablink');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(tab => {
  tab.addEventListener('click', function (e) {
    e.preventDefault();

    // Hide all tab contents
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tabs
    tabLinks.forEach(t => t.classList.remove('active'));

    // Show the clicked tab's content
    const targetTab = this.getAttribute('data-tab');
    document.getElementById(targetTab).classList.add('active');
    this.classList.add('active');
  });
});

// Add New Assignment
const addAssignmentBtn = document.getElementById('add-assignment-btn');
const assignmentList = document.getElementById('assignment-list');

addAssignmentBtn.addEventListener('click', function () {
  const newAssignment = document.createElement('div');
  newAssignment.classList.add('assignment');
  newAssignment.innerHTML = `
    <p><strong>Title:</strong> New Assignment</p>
    <p><strong>Due Date:</strong> 2024-10-10</p>
    <p><strong>Subject:</strong> New Subject</p>
  `;
  assignmentList.appendChild(newAssignment);
});

// Handle Chatbot Interaction
const sendBtn = document.getElementById('send-btn');
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');

sendBtn.addEventListener('click', function () {
  const userMessage = userInput.value;
  if (userMessage) {
    const userMessageElem = document.createElement('p');
    userMessageElem.textContent = `User: ${userMessage}`;
    chatLog.appendChild(userMessageElem);

    const botResponseElem = document.createElement('p');
    botResponseElem.textContent = 'Bot: How can I help you today?'; // Simple bot response for now
    chatLog.appendChild(botResponseElem);

    userInput.value = ''; // Clear input
  }
});

// Add Bookmark
const bookmarkForm = document.getElementById('bookmarkForm');
const bookmarkList = document.getElementById('bookmarkList');

bookmarkForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const resourceLink = document.getElementById('resource').value;

  if (resourceLink) {
    const bookmarkItem = document.createElement('div');
    bookmarkItem.innerHTML = `<p><a href="${resourceLink}" target="_blank">${resourceLink}</a></p>`;
    bookmarkList.appendChild(bookmarkItem);

    bookmarkForm.reset(); // Clear form
  }
});

// Set Learning Goals
const goalForm = document.getElementById('goalForm');
const goalsList = document.getElementById('goalsList');

goalForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const goal = document.getElementById('goal').value;
  const deadline = document.getElementById('deadline').value;

  if (goal && deadline) {
    const goalItem = document.createElement('div');
    goalItem.innerHTML = `<p><strong>Goal:</strong> ${goal} <br> <strong>Deadline:</strong> ${deadline}</p>`;
    goalsList.appendChild(goalItem);

    goalForm.reset(); // Clear form
  }
});

// Skill Exchange Program - Find a Partner
const findPartnerBtn = document.getElementById('findPartner');
const partnerResult = document.getElementById('partnerResult');

const users = [
  { name: 'Alice', skill: 'Design', needs: 'JavaScript' },
  { name: 'Bob', skill: 'JavaScript', needs: 'Design' },
  { name: 'Charlie', skill: 'Python', needs: 'HTML & CSS' }
];

findPartnerBtn.addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * users.length);
  const partner = users[randomIndex];

  partnerResult.innerHTML = `<p>Partner found: <strong>${partner.name}</strong><br>Skill: ${partner.skill} <br>Needs help with: ${partner.needs}</p>`;
});

// Skill Tournaments - Leaderboard
const joinTournamentBtn = document.getElementById('joinTournament');
const leaderboardList = document.getElementById('leaderboardList');

const leaderboard = [
  { name: 'John Doe', points: 150 },
  { name: 'Jane Smith', points: 120 },
  { name: 'Bob Johnson', points: 100 }
];

joinTournamentBtn.addEventListener('click', function () {
  leaderboardList.innerHTML = ''; // Clear previous leaderboard
  leaderboard.forEach(player => {
    const listItem = document.createElement('li');
    listItem.textContent = `${player.name} - ${player.points} points`;
    leaderboardList.appendChild(listItem);
  });
});

// Chart.js Example for Progress and Feedback
const progressCtx = document.getElementById('progressChart').getContext('2d');
const feedbackCtx = document.getElementById('feedbackChart').getContext('2d');

// Progress Chart
const progressChart = new Chart(progressCtx, {
  type: 'bar',
  data: {
    labels: ['Math', 'Science', 'English', 'History'],
    datasets: [{
      label: 'Progress (%)',
      data: [85, 90, 75, 80],
      backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Feedback Chart
const feedbackChart = new Chart(feedbackCtx, {
  type: 'pie',
  data: {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [{
      label: 'Feedback',
      data: [75, 15, 10],
      backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      borderWidth: 1
    }]
  }
});
