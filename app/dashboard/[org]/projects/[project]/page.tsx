import { getProjectKeys } from "@/app/supabase-server";
import {
  Button,
  Card,
  Divider,
  Flex,
  Metric,
  Subtitle,
  Text,
  Title,
} from "@tremor/react";

export default async function ProjectDashboard({
  params,
}: {
  params: { org: string; project: string };
}) {
  const keys = await getProjectKeys(params.project);

  return (
    <div className="container py-10 min-h-screen">
      <Metric>Configure the SDK</Metric>
      <Divider />

      <Title>1. Install</Title>
      <Subtitle>
        Add BugsBeacon SDK as a dependency using npm, yarn or pnpm
      </Subtitle>

      <Card className="mt-4">
        <Text className="font-mono">npm install @bugsbeacon/react</Text>
      </Card>
      <Divider />
      <Title>2. Configure</Title>
      <Subtitle>
        Initialize BugsBeacon as early as possible in your application&apos;s
        lifecycle.
      </Subtitle>
      <Card className="mt-4">
        <Text className="font-mono">{`Beacon.init({
          key: "${keys?.[0]?.key}"
        })`}</Text>
      </Card>
      <Divider />
      <Title>3. Test</Title>
      <Subtitle>
        Run your app and add a button that throw an error on click. Click on the
        button and you should see the error pop here.
      </Subtitle>
      <Card className="mt-4">
        <Text className="font-mono">{`
          <button onClick={() => throw new Error("This should appear in BugsBeacon")}>Throw !</button>
        `}</Text>
      </Card>
      <Flex className="items-center mt-10">
        <Button loading size="lg">
          Waiting for errors...
        </Button>
      </Flex>
    </div>
  );
}
