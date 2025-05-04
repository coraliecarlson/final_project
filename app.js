const questions = [
  {
    topic: "Bat",
    image: "/images/bat-bizzarebugs.png",
    possibleAnswers: [
      "Buy it!",
      "Nope, that's illegal"
    ],
    correctAnswer: "Nope, that's illegal",
    explain: "Under the Lacey Act, if an animal is illegal to kill in the country where it was harvested, then it's also illegal to sell in the U.S. Because Indonesia bans the killing of kerivoula picta, the sale of this taxidermy bat in the U.S. is illegal. ",
    source: "Source: U.S. Lacey Act "
  },
  {
    topic: "Polar Bear Claw",
    image: "/images/polar-bear-claw.png",
    possibleAnswers: [
      "Buy it!",
      "Nope, that's illegal"
    ],
    correctAnswer: "Buy it!",
    explain: "The Federal Marine Mammal Protection Act of 1972 prohibits the sale of polar bear and walrus parts, but there is an exception for Native Alaskans to sell their handicrafts. ",
    source: "Source: U.S. Fish and Wildlife Service"
  },
  {
    topic: "Taxidermy Cat",
    image: "images/taxidermy-cat-large.png",
    possibleAnswers: [
      "Buy it!",
      "Nope, that's illegal"
    ],
    correctAnswer: "Nope, that's illegal",
    explain: "U.S. law generally prohibits selling or buying cat or dog fur, and since a taxidermy cat includes the fur, this one is banned. Plus the Tariff Act of 1930 prevents the importing or exporting of cat or dog fur. This one is for sale in Britian, so there's no way to get it home legally. Note: Taxiderming your own cat or dog is just fine, as long as you don't sell it. ",
    source: "Source: Federal Law: 19 U.S. Code 1308 and 19 U.S.C.A. 1308"
  },
  {
    topic: "Cat Skull",
    image: "images/cat-skull.png",
    possibleAnswers: [
      "Buy it!",
      "Nope, that's illegal"
    ],
    correctAnswer: "Buy it!",
    explain: "While there are several laws preventing the sale of cat fur, the bones are up for grabs. ",
    source: "Source: Unknown"
  },
  {
    topic: "Eagle Feather",
    image: "images/eaglefeather.png",
    possibleAnswers: [
      "Buy it!",
      "Nope, that's illegal"
    ],
    correctAnswer: "Nope, that's illegal",
    explain: "The sale of any bald eagle or golden eagle feather is illegal. In fact, it is even illegal to take an eagle feather that you find on the ground.\"",
    source: "Source: U.S. Fish and Wildlife Service"
  },
  {
    topic: "Bluejay Feather ",
    image: "images/etsy-bluejay-feathers.png",
    possibleAnswers: [
      "Buy it!",
      "Nope, that's illegal"
    ],
    correctAnswer: "Nope, that's illegal",
    explain: "It's not just our national bird that is protected. The Migratory Bird Treaty Act prohibits the buying and possession of feathers from more than 1,000 birds, including Blue Jays. So if you see one on the ground, don't pick it up! (Unless you have a permit.) ",
    source: "Source: Migratory Bird Treaty Act"
  },
  {
    topic: "Finshed!",
    image: "images/buyer-beware.png",
    possibleAnswers: [
      "Buy it!",
      "Nope, that's illegal"
    ],
    correctAnswer: "",
    explain: "Now you know how a patchwork of laws aim to protect animals – and how banned animal-made products frequently end up online anyway. If you want to buy an animal product, always research the laws governing it first. And if those laws aren't clear, call the Fish and Wildlife Service for clarification. ",
    source: "By Coralie Carlson"
  }
];

const quizProgress = document.getElementById("quizProgress");
const questionContainer = document.getElementById("imageContainer");
const answerContainer = document.getElementById("answerContainer");
const explainContainer = document.getElementById("explainContainer");
const sourceContainer = document.getElementById("sourceContainer");
const nextButton = document.getElementById("nextButton");
const feedbackContainer = document.getElementById("feedbackContainer");
const feedbackImage = document.getElementById("feedbackImage");
let currentQuestionIndex = 0;

function handleQuestion(index) {  

  // handle quiz progress section
  // quizProgress.innerHTML = "";
  // questions.forEach((question) => {
  //   quizProgress.innerHTML += "<span></span>";
  // });
  // let spans = document.querySelectorAll("span");
  // for (let i = 0; i <= index; i++) {
  //   spans[i].classList.add("seen");
  // }

  // topic/image
  questionContainer.innerHTML = `<p>${questions[index].topic}</p>
   <img src="${questions[index].image}" alt="${questions[index].topic}" />
  `;

  // answers
  answerContainer.innerHTML = "";
  questions[index].possibleAnswers.forEach((answer) => {
    answerContainer.innerHTML += `<button class="btn">${answer}</button>`;
  });
  let answers = document.querySelectorAll("button");
  answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
      if (e.target.textContent === questions[index].correctAnswer) {
        document.getElementById("feedbackImage").src = "images/check.png";
        document.getElementById("feedbackImage").alt = "Correct!";
      } else {
        document.getElementById("feedbackImage").src = "images/x.png";
        document.getElementById("feedbackImage").alt = "Wrong";
      }
      
      
      document.getElementById("explainText").innerHTML = questions[index].explain;
      document.getElementById("sourceText").innerHTML = questions[index].source;


      feedbackContainer.classList.remove("hidden");
      explainContainer.classList.remove("hidden");
      sourceContainer.classList.remove("hidden");
      nextButton.classList.remove("hidden");
      
      

      });
      

      
      // if (currentQuestionIndex === questions.length - 1) {
      //   currentQuestionIndex = 0;
      // } else {
      //   currentQuestionIndex++;
      // }
      // handleQuestion(currentQuestionIndex);
    });
  }




nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  feedbackContainer.classList.add("hidden");
  explainContainer.classList.add("hidden");
  sourceContainer.classList.add("hidden");
  nextButton.classList.add("hidden");

  handleQuestion(currentQuestionIndex);
});
handleQuestion(currentQuestionIndex);