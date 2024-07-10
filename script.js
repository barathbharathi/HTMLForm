
        document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const pincode = document.getElementById('pincode').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            
            // Get selected food choices
            const foodChoices = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(checkbox => checkbox.value);
            if (foodChoices.length < 2) {
                alert('Please select at least two food options.');
                return;
            }

            const address = document.getElementById('address').value;
            const state = document.getElementById('state').value;
            const country = document.getElementById('country').value;

            // Create a new row
            const newRow = document.createElement('tr');
            
            // Create cells
            const firstNameCell = document.createElement('td');
            firstNameCell.textContent = firstName;
            const lastNameCell = document.createElement('td');
            lastNameCell.textContent = lastName;
            const emailCell = document.createElement('td');
            emailCell.textContent = email;
            const pincodeCell = document.createElement('td');
            pincodeCell.textContent = pincode;
            const genderCell = document.createElement('td');
            genderCell.textContent = gender;
            const foodCell = document.createElement('td');
            foodCell.textContent = foodChoices.join(', ');
            const addressCell = document.createElement('td');
            addressCell.textContent = address;
            const stateCell = document.createElement('td');
            stateCell.textContent = state;
            const countryCell = document.createElement('td');
            countryCell.textContent = country;
            
            // Append cells to the row
            newRow.appendChild(firstNameCell);
            newRow.appendChild(lastNameCell);
            newRow.appendChild(emailCell);
            newRow.appendChild(pincodeCell);
            newRow.appendChild(genderCell);
            newRow.appendChild(foodCell);
            newRow.appendChild(addressCell);
            newRow.appendChild(stateCell);
            newRow.appendChild(countryCell);
            
            // Append row to the table
            document.querySelector('#detailsTable tbody').appendChild(newRow);
            
            // Clear the form
            document.getElementById('form').reset();
        });