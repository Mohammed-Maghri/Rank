const SheetSectionheader = ({ headerContent = "", content = "" }) => {
  return (
    <div className="w-full mb-2">
      <hr className="my-5 border-t-1 border-solid border-[#eeeeee]" />
      <h3 className="font-extrabold text-3xl mb-1">{headerContent}</h3>
      <p className="text-sm italic block font-semibold">{content}</p>
    </div>
  );
};
export default SheetSectionheader;
