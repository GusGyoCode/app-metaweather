import Aside from "./aside";
import Layout from "./layout";
import Main from "./main";

export default function System ({titlePage, children}) {
  return (
    <Layout titlePage={titlePage}>
      <Aside/>
      <Main/>
      {children}
    </Layout>
  )
}