document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('searchInput');
  const nameList = document.querySelectorAll('.Name');

  searchInput.addEventListener('input', function () {
    const filter = this.value.toLowerCase().trim();
    const searchWords = filter.split(/\s+/);

    nameList.forEach(item => {
      const text = item.textContent.toLowerCase();
      const isMatch = searchWords.every(word => text.includes(word));
      item.style.display = isMatch ? 'block' : 'none';
    });
  });
});

 const colors = [
    "#a8dadc", // ฟ้าอ่อน
    "#f1faee", // ขาวครีม
    "#ffe5d9", // ส้มอ่อน
    "#cce3de", // เขียวอ่อน
    "#f0efeb"  // เทาอ่อน
  ];
  let index = 0;

  function changeColor() {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }

  setInterval(changeColor, 2500); // เปลี่ยนสีทุก 2.5 วินาที
  changeColor(); // เรียกตอนโหลดหน้า