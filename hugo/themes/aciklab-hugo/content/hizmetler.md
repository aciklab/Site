---
page_title: Hizmetler
title: Hizmetler
menu:
    main:
        identifier: "hizmetler"
        weight: 2
        name: "Hizmetler"
    nav:
        name: "Hizmetler"
        weight: 1
        pre: "fa-check"
        post: "Pardus ve açık kaynaklı yazılımlar üzerine sunduğumuz hizmetlerimizi inceleyin."
    footer:
        name: "Hizmetler"
        parent: diger
        weight: 2
layout: skeleton
---

<section id="chart" class="d-flex  aos-init aos-animate" data-aos="fade-up" style="background-color: rgb(242, 242, 242); border-top: 4px #fff solid;">
    <div class="container py-3">
        <div class="row justify-content-center">
            <img src="/images/hizmetler-cizelgesi.png" data-aos="fade-up" alt="Eğitim Çizelgesi" class="img-fluid">
        </div>
    </div>
</section>
<section class="d-flex aos-init aos-animate" data-aos="fade-up">
    <div class="mt-lg-5 mb-md-0 mt-5 mb-5 mx-auto">
        <div class="container" data-aos="fade-up">
            <div id="liman-hizmet-paketleri" class="row egitim-row mb-5">
                <div class="col-12">
                    <h2 class="mb-3 float-left">Liman Hizmet Paketleri</h2>
                    <button type="button" class="btn btn-primary btn-lg btn-color-low float-right mb-3" data-toggle="modal" data-target="#modalCenter">
                        Hizmet Talep Formu
                    </button>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box" data-toggle="collapse" data-target="#liman-paketi">
                        <i class="fas fa-ship fa-3x mr-3 float-left"></i>
                        <span class="float-left mt-md-2 mt-0" style="font-size: 20px;">
                            <b>Açık Kaynak Liman Paketi</b>
                        </span>
                        <i class="fas fa-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="liman-paketi" data-parent="#liman-hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="fas fa-hourglass-half float-left fa-2x mr-3"></i>
                                    <span class="float-left">5 dakika</span>
                                </div>
                            </div>
                            <div class="card-content p-3 mt-4" style="background-color: rgba(0,0,0,0.05)">
                                <p class="mb-1">Liman açık kaynak paketini ücretsiz bir şekilde DEB paketi aracılığıyla 5 dakika içinde kurabilirsiniz.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box" data-toggle="collapse" data-target="#poc-liman">
                        <i class="fas fa-ship fa-3x mr-3 float-left"></i>
                        <span class="float-left mt-md-2 mt-0" style="font-size: 20px; margin-top: 9px;">
                            <b>Liman Kavram İspatı Kurulumu</b>
                        </span>
                        <i class="fas fa-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="poc-liman" data-parent="#liman-hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="fas fa-hourglass-half float-left fa-2x mr-3"></i>
                                    <span class="float-left">1 gün</span>
                                </div>
                            </div>
                            <div class="card-content p-3 mt-4" style="background-color: rgba(0,0,0,0.05)">
                                <p class="mb-1">Liman çekirdeğini, ilgilendiğiniz eklentilerimizi ve isterseniz kaptan yazılımını kurumunuzdaki ortamı bozmadan PoC (Kavram İspatı) olarak kuruyoruz. Sistem gereksinimleri olarak sizden talep edilen sunucuları temin ettiğinizde bu işlem yaklaşık 1 gün sürmektedir.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box" data-toggle="collapse" data-target="#liman-kurulumu">
                        <i class="fas fa-ship fa-3x mr-3 float-left"></i>
                        <span class="float-left mt-md-2 mt-0" style="font-size: 20px;">
                            <b>Liman Canlı Ortam Kurulumu</b>
                        </span>
                        <i class="fas fa-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="liman-kurulumu" data-parent="#liman-hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="fas fa-hourglass-half float-left fa-2x mr-3"></i>
                                    <span class="float-left">3 gün</span>
                                </div>
                            </div>
                            <div class="card-content p-3 mt-4" style="background-color: rgba(0,0,0,0.05)">
                                <p class="mb-1">Liman çekirdeğini, eklentilerimizi ve kaptan yazılımını kurumunuzdaki canlı ortama cluster mimarisiyle kurulumunu yapıyoruz. Kurumunuzu Liman sistemine taşırken mevcut sistemde bir değişiklik yapmadan geçiş yapabiliyoruz. Gereksinimler tamamlandıktan sonra bu işlem yaklaşık 3 gün sürmektedir.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box" data-toggle="collapse" data-target="#liman-gelistirme">
                        <i class="fas fa-ship fa-3x mr-3 float-left"></i>
                        <span class="float-left mt-md-2 mt-0" style="font-size: 20px; margin-top: 9px;">
                            <b>Liman Ek Geliştirme Hizmeti</b>
                        </span>
                        <i class="fas fa-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="liman-gelistirme" data-parent="#liman-hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="fas fa-hourglass-half float-left fa-2x mr-3"></i>
                                    <span class="float-left">Gereksinimlere bağımlı</span>
                                </div>
                            </div>
                            <div class="card-content p-3 mt-4" style="background-color: rgba(0,0,0,0.05)">
                                <p class="mb-1">Liman yazılımımızda eğer ekstra bir ihtiyacınız oluşursa adam/ay çalışması yapıyor ve size sunuyoruz, onay vermeniz halinde geliştirmelere başlıyoruz. Bu hizmetin süresi ek geliştirmenin içeriğine bağlı olarak değiştiğinden belli bir bitiş süresi bulunmamaktadır. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="acik-hizmet-paketleri" class="row egitim-row mb-5">
                <div class="col-12">
                    <h2 class="mb-3 float-left">Açık Kaynak Hizmet Paketleri</h2>
                    <button type="button" class="btn btn-primary btn-lg btn-color-low float-right mb-3" data-toggle="modal" data-target="#modalCenter">
                        Hizmet Talep Formu
                    </button>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box-uzman" data-toggle="collapse" data-target="#postgresql">
                        <i class="fas fa-database fa-3x mr-3 float-left"></i>
                        <span class="float-left mt-md-2 mt-0" style="font-size: 20px;">
                            <b>PostgreSQL</b>
                        </span>
                        <i class="fas fa-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="postgresql" data-parent="#acik-hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="card-content p-3" style="background-color: rgba(0,0,0,0.05)">
                                <p class="mb-1">Açık Kaynak Kodlu yazılım Postgresql konusunda destek verilmekteyiz. Ayrıca çeşitli uygulamalı eğitimler düzenleyerek yazılım geliştirmenin farklı konuları ve alanları hakkında bilgi ve beceri seviyesini artırmaya çalışıyoruz. Özellikle açık kaynak platformunun en başarılı PostgreSQL Açık Kaynak Kodlu Veritabanı gibi örneklerinin bilinirliğini artırmak ve ekosisteminin gelişimine katkı sağlamak için eğitimler düzenliyoruz.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box-uzman">
                        <i class="fas fa-server fa-3x mr-3 float-left"></i>
                        <span class="float-left mt-md-2 mt-0" style="font-size: 20px; margin-top: 9px;">
                            <b>Openstack</b>
                        </span>
                    </a>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box-uzman">
                        <i class="fas fa-rocket fa-3x mr-3 float-left"></i>
                        <span class="float-left mt-md-2 mt-0" style="font-size: 20px; margin-top: 9px;">
                            <b>Ansible</b>
                        </span>
                    </a>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box-uzman">
                        <i class="fas fa-envelope fa-3x mr-3 float-left"></i>
                        <span class="float-left mt-md-2 mt-0" style="font-size: 20px; margin-top: 9px;">
                            <b>Zimbra</b>
                        </span>
                    </a>
                </div>
            </div>
            <div id="hizmet-paketleri" class="row egitim-row">
                <div class="col-12">
                    <h2 class="mb-3 float-left">Pardus Göç Hizmet Paketleri</h2>
                    <button type="button" class="btn btn-primary btn-lg btn-color-low float-right mb-3" data-toggle="modal" data-target="#modalCenter">
                        Hizmet Talep Formu
                    </button>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box" data-toggle="collapse" data-target="#on-analiz">
                        <i class="fab fa-linux fa-3x ml-1 mr-3 float-left"></i>
                        <span class="float-left mt-md-2 mt-0" style="font-size: 20px;">
                            <b>Pardus Ön Analiz Çalışması</b>
                        </span>
                        <i class="fas fa-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="on-analiz" data-parent="#hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="fas fa-hourglass-half float-left fa-2x mr-3"></i>
                                    <span class="float-left">3 gün kurum içi, 1 gün kurum dışı</span>
                                </div>
                            </div>
                            <div class="card-content p-3 mt-4" style="background-color: rgba(0,0,0,0.05)">
                                <p class="mb-1">Kurumlarda Pardus yaygınlaştırılmasına uygunluk durumunu belirleyebilmek için kuruma özgü yazılım ve donanımların ön analizi yapılmaktadır.</p>
                                <div class="d-flex align-items-center float-left mr-5">
                                    <svg style="width: 48px; height: 48px;" class="d-md-block d-none float-left mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    <span class="float-left">Yazılım ve donanım envanter listesi tamamlanmış ve Pardus göç projesine dahil olmak isteyen kurumlar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box" data-toggle="collapse" data-target="#analiz">
                        <i class="fab fa-linux fa-3x ml-1 mr-3 float-left"></i>
                        <span class="float-left mt-md-2 mt-0" style="font-size: 20px; margin-top: 9px;">
                            <b>Pardus Analiz Çalışması</b>
                        </span>
                        <i class="fas fa-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="analiz" data-parent="#hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="fas fa-hourglass-half float-left fa-2x mr-3"></i>
                                    <span class="float-left">1 ay (kurum ihtiyacına göre süre artabilmektedir)</span>
                                </div>
                            </div>
                            <div class="card-content p-3 mt-4" style="background-color: rgba(0,0,0,0.05)">
                                <p class="mb-1">Kurumda Pardus yaygınlaştırılmasına uygunluk durumunu belirleyebilmek için kuruma özgü yazılım ve donanımların detaylı analizi yapılmaktadır.</p>
                                <div class="d-flex align-items-center float-left mr-5">
                                    <svg style="width: 48px; height: 48px;" class="d-md-block d-none float-left mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    <span class="float-left">Pardus Ön Analiz Çalışması yapılmış, Pardus yaygınlaştırılmasına uygun olan kurumlar.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box" data-toggle="collapse" data-target="#acik-kaynak">
                        <i class="fab fa-linux fa-3x ml-1 mr-3 float-left"></i>
                        <span class="float-left mt-md-2 mt-0" style="font-size: 20px;">
                            <b>Açık Kaynak Yazılım Geliştirme</b>
                        </span>
                        <i class="fas fa-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="acik-kaynak" data-parent="#hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="fas fa-hourglass-half float-left fa-2x mr-3"></i>
                                    <span class="float-left">Proje takvimince belirlenmiş süre</span>
                                </div>
                            </div>
                            <div class="card-content p-3 mt-4" style="background-color: rgba(0,0,0,0.05)">
                                <p class="mb-1">Pardus kullanımına yönelik açık kaynak yazılımların geliştirilmesi, düzenlenmesi veya yeniden oluşturulmasına yönelik proje çalışmalarını içermektedir. Pardus ön analiz ve analiz raporları çıktısı sonucunda projelendirilebilecek özellikler belirlenip çalışma takvimi belirlenecektir.</p>
                                <p class="mb-1">Masaüstü uygulamalar için; C, C++ ve Python gibi programlama dilleri kullanılmaktadır.</p>
                                <p class="mb-1">Tarayıcı uygulamaları için PHP ve Python gibi programlama dilleri başta olmak üzere bir çok dilde geliştirme yapılmaktadır.</p>
                                <div class="d-flex align-items-center float-left mr-5">
                                    <svg style="width: 48px; height: 48px;" class="d-md-block d-none float-left mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    <span class="float-left">Pardus kullanmaya başlayan kurumlar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box" data-toggle="collapse" data-target="#poc-calismasi">
                        <i class="fab fa-linux fa-3x ml-1 mr-3 float-left"></i>
                        <span class="float-left mt-md-2 mt-0" style="font-size: 20px; margin-top: 9px;">
                            <b>Pardus Kavram İspat (PoC) Çalışması</b>
                        </span>
                        <i class="fas fa-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="poc-calismasi" data-parent="#hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="fas fa-hourglass-half float-left fa-2x mr-3"></i>
                                    <span class="float-left">1 ay kurumda çalışma</span>
                                </div>
                            </div>
                            <div class="card-content p-3 mt-4" style="background-color: rgba(0,0,0,0.05)">
                                <p class="mb-1">Kurumda Pardus kullanımına yönelik yaygınlaştırma çalışması öncesinde Sunucu-İstemci mantığı ile çalışabildiği kavram ispat süreci yapılmaktadır.</p>
                                <p class="mb-1">Dizin sunucu<br>DNS ve DHCP sunucu<br>10 Pardus istemci kurulumu</p>
                                <div class="d-flex align-items-center float-left mr-5">
                                    <svg style="width: 48px; height: 48px;" class="d-md-block d-none float-left mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    <span class="float-left">Pardus Analiz çalışması yapılmış, PoC isteyen kurumlar.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box" data-toggle="collapse" data-target="#yayginlastirma">
                        <i class="fab fa-linux fa-3x ml-1 mr-3 float-left"></i>
                        <span class="float-left mt-md-2 mt-0" style="font-size: 20px;">
                            <b>Pardus Yaygınlaştırma Çalışması</b>
                        </span>
                        <i class="fas fa-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="yayginlastirma" data-parent="#hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="fas fa-hourglass-half float-left fa-2x mr-3"></i>
                                    <span class="float-left">1 ay kurumda çalışma</span>
                                </div>
                            </div>
                            <div class="card-content p-3 mt-4" style="background-color: rgba(0,0,0,0.05)">
                                <p class="mb-1">Bu paket aşağıdakileri içermektedir:<br> Tek Lokasyon<br> Kuruma özgü preseed veya clone imajların oluşturulması<br> İmajın 100 bilgisayar üzerinde yaygınlaştırılması</p>
                                <div class="d-flex align-items-center float-left mr-5">
                                    <svg style="width: 48px; height: 48px;" class="d-md-block d-none float-left mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    <span class="float-left">Pardus Analiz çalışması yapılmış, yaygınlaştırma yapmaya hazır istemcilerin bulunduğu kurumlar.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLongTitle">Hizmet Talep Formu</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="container" id="ff-compose"></div>
            <style>
            #ff-compose small {
                display: none;
            }
            </style>
            <script type="text/javascript">
            function ready(callback) {
                if (document.readyState != 'loading') callback();
                else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
                else document.attachEvent('onreadystatechange', function(){
                    if (document.readyState == 'complete') callback();
                });
            }
            function callback() {
                ready(function() {
                    convert();
                    const render = formFacade.render;
                    formFacade.render = function() {
                        render.apply(this, arguments);
                        convert();
                    }
                })
            }
            function convert() {
                $("#ff-compose .ff-item").each(function(_, el) {
                    const text = $(el).find("label").clone()
                        .children()
                        .remove()
                        .end()
                        .text().trim();
                    $(el).find("input,textarea").attr("placeholder", text);
                    $(el).find("input,textarea").after("<hr />");
                });
            }
            </script>
            <script async defer src="https://formfacade.com/include/112609387266663882077/form/1FAIpQLSfNxTR9C7FF7L0W2eaftRmd4hr0krwSCgD3tzRScg4Nh1ZUyA/bootstrap.js?div=ff-compose&callback=callback"></script>
        </div>
      </div>
    </div>
</div>