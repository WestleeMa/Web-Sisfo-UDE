import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
import PengajuanJudul from "../components/PengajuanJudul";
import PendaftaranSeminar from "../components/PendaftaranSeminarThesis";
import PengumpulanFile from "../components/PengumpulanFile";
import PendaftaranSidang from "../components/PendaftaranSidang";

export default function FormOption() {
  const [formOptions, _] = useState([
    { id: 1, descr: "Pengajuan Judul dan Dosen Pembimbing Skripsi" },
    { id: 2, descr: "Pendaftaran Ujian Seminar of Thesis Proposal" },
    { id: 3, descr: "Pengumpulan File: Syarat Sidang Skripsi" },
    { id: 4, descr: "Pendaftaran Sidang Skripsi" },
  ]);

  const [selectedForm, setSelectedForm] = useState(1);
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <div className="md:col-span-4 col-span-12">
          <Card radius="sm" className="w-[25rem]">
            <CardHeader className="bg-sky-900 text-white font-bold">
              JENIS LAYANAN
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="m-2">
                <Select
                  label="Pilih Jenis Layanan"
                  size="sm"
                  defaultSelectedKeys={selectedForm.toString()}
                  onChange={(e) => setSelectedForm(e.target.value)}
                >
                  {formOptions.map((el) => (
                    <SelectItem key={el.id} value={el.id}>
                      {el.descr}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="md:col-span-8 col-span-12">
          {selectedForm && (
            <Card radius="sm">
              <CardHeader className="bg-sky-900 text-white font-bold">
                Layanan{" "}
                {formOptions.filter((el) => el.id == selectedForm)[0].descr}
              </CardHeader>
              <CardBody>
                {selectedForm == 1 && <PengajuanJudul />}
                {selectedForm == 2 && <PendaftaranSeminar />}
                {selectedForm == 3 && <PengumpulanFile />}
                {selectedForm == 4 && <PendaftaranSidang />}
              </CardBody>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
