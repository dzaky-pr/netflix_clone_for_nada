import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const AlertNada = () => {
  useEffect(() => {
    Swal.fire({
      imageUrl: 'https://storage.googleapis.com/ndapupam/qr1month.png',
      imageWidth: 240,
      imageHeight: 240,
      imageAlt: 'Special QR Code (beda)',
      title: 'Happy Anniversary 1 Bulan Dekna!',
      html: `
      Satu bulan telah berlalu sejak kita memulai perjalanan ini bersama-sama. Selama satu bulan ini, setiap momen bersamamu adalah kenangan indah yang tak terlupakan. Terima kasih telah membuat hidupku lebih berarti, berwarna, dan penuh cinta.
      <br/><br/>
      Semoga kita dapat terus menjalin hubungan yang kuat dan saling mendukung satu sama lain. Mohon maaf aku masih jauh dari kata cukup dan sempurna. Aku bersyukur atas hadirnya kamu di duniaku, dan tak sabar untuk melihat apa yang masa depan miliki untuk kita berdua. Aamiin.
      <br/><br/>
      Salam hangat, Mas Dzaky ❤️
      
      `,
      confirmButtonText: 'Aamiin',
    });
  }, []);

  return <div></div>;
};

export default AlertNada;
