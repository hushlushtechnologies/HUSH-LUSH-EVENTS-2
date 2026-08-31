"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { JournalFilters } from "./JournalFilters";
import { ArticleCard } from "./ArticleCard";
import { JournalSidebar } from "./JournalSidebar";
import { articles } from "@/data/journal-articles";

const PAGE_SIZE = 8;

export function JournalArticles() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesFilter = activeFilter === "all" || article.categories.includes(activeFilter);
      const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  const visibleArticles = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section className="section-light py-16 md:py-20">
      <Container>
        <JournalFilters
          search={search}
          onSearchChange={setSearch}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {visibleArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          <JournalSidebar />
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              className="font-body rounded-full border border-light-primary/60 px-8 py-2.5 text-sm font-medium text-light-brand transition-colors hover:bg-light-primary hover:text-white"
            >
              Load More
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}