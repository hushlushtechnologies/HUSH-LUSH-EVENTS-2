 import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ArticleDetailHeader } from "@/components/sections/JournalArticleDetail/ArticleDetailHeader";
import { ArticleDetailBody } from "@/components/sections/JournalArticleDetail/ArticleDetailBody";
import { RelatedArticles } from "@/components/sections/JournalArticleDetail/RelatedArticles";
import { JournalSidebar } from "@/components/sections/JournalArticles/JournalSidebar";
import { getArticleBySlug, articleDetails } from "@/data/journal-articles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articleDetails.map((article) => ({ slug: article.slug }));
}

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Exclude the current article, cap at 3 to match the design's 3-across row
  const relatedArticles = articleDetails.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="section-light py-16 md:py-24">
        <Container>
          {/* Full width — direct child of Container, not inside the grid below */}
          <ArticleDetailHeader {...article} />

          <div className="mt-12 grid grid-cols-1 gap-12  ">
            <ArticleDetailBody {...article} />
          </div>
        </Container>
      </section>

      <RelatedArticles articles={relatedArticles} />
    </>
  );
}