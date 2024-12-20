document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;  // Perbaiki "scr" menjadi "src"
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i>tidak ada informasi yang tersedia</i>';

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        // Periksa apakah elemen modalTitle ada
        let modalTitle = document.querySelector('.modalTitle');
        if (modalTitle) {
            modalTitle.innerHTML = judul;
        }

        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');

        // Periksa apakah elemen modalImage ada
        let modalImage = document.querySelector('.modalImage');
        if (modalImage) {
            modalImage.innerHTML = '';  // Kosongkan innerHTML sebelum append
            modalImage.appendChild(image); // Append gambar ke modal
        }

        // Periksa apakah elemen modalDeskripsi ada
        let modalDeskripsi = document.querySelector('.modalDeskripsi');
        if (modalDeskripsi) {
            modalDeskripsi.innerHTML = deskripsi;
        }

        // Periksa apakah elemen modalharga ada
        let modalHarga = document.querySelector('.modalharga');
        if (modalHarga) {
            modalHarga.innerHTML = harga;
        }

        // Format pesan WhatsApp
        let nomorWhatsApp = "6283829794075"; // Ganti dengan nomor WhatsApp Anda
        let pesan = `Halo Bang, saya mau pesan buku ini:\n\n*Judul*: ${judul}\n*Harga*: ${harga}\n*Deskripsi*: ${deskripsi}\n\n*Gambar*: ${gambar}\n\nSilakan balas pesan ini untuk konfirmasi.`;

        // Encode pesan ke URL
        let linkWhatsApp = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${encodeURIComponent(pesan)}`;

        // Tambahkan event listener ke tombol Beli
        let btnBeli = document.querySelector('.btnBeli');
        if (btnBeli) {
            btnBeli.setAttribute('href', linkWhatsApp); // Set href untuk tombol
            btnBeli.setAttribute('target', '_blank'); // Buka di tab baru
        }
    });
});
