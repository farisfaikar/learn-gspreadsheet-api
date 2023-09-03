// Make the API call
fetch('https://script.google.com/macros/s/AKfycbyldJNJkezuTPh7Njnv4947Pa-Ke6Nz9rJz9XNYgvUjUb7GclaFDbR-FFJ_p_7AFYtRQQ/exec?action=read&sheet=students')
.then(response => response.json())
.then(dataObj => {
    console.log(dataObj);
    // Handle the API response and display it in a table on the webpage
    const outputDiv = document.getElementById('output');

    // Create a table element
    const table = document.createElement('table');

    // Iterate through the data and create table rows
    for (let i = 0; i < dataObj['data'].length; i++) {
        const rowData = dataObj['data'][i];
        const row = document.createElement('tr');

        // Populate the table cells with data
        for (const key in rowData) {
            const cell = document.createElement('td');
            cell.textContent = rowData[key];
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    // Append the table to the output div
    outputDiv.appendChild(table);
})
.catch(error => {
    console.error('Error fetching data:', error);
});
