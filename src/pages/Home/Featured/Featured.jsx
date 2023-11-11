import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed pt-5  text-white  my-20">
      <div className="">
        <SectionTitle
          subHeading="Check it out"
          heading="Featured Item"
        ></SectionTitle>
        <div
          className="md:flex justify-center items-center pb-20 pt-12 px-6 md:px-36
         bg-slate-900 bg-opacity-70 h-full "
        >
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10 space-y-4">
            <p>Aug 20, 2029</p>
            <p className="uppercase">where can i get some?</p>
            <p className="">
              Discover exquisite flavors with our Ducklings Menu at Bistro Boss.
              Delight in succulent duck creations, expertly crafted to
              perfection. From crispy confit to rich, flavorful duck breasts,
              each dish promises a gourmet experience that will leave you
              craving for more.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-white border-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
