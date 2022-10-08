import type { NextLayout } from "next";

import { Header } from "./Header";

/**
 * @package
 */
export const Layout: NextLayout = (page) => {
  return (
    <div>
      <Header />
      <main>{page}</main>
    </div>
  );
};
