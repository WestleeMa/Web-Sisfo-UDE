import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getAllFormData } from "../data/api-sisfo-ude";

//pengajuan judul
export default function MngThesis1() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllFormData(1);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>NIM</TableColumn>
          <TableColumn>Nama</TableColumn>
          <TableColumn>Bidang Kajian</TableColumn>
          <TableColumn>Judul Skripsi</TableColumn>
          <TableColumn>Dosen Pembimbing 1</TableColumn>
          <TableColumn>Dosen Pembimbing 2</TableColumn>
          <TableColumn>Draft Naskah</TableColumn>
          <TableColumn>Skema Skripsi</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.Submission_ID}>
              <TableCell>{item.Submission_ID}</TableCell>
              <TableCell>{item.NIM}</TableCell>
              <TableCell>{item.Nama}</TableCell>
              <TableCell>{item.Bidang_kajian}</TableCell>
              <TableCell>{item.Judul_skripsi}</TableCell>
              <TableCell>{item.Dospem1}</TableCell>
              <TableCell>{item.Dospem2}</TableCell>
              <TableCell>{item.Draft_naskah}</TableCell>
              <TableCell>{item.Skema_skripsi}</TableCell>
              <TableCell>
                <Button color="warning" variant="shadow" className="mx-3">
                  Details
                </Button>
                <Button color="danger" variant="shadow" className="mx-3">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
