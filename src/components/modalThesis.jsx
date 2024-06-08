import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { downloadFormFiles } from "../data/api-sisfo-ude";

export default function ModalComp({ isOpen, onOpenChange, formID, data }) {
  const modalBody = (formID, data) => {
    const handleDownload = async (formID, NIM) => {
      console.log(data.NIM);
      try {
        if (data.NIM) {
          await downloadFormFiles(formID, NIM);
        }
      } catch (error) {
        console.error("Error downloading file:", error);
      }
    };
    if (data) {
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
                  <Button onClick={() => handleDownload(1, data.NIM)}>
                    {data.Draft_naskah}
                  </Button>
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
                  Skema Skripsi: <span>{data.Skema_skripsi}</span>
                </p>
                <p>
                  Dosen Penguji 1: <span>{data.Penguji1}</span>
                </p>
                <p>
                  Dosen Penguji 2: <span>{data.Penguji2}</span>
                </p>
                <p>
                  Dosen Penguji 3: <span>{data.Penguji3}</span>
                </p>
                <p>
                  Dosen PA: <span>{data.PA}</span>
                </p>
                <p>
                  Bukti Approval:
                  <Button onClick={() => handleDownload(2, data.NIM)}>
                    {data.Bukti_approval}
                  </Button>
                </p>
                <p>
                  Link Google Docs:{" "}
                  <a href={data.Link_google} target="_blank" rel="noreferrer">
                    {data.Link_google}
                  </a>
                </p>
                <p>
                  Timestamps: <span>{data.Timestamps}</span>
                </p>
              </ModalBody>
            </>
          );
        case "3":
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
                  Skor EPT: <span>{data.Skor_EPT}</span>
                </p>
                <p>
                  Hasil Turnitin Sempro:{" "}
                  <span>{data.Hasil_Turnitin_sempro}</span>
                </p>
                <p>
                  Hasil Turnitin Skripsi:{" "}
                  <span>{data.Hasil_Turnitin_skripsi}</span>
                </p>
                <p>
                  Hasil ITP: <span>{data.Hasil_ITP}</span>
                </p>
                <p>
                  Link Lembar Bimbingan:{" "}
                  <a
                    href={data.Link_lembar_bimbingan}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {data.Link_lembar_bimbingan}
                  </a>
                </p>
                <p>
                  Download Files (File Transkrip, File Bebas Plagiat, File Hasil
                  EPT, File Hasil Turnitin Sempro, File Bukti Lunas, File Bukti
                  Softskills, File Hasil Turnitin Skripsi, File Draft Artikel
                  Jurnal, File Hasil ITP, Foto Ijazah SMA):{" "}
                  <Button onClick={() => handleDownload(3, data.NIM)}>
                    Download
                  </Button>
                </p>
                <p>
                  Timestamps: <span>{data.Timestamps}</span>
                </p>
              </ModalBody>
            </>
          );
        case "4":
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
                  Skema Skripsi: <span>{data.Skema_skripsi}</span>
                </p>
                <p>
                  Dosen Penguji 1: <span>{data.Penguji1}</span>
                </p>
                <p>
                  Dosen Penguji 2: <span>{data.Penguji2}</span>
                </p>
                <p>
                  Dosen Penguji 3: <span>{data.Penguji3}</span>
                </p>
                <p>
                  Dosen PA: <span>{data.PA}</span>
                </p>
                <p>
                  Bukti Approval:
                  <Button onClick={() => handleDownload(4, data.NIM)}>
                    {data.Bukti_approval}
                  </Button>
                </p>
                <p>
                  Link Google Docs:
                  <a
                    href={data.Link_Google_docs}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {data.Link_Google_docs}
                  </a>
                </p>
                <p>
                  Link Video_presentasi:
                  <a
                    href={data.Link_Video_presentasi}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {data.Link_Video_presentasi}
                  </a>
                </p>
                <p>
                  Timestamps: <span>{data.Timestamps}</span>
                </p>
              </ModalBody>
            </>
          );
      }
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
              <ModalHeader className="flex flex-col gap-1">Details</ModalHeader>
              {modalBody(formID, data)}
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button> */}
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
