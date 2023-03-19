const SkillBox = ({ icon, title }) => (
  <img
    className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
    src={icon}
    alt={title}
    title={title}
  />
);

export default SkillBox;
