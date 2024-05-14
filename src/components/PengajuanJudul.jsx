import { Input, Radio, RadioGroup, Button } from "@nextui-org/react";
import { useRef, useState } from "react";

export default function PengajuanJudul() {
  const [pengajuanJudul, setPengajuanJudul] = useState({});

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

  const handleProposalChange = (e) => {
    const file = e.target.files[0];
    setPengajuanJudul({ ...pengajuanJudul, naskah_proposal: file });
  };

  const fileRef = useRef(null);
  return (
    <div className="grid grid-cols-12 gap-4 m-5 mb-[5rem] w-[65rem]">
      <div className="md:col-span-6 col-span-12">
        <RadioGroup
          label="Pilih Bidang Kajian Skripsi"
          size="sm"
          isRequired
          onChange={(e) =>
            setPengajuanJudul({
              ...pengajuanJudul,
              kajian_skripsi: e.target.value,
            })
          }
        >
          {radioKajianSkripsi.map((el) => (
            <Radio value={el.id}>{el.descr}</Radio>
          ))}
        </RadioGroup>
        <Input
          label="Judul Skripsi yang Diusulkan"
          size="sm"
          className="my-3"
          isRequired
          onBlur={(e) =>
            setPengajuanJudul({
              ...pengajuanJudul,
              judul_skripsi: e.target.value,
            })
          }
        ></Input>
        <Input
          label="Judul Skripsi Sebelumnya"
          size="sm"
          className="mt-3"
          placeholder="(Isi bila mengusulkan ganti judul)"
          onBlur={(e) =>
            setPengajuanJudul({
              ...pengajuanJudul,
              prev_judul_skripsi: e.target.value,
            })
          }
        ></Input>
        <Input
          label="Dosen Pembimbing Sebelumnya"
          size="sm"
          className="mt-3"
          placeholder="(Isi bila mengajukan ganti dosen pembimbing dan telah mendapatkan izin dari dospem lama bahwa hendak mengganti dospem)"
          onBlur={(e) =>
            setPengajuanJudul({
              ...pengajuanJudul,
              prev_dospem: e.target.value,
            })
          }
        ></Input>
        <RadioGroup
          label="Dosen Pembimbing 1 yang Diajukan"
          size="sm"
          className="mt-3"
          isRequired
          onChange={(e) =>
            setPengajuanJudul({
              ...pengajuanJudul,
              dospem_1: e.target.value,
            })
          }
        >
          {radioDosenPembimbing.map((el) => (
            <Radio value={el.id}>{el.descr}</Radio>
          ))}
        </RadioGroup>
      </div>
      <div className="col-span-12">
        <RadioGroup
          label="Dosen Pembimbing 2 yang Diajukan"
          size="sm"
          className="mt-3"
          isRequired
          onChange={(e) =>
            setPengajuanJudul({
              ...pengajuanJudul,
              dospem_2: e.target.value,
            })
          }
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
          value={pengajuanJudul?.naskah_proposal?.name}
        ></Input>
        <input
          type="file"
          hidden
          ref={fileRef}
          onChange={handleProposalChange}
        />

        <RadioGroup
          label="Skema Skripsi (Yang diminati dan sudah mendapatkan acc dari Dosen Pembimbing 1 yang diajukan)"
          size="sm"
          className="mt-3"
          isRequired
          onChange={(e) =>
            setPengajuanJudul({
              ...pengajuanJudul,
              skema_skripsi: e.target.value,
            })
          }
        >
          {radioSkema.map((el) => (
            <Radio value={el.id}>{el.descr}</Radio>
          ))}
        </RadioGroup>
        <Button color="primary" variant="shadow" className="my-3">
          Submit
        </Button>
      </div>
    </div>
  );
}
