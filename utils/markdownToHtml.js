import { remark } from "remark";
import html from "remark-html";
import remarkUnwrapImages from 'remark-unwrap-images';

export default async function markdownToHtml(markdown) {
  const result = await remark().use(remarkUnwrapImages).use(html).process(markdown);
  return result.toString();
}
