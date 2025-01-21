import SubmitCorrectionSlider from "./ui/SubmitCorrectionSlider";
import SubmitCorrectionButton from "./ui/SubmitCorrectionButton";
import Markdown from "react-markdown";

const SheetSection = ({
  header = "",
  subHeader = "",
  content = "",
  submissionType = "button",
}) => {
  return (
    <div className="w-full text-black">
      <h3 className="text-black text-lm font-extrabold mb-1">{header}</h3>
      <h4 className="text-black text-sm font-extrabold mb-1">{subHeader}</h4>
      <div className="flex flex-col gap-1 text-black text-sm markdown-parent">
        {content.split("\n").map((line, index) => (
          <Markdown key={index}>{line}</Markdown>
        ))}
      </div>
      {submissionType === "button" && <SubmitCorrectionButton />}
      {submissionType === "slider" && <SubmitCorrectionSlider />}
    </div>
  );
};
export default SheetSection;
