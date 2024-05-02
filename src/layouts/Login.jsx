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

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-[23rem]">
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
            <Input type="email" label="Email" />
            <Input type="email" label="Password" />
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              radius="full"
              className="bg-gradient-to-tr from-sky-900 to-yellow-600 text-white shadow-lg"
              onClick={() => navigate("/")}
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
