import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  Footer,
} from "./sections";

import Nav from "./components/Nav";


const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="">
      <Footer />
    </section>
  </main>
);

export default App;
