// Base de donnÃ©es des questions
const questions = [
    {
      id: 1,
      text: "Quel est le rôle principal d'un système d'exploitation ?",
      options: ["Exécuter des scripts Python", "Gérer les ressources matérielles et logicielles", "Protéger contre les virus", "Compiler du code source"],
      correct: [1] 
    },
    {
      id: 2,
      text: "Quel protocole est principalement utilisé pour envoyer des emails ?",
      options: ["HTTP", "FTP", "SMTP", "SNMP"],
      correct: [2]
    },
    {
      id: 3,
      text: "Que signifie SQL ?",
      options: ["Secure Query Language", "Standard Question Language", "Structured Query Language", "System Query Logic"],
      correct: [2]
    },
    {
      id: 4,
      text: "Dans un réseau informatique, que signifie l'adresse IP 192.168.1.1 ?",
      options: ["Une adresse publique", "Une adresse de loopback", "Une adresse privée", "Une adresse réservée aux serveurs DNS"],
      correct: [2]
    },
    {
      id: 5,
      text: " Quel composant stocke les données à court terme pour un accès rapide par le processeur ?",
      options: ["SSD", "RAM", "ROM", "Carte Graphique"],
      correct: [1]
    },
    {
      id: 6,
      text: "Quel est le rôle principal d'un pare-feu (firewall) ?",
      options: ["Optimiser la vitesse d’Internet", "Bloquer les connexions réseau non autorisées", "Accélérer l’exécution des programmes", "Réparer automatiquement les fichiers corrompus"],
      correct: [1]
    },
    {
      id: 7,
      text: "Quel langage est principalement utilisé pour le développement d’applications Android ?",
      options: ["Python", "C++", "Java/Kotlin", "Swift"],
      correct: [2]
    },
    {
      id: 8,
      text: "Quelle est la différence principale entre HTTP et HTTPS ?",
      options: ["HTTPS est plus rapide que HTTP", "HTTPS chiffre les communications avec TLS/SSL", " HTTP utilise plus de bande passante", "HTTPS est réservé aux sites gouvernementaux"],
      correct: [1]
    },
    {
      id: 9,
      text: "Quelle structure de données fonctionne selon le principe Last In, First Out (LIFO) ?",
      options: ["Une liste chaînée", "Une file (queue)", "Une pile (stack)", "Un tableau"],
      correct: [2]
    },
    {
      id: 10,
      text: "Quel outil Windows permet d’analyser la performance du système en détail ?",
      options: ["Gestionnaire des tâches", "Observateur d’événements", "Analyseur de performance", "Panneau de configuration"],
      correct: [2]
    }
  ];

 
  function generateQuestions() {
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = '';

    questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question';
      questionDiv.innerHTML = `
        <h2>${question.text}</h2>
        <div class="options" data-question="${index}">
          ${question.options.map((option, optIndex) => `
            <div class="option" data-option="${optIndex}" onclick="selectOption(${index}, ${optIndex})">
              ${option}
            </div>
          `).join('')}
        </div>
      `;
      questionsDiv.appendChild(questionDiv);
    });
  }


  function selectOption(questionIndex, optionIndex) {
    const options = document.querySelectorAll(`[data-question="${questionIndex}"] .option`);
    options.forEach(option => option.classList.remove('selected'));
    const selectedOption = options[optionIndex];
    selectedOption.classList.add('selected');
    saveAnswer(questionIndex, optionIndex);
  }


  let answers = [];
  function saveAnswer(questionIndex, optionIndex) {
    answers[questionIndex] = optionIndex;
  }

  function testqcm() {
    let score = 0;
    answers.forEach((answer, index) => {
      if (questions[index].correct.includes(answer)) {
        score++;
      }
    });
    alert(`Score : ${score}/${questions.length}`);
  } 
  function clearAnswers() {
    answers = [];
    document.querySelectorAll('.option').forEach(option => option.classList.remove('selected'));
  }

  // Initialiser le quizz
  generateQuestions();