import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const AlertNada = () => {
  useEffect(() => {
    Swal.fire({
      title: 'Halo Cantik!',
      html: `
        Selamat Ulang Tahun, Nada! <br><br> 
        Selamat ulang tahun yang ke-19! Hari ini adalah momen spesial yang menandai tahun baru dalam perjalanan hidupmu. <br><br> 
        Aku ingin mengucapkan selamat ulang tahun dengan penuh cinta dan harapan. <br><br> 
        Dalam 4 bulan terakhir, kita telah berbagi banyak kenangan indah bersama. Setiap saat yang kita lewati bersama-sama menjadi sebuah petualangan yang tak terlupakan. Melalui tawa, tangis, dan canda, kita tumbuh bersama dan saling mendukung satu sama lain. <br><br> 
        Semoga panjang umur, sehat selalu, makin pinter, cantik, sholeh, dan kurangin mangkelnya hehe.
      `,
      confirmButtonText: 'Aamiin, aku janji',
      imageUrl: 'https://storage.googleapis.com/ndapupam/qr.png',
      imageWidth: 240,
      imageHeight: 240,
      imageAlt: 'Special QR Code',
    });
  }, []);

  return <div></div>;
};

export default AlertNada;
