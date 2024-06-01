import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import ModalComp from "./modalThesis";
import { useEffect, useState } from "react";
import { getAllFormData } from "../data/api-sisfo-ude";

//pengajuan judul
function MngThesis1() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
          <TableColumn>Skema Skripsi</TableColumn>
          <TableColumn>Timestamps</TableColumn>
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
              <TableCell>{item.Skema_skripsi}</TableCell>
              <TableCell>{item.Timestamps}</TableCell>
              <TableCell>
                <Button
                  color="warning"
                  variant="shadow"
                  className="mx-3"
                  onPress={onOpen}
                >
                  Details
                </Button>
                <Button color="danger" variant="shadow" className="mx-3">
                  Delete
                </Button>
                <ModalComp
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  NIM={item.NIM}
                  formID="1"
                ></ModalComp>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

function MngThesis2() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllFormData(2);
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
          <TableColumn>Skema Skripsi</TableColumn>
          <TableColumn>Dosen Penguji 1</TableColumn>
          <TableColumn>Dosen Penguji 2</TableColumn>
          <TableColumn>Dosen Penguji 3</TableColumn>
          <TableColumn>Dosen PA</TableColumn>
          <TableColumn>Link Google</TableColumn>
          <TableColumn>Timestamps</TableColumn>
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
              <TableCell>{item.Skema_skripsi}</TableCell>
              <TableCell>{item.Penguji1}</TableCell>
              <TableCell>{item.Penguji2}</TableCell>
              <TableCell>{item.Penguji3}</TableCell>
              <TableCell>{item.PA}</TableCell>
              <TableCell>{item.Link_google}</TableCell>
              <TableCell>{item.Timestamps}</TableCell>

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

function MngThesis3() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllFormData(3);
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
          <TableColumn>Skor EPT</TableColumn>
          <TableColumn>Hasil Turnitin Sempro</TableColumn>
          <TableColumn>Hasil Turnitin Skripsi</TableColumn>
          <TableColumn>Hasil ITP</TableColumn>
          <TableColumn>Link lembar bimbingan</TableColumn>
          <TableColumn>Timestamps</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.Submission_ID}>
              <TableCell>{item.Submission_ID}</TableCell>
              <TableCell>{item.NIM}</TableCell>
              <TableCell>{item.Nama}</TableCell>
              <TableCell>{item.Skor_EPT}</TableCell>
              <TableCell>{item.Hasil_Turnitin_sempro}</TableCell>
              <TableCell>{item.Hasil_Turnitin_skripsi}</TableCell>
              <TableCell>{item.Hasil_ITP}</TableCell>
              <TableCell>{item.Link_lembar_bimbingan}</TableCell>
              <TableCell>{item.Timestamps}</TableCell>

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

function MngThesis4() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllFormData(4);
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
          <TableColumn>Bidang_kajian</TableColumn>
          <TableColumn>Skema_skripsi</TableColumn>
          <TableColumn>Dosen Penguji 1</TableColumn>
          <TableColumn>Dosen Penguji 2</TableColumn>
          <TableColumn>Dosen Penguji 3</TableColumn>
          <TableColumn>Dosen PA</TableColumn>
          <TableColumn>Link Google Docs</TableColumn>
          <TableColumn>Link Video Presentasi</TableColumn>
          <TableColumn>Timestamps</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.Submission_ID}>
              <TableCell>{item.Submission_ID}</TableCell>
              <TableCell>{item.NIM}</TableCell>
              <TableCell>{item.Nama}</TableCell>
              <TableCell>{item.Bidang_kajian}</TableCell>
              <TableCell>{item.Skema_skripsi}</TableCell>
              <TableCell>{item.Penguji1}</TableCell>
              <TableCell>{item.Penguji2}</TableCell>
              <TableCell>{item.Penguji3}</TableCell>
              <TableCell>{item.PA}</TableCell>
              <TableCell>{item.Link_Google_docs}</TableCell>
              <TableCell>{item.Link_Video_presentasi}</TableCell>
              <TableCell>{item.Timestamps}</TableCell>

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

export { MngThesis1, MngThesis2, MngThesis3, MngThesis4 };
