import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

export default function MngThesis() {
  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Bidang Kajian</TableColumn>
          <TableColumn>Dosen Pembimbing</TableColumn>
          <TableColumn>Judul</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>1</TableCell>
            <TableCell>CREW</TableCell>
            <TableCell>Ira Rasikawati, Ph.D.</TableCell>
            <TableCell>Judul 1</TableCell>
            <TableCell>
              <Button color="warning" variant="shadow" className="mx-3">
                Details
              </Button>
              <Button color="danger" variant="shadow" className="mx-3">
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>2</TableCell>
            <TableCell>TESOL</TableCell>
            <TableCell>Ignasia Yuyun, S.Pd., M.Pd.</TableCell>
            <TableCell>Judul 2</TableCell>
            <TableCell>
              <Button color="warning" variant="shadow" className="mx-3">
                Details
              </Button>
              <Button color="danger" variant="shadow" className="mx-3">
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>3</TableCell>
            <TableCell>TIN</TableCell>
            <TableCell>Hanna Juliaty, S.S., M.A.</TableCell>
            <TableCell>Judul 3</TableCell>
            <TableCell>
              <Button color="warning" variant="shadow" className="mx-3">
                Details
              </Button>
              <Button color="danger" variant="shadow" className="mx-3">
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>4</TableCell>
            <TableCell>TESOL</TableCell>
            <TableCell>Didi Sulistiyono, S.s., M.Hum.</TableCell>
            <TableCell>Judul 4</TableCell>
            <TableCell>
              <Button color="warning" variant="shadow" className="mx-3">
                Details
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
