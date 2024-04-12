import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import testImg from "../assets/images.jpg";
import { infoReq } from "../data/api-sisfo-ude";
import { useEffect, useState } from "react";

const RenderData = (props) => {
  const data = props?.data?.data;
  const render =
    !data || data.length === 0 ? (
      <>
        <p className="text-white">No Data Available</p>
      </>
    ) : (
      <>
        {Object.entries(data).map(([key, value]) => {
          return (
            <div className="m-[3rem] flex" id={key}>
              <img src={testImg} alt="" className="w-[100px] h-[100px]" />
              <div className="mx-5 my-3">
                <h2 className="font-bold">{value.title}</h2>
                <p>{value.desc}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  return render;
};

const Dashboard = () => {
  const [data, setData] = useState();

  const fetchInfo = async () => {
    try {
      const infoResponse = await infoReq.get();
      setData(infoResponse);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <div className="container mx-auto px-4 mb-10 py-4 flex flex-wrap place-content-center">
        {/* Link Card */}
        <div className="w-[20rem] h-auto bg-white rounded-md m-3">
          <div className="bg-sky-950 m-[1rem] p-[1rem] rounded-lg text-white">
            <h3>Links</h3>
          </div>
          {/* Links */}
          <div className="m-[1rem] p-[1rem]">
            <h1 className="font-bold">Link Title</h1>
            <a href="a" className="text-blue-500">
              Link
            </a>
          </div>
          <div className="m-[1rem] p-[1rem]">
            <h1 className="font-bold">Link Title</h1>
            <a href="a" className="text-blue-500">
              Link
            </a>
          </div>
          <div className="m-[1rem] p-[1rem]">
            <h1 className="font-bold">Link Title</h1>
            <a href="a" className="text-blue-500">
              Link
            </a>
          </div>
          <div className="m-[1rem] p-[1rem]">
            <h1 className="font-bold">Link Title</h1>
            <a href="a" className="text-blue-500">
              Link
            </a>
          </div>
          <div className="m-[1rem] p-[1rem]">
            <h1 className="font-bold">Link Title</h1>
            <a href="a" className="text-blue-500">
              Link
            </a>
          </div>
        </div>
        {/* Informations Card */}
        <div className="w-[50rem] h-auto bg-white rounded-md m-3">
          <div className="bg-sky-950 m-[1rem] p-[1rem] rounded-lg text-white">
            <h3>Informations</h3>
          </div>
          {/* Info Items */}
          <RenderData data={data} />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
