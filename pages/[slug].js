import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { getAllPosts, getPostBySlug } from "../utils/markdownApi";
import Section from "../components/section";

export default function Article({ article }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      {router.isFallback ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <Head>
            <title>{post.title}</title>
          </Head>
          <Section>
            <h1>{post.title}</h1>
            <h4>{post.date}</h4>
          </Section>
          <Section>{post.content}</Section>
        </>
      )}
    </div>
  );
}
