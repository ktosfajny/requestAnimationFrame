////  - - - - - - - wersja dla spinnera v2 - - - - - - -
const spinner = document.querySelector(".v2");

const fps = (1000 / 60).toFixed(2);

let deg = 0;

const degChange = 6;

const rotate = () => {
  deg += degChange;

  spinner.style.transform = `rotate(${deg}deg)`;
};

setInterval(rotate, fps);

//_____________________________________________________________________________________________________________________
// ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '

// - - - - - wersja z requestAnimationFrame jest prawie tak samo wydajna jak to z CSS - - - - -

////  - - - - - - - wersja dla spinnera v3 - - - - - - -
const spinnerRAF = document.querySelector(".v3");

// zmienna fps nie będzie potrzebna no bo requestAnimationFrame samo z siebie wykonuje się z tym samym czasiem co fps

let degRAF = 0;

const degChangeRAF = 6;

const rotateRAF = () => {
  degRAF += degChangeRAF;

  spinnerRAF.style.transform = `rotate(${degRAF}deg)`;
  requestAnimationFrame(rotateRAF);
};

rotateRAF();

//_____________________________________________________________________________________________________________________
// ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '

////  - - - - - - - wersja dla spinnera v3 - - - - - - -
const spinnerRAF2 = document.querySelector(".v4");

// zmienna fps nie będzie potrzebna no bo requestAnimationFrame samo z siebie wykonuje się z tym samym czasiem co fps

let degRAF2 = 0;
const degChangeRAF2 = 6;
let time = performance.now();
console.log(time);

const rotateRAF2 = (currentT) => {
  // if (currentT - time > 16) {  // to jest zabezpieczenie przed wykonywaniem się czegoś na monitorach 120Hz z taką częstotliwością
  if (currentT - time > 100) {
    // wejdzie do środka 10 razy na sekundę (bo sekunda ma 1000ms a my piszemy 100 czyli 1/10 z 1000), jak zamiast 100 dasz 16 to wtedy jak masz ekran 120Hz to wykonywało będzie coś coś tak jakby z częstotliwością 60Hz, no bo po co wykonywać coś 120 razy na sekundę (tzn metoda wykona się i tak 120 razy na sekundę ale będzie coś robić tak jakby było 60Hz)
    time = currentT; // aktualizujesz czas od jakiego będzie liczony czas od którego musi byc o 100ms większy currentTime

    // wewnątrz tego ifa można robić jakieś rzeczy które mają się wykonywać np co te 1/10 sekundy
    degRAF2 += degChangeRAF2;
    spinnerRAF2.style.transform = `rotate(${degRAF2}deg)`;
  }

  // czyli funkcja jest ciągle wykonywana co odświeżenie ekranu ale nie zawsze musi coś robić, w tym przypadku robi coś co te 100ms ponad
  // czyli jak masz np ekran z odświeżaniem 120Hz to piszesz osbie warunek (currentT - time > 16) i wtedy coś robisz, inaczej ta funkcaj wykonywalaby się 120 razy na sekundę a nie trzeba przecież bo jakby wykonywała się 120 razy to ten spinner obracałby się 2 razy szybciej niż powinien

  requestAnimationFrame(rotateRAF2);
};

rotateRAF2();
