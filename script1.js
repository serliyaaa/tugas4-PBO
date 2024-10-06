const sik = {
    kelas : "",
    angkatan :"",
    walidosen : "",
}

console.log(sik.kelas);
console.log(sik.angkatan);
console.log(sik.walidosen);
const sikKel = {}

sikKel.atribut1 = "contoh atribut1"
sikKel.atribut2 = "contoh atribut2"
sikKel.atribut3 = "contoh atribut3"

console.log(sikKel.atribut3)

delete sikKel.atribut2;

let orang = {
    nama: "serli",
    pekerjaan: "manager",
    kendaraan:{
        mobil : "pajero sport",
        motor : "vesmet",
        pesawat : "jet"
    }
}

console.log(orang.kendaraan.mobil)
console.log(orang.kendaraan.mobil)

let.tampil = "Nama Saya" + orang.nama + ", saya bekerja sebagai " + orang.pekerjaan + "sehari-hari saya terbiasa bekerja menggunakan motor kesayangan saya dengan jenis " + orang.kendaraan.motor

document.getElementById

let mahasiswa ={
    namaDepan : "Serli",
    namaBelakang : "aziezah",
    namaLengkap : function(){
    return this.namadepan + " " + this.namaBelakang
}

}

let tampilMhs = "nama saya" + mahasiswa.namaDepan + ", nama Lengkap saya adalah " + mahasiswa.namaLengkap()

document.getElementById("objek").innerHTML = tampilMhs

function mahasiswaSIK(nama, kelas, angkatan){
    this.nama = nama,
    this.kelas = kelas,
    this.angkatan = angkatan
}

    const mhs1 = new mahasiswa("Serli", "S", 2023);
    const mhs2 = new mahasiswa("Naysila", "N", 2023);
    const mhs3 = new mahasiswa("Fines", "F", 2023);

    console.log("nama mahasiswa pertama adalah " + mhs1.nama)
    console.log("nama mahasiswa kedua adalah " + mhs2.nama)
    console.log("nama mahasiswa ketiga adalah " + mhs3.nama)
