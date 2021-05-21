---
page_title: Liman'ın Mimarisi
title: Liman'ın Mimarisi
layout: skeleton
menu:
  nav:
    name: "Liman'ın Mimarisi"
    weight: 2
    pre: "fa-sitemap"
    post: "Liman MYS kabiliyetleri politika ve eklenti başlıklarıyla değerlendirilir."
---

<section id="content" class="d-flex">
    <div class="container-fluid">
        <div class="row" data-aos="fade-up">
            <div class="container p-5">
                <div class="row">
                    <div class="col-12">
                        <h2>Liman'ın Mimarisi</h2>
                        <p>Liman Merkezi Yönetim Sistemi adından anlaşılacağı üzere sunucuları, istemcileri ve
                            kullanıcıları uzaktan merkezi olarak mevcut dizin yapınızdaki Grup Politika Objeleri
                            (GPO) ve geliştirdiğimiz politikalar ile yönetmenizi sağlar.</p>
                        <a class="venobox"
                            href="https://liman.havelsan.com.tr/images/liman-mys-yapisi-sema.png">
                            <img src="https://liman.havelsan.com.tr/images/liman-mys-yapisi-sema.png"
                                class="img-fluid" />
                            <div class="img-caption p-3 mb-5">Liman'ın mimari yapısı için tıklayın...<i
                                    class="fa fa-search-plus float-right"></i></div>
                        </a>
                        <p>Liman MYS ile kullanımda olan dizinlerin (Samba, Aktif Dizin) entegrasyonu hizmetler
                            kesintiye uğramadan sağlanmaktadır. Liman MYS'nin bileşenleri: Liman, Kaptan, Tayfa
                            olarak üçe ayrılmıştır. Bu bileşenler, Liman MYS'nin kararlı ve güvenli olarak
                            çalışmasını sağlar.</p>
                    </div>
                </div>
            </div>
        </div>
        {{% trial-banner %}}
        <div class="row" data-aos="fade-up">
            <div class="container p-5">
                <div class="row">
                    <div class="col-12">
                        <h2>Liman</h2>
                        <p>Liman, Kaptan sunucusunu yönetir. Grup Politika Objesi (GPO) oluşturma, silme,
                            politika ekleme işlemleri Liman tarafından yapılır. Linux politikaları
                            oluşturmak için Aktif dizin veya Samba Dizin üzerindeki politika objeleri
                            kullanılır. Geliştirdiğimiz politikalar Grup Politikası Objeleri içerisine
                            eklenir. Windows ve Linux politikaları farklı şekilde tanımlanır.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row gray">
            <div class="container p-5">
                <div class="col-12">
                    <div class="row d-flex flex-lg-row flex-column align-items-start text-center text-lg-left"
                        data-aos="zoom-in">
                        <div class="col-12 col-lg-2">
                            <img src="/images/captain-reverse.svg" class="img-fluid" />
                        </div>
                        <div class="col-12 col-lg-10 d-flex flex-column">
                            <h2>Kaptan</h2>
                            <p>İstemcileri yöneten, gerekli politikaları belirleyip istemcilere gönderen
                                sunucudur.</p>
                            <p class="font-weight-bold">Kaptan‘ın görevleri aşağıda belirtilmiştir:</p>
                            <ul>
                                <li>Aktif dizin, Samba gibi domain yöneticileri üzerinde organizasyon
                                    ünitelerini de göz önüne alarak sorgulama yapıp kullanıcı ve istemci
                                    politikalarını listeleme.</li>
                                <li>Aktif dizin, Samba gibi domain yöneticilerinden gerekeli politikaların
                                    güncellenip güncellenmediğini kontrol etme, politikaları yükleme.</li>
                                <li>İstemci ajanlarına politikaları gönderme.</li>
                                <li>İstemcilerden (Tayfa) politika loglarını toplama.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-100 hr my-5"></div>
                    <div class="row d-flex flex-lg-row flex-column align-items-start text-center text-lg-left"
                        data-aos="zoom-in">
                        <div class="col-12 col-lg-2">
                            <img src="/images/crew.svg" class="img-fluid" />
                        </div>
                        <div class="col-12 col-lg-10 d-flex flex-column">
                            <h2>Tayfa</h2>
                            <p>GNU/Linux istemcilerde kurulu politika ajanıdır. İstemci üzerinde kullanıcı
                                ve makina politikalarını indirip uygulamakla yükümlüdür.</p>
                            <p class="font-weight-bold">Tayfa‘nın görevleri aşağıda belirtilmiştir:</p>
                            <ul>
                                <li>Kaptan sunucusu üzerinden gerekli politikaları indirme.</li>
                                <li>Politikaların doğruluğunu kontrol etme.</li>
                                <li>Politikaları uygulama.</li>
                                <li>Politika sonuçlarını kontrol edip logları kaptan sunucusuna gönderme.
                                </li>
                                <li>Tayfa eklentilerini Kaptan üzerinden sorgulamak ve indirmek.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row info reverse">
            <div class="container p-5">
                <div class="row" data-aos="zoom-in">
                    <div class="col-12 col-lg-2 text-center text-lg-left">
                        <img src="/images/captain-reverse.svg" class="img-fluid" />
                    </div>
                    <div
                        class="col-12 justify-content-end col-lg-7 d-flex flex-column  text-center text-lg-left mt-3 mt-lg-0">
                        <h2>Bu bilgi dikkatinizi çekebilir?</h2>
                        <p>Liman'ın politikaları ve eklentileri hakkında detaylı bilgi için bu bağlantıyı
                            kullanabilirsiniz.</p>
                    </div>
                    <div class="col-12 col-lg-3 align-self-end text-center text-lg-left mt-3 mt-lg-0">
                        <a href="{{< relref "politikalar-ve-eklentiler.md" >}}" class="btn btn-secondary btn-lg">Politikalar ve Eklentiler</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
