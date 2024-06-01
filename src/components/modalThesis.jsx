import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { getAllFormData, downloadFormFiles } from "../data/api-sisfo-ude";

export default function ModalComp({ isOpen, onOpenChange, formID, NIM }) {
  const modalBody = (formID, NIM) => {
    const [data, setData] = useState([]);
    const handleDownload = async () => {
      try {
        await downloadFormFiles(1, data.NIM);
      } catch (error) {
        console.error("Error downloading file:", error);
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await getAllFormData(1, NIM);
          setData(result[0]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
    switch (formID) {
      case "1":
        return (
          <>
            <ModalBody>
              <p>
                Submission ID: <span>{data.Submission_ID}</span>
              </p>
              <p>
                NIM: <span>{data.NIM}</span>
              </p>
              <p>
                Nama: <span>{data.Nama}</span>
              </p>
              <p>
                Bidang Kajian: <span>{data.Bidang_kajian}</span>
              </p>
              <p>
                Judul Skripsi: <span>{data.Judul_skripsi}</span>
              </p>
              <p>
                Judul Sebelum: <span>{data.Judul_sebelum}</span>
              </p>
              <p>
                Dosen Pembimbing Sebelum: <span>{data.Dospem_sebelum}</span>
              </p>
              <p>
                Dosen Pembimbing 1: <span>{data.Dospem1}</span>
              </p>
              <p>
                Dosen Pembimbing 2: <span>{data.Dospem2}</span>
              </p>
              <p>
                Draft naskah:{" "}
                <Button onPress={handleDownload}>{data.Draft_naskah}</Button>
              </p>
              <p>
                Skema Skripsi: <span>{data.Skema_skripsi}</span>
              </p>
              <p>
                Timestamps: <span>{data.Timestamps}</span>
              </p>
            </ModalBody>
          </>
        );
      case "2":
        return <>2</>;
      case "3":
        return <>3</>;
      case "4":
        return <>4</>;
    }
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Details</ModalHeader>
              {modalBody(formID, NIM)}
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  OK
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
