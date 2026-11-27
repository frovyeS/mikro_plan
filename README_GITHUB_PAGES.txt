MIKRO PLAN - ACTIONS GEREKTIRMEYEN GITHUB PAGES YAMASI

BU YAMA NEYI DUZELTIYOR?
- index.html artik src/main.jsx dosyasini JavaScript modulu gibi yuklemiyor.
- React tarayiciya CDN uzerinden geliyor; JSX sayfa acilirken donusturuluyor.
- Vite derlemesi, npm kurulumu ve GitHub Actions gerekli degil.
- Goreli dosya yollari depo alt adreslerinde calisacak sekilde ayarlandi.
- favicon.ico 404 istegi kaldirildi.

UYGULAMA (TERMINAL YOK):
1. ZIP'i bilgisayarinda cikart.
2. ZIP'teki index.html dosyasini GitHub deposunun ANA DIZININDEKI index.html ile degistir.
3. ZIP'teki src/main.jsx ve src/style.css dosyalarini depodaki src klasorune yukle; mevcut dosyalarin uzerine yaz.
4. ZIP'teki .github/workflows/deploy.yml dosyasiyla depodaki ayni dosyayi degistir. Bu, eski otomatik Actions dagitimini durdurur.
5. GitHub deposunda Settings > Pages bolumune gir.
6. Build and deployment > Source alaninda "Deploy from a branch" sec.
7. Branch olarak sitenin dosyalarinin bulundugu dali (genellikle main), klasor olarak "/ (root)" sec ve Save'e bas.
8. Birkaç dakika sonra sayfayi Ctrl+F5 ile yenile.

ONEMLI:
- Dosyalar depo ana dizininde olmali. index.html, package.json ile ayni seviyede; src klasoru de index.html'in yaninda olmalidir.
- ZIP'in kendi ust klasorunu depoya yukleme; ZIP'i cikartip ICINDEKİ dosya ve klasorleri uygun konumlara yukle.
- GitHub Pages ayarinda "/docs" secme; "/ (root)" sec.
- React ve Babel CDN'den yuklenir. Bu nedenle ziyaretcinin tarayicisinda internet baglantisi olmali ve jsdelivr.net erisilebilir olmalidir.
- Onceki Vite yamasindan kalan vite.config.js ve package.json dosyalari depoda kalabilir; bu yontemde kullanilmaz.
