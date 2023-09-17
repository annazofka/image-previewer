let zmienna = 10;

zrobCosWaznego();

function zrobCosWaznego() {
  zmienna = 20;

  setTimeout(() => {
    console.log("Coś Ważnego");
  }, 1000);
}

const funckja1 = () => {
  console.log("funckja 1");
};

const funckja2 = () => {
  console.log("funckja 2");
};

const addTwoNumbers = (a, b) => {
  console.log(a);
  console.log(b);
  return a + b;
};

const init = () => {
  zrobCosWaznego();

  funckja1();

  funckja2();

  const wynikDodawnia = addTwoNumbers(2, 3);

  console.log(wynikDodawnia);
};

init();
