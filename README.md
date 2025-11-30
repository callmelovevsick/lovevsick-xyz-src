# ❤️ LoveVSick.xyz Website Source Code

Chào mừng bạn đến với source code của trang web cá nhân **lovevsick.xyz**!

Trang web này được xây dựng để **chia sẻ** những suy nghĩ, cảm xúc, hoặc đơn giản là một không gian trực tuyến **đơn giản và riêng tư**.

## ✨ Tổng quan

Source code này bao gồm các công nghệ web cơ bản:

* **HTML:** Cấu trúc và nội dung trang.
* **CSS:** Tạo kiểu và giao diện người dùng.
* **JavaScript (JS):** Xử lý tương tác, hiệu ứng động, và logic trang.

### 📁 Cấu trúc thư mục

lovevsick.xyz/ ├── index.html # Trang chính (Home) ├── css/ │ └── style.css # Các quy tắc CSS chính ├── js/ │ └── script.js # Logic JavaScript chính └── README.md # File này


---

## 💻 Công nghệ và Tính năng

### 📑 HTML (`index.html`)

Tạo ra cấu trúc nội dung cơ bản, bao gồm:

* **Header và Footer:** Các phần cố định của trang.
* **Các phần tử Semantic:** Sử dụng các thẻ như `<header>`, `<main>`, `<section>`, và `<footer>` để đảm bảo tính **truy cập (accessibility)** và **SEO** tốt.
* **Tích hợp Font:** Liên kết với các font chữ từ Google Fonts.

> **Ví dụ về một phần tử HTML:**
>
> ```html
> <section id="about" class="container">
>     <h2>Về LoveVSick</h2>
>     <p>Nơi chia sẻ những câu chuyện và cảm xúc của tôi...</p>
> </section>
> ```

---

### 🎨 CSS (`css/style.css`)

Đây là nơi trang web được định hình, tập trung vào:

* **Thiết kế Tối giản (Minimalist Design):** Sử dụng không gian trắng và màu sắc hạn chế để tạo cảm giác **sạch sẽ và dễ đọc**.
* **Thiết kế Đáp ứng (Responsive Design):** Sử dụng **Flexbox** và **Media Queries** để đảm bảo giao diện hiển thị tốt trên mọi thiết bị (máy tính, máy tính bảng, điện thoại).
* **Hiệu ứng Động nhẹ nhàng:** Các hiệu ứng hover và transition đơn giản để tăng trải nghiệm người dùng mà không gây rối.

> **Ví dụ về CSS đáp ứng:**
>
> ```css
> .container {
>     width: 80%;
>     margin: 0 auto;
>     padding: 20px;
> }
> 
> @media (max-width: 768px) {
>     .container {
>         width: 95%; /* Mở rộng trên màn hình nhỏ */
>     }
> }
> ```

---

### 💡 JavaScript (`js/script.js`)

JavaScript chịu trách nhiệm cho các tính năng tương tác:

* **Chuyển đổi Chế độ Tối/Sáng (Dark/Light Mode):** Cho phép người dùng chọn giao diện phù hợp với sở thích của họ.
* **Hiệu ứng Cuộn mượt (Smooth Scrolling):** Khi click vào các liên kết điều hướng, trang sẽ cuộn mượt đến phần tương ứng.
* **Menu Di động (Mobile Menu):** Xử lý việc mở/đóng menu điều hướng trên các thiết bị di động.

> **Ví dụ về logic chuyển đổi chế độ:**
>
> ```javascript
> document.getElementById('theme-toggle').addEventListener('click', function() {
>     document.body.classList.toggle('dark-mode');
>     // Lưu trạng thái vào Local Storage
>     localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
> });
> ```

---

## 🚀 Bắt đầu (Local Setup)

Để xem trang web này chạy trên máy tính của bạn:

1.  **Clone** repository về máy:
    ```bash
    git clone [https://github.com/callmelovevsick/lovevsick-xyz-src.git](https://github.com/callmelovevsick/lovevsick-xyz-src.git)
    ```
2.  **Mở** thư mục đã clone.
3.  **Click đúp** vào file `index.html` trong trình duyệt web của bạn.

---

## 🤝 Đóng góp

Mọi đóng góp (pull requests) đều được hoan nghênh! Nếu bạn có ý tưởng cải tiến, vui lòng:

1.  Fork repository này.
2.  Tạo một branch mới (`git checkout -b feature/AmazingFeature`).
3.  Commit thay đổi của bạn (`git commit -m 'Add some AmazingFeature'`).
4.  Push lên branch (`git push origin feature/AmazingFeature`).
5.  Mở một Pull Request.
