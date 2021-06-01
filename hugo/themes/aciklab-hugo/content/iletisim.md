---
title: "İletişim"
title_hidden: true
menu:
  main:
    weight: 6
  footer:
    parent: diger
    name: "İletişim"
---

<div class="row">
<div class="col-12 col-lg-6">
    <h2>Açık Kaynak Çözümlerimizi AçıkLab aracılığı ile sunuyoruz.</h2>
    <p>
        HAVELSAN A.Ş. olarak Açık Kaynak alternatif çözümlerini kurumlarımıza profesyonel hizmet olarak sunuyoruz.
AçıkLab Açık Kaynak çözümleri kurumların ihtiyaçlarına özel geliştirmeler ile kararlı olarak çalışmasını sağlar. Bütün çözümlerini güvenlik sıkılaştırmalarını tamamlayarak müşterisinin hizmetine sunar.
    </p>
    <p>
        Sizler de alternatif açık kaynak çözümlerimiz; işletim sistemi göç projeleri, açık kaynak yönetim hizmetleri (Liman MYS), açık kaynak veritabanı hizmetlerimiz ve ücretsiz hizmetlerimizden faydalanmak için iletişim formunu doldurunuz.
    </p>
</div>
<div class="col-12 col-lg-6">
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
