import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import PengajuanJudul from "../components/PengajuanJudul";
import PendaftaranSeminar from "../components/PendaftaranSeminarThesis";
import { Button } from "@nextui-org/react";

export default function FormOption() {
  const formOptions = [
    { id: 1, descr: "Pengajuan Judul dan Dosen Pembimbing Skripsi" },
    { id: 2, descr: "Pendaftaran Ujian Seminar of Thesis Proposal" },
    { id: 3, descr: "Pengumpulan File: Syarat Sidang Skripsi" },
    { id: 4, descr: "Pendaftaran Sidang Skripsi" },
    { id: 5, descr: "Menyelenggarakan Kuliah Pengganti (KP)" },
  ];

  const [selectedForm, setSelectedForm] = useState(null);
  return (
    <>
      <div className="mt-3">
        <Select
          label="Pilih Jenis Layanan"
          size="sm"
          onChange={(e) => setSelectedForm(e.target.value)}
        >
          {formOptions.map((el) => (
            <SelectItem key={el.id} value={el.id}>
              {el.descr}
            </SelectItem>
          ))}
        </Select>

        {selectedForm == 1 && <PengajuanJudul />}
        {selectedForm == 2 && <PendaftaranSeminar />}
      </div>
    </>
  );
}