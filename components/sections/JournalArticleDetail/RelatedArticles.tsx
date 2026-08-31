import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/sections/JournalArticles/ArticleCard";
import type { Article } from "@/data/journal-articles";

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className="section-light py-20 md:py-28">
      <Container>
        <SectionHeading
          decoration="/images/decorations/heart-orbit.png"
          headingLines={["Explore More", "Blogs"]}
          underline
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </Container>
    </section>
  );
}