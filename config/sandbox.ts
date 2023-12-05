const SANDBOX: {
  orgs: {
    [key: string]: {
      name: string;
      projects: { [key: string]: { name: string; issues: { name: string }[] } };
    };
  };
} = {
  orgs: {
    acme: {
      name: "Acme Inc",
      projects: {
        "dashboard-app": {
          name: "dashboard-app",
          issues: [
            {
              name: "TypeError",
            },
            {
              name: "Error",
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
