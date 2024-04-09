import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-4">
        {/* Link Card */}
        <div className="w-[10rem] h-[10rem] bg-white rounded-md">
          <div className="p-[1rem] bg-sky-500 rounded-md">Links</div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
