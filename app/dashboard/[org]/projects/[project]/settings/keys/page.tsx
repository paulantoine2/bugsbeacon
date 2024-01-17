import { getProjectKeys } from "@/app/supabase-server";
import {
  Button,
  Card,
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

export default async function KeysPage({
  params,
}: {
  params: { project: string };
}) {
  const keys = await getProjectKeys(params.project);
  return (
    <div className="min-h-screen">
      <Title>Project Keys</Title>
      <Subtitle>
        These public keys allow you to identify the project sending the events
        and should be set in the SDK configuration. You can revoke a key to
        prevent abuses.
      </Subtitle>
      {keys && keys.length ? (
        <Card className="mt-5">
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
                    <Button size="xs" color="red">
                      Revoke
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      ) : (
        <>No keys</>
      )}
    </div>
  );
}
