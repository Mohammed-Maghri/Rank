const SheetMandatoryHeader = ({ content = "" }) => {
  return (
    <div className="w-full">
      <hr className="my-5 border-t-1 border-solid border-[#eeeeee]" />
      <h3 className="font-extrabold text-3xl mb-1">Mandatory Part</h3>
      <p className="text-sm italic block font-semibold">{content}</p>
    </div>
  );
};

const SheetBonusHeader = ({ content = "" }) => {
  return (
    <div className="w-full">
      <hr className="my-5 border-t-1 border-solid border-[#eeeeee]" />
      <h3 className="font-extrabold text-3xl mb-1">Bonus Part</h3>
      <p className="text-sm italic block font-semibold">{content}</p>
    </div>
  );
};

export { SheetMandatoryHeader, SheetBonusHeader };
