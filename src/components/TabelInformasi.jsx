import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Image,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { deleteInfo, getInfo } from "../data/api-sisfo-ude";
import ModalComp from "./modalInfo";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function MngInfo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [informationData, setInformationData] = useState([]);
  const [editData, setEditData] = useState();

  const fetchData = async () => {
    try {
      const data = await getInfo();
      setInformationData(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleModal = (item) => {
    if (item) {
      setEditData(item);
    } else {
      setEditData(null);
    }
  };

  const handleDelete = async (Info_ID) => {
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
          const response = await deleteInfo(Info_ID);
          toast.success(response);
        } else {
          toast.error("Information Deletion Cancelled.");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Description</TableColumn>
          <TableColumn>Image</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {informationData.map((items) => (
            <TableRow key={items.Info_ID}>
              <TableCell>{items.Info_ID}</TableCell>
              <TableCell>{items.Title}</TableCell>
              <TableCell className="truncate max-w-xs">
                {items.Description}
              </TableCell>
              <TableCell>
                <Image
                  width="200"
                  src={`http://localhost:5000/info/image?Info_ID=${items.Info_ID}`}
                ></Image>
              </TableCell>
              <TableCell>
                <Button
                  color="warning"
                  variant="shadow"
                  className="mx-3"
                  onPress={onOpen}
                  onClick={() => handleModal(items)}
                >
                  Edit
                </Button>

                <Button
                  color="danger"
                  variant="shadow"
                  className="mx-3"
                  onClick={() => handleDelete(items.Info_ID)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        className="mt-3"
        color="primary"
        onPress={onOpen}
        onClick={() => handleModal()}
      >
        Add Information
      </Button>
      <ModalComp
        items={editData}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      ></ModalComp>
    </>
  );
}
