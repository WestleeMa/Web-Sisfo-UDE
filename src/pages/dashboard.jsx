import Banner from "../components/Banner";
import { getInfo, getLinks } from "../data/api-sisfo-ude";
import { useEffect, useState } from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import { Navigate, useNavigate } from "react-router-dom";

const LinkCard = () => {
  const [LinkItems, setLinks] = useState([]);
  useEffect(() => {
    const fetchDatas = async () => {
      const responseLinks = await getLinks();
      setLinks(responseLinks);
    };
    fetchDatas();
  }, []);
  return (
    <Card radius="sm">
      <CardHeader className="bg-sky-950 text-white font-bold">LINKS</CardHeader>
      <Divider />
      <CardBody>
        {LinkItems.map((item, index) => (
          <div key={index} className="mb-2">
            <h1 className="font-bold">{item.title}</h1>
            <a href={item.url} className="cursor-pointer text-blue-500">
              {item.url}
            </a>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

const InformationCard = () => {
  const [informationData, setInformationData] = useState([]);
  const fetchData = async () => {
    try {
      const data = await getInfo();
      setInformationData(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Card radius="sm">
        <CardHeader className="bg-sky-950 text-white font-bold">
          INFORMATIONS
        </CardHeader>
        <Divider />
        <CardBody>
          {informationData.map((item) => (
            <div
              className="mb-2 cursor-pointer rounded-lg transition duration-300 ease-in-out hover:bg-sky-100"
              onClick={() => navigate("deets", { state: { item } })}
            >
              <div className="grid grid-cols-12">
                <div className="col-span-2">
                  <Image
                    src={`http://localhost:5000/info/image?Info_ID=${item.Info_ID}`}
                    className="object-cover aspect-square "
                  ></Image>
                </div>
                <div className="col-span-10">
                  <h1 className="font-bold mx-5 mt-3">{item.Title}</h1>
                  <p className="text-xs text-gray-400 mx-5 mt-3">
                    {item.Description}
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
