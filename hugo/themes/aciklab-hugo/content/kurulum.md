---
page_title: Kurulum
title: Liman MYS Kurulumu
menu:
    main:
        parent: "about"
        weight: 4
        name: "Kurulum"
---

Liman MYS'nin kurulumu sağlayacağımız .deb paketi ile gerçekleşir. Bu paket sizin için kurulum, güncelleme ve sistem için gerekli optimizasyonlari kısa sürede tamamlayacaktir.  
  
LimanMYS ülkemizin dağınık organizasyonlarına sahip ve bütün yerleşim yerlerlerinde birimi olan kurumlarımızın BT süreçlerine dahil olunarak kavram ispat çalışmalarını tamamlanmıştır.  
  
Öncelikle eğer sunucunuzda curl paketi kurulu değil ise aşağıdaki komutlar ile curl paketini kurubilirsiniz.  
```bash
sudo apt update
sudo apt install curl -y
```

Depoyu sisteminize eklemek için aşağıdaki komutu kullanabilirsiniz.

```bash
/bin/bash -c "$(curl -fsSL https://git.io/JUqZV)"
```

Liman MYS yüklemek için:  
##### Liman'ı yüklemek için sunucunuzun dili ingilizce olmalıdır
```bash
sudo apt install liman
```
Lightdm HVL Greeter yüklemek için:
```bash
sudo apt install lightdm-hvl-greeter
```
{{% image "liman-mys-kurulum.png" %}}
<div class="col text-center mt-3 mb-3">
{{% button "Özel Demo İsteyin!" "/iletisim" true %}}
</div>