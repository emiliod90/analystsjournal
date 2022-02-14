import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { getAllPosts, getPostBySlug } from "../utils/markdownApi";
import { motion } from "framer-motion";
import markdownToHTML from "../utils/markdownToHtml";
import ArticleBody from "../components/article-body";
// https://blog.nrwl.io/read-and-render-md-files-with-next-js-and-nx-89a85c1d9b44
// https://github.com/vercel/next.js/blob/canary/examples/blog-starter

export default function Article({ article }) {
  const router = useRouter();
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      {router.isFallback ? (
        <h3>Loading...</h3>
      ) : (
          <>
            <Head>
              <title>{article.title}</title>
            </Head>
            <motion.div
              className="article_title"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={({ duration: 0.8 }, 0.1)}
              style={{ fontSize: "2rem", lineHeight: "2.2rem", margin: "0.5rem 0px" }}
            >
              {article.title}
            </motion.div>
            <h4>{article.date}</h4>
            <ArticleBody content={article.content} />
          </>
        )}

    </div>
  );
}

// getStaticProps - (Static Generation) to fetch data at build time
// page will be pre-rendered with the information returned by the function
export async function getStaticProps({ params }) {
  const article = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content'
  ])
  const content = await markdownToHTML(article.content || '')

  return {
    props: {
      article: {
        ...article,
        content,
      }
    }
  }
}
// getStaticPaths - (Static Generation) to specify dynamic routes that get prerendered at build-time.
export async function getStaticPaths() {
  const articles = getAllPosts(['slug'])
  return {
    paths: articles.map((article) => {
      return {
        params: {
          slug: article.slug
        }
      }
    }),
    fallback: false
  }
}