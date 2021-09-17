'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  const d = b**2 - 4 * a * c;

  if (d === 0) {
    const x = -b / (2 * a);
    arr.push(x);
  }

  if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = null;
  const params = [
    {name: "Процентная ставка", value: percent },
    {name: "Начальный взнос", value: contribution },
    {name: "Общая стоимость", value: amount }
  ];

  for (let param of params) {
    if (checkValidity(param) !== true) {
      return `Параметр "${param.name}" содержит неправильное значение "${param.value}"`;
    }
  }

  const creditSum = +amount - +contribution;
  const now = new Date();
  const months = monthDiff(now, date);
  const p = (+percent / 100) / 12;
  const monthlyPayment = creditSum * (p + p/ (((1 + p)**months) - 1));
  totalAmount = (monthlyPayment * months).toFixed(2);

  return +totalAmount;
}

function checkValidity(param) {
    if (!isFinite(param.value) || param.value === "" || +param.value < 0) {
      return false;
    }
    return true;
}

function monthDiff(date1, date2) {
  let months = (date2.getFullYear() - date1.getFullYear()) * 12;
  months -= date1.getMonth();
  months += date2.getMonth();
  return Math.abs(months);
}
