import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import { userChangePass } from "../data/api-sisfo-ude";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";

export default function ChangePass() {
  const [formData, setFormData] = useState([]);
  const cookies = new Cookies();
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const Nomor_Induk = cookies.get("userData").Nomor_Induk;
      const response = await userChangePass({ ...formData, Nomor_Induk });
      if (response.status === 200) {
        toast.success(response.data);
      } else {
        toast.error(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Card radius="sm" className="max-w-[50rem] m-auto">
        <CardHeader className="bg-sky-900 text-white font-bold flex justify-between">
          Change Password
          <Button
            href="mailto:ude@ukrida.ac.id"
            as={Link}
            color="primary"
            showAnchorIcon
            variant="solid"
          >
            Have Questions?
          </Button>
        </CardHeader>
        <CardBody>
          <div className="flex gap-5 flex-col items-center">
            <Input
              type="text"
              label="Old Password"
              name="oldPass"
              onBlur={handleFormChange}
            />
            <Input
              type="text"
              label="New Password"
              name="newPass"
              onBlur={handleFormChange}
            />
            <Button color="primary" onClick={() => handleSubmit()}>
              Change
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
