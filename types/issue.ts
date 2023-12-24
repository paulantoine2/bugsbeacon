export type Issue = {
  id: string;
  app_key: string;
  issue_name: string;
  issue_description: string;
  has_crash: boolean;
  is_regression: boolean;
  total_events: number;
  affected_users: number;
  last_seen_event: string;
  last_seen_version: string;
  first_seen_event: string;
  first_seen_version: string;
};
