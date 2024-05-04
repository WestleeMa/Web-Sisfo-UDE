import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Image,
  Button,
} from "@nextui-org/react";

import testIMG from "../assets/images.jpg";

export default function MngInfo() {
  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Description</TableColumn>
          <TableColumn>Image</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>1</TableCell>
            <TableCell>Title 1</TableCell>
            <TableCell>Desc 1</TableCell>
            <TableCell>
              <Image src={testIMG}></Image>
            </TableCell>
            <TableCell>
              <Button color="warning" variant="shadow" className="mx-3">
                Edit
              </Button>
              <Button color="danger" variant="shadow" className="mx-3">
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>2</TableCell>
            <TableCell>Title 2</TableCell>
            <TableCell>Desc 2</TableCell>
            <TableCell>
              <Image src={testIMG}></Image>
            </TableCell>
            <TableCell>
              <Button color="warning" variant="shadow" className="mx-3">
                Edit
              </Button>
              <Button color="danger" variant="shadow" className="mx-3">
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>3</TableCell>
            <TableCell>Title 3</TableCell>
            <TableCell>Desc 3</TableCell>
            <TableCell>
              <Image src={testIMG}></Image>
            </TableCell>
            <TableCell>
              <Button color="warning" variant="shadow" className="mx-3">
                Edit
              </Button>
              <Button color="danger" variant="shadow" className="mx-3">
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>4</TableCell>
            <TableCell>Title 4</TableCell>
            <TableCell>Desc 4</TableCell>
            <TableCell>
              <Image src={testIMG}></Image>
            </TableCell>
            <TableCell>
              <Button color="warning" variant="shadow" className="mx-3">
                Edit
              </Button>
              <Button color="danger" variant="shadow" className="mx-3">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
