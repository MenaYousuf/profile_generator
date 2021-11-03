const readline = require('readline');

const questions = {
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!"
};

const ansObj = {
  0: "Meens",
  1: "Reading",
  2: "Music",
  3: "breakfast",
  4: "scrambled eggs",
  5: "swimming",
  6: "memory"
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let i = 0;

const question = function () {
  if (i < 7) {
    rl.question(`${questions[i]}\n`, (answer) => {
      ansObj[i] = answer;
      i++;
      console.log()
      question()
    });
  } else {
    rl.close()
    console.log("Your New Profile:");
}
}
question()
