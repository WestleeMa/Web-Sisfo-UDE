import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import MngInfo from "../components/TabelInformasi";
import {
  MngThesis1,
  MngThesis2,
  MngThesis3,
  MngThesis4,
} from "../components/TabelThesis";

export default function Manage() {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (cookie.get("userData").role === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
      navigate("/");
    }
  }, []);
  const [tableOptions, _] = useState([
    { id: 1, descr: "Informasi" },
    { id: 2, descr: "Pengajuan Judul dan Dosen Pembimbing Skripsi" },
    { id: 3, descr: "Pendaftaran Ujian Seminar of Thesis Proposal" },
    { id: 4, descr: "Pengumpulan File: Syarat Sidang Skripsi" },
    { id: 5, descr: "Pendaftaran Sidang Skripsi" },
  ]);

  const [selectedTable, setSelectedTable] = useState(null);
  if (!isAdmin) {
    return null;
  } else {
    return (
      <>
        <div className="my-5">
          <Card radius="sm">
            <CardHeader className="bg-sky-900 text-white font-bold">
              Manajemen Thesis & Informasi
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="m-2">
                <Select
                  label="Pilih Jenis Layanan"
                  size="sm"
                  onChange={(e) => setSelectedTable(e.target.value)}
                >
                  {tableOptions.map((el) => (
                    <SelectItem key={el.id} value={el.id}>
                      {el.descr}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </CardBody>
          </Card>
        </div>
        {selectedTable && (
          <Card radius="sm">
            <CardHeader className="bg-sky-900 text-white font-bold">
              Layanan{" "}
              {tableOptions.filter((el) => el.id == selectedTable)[0].descr}
            </CardHeader>
            <CardBody>
              {selectedTable == 1 && <MngInfo />}
              {selectedTable == 2 && <MngThesis1 />}
              {selectedTable == 3 && <MngThesis2 />}
              {selectedTable == 4 && <MngThesis3 />}
              {selectedTable == 5 && <MngThesis4 />}
            </CardBody>
          </Card>
        )}
      </>
    );
  }
}
