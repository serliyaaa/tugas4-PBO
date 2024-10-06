class Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar) {
      this.nama = nama;
      this.jenis = jenis;
      this.kapasitas = kapasitas;
      this.panjang = panjang;
      this.lebar = lebar;
    }
  
    infoKapal() {
      return `Kapal ini bernama ${this.nama}, berjenis ${this.jenis}, dengan kapasitas ${this.kapasitas} orang. Memiliki dimensi panjang ${this.panjang} meter dan lebar ${this.lebar} meter.`;
    }
  }
  
  class InfoTiketKapal extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, nomorTiket, namaPenumpang, nomorIdentifikasiPenumpang) {
      super(nama, jenis, kapasitas, panjang, lebar);
      this.nomorTiket = nomorTiket;
      this.namaPenumpang = namaPenumpang;
      this.nomorIdentifikasiPenumpang = nomorIdentifikasiPenumpang;
    }
  
    #deskripsiTiket() {
      return `Tiket bernomor ${this.nomorTiket} atas nama ${this.namaPenumpang}, dengan nomor identifikasi ${this.nomorIdentifikasiPenumpang}.`;
    }
  
    infoLengkapTiket() {
      return `${this.infoKapal()} ${this.#deskripsiTiket()}`;
    }
  }
  
  class WaktuKeberangkatan extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, tanggalKeberangkatan, waktuKeberangkatan) {
      super(nama, jenis, kapasitas, panjang, lebar);
      this.tanggalKeberangkatan = tanggalKeberangkatan;
      this.waktuKeberangkatan = waktuKeberangkatan;
    }

    #deskripsiWaktuKeberangkatan() {
      return `Kapal dijadwalkan berangkat pada tanggal ${this.tanggalKeberangkatan} pukul ${this.waktuKeberangkatan}.`;
    }
  
    infoLengkapKeberangkatan() {
      return `${this.infoKapal()} ${this.#deskripsiWaktuKeberangkatan()}`;
    }
  }
  
  let tiketKapal = new InfoTiketKapal(
    "Alyzhuwsky", // nama kapal
    "Ferry",      // jenis kapal
    500,          // kapasitas
    200,          // panjang kapal
    100,          // lebar kapal
    "TK12345",    // nomor tiket
    "Sherli Aziezah",   // nama penumpang
    "ID12345678"  // nomor identifikasi penumpang
  );

  let waktuKeberangkatanKapal = new WaktuKeberangkatan(
    "Alyzhuwsky", // nama kapal
    "Ferry",      // jenis kapal
    500,          // kapasitas
    200,          // panjang kapal
    100,          // lebar kapal
    "2024-10-15", // tanggal keberangkatan
    "08:00 AM"    // waktu keberangkatan
  );
  
  // Output info lengkap tiket kapal
  console.log(tiketKapal.infoLengkapTiket());
  // Output info lengkap waktu keberangkatan kapal
  console.log(waktuKeberangkatanKapal.infoLengkapKeberangkatan());
  