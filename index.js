// Global variable to store user data
let userData = [];

// Add User to the Table
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  let name = document.getElementById("name").value;
  let idNumber = document.getElementById("idNumber").value;
  let country = document.getElementById("country").value;
  let languages = document.getElementById("languages").value;

  // Create user object
  let user = {
    name: name,
    idNumber: idNumber,
    country: country,
    languages: languages
  };

  // Add user to the data array
  userData.push(user);

  // Render the user table
  renderUserTable();

  // Reset form
  document.getElementById("userForm").reset();
});

// Delete User
function deleteUser(index) {
  // Remove user from the data array
  userData.splice(index, 1);

  // Render the user table
  renderUserTable();
}

// Edit User
function editUser(cell, rowIndex, columnIndex) {
  let input = document.createElement("input");
  input.type = "text";
  input.value = cell.innerHTML;
  cell.innerHTML = "";
  cell.appendChild(input);
  input.focus();

  input.addEventListener("blur", function() {
    cell.innerHTML = input.value;
    userData[rowIndex][getColumnHeader(columnIndex)] = input.value;
  });
}

// Render User Table
function renderUserTable() {
  let table = document.getElementById("userTable");

  // Clear existing table rows
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // Add users from the data array to the table
  for (let i = 0; i < userData.length; i++) {
    let user = userData[i];

    // Create a new row in the table
    let newRow = table.insertRow(table.rows.length);

    // Insert cells into the new row
    let nameCell = newRow.insertCell(0);
    let idNumberCell = newRow.insertCell(1);
    let countryCell = newRow.insertCell(2);
    let languagesCell = newRow.insertCell(3);
    let deleteCell = newRow.insertCell(4);

    // Set cell values
    nameCell.innerHTML = user.name;
    idNumberCell.innerHTML = user.idNumber;
    countryCell.innerHTML = user.country;
    languagesCell.innerHTML = user.languages;
    deleteCell.innerHTML = '<button class="delete-btn" onclick="deleteUser(' + i + ')">Delete</button>';

    // Enable editing in each cell
    nameCell.addEventListener("click", function() {
      editUser(this, this.parentNode.rowIndex - 1, this.cellIndex);
    });

    idNumberCell.addEventListener("click", function() {
      editUser(this, this.parentNode.rowIndex - 1, this.cellIndex);
    });

    countryCell.addEventListener("click", function() {
      editUser(this, this.parentNode.rowIndex - 1, this.cellIndex);
    });

    languagesCell.addEventListener("click", function() {
      editUser(this, this.parentNode.rowIndex - 1, this.cellIndex);
    });
  }
}

// Hide/View Table
document.getElementById("read").addEventListener("click", function() {
  let table = document.getElementById("userTable");
  if (table.style.display === "none") {
    table.style.display = "table";
    this.innerHTML = "Hide";
  } else {
    table.style.display = "none";
    this.innerHTML = "View";
  }})

// Search User
document.getElementById("searchUser").addEventListener("input", function() {
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchUser");
  filter = input.value.toUpperCase();
  table = document.getElementById("userTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows and hide those that don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0]; // Assuming the name is in the first column
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});
