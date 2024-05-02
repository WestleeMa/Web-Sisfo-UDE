import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";

export default function Status() {
  return (
    <>
      <Card radius="sm" className="max-w-[50rem] m-auto">
        <CardHeader className="bg-sky-900 text-white font-bold">
          Thesis Status
        </CardHeader>
        <CardBody>
          <div className="flex gap-5 flex-col items-center py-[5rem]">
            <Card className="w-[400px] bg-green-200 text-green-600 drop-shadow">
              <CardHeader className="flex">
                <div className="flex flex-col">
                  <p className="text-md text-center">Pre-Thesis</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Passed</p>
              </CardBody>
            </Card>
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
