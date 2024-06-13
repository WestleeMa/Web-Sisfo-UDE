import { Input, Radio, RadioGroup } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/react";
import { Cookies } from "react-cookie";
import {
  getDosen,
  getKajian,
  getSkema,
  sendFormData,
} from "../data/api-sisfo-ude";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function PendaftaranSidang() {
  const cookies = new Cookies();
  const [formInput, setFormInput] = useState({});

  const [radioKajianSkripsi, setKajian] = useState([]);
  const [radioSkema, setSkema] = useState([]);
  const [radioDosenPembimbing, setDosen] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      const responseDosen = await getDosen();
      const responseKajian = await getKajian();
      const responseSkema = await getSkema();
      setDosen(responseDosen);
      setKajian(responseKajian);
      setSkema(responseSkema);
    };
    fetchDatas();
  }, []);

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
      Swal.fire({
        title: "Are you sure?",
        text: "You can submit again if there's any changes",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const formData1 = objectToFormData(formInput);
          const response = await sendFormData(4, formData1);
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
    setFormInput({ ...formInput, Bukti_approval: file });
  };
  const fileRef = useRef(null);
  return (
    <div className="grid grid-cols-12 gap-4 m-5 mb-[5rem] w-[65rem]">
      <div className="md:col-span-6 col-span-12">
        <Input
          label="Judul Skripsi"
          size="sm"
          className="my-3"
          isRequired
          onBlur={(e) =>
            setFormInput({
              ...formInput,
              Judul_skripsi: e.target.value,
            })
          }
        ></Input>
        <RadioGroup
          label="Bidang Kajian Skripsi"
          size="sm"
          isRequired
          onChange={(e) =>
            setFormInput({
              ...formInput,
              Bidang_kajian: e.target.value,
            })
          }
        >
          {radioKajianSkripsi.map((el) => (
            <Radio value={el.id}>{el.descr}</Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          label="Skema Skripsi"
          size="sm"
          className="mt-3"
          isRequired
          onChange={(e) =>
            setFormInput({
              ...formInput,
              Skema_skripsi: e.target.value,
            })
          }
        >
          {radioSkema.map((el) => (
            <Radio value={el.id}>{el.descr}</Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          label="Nama Pembimbing Skripsi (Penguji 1), yang ditetapkan oleh UDE
          "
          size="sm"
          className="mt-3"
          isRequired
          onChange={(e) =>
            setFormInput({
              ...formInput,
              Penguji1: e.target.value,
            })
          }
        >
          {radioDosenPembimbing.map((el) => (
            <Radio value={el.key_dosen}>{el.Nama}</Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          label="Nama Penguji 2, yang ditetapkan oleh UDE"
          size="sm"
          className="mt-3"
          isRequired
          onChange={(e) =>
            setFormInput({
              ...formInput,
              Penguji2: e.target.value,
            })
          }
        >
          {radioDosenPembimbing.map((el) => (
            <Radio value={el.key_dosen}>{el.Nama}</Radio>
          ))}
        </RadioGroup>
      </div>
      <div className="md:col-span-6 col-span-12">
        <RadioGroup
          label="Nama Penguji 3, yang ditetapkan oleh UDE"
          size="sm"
          className="mt-3"
          isRequired
          onChange={(e) =>
            setFormInput({
              ...formInput,
              Penguji3: e.target.value,
            })
          }
        >
          {radioDosenPembimbing.map((el) => (
            <Radio value={el.key_dosen}>{el.Nama}</Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          label="Nama Pembimbing Akademik
          "
          size="sm"
          className="mt-3"
          isRequired
          onChange={(e) =>
            setFormInput({
              ...formInput,
              PA: e.target.value,
            })
          }
        >
          {radioDosenPembimbing.map((el) => (
            <Radio value={el.key_dosen}>{el.Nama}</Radio>
          ))}
        </RadioGroup>
        <Input
          label="Bukti Approval Dospem untuk Daftar Ujian"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(PDF Email/screenshot WhatsApp yang ada tertera teks approval dari Dospem)"
          readOnly
          isRequired
          onClick={() => fileRef.current.click()}
          value={formInput?.Bukti_approval?.name}
        ></Input>
        <input
          type="file"
          hidden
          ref={fileRef}
          onChange={handleProposalChange}
        />
        <Input
          label="Link Google Doc: Naskah Skripsi Bab 1-5"
          size="sm"
          className="my-3"
          placeholder="(yang sudah di acc oleh pembimbing skripsi, UDE diberi akses dapat meng-Edit)"
          isRequired
          onBlur={(e) =>
            setFormInput({
              ...formInput,
              Link_Google_docs: e.target.value,
            })
          }
        ></Input>
        <Input
          label="Link Video Presentasi"
          size="sm"
          className="my-3"
          placeholder="(Yang sudah di acc Pembimbing)"
          isRequired
          onBlur={(e) =>
            setFormInput({
              ...formInput,
              Link_Video_presentasi: e.target.value,
            })
          }
        ></Input>
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
