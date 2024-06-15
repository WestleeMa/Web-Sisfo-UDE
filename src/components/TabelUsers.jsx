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
import { deleteUser, getUsers } from "../data/api-sisfo-ude";
import ModalComp from "./modalUser";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function MngUser() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [userData, setuserData] = useState([]);
  const [editData, setEditData] = useState();

  const fetchData = async () => {
    try {
      const data = await getUsers();
      setuserData(data);
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

  const handleDelete = async (NI) => {
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
          const response = await deleteUser(NI);
          toast.success(response);
        } else {
          toast.error("user Deletion Cancelled.");
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
          <TableColumn>Nomor Induk</TableColumn>
          <TableColumn>Nama</TableColumn>
          <TableColumn>Description</TableColumn>
          <TableColumn>Photo</TableColumn>
          <TableColumn>Role</TableColumn>
          <TableColumn>E-mail</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {userData.map((items) => (
            <TableRow key={items.Nomor_Induk}>
              <TableCell>{items.Nomor_Induk}</TableCell>
              <TableCell>{items.Name}</TableCell>
              <TableCell>{items.Extra_Desc}</TableCell>
              <TableCell>
                <Image
                  width="200"
                  src={`http://localhost:5000/userImg?Nomor_Induk=${items.Nomor_Induk}`}
                ></Image>
              </TableCell>
              <TableCell>{items.Role}</TableCell>
              <TableCell>{items.email}</TableCell>
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
                  onClick={() => handleDelete(items.Nomor_Induk)}
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
        Add user
      </Button>
      <ModalComp
        items={editData}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      ></ModalComp>
    </>
  );
}
