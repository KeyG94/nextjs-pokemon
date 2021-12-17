import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";

export default function aboutUs() {
  return (
    <Layout>
      <Head title="About us" />
      {/* Generally dont want to include inline style like this... */}
      <div className="container" style={{ display: "block" }}>
        <h1>About Us</h1>
        <p>Create these 3 routes, named exactly:</p>
        <ul>
          <li>{'"/"'}</li>
          <li>{'"/results"'}</li>
          <li>{'"/about-us"'}</li>
        </ul>
        <p>
          Place links to these routes in some kind of nav common to all pages.
        </p>
        <p>All three pages should use a Heading component.</p>
        <h3>Home page</h3>
        <p>
          This page should display a heading and a link to the results page.
          Results page This page should make a call to your URL and display at
          least 2 properties from each result. You can use either static
          generation or server-side rendering. If one of the properties you
          display is an image source, use Next{"'"}s Image component.
        </p>
        <h3>About us page</h3>
        <p>This page should display a heading and lorem text.</p>
      </div>
    </Layout>
  );
}
