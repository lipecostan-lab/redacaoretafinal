class PersuasiveQuiz {
  constructor() {
    this.currentQuestion = 1;
    this.totalQuestions = 8;
    this.answers = {};
    this.score = 0;
    this.userProfile = null;

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updateProgress();
  }

  setupEventListeners() {
    // Event delegation para opções
    document.getElementById("quizContainer").addEventListener("click", (e) => {
      if (e.target.closest(".option")) {
        this.selectOption(e.target.closest(".option"));
      }
    });
  }

  selectOption(optionElement) {
    const questionCard = optionElement.closest(".question-card");
    const questionNumber = parseInt(questionCard.dataset.question);

    // Remove seleção anterior
    questionCard.querySelectorAll(".option").forEach((opt) => {
      opt.classList.remove("selected");
    });

    // Adiciona seleção atual
    optionElement.classList.add("selected");

    // Armazena resposta
    const value = optionElement.dataset.value;
    const points = parseInt(optionElement.dataset.points);

    this.answers[questionNumber] = {
      value: value,
      points: points,
      text: optionElement.querySelector(".option-text").textContent,
    };

    this.score += points;

    // Aguarda um pouco e avança
    setTimeout(() => {
      this.nextQuestion();
    }, 800);
  }

  nextQuestion() {
    if (this.currentQuestion < this.totalQuestions) {
      // Oculta questão atual
      const currentCard = document.querySelector(
        `.question-card[data-question="${this.currentQuestion}"]`
      );
      currentCard.classList.remove("active");

      // Mostra próxima questão
      this.currentQuestion++;
      const nextCard = document.querySelector(
        `.question-card[data-question="${this.currentQuestion}"]`
      );

      setTimeout(() => {
        nextCard.classList.add("active");
        this.updateProgress();
      }, 300);
    } else {
      // Quiz finalizado
      this.finishQuiz();
    }
  }

  updateProgress() {
    const progressPercentage =
      (this.currentQuestion / this.totalQuestions) * 100;
    document.getElementById(
      "progressFill"
    ).style.width = `${progressPercentage}%`;
    document.getElementById(
      "progressText"
    ).textContent = `Questão ${this.currentQuestion} de ${this.totalQuestions}`;
  }

  finishQuiz() {
    // Oculta quiz e mostra loading
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("loadingContainer").style.display = "block";

    // Simula análise com steps animados
    this.animateLoadingSteps();

    // Calcula perfil
    this.calculateProfile();

    // Redireciona após loading
    setTimeout(() => {
      this.redirectToSalesPage();
    }, 4000);
  }

  animateLoadingSteps() {
    const steps = document.querySelectorAll(".step");
    let currentStep = 0;

    const animateStep = () => {
      if (currentStep < steps.length) {
        steps[currentStep].classList.add("active");
        currentStep++;
        setTimeout(animateStep, 800);
      }
    };

    // Remove active da primeira etapa e inicia animação
    steps.forEach((step) => step.classList.remove("active"));
    setTimeout(animateStep, 500);
  }

  calculateProfile() {
    const answers = this.answers;

    // Análise complexa do perfil baseada nas respostas
    let profileData = {
      level: this.determineLevel(),
      urgency: this.determineUrgency(),
      motivation: this.determineMotivation(),
      painPoints: this.identifyPainPoints(),
      personalizedMessage: this.createPersonalizedMessage(),
    };

    this.userProfile = profileData;

    // Armazena no localStorage para usar na página de vendas
    localStorage.setItem("quizProfile", JSON.stringify(profileData));
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    localStorage.setItem("quizScore", this.score.toString());
  }

  determineLevel() {
    const q1 = this.answers[1]?.value;
    const q2 = this.answers[2]?.value;

    if (q1 === "beginner" || this.score <= 10) {
      return "beginner";
    } else if (q1 === "advanced" && this.score >= 18) {
      return "advanced";
    } else {
      return "intermediate";
    }
  }

  determineUrgency() {
    const examTiming = this.answers[3]?.value;
    const frustration = this.answers[6]?.value;

    if (examTiming === "next" || frustration === "zero") {
      return "high";
    } else if (examTiming === "2025") {
      return "medium";
    } else {
      return "low";
    }
  }

  determineMotivation() {
    const objective = this.answers[5]?.value;
    const lifeChange = this.answers[8]?.value;

    if (objective === "perfect" && lifeChange === "life-changing") {
      return "extremely_high";
    } else if (lifeChange === "important") {
      return "high";
    } else {
      return "moderate";
    }
  }

  identifyPainPoints() {
    const mainDifficulty = this.answers[2]?.value;
    const frustration = this.answers[6]?.value;
    const investment = this.answers[4]?.value;

    let painPoints = [];

    if (mainDifficulty === "structure") {
      painPoints.push("structure");
    }
    if (mainDifficulty === "arguments") {
      painPoints.push("arguments");
    }
    if (mainDifficulty === "proposal") {
      painPoints.push("proposal");
    }
    if (mainDifficulty === "time") {
      painPoints.push("time_management");
    }
    if (frustration === "zero") {
      painPoints.push("fear_of_failing");
    }
    if (investment === "little") {
      painPoints.push("lack_of_quality_material");
    }

    return painPoints;
  }

  createPersonalizedMessage() {
    const level = this.determineLevel();
    const urgency = this.determineUrgency();
    const motivation = this.determineMotivation();
    const mainDifficulty = this.answers[2]?.value;
    const objective = this.answers[5]?.value;

    let message = {
      headline: "",
      subheadline: "",
      urgencyMessage: "",
      solutionFocus: "",
    };

    // Headlines personalizadas por perfil
    if (level === "beginner") {
      message.headline = "Transforme Seu MEDO em CONFIANÇA Total!";
      message.subheadline =
        "Método comprovado para iniciantes saírem do ZERO e alcançarem 800+ pontos na redação ENEM";
    } else if (level === "intermediate") {
      message.headline = "Pare de Ficar na MÉDIA - Chegou Sua Hora!";
      message.subheadline =
        "Sistema definitivo para quebrar a barreira dos 700 pontos e garantir sua vaga na universidade";
    } else {
      message.headline = "O Último Passo Para a NOTA MÁXIMA!";
      message.subheadline =
        "Técnicas avançadas para perfeccionistas que querem os 900+ pontos em medicina/direito";
    }

    // Mensagens de urgência personalizadas
    if (urgency === "high") {
      message.urgencyMessage =
        "⚠️ ATENÇÃO: Com o ENEM se aproximando, cada dia perdido é uma oportunidade desperdiçada!";
    } else if (urgency === "medium") {
      message.urgencyMessage =
        "📅 Você tem uma vantagem: ainda há tempo para se preparar adequadamente!";
    } else {
      message.urgencyMessage =
        "🎯 Começar cedo é o segredo dos maiores sucessos no ENEM!";
    }

    // Foco na solução baseado na dificuldade principal
    const solutionMap = {
      structure:
        "Método exclusivo de estruturação de parágrafos que elimina a confusão",
      arguments:
        "Banco de argumentos premium com exemplos que impressionam os corretores",
      proposal:
        "Fórmula infalível para propostas de intervenção que garantem nota máxima",
      time: "Técnica de gestão de tempo que te faz terminar a redação em 45 minutos",
    };

    message.solutionFocus =
      solutionMap[mainDifficulty] ||
      "Sistema completo que resolve todas as dificuldades na redação";

    return message;
  }

  redirectToSalesPage() {
    // Cria parâmetros para a URL da landing page
    const params = new URLSearchParams({
      quiz: "completed",
      profile: this.userProfile.level,
      urgency: this.userProfile.urgency,
      motivation: this.userProfile.motivation,
      score: this.score,
    });

    // Redireciona para a página de vendas
    window.location.href = `vendas.html?${params.toString()}`;
  }
}

// Inicializa o quiz quando a página carrega
document.addEventListener("DOMContentLoaded", () => {
  new PersuasiveQuiz();
});

// Previne voltar no quiz
window.addEventListener("beforeunload", (e) => {
  if (quiz.currentQuestion > 1 && quiz.currentQuestion <= quiz.totalQuestions) {
    e.preventDefault();
    e.returnValue = "Você perderá seu progresso no quiz. Tem certeza?";
  }
});

// Tracking analytics (pode ser integrado com Google Analytics, Facebook Pixel, etc.)
function trackQuizEvent(eventName, data = {}) {
  // Google Analytics 4
  if (typeof gtag !== "undefined") {
    gtag("event", eventName, {
      event_category: "Quiz",
      event_label: "Redacao_ENEM_Quiz",
      ...data,
    });
  }

  // Facebook Pixel
  if (typeof fbq !== "undefined") {
    fbq("track", eventName, data);
  }

  // Console log para debug
  console.log("Quiz Event:", eventName, data);
}
