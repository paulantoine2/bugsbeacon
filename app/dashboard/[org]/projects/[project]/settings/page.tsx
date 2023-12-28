import {
  Button,
  Card,
  Divider,
  Flex,
  Subtitle,
  Text,
  TextInput,
  Title,
} from "@tremor/react";
import { DeleteProjectSection } from "./delete-project-section";

export default function ProjectSettingsPage({
  params,
}: {
  params: { project: string };
}) {
  return (
    <div className="space-y-8 max-w-lg min-h-screen">
      <Card>
        <Title>Project Name</Title>
        <Text className="mb-4">
          Used to identify your Project on the Dashboard.
        </Text>
        <TextInput placeholder="Name"></TextInput>
        <Flex className="mt-6" justifyContent="end">
          <Button size="xs">Save</Button>
        </Flex>
      </Card>
      <Card>
        <Title>Framework</Title>
        <Text className="mb-4">Specify the framework used by your app</Text>
        <TextInput placeholder="Name"></TextInput>
        <Flex className="mt-6" justifyContent="end">
          <Button size="xs">Save</Button>
        </Flex>
      </Card>
      <DeleteProjectSection id={params.project} />
    </div>
  );
}
