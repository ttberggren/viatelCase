export interface FilterButtonsProps {
  onFilterChange: (filter: "vote" | "release") => void;
  activeFilter: "vote" | "release";
}
