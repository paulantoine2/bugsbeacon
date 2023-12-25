import {
  BellIcon,
  CheckIcon,
  CodeIcon,
  HeartIcon,
  MapIcon,
  PresentationChartLineIcon,
  SortAscendingIcon,
  StatusOnlineIcon,
} from "@heroicons/react/outline";
import {
  Badge,
  Button,
  Card,
  Flex,
  Grid,
  Metric,
  Subtitle,
  Text,
  TextInput,
  Title,
} from "@tremor/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-64 mb-64">
      <div className="container">
        <div className="flex flex-col items-center justify-center py-40">
          <Badge color="red" className="mb-6">
            Work in progress product
          </Badge>
          <h1 className="text-center text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            For those who likes <br />
            to{" "}
            <span className="text-orange-500">push bugs into production</span>
          </h1>
          <p className="mt-4 text-center text-xl text-muted-foreground text-tremor-content dark:text-dark-tremor-content max-w-xl">
            BugsBeacon is a minimalist error tracking platform that help you
            easily fix bugs that happen in your users browser. Optimized for
            modern front-end frameworks.
          </p>
          <Flex justifyContent="center" className="gap-2 mt-8">
            <Link href="https://sandbox.bugsbeacon.com">
              <Button
                variant="secondary"
                size="lg"
                className="!border-zinc-800"
              >
                Discover with Sandbox
              </Button>
            </Link>
            <Link href="/signin">
              <Button size="lg">Get started</Button>
            </Link>
          </Flex>
        </div>
        <Image
          alt="landing"
          src="/landing1.png"
          width={971}
          height={1028}
          quality={100}
          className="mx-auto border border-tremor-border dark:border-dark-tremor-border rounded-tremor-default "
          style={{
            boxShadow: "0px 0px 105px 45px rgba(249, 115, 22, 0.06)",
          }}
        />
      </div>
      <div className="container text-center" id="product">
        <Badge color="orange">Product</Badge>
        <Metric className="my-2">Why BugsBeacon ?</Metric>
        <Subtitle>
          BugsBeacon is minimalist bug have everything you need to help you fix
          fast.
        </Subtitle>
        <Grid numItemsMd={2} className="mt-20 mb-40 gap-6">
          <Card className="space-y-2 row-span-2 flex flex-col">
            <SortAscendingIcon className="text-orange-500 h-8 w-8" />
            <Title>Automatic Error Grouping</Title>
            <Subtitle>
              Automatically group errors with similar stack traces and root
              causes.
            </Subtitle>
            <div className="relative w-full flex-1">
              <Image src="/landing2.png" alt="Issues" fill />
            </div>
          </Card>
          <Card className="space-y-2">
            <CodeIcon className="text-orange-500 h-8 w-8" />
            <Title>Source Map Support</Title>
            <Subtitle>
              Easily pinpoint issues in your minified JS code directly from the
              stack trace.
            </Subtitle>
          </Card>
          <Card className="space-y-2">
            <StatusOnlineIcon className="text-orange-500 h-8 w-8" />
            <Title>Real-Time Monitoring</Title>
            <Subtitle>
              Catch and resolve JavaScript errors as they happen.
            </Subtitle>
          </Card>
          <Card className="space-y-2 ">
            <HeartIcon className="text-orange-500 h-8 w-8" />
            <Title>React friendly</Title>
            <Subtitle>
              Seamlessly integrates with React error boundaries and famous
              libraries like React Router and Redux.
            </Subtitle>
          </Card>
          <Card className="space-y-2 row-span-2 flex flex-col">
            <PresentationChartLineIcon className="text-orange-500 h-8 w-8" />
            <Title>Detailed Insights</Title>
            <Subtitle>
              Deep dive into error reports with comprehensive analytics.
            </Subtitle>
            <div className="relative w-full flex-1 ">
              <Image src="/landing3.png" alt="Events" fill />
            </div>
          </Card>
          <Card className="space-y-2">
            <BellIcon className="text-orange-500 h-8 w-8" />
            <Title>Instant Alerts</Title>
            <Subtitle>
              Get notified instantly about critical issues affecting your users.
            </Subtitle>
          </Card>
        </Grid>
      </div>
      <div className="container text-center" id="pricing">
        <Badge color="orange">Pricing</Badge>
        <Metric className="text-center my-2">Pay as you grow</Metric>
        <Subtitle>Predictable pricing, no surprises</Subtitle>
        <Grid numItemsMd={6} className="mt-20 mb-40 gap-6">
          <div></div>
          <Card decorationColor="zinc" className="col-span-2" decoration="top">
            <Title>Developer</Title>
            <Text>Just enough to implement and try.</Text>
            <Flex
              alignItems="end"
              justifyContent="start"
              className="gap-2 mt-4"
            >
              <Metric>0€</Metric>
              <Subtitle>/month</Subtitle>
            </Flex>
            <Text>Free</Text>
            <div className="space-y-2 my-10">
              <Text>
                <CheckIcon className="h-6 mr-2 text-orange-500 inline-block" />{" "}
                Unlimited projects
              </Text>
              <Text>
                <CheckIcon className="h-6 mr-2 text-orange-500 inline-block" />{" "}
                7-days data retention
              </Text>
              <Text>
                <CheckIcon className="h-6 mr-2 text-orange-500 inline-block" />{" "}
                1,000 Events
              </Text>
              <Text>
                <CheckIcon className="h-6 mr-2 text-orange-500 inline-block" />{" "}
                Dashboard
              </Text>
              <Text>
                <CheckIcon className="h-6 mr-2 text-orange-500 inline-block" />{" "}
                React SDK
              </Text>
            </div>
            <Button className="w-full" disabled>
              Available soon
            </Button>
          </Card>
          <Card
            decorationColor="orange"
            className="col-span-2"
            decoration="top"
          >
            <Title>Pro</Title>
            <Text>Production grade error tracking with flexible volume.</Text>
            <Flex
              alignItems="end"
              justifyContent="start"
              className="gap-2 mt-4"
            >
              <Metric>20€</Metric>
              <Subtitle>/month</Subtitle>
            </Flex>
            <Text>With pre-paid data</Text>
            <div className="space-y-2 my-10">
              <Text>
                <CheckIcon className="h-6 mr-2 text-orange-500 inline-block" />{" "}
                Unlimited projects
              </Text>
              <Text>
                <CheckIcon className="h-6 mr-2 text-orange-500 inline-block" />{" "}
                90-days data retention
              </Text>
              <Text>
                <CheckIcon className="h-6 mr-2 text-orange-500 inline-block" />{" "}
                50,000 Events (+5€ / extra 50,000)
              </Text>
              <Text>
                <CheckIcon className="h-6 mr-2 text-orange-500 inline-block" />{" "}
                Dashboard
              </Text>
              <Text>
                <CheckIcon className="h-6 mr-2 text-orange-500 inline-block" />{" "}
                React SDK
              </Text>
            </div>
            <Button className="w-full" disabled>
              Available soon
            </Button>
          </Card>
        </Grid>
      </div>
      <div className="container mb-40">
        <Card
          style={{
            backgroundImage: "url('./bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "top -200px center",
          }}
        >
          <div className="max-w-md mx-auto mt-10 mb-32 text-center">
            <Metric className="mb-4">
              Get product updates and be notified of the launch.
            </Metric>
            <Flex className="gap-2">
              <TextInput placeholder="email@example.com" />
              <Button>Sign up</Button>
            </Flex>
          </div>
        </Card>
      </div>
    </main>
  );
}
