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

export default function ModalComp({ isOpen, onOpenChange, items }) {
  const [aoe, setAoe] = useState({});
  const handleAddorEditForm = (items) => {
    if (items) {
      setAoe("Edit");
      return (
        <>
          <ModalBody>
            <Input
              type="text"
              label="ID"
              isDisabled="true"
              value={items.Info_ID}
            />
            <Input type="text" label="Title" value={items.Title} />
            <Textarea label="Description" value={items.Description} />
            <Image
              width="100"
              src={`http://localhost:5000/info/image?Info_ID=${items.Info_ID}`}
            ></Image>
            <input type="file" label="Descriptions" />
          </ModalBody>
        </>
      );
    } else {
      setAoe("Add");
      return (
        <>
          <ModalBody>
            <Input type="text" label="Title" value="" />
            <Textarea label="Description" value="" />
            <p>Upload Photo</p>
            <input type="file" />
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
                <Button color="primary" onPress={onClose}>
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
