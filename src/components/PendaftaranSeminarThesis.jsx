import { Input, Radio, RadioGroup } from "@nextui-org/react";
import { useRef } from "react";
import imgSkema from "../assets/Syarat skema skripsi (1).png";
import { Button } from "@nextui-org/react";

export default function PendaftaranSeminar() {
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
    <div className="grid grid-cols-12 gap-4 m-5 mb-[5rem]">
      <div className="md:col-span-6 col-span-12">
        <Input
          label="Judul Skripsi"
          size="sm"
          className="my-3"
          isRequired
        ></Input>
        <RadioGroup label="Bidang Kajian Skripsi" size="sm" isRequired>
          {radioKajianSkripsi.map((el) => (
            <Radio value={el.id}>{el.descr}</Radio>
          ))}
        </RadioGroup>
        <div>
          <RadioGroup
            label="Skema Skripsi"
            size="sm"
            className="mt-3"
            isRequired
          >
            <img src={imgSkema} alt="" />
            {radioSkema.map((el) => (
              <Radio value={el.id}>{el.descr}</Radio>
            ))}
          </RadioGroup>
        </div>
        <Input
          label="Judul Skripsi Sebelumnya"
          size="sm"
          className="mt-3"
          placeholder="(Isi bila mengusulkan ganti judul)"
        ></Input>
        <RadioGroup
          label="Nama Pembimbing Skripsi (Penguji 1), yang ditetapkan oleh UDE
          "
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
          label="Nama Penguji 2, yang ditetapkan oleh UDE"
          size="sm"
          className="mt-3"
          isRequired
        >
          {radioDosenPembimbing.map((el) => (
            <Radio value={el.id}>{el.descr}</Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          label="Nama Penguji 3, yang ditetapkan oleh UDE"
          size="sm"
          className="mt-3"
          isRequired
        >
          {radioDosenPembimbing.map((el) => (
            <Radio value={el.id}>{el.descr}</Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          label="Nama Pembimbing Akademik
          "
          size="sm"
          className="mt-3"
          isRequired
        >
          {radioDosenPembimbing.map((el) => (
            <Radio value={el.id}>{el.descr}</Radio>
          ))}
        </RadioGroup>
        <Input
          label="Bukti Approval Dospem untuk Daftar Ujiann"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(PDF Email/screenshot WhatsApp yang ada tertera teks approval dari Dospem)"
          readOnly
          isRequired
          onClick={() => fileRef.current.click()}
        ></Input>
        <input type="file" hidden ref={fileRef} />
        <Input
          label="Link Google Doc: Naskah Skripsi Bab 1-3"
          size="sm"
          className="my-3"
          placeholder="(yang sudah di acc oleh pembimbing skripsi, UDE diberi akses dapat meng-Edit)"
          isRequired
        ></Input>
        <Button color="primary" variant="shadow" className="my-3">
          Submit
        </Button>
      </div>
    </div>
  );
}
