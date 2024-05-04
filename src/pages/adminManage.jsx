import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
import MngInfo from "../components/TabelInformasi";
import MngThesis from "../components/TabelThesis";

export default function Manage() {
  const [tableOptions, _] = useState([
    { id: 1, descr: "Informasi" },
    { id: 2, descr: "Thesis" },
  ]);

  const [selectedTable, setSelectedTable] = useState(null);
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
            {selectedTable == 2 && <MngThesis />}
          </CardBody>
        </Card>
      )}
    </>
  );
}
