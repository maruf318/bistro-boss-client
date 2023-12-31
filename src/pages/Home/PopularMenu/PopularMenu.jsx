import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = UseMenu();
  const popular = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <section className="mb-12">
      <SectionTitle
        heading="From our menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="flex mx-auto btn btn-outline border-0 border-b-4 border-b-[#1F2937] mt-4 text-black border-white">
        See More
      </button>
    </section>
  );
};

export default PopularMenu;
