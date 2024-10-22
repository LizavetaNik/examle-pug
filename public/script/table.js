document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      customerName: "Ronald Richards",
      company: "Adobe",
      phoneNumber: "(302) 555-0107",
      email: "john@example.com",
      country: "USA",
      status: "Active",
    },
    {
      customerName: "Ronald Richards",
      company: "Adobe",
      phoneNumber: "(302) 555-0107",
      email: "john@example.com",
      country: "USA",
      status: "Inactive",
    },
    {
      customerName: "Ronald Richards",
      company: "Adobe",
      phoneNumber: "(302) 555-0107",
      email: "john@example.com",
      country: "USA",
      status: "Inactive",
    },
    {
      customerName: "Ronald Richards",
      company: "Adobe",
      phoneNumber: "(302) 555-0107",
      email: "john@example.com",
      country: "USA",
      status: "Active",
    },
    {
      customerName: "Ronald Richards",
      company: "Adobe",
      phoneNumber: "(302) 555-0107",
      email: "john@example.com",
      country: "USA",
      status: "Active",
    },
    {
      customerName: "Ronald Richards",
      company: "Adobe",
      phoneNumber: "(302) 555-0107",
      email: "john@example.com",
      country: "USA",
      status: "Active",
    },
    {
      customerName: "Ronald Richards",
      company: "Adobe",
      phoneNumber: "(302) 555-0107",
      email: "john@example.com",
      country: "USA",
      status: "Inactive",
    },
    {
      customerName: "Ronald Richards",
      company: "Adobe",
      phoneNumber: "(302) 555-0107",
      email: "john@example.com",
      country: "USA",
      status: "Active",
    },
    {
      customerName: "Ronald Richards",
      company: "Adobe",
      phoneNumber: "(302) 555-0107",
      email: "john@example.com",
      country: "USA",
      status: "Active",
    },
  ];

  const customersBody = document.getElementById("customers-body");
  customersBody.innerHTML = "";

  if (!Array.isArray(data)) {
    console.error("Received data is not an array:", data);
    return;
  }

  data.forEach((customer) => {
    customersBody.appendChild(createCustomerRow(customer));
  });
});

// create tr
function createCustomerRow(customer) {
  const row = document.createElement("tr");

  row.appendChild(createCell(customer.customerName));
  row.appendChild(createCell(customer.company));
  row.appendChild(createCell(customer.phoneNumber));
  row.appendChild(createCell(customer.email));
  row.appendChild(createCell(customer.country));
  row.appendChild(createStatusCell(customer.status));

  return row;
}

// normal cell
function createCell(text) {
  const cell = document.createElement("td");
  cell.textContent = text;
  cell.style.color = "black";
  return cell;
}

// cell with button
function createStatusCell(status) {
  const cell = document.createElement("td");
  const button = document.createElement("button");
  button.classList.add("status-btn", status.toLowerCase());
  button.textContent = status;

  cell.appendChild(button);
  return cell;
}
