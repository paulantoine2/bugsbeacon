import { Issue } from "@/types/issue";
import { subDays, subHours } from "date-fns";

const SANDBOX: {
  orgs: {
    [key: string]: {
      name: string;
      projects: { [key: string]: { name: string; issues: Issue[] } };
    };
  };
} = {
  orgs: {
    acme: {
      name: "Acme Inc",
      projects: {
        "react-app": {
          name: "react-app",
          issues: [
            {
              exception_name: "TypeError",
              exception_message:
                "Cannot read properties of undefined (reading 'key')",
              events: 12,
              victims: 1,
              first_seen: subDays(new Date(), 4).toISOString(),
              last_seen: subDays(new Date(), 3).toISOString(),
              first_seen_version: "3.0.0",
              last_seen_version: "3.0.0",
              id: "1",
              is_crash: true,
              is_regression: true,
            },
            {
              exception_name: "Error",
              exception_message:
                "Cannot read properties of undefined (reading 'key')",
              events: 34,
              victims: 12,
              first_seen: subDays(new Date(), 5).toISOString(),
              last_seen: subDays(new Date(), 4).toISOString(),
              first_seen_version: "3.0.0",
              last_seen_version: "3.4.2",
              id: "2",
              is_crash: false,
              is_regression: true,
            },
            {
              exception_name: "Error",
              exception_message:
                "Cannot read properties of undefined (reading 'key')",
              events: 34,
              victims: 12,
              first_seen: subDays(new Date(), 5).toISOString(),
              last_seen: subHours(new Date(), 4).toISOString(),
              first_seen_version: "1.0.0",
              last_seen_version: "3.0.0",
              id: "3",
              is_crash: false,
              is_regression: false,
            },
            {
              exception_name: "Error",
              exception_message:
                "Cannot read properties of undefined (reading 'key')",
              events: 34,
              victims: 12,
              first_seen: subDays(new Date(), 5).toISOString(),
              last_seen: subHours(new Date(), 4).toISOString(),
              first_seen_version: "1.0.0",
              last_seen_version: "3.0.0",
              id: "3",
              is_crash: false,
              is_regression: false,
            },
            {
              exception_name: "Error",
              exception_message:
                "Cannot read properties of undefined (reading 'key')",
              events: 4520,
              victims: 1200,
              first_seen: subDays(new Date(), 5).toISOString(),
              last_seen: subHours(new Date(), 4).toISOString(),
              first_seen_version: "1.0.0",
              last_seen_version: "3.0.0",
              id: "3",
              is_crash: false,
              is_regression: false,
            },
          ],
        },
        "portal-customer": {
          name: "portal-customer",
          issues: [
            {
              exception_name: "TypeError",
              exception_message:
                "Cannot read properties of undefined (reading 'key')",
              events: 12,
              victims: 1,
              first_seen: subDays(new Date(), 4).toISOString(),
              last_seen: subDays(new Date(), 3).toISOString(),
              first_seen_version: "3.0.0",
              last_seen_version: "3.0.0",
              id: "1",
              is_crash: true,
              is_regression: true,
            },
            {
              exception_name: "Error",
              exception_message:
                "Cannot read properties of undefined (reading 'key')",
              events: 34,
              victims: 12,
              first_seen: subDays(new Date(), 5).toISOString(),
              last_seen: subDays(new Date(), 4).toISOString(),
              first_seen_version: "3.0.0",
              last_seen_version: "3.4.2",
              id: "2",
              is_crash: false,
              is_regression: true,
            },
            {
              exception_name: "Error",
              exception_message:
                "Cannot read properties of undefined (reading 'key')",
              events: 34,
              victims: 12,
              first_seen: subDays(new Date(), 5).toISOString(),
              last_seen: subHours(new Date(), 4).toISOString(),
              first_seen_version: "1.0.0",
              last_seen_version: "3.0.0",
              id: "3",
              is_crash: false,
              is_regression: false,
            },
            {
              exception_name: "Error",
              exception_message:
                "Cannot read properties of undefined (reading 'key')",
              events: 34,
              victims: 12,
              first_seen: subDays(new Date(), 5).toISOString(),
              last_seen: subHours(new Date(), 4).toISOString(),
              first_seen_version: "1.0.0",
              last_seen_version: "3.0.0",
              id: "3",
              is_crash: false,
              is_regression: false,
            },
            {
              exception_name: "Error",
              exception_message:
                "Cannot read properties of undefined (reading 'key')",
              events: 4520,
              victims: 1200,
              first_seen: subDays(new Date(), 5).toISOString(),
              last_seen: subHours(new Date(), 4).toISOString(),
              first_seen_version: "1.0.0",
              last_seen_version: "3.0.0",
              id: "3",
              is_crash: false,
              is_regression: false,
            },
          ],
        },
      },
    },
  },
};

export const FRAMES = [
  {
    filename: "src/utils.ts",
    call: "getCount",
    lineno: 60,
    colno: 20,
    code: {
      55: "export function getCount(count) {",
      56: "\ttry {",
      57: "\t\tconst value = array[count].key;",
      58: "\t\treturn value;",
      59: "\t} catch (e) {",
      60: '\t\tconst err : new Error("Can\'t find value in the array");',
      61: '\t\terr.name = "CSM";',
      62: "\t\tthrow err;",
      63: "\t}",
      64: "}",
    },
  },
  {
    filename: "src/index.ts",
    call: "getCount",
    lineno: 45,
    colno: 13,
    code: {},
  },
  { filename: "src/App.tsx", call: "App", lineno: 26, colno: 17, code: {} },
];

export default SANDBOX;
