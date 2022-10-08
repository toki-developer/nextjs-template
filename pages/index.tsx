import type { NextPageWithLayout } from "next";
import { Layout } from "src/layouts";
import { Index } from "src/pages/index";

const IndexPage: NextPageWithLayout = () => {
  return <Index />;
};

IndexPage.getLayout = Layout;

export default IndexPage;
