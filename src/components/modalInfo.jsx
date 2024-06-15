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
import { addOrEditInfo } from "../data/api-sisfo-ude";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function ModalComp({ isOpen, onOpenChange, items }) {
  const [aoe, setAoe] = useState({});
  const [formData, setFormData] = useState([]);
  const [infoID, setInfoID] = useState([]);

  const objectToFormData = (obj) => {
    const formData = new FormData();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        formData.append(key, obj[key]);
      }
    }
    formData.append("aoe", aoe);
    if (infoID) {
      formData.append("Info_ID", infoID);
    }
    return formData;
  };

  const handleSubmit = () => {
    try {
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
          const response = await addOrEditInfo(formData1);
          if (response.status === 200) {
            toast.success(response.data);
          } else {
            toast.error(response.data);
          }
        } else {
          toast.error("Cancelled");
        }
      });
    } catch (err) {
      throw err;
    }
  };

  const handleFormChange = (e) => {
    const { name, files, value } = e.target;
    if (files) {
      setFormData({ ...formData, Photos: files[0] });
    } else if (value) {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleAddorEditForm = (items) => {
    if (items) {
      setAoe("Edit");
      setInfoID(items.Info_ID);
      return (
        <>
          <ModalBody>
            <Input
              type="text"
              label="Title"
              placeholder={items.Title}
              name="Title"
              onBlur={handleFormChange}
            />
            <Textarea
              label="Description"
              placeholder={items.Description}
              name="Description"
              onBlur={handleFormChange}
            />
            <Image
              width="100"
              src={`http://localhost:5000/info/image?Info_ID=${items.Info_ID}`}
            ></Image>
            <input type="file" name="Photos" onChange={handleFormChange} />
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
              label="Title"
              onBlur={handleFormChange}
              name="Title"
              isRequired
            />
            <Textarea
              label="Description"
              onBlur={handleFormChange}
              name="Description"
              isRequired
            />
            <p>Upload Photo</p>
            <input type="file" onChange={handleFormChange} name="Photos" />
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
              <ModalHeader className="flex flex-col gap-1">{aoe}</ModalHeader>
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
                  {aoe}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
