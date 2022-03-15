import Head from "next/head";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
const Home = () => {
  return (
    <div>
      <Head>
        <script
          src="https://kit.fontawesome.com/d37eb4054d.js"
          crossorigin="anonymous"
        ></script>
        <title>Khawater Library | online book shop based in Damascus</title>
        <link rel="icon" href="k.png" />
      </Head>
      <div id="About" className="aboutSection">
        <motion.h3
          className="h3About"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            delay: 2,
            stiffness: 300,
          }}
        >
          Khawater library is an online bookshop based in Damascus, Syria
          <br /> that was established in 2016, we are specialized in book
          delivery within Damascus which is the main thing that made Khawater
          library kinda famous in damascus
          <br />
          because people during this period were suffuring from the side effects
          of the war.
        </motion.h3>
        <div className="transparentDiv"></div>
      </div>
      <div id="Services" className="servicesSection">
        <div className="flexbox">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Card className="card">
              <Card.Body>
                <motion.i
                  whileHover={{ rotate: 360, scale: 1.3, damping: 10 }}
                  transition={{ type: "spring", stiffness: 100, duration: 4 }}
                  class="fas fa-truck fa-3x"
                ></motion.i>
                <Card.Title>Books Delivery</Card.Title>
                <br />
                <Card.Text>
                  <p>
                    With this service is that you can easily get your book to
                    your doorstep by doing the following steps :<br /> 1 - send
                    your full Address in Damascus.
                    <br /> 2 - send your Full name.
                    <br /> 3 - send your phone number.
                    <br /> 4- send us the names of the books. <br /> (ding ding){" "}
                    <br /> your book is between your hands.
                    <br /> Happy reading &#128151;
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Card className="card">
              <Card.Body>
                <motion.i
                  whileHover={{ rotate: 360, scale: 1.3, damping: 10 }}
                  transition={{ type: "spring", stiffness: 100, duration: 4 }}
                  class="fas fa-gift fa-3x"
                ></motion.i>
                <Card.Title>Books Gifting</Card.Title>
                <br />
                <Card.Text>
                  <p>
                    it is the birthday of your precious one and you don't know
                    what is the gift ?. the Gift is absolutely a book. send us
                    the information of the gifted person and let the rest on us.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Home;
