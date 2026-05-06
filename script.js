const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {


  const prices = document.querySelectorAll('.prices');

  let sum = 0;

  prices.forEach(p => {
    sum += Number(p.textContent);
  });


  const row = document.createElement('tr');


  const column1 = document.createElement('td');

  // column.colSpan = 2; // span across table
  column1.textContent = "Total: " ;
  // const column2 = document.createElement('td');
  // column2.textContent = sum;
  row.appendChild(column1);
	// row.appendChild(column2);

  const table = document.querySelector('table');
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);