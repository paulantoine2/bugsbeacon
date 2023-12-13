import {
  BellIcon,
  CheckIcon,
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
  Title,
} from "@tremor/react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="flex flex-col items-center justify-center py-40">
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
            <Button size="xl">Get started</Button>
            <Button size="xl" variant="secondary">
              Sandbox
            </Button>
          </Flex>
        </div>
        <img
          src="/landing1.png"
          className="w-[80%] mx-auto border border-tremor-border dark:border-dark-tremor-border rounded-tremor-default mb-40"
          style={{
            boxShadow: "0px 0px 105px 45px rgba(249, 115, 22, 0.06)",
          }}
        />
      </div>
      <div className="container">
        <Metric className="text-center">Why BugsBeacon ?</Metric>
        <p className="mt-4 text-center text-xl text-muted-foreground text-tremor-content dark:text-dark-tremor-content">
          BugsBeacon is minimalist bug have everything you need to help you fix
          fast.
        </p>
        <Grid numItemsMd={2} className="mt-20 mb-40 gap-6">
          <Card className="space-y-2 row-span-2">
            <span className="inline-flex flex-shrink-0 items-center bg-tremor-brand dark:bg-orange-500 text-tremor-brand-inverted dark:text-dark-tremor-brand-inverted border-tremor-brand-inverted dark:border-dark-tremor-brand-inverted ring-tremor-ring dark:ring-dark-tremor-ring rounded-tremor-default border-2 ring-1 px-1.5 py-1.5">
              <SortAscendingIcon className="shrink-0 h-5 w-5" />
            </span>
            <Title>Automatic Error Grouping</Title>
            <Subtitle>
              Automatically group errors with similar stack traces and root
              causes.
            </Subtitle>
            <img src="/landing2.png" className="w-full" />
          </Card>
          <Card className="space-y-2">
            <span className="inline-flex flex-shrink-0 items-center bg-tremor-brand dark:bg-orange-500 text-tremor-brand-inverted dark:text-dark-tremor-brand-inverted border-tremor-brand-inverted dark:border-dark-tremor-brand-inverted ring-tremor-ring dark:ring-dark-tremor-ring rounded-tremor-default border-2 ring-1 px-1.5 py-1.5">
              <MapIcon className="shrink-0 h-5 w-5" />
            </span>
            <Title>Source Map Support</Title>
            <Subtitle>
              Easily pinpoint issues in your minified JS code directly from the
              stack trace.
            </Subtitle>
          </Card>
          <Card className="space-y-2">
            <span className="inline-flex flex-shrink-0 items-center bg-tremor-brand dark:bg-orange-500 text-tremor-brand-inverted dark:text-dark-tremor-brand-inverted border-tremor-brand-inverted dark:border-dark-tremor-brand-inverted ring-tremor-ring dark:ring-dark-tremor-ring rounded-tremor-default border-2 ring-1 px-1.5 py-1.5">
              <StatusOnlineIcon className="shrink-0 h-5 w-5" />
            </span>
            <Title>Real-Time Monitoring</Title>
            <Subtitle>
              Catch and resolve JavaScript errors as they happen.
            </Subtitle>
          </Card>
          <Card className="space-y-2 ">
            <span className="inline-flex flex-shrink-0 items-center bg-tremor-brand dark:bg-orange-500 text-tremor-brand-inverted dark:text-dark-tremor-brand-inverted border-tremor-brand-inverted dark:border-dark-tremor-brand-inverted ring-tremor-ring dark:ring-dark-tremor-ring rounded-tremor-default border-2 ring-1 px-1.5 py-1.5">
              <HeartIcon className="shrink-0 h-5 w-5" />
            </span>
            <Title>React friendly</Title>
            <Subtitle>
              Seamlessly integrates with React error boundaries and famous
              libraries like React Router and Redux.
            </Subtitle>
          </Card>
          <Card className="space-y-2 row-span-2">
            <span className="inline-flex flex-shrink-0 items-center bg-tremor-brand dark:bg-orange-500 text-tremor-brand-inverted dark:text-dark-tremor-brand-inverted border-tremor-brand-inverted dark:border-dark-tremor-brand-inverted ring-tremor-ring dark:ring-dark-tremor-ring rounded-tremor-default border-2 ring-1 px-1.5 py-1.5">
              <PresentationChartLineIcon className="shrink-0 h-5 w-5" />
            </span>
            <Title>Detailed Insights</Title>
            <Subtitle>
              Deep dive into error reports with comprehensive analytics.
            </Subtitle>
            <img src="/landing3.png" className="w-full" />
          </Card>
          <Card className="space-y-2">
            <span className="inline-flex flex-shrink-0 items-center bg-tremor-brand dark:bg-orange-500 text-tremor-brand-inverted dark:text-dark-tremor-brand-inverted border-tremor-brand-inverted dark:border-dark-tremor-brand-inverted ring-tremor-ring dark:ring-dark-tremor-ring rounded-tremor-default border-2 ring-1 px-1.5 py-1.5">
              <BellIcon className="shrink-0 h-5 w-5" />
            </span>
            <Title>Instant Alerts</Title>
            <Subtitle>
              Get notified instantly about critical issues affecting your users.
            </Subtitle>
          </Card>
        </Grid>
      </div>
      <div className="container">
        <Metric className="text-center">Pay as you grow</Metric>
        <p className="mt-4 text-center text-xl text-muted-foreground text-tremor-content dark:text-dark-tremor-content">
          BugsBeacon is minimalist but have everything you need to help you fix
          fast.
        </p>
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
            <Button className="w-full">Get started</Button>
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
                50,000 Events
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
            <Button className=" w-full">Get started</Button>
          </Card>
        </Grid>
      </div>
    </main>
  );
}
