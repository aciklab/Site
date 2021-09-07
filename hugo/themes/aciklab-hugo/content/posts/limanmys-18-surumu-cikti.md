---
date: 2021-07-12
linktitle: Liman MYS 1.8 Çekirdek Sürümü Yayınlandı
title: Liman MYS 1.8 Çekirdek Sürümü Yayınlandı
image: ana_ekran.png
---

<style>
h1,h2,h3 {
    width: 100%;
}
h1 {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>

<img class="img-fluid" src="/images/duyurular/ana_ekran.png" alt="Liman MYS 1.8 Sürümü">

# Yeni kullanıcı deneyimi

Liman MYS 1.8 Sürümü
1.8 sürümü ile beraber sizlere sunduğumuz en önemli yenilik güncellenmiş kullanıcı deneyimidir. Yeni kullanıcı deneyimi içerisinde şunları barındırmaktadır.

- Yeni sol menü tasarımı
- Eklentiler yerine sunucu bazlı listeleme
- Sunucular içerisinde arama
- Kolay eklenti kurulumu için yeni eklenti mağazası
- Yeni ana ekran tasarımı
- Yeni modal değişiklikleri
- Tasarımsal değişiklikler
- Yeni tablo dizaynı
- İlk kurulum sihirbazı
- Yeni giriş ekranı

## Sol menü

Yeni sol menü
Yeni sol menü tasarımımız ile birlikte artık Liman'daki kullanım akışı eklentiler -> sunucular akışı yerine sunucular -> eklentiler akışı haline gelmiştir. Sol menüde en son işlem yapılan sunucu sırasına göre listeleme yapılmaktadır ve bu sunucunun üzerine tıklayarak sunucu detayları ve sunucuya eklenmiş eklentiler görüntülenmektedir.

## Tablo

Yeni tablo sistemi
Yeni güncelleme ile birlikte tablolar artık daha kullanıcı dostu! Sağ klik menüsü olan tablolar, tıklanabilir ve seçim yapılabilir tablolar artık daha belirgin çalışmaktadır.

## Arama 

Liman MYS Arama
Yeni arama sistemi ile bulamadığınız kısımlarda kolayca yardım alabileceksiniz! 

# Yeni kurulum sihirbazı

Kurulum Sihirbazı
Yeni kurulum sihirbazımız ile birlikte Liman MYS ilk kurulumunda sistem için dil seçmenizi, yeni bir kullanıcı oluşturmanızı isteyecektir. İlerleyen sürümlerde kurulum sihirbazına yeni adımlar da eklenecektir.

# Kullanıcı deneyimini geliştiren öğeler

Liman'ın önceki sürümlerinde üst üste açılan modallar düzgün görüntülenememekteydi. Bu sürüm ile birlikte bu problem giderilerek hem kapatma düğmesinin düzgün çalışması ve her modalın arka siyah fonunun düzgün görüntülenmesi sağlandı. Modalların ekranın tam ortasında görünmesi sağlanarak kullanım kolaylığı arttırıldı.

Liman'ın önceki sürümlerinde tarihler kullanıcı dostu görüntülenmiyordu. Yeni sürüm ile birlikte WinRM ve diğer sunucularda tarihlerin düzgün görünmesi için düzenlemeler yaptık. Ayrıca yeni kurulum yapan kullanıcılarımız için de yol gösterici tavsiye mesajları eklemesi yaptık.

Liman çekirdek sürümü altyapı olarak kullanıcıların kendi istediği yeni dilleri eklemesine olanak sağlayan bir sistemdir. İsterseniz en.json dosyasını dil_kodu.json olarak kopyalayıp çevirerek sistem üzerine yeni bir dil ekleyebilirsiniz. 

# Yeni eklenti mağazası

Yeni eklenti mağazamız sayesinde tek tıklama ile Liman MYS'ye eklenti kurulumu yapabilirsiniz. Sistem üzerinde portföyümüzde bulunan açık kaynaklı eklentiler ve ücretli olarak kurulumunu gerçekleştirdiğimiz eklentiler mevcuttur.

# Sürüm değişiklikleri listesi

## Büyük yenilikler

- İlk kurulum sihirbazı sisteme eklendi.
- Sistemin %99'una İngilizce desteği eklendi.
- Tüm sistemin dizaynı güncellendi.
- Genel kullanıcı deneyimi geliştirildi.
- Sistemdeki dil seçeneği oturum yerine veritabanına ve ortam değişkenleri dosyasına taşındı.
- YENİ! Eklenti mağazamız sisteme eklendi. Liman bünyesinde geliştirdiğimiz açık kaynaklı ve ücretli tüm eklentilere bir tık kadar yakın olacaksınız.
- Nesne yönelimli eklenti geliştirme eğitimi için yeni eklenti şablonu eklendi.
- Arama özelliği eklendi.
- Yeni ana sayfa düzeni geliştirildi. Sunucu durumları, genel eklentilerden özetler ve Liman sunucusunun durumunun izlenmesi sağlandı.

## Hata düzeltmeleri

- Fontlar klasörü düzeltildi, sistem arayüzünün yeni fontu Inter olarak değiştirildi ve FontAwesome güncellendi.
- Componentler klasörünün ismi kullanıcı dostu olan "components/" olarak değiştirildi.
- Tüm modallar y ekseninde ortalandı.
- Yeni arayüz sistemi için sunucuların tıklandıkça üste çıkması sağlandı.
- Ana sayfadaki grafiklerin çalışmama problemi giderildi.
- Tüm breadcrumb menüleri düzenlendi.
- Tablo componenti düzenlendi, kullanıcı dostu olması için sağ klik menüsü bulunan tablolarda o satıra dair işlem yapılması için üç nokta simgesi eklendi.
- Sistemdeki modalların çalışma biçimi değiştirildi. Bootstrap'ta olmayan üst üste modal desteği geliştirilerek deneyim düzenlendi.
- Üst üste açılan modallarda kapatma tuşuna basınca tüm modalların kapanması çözüldü.
- Üst üste açılan modallarda arkadaki siyah gölgenin çalışma biçimi düzenlendi.
- Karanlık mod düzenlendi.
- Ubuntu 20.04 desteği eklendi.
- Sistem geneli İngilizce çeviri yapıldı. 
- Bildirimler sistemi düzenlendi. İngilizce mesaj desteği eklendi.
- Componentlerdeki bazı buglar çözüldü.
- Sol menünün aktif olan linkleri düzgün göstermeme problemi çözüldü.
- Sistem geneli tüm geçerli olmayan HTML kodları düzenlendi. Geçerli bir düzen getirildi.
- Sunucular için şehir tanımlama zorunluluğu kaldırıldı.
- WinRM uptime problemi çözüldü.
- Eklenti güncelleme, eklenti indirme sistemleri düzenlendi.
- Tüm sistem dokümantasyonları https://docs.liman.dev aktarıldı.
- lsb_release ve lsof paketi bağımlılığı olan sayfalar düzenlendi. lsb_release bağımlılığı kaldırıldı.
- Sol menü eklenti sayısı özelliği kaldırıldı.
- Sol menü sunucu sayısı özelliği ince ayarlar sekmesine eklendi.

