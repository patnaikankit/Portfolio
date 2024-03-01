import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt magnam voluptate consectetur, dicta id laudantium et inventore eum doloremque suscipit voluptatum possimus? Voluptates nemo quia fugiat voluptas, nam maxime quaerat error quo amet minima exercitationem quasi eos natus perferendis tempore, pariatur consectetur? Sed possimus ducimus maxime praesentium illo optio molestias?
          </p>
          <p className="about-grid-info-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad modi delectus inventore ex nam veritatis ducimus. Repellat id debitis, laboriosam hic quasi ipsa vitae architecto eos a labore? Hic, molestias.{" "}
            {/* <Link href="" className="link" target="_blank">
              
            </Link> */}
          </p>

          <p className="about-grid-info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate praesentium corrupti sed totam necessitatibus earum accusantium accusamus quis, quas distinctio eius quo ad debitis? Atque mollitia sunt, odit sit deleniti dignissimos maxime nisi quas quia aspernatur, cumque fugiat dolorum.
          </p>
          <p className="about-grid-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, porro et? Inventore quas, repellendus itaque, numquam officiis, ipsum ex consectetur asperiores magni earum architecto similique? Veniam natus excepturi eveniet ullam!
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">Go</li>
            <li className="about-grid-info-list-item">Javascript</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
