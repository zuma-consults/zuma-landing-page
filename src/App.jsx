import styles from "./style";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  StatComp,
  Footer,
  Testimonials,
  Hero,
  Form,
} from './components/index';

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden h-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <StatComp />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Form />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
