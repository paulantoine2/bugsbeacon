import { Event, Exception } from "@/types/event";
import { faker } from "@faker-js/faker";

const app_key = "4feb1177-c322-44ae-b8fe-e3c02c935ebf";

(async () => {
  setInterval(() => {
    const generated = new Array(50).fill(1).map(() => JSON.stringify(gen));

    fetch("https://api.us-east.aws.tinybird.co/v0/events?name=events", {
      method: "POST",
      body: generated.join("\n"),
      headers: {
        Authorization:
          "Bearer p.eyJ1IjogIjk3MDAzNTM4LWM5NDItNDI1ZS05MDlmLTViYjRlMzg3ZTJiYyIsICJpZCI6ICJjZDIyNzM0NC0zNjFmLTRkZDUtYTFlYS0zNjk0MmM3NDc0MjIiLCAiaG9zdCI6ICJ1cy1lYXN0LWF3cyJ9.8qTnOQP7vSAiz81zRaZ8jWt98tg9O6DWYvwvMt7TG7s",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error);
  }, 10 * 1000);
})();

function gen(): Event {
  return {
    id: faker.string.uuid(),
    app_key: app_key,
    user: faker.string.numeric(2),
    version: faker.helpers.arrayElement([
      "1.0.0",
      "1.1.0",
      "1.2.0",
      "1.2.1",
      "1.3.0",
      "2.0.0",
    ]),
    environment: faker.helpers.arrayElement(["production", "preview"]),
    browser: faker.helpers.weightedArrayElement([
      { weight: 5, value: { name: "Chrome", version: "120" } },
      { weight: 5, value: { name: "Chrome", version: "118" } },
      { weight: 5, value: { name: "Chrome", version: "119" } },
      { weight: 3, value: { name: "Edge", version: "120" } },
      { weight: 2, value: { name: "Edge", version: "118" } },
      { weight: 1, value: { name: "Edge", version: "119" } },
      { weight: 1, value: { name: "Firefox", version: "120" } },
      { weight: 2, value: { name: "Firefox", version: "118" } },
      { weight: 5, value: { name: "Firefox", version: "119" } },
      { weight: 3, value: { name: "Safari", version: "17.0" } },
      { weight: 4, value: { name: "Safari", version: "17.1" } },
      { weight: 2, value: { name: "Safari", version: "17.2" } },
    ]),
    timestamp: faker.date.recent({ days: 20 }).toISOString(),
    exception: genException(),
  };
}

function genException(): Exception {
  return faker.helpers.weightedArrayElement([
    {
      weight: 1,
      value: {
        handled: false,
        crash: false,
        name: "TypeError",
        message: "Cannot read properties of undefined (reading 'date')",
        stacktrace: {
          frames: [
            {
              colno: 23,
              lineno: 45,
              filename: "/src/utils/utils.ts",
              function: "getDate",
            },
            {
              colno: 12,
              lineno: 13,
              filename: "/src/utils/dates.ts",
              function: "formatDate",
            },
            {
              colno: 13,
              lineno: 22,
              filename: "/src/components/Button.tsx",
              function: "onClick",
            },
          ],
        },
      },
    },
    {
      weight: 2,
      value: {
        handled: false,
        crash: false,
        name: "TypeError",
        message: "Cannot read properties of undefined (reading 'date')",
        stacktrace: {
          frames: [
            {
              colno: 23,
              lineno: 45,
              filename: "/src/utils/utils.ts",
              function: "getDate",
            },
            {
              colno: 12,
              lineno: 13,
              filename: "/src/utils/dates.ts",
              function: "formatDate",
            },
            {
              colno: 32,
              lineno: 14,
              filename: "/src/App.tsx",
              function: "onClick",
            },
          ],
        },
      },
    },
    {
      weight: 3,
      value: {
        handled: true,
        crash: false,
        name: "UserNotFoundError",
        message: "Can't find user",
        stacktrace: {
          frames: [
            {
              colno: 23,
              lineno: 45,
              filename: "/src/api/user.ts",
              function: "getDate",
            },
            {
              colno: 13,
              lineno: 22,
              filename: "/src/components/User.tsx",
            },
          ],
        },
      },
    },
    {
      weight: 2,
      value: {
        handled: true,
        crash: false,
        name: "UserNotFoundError",
        message: "Can't find user",
        stacktrace: {
          frames: [
            {
              colno: 23,
              lineno: 45,
              filename: "/src/api/user.ts",
              function: "fetchUser",
            },
            {
              colno: 13,
              lineno: 22,
              filename: "/src/components/User.tsx",
            },
          ],
        },
      },
    },
    {
      weight: 2,
      value: {
        handled: true,
        crash: false,
        name: "UserNotFoundError",
        message: "Can't find user",
        stacktrace: {
          frames: [
            {
              colno: 23,
              lineno: 45,
              filename: "/src/database/user.ts",
              function: "getUser",
            },
            {
              colno: 43,
              lineno: 123,
              filename: "/src/utils/utils.ts",
            },
          ],
        },
      },
    },
  ]);
}
