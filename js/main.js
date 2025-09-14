
    const texts = [
        "technology student",
        "adventurer",
        "animal lover"
    ];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText ="I am "+  texts[count];
        letter = currentText.slice(0, ++index);

        document.getElementById('typing-text').textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 1000); // Thời gian chờ giữa các từ
        } else {
            setTimeout(type, 150); // Tốc độ gõ chữ
        }
    }());
//  skđsd
//       document.addEventListener('DOMContentLoaded', function () {
//     const carouselEl = document.getElementById('projectCarousel');
//     const thumbs = document.querySelectorAll('#thumbRow .thumb-btn');

//     // Khi carousel chạy xong 1 slide -> cập nhật highlight thumbnail
//     carouselEl.addEventListener('slid.bs.carousel', function (e) {
//       const idx = e.to; // index slide hiện tại
//       thumbs.forEach((btn, i) => btn.classList.toggle('active', i === idx));
//     });

//     // Khi bấm thumbnail -> Bootstrap sẽ tự chuyển slide nhờ data-bs-slide-to
//     // ta chỉ cập nhật class ngay lập tức cho mượt
//     thumbs.forEach((btn, i) => {
//       btn.addEventListener('click', function () {
//         thumbs.forEach(b => b.classList.remove('active'));
//         this.classList.add('active');
//       });
//     });
//   });

function initializeCarousel(modalId, carouselId, thumbRowId) {
    const modalEl = document.getElementById(modalId);
    const carouselEl = modalEl.querySelector(carouselId);
    const thumbs = modalEl.querySelectorAll(thumbRowId + ' .thumb-btn');

    if (!carouselEl) return; // Dừng nếu không tìm thấy carousel

    // Khi carousel chạy xong 1 slide -> cập nhật highlight thumbnail
    carouselEl.addEventListener('slid.bs.carousel', function (e) {
        const idx = e.to;
        thumbs.forEach((btn, i) => btn.classList.toggle('active', i === idx));
    });

    // Khi bấm thumbnail -> cập nhật class ngay lập tức
    thumbs.forEach(btn => {
        btn.addEventListener('click', function () {
            thumbs.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// document.addEventListener('DOMContentLoaded', function () {
//     // Gọi hàm cho modal đầu tiên
//     initializeCarousel('detailModal-01', '#projectCarousel', '#thumbRow');
    
//     // Gọi hàm cho modal thứ hai
//     initializeCarousel('detailModal-02', '#projectCarousel-02', '#thumbRow-02');
// });
document.addEventListener('DOMContentLoaded', function () {
      // Modal English Club (id = detailModal-03) — thêm dòng này
  initializeCarousel('detailModal-03', '#projectCarousel-03', '#thumbRow-03');
  // Modal Charity Project (id = detailModal)
  initializeCarousel('detailModal', '#projectCarousel', '#thumbRow');

  // Modal Vesak (id = detailModal-02) — dòng này bạn đã có đúng
  initializeCarousel('detailModal-02', '#projectCarousel-02', '#thumbRow-02');


});
