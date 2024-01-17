import { getProjectKeys } from "@/app/supabase-server";
import {
  Button,
  Card,
  Flex,
  Subtitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  TextInput,
  Title,
} from "@tremor/react";
import DeleteKey from "./delete-key";
import CreateKey from "./create-key";

export default async function KeysPage({
  params,
}: {
  params: { project: string };
}) {
  const keys = await getProjectKeys(params.project);
  return (
    <div className="min-h-screen">
      <Title>Project Keys</Title>
      <Subtitle className="mb-6">
        These public keys allow you to identify the project sending the events
        and should be set in the SDK configuration. You can revoke a key to
        prevent abuses.
      </Subtitle>
      {keys && keys.length ? (
        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell className="w-full">Key</TableHeaderCell>
                <TableHeaderCell></TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {keys.map((item) => (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="flex-1">
                    <Text className="font-mono">{item.key}</Text>
                  </TableCell>

                  <TableCell>
                    <DeleteKey id={item.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      ) : (
        <Card>
          <Flex flexDirection="col" alignItems="center">
            <Subtitle className="mb-4">No keys</Subtitle>
            <CreateKey project_id={params.project} />
          </Flex>
        </Card>
      )}
    </div>
  );
}
