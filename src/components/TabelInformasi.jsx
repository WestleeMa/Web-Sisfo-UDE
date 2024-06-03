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
import { useEffect, useState } from "react";
import { getInfo } from "../data/api-sisfo-ude";

export default function MngInfo() {
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
          {informationData.map((items) => (
            <TableRow key={items.Info_ID}>
              <TableCell>{items.Info_ID}</TableCell>
              <TableCell>{items.Title}</TableCell>
              <TableCell className="truncate max-w-xs">
                {items.Description}
              </TableCell>
              <TableCell>
                <Image
                  width="200"
                  src={`http://localhost:5000/info/image?Info_ID=${items.Info_ID}`}
                ></Image>
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
          ))}
        </TableBody>
      </Table>
      <Button className="mt-3" color="primary">
        Add Information
      </Button>
    </>
  );
}
