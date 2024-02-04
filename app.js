// DOMContentLoaded : Sayfanın Tamamı Yüklendiğinde
document.addEventListener('DOMContentLoaded',function(){
    gorevEkle = () => {
        let gorevMetin = gorevEkleInput.value.trim().toUpperCase();
        if(gorevMetin!==""){
            let gorevItem = gorevItemOlustur(gorevMetin);
            devamEdenGorevler.appendChild(gorevItem);
            gorevEkleInput.value = "";
            depoyaKaydet();
        }else{
            alert('Görev Yazmadınız')
        }
      
    }
    
    ekleBtn.addEventListener('click',gorevEkle)
    
    gorevItemOlustur = (metin) => {
        let li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-center align-items-center gap-2'
    
        let div = document.createElement('div');
        div.className = 'ml-2 mr-auto'
        div.textContent = metin
    
        let btnDiv = document.createElement('div');
        btnDiv.className = 'btn-group'
    
        //TODO Tamamlandı Buton
    
        let tamamlandiBtn = document.createElement('button');
        tamamlandiBtn.className = 'btn btn-success btn-sm text-white'
        tamamlandiBtn.textContent = 'Tamamlandı';
        tamamlandiBtn.addEventListener('click',function(){
          li.classList.toggle('list-group-item-success');  
          tamamlandiBtn.textContent = li.classList.contains('list-group-item-success') ? "Devam Edenlere Gönder" : 'Tamamlandı'
          if(li.classList.contains('list-group-item-success')){
            tamamlananGorevler.appendChild(li);
            tamamlandiBtn.className = 'btn btn-warning btn-sm';
          }else{
            devamEdenGorevler.appendChild(li)
            tamamlandiBtn.className = 'btn btn-success btn-sm'
          }
          depoyaKaydet();
        })
    
        // Düzenle Ve sil Butonları
    
        // TODO Düzenle Butonu
    
        let duzenleBtn = document.createElement('button');
        duzenleBtn.type = 'button';
        duzenleBtn.className = 'btn btn-primary btn-sm text-white';
        duzenleBtn.textContent = 'Düzenle';
    
        duzenleBtn.addEventListener('click',function(){
            let yeni_metin = prompt('Lütfen düzenlenen yeni görev giriniz:');
            if(yeni_metin !== ""){
                div.textContent = yeni_metin;
                depoyaKaydet();
            }else{
                alert('Lütfen boş görev girmeyin.')
            }
        })
    
    
        // TODO Sil Butonu
        let silBtn = document.createElement('button');
        silBtn.type = 'button'
        silBtn.className = 'btn btn-danger btn-sm text-white'
        silBtn.textContent = 'Sil'
    
        silBtn.addEventListener('click',function(){
            li.parentNode.removeChild(li) // parentNode Kontrol Yapar. eğer üst düğüme sahipse li ul nin içindedir.
            depoyaKaydet()
        })
    
        // Butonları Dive Ekleme
    
        btnDiv.appendChild(tamamlandiBtn)
        btnDiv.appendChild(duzenleBtn)
        btnDiv.appendChild(silBtn)
    
        // div Görev ismi Li içerisine Ekleme
    
        li.appendChild(div)
        li.appendChild(btnDiv)
    
        return li
    }
    
    // Tarayıcı Depo İşlemleri
    depoyaKaydet = () => {
        // görevleri yerel depolama ekleme
        localStorage.setItem('tamamlananGorevler',tamamlananGorevler.innerHTML)
        localStorage.setItem('devamEdenGorevler',devamEdenGorevler.innerHTML)
    }
    
    depoYukle = () => {
        // görevleri yerel depolama yükleme
        tamamlananGorevler.innerHTML = localStorage.getItem('tamamlananGorevler') || "";
        devamEdenGorevler.innerHTML = localStorage.getItem('devamEdenGorevler') || "";
    }
    
    
    yerelDepoSil = () => {
        localStorage.clear();
        alert('Tarayıcı Deposu Temizlendi.')
    }
    
    depoSil.addEventListener('click',yerelDepoSil)
    
    depoYukle();
    
})
//! Elementlere Erişim
const gorevEkleInput = document.querySelector('#gorevEkleInput');
const ekleBtn = document.querySelector('#ekleBtn');
const tamamlananGorevler = document.querySelector('#tamamlananGorevler');
const devamEdenGorevler = document.querySelector('#devamEdenGorevler');
const depoSil = document.querySelector('#depoSil');
//! Elementlere Erişim


