export type Issue = {
  id: string;
  title?: string;
  exception_name: string;
  exception_message: string;
  is_crash: boolean;
  is_regression: boolean;
  events: number;
  victims: number;
  last_seen: string;
  last_seen_version: string;
  first_seen: string;
  first_seen_version: string;
};
