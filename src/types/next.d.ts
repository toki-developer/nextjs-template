import type { NextPage } from "next";
import type { AppProps } from "next/app";

type PageAttributes = { getLayout?: (page: ReactElement) => JSX.Element };

declare module "next" {
  type NextLayout = NonNullable<PageAttributes["getLayout"]>;
  type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
    P,
    IP
  > &
    PageAttributes;
}

declare module "next/app" {
  type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
  };
}
