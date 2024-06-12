import { Input, Radio, RadioGroup, Button } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { sendFormData, getDosen } from "../data/api-sisfo-ude";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Cookies } from "react-cookie";

export default function PengajuanJudul() {
  const cookies = new Cookies();
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

  const [radioDosenPembimbing, setDosen] = useState([]);

  useEffect(() => {
    const fetchDosen = async () => {
      const response = await getDosen();
      setDosen(response);
    };
    fetchDosen();
  });

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

  const objectToFormData = (obj) => {
    const formData = new FormData();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        formData.append(key, obj[key]);
      }
    }
    const NI = cookies.get("userData").Nomor_Induk;
    formData.append("NIM", NI);
    return formData;
  };

  const handleSubmit = () => {
    try {
      console.log(pengajuanJudul);
      Swal.fire({
        title: "Are you sure?",
        text: "You can submit again if there's changes",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const formData1 = objectToFormData(pengajuanJudul);

          const response = await sendFormData(1, formData1);
          if (response.status === 200) {
            toast.success(response.data);
          } else {
            toast.error(response.data);
          }
        } else {
          toast.error("Cancelled");
        }
      });
    } catch (err) {
      throw err;
    }
  };

  const handleProposalChange = (e) => {
    const file = e.target.files[0];
    setPengajuanJudul({ ...pengajuanJudul, Draft_naskah: file });
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
              Bidang_kajian: e.target.value,
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
              Judul_skripsi: e.target.value,
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
              Judul_sebelum: e.target.value,
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
              Dospem_sebelum: e.target.value,
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
              Dospem1: e.target.value,
            })
          }
        >
          {radioDosenPembimbing.map((el) => (
            <Radio value={el.key_dosen}>{el.Nama}</Radio>
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
              Dospem2: e.target.value,
            })
          }
        >
          {radioDosenPembimbing.map((el) => (
            <Radio value={el.key_dosen}>{el.Nama}</Radio>
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
          value={pengajuanJudul?.Draft_naskah?.name}
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
              Skema_skripsi: e.target.value,
            })
          }
        >
          {radioSkema.map((el) => (
            <Radio value={el.id}>{el.descr}</Radio>
          ))}
        </RadioGroup>
        <Button
          color="primary"
          variant="shadow"
          className="my-3"
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
