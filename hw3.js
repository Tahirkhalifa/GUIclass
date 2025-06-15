document.getElementById("tableForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const minCol = parseInt(document.getElementById("minCol").value);
  const maxCol = parseInt(document.getElementById("maxCol").value);
  const minRow = parseInt(document.getElementById("minRow").value);
  const maxRow = parseInt(document.getElementById("maxRow").value);
  const errorElem = document.getElementById("error");

  // Validation
  if (isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow)) {
    errorElem.textContent = "Please enter all values.";
    return;
  }

  if (
    minCol > maxCol ||
    minRow > maxRow ||
    minCol < -50 ||
    maxCol > 50 ||
    minRow < -50 ||
    maxRow > 50
  ) {
    errorElem.textContent = "Invalid range. Values must be between -50 and 50, and min ≤ max.";
    return;
  }

  errorElem.textContent = ""; // Clear error
  generateTable(minCol, maxCol, minRow, maxRow);
});

function generateTable(minCol, maxCol, minRow, maxRow) {
  const table = document.getElementById("multiplicationTable");
  table.innerHTML = "";

  const headerRow = document.createElement("tr");
  const corner = document.createElement("th");
  headerRow.appendChild(corner);

  for (let col = minCol; col <= maxCol; col++) {
    const th = document.createElement("th");
    th.textContent = col;
    headerRow.appendChild(th);
  }

  table.appendChild(headerRow);

  for (let row = minRow; row <= maxRow; row++) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = row;
    tr.appendChild(th);

    for (let col = minCol; col <= maxCol; col++) {
      const td = document.createElement("td");
      td.textContent = row * col;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}
