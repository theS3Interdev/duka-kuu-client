import Link from "next/link";

import { getCategories } from "@/lib/actions/get-categories";

import { Container } from "@/components/misc/container";
import { NavigationBarActions, NavigationBarMenu } from "@/components/index";

export const NavigationBar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center justify-between px-3">
          <div className="flex items-center ">
            <Link href="/" className="mr-1 lg:mr-3">
              <p className="font-montserrat text-xl font-bold">DKS</p>
            </Link>

            <NavigationBarMenu data={categories} />
          </div>

          <NavigationBarActions />
        </div>
      </Container>
    </div>
  );
};
