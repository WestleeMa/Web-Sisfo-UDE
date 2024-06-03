import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Input,
  Button,
} from "@nextui-org/react";
import logoUKRIDA from "../assets/Logo_UKRIDA_300x300.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { login } from "../data/api-sisfo-ude";
import { EyeFilledIcon } from "../components/decorations/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../components/decorations/EyeSlashFilledIcon";
import { jwtDecode } from "jwt-decode";
import { Cookies } from "react-cookie";
import Swal from "sweetalert2";

export default function Login() {
  const cookie = new Cookies();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const navigate = useNavigate();
  const [NIM, setNIM] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (cookie.get("userData")) {
      navigate("/");
    }
  });

  const handleLogin = async () => {
    try {
      const res = await login(NIM, password);
      if (
        res === "Please complete the login form" ||
        res === "Invalid NIM or Password"
      ) {
        toast.error(res);
      } else {
        const decoded = jwtDecode(res);

        cookie.set("userData", decoded, {
          expires: new Date(Date.now() + decoded.exp),
        });

        Swal.fire({
          title: "Login Success",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="p-[18rem] pb-[40rem]">
        <Card className="max-w-[400px] m-auto">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src={logoUKRIDA}
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-lg">LOGIN</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="gap-5">
            <Input
              type="text"
              label="NIM"
              value={NIM}
              onChange={(e) => setNIM(e.target.value)}
            />
            <Input
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              radius="full"
              className="bg-gradient-to-tr from-sky-900 to-yellow-600 text-white shadow-lg"
              onClick={() => handleLogin()}
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
