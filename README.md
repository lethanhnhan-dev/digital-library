### Thực tập cơ sở chuyên ngành

> # Đề tài **Triển khai trang web quản lý thư viện số**
>
> Thời gian hoàn thành: khoảng 1 tháng

============================================================================

## Feature (Normal User)

-   Tìm ebook, tài liệu.
-   Download ebook, tài liệu.
-

## Usage

### ES Modules in Node

Project này sử dụng ECMAScript Modules ở phía Backend. Hãy chắc chắn rằng bạn đã cài đặt NodeJs v14.6 hoặc cao hơn.

Vì thế, khi import một file JS nào đó (không phải package), hãy chắc chắn rằng bạn đã thêm .js khi import, nếu không bạn sẽ bị lỗi "module not found".

### ENV Variables
Tạo một file có tên .env ở thư mục gốc và thêm vào đó những dòng lệnh sau

```
NODE_ENV = development
PORT = 60000
MONGO_URI_ADMIN = đường dẫn mongoUri của bạn
JWT_SECRET = 'abc123'
```

## Install Dependencies
```
npm install
cd frontend
npm install
```

## Run 

```
# Run frontend (:3000) & backend (:6000)
npm run dev

# Run backend only
npm run server
```

```
Sample User Login

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```