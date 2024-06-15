import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Image,
} from "@nextui-org/react";
import { editUser, registUser } from "../data/api-sisfo-ude";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function ModalComp({ isOpen, onOpenChange, items }) {
  const [formData, setFormData] = useState([]);
  const [addOrEdit, setAoe] = useState([]);
  const [NomorInduk, setNomorInduk] = useState([]);

  const objectToFormData = (obj) => {
    const formData = new FormData();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        formData.append(key, obj[key]);
      }
    }
    if (NomorInduk && addOrEdit === "Edit") {
      formData.append("Nomor_Induk", NomorInduk);
    }
    return formData;
  };

  const handleSubmit = () => {
    try {
      if (addOrEdit === "Edit") {
        Swal.fire({
          title: "Are you sure?",
          text: "You can submit again if there's any changes",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes",
          reverseButtons: true,
        }).then(async (result) => {
          if (result.isConfirmed) {
            const formData1 = objectToFormData(formData);
            const response = await editUser(formData1);
            if (response.status === 200) {
              toast.success(response.data);
            } else {
              toast.error(response.data);
            }
          } else {
            toast.error("Cancelled");
          }
        });
      } else if (addOrEdit === "Add") {
        Swal.fire({
          title: "Are you sure?",
          text: "Make sure the `Nomor Induk` is correct!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes",
          reverseButtons: true,
        }).then(async (result) => {
          if (result.isConfirmed) {
            const formData1 = objectToFormData(formData);
            const response = await registUser(formData1);
            if (response.status === 200) {
              toast.success(response.data);
            } else {
              toast.error(response.data);
            }
          } else {
            toast.error("Cancelled");
          }
        });
      }
    } catch (err) {
      throw err;
    }
  };

  const handleFormChange = (e) => {
    const { name, files, value } = e.target;
    if (files) {
      setFormData({ ...formData, Photo: files[0] });
    } else if (value) {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleAddorEditForm = (items) => {
    if (items) {
      setNomorInduk(items.Nomor_Induk);
      setAoe("Edit");
      return (
        <>
          <ModalBody>
            <Input
              type="text"
              label="Nama"
              placeholder={items.Name}
              name="Name"
              onBlur={handleFormChange}
            />
            <Textarea
              label="Description"
              placeholder={items.Extra_Desc}
              name="Extra_Desc"
              onBlur={handleFormChange}
            />
            <Image
              width="100"
              src={`http://localhost:5000/userImg?Nomor_Induk=${items.Nomor_Induk}`}
            ></Image>
            <input type="file" onChange={handleFormChange} />
            <Input
              type="text"
              label="Role"
              placeholder={items.Role}
              name="Role"
              onBlur={handleFormChange}
            />
            <Input
              type="text"
              label="E-mail"
              placeholder={items.email}
              name="email"
              onBlur={handleFormChange}
            />
            <Input
              type="text"
              label="New Password"
              name="Password"
              onBlur={handleFormChange}
            />
          </ModalBody>
        </>
      );
    } else {
      setAoe("Add");
      return (
        <>
          <ModalBody>
            <Input
              type="text"
              label="Nomor Induk"
              name="Nomor_Induk"
              onBlur={handleFormChange}
            />
            <Input
              type="text"
              label="Nama"
              name="Name"
              onBlur={handleFormChange}
            />
            <Textarea
              label="Description"
              name="Extra_Desc"
              onBlur={handleFormChange}
            />
            <input type="file" onChange={handleFormChange} />
            <Input
              type="text"
              label="Role"
              name="Role"
              onBlur={handleFormChange}
            />
            <Input
              type="text"
              label="E-mail"
              name="email"
              onBlur={handleFormChange}
            />
            <Input
              type="text"
              label="Password"
              name="Password"
              onBlur={handleFormChange}
            />
          </ModalBody>
        </>
      );
    }
  };
  return (
    <>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {addOrEdit}
              </ModalHeader>
              {handleAddorEditForm(items)}
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  onClick={handleSubmit}
                >
                  {addOrEdit}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
