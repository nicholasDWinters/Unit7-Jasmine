
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr, type) {
  let newTd = document.createElement('td');
  newTd.innerText = 'X';
  newTd.addEventListener('click', function (evt) {
    if (type === 'servers') {
      delete allServers[evt.target.parentElement.id];
      evt.target.parentElement.remove();
      updateServerTable();
    } else if (type === 'payments') {
      delete allPayments[evt.target.parentElement.id];
      evt.target.parentElement.remove();
      updateSummary();
    }

  })
  tr.append(newTd);
}
