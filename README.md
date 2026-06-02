# Folder img/

Tempatkan file gambar Anda di sini.

## Struktur yang disarankan:

```
img/
├── hero/
│   └── hero-bg.jpg          # Background hero (1920×1080 px)
│
├── views/
│   ├── view-1.jpg            # Air terjun utama
│   ├── view-2.jpg            # Jalur hutan
│   ├── view-3.jpg            # Kolam alami
│   ├── view-4.jpg            # Sunrise
│   └── view-5.jpg            # Senja
│
├── facilities/
│   ├── facility-parking.jpg
│   ├── facility-warung.jpg
│   ├── facility-toilet.jpg
│   ├── facility-locker.jpg
│   ├── facility-photospot.jpg
│   └── facility-locker.jpg
│
└── reviewers/
    ├── reviewer-1.jpg
    ├── reviewer-2.jpg
    ├── reviewer-3.jpg
    ├── reviewer-4.jpg
    └── reviewer-5.jpg
```

## Cara menggunakan gambar:

Setelah menambahkan gambar, ganti background gradient di slide dengan:

```html
<div
  class="slide-img"
  style="background-image: url('../img/views/view-1.jpg'); background-size: cover; background-position: center;"
></div>
```

Atau untuk `<img>` tag langsung:

```html
<img src="img/views/view-1.jpg" alt="Air Terjun Tegenungan" />
```

## Tips:

- Format: JPG atau WebP untuk foto
- Resolusi hero: minimal 1920×1080
- Resolusi card: minimal 800×600
