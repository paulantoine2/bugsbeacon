"use client";

import { useSupabase } from "@/app/supabase-provider";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, CogIcon, LogoutIcon } from "@heroicons/react/outline";
import { Button, Text } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { Fragment } from "react";

export function UserNav({
  user,
}: {
  user: { avatar_url: string | null; full_name: string | null };
}) {
  const { supabase } = useSupabase();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <Menu as="div" className="relative h-7">
      <div>
        <Menu.Button>
          <Image
            src={user.avatar_url || "/profile.jpg"}
            alt="profile"
            width={28}
            height={28}
            className="rounded-tremor-full overflow-hidden"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 rounded-tremor-default origin-top-right divide-y dark:divide-dark-tremor-border  dark:bg-dark-tremor-background shadow-lg ring-1 dark:ring-dark-tremor-ring focus:outline-none">
          <div className="p-4">
            <Text>{user.full_name}</Text>
          </div>
          <div className="p-2">
            <Menu.Item>
              <Link href="/" target="_blank">
                <Button
                  variant="secondary"
                  className="w-full justify-start border-none"
                >
                  Visit Home
                </Button>
              </Link>
            </Menu.Item>
          </div>
          <div className="p-2">
            <Menu.Item>
              <Button
                variant="secondary"
                className="w-full justify-start border-none"
                icon={CogIcon}
              >
                Settings
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button
                variant="secondary"
                className="w-full justify-start border-none"
                icon={LogoutIcon}
                onClick={handleLogout}
              >
                Log out
              </Button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
