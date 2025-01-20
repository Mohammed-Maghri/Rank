import {
  SheetBonusHeader,
  SheetMandatoryHeader,
} from "./ui/SheetSectionHeader";
import SubmitFlags from "./SubmitFlgs";
import SheetHeader from "./SheetHeader";
import SheetSection from "./SheetSection";

const SheetContent = ({ sheetContent }) => {
  return (
    <div className="container mx-auto w-[100%] max-w-[1130px] flex items-center flex-col justify-center bg-white rounded-md">
      <div className="text-black w-[90%] mx-3 h-[100%] max-w-[900px] flex flex-col items-center gap-2">
        {/* Sheet: Introduction and Guidelines */}
        <SheetHeader
          projectName={sheetContent.projectName}
          numEvaluation={sheetContent.numEvaluation}
          SubjectLink={sheetContent.subjectLink}
        />

        {/* Mandatory Section Header */}
        <SheetMandatoryHeader content={sheetContent.mandatoryheaderContent} />

        {/* Mandatory Section */}
        {sheetContent.mandatory.map((section, index) => (
          <SheetSection
            key={index}
            header={section.header}
            subHeader={section.subHeader}
            content={section.content}
            submissionType={section.submissionType}
          />
        ))}

        {/* Mandatory Section Header */}
        <SheetBonusHeader content={sheetContent.bonusHeaderContent} />

        {/* Bnus Section */}
        {sheetContent.bonus.map((section, index) => (
          <SheetSection
            key={index}
            header={section.header}
            subHeader={section.subHeader}
            content={section.content}
            submissionType={section.submissionType}
          />
        ))}

        {/* Sheet Submission Flags */}
        <SubmitFlags />
      </div>
    </div>
  );
};
export default SheetContent;
