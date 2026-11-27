# Mikro Plan

Tarayıcıda çalışan mekânsal planlama prototipi. React + Vite ile hazırlanmıştır.

## GitHub Pages üzerinden yayınlama (terminal kullanmadan)

Bu depo, GitHub Actions ile siteyi otomatik derleyip GitHub Pages'e yayımlar. Bilgisayarına Node.js kurman veya terminal açman gerekmez.

1. Bu klasörün **içindeki dosyaları** GitHub deponun ana dizinine yükle. `package.json`, `index.html`, `src/`, `vite.config.js` ve `.github/` aynı seviyede olmalı.
2. GitHub deposunda **Settings → Pages** bölümünü aç.
3. **Build and deployment → Source** alanında **GitHub Actions** seç.
4. Dosyaları kaydet/Commit et. İş akışı, deponun varsayılan dalını kendisi algılar; dal adını elle değiştirmen gerekmez.
5. GitHub **Actions** sekmesinde “Deploy Mikro Plan to GitHub Pages” iş akışının tamamlanmasını bekle.
6. İş akışı başarılı olduğunda **Settings → Pages** bölümünde yayın adresin görünür. Varsayılan dala yaptığın sonraki güncellemelerde site otomatik yeniden yayımlanır.

> Önemli: Yalnızca kaynak dosyaları GitHub'a yüklemek siteyi tek başına yayımlamaz. GitHub Actions, Vite projesini `dist/` klasörüne derler ve bu klasörü Pages'e gönderir. `dist/` klasörünü elle oluşturup yüklemek gerekmez.

## Yerel geliştirme (isteğe bağlı)

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

## Veri saklama

Otomatik kayıt tarayıcının `localStorage` alanında, kullanılan cihaz ve tarayıcıda tutulur. Farklı cihazlar arasında otomatik senkronizasyon yapılmaz. Projeyi taşımak için JSON dışa/içe aktarma özelliğini kullan.

## Sınırlamalar

Bu prototip mimari/CAD veya BIM uygulaması değildir. Duvar çizimi ve kapı/pencere sembolleri, 3D önizleme, alan ve plan exportları temel prototip düzeyindedir. Statik, mevzuat, elektrik, tesisat, erişilebilirlik veya yapı güvenliği doğrulaması yapmaz. SVG export temel plan öğelerini içerir; kapı/pencere sembolleri ve ölçülendirme gibi öğelerin export kapsamı sınırlıdır. Bu teslimde gerçek CAD topolojisi, gelişmiş ölçülendirme, PDF export, çok kat, DXF/IFC ve kapsamlı testler bulunmaz.
