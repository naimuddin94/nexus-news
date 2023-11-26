export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    borderColor: "#3FC1C9",
    minHeight: "48px",
    height: "48px",
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided) => ({
    ...provided,
    height: "48px",
    padding: "0 6px",
  }),

  input: (provided) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "48px",
  }),
};



export const tags = [
  { value: "Environment", label: "Environment" },
  { value: "Climate Change", label: "Climate Change" },
  { value: "Biodiversity", label: "Biodiversity" },
  { value: "Renewable Energy", label: "Renewable Energy" },
  { value: "Sustainability", label: "Sustainability" },
  { value: "Technology", label: "Technology" },
  { value: "Electric Vehicles", label: "Electric Vehicles" },
  { value: "Automotive", label: "Automotive" },
  { value: "AI", label: "AI" },
  { value: "Healthcare", label: "Healthcare" },
  { value: "Agriculture", label: "Agriculture" },
  { value: "Space", label: "Space" },
  { value: "Exploration", label: "Exploration" },
  { value: "Science", label: "Science" },
  { value: "Cybersecurity", label: "Cybersecurity" },
  { value: "Digital", label: "Digital" },
  { value: "Psychology", label: "Psychology" },
  { value: "Happiness", label: "Happiness" },
  { value: "Well-being", label: "Well-being" },
];

export const publishers = [
  {
    name: "Environmental Gazette",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Energy Today",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Automotive Trends",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "HealthTech Insights",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "AgriTech Times",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Cosmos Chronicles",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "CyberTech Insights",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Mind Matters",
    logo: "https://via.placeholder.com/150",
  },
];
