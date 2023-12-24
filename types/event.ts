export type Event = {
  id: string;
  timestamp: string;
  browser: {
    name: string;
    version: string;
  };
  exception: Exception;
  version: string;
  environment: string;
  app_key: string;
  user: string;
};

export type Exception = {
  name: string;
  message: string;
  stacktrace: {
    frames: {
      filename: string;
      function?: string;
      lineno: number;
      colno: number;
    }[];
  };
  handled: boolean;
  crash: boolean;
};
