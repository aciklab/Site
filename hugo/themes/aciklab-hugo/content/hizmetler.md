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
layout: skeleton
---

<section class="d-flex aos-init aos-animate" data-aos="fade-up">
    <div class="mt-lg-3 mb-md-0 mt-3 mb-5 mx-auto">
        <div class="container" data-aos="fade-up">
            <div class="mb-5 text-center">
                <h1>Hizmetler</h1>
            </div>
            <div id="liman-hizmet-paketleri" class="row egitim-row mb-5">
                <div class="col-12">
                    <h2 class="mb-3 float-left">Liman Hizmet Paketleri</h2>
                    <button type="button" class="btn btn-primary btn-lg btn-color-low float-right mb-3" data-toggle="modal" data-target="#modalCenter">
                        Hizmet Talep Formu
                    </button>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box" data-toggle="collapse" data-target="#liman-paketi">
                        <span class="float-left mt-md-2 mt-0 mb-2 ml-2" style="font-size: 20px;">
                            <b>Açık Kaynak Liman Paketi</b>
                        </span>
                        <i class="feather-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="liman-paketi" data-parent="#liman-hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="feather-clock float-left fa-2x mr-3"></i>
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
                        <span class="float-left mt-md-2 mt-0 mb-2 ml-2" style="font-size: 20px; margin-top: 9px;">
                            <b>Liman Kavram İspatı Kurulumu</b>
                        </span>
                        <i class="feather-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="poc-liman" data-parent="#liman-hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="feather-clock float-left fa-2x mr-3"></i>
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
                        <span class="float-left mt-md-2 mt-0 mb-2 ml-2" style="font-size: 20px;">
                            <b>Liman Canlı Ortam Kurulumu</b>
                        </span>
                        <i class="feather-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="liman-kurulumu" data-parent="#liman-hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="feather-clock float-left fa-2x mr-3"></i>
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
                        <span class="float-left mt-md-2 mt-0 mb-2 ml-2" style="font-size: 20px; margin-top: 9px;">
                            <b>Liman Ek Geliştirme Hizmeti</b>
                        </span>
                        <i class="feather-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="liman-gelistirme" data-parent="#liman-hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="feather-clock float-left fa-2x mr-3"></i>
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
                        <span class="float-left mt-md-2 mt-0 mb-2 ml-2" style="font-size: 20px;">
                            <b>PostgreSQL</b>
                        </span>
                        <i class="feather-chevron-down fa-lg mr-3 float-right mt-3"></i>
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
                        <span class="float-left mt-md-2 mt-0 mb-2 ml-2" style="font-size: 20px; margin-top: 9px;">
                            <b>Openstack</b>
                        </span>
                    </a>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box-uzman">
                        <span class="float-left mt-md-2 mt-0 mb-2 ml-2" style="font-size: 20px; margin-top: 9px;">
                            <b>Ansible</b>
                        </span>
                    </a>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box-uzman">
                        <span class="float-left mt-md-2 mt-0 mb-2 ml-2" style="font-size: 20px; margin-top: 9px;">
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
                        <span class="float-left mt-md-2 mt-0 mb-2 ml-2" style="font-size: 20px;">
                            <b>Pardus Ön Analiz Çalışması</b>
                        </span>
                        <i class="feather-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="on-analiz" data-parent="#hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="feather-clock float-left fa-2x mr-3"></i>
                                    <span class="float-left">3 gün kurum içi, 1 gün kurum dışı</span>
                                </div>
                            </div>
                            <div class="card-content p-3 mt-4" style="background-color: rgba(0,0,0,0.05)">
                                <p class="mb-1">Kurumlarda Pardus yaygınlaştırılmasına uygunluk durumunu belirleyebilmek için kuruma özgü yazılım ve donanımların ön analizi yapılmaktadır.</p>
                                <div class="d-flex align-items-center float-left mr-5">
                                    <i class="feather-users fa-2x mr-3 my-2"></i>
                                    <span class="float-left">Yazılım ve donanım envanter listesi tamamlanmış ve Pardus göç projesine dahil olmak isteyen kurumlar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box" data-toggle="collapse" data-target="#analiz">
                        <span class="float-left mt-md-2 mt-0 mb-2 ml-2" style="font-size: 20px; margin-top: 9px;">
                            <b>Pardus Analiz Çalışması</b>
                        </span>
                        <i class="feather-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="analiz" data-parent="#hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="feather-clock float-left fa-2x mr-3"></i>
                                    <span class="float-left">1 ay (kurum ihtiyacına göre süre artabilmektedir)</span>
                                </div>
                            </div>
                            <div class="card-content p-3 mt-4" style="background-color: rgba(0,0,0,0.05)">
                                <p class="mb-1">Kurumda Pardus yaygınlaştırılmasına uygunluk durumunu belirleyebilmek için kuruma özgü yazılım ve donanımların detaylı analizi yapılmaktadır.</p>
                                <div class="d-flex align-items-center float-left mr-5">
                                    <i class="feather-users fa-2x mr-3 my-2"></i>
                                    <span class="float-left">Pardus Ön Analiz Çalışması yapılmış, Pardus yaygınlaştırılmasına uygun olan kurumlar.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box" data-toggle="collapse" data-target="#acik-kaynak">
                        <span class="float-left mt-md-2 mt-0 mb-2 ml-2" style="font-size: 20px;">
                            <b>Açık Kaynak Yazılım Geliştirme</b>
                        </span>
                        <i class="feather-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="acik-kaynak" data-parent="#hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="feather-clock float-left fa-2x mr-3"></i>
                                    <span class="float-left">Proje takvimince belirlenmiş süre</span>
                                </div>
                            </div>
                            <div class="card-content p-3 mt-4" style="background-color: rgba(0,0,0,0.05)">
                                <p class="mb-1">Pardus kullanımına yönelik açık kaynak yazılımların geliştirilmesi, düzenlenmesi veya yeniden oluşturulmasına yönelik proje çalışmalarını içermektedir. Pardus ön analiz ve analiz raporları çıktısı sonucunda projelendirilebilecek özellikler belirlenip çalışma takvimi belirlenecektir.</p>
                                <p class="mb-1">Masaüstü uygulamalar için; C, C++ ve Python gibi programlama dilleri kullanılmaktadır.</p>
                                <p class="mb-1">Tarayıcı uygulamaları için PHP ve Python gibi programlama dilleri başta olmak üzere bir çok dilde geliştirme yapılmaktadır.</p>
                                <div class="d-flex align-items-center float-left mr-5">
                                    <i class="feather-users fa-2x mr-3 my-2"></i>
                                    <span class="float-left">Pardus kullanmaya başlayan kurumlar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box" data-toggle="collapse" data-target="#poc-calismasi">
                        <span class="float-left mt-md-2 mt-0 mb-2 ml-2" style="font-size: 20px; margin-top: 9px;">
                            <b>Pardus Kavram İspat (PoC) Çalışması</b>
                        </span>
                        <i class="feather-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="poc-calismasi" data-parent="#hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="feather-clock float-left fa-2x mr-3"></i>
                                    <span class="float-left">1 ay kurumda çalışma</span>
                                </div>
                            </div>
                            <div class="card-content p-3 mt-4" style="background-color: rgba(0,0,0,0.05)">
                                <p class="mb-1">Kurumda Pardus kullanımına yönelik yaygınlaştırma çalışması öncesinde Sunucu-İstemci mantığı ile çalışabildiği kavram ispat süreci yapılmaktadır.</p>
                                <p class="mb-1">Dizin sunucu<br>DNS ve DHCP sunucu<br>10 Pardus istemci kurulumu</p>
                                <div class="d-flex align-items-center float-left mr-5">
                                    <i class="feather-users fa-2x mr-3 my-2"></i>
                                    <span class="float-left">Pardus Analiz çalışması yapılmış, PoC isteyen kurumlar.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <a href="#" class="collapsed d-block w-100 p-2 float-left mb-3 egitim-box" data-toggle="collapse" data-target="#yayginlastirma">
                        <span class="float-left mt-md-2 mt-0 mb-2 ml-2" style="font-size: 20px;">
                            <b>Pardus Yaygınlaştırma Çalışması</b>
                        </span>
                        <i class="feather-chevron-down fa-lg mr-3 float-right mt-3"></i>
                    </a>
                    <div class="collapse float-left w-100" style="margin-top:-1rem!important" id="yayginlastirma" data-parent="#hizmet-paketleri">
                        <div class="card card-body mb-3">
                            <div class="information-bar d-flex flex-md-row flex-column">
                                <div class="d-flex align-items-center float-left mr-5 mb-md-0 mb-3">
                                    <i class="feather-clock float-left fa-2x mr-3"></i>
                                    <span class="float-left">1 ay kurumda çalışma</span>
                                </div>
                            </div>
                            <div class="card-content p-3 mt-4" style="background-color: rgba(0,0,0,0.05)">
                                <p class="mb-1">Bu paket aşağıdakileri içermektedir:<br> Tek Lokasyon<br> Kuruma özgü preseed veya clone imajların oluşturulması<br> İmajın 100 bilgisayar üzerinde yaygınlaştırılması</p>
                                <div class="d-flex align-items-center float-left mr-5">
                                    <i class="feather-users fa-2x mr-3 my-2"></i>
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
            <style>
        .form-group > label {
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            color: rgba(0,0,0, 0.7);
        }
        .form-control {
            border-bottom: 2px rgba(0,0,0,0.2) solid;
        }
    </style>
    <div id="uyari"></div>
    <form id="contact" action method="post">
        <div class="form-group">
            <label for="kurum-adi">Kurum Adı</label>
            <input name="kurum-adi" type="text" class="form-control" id="kurum-adi">
        </div>
        <div class="form-group">
            <label for="name">İletişim kurulacak kişinin adı ve soyadı</label>
            <input name="name" type="text" class="form-control" id="name">
        </div>
        <div class="form-group">
            <label for="email">E-posta adresi</label>
            <input name="email" type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
            <label for="adres">Kurum adresi</label>
            <input name="adres" type="text" class="form-control" id="adres">
        </div>
        <div class="form-group">
            <label for="telefon">Telefon</label>
            <input name="telefon" type="text" class="form-control" id="telefon">
        </div>
        <div class="form-group">
            <label for="aciklama">Mesaj</label>
            <textarea class="form-control" id="aciklama" name="aciklama" rows="3"></textarea>
        </div>
        <button type="submit" id="contactButton" class="btn btn-primary btn-color-low">Gönder</button>
    </form>
        </div>
      </div>
    </div>
</div>