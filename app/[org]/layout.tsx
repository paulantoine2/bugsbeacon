import ProjectSelect from "@/components/project-select";

import SANDBOX from "@/config/sandbox";
import { Button, Text } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";

export default function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const org = SANDBOX.orgs[params.org];
  return (
    <div className="min-h-screen">
      <nav className="flex items-center px-4 py-3 pb-2">
        <div className="flex items-center flex-1 text-tremor-brand dark:text-dark-tremor-brand">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM11.1281 8.6813H20.829C20.5692 7.31889 19.218 4.59406 15.8919 4.59406C12.5659 4.59406 11.3302 7.31889 11.1281 8.6813ZM22.4747 9.46396C22.4459 9.05814 22.6133 8.24649 23.5141 8.24649C24.4149 8.24649 24.6401 9.05814 24.6401 9.46396C24.6979 10.1017 24.6748 11.6206 24.1204 12.5946C24.0582 12.7039 23.996 12.8181 23.9312 12.937C23.2745 14.1428 22.3535 15.8335 18.4904 17.8124C13.8132 19.8995 12.0116 21.3778 12.4273 25.2042C11.7633 25.0013 10.4525 24.0041 10.5218 21.6387C10.6084 18.682 13.8998 16.9427 16.8447 15.8992C19.7896 14.8556 22.4747 12.5946 22.4747 9.46396ZM10.695 17.9863C9.65561 17.2616 7.35164 15.2383 6.45084 12.9425C6.18073 14.4208 6.21834 18.0906 8.52961 20.943C9.05309 21.589 9.14296 21.3046 9.37082 20.5835C9.57237 19.9455 9.8819 18.9659 10.695 17.9863ZM7.40359 9.20307C7.12643 13.3077 10.1753 16.0731 11.7344 16.9427C12.052 16.7688 12.8431 16.3166 13.4667 15.8992C9.88439 13.2226 9.74764 11.5919 9.58828 9.69159C9.58196 9.61617 9.5756 9.54032 9.56898 9.46396C9.39575 7.46382 7.40359 8.42041 7.40359 9.20307ZM20.829 10.1597H11.1281C11.5611 13.8991 15.0258 14.6817 15.6321 14.7687C19.8589 13.7251 20.8579 11.2612 20.829 10.1597ZM25.4196 12.9425C25.1598 14.073 23.8779 16.7166 20.829 18.2472C20.5346 18.395 20.2391 18.5412 19.9449 18.6868C16.4312 20.426 13.1005 22.0747 13.8998 25.2042C14.5927 27.9174 15.3434 29.1755 15.6321 29.4653C16.094 28.5667 17.6242 26.3521 20.0495 24.6824C23.081 22.5953 26.6322 16.7688 25.4196 12.9425Z"
              fill="currentColor"
            />
          </svg>

          <Button variant="light" className="mx-4">
            <Link href={`/${params.org}`}>{org.name}</Link>
          </Button>
          <ProjectSelect org={params.org} />
        </div>
        <div className="flex items-center gap-6">
          <Button variant="secondary">
            <Link href="/">Feedback</Link>
          </Button>
          <Button variant="light">
            <Link href="/">Roadmap</Link>
          </Button>
          <Button variant="light">
            <Link href="/">Docs</Link>
          </Button>

          <Image
            src="/profile.jpg"
            alt="profile"
            width={28}
            height={28}
            className="rounded-full"
          />
          {/* <Avatar className="h-7 w-7">
            <AvatarImage src="/profile.jpg" />
          </Avatar> */}
        </div>
      </nav>
      {children}
      <footer className="border-t border-tremor-border dark:border-dark-tremor-border">
        <div className="container py-10">
          <Text>Bugs Beacon</Text>
        </div>
      </footer>
    </div>
  );
}
