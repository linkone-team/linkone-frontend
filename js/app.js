function addCollection() {
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:8081/api/v1/collection/add";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      window.location.href = 'dashboard.html';
      console.log("Response received: ", xhr.responseText);
    }
  };
  var walletId = document.getElementById("wallet-id").value;
  var data = JSON.stringify({"slug": walletId});
  xhr.send(data);
}
