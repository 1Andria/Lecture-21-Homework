// 1. 1-დან 15-მდე რიცხვების დაბეჭდვა და თუ რიცხვი 5-ზე მეტია, დაბეჭდვა "დიდია 5-ზე":
for (let i = 1; i <= 15; i++) {
  if (i > 5) {
    console.log(i + " დიდია 5ზე");
  } else {
    console.log(i);
  }
}
// 2. მასივიდან [3, 6, 9, 12, 15] მხოლოდ ლუწი რიცხვების გამოტანა:
let num = [3, 6, 9, 12, 15];
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    console.log(num[i]);
  }
}

// 3. სტრიქონის თითოეული ასოს დაბეჭდვა და თუ ასო 'a'-ია, დამატებითი ტექსტის დაბეჭდვა:
let some = "ragac";

for (let i = 0; i < some.length; i++) {
  if (some[i] === "a") {
    console.log("დამატებითი ტექსტი");
  } else {
    console.log(some[i]);
  }
}

// 4. მასივიდან ["red", "green", "blue", "yellow"] მხოლოდ გრძელი სიტყვების (5 ასოზე მეტი) გამოტანა:
let colors = ["red", "green", "blue", "yellow"];
for (let i = 0; i < colors.length; i++) {
  if (colors[i].length > 5) {
    console.log(colors[i]);
  }
}

// 5. 1-დან 50-მდე რიცხვების გამოტანა, რომლებიც 7-ზე იყოფა და დაბეჭდვა "გაყოფადია 7-ზე":

for (let i = 1; i <= 50; i++) {
  if (i % 7 == 0) {
    console.log(i + " გაყოფადია 7ზე");
  }
}

// 6. მასივის [4, 8, 12, 16, 20] თითოეული ელემენტის გამრავლება 2-ზე და შედეგის დაბეჭდვა:
let multiply = [4, 8, 12, 16, 20];

for (let i = 0; i < multiply.length; i++) {
  console.log(multiply[i] * 2);
}

// 7. სტრიქონის 'javascript' თითოეული ასოს დაბეჭდვა და თუ ასო 'j'-ია, შეწყვეტა: (for loop-ს შეუძლია სტრინგსაც გადაუაროს let word = 'javascript';
// for (let i = 0; i < word.length; i++))

let word = "avascrjipt";

for (let i = 0; i < word.length; i++) {
  if (word[i] === "j") {
    break;
  } else {
    console.log(word[i]);
  }
}

// 8. მასივიდან [5, 10, 15, 20, 25] მხოლოდ იმ რიცხვების დაბეჭდვა, რომლებიც 5-ზე იყოფა:

let numb = [5, 10, 15, 20, 25];

for (let i = 0; i < numb.length; i++) {
  if (numb[i] % 5 === 0) {
    console.log(numb[i]);
  }
}

// 9. სტრიქონში 'hello world' თითოეული ასოს დაბეჭდვა, გამოტოვებით ასო 'o':
let hello = "hello world";

for (let i = 0; i < hello.length; i++) {
  if (hello[i] !== "o") {
    console.log(hello[i]);
  }
}

// 10. მასივიდან [1, 2, 3, 4, 5, 6] მხოლოდ ლუწი რიცხვების ჯამის გამოთვლა:
let sum = [1, 2, 3, 4, 5, 6];
let sumed = 0;
for (let i = 0; i < sum.length; i++) {
  if (sum[i] % 2 === 0) {
    sumed += sum[i];
  }
}
console.log(sumed);

// 11. რიცხვის 10 გამრავლების ტაბულის დაბეჭდვა: (
// 10 x 1 = 10
// 10 x 2 = 20
// 10 x 3 = 30
// 10 x 4 = 40
// 10 x 5 = 50
// 10 x 6 = 60
// 10 x 7 = 70
// 10 x 8 = 80
// 10 x 9 = 90
// 10 x 10 = 100
// )

for (let i = 1; i <= 10; i++) {
  console.log(`10 * ${i} = ` + 10 * i);
}

// 12. მასივიდან [2, 7, 4, 9, 5] თითოეული ელემენტის გამოთვლა და თუ რიცხვი 4-ზე მეტია, მისი გამრავლება 3-ზე:

let mass = [2, 7, 4, 9, 5];

for (let i = 0; i < mass.length; i++) {
  if (mass[i] > 3) {
    console.log(mass[i] * 3);
  }
}

// 13. 1-დან 30-მდე ყველა რიცხვის დაბეჭდვა, ხოლო თუ რიცხვი 10-ზე მეტია, დამატებითი
// ტექსტის დაბეჭდვა:

for (let i = 1; i <= 30; i++) {
  if (i > 10) {
    console.log("დამატებითი ტექსტი");
  } else {
    console.log(i);
  }
}

// 14. სტრიქონში 'frontend' ასოს 'e' პოვნისას, ტექსტის "ნაპოვნია e" დაბეჭდვა:

let developer = "frontend";
for (let i = 0; i < developer.length; i++) {
  if (developer[i] === "e") {
    console.log("ნაპოვნია e");
  } else {
    console.log("არ არის e");
  }
}

// 15. მასივიდან [100, 200, 300, 400, 500] იმ ელემენტების გამოტანა, რომლებიც 250-ზე ნაკლებია:
let massive = [100, 200, 300, 400, 500];

for (let i = 0; i < massive.length; i++) {
  if (massive[i] < 250) {
    console.log(massive[i]);
  }
}
