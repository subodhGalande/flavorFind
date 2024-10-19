const category = [
  {
    title: "Breakfast",
    img: "/assets/cat1.png",
    color: "from-[#708246]/15",
  },
  {
    title: "Vegan",
    img: "/assets/cat2.png",
    color: "from-[#6CC63F]/15",
  },
  {
    title: "Meat",
    img: "/assets/cat3.png",
    color: "from-[#CC261B]/15",
  },
  {
    title: "Desserts",
    img: "/assets/cat4.png",
    color: "from-[#F09E00]/15",
  },
  {
    title: "Lunch",
    img: "/assets/cat5.png",
    color: "from-[#000000]/15",
  },
  {
    title: "Chocolate",
    img: "/assets/cat6.png",
    color: "from-[#A5634D]/15",
  },
];

const CategoryCard = () => {
  return (
    <>
      {category.map((item, index) => (
        <div
          key={index}
          className={`flex h-40 w-32 flex-col items-center justify-around overflow-hidden rounded-2xl bg-gradient-to-t ${item.color} to-transparent to-50%`}
        >
          <img src={item.img} height="100px" width="80px" />
          <p className="text-center font-inter text-sm font-semibold">
            {item.title}
          </p>
        </div>
      ))}
    </>
  );
};

export default CategoryCard;
