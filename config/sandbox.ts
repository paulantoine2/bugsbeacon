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
  { filename: "src/utils.ts", call: "getCount", lineno: 60, colno: 20 },
  { filename: "src/index.ts", call: "getCount", lineno: 45, colno: 13 },
  { filename: "src/App.tsx", call: "App", lineno: 26, colno: 17 },
];

export default SANDBOX;
