const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

  const prices = document.querySelectorAll('.prices');
  let sum = 0;

  prices.forEach(p => {
    sum += Number(p.textContent);
  });

  // Remove old answer if exists
  const oldAns = document.querySelector('#ans');
  if (oldAns) oldAns.remove();

  // Create new row
  const row = document.createElement('tr');

  const column = document.createElement('td');
  column.colSpan = 2;

  column.id = "ans";   // ⭐ IMPORTANT (for Cypress test)
  column.textContent = sum;

  row.appendChild(column);

  document.querySelector('table').appendChild(row);
};

getSumBtn.addEventListener("click", getSum);