import { ProcessedEvent } from "./validations/ingest";

export function postEventsToTinyBird(events: ProcessedEvent[]) {
  if (process.env.TINYBIRD_URL === undefined)
    throw new Error("TINYBIRD_URL is not defined");
  if (process.env.TINYBIRD_KEY === undefined)
    throw new Error("TINYBIRD_KEY is not defined");

  fetch(process.env.TINYBIRD_URL + "/v0/events?name=events", {
    method: "POST",
    body: events.join("\n"),
    headers: {
      Authorization: `Bearer ${process.env.TINYBIRD_KEY}`,
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(console.error);
}
