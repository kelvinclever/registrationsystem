document.addEventListener('DOMContentLoaded', function() {
  //get read buttom


// Get form and table elements
const userForm = document.getElementById("userForm");
const userTable = document.getElementById("userTable");

// Add event listener to the form
userForm.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const name = document.getElementById("name").value;
  const idNumber = document.getElementById("idNumber").value;
  const country = document.getElementById("country").value;
  const languages = document.getElementById("languages").value;

  // Create a new row for the user
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${idNumber}</td>
    <td>${country}</td>
    <td>${languages}</td>
  `;

  // Append the new row to the table
  userTable.appendChild(newRow);

  // Reset the form
  userForm.reset();
})

userTable.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-btn")) {
    const row = event.target.closest("tr"); // Find the closest <tr> element
    row.remove(); // Remove the row from the table
  }
});
});