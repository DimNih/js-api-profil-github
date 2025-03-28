# JS API Profil GitHub

Proyek ini adalah implementasi API untuk mengambil profil pengguna GitHub menggunakan JavaScript.

## Fitur

- Mengambil data profil pengguna GitHub
- Menampilkan informasi dasar seperti nama, username, dan jumlah repositori
- Menampilkan daftar repositori publik pengguna

## Penggunaan

1. Masukkan username GitHub di input yang tersedia.
2. Klik tombol "Cari".
3. Informasi profil pengguna akan ditampilkan di halaman.

## Importan!!
isi ke file css

```bash
/* Global Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to right, #4e54c8, #8f94fb);
    color: #fff;
  }
  
  .container {
    text-align: center;
    background: #fff;
    color: #333;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    width: 360px;
    animation: fadeIn 0.5s ease-in-out;
  }
  
  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .input-field {
    padding: 12px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 6px;
    outline: none;
    transition: 0.3s;
  }
  
  .input-field:focus {
    border-color: #4e54c8;
    box-shadow: 0 0 8px rgba(78, 84, 200, 0.5);
  }
  
  .btn {
    padding: 12px;
    font-size: 16px;
    background: #4e54c8;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .btn:hover {
    background: #383b87;
  }
  
  .error {
    margin-top: 15px;
    font-size: 14px;
    color: #ff4d4d;
  }
  
  /* Profil Styles */
  .profile-card {
    margin-top: 20px;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
  }
  
  .profile-card:hover {
    transform: translateY(-5px);
  }
  
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 10px auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  .profile-name {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .profile-bio {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
  }
  
  .profile-link {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 12px;
    background: #4e54c8;
    color: #fff;
    border-radius: 6px;
    text-decoration: none;
    transition: 0.3s;
  }
  
  .profile-link:hover {
    background: #383b87;
  }
  
  /* Skeleton Loader */
  .skeleton {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }
  
  .skeleton-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(90deg, #ddd, #eee, #ddd);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  
  .skeleton-text {
    width: 80%;
    height: 16px;
    background: linear-gradient(90deg, #ddd, #eee, #ddd);
    background-size: 200% 100%;
    border-radius: 4px;
    animation: shimmer 1.5s infinite;
  }
  
  .skeleton-text.short {
    width: 50%;
  }
  
  .hidden {
    display: none;
  }
  
  /* Animations */
  @keyframes shimmer {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: 200px 0;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .container {
      width: 100%;
      padding: 15px;
    }
  
    .title {
      font-size: 24px;
    }
  
    .input-field,
    .btn {
      font-size: 14px;
      padding: 10px;
    }
  
    .profile-name {
      font-size: 18px;
    }
  
    .profile-bio {
      font-size: 12px;
    }
  
    .profile-link {
      font-size: 14px;
      padding: 6px 10px;
    }
  }
  
```
