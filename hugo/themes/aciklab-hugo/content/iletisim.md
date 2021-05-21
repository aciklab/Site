---
title: "İletişim"
title_hidden: true
menu:
  main:

    weight: 4

---

<div class="row">
<div class="col-12 col-lg-6">
    <h2>Deneyim için Formu Doldurun</h2>
    <p>
        Ücretsiz Demo İsteyin! BT süreçlerinizi aksaklığa sebep olmadan
        kavram ispat çalışması sunuyoruz. Pardus Göç Projelerinizi ilk
        adımını risk almadan Liman MYS ile başlatabilirsiniz. Kavram
        ispat çalışması sonrası 15 gün ücretsiz deneme sürümünü sizlerde
        test edebilirsiniz.
    </p>
    <p>
        Liman MYS ile kullanımda olan dizinlerin (Samba, Aktif Dizin)
        entegrasyonu hizmetler kesintiye uğramadan sağlanmaktadır. Liman
        MYS'nin bileşenleri: Liman, Kaptan, Tayfa olarak üçe
        ayrılmıştır. Bu bileşenler, Liman MYS'nin kararlı ve güvenli
        olarak çalışmasını sağlar.
    </p>
</div>
<div class="col-12 col-lg-6">
<div class="container" id="ff-compose"></div>
<script type="text/javascript">
function callback() {
    convert();
    const render = formFacade.render;
    formFacade.render = function() {
        render.apply(this, arguments);
        convert();
    }
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
<script async defer src="https://formfacade.com/include/105559820038815642759/form/1FAIpQLSc8ESawlk8mXGjIaq_R23ueu5ARs0Q6TZJR62OFGpYE8I6xyg/bootstrap.js?div=ff-compose&callback=callback"></script>
</div>
</div>
