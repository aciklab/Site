---
title: "İletişim"
title_hidden: true
menu:
  main:
    weight: 7
    name: "Bizimle iletişime geçin!"
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
    <p>
       Yandaki formu doldurarak, açık kaynak ve kurumsal uygulamalarla ilgili sizlerle iletişime geçebilir, demo talebinde bulunabilip, 31 Mayıs 2022 tarihine kadar kullanabilirsiniz.
    </p>
</div>
<div class="col-12 col-lg-6">
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
            <label for="demo-yazilim">Hangi yazılımı denemek istiyorsunuz?</label>
            <select class="form-control" id="demo-yazilim" name="demo-yazilim">
                <option value="Yok" selected>Yok</option>
                <option value="Liman">Liman</option>
                <option value="Apache Cassandra">Apache Cassandra</option>
                <option value="Apache Hadoop">Apache Hadoop</option>
                <option value="Apache Kafka">Apache Kafka</option>
                <option value="Apache Spark">Apache Spark</option>
                <option value="CephFS">CephFS</option>
                <option value="Docker">Docker</option>
                <option value="Elasticsearch">Elasticsearch</option>
                <option value="HAproxy">HAproxy</option>
                <option value="Hazelcast">Hazelcast</option>
                <option value="Hyperledger Fabric">Hyperledger Fabric</option>
                <option value="Istio">Istio</option>
                <option value="Jenkins">Jenkins</option>
                <option value="Keras">Keras</option>
                <option value="Kubernetes">Kubernetes</option>
                <option value="Matplotlib">Matplotlib</option>
                <option value="MongoDB">MongoDB</option>
                <option value="NumPy">NumPy</option>
                <option value="OpenStack CEILMETER">OpenStack CEILMETER</option>
                <option value="OpenStack CINDER">OpenStack CINDER </option>
                <option value="OpenStack GLANCE">OpenStack GLANCE</option>
                <option value="OpenStack HEAT">OpenStack HEAT</option>
                <option value="OpenStack HORIZON">OpenStack HORIZON</option>
                <option value="OpenStack KEYSTONE">OpenStack KEYSTONE</option>
                <option value="OpenStack NEUTRON">OpenStack NEUTRON</option>
                <option value="OpenStack NOVA">OpenStack NOVA</option>
                <option value="OpenStack SWIFT">OpenStack SWIFT</option>
                <option value="oVirt">oVirt</option>
                <option value="PostgreSQL">PostgreSQL</option>
                <option value="Prometheus">Prometheus</option>
                <option value="RabbitMQ">RabbitMQ</option>
                <option value="SonarQube">SonarQube</option>
                <option value="Tensorflow">Tensorflow</option>
                <option value="Samba DC">Samba DC</option>
                <option value="Zabbix">Zabbix</option>
            </select>
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
