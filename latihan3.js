class SensorLaut {
    constructor(nama, lokasi){
        this.nama = nama;
        this.lokasi = lokasi;
        this.status = "Mati";
    }

    aktifkan(){
        this._status = "Aktif";
        return `Sensor ${this.nama} di ${this.lokasi} telah diaktifkan`;
    }

    nonaktifkan(){
        this._status = "Mati";
        return `Sensor ${this.nama} di ${this.lokasi} telah di non aktifkan`;
    }

    getStatus(){
        return `Status sensor ${this.nama} adalah ${this._status}`;
    }
}
    let SensorPasutMerak = new SensorPasut("Selat Sunda", "Merak")


    console.log(SensorPasutMerak.aktifkan())
    console.log(SensorPasutMerak.nonaktifkan())
    console.log(SensorPasutMerak.getStatus())

