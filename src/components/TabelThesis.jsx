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
import Swal from "sweetalert2";
import ModalComp from "./modalThesis";
import { useEffect, useState } from "react";
import { getAllFormData, deleteFormData } from "../data/api-sisfo-ude";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function deleteForm(formID, NIM, refreshData) {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to restore deleted data(s)",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteFormData(formID, NIM);
        toast.success(response, {
          position: "top-right",
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        refreshData(NIM);
      } else {
        toast.error("Form Data Deletion Cancelled.", {
          position: "top-right",
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function MngThesis1() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState();
  console.log(data);
  const fetchData = async () => {
    try {
      const result = await getAllFormData(1);
      setData(result[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const updateDataState = (NIM) => {
    setData((prevData) => prevData.filter((item) => item.NIM !== NIM));
  };
  useEffect(() => {
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
                  onClick={() => {
                    setModalData(item);
                  }}
                >
                  Details
                </Button>

                <Button
                  color="danger"
                  variant="shadow"
                  className="mx-3"
                  onPress={() => deleteForm(1, item.NIM, updateDataState)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ModalComp
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        formID="1"
        data={modalData}
      ></ModalComp>
    </>
  );
}

function MngThesis2() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState();
  console.log(data);
  const fetchData = async () => {
    try {
      const result = await getAllFormData(2);
      setData(result[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const updateDataState = (NIM) => {
    setData((prevData) => prevData.filter((item) => item.NIM !== NIM));
  };
  useEffect(() => {
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
                <Button
                  color="warning"
                  variant="shadow"
                  className="mx-3"
                  onPress={onOpen}
                  onClick={() => setModalData(item)}
                >
                  Details
                </Button>
                <Button
                  color="danger"
                  variant="shadow"
                  className="mx-3"
                  onPress={() => deleteForm(2, item.NIM, updateDataState)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ModalComp
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        data={modalData}
        formID="2"
      ></ModalComp>
    </>
  );
}

function MngThesis3() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState();
  console.log(data);
  const fetchData = async () => {
    try {
      const result = await getAllFormData(3);
      setData(result[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const updateDataState = (NIM) => {
    setData((prevData) => prevData.filter((item) => item.NIM !== NIM));
  };
  useEffect(() => {
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
                <Button
                  color="warning"
                  variant="shadow"
                  className="mx-3"
                  onPress={onOpen}
                  onClick={() => setModalData(item)}
                >
                  Details
                </Button>

                <Button
                  color="danger"
                  variant="shadow"
                  className="mx-3"
                  onPress={() => deleteForm(3, item.NIM, updateDataState)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ModalComp
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        data={modalData}
        formID="3"
      ></ModalComp>
    </>
  );
}

function MngThesis4() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState();
  console.log(data);
  const fetchData = async () => {
    try {
      const result = await getAllFormData(4);
      setData(result[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const updateDataState = (NIM) => {
    setData((prevData) => prevData.filter((item) => item.NIM !== NIM));
  };
  useEffect(() => {
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
                <Button
                  color="warning"
                  variant="shadow"
                  className="mx-3"
                  onPress={onOpen}
                  onClick={() => setModalData(item)}
                >
                  Details
                </Button>
                <Button
                  color="danger"
                  variant="shadow"
                  className="mx-3"
                  onPress={() => deleteForm(4, item.NIM, updateDataState)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ModalComp
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        data={modalData}
        formID="4"
      ></ModalComp>
    </>
  );
}

export { MngThesis1, MngThesis2, MngThesis3, MngThesis4 };
