import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <div className="container" style={{ display: "block" }}>
        <h1>Home Page Heading</h1>
        <p>
          Check out the{" "}
          <Link href="/results">
            <a>results</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
