const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item || {};
  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-xl">{name} ------------------</h3>
        <p className="text-[#737373] text-base">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItem;
