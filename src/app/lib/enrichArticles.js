import { generateSlug } from "./generateSlug";

export function enrichArticles(articles) {
  return articles.map(article => ({
    ...article,
    slug: generateSlug(article.title),
  }));
}
