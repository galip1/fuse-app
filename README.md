1. `SignIn.js`:

   - Bu dosyada, kullanıcıların giriş yapabileceği bir sayfa oluşturuyorum.
   - Material-UI bileşenlerini ve Formik ile Yup gibi kütüphaneleri kullanarak bir giriş formu oluşturuyorum.
   - Kullanıcıdan e-posta ve şifre bilgilerini girmesini istiyorum.
   - "Beni Hatırla" seçeneği ile kullanıcıların oturumlarını hatırlamalarını sağlıyorum.
   - Ayrıca, sosyal medya hesapları ile giriş yapma seçenekleri sunuyorum.
   - Kullanıcı bilgileri doğrulandığında, şu an için boş olan bir işlevi çalıştırıyorum.

2. `LoadingPage.js`:

   - Bu dosyada, uygulama yüklenirken gösterilen bir yükleme sayfasını oluşturuyorum.
   - Bootstrap tarafından sağlanan döner bir simge ve uygulama logosunu görüntülüyorum.

3. `CustomRoutes.js`:

   - Bu dosyada, uygulamanın yönlendirmelerini tanımlıyorum.
   - Ana sayfa, giriş sayfası ve kaydolma sayfası gibi farklı URL rotalarını yönlendiriyorum.

4. `App.js`:
   - Bu dosyada, uygulamanın ana bileşeni olarak kullanıyorum.
   - Uygulama yüklenirken (`loading` durumu `true` olduğunda) yükleme sayfasını görüntülüyorum.
   - Yükleme tamamlandığında (`loading` durumu `false` olduğunda) `CustomRoutes` bileşenini görüntülüyorum.

Material-UI, React Router, Formik ve Yup gibi kütüphaneleri kullanarak uygulamayı tasarlıyorum ve yönlendirme işlemlerini sağlıyorum. Kullanıcıların giriş yapabilmeleri ve kaydolabilmeleri için gerekli sayfalar ve işlevler mevcut.
