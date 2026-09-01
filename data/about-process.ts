export interface ProcessStepItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const leftSteps: ProcessStepItem[] = [
  { id: "listen", title: "Listen", description: "We begin with your story, expectations and vision." },
  { id: "imagine", title: "Imagine", description: "We begin with your story, expectations and vision." },
  { id: "design", title: "Design", description: "We begin with your story, expectations and vision." },
  { id: "refine", title: "Refine", description: "We question the details until everything feels just right." },
];

export const rightSteps: ProcessStepItem[] = [
  {
    id: "discover",
    title: "Discover",
    description: "We listen, understand your occasion and define what matters most.",
  },
  {
    id: "concept",
    title: "Concept",
    description: "We develop the creative direction, mood and experience around your vision.",
  },
  {
    id: "plan",
    title: "Plan",
    description: "We bring together budgets, timelines, venues, vendors and every essential detail.",
  },
  {
    id: "create",
    title: "Create",
    description: "Our creative and production teams turn the concept into a real environment.",
  },
];

export const extraSteps: ProcessStepItem[] = [
  {
    id: "coordinate",
    title: "Coordinate",
    description: "We manage the moving parts, keeping everything on track behind the scenes.",
     icon: "/images/icons/belief-celebrate.svg",
  
  },
  {
    id: "celebrate",
    title: "Celebrate",
    description: "You step into the moment while we take care of everything around it.",
     icon: "/images/icons/belief-coordinate.svg",
  },
];

export const verticalBadgeText = "HUSH LUSH EVENTS";
export const verticalBadgeImage = "/images/about/process.png";