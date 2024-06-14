import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getAllFormData } from "../data/api-sisfo-ude";
import { Cookies } from "react-cookie";

export default function Status() {
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data4, setData4] = useState();
  const cookies = new Cookies();
  const NIM = cookies.get("userData").Nomor_Induk;
  const fetchData1 = async () => {
    try {
      const result1 = await getAllFormData(1, NIM);
      setData1(result1[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData2 = async () => {
    try {
      const result2 = await getAllFormData(2, NIM);
      setData2(result2[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData4 = async () => {
    try {
      const result4 = await getAllFormData(4, NIM);
      setData4(result4[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData1();
    fetchData2();
    fetchData4();
  }, []);
  const handleStatusData = (formID) => {
    if (formID === 1) {
      if (data1) {
        const {
          approval_dosen1,
          approval_dosen2,
          form_approval,
          Dospem1,
          Dospem2,
        } = data1;
        if (
          approval_dosen1 === 1 &&
          approval_dosen2 === 1 &&
          form_approval === 1
        ) {
          return (
            <>
              <Card className="w-[400px] bg-green-200 text-green-600 drop-shadow">
                <CardHeader className="flex">
                  <div className="flex flex-col">
                    <p className="text-md text-center">Pengajuan Judul</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>Passed</CardBody>
              </Card>
            </>
          );
        } else if (
          approval_dosen1 === 2 ||
          approval_dosen2 === 2 ||
          form_approval === 2
        ) {
          let rejectReason;
          if (approval_dosen1 === 2 && approval_dosen2 === 1) {
            rejectReason = `Rejected: ${Dospem1} Rejected`;
          } else if (approval_dosen1 === 1 && approval_dosen2 === 2) {
            rejectReason = `Rejected: ${Dospem2} Rejected`;
          } else if (approval_dosen1 === 2 && approval_dosen2 === 2) {
            rejectReason = `Rejected: ${Dospem1} & ${Dospem2} Rejected`;
          } else {
            rejectReason = "Rejected: Submission Rejected";
          }

          return (
            <Card className="w-[400px] bg-red-200 text-red-600 drop-shadow">
              <CardHeader className="flex">
                <div className="flex flex-col">
                  <p className="text-md text-center">Pengajuan Judul</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>{rejectReason}</CardBody>
            </Card>
          );
        } else {
          return (
            <>
              <Card className="w-[400px] bg-yellow-200 text-yellow-600 drop-shadow">
                <CardHeader className="flex">
                  <div className="flex flex-col">
                    <p className="text-md text-center">Pengajuan Judul</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>Pending</CardBody>
              </Card>
            </>
          );
        }
      }
    }
  };
  return (
    <>
      <Card radius="sm" className="max-w-[50rem] m-auto">
        <CardHeader className="bg-sky-900 text-white font-bold">
          Thesis Status
        </CardHeader>
        <CardBody>
          <div className="flex gap-5 flex-col items-center py-[5rem]">
            {handleStatusData(1)}
            <Card className="w-[400px] bg-red-200 text-red-600 drop-shadow">
              <CardHeader className="flex">
                <div className="flex flex-col">
                  <p className="text-md text-center">Pre-Proposal</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Rejected</p>
              </CardBody>
            </Card>
            <Card className="w-[400px] bg-yellow-200 text-yellow-600 drop-shadow">
              <CardHeader className="flex">
                <div className="flex flex-col">
                  <p className="text-md text-center">Pre-Thesis Defense</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Pending</p>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
