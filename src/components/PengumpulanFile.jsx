import { Input, Radio, RadioGroup } from "@nextui-org/react";
import { useRef } from "react";
import { Button } from "@nextui-org/react";

export default function PengumpulanFile() {
  const fileRef = useRef(null);
  return (
    <div className="grid grid-cols-12 gap-4 m-5 mb-[5rem]">
      <div className="md:col-span-6 col-span-12">
        <Input
          label="Upload data transkrip sementara, status kelulusan semua mata kuliah"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(Transkrip sementara (146 SKS), lulus semua mata kuliah, tidak ada nilai D dan E, IP min 2.75)"
          readOnly
          isRequired
          onClick={() => fileRef.current.click()}
        ></Input>
        <input type="file" hidden ref={fileRef} />
        <Input
          label="Surat Pernyataan Skripsi Bebas Plagiat"
          size="sm"
          className="mt-3 cursor-pointer"
          readOnly
          isRequired
          onClick={() => fileRef.current.click()}
        ></Input>
        <input type="file" hidden ref={fileRef} />
        <Input
          label="Hasil EPT yang Diperoleh"
          size="sm"
          placeholder="(≥500), contoh: 503"
          className="my-3"
          isRequired
        ></Input>
        <Input
          label="Upload Hasil EPT"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(≥500)"
          readOnly
          isRequired
          onClick={() => fileRef.current.click()}
        ></Input>
        <input type="file" hidden ref={fileRef} />
        <Input
          label="Hasil Turnitin Naskah Sempro"
          size="sm"
          placeholder="(Maks kemiripan 20%), contoh: 15 %"
          className="my-3"
          isRequired
        ></Input>
        <Input
          label="Upload Hasil Turnitin Naskah Sempro"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(Maks kemiripan 20%, file PDF yang terdapat koreksian review dari Turnitin)"
          readOnly
          isRequired
          onClick={() => fileRef.current.click()}
        ></Input>
        <input type="file" hidden ref={fileRef} />
        <Input
          label="Telah Melunasi Biaya Studi"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(Balance = 0; Screenshot dari SISFO)"
          readOnly
          isRequired
          onClick={() => fileRef.current.click()}
        ></Input>
        <input type="file" hidden ref={fileRef} />
        <Input
          label="Poin Soft-Skill Minimal 100"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(Surat Keterangan dari Unit SSS)"
          readOnly
          isRequired
          onClick={() => fileRef.current.click()}
        ></Input>
        <input type="file" hidden ref={fileRef} />
      </div>
      <div className="md:col-span-6 col-span-12">
        <Input
          label="Hasil Turnitin Naskah Sidang Skripsi"
          size="sm"
          placeholder="(Maks kemiripan 20%),  contoh: 15 %"
          className="my-3"
          isRequired
        ></Input>
        <Input
          label="Upload Hasil Turnitin Naskah Sidang Skripsi"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(Maks kemiripan 20%)"
          readOnly
          isRequired
          onClick={() => fileRef.current.click()}
        ></Input>
        <input type="file" hidden ref={fileRef} />
        <Input
          label="Draft Artikel Jurnal"
          size="sm"
          className="mt-3 cursor-pointer"
          readOnly
          isRequired
          onClick={() => fileRef.current.click()}
        ></Input>
        <input type="file" hidden ref={fileRef} />
        <Input
          label="Hasil ITP/Duolingo/IELTS/iBT"
          size="sm"
          placeholder="(Minimal ekuivalen 500 ITP, berlaku 1 tahun sejak tanggal test), Contoh: 503"
          className="my-3"
          isRequired
        ></Input>
        <Input
          label="Hasil ITP/Duolingo/IELTS/iBT"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(Minimal ekuivalen 500 ITP, berlaku 1 tahun sejak tanggal test)"
          readOnly
          isRequired
          onClick={() => fileRef.current.click()}
        ></Input>
        <input type="file" hidden ref={fileRef} />
        <Input
          label="Link Lembar Bimbingan Skripsi"
          size="sm"
          placeholder="(Sekurang-kurangnya 10 kali bimbingan sebagai syarat mendaftar sidang skripsi dan menyisipkan foto tanda tangan diri)"
          className="my-3"
          isRequired
        ></Input>
        <Input
          label="Ijazah SMA"
          size="sm"
          className="mt-3 cursor-pointer"
          placeholder="(foto/ scan jelas tidak berbayang)"
          readOnly
          isRequired
          onClick={() => fileRef.current.click()}
        ></Input>
        <input type="file" hidden ref={fileRef} />
        <Button color="primary" variant="shadow" className="my-3">
          Submit
        </Button>
      </div>
    </div>
  );
}
