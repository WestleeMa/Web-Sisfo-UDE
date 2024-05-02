import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import testIMG from "../assets/images.jpg";

export default function InfoDetail() {
  return (
    <>
      <Card radius="sm" className="max-w-[90rem] m-auto">
        <CardHeader className="bg-sky-950 text-white font-bold">
          Information Details
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex gap-8 m-5">
            <Image isBlurred src={testIMG} width={900} className="my-5" />
            <div className="flex flex-col my-4 gap-3">
              <p className="font-bold text-xl">Test Judul</p>
              <p className="ml-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas iusto nisi qui quisquam corrupti, dolore voluptatum
                nobis eos magni exercitationem mollitia eius suscipit quibusdam
                quis omnis quae hic, fuga obcaecati ad nostrum asperiores
                perferendis? Fugit nam quisquam magnam tempora voluptas fuga
                perferendis, provident accusantium hic tenetur dolores facilis
                libero neque vel nostrum error voluptates, aspernatur omnis! Eos
                perspiciatis itaque ea ipsa beatae, explicabo tempore eligendi.
                Adipisci possimus eum omnis quo dolor corporis necessitatibus
                hic perspiciatis eos, excepturi a assumenda mollitia labore
                ullam consequatur ipsum magni ducimus aliquam consequuntur ea!
                Tenetur earum repellendus fugit itaque necessitatibus illo
                tempore ratione debitis explicabo.
              </p>
              <Button
                href="mailto:ude@ukrida.ac.id"
                as={Link}
                color="primary"
                showAnchorIcon
                variant="solid"
              >
                Have Questions?
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
