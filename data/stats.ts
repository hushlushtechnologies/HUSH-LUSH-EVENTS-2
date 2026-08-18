export interface Stat {
  id: string;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { id: "events-created", value: "400+", label: "Events Created" },
  { id: "event-types", value: "10+", label: "Event Types" },
  { id: "team", value: "10+", label: "Team with One Vision" },
  { id: "happy-clients", value: "200+", label: "Happy Clients" },
];