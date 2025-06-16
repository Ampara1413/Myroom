document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");
  const searchInput = document.getElementById("searchInput");

  searchButton.addEventListener("click", function () {
    const keyword = searchInput.value.trim();
    if (keyword) {
      alert("คุณค้นหาคำว่า: " + keyword);
    } else {
      alert("กรุณากรอกคำค้นหาก่อน");
    }
  });
});

function search() {
  const keyword = document.getElementById('searchInput').value.toLowerCase().trim();
  const names = document.querySelectorAll('.Name');

  names.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(keyword)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  const names = document.querySelectorAll('.Name');
  names.forEach(item => {
    item.style.display = "block";
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('searchInput');
  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      search();
    }
  });
});