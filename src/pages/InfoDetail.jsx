import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { useLocation } from "react-router-dom";

export default function InfoDetail() {
  const location = useLocation();
  const data = location.state?.item;

  console.log(data);
  return (
    <>
      <Link
        href="/"
        size="lg"
        className="font-semibold mx-10 mb-8"
        underline="hover"
      >
        {"< "}Back
      </Link>
      <Card radius="sm" className="max-w-[90rem] m-auto">
        <CardHeader className="bg-sky-950 text-white font-bold">
          Information Details
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col items-center gap-8 m-5">
            <Image
              isBlurred
              width="450"
              src={`http://localhost:5000/info/image?Info_ID=${data.Info_ID}`}
              className="my-5"
            />

            <div className="flex flex-col my-4 gap-3 items-center">
              <p className="font-bold text-2xl ">{data.Title}</p>
              <p className="mx-5 text-center">{data.Description}</p>
            </div>
          </div>
          <Button
            href="mailto:ude@ukrida.ac.id"
            as={Link}
            color="primary"
            showAnchorIcon
            variant="solid"
          >
            Have Questions?
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
