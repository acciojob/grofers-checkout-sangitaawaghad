const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {


  const prices = document.querySelectorAll('.price');

  let sum = 0;

  prices.forEach(p => {
    sum += Number(p.textContent);
  });


  const row = document.createElement('tr');


  const column = document.createElement('td');

  column.colSpan = 2; // span across table
  column.textContent = "Total: " + sum;

  row.appendChild(column);

  const table = document.querySelector('table');
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);