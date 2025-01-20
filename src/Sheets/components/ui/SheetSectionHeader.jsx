const SheetMandatoryHeader = ({ content = "" }) => {
  return (
    <div class="w-full">
      <hr className="my-5 border-t-1 border-solid border-[#eeeeee]" />
      <h3 class="font-extrabold text-3xl mb-1">Mandatory Part</h3>
      <p class="text-sm italic block font-semibold">{content}</p>
    </div>
  );
};

const SheetBonusHeader = ({ content = "" }) => {
  return (
    <div class="w-full">
      <hr className="my-5 border-t-1 border-solid border-[#eeeeee]" />
      <h3 class="font-extrabold text-3xl mb-1">Bonus Part</h3>
      <p class="text-sm italic block font-semibold">{content}</p>
    </div>
  );
};

export { SheetMandatoryHeader, SheetBonusHeader };
