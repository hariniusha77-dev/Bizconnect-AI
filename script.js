let customers = JSON.parse(localStorage.getItem('customers')) || [];

function displayCustomers() {
  let list = document.getElementById('customerList');
  if (!list) return;
  list.innerHTML = '';

  customers.forEach(function(c) {
    list.innerHTML += `<div class="card" style="margin-top:10px;">
      <b>${c.name}</b> - ${c.phone}
    </div>`;
  });
}

function addCustomer() {
  let name = document.getElementById('custName').value;
  let phone = document.getElementById('custPhone').value;

  if (name == '' || phone == '') {
    alert('Name and Phone podu papu');
    return;
  }

  customers.push({ name: name, phone: phone });
  localStorage.setItem('customers', JSON.stringify(customers));

  document.getElementById('custName').value = '';
  document.getElementById('custPhone').value = '';

  displayCustomers();
}

// Page load aagum podhu list kaatu
displayCustomers();
let bar = document.getElementById('barChart');
if (bar) {
  new Chart(bar, {
    type: 'bar',
    data: {
      labels: ['Customers', 'Leads', 'Follow-Ups'],
      datasets: [{
        label: 'Count',
        data: [customers.length, customers.length, 1],
        backgroundColor: ['#0095ff', '#00c853', '#ff9800']
      }]
    }
  });
}

let pie = document.getElementById('pieChart');
if (pie) {
  new Chart(pie, {
    type: 'pie',
    data: {
      labels: ['Customers', 'Leads', 'Follow-Ups'],
      datasets: [{
        data: [customers.length, customers.length, 1],
        backgroundColor: ['#0095ff', '#00c853', '#ff9800']
      }]
    }
  });
}