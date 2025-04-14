// Belirli aralıklarla yeni balonlar oluştur
function startBalloons() {
    // İlk balonları hemen oluştur
    for (let i = 0; i < 8; i++) {
        setTimeout(() => createBalloon(), i * 300);
    }
    
    // Sürekli olarak yeni balonlar oluştur
    setInterval(() => {
        const balloonCount = Math.floor(Math.random() * 2) + 1; // 1-2 balon
        for (let i = 0; i < balloonCount; i++) {
            setTimeout(() => createBalloon(), i * 200);
        }
    }, 1200); // Her 1.2 saniyede yeni balonlar
}

// GERİ SAYIM SAYACI İÇİN KOD
// Hedef tarih: 3 Mayıs 2025, saat 20:00 (Türkiye saati)
const countDownDate = new Date("May 3, 2025 20:00:00 GMT+0300").getTime();

// Her saniyede bir geri sayımı güncelle
const countdownTimer = setInterval(function() {
    // Şimdiki tarih/saat bilgisini al
    const now = new Date().getTime();
    
    // Hedef tarih ile şimdi arasındaki farkı hesapla
    const distance = countDownDate - now;
    
    // Gün, saat, dakika ve saniye hesaplamaları
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Sayıları iki basamaklı göster (01, 02, vs.)
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    
    // Eğer geri sayım biterse
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        
        // Alternatif mesaj göster
        document.querySelector(".countdown-title").innerText = "Nişanımız Başladı!";
    }
}, 1000);

// Ekran boyutu değiştiğinde balonları yeniden düzenle
window.addEventListener('resize', function() {
    // Mevcut balonları temizle
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        if (document.querySelector('.main-section').contains(balloon)) {
            document.querySelector('.main-section').removeChild(balloon);
        }
    });
    
    // Yeni balonlar oluştur
    for (let i = 0; i < 8; i++) {
        setTimeout(() => createBalloon(), i * 200);
    }
});// Sayfa içi kaydırma fonksiyonu
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Sayfa yüklendiğinde tüm anchor bağlantılarını düzenle
document.addEventListener('DOMContentLoaded', function() {
    // Tüm anchor bağlantılarını seç
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    // Her birine smooth scroll fonksiyonu ekle
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId);
        });
    });
    
    // TAKVİM ENTEGRASYONU İÇİN KOD
    // Etkinlik detayları
    const eventTitle = "Arzu & Soner Nişan Töreni";
    const eventDescription = "Nişan törenimize katılmanızdan mutluluk duyarız";
    const eventLocation = "Ünüvar Music Lounge & Restaurant, https://maps.app.goo.gl/XBRLzjgkRJnrd2JAA";
    
    // Etkinlik başlangıç ve bitiş tarihleri (3 Mayıs 2025, 20:00 - 00:00)
    const startDate = new Date("2025-05-03T20:00:00+03:00");
    const endDate = new Date("2025-05-04T00:00:00+03:00");
    
    // Format tarihleri
    const formatDate = (date) => {
        return date.toISOString().replace(/-|:|\.\d+/g, '');
    };
    
    // Google Calendar
    const googleCalendarLink = document.getElementById('google-calendar');
    const googleUrl = new URL('https://calendar.google.com/calendar/render');
    googleUrl.searchParams.append('action', 'TEMPLATE');
    googleUrl.searchParams.append('text', eventTitle);
    googleUrl.searchParams.append('dates', `${formatDate(startDate)}/${formatDate(endDate)}`);
    googleUrl.searchParams.append('details', eventDescription);
    googleUrl.searchParams.append('location', eventLocation);
    googleUrl.searchParams.append('sf', 'true');
    googleUrl.searchParams.append('output', 'xml');
    googleCalendarLink.href = googleUrl.toString();
    
    // Outlook Calendar
    const outlookCalendarLink = document.getElementById('outlook-calendar');
    const outlookUrl = new URL('https://outlook.live.com/calendar/0/deeplink/compose');
    outlookUrl.searchParams.append('subject', eventTitle);
    outlookUrl.searchParams.append('startdt', startDate.toISOString());
    outlookUrl.searchParams.append('enddt', endDate.toISOString());
    outlookUrl.searchParams.append('body', eventDescription);
    outlookUrl.searchParams.append('location', eventLocation);
    outlookUrl.searchParams.append('path', '/calendar/action/compose');
    outlookUrl.searchParams.append('rru', 'addevent');
    outlookCalendarLink.href = outlookUrl.toString();
    
    // Apple Calendar (iCalendar formatı) - İndirilebilir ICS dosyası için
    const appleCalendarLink = document.getElementById('apple-calendar');
    
    // iCalendar formatında veri oluşturma
    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        `SUMMARY:${eventTitle}`,
        `DTSTART:${formatDate(startDate)}`,
        `DTEND:${formatDate(endDate)}`,
        `DESCRIPTION:${eventDescription}`,
        `LOCATION:${eventLocation}`,
        'STATUS:CONFIRMED',
        'SEQUENCE:0',
        'BEGIN:VALARM',
        'TRIGGER:-PT1H',
        'ACTION:DISPLAY',
        'DESCRIPTION:Hatırlatma',
        'END:VALARM',
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n');
    
    // Apple Calendar - Data URL kullanarak ICS dosyasını oluştur
    const appleUrl = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(icsContent);
    appleCalendarLink.href = appleUrl;
    appleCalendarLink.setAttribute('download', 'arzu-soner-nisan-toreni.ics');
    
    // Balonları başlat
    startBalloons();
});

// BALONLAR İÇİN KOD
// Balon renklerini Twitter doğum günü renklerine benzetme
function getRandomColor() {
    const colors = [
        '#1DA1F2', // Twitter Mavi
        '#E0245E', // Twitter Pembe
        '#17BF63', // Twitter Yeşil
        '#794BC4', // Twitter Mor
        '#FFAD1F', // Twitter Sarı
        '#F45D22'  // Twitter Turuncu
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Balon oluşturma fonksiyonu
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    // Balon boyutu hafif değişken olsun
    const size = Math.floor(Math.random() * 20) + 40; // 40-60px arası
    
    // Balon içeriğini oluştur
    const balloonHTML = `
        <div class="balloon-wrapper">
            <div class="balloon-body" style="width: ${size}px; height: ${Math.floor(size * 1.25)}px; background-color: ${getRandomColor()}">
                <div class="balloon-reflection"></div>
                <div class="balloon-knot"></div>
            </div>
            <div class="balloon-string"></div>
        </div>
    `;
    
    balloon.innerHTML = balloonHTML;
    
    // Rastgele başlangıç pozisyonu (genişlik boyunca)
    const posX = Math.floor(Math.random() * (window.innerWidth - size));
    balloon.style.left = `${posX}px`;
    
    // Balonu ekranın altına yerleştir
    balloon.style.bottom = '-150px';
    
    // Tıklama olayını balonun kendisine ekle
    balloon.addEventListener('click', function() {
        popBalloon(balloon);
    });
    
    // Mobil için dokunma olayı
    balloon.addEventListener('touchstart', function(e) {
        e.preventDefault();
        popBalloon(balloon);
    });
    
    document.querySelector('.main-section').appendChild(balloon);
    
    // Rastgele yükselme hızı
    const speed = Math.random() * 1.5 + 1.0; // 1.0-2.5 arası
    
    // Hafif sallanma için rastgele değerler
    const wobbleAmount = Math.random() * 30 - 15; // -15 ile 15 arası
    const wobbleSpeed = Math.random() * 2 + 1; // 1-3 arası
    
    // Balonun yüksekliğini ve başlangıç konumunu takip et
    let currentBottom = -150;
    let popped = false;
    
    function animateBalloon() {
        if (popped) return;
        
        // Yukarı hareket
        currentBottom += speed;
        
        // Yandan hafif sallanma
        const wobbleX = Math.sin(currentBottom * 0.01 * wobbleSpeed) * wobbleAmount;
        
        // Konumu ayarla
        balloon.style.bottom = `${currentBottom}px`;
        balloon.style.transform = `translateX(${wobbleX}px)`;
        
        // Ekranın üstüne ulaştı mı kontrol et
        if (currentBottom > window.innerHeight) {
            popBalloon(balloon);
            return;
        }
        
        // Animasyonu devam ettir
        requestAnimationFrame(animateBalloon);
    }
    
    // Animasyonu başlat
    requestAnimationFrame(animateBalloon);
}

// Balon patlatma fonksiyonu
function popBalloon(balloon) {
    const balloonBody = balloon.querySelector('.balloon-body');
    const balloonString = balloon.querySelector('.balloon-string');
    
    if (balloonBody && !balloon.dataset.popped) {
        // Patlamış işareti koy
        balloon.dataset.popped = "true";
        
        // Patlatma efekti
        balloonString.style.display = 'none';
        balloonBody.style.animation = 'popAnimation 0.4s forwards';
        
        // Konfeti efekti ekle
        createConfetti(balloon.getBoundingClientRect());
        
        // Animasyon tamamlandıktan sonra kaldır
        setTimeout(() => {
            if (document.querySelector('.main-section').contains(balloon)) {
                document.querySelector('.main-section').removeChild(balloon);
            }
        }, 400);
    }
}

// Konfeti oluşturma fonksiyonu
function createConfetti(position) {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#1A535C', '#FF9A8B', '#D4F0F0'];
    const confettiCount = 20; // Oluşturulacak konfeti sayısı
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Rastgele renk ve boyut
        const size = Math.random() * 6 + 4;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = color;
        
        // Rastgele şekil (kare, daire veya üçgen)
        const shape = Math.floor(Math.random() * 3);
        if (shape === 0) {
            confetti.style.borderRadius = '50%'; // Daire
        } else if (shape === 1) {
            confetti.style.borderRadius = '0'; // Kare
        } else {
            confetti.style.width = '0';
            confetti.style.height = '0';
            confetti.style.backgroundColor = 'transparent';
            confetti.style.borderLeft = `${size/2}px solid transparent`;
            confetti.style.borderRight = `${size/2}px solid transparent`;
            confetti.style.borderBottom = `${size}px solid ${color}`;
        }
        
        // Konumu ayarla (balonun patladığı yerin etrafında)
        confetti.style.left = `${position.left + position.width/2 + (Math.random() * 40 - 20)}px`;
        confetti.style.top = `${position.top + position.height/2 + (Math.random() * 40 - 20)}px`;
        
        // Animasyon ayarları
        const animDuration = Math.random() * 1 + 0.5; // 0.5 - 1.5 saniye
        confetti.style.animation = `confettiFall ${animDuration}s ease-out forwards`;
        
        // Rastgele başlangıç gecikmesi
        confetti.style.animationDelay = `${Math.random() * 0.2}s`;
        
        // DOM'a ekle
        document.body.appendChild(confetti);
        
        // Animasyon bittiğinde kaldır
        setTimeout(() => {
            if (document.body.contains(confetti)) {
                document.body.removeChild(confetti);
            }
        }, animDuration * 1000 + 200);
    }
}