const category = [
  "World",
  "Politics",
  "Business",
  "Opinion",
  "Tech",
  "Science",
  "Health",
  "Sports",
  "Entertainment",
  "Travel",
  "Others",
];

const Category = () => {
  return (
    <div>
      <hr />
      <ul className="flex gap-1 justify-center py-1 text-lg font-medium text-text-light overflow-x-auto">
        {category?.map((category) => (
          <li className="hover:bg-secondary/60 px-4 rounded-sm cursor-pointer duration-300" key={category}>{category}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Category;
