import SheetSectionheader from "./ui/SheetSectionHeader";
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

        {/* Preliminaries Section */}
        {sheetContent.preliminaries.length > 0 && (
          <>
            {/* Preliminaries Section Header */}
            <SheetSectionheader
              headerContent="Preliminaries"
              content="If a case of cheating is suspected, grading and evaluation end immediately. To report it, select the 'Cheat' flag. Be careful to use it calmly, cautiously, and judiciously."
            />
            {/* General Instructions */}
            {sheetContent.preliminaries.map((section, index) => (
              <SheetSection
                key={index}
                header={section.header}
                subHeader={section.subHeader}
                content={section.content}
                submissionType={section.submissionType}
              />
            ))}
          </>
        )}

        {/* General Instructions Section */}
        {sheetContent.generalInstructions.length > 0 && (
          <>
            {/* General Instructions Section Header */}
            <SheetSectionheader
              headerContent="General Instructions"
              content=""
            />
            {/* General Instructions */}
            {sheetContent.generalInstructions.map((section, index) => (
              <SheetSection
                key={index}
                header={section.header}
                subHeader={section.subHeader}
                content={section.content}
                submissionType={section.submissionType}
              />
            ))}
          </>
        )}

        {/* Mandatory Section Header */}
        <SheetSectionheader
          headerContent="Mandatory"
          content={sheetContent.mandatoryHeaderContent}
        />

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
        <SheetSectionheader
          headerContent="Bonus"
          content={sheetContent.bonusHeaderContent}
        />

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
