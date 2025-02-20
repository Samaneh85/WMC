function isPrime(num) {
  if (!Number.isInteger(num) || num < 2) {
    return { text: "Ungültiger Wert", isError: true };
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return { text: "Keine Primzahl", isError: false };
    }
  }
  return { text: "Primzahl", isError: false };
}

function checkPrime() {
  let input = document.getElementById("numberInput").value.trim();
  let number = Number(input); // Sicherstellen, dass es eine Zahl ist

  console.log("Eingegebene Zahl:", number); // Debugging

  let result = isPrime(number);
  let resultElement = document.getElementById("result");

  resultElement.innerText = result.text;
  resultElement.className = result.isError ? "error" : "";
}
