import { Cookies } from "react-cookie";

export default function Banner() {
  const cookies = new Cookies();
  const name = cookies.get("userData").name;
  return (
    <div className="text-center font-bold md:text-xl text-sm my-10">
      <p>Welcome, {name}!</p>
    </div>
  );
}
