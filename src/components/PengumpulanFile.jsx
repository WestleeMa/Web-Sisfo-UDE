import { Input } from "@nextui-org/react";
import { useRef, useState } from "react";
import { Button } from "@nextui-org/react";
import { Cookies } from "react-cookie";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { sendFormData } from "../data/api-sisfo-ude";

export default function PengumpulanFile() {
  const cookies = new Cookies();
  const [formInput, setFormInput] = useState({});

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
          const response = await sendFormData(3, formData1);
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
    const { name, files, value } = e.target;
    if (files && files.length > 0) {
      setFormInput((prevInput) => ({
        ...prevInput,
        [name]: files[0],
      }));
    } else if (value) {
      setFormInput((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    }
  };

  const transkripRef = useRef(null);
  const suratPernyataanRef = useRef(null);
  const hasilEPTRef = useRef(null);
  const hasilTurnitinSemproRef = useRef(null);
  const biayaStudiRef = useRef(null);
  const softSkillRef = useRef(null);
  const hasilTurnitinSidangRef = useRef(null);
  const draftArtikelJurnalRef = useRef(null);
  const hasilITPRef = useRef(null);
  const ijazahSMARef = useRef(null);

  return (
    <div className="grid grid-cols-12 gap-4 m-5 mb-[5rem] w-[65rem]">
      <div className="md:col-span-6 col-span-12">
        <Input
          label="Upload data transkrip sementara, status kelulusan semua mata kuliah"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(Transkrip sementara (146 SKS), lulus semua mata kuliah, tidak ada nilai D dan E, IP min 2.75)"
          readOnly
          onClick={() => transkripRef.current.click()}
          value={formInput?.File_Transkrip?.name || ""}
        ></Input>
        <input
          type="file"
          hidden
          ref={transkripRef}
          name="File_Transkrip"
          onChange={handleProposalChange}
        />
        <Input
          label="Surat Pernyataan Skripsi Bebas Plagiat"
          size="sm"
          className="mt-3 cursor-pointer"
          readOnly
          onClick={() => suratPernyataanRef.current.click()}
          value={formInput?.File_Bebas_plagiat?.name || ""}
        ></Input>
        <input
          type="file"
          hidden
          ref={suratPernyataanRef}
          name="File_Bebas_plagiat"
          onChange={handleProposalChange}
        />
        <Input
          label="Hasil EPT yang Diperoleh"
          size="sm"
          placeholder="(≥500), contoh: 503"
          className="my-3"
          name="Skor_EPT"
          onChange={handleProposalChange}
        ></Input>
        <Input
          label="Upload Hasil EPT"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(≥500)"
          readOnly
          onClick={() => hasilEPTRef.current.click()}
          value={formInput?.File_Hasil_EPT?.name || ""}
        ></Input>
        <input
          type="file"
          hidden
          ref={hasilEPTRef}
          name="File_Hasil_EPT"
          onChange={handleProposalChange}
        />
        <Input
          label="Hasil Turnitin Naskah Sempro"
          size="sm"
          placeholder="(Maks kemiripan 20%), contoh: 15 %"
          className="my-3"
          name="Hasil_Turnitin_sempro"
          onChange={handleProposalChange}
        ></Input>
        <Input
          label="Upload Hasil Turnitin Naskah Sempro"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(Maks kemiripan 20%, file PDF yang terdapat koreksian review dari Turnitin)"
          readOnly
          onClick={() => hasilTurnitinSemproRef.current.click()}
          value={formInput?.File_Hasil_Turnitin_sempro?.name || ""}
        ></Input>
        <input
          type="file"
          hidden
          ref={hasilTurnitinSemproRef}
          name="File_Hasil_Turnitin_sempro"
          onChange={handleProposalChange}
        />
        <Input
          label="Telah Melunasi Biaya Studi"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(Balance = 0; Screenshot dari SISFO)"
          readOnly
          onClick={() => biayaStudiRef.current.click()}
          value={formInput?.File_bukti_lunas?.name || ""}
        ></Input>
        <input
          type="file"
          hidden
          ref={biayaStudiRef}
          name="File_bukti_lunas"
          onChange={handleProposalChange}
        />
        <Input
          label="Poin Soft-Skill Minimal 100"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(Surat Keterangan dari Unit SSS)"
          readOnly
          onClick={() => softSkillRef.current.click()}
          value={formInput?.File_bukti_softskills?.name || ""}
        ></Input>
        <input
          type="file"
          hidden
          ref={softSkillRef}
          name="File_bukti_softskills"
          onChange={handleProposalChange}
        />
      </div>
      <div className="md:col-span-6 col-span-12">
        <Input
          label="Hasil Turnitin Naskah Sidang Skripsi"
          size="sm"
          placeholder="(Maks kemiripan 20%),  contoh: 15 %"
          className="my-3"
          name="Hasil_Turnitin_skripsi"
          onChange={handleProposalChange}
        ></Input>
        <Input
          label="Upload Hasil Turnitin Naskah Sidang Skripsi"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(Maks kemiripan 20%)"
          readOnly
          onClick={() => hasilTurnitinSidangRef.current.click()}
          value={formInput?.File_Hasil_Turnitin_skripsi?.name || ""}
        ></Input>
        <input
          type="file"
          hidden
          ref={hasilTurnitinSidangRef}
          name="File_Hasil_Turnitin_skripsi"
          onChange={handleProposalChange}
        />
        <Input
          label="Draft Artikel Jurnal"
          size="sm"
          className="mt-3 cursor-pointer"
          readOnly
          onClick={() => draftArtikelJurnalRef.current.click()}
          value={formInput?.File_draft_artikel_jurnal?.name || ""}
        ></Input>
        <input
          type="file"
          hidden
          ref={draftArtikelJurnalRef}
          name="File_draft_artikel_jurnal"
          onChange={handleProposalChange}
        />
        <Input
          label="Hasil ITP/Duolingo/IELTS/iBT"
          size="sm"
          placeholder="(Minimal ekuivalen 500 ITP, berlaku 1 tahun sejak tanggal test), Contoh: 503"
          className="my-3"
          name="Hasil_ITP"
          onChange={handleProposalChange}
        ></Input>
        <Input
          label="Hasil ITP/Duolingo/IELTS/iBT"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(Minimal ekuivalen 500 ITP, berlaku 1 tahun sejak tanggal test)"
          readOnly
          onClick={() => hasilITPRef.current.click()}
          value={formInput?.File_Hasil_ITP?.name || ""}
        ></Input>
        <input
          type="file"
          hidden
          ref={hasilITPRef}
          name="File_Hasil_ITP"
          onChange={handleProposalChange}
        />
        <Input
          label="Link Lembar Bimbingan Skripsi"
          size="sm"
          placeholder="(Sekurang-kurangnya 10 kali bimbingan sebagai syarat mendaftar sidang skripsi dan menyisipkan foto tanda tangan diri)"
          className="my-3"
          name="Link_lembar_bimbingan"
          onChange={handleProposalChange}
        ></Input>
        <Input
          label="Ijazah SMA"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(foto/ scan jelas tidak berbayang)"
          readOnly
          onClick={() => ijazahSMARef.current.click()}
          value={formInput?.Foto_Ijazah_SMA?.name || ""}
        ></Input>
        <input
          type="file"
          hidden
          ref={ijazahSMARef}
          name="Foto_Ijazah_SMA"
          onChange={handleProposalChange}
        />
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
