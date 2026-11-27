# Mikro Plan — MVP

Tarayıcıda çalışan basit mekânsal planlama prototipi. React + Vite.

## Çalıştırma

```bash
npm install
npm run dev
```

## MVP özellikleri
- Parametrik dikdörtgen mekân (cm), alan hesabı
- Grid/snap seçenekleri, ölçek görünümü
- Obje kütüphanesi, yerleştirme, sürükleme, rotasyon ve ölçü düzenleme
- Kapı/pencere sembolleri (planlama gösterimi)
- Yerel autosave, JSON import/export, SVG plan export
- Undo/redo, 2D görünüm ve stilize 3D yerleşim önizlemesi
- Responsive arayüz, açık/koyu tema

## Sınırlamalar
Bu prototip mimari/CAD veya BIM uygulaması değildir. Duvar çizimi ve kapı/pencere sembolleri, 3D önizleme, alan ve plan exportları temel prototip düzeyindedir. Statik, mevzuat, elektrik, tesisat, erişilebilirlik veya yapı güvenliği doğrulaması yapmaz. SVG export temel plan öğelerini içerir; kapı/pencere sembolleri ve ölçülendirme gibi öğelerin export kapsamı sınırlıdır. Bu teslimde gerçek CAD topolojisi, 3D mesh tabanlı motor, gelişmiş ölçülendirme, PDF export, çok kat, DXF/IFC ve kapsamlı testler bulunmaz.

## GitHub
Dosyaları yeni bir GitHub deposuna yükleyin. `node_modules` eklenmez; `.gitignore` ile dışarıda tutulur.
