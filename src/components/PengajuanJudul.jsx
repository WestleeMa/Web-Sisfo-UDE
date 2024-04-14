import { Input, Radio, RadioGroup } from "@nextui-org/react";
import { useRef } from "react";

export default function PengajuanJudul() {
  const radioKajianSkripsi = [
    {
      id: 1,
      descr: "Creative Writing (CREW)",
    },
    {
      id: 2,
      descr: "TESOL",
    },
    {
      id: 3,
      descr: "Translation and Interpretation (TIN)",
    },
  ];

  const radioDosenPembimbing = [
    {
      id: 1,
      descr: "Ira Rasikawati, Ph.D.",
    },
    {
      id: 2,
      descr: "Ignasia Yuyun, S.Pd., M.Pd.",
    },
    {
      id: 3,
      descr: "Hanna Juliaty, S.S., M.A.",
    },
    {
      id: 4,
      descr: "Didi Sulistiyono, S.S., M.Hum.",
    },
  ];

  const radioSkema = [
    {
      id: 1,
      descr: "Library Study",
    },
    {
      id: 2,
      descr: "Final Project",
    },
    {
      id: 3,
      descr: "Field Study",
    },
    {
      id: 4,
      descr: "Literature Review",
    },
  ];

  const fileRef = useRef(null);
  return (
    <div className="grid grid-cols-12 mt-3 gap-4">
      <div className="md:col-span-6 col-span-12">
        <RadioGroup label="Pilih Bidang Kajian Skripsi" size="sm" isRequired>
          {radioKajianSkripsi.map((el) => (
            <Radio value={el.id}>{el.descr}</Radio>
          ))}
        </RadioGroup>
        <Input
          label="Judul Skripsi yang Diusulkan"
          size="sm"
          className="mt-3"
          isRequired
        ></Input>
        <Input
          label="Judul Skripsi Sebelumnya"
          size="sm"
          className="mt-3"
          placeholder="(Isi bila mengusulkan ganti judul)"
        ></Input>
        <Input
          label="Dosen Pembimbing Sebelumnya"
          size="sm"
          className="mt-3"
          placeholder="(Isi bila mengajukan ganti dosen pembimbing dan telah mendapatkan izin dari dospem lama bahwa hendak mengganti dospem)"
        ></Input>
        <RadioGroup
          label="Dosen Pembimbing 1 yang Diajukan"
          size="sm"
          className="mt-3"
          isRequired
        >
          {radioDosenPembimbing.map((el) => (
            <Radio value={el.id}>{el.descr}</Radio>
          ))}
        </RadioGroup>
      </div>
      <div className="md:col-span-6 col-span-12">
        <RadioGroup
          label="Dosen Pembimbing 2 yang Diajukan"
          size="sm"
          className="mt-3"
          isRequired
        >
          {radioDosenPembimbing.map((el) => (
            <Radio value={el.id}>{el.descr}</Radio>
          ))}
        </RadioGroup>
        <Input
          label="Draft Naskah Proposal yang Diajukan"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(Dalam Ms. Word dan sudah mendapatkan acc dari Dosen Pembimbing 1 yang diajukan)"
          readOnly
          isRequired
          onClick={() => fileRef.current.click()}
        ></Input>
        <input type="file" hidden ref={fileRef} />

        <RadioGroup
          label="Skema Skripsi (Yang diminati dan sudah mendapatkan acc dari Dosen Pembimbing 1 yang diajukan)"
          size="sm"
          className="mt-3"
          isRequired
        >
          {radioSkema.map((el) => (
            <Radio value={el.id}>{el.descr}</Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
