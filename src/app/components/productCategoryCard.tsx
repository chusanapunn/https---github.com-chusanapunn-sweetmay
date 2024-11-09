interface ProductCategoryCardProps {
  categories: {
    title: string;
    image: string;
  }[];
}

const productCategoryCard: React.FC<ProductCategoryCardProps> = ({ categories }) => {
  return (
    <div className="flex flex-col space-y-4 mt-4">
      {categories.map((category, index) => (
        <div key={index} className="flex items-center space-x-4">
          <img
            src={category.image}
            alt={category.title}
            className="h-16 w-16 object-cover rounded-md"
          />
          <h3 className="text-xl text-white">{category.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default productCategoryCard;