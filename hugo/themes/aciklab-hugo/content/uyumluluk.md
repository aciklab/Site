---
page_title: Uyumluluk
title: Uyumluluk
menu:
    footer:
        name: "Uyumluluk"
        parent: diger
        weight: 5
layout: skeleton
---

<section id="content">
   <div class="container">
      <div class="row egitim-row">
         <div class="col-12 mt-2 mb-4">
            <h2 class="mb-4 float-left">Uyumluluk</h2>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary btn-lg btn-color-low float-right mb-3" data-toggle="modal" data-target="#modalCenter">
               Uyumluluk Test Talebi
            </button>
      </div>
      </div>
   </div>
<div class="container">
    <div class="row" data-aos="fade-up">
        <ul class="nav nav-pills mb-4 w-100" id="tab" role="tablist">
            <li class="p-0 col-6 pr-2">
                <a class="tab-button active float-left w-100 text-center" id="yazilimlar-tab" data-toggle="pill" href="#yazilimlar" role="tab" aria-controls="yazilimlar" aria-selected="true">Yazılımlar</a>
            </li>
            <li class="p-0 col-6 pl-2">
                <a class="tab-button float-left w-100 text-center" id="donanimlar-tab" data-toggle="pill" href="#donanimlar" role="tab" aria-controls="donanimlar" aria-selected="false">Donanımlar</a>
            </li>
        </ul>
        <div class="tab-content w-100" id="tabContent">
            <div class="tab-pane fade show active" id="yazilimlar" role="tabpanel" aria-labelledby="yazilimlar-tab">
                <ul class="nav nav-pills mb-5" id="pills-tab" role="tablist">
                    <li class="p-0 col-4 pr-2">
                      <a class="tab-button active float-left w-100 text-center" data-toggle="pill" href="#hvl-urun" role="tab" aria-selected="true">HAVELSAN Ürünleri</a>
                    </li>
                    <li class="p-0 col-4 pl-2 pr-2">
                      <a class="tab-button float-left w-100 text-center" data-toggle="pill" href="#yerli-urun" role="tab" aria-selected="false">Yerli Ürünler</a>
                    </li>
                    <li class="p-0 col-4 pl-2">
                      <a class="tab-button float-left w-100 text-center" data-toggle="pill" href="#yabanci-urun" role="tab" aria-selected="false">Yabancı Ürünler</a>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="hvl-urun" role="tabpanel">
                        <table id="table1" class="display dataTable table table-striped table-bordered" style="width: 100%;" role="grid" aria-describedby="example_info">
                            <thead>
                               <tr role="row">
                                  <th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-sort="ascending" aria-label="İSİM: activate to sort column descending" style="width: 143px;">İSİM</th>
                                  <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="TÜRÜ: activate to sort column ascending" style="width: 61px;">TÜRÜ</th>
                                  <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="PLATFORM: activate to sort column ascending" style="width: 271px;">PLATFORM</th>
                                  <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="SÜRÜMÜ: activate to sort column ascending" style="width: 93px;">SÜRÜMÜ</th>
                                  <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="GÜNCELLEME TARİHİ: activate to sort column ascending" style="width: 199px;">GÜNCELLEME TARİHİ</th>
                                  <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="UYUMLULUK: activate to sort column ascending" style="width: 127px;">UYUMLULUK</th>
                               </tr>
                            </thead>
                            <tbody>
                               <tr role="row" class="odd">
                                  <td class="sorting_1">Havelsan Evreka</td>
                                  <td>EBYS</td>
                                  <td>Web İstemci</td>
                                  <td>-</td>
                                  <td>31.12.2018</td>
                                  <td class="uyumlu">Uyumlu</td>
                               </tr>
                               <tr role="row" class="even">
                                  <td class="sorting_1">Havelsan Evreka</td>
                                  <td>EBYS</td>
                                  <td>Masaüstü Servis</td>
                                  <td>-</td>
                                  <td>31.12.2018</td>
                                  <td class="uyumlu">Uyumlu</td>
                               </tr>
                               <tr role="row" class="odd">
                                  <td class="sorting_1">HVL Bariyer</td>
                                  <td>DLP</td>
                                  <td>Masaüstü Servis</td>
                                  <td>-</td>
                                  <td>05.06.2018</td>
                                  <td class="uyumlu">Uyumlu</td>
                               </tr>
                               <tr role="row" class="even">
                                  <td class="sorting_1">KAŞİF-J</td>
                                  <td>CBS</td>
                                  <td>Masaüstü Servis ve Uygulama</td>
                                  <td>-</td>
                                  <td>21.02.2019</td>
                                  <td class="uyumlu">Uyumlu</td>
                               </tr>
                               <tr role="row" class="odd">
                                  <td class="sorting_1">KAŞİF-S</td>
                                  <td>CBS</td>
                                  <td>Harita Sunucusu</td>
                                  <td>-</td>
                                  <td>21.02.2019</td>
                                  <td class="uyumlu">Uyumlu</td>
                               </tr>
                               <tr role="row" class="even">
                                  <td class="sorting_1">KAŞİF-W</td>
                                  <td>CBS</td>
                                  <td>Web İstemci</td>
                                  <td>-</td>
                                  <td>21.02.2019</td>
                                  <td class="uyumlu">Uyumlu</td>
                               </tr>
                            </tbody>
                            <tfoot>
                               <tr>
                                  <th rowspan="1" colspan="1">İSİM</th>
                                  <th rowspan="1" colspan="1">TÜRÜ</th>
                                  <th rowspan="1" colspan="1">PLATFORM</th>
                                  <th rowspan="1" colspan="1">SÜRÜMÜ</th>
                                  <th rowspan="1" colspan="1">GÜNCELLEME TARİHİ</th>
                                  <th rowspan="1" colspan="1">UYUMLULUK</th>
                               </tr>
                            </tfoot>
                         </table>
                    </div>
                    <div class="tab-pane fade" id="yerli-urun" role="tabpanel">
                        <table id="table3" class="display dataTable table table-striped table-bordered" style="width: 100%;" role="grid" aria-describedby="example2_info">
                            <thead>
                               <tr role="row">
                                  <th class="sorting_asc" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="İSİM: activate to sort column descending" style="width: 0px;">İSİM</th>
                                  <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="TÜRÜ: activate to sort column ascending" style="width: 0px;">TÜRÜ</th>
                                  <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="PLATFORM: activate to sort column ascending" style="width: 0px;">PLATFORM</th>
                                  <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="SÜRÜMÜ: activate to sort column ascending" style="width: 0px;">SÜRÜMÜ</th>
                                  <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="GÜNCELLEME TARİHİ: activate to sort column ascending" style="width: 0px;">GÜNCELLEME TARİHİ</th>
                                  <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="UYUMLULUK: activate to sort column ascending" style="width: 0px;">UYUMLULUK</th>
                               </tr>
                            </thead>
                            <tbody>
                               <tr role="row" class="odd">
                                  <td class="sorting_1">Buluthan bhvmtools Linux</td>
                                  <td>VDI servis</td>
                                  <td>Masaüstü Ajanı</td>
                                  <td>v61</td>
                                  <td>07.03.2019</td>
                                  <td class="uyumlu tooltip" style="position: relative; display: inline-block; opacity: 1;">Uyumlu *<span class="tooltiptext">Etki Alanına Otomatik Ekleme</span></td>
                               </tr>
                               <tr role="row" class="even">
                                  <td class="sorting_1">CHOMAR Antivirus</td>
                                  <td>Güvenlik</td>
                                  <td>Masaüstü</td>
                                  <td>1.0.0.391</td>
                                  <td>15.05.2020</td>
                                  <td class="uyumlu tooltip" style="position: relative; display: inline-block; opacity: 1;">Uyumlu</td>
                               </tr>
                               <tr role="row" class="odd">
                                  <td class="sorting_1">CHOMAR Endpoint Security</td>
                                  <td>Güvenlik</td>
                                  <td>Masaüstü</td>
                                  <td>1.0.0.391</td>
                                  <td>15.05.2020</td>
                                  <td class="uyumlu tooltip" style="position: relative; display: inline-block; opacity: 1;">Uyumlu</td>
                               </tr>
                               <tr role="row" class="even">
                                  <td class="sorting_1">TÜRKSAT BELGENET</td>
                                  <td>EBYS</td>
                                  <td>Web İstemci</td>
                                  <td>-</td>
                                  <td>29.12.2018</td>
                                  <td class="uyumlu">Uyumlu</td>
                               </tr>
                            </tbody>
                            <tfoot>
                               <tr>
                                  <th rowspan="1" colspan="1">İSİM</th>
                                  <th rowspan="1" colspan="1">TÜRÜ</th>
                                  <th rowspan="1" colspan="1">PLATFORM</th>
                                  <th rowspan="1" colspan="1">SÜRÜMÜ</th>
                                  <th rowspan="1" colspan="1">GÜNCELLEME TARİHİ</th>
                                  <th rowspan="1" colspan="1">UYUMLULUK</th>
                               </tr>
                            </tfoot>
                         </table>
                    </div>
                    <div class="tab-pane fade" id="yabanci-urun" role="tabpanel">
                        <table id="table4" class="display dataTable table table-striped table-bordered" style="width: 100%;" role="grid" aria-describedby="example3_info">
                            <thead>
                               <tr role="row">
                                  <th class="sorting_asc" tabindex="0" aria-controls="example3" rowspan="1" colspan="1" aria-sort="ascending" aria-label="İSİM: activate to sort column descending" style="width: 0px;">İSİM</th>
                                  <th class="sorting" tabindex="0" aria-controls="example3" rowspan="1" colspan="1" aria-label="TÜRÜ: activate to sort column ascending" style="width: 0px;">TÜRÜ</th>
                                  <th class="sorting" tabindex="0" aria-controls="example3" rowspan="1" colspan="1" aria-label="PLATFORM: activate to sort column ascending" style="width: 0px;">PLATFORM</th>
                                  <th class="sorting" tabindex="0" aria-controls="example3" rowspan="1" colspan="1" aria-label="SÜRÜMÜ: activate to sort column ascending" style="width: 0px;">SÜRÜMÜ</th>
                                  <th class="sorting" tabindex="0" aria-controls="example3" rowspan="1" colspan="1" aria-label="GÜNCELLEME TARİHİ: activate to sort column ascending" style="width: 0px;">GÜNCELLEME TARİHİ</th>
                                  <th class="sorting" tabindex="0" aria-controls="example3" rowspan="1" colspan="1" aria-label="UYUMLULUK: activate to sort column ascending" style="width: 0px;">UYUMLULUK</th>
                               </tr>
                            </thead>
                            <tbody>
                               <tr role="row" class="odd">
                                  <td class="sorting_1">Citrix Receiver</td>
                                  <td>Masaüstü Sanallaştırma</td>
                                  <td>Masaüstü ve Web</td>
                                  <td>13.10</td>
                                  <td>29.12.2018</td>
                                  <td class="uyumlu">Uyumlu</td>
                               </tr>
                               <tr role="row" class="even">
                                  <td class="sorting_1">Citrix XenDesktop Agent</td>
                                  <td>Masaüstü Sanallaştırma</td>
                                  <td>Masaüstü</td>
                                  <td>13.10</td>
                                  <td>29.12.2018</td>
                                  <td class="uyumludevamediliyor">Test ediliyor</td>
                               </tr>
                               <tr role="row" class="odd">
                                  <td class="sorting_1">Foxit Reader</td>
                                  <td>Ofis</td>
                                  <td>Masaüstü</td>
                                  <td>2.4.4</td>
                                  <td>29.12.2018</td>
                                  <td class="uyumlu">Uyumlu</td>
                               </tr>
                               <tr role="row" class="even">
                                  <td class="sorting_1">Kaspersky Endpoint Security for Linux</td>
                                  <td>Güvenlik</td>
                                  <td>Masaüstü</td>
                                  <td>11</td>
                                  <td>04.11.2019</td>
                                  <td class="uyumlu">Uyumlu</td>
                               </tr>
                               <tr role="row" class="odd">
                                  <td class="sorting_1">OCRFeeder</td>
                                  <td>Karakter Tanıma</td>
                                  <td>Masaüstü</td>
                                  <td>0.8</td>
                                  <td>29.12.2018</td>
                                  <td class="uyumlu">Uyumlu</td>
                               </tr>
                               <tr role="row" class="even">
                                  <td class="sorting_1">Palo Alto Traps</td>
                                  <td>Güvenlik</td>
                                  <td>Masaüstü</td>
                                  <td>4.2.2</td>
                                  <td>29.12.2018</td>
                                  <td class="uyumludevamediliyor">Test ediliyor</td>
                               </tr>
                               <tr role="row" class="odd">
                                  <td class="sorting_1">Tesseract-ocr</td>
                                  <td>Karakter Tanıma</td>
                                  <td>Masaüstü</td>
                                  <td>4.0</td>
                                  <td>29.12.2018</td>
                                  <td class="uyumlu">Uyumlu</td>
                               </tr>
                            </tbody>
                            <tfoot>
                               <tr>
                                  <th rowspan="1" colspan="1">İSİM</th>
                                  <th rowspan="1" colspan="1">TÜRÜ</th>
                                  <th rowspan="1" colspan="1">PLATFORM</th>
                                  <th rowspan="1" colspan="1">SÜRÜMÜ</th>
                                  <th rowspan="1" colspan="1">GÜNCELLEME TARİHİ</th>
                                  <th rowspan="1" colspan="1">UYUMLULUK</th>
                               </tr>
                            </tfoot>
                         </table>
                    </div>
                  </div>
            </div>
            <div class="tab-pane fade" id="donanimlar" role="tabpanel" aria-labelledby="donanimlar-tab">
                <table id="table2" class="display dataTable table table-striped table-bordered" style="width: 100%;" role="grid" aria-describedby="example_info">
                    <thead>
                       <tr role="row">
                          <th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-sort="ascending" aria-label="TÜRÜ: activate to sort column descending" style="width: 140px;">TÜRÜ</th>
                          <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="MARKA: activate to sort column ascending" style="width: 93px;">MARKA</th>
                          <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="MODEL: activate to sort column ascending" style="width: 208px;">MODEL</th>
                          <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="SON GÜNCELLEME: activate to sort column ascending" style="width: 192px;">SON GÜNCELLEME</th>
                          <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="UYUMLULUK: activate to sort column ascending" style="width: 297px;">UYUMLULUK</th>
                       </tr>
                    </thead>
                    <tbody>
                       <tr role="row" class="odd">
                          <td class="sorting_1">Barkod Yazıcısı</td>
                          <td>Brother</td>
                          <td>TD-4000</td>
                          <td>29.12.2018</td>
                          <td class="yariuyumlu">Uyumlu-Yazılım Desteklemiyor</td>
                       </tr>
                       <tr role="row" class="even">
                          <td class="sorting_1">Barkod Yazıcısı</td>
                          <td>Zebra</td>
                          <td>TLP 2844</td>
                          <td>29.12.2018</td>
                          <td class="uyumlu">Uyumlu</td>
                       </tr>
                       <tr role="row" class="odd">
                          <td class="sorting_1">Barkod Yazıcısı</td>
                          <td>Zebra</td>
                          <td>GC420t</td>
                          <td>29.12.2018</td>
                          <td class="uyumlu">Uyumlu</td>
                       </tr>
                       <tr role="row" class="even">
                          <td class="sorting_1">Barkod Yazıcısı</td>
                          <td>Argox</td>
                          <td>CP-214</td>
                          <td>29.12.2018</td>
                          <td class="uyumlu">Uyumlu</td>
                       </tr>
                       <tr role="row" class="odd">
                          <td class="sorting_1">Barkod Yazıcısı</td>
                          <td>Argox</td>
                          <td>CP-214Plus</td>
                          <td>29.12.2018</td>
                          <td class="uyumlu">Uyumlu</td>
                       </tr>
                       <tr role="row" class="even">
                          <td class="sorting_1">İnce İstemci</td>
                          <td>Technopc</td>
                          <td>TP25</td>
                          <td>01.14.2019</td>
                          <td class="uyumlu">Uyumlu</td>
                       </tr>
                       <tr role="row" class="odd">
                          <td class="sorting_1">MiniPC</td>
                          <td>Technopc</td>
                          <td>Q280</td>
                          <td>01.14.2019</td>
                          <td class="uyumlu">Uyumlu</td>
                       </tr>
                       <tr role="row" class="even">
                          <td class="sorting_1">Tarayıcı</td>
                          <td>Brother</td>
                          <td>2100e</td>
                          <td>29.12.2018</td>
                          <td class="uyumlu">Uyumlu</td>
                       </tr>
                       <tr role="row" class="odd">
                          <td class="sorting_1">Yazıcı</td>
                          <td>Ricoh</td>
                          <td>3352</td>
                          <td>29.12.2018</td>
                          <td class="uyumlu">Uyumlu</td>
                       </tr>
                       <tr role="row" class="even">
                          <td class="sorting_1">Yazıcı</td>
                          <td>Ricoh</td>
                          <td>3502</td>
                          <td>29.12.2018</td>
                          <td class="uyumlu">Uyumlu</td>
                       </tr>
                       <tr role="row" class="odd">
                        <td class="sorting_1">Yazıcı</td>
                        <td>Ricoh</td>
                        <td>2000L</td>
                        <td>29.12.2018</td>
                        <td class="uyumludevamediliyor">Test ediliyor</td>
                     </tr>
                     <tr role="row" class="even">
                        <td class="sorting_1">Yazıcı</td>
                        <td>HP</td>
                        <td>LaserJet M1132</td>
                        <td>29.12.2018</td>
                        <td class="uyumlu">Uyumlu</td>
                     </tr>
                     <tr role="row" class="odd">
                        <td class="sorting_1">Yazıcı</td>
                        <td>HP</td>
                        <td>LaserJet 1018</td>
                        <td>29.12.2018</td>
                        <td class="uyumlu">Uyumlu</td>
                     </tr>
                     <tr role="row" class="even">
                        <td class="sorting_1">Yazıcı</td>
                        <td>HP</td>
                        <td>LaserJet 1005</td>
                        <td>29.12.2018</td>
                        <td class="uyumlu">Uyumlu</td>
                     </tr>
                     <tr role="row" class="odd">
                        <td class="sorting_1">Yazıcı</td>
                        <td>HP</td>
                        <td>LaserJet 1006</td>
                        <td>29.12.2018</td>
                        <td class="uyumlu">Uyumlu</td>
                     </tr>
                     <tr role="row" class="even">
                        <td class="sorting_1">Yazıcı</td>
                        <td>HP</td>
                        <td>LaserJet 1102</td>
                        <td>29.12.2018</td>
                        <td class="uyumlu">Uyumlu</td>
                     </tr>
                     <tr role="row" class="odd">
                        <td class="sorting_1">Yazıcı</td>
                        <td>HP</td>
                        <td>LaserJet Color 1025CP</td>
                        <td>29.12.2018</td>
                        <td class="uyumlu">Uyumlu</td>
                     </tr>
                     <tr role="row" class="even">
                        <td class="sorting_1">Yazıcı</td>
                        <td>HP</td>
                        <td>LaserJet 3052</td>
                        <td>29.12.2018</td>
                        <td class="uyumlu">Uyumlu</td>
                     </tr>
                     <tr role="row" class="odd">
                        <td class="sorting_1">Yazıcı</td>
                        <td>HP</td>
                        <td>LaserJet 3050</td>
                        <td>29.12.2018</td>
                        <td class="uyumlu">Uyumlu</td>
                     </tr>
                     <tr role="row" class="even">
                        <td class="sorting_1">Yazıcı</td>
                        <td>HP</td>
                        <td>LaserJet 3390</td>
                        <td>29.12.2018</td>
                        <td class="uyumlu">Uyumlu</td>
                     </tr>
                     <tr role="row" class="odd">
                        <td class="sorting_1">Yazıcı</td>
                        <td>Brother</td>
                        <td>MFC 8220</td>
                        <td>29.12.2018</td>
                        <td class="uyumlu">Uyumlu</td>
                     </tr>
                     <tr role="row" class="even">
                        <td class="sorting_1">Yazıcı</td>
                        <td>Brother</td>
                        <td>MFC-8380DN</td>
                        <td>29.12.2018</td>
                        <td class="uyumlu">Uyumlu</td>
                     </tr>
                     <tr role="row" class="odd">
                        <td class="sorting_1">Yazıcı</td>
                        <td>HP</td>
                        <td>LaserJet 2727</td>
                        <td>29.12.2018</td>
                        <td class="uyumlu">Uyumlu</td>
                     </tr>
                    </tbody>
                    <tfoot>
                       <tr>
                          <th rowspan="1" colspan="1">TÜRÜ</th>
                          <th rowspan="1" colspan="1">MARKA</th>
                          <th rowspan="1" colspan="1">MODEL</th>
                          <th rowspan="1" colspan="1">SON GÜNCELLEME</th>
                          <th rowspan="1" colspan="1">UYUMLULUK</th>
                       </tr>
                    </tfoot>
                 </table>
            </div>
        </div>
    </div>
</div>
<div class="container mt-4 mb-md-0 mb-5">
    <div class="row" style="font-size: 18px; color: #f44">
        "Yapılan testler Havelsan AçıkLab'ta belirli yazılım ve donanıma bağımlı şekilde yapılmıştır. İlgili ürünler kendi kurumunuzda tekrar analiz edilmelidir."
    </div>
</div>
</section>
<div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="modalLongTitle">Uyumluluk Test Talebi</h5>
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