function fetchAndPopulateTable() {
  fetch('http://localhost:8081/api/v1/collection/get/all')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      populateTable(data);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

function populateTable(data) {
  const table = document.getElementById('table');

  data.forEach(item => {
    let row = table.insertRow();

    let cellName = row.insertCell();
    cellName.innerHTML = `https://linkwallet.io/<a target="_blank">${item.slug}</a>`;

    let cellCopy = row.insertCell();
    cellCopy.innerHTML = '<i class="fa-solid fa-copy"></i>';
    cellCopy.style.cursor = 'pointer';
    cellCopy.onclick = () => copyToClipboard("https://linkwallet.io/" + item.slug);

    let cellEdit = row.insertCell();
    cellEdit.innerHTML = '<i class="fas fa-pen-to-square"></i>';
    cellEdit.style.cursor = 'pointer';
    // Add edit functionality here

    let cellDelete = row.insertCell();
    cellDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
    cellDelete.style.cursor = 'pointer';
    // Add delete functionality here
  });
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Text copied to clipboard');
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
}

// Call the function to populate the table
fetchAndPopulateTable();
