 "use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PortfolioCard } from "./PortfolioCard";
import type { PortfolioItem } from "@/data/portfolio";

function useColumnCount() {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const mdQuery = window.matchMedia("(min-width: 1024px)");
    const smQuery = window.matchMedia("(min-width: 640px)");

    const update = () => {
      if (mdQuery.matches) setColumns(3);
      else if (smQuery.matches) setColumns(2);
      else setColumns(1);
    };

    update();
    mdQuery.addEventListener("change", update);
    smQuery.addEventListener("change", update);
    return () => {
      mdQuery.removeEventListener("change", update);
      smQuery.removeEventListener("change", update);
    };
  }, []);

  return columns;
}

interface MasonryGridProps {
  items: PortfolioItem[];
  onSelect: (item: PortfolioItem) => void;
}

export function MasonryGrid({ items, onSelect }: MasonryGridProps) {
  const columnCount = useColumnCount();

  const columns: PortfolioItem[][] = Array.from({ length: columnCount }, () => []);
  items.forEach((item, i) => {
    columns[i % columnCount].push(item);
  });

  return (
    <div className="flex gap-4 sm:gap-6">
      {columns.map((columnItems, colIndex) => (
        <div key={colIndex} className="flex flex-1 flex-col gap-4 sm:gap-6">
          {columnItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.03 * (i % 6), ease: [0.22, 1, 0.36, 1] }}
            >
              <PortfolioCard {...item} onClick={() => onSelect(item)} />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}