const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-6/12 lg:w-4/12 mx-auto my-8">
      <p className="text-[#D99904] italic text-sm md:text-xl text-center mb-2">
        ---{subHeading}---
      </p>
      <h3 className="text-lg md:text-3xl text-center text-black uppercase border-y-4 py-4 ">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
