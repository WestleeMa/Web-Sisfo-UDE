import Navbar2 from "../components/Navbar2";
import Banner from "../components/Banner";
import testImg from "../assets/images.jpg";
import { infoReq } from "../data/api-sisfo-ude";
import { useEffect, useState } from "react";
import { Avatar, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

const LinkCard = () => {
  const LinkItems = [
    {
      title: "Link Title 1",
      url: "#",
    },
    {
      title: "Link Title 2",
      url: "#",
    },
    {
      title: "Link Title 3",
      url: "#",
    },
    {
      title: "Link Title 4",
      url: "#",
    },
    {
      title: "Link Title 5",
      url: "#",
    },
  ];
  return (
    <Card radius="sm">
      <CardHeader className="bg-sky-950 text-white font-bold">LINKS</CardHeader>
      <Divider />
      <CardBody>
        {LinkItems.map((item, index) => (
          <div key={index} className="mb-2">
            <h1 className="font-bold">{item.title}</h1>
            <a href={item.url} className="cursor-pointer text-blue-500">
              Link
            </a>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

const InformationCard = () => {
  const informationData = [
    {
      title: "Information Title 1",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel error molestias in id quasi minus, quam illum ipsum quo repellendus ex, deserunt corrupti enim temporibus esse fuga provident debitis ut fugit veritatis dolorem, sunt amet dolor sequi. Repudiandae eos aliquam pariatur minus, quia ullam! Sed numquam nostrum minima est ut...",
    },
    {
      title: "Information Title 2",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel error molestias in id quasi minus, quam illum ipsum quo repellendus ex, deserunt corrupti enim temporibus esse fuga provident debitis ut fugit veritatis dolorem, sunt amet dolor sequi. Repudiandae eos aliquam pariatur minus, quia ullam! Sed numquam nostrum minima est ut...",
    },
    {
      title: "Information Title 3",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel error molestias in id quasi minus, quam illum ipsum quo repellendus ex, deserunt corrupti enim temporibus esse fuga provident debitis ut fugit veritatis dolorem, sunt amet dolor sequi. Repudiandae eos aliquam pariatur minus, quia ullam! Sed numquam nostrum minima est ut...",
    },
    {
      title: "Information Title 4",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel error molestias in id quasi minus, quam illum ipsum quo repellendus ex, deserunt corrupti enim temporibus esse fuga provident debitis ut fugit veritatis dolorem, sunt amet dolor sequi. Repudiandae eos aliquam pariatur minus, quia ullam! Sed numquam nostrum minima est ut...",
    },
    {
      title: "Information Title 5",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel error molestias in id quasi minus, quam illum ipsum quo repellendus ex, deserunt corrupti enim temporibus esse fuga provident debitis ut fugit veritatis dolorem, sunt amet dolor sequi. Repudiandae eos aliquam pariatur minus, quia ullam! Sed numquam nostrum minima est ut...",
    },
  ];
  return (
    <>
      <Card radius="sm">
        <CardHeader className="bg-sky-950 text-white font-bold">
          INFORMATIONS
        </CardHeader>
        <Divider />
        <CardBody>
          {informationData.map((item, index) => (
            <div className="mb-2 cursor-pointer  transition duration-300 ease-in-out hover:bg-sky-200">
              <div className="grid grid-cols-12">
                <div className="col-span-2">
                  <img src={testImg}></img>
                </div>
                <div className="col-span-10">
                  <h1 className="font-bold mx-2">{item.title}</h1>
                  <p className="text-xs text-gray-400 mx-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vel error molestias in id quasi minus, quam illum ipsum quo
                    repellendus ex, deserunt corrupti enim temporibus esse fuga
                    provident debitis ut fugit veritatis dolorem, sunt amet
                    dolor sequi. Repudiandae eos aliquam pariatur minus, quia
                    ullam! Sed numquam nostrum minima est ut...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </>
  );
};

const Dashboard = () => {
  return (
    <>
      <Banner />
      <div className="md:grid md:grid-cols-12 gap-4">
        <div className="md:col-span-4 col-span-12 mt-4 md:mt-0">
          <LinkCard />
        </div>
        <div className="md:col-span-8 col-span-12 mt-4 md:mt-0">
          <InformationCard />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
