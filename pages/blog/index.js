import Hero from "../../components/hero";
import { getAllPosts } from "../../utils/markdownApi";
import { motion } from "framer-motion";
import ArticleList from "../../components/lists/articleList";
import styles from "../../styles/blog.module.css";
import { useState } from "react";

//https://www.youtube.com/watch?v=mZvKPtH9Fzo&ab_channel=PedroTech
//https://www.w3schools.com/jsref/jsref_includes.asp
// https://codeburst.io/javascript-array-distinct-5edc93501dc4
//https://stackoverflow.com/questions/69959451/react-toggle-style-on-mapped-element-on-click

export default function Blog({ allPosts }) {
  const articles = allPosts;
  const distinctTags = [...new Set(articles.map((x) => x.tags.topic))];
  const [searchTerm, setSearchTerm] = useState("");
  const [toggle, toggleSetter] = useState("#f6f3ea");
  const [activeItem, setActiveItem] = useState(-1);
  const [switchArticle, setSwitchArticle] = useState(true);

  function toggleSearchTerm(element, index) {
    if (searchTerm === "") {
      setSearchTerm(element.toLowerCase());
      setActiveItem(index);
      toggleSetter("rgba(0, 0, 0, 0.1)");
      console.log(element, index);
    } else if (searchTerm === element.toLowerCase()) {
      setSearchTerm("");
      setActiveItem(-1);
      toggleSetter("#f6f3ea");
      console.log(element, index);
    }
  }

  return (
    <div>
      <Hero
        title={"Blog"}
        one={
          "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/laura-chouette-14u6sJ6KiyI-unsplash.jpg"
        }
        two={
          "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/luke-stackpoole-mOEqOtmuPG8-unsplash.jpg"
        }
        three={
          "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/eric-dekker-zP4_qK9FEQA-unsplash.jpg"
        }
        four={
          "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/nathan-dumlao-N3btvQ51dL0-unsplash.jpg"
        }
        five={
          "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/rizky-subagja-ZfVEWZTHs8M-unsplash.jpg"
        }
        six={
          "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/roland-denes-9cvazp2FUzc-unsplash.jpg"
        }
      />

      <div className={styles.flex_inline}>
        <input
          value={searchTerm}
          className={styles.input}
          type={"text"}
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value.toLowerCase());
          }}
        ></input>
      </div>
      <div className={styles.tag_group}>
        {distinctTags.map((element, index) => (
          <div
            key={index}
            className={styles.tags}
            style={{ background: activeItem === index ? toggle : "#f6f3ea" }}
            onClick={() => toggleSearchTerm(element, index)}
          >
            <p>{element}</p>
          </div>
        ))}
      </div>
      <section className={styles.section}>
        <div className={styles.article_list}>
          {articles
            .filter((element) => {
              if (searchTerm === "") {
                return element;
              } else if (
                element.title.toLowerCase().includes(searchTerm) ||
                element.tags.topic.toLowerCase().includes(searchTerm)
              ) {
                return element;
              }
            })
            .map((element, index) => (
              <ArticleList
                key={index}
                page={element.slug}
                title={element.title}
                date={element.date}
                tags={element.tags}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "image",
    "tags",
    "author",
    "slug",
  ]);

  return {
    props: { allPosts },
  };
}
