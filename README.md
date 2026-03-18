# 🧾 Inventory API (RESTful API + Docker + CI/CD)

## 📌 Deskripsi Project

Project ini merupakan implementasi **RESTful API sederhana** untuk mengelola data inventory barang. API ini dibangun menggunakan **Node.js (Express)** dan dirancang mengikuti standar REST, serta telah terintegrasi dengan:

* 🐳 Docker (containerization)
* 🔁 Git Workflow (feature branch & conventional commits)
* 🤖 GitHub Actions (CI/CD)
* 🧪 Unit Testing (Jest & Supertest)
* 🔐 Security Scan (npm audit)

API ini mendukung operasi **CRUD (Create, Read, Update, Delete)** dengan format response JSON standar.

---

## 🛠️ Teknologi yang Digunakan

* Node.js
* Express.js
* Jest (Unit Testing)
* Supertest (API Testing)
* Docker
* Git & GitHub
* GitHub Actions (CI/CD)

---

## 📂 Struktur Project

```
inventory-api/
│
├── src/
│   ├── app.js
│   ├── server.js
│   ├── routes/
│   └── controllers/
│
├── tests/
├── .github/workflows/ci.yml
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Cara Menjalankan Aplikasi

### 🔹 Menggunakan Docker (Recommended)

```bash
docker compose up --build
```

### 🔹 Tanpa Docker (Local)

```bash
npm install
npm run dev
```

---

## 🌐 Informasi Port

| Keterangan | Port |
| ---------- | ---- |
| Host       | 3000 |
| Container  | 3000 |

Akses API di:

```
http://localhost:3000
```

---

## 📡 Endpoint API

### 🔹 1. GET /items

Mengambil semua data barang

### 🔹 2. GET /items/:id

Mengambil data barang berdasarkan ID

### 🔹 3. POST /items

Menambahkan data barang

### 🔹 4. PUT /items/:id

Mengupdate data barang

### 🔹 5. DELETE /items/:id

Menghapus data barang

---

## 📦 Contoh Request & Response

### ✅ Success Response

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "nama": "Laptop",
    "stok": 10,
    "harga": 15000000
  }
}
```

### ❌ Error Response

```json
{
  "status": "error",
  "message": "Item tidak ditemukan"
}
```

---

## 🧪 Unit Testing

Testing dilakukan menggunakan Jest dan Supertest.

Jalankan test:

```bash
npm test
```

---

## 🐳 Docker Configuration

### Dockerfile

Menggunakan:

* WORKDIR
* COPY
* RUN
* CMD

### docker-compose.yml

Digunakan untuk menjalankan container dengan perintah:

```bash
docker compose up --build
```

---

## 🔀 Git Workflow

Project ini menggunakan **Feature Branch Workflow**:

* `main` → branch utama (production)
* `develop` → integrasi fitur
* `feature/*` → pengembangan fitur

### ✏️ Conventional Commits

Contoh:

```
feat: add CRUD items API
test: add unit testing
ci: add GitHub Actions workflow
fix: resolve CI error
```

---

## 🤖 CI/CD (GitHub Actions)

Workflow berada di:

```
.github/workflows/ci.yml
```

### 🔹 Proses yang dijalankan:

1. Install dependencies (`npm ci`)
2. Run unit testing (`npm test`)
3. Security scan (`npm audit`)

### 🔹 Trigger:

* Push
* Pull Request

---

## 🔐 Security Scan

Menggunakan:

```bash
npm audit --audit-level=high
```

Untuk memastikan tidak ada vulnerability dengan tingkat tinggi.

---

## 📊 Status CI/CD

CI/CD berjalan otomatis menggunakan GitHub Actions setiap ada perubahan pada repository.

---

## 📌 Catatan

* Data disimpan sementara (in-memory), tidak menggunakan database.
* `node_modules` tidak disertakan dalam repository (sesuai best practice).
* API dirancang sederhana untuk keperluan pembelajaran.

---

## 🎯 Kesimpulan

Project ini berhasil mengimplementasikan:

* RESTful API standar
* Docker containerization
* Git workflow profesional
* CI/CD automation
* Unit testing & security scan

Sehingga memenuhi seluruh requirement tugas Proyek Perangkat Lunak 1.
