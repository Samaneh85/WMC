function parseMatrix(text) {
  return text
    .trim()
    .split("\n")
    .map(row => row.trim().split(/\s+/).map(Number));
}

function displayMatrix(matrix, containerId) {
  let html = "<table><tbody>";
  matrix.forEach(row => {
    html += "<tr>" + row.map(val => `<td>${val}</td>`).join("") + "</tr>";
  });
  html += "</tbody></table>";
  document.getElementById(containerId).innerHTML = html;
}

function addMatrices(a, b) {
  if (a.length !== b.length || a[0].length !== b[0].length) {
    alert("Für Addition müssen die Matrizen dieselbe Größe haben.");
    return null;
  }

  return a.map((row, i) =>
    row.map((val, j) => val + b[i][j])
  );
}

function multiplyMatrices(a, b) {
  if (a[0].length !== b.length) {
    alert("Für Multiplikation: Spalten von A müssen gleich Zeilen von B sein.");
    return null;
  }

  const result = [];
  for (let i = 0; i < a.length; i++) {
    result[i] = [];
    for (let j = 0; j < b[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < a[0].length; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

function performOperation() {
  const matrixAText = document.getElementById("matrixA").value;
  const matrixBText = document.getElementById("matrixB").value;
  const operation = document.getElementById("operation").value;

  const matrixA = parseMatrix(matrixAText);
  const matrixB = parseMatrix(matrixBText);

  let result;
  if (operation === "add") {
    result = addMatrices(matrixA, matrixB);
  } else if (operation === "multiply") {
    result = multiplyMatrices(matrixA, matrixB);
  }

  if (result) {
    displayMatrix(result, "output");
  } else {
    document.getElementById("output").innerHTML = "";
  }
}
