# Arzu & Soner Nişan Davetiyesi

Bu proje, Arzu ve Soner çiftinin nişan davetiyesi için interaktif bir web sayfasıdır.

## Özellikler

- Uçuşan ve tıklandığında patlayan renkli balonlar
- Nişan gününe kadar geri sayım sayacı
- Nişan yeri, adresi ve Google Maps üzerinden konum bilgileri
- Google, Outlook ve Apple takvimleri için hızlı entegrasyon butonları
- Tamamen (umarım) mobil uyumlu responsive design

## Dosyalar

Proje üç ana dosyadan oluşmaktadır:

- `index.html`: Ana HTML yapısı
- `styles.css`: Tüm stil ve tasarım öğeleri
- `script.js`: Animasyonlar, geri sayım ve takvim entegrasyonu

## Kurulum

1. Bu repoyu GitHub'dan klonlayın veya ZIP olarak indirin
2. İhtiyacınız varsa bir web sunucusuna yükleyin
3. Tarayıcınızdan `index.html` dosyasını açın

## Özelleştirme

### Tarih Değiştirme

Davetiye tarihini değiştirmek için `script.js` dosyasında şu satırı güncelleyin:

```javascript
const countDownDate = new Date("May 3, 2025 20:00:00 GMT+0300").getTime();
```

### Renk Şeması

Ana renk şemasını değiştirmek için `styles.css` dosyasında `#d48a9b` rengini istediğiniz renk koduyla değiştirin.

## Katkıda Bulunanlar

- Arzu ve Soner

## Lisans

Yok lisans falan