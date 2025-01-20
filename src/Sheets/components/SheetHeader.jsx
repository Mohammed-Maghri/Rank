import { LiaPasteSolid } from "react-icons/lia";

const Head = ({ projectName, numEvaluation }) => {
  return (
    <div className="w-[100%] h-[200px] mt-4">
      <div className="w-[100%] h-[40px] flex items-center justify-center">
        <p className="font-bars2 text-black font-bold text-xl">
          SCALE FOR PROJECT
        </p>
        <p className="font-bars2 ml-1 text-teal-500 font-extrabold text-xl">
          {projectName}
        </p>
      </div>
      <div className="h-[30px] w-[100%] flex items-start justify-center">
        <p className="font-bars2 text-black font-normal text-sm">
          You should evaluate {numEvaluation} students in this team
        </p>
      </div>
      <div className="flex items-center justify-center w-[100%] h-[60px]">
        <div className="w-[50px] h-[50px] bg-gray-400 rounded-full"></div>
      </div>
      <div className="w-[100%] flex items-center justify-center h-[50px]">
        <div className="w-[270px] h-[40px] flex flex-row  bg-gray-100">
          <div className="w-[85%] h-full"></div>
          <div className="flex items-center justify-center w-[15%] bg-gray-200 h-full">
            <LiaPasteSolid width={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SheetHeader = ({ projectName, numEvaluation, SubjectLink = [] }) => {
  return (
    <div className="text-black w-full">
      <Head projectName={projectName} numEvaluation={numEvaluation} />
      <div className="">
        <div className="mb-4" id="introduction-24830">
          <h3 className="text-black text-3xl font-extrabold mb-1">
            Introduction
          </h3>
          <div className="flex flex-col gap-2 text-black font-normal text-sm">
            <p className="block">Please follow the rules below:</p>
            <p className="block">
              - Stay polite, courteous, respectful, and constructive during the
              evaluation process. The well-being of the community depends on it.
            </p>

            <p className="block">
              - Identify with the evaluated person or group any potential
              malfunctions in their work. Take the time to discuss and debate
              the identified issues.
            </p>
            <p className="block">
              - You must take into account that there may be slight differences
              in interpretation between the project instructions, its scope, and
              its features. Keep an open mind and grade as honestly as possible.
              The educational value is only valid if the peer evaluation is
              conducted seriously.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-black text-3xl font-extrabold mb-1">
            Guidelines
          </h3>
          <div className="flex flex-col gap-2 text-black font-normal text-sm">
            <p className="block">
              - Only grade what is contained in the cloned Git repository of the
              student or group.
            </p>
            <p className="block">
              - Ensure that the Git repository actually belongs to the student
              or group, that the project is indeed the one expected, and that
              "git clone" is used in an empty directory.
            </p>
            <p className="block">
              - Carefully verify that no aliases have been used to deceive you
              and ensure that you are evaluating the official submission.
            </p>
            <p className="block">
              - To avoid any surprises, check with the student or group for any
              potential scripts used to facilitate the evaluation, such as test
              or automation scripts.
            </p>
            <p className="block">
              - Do not blindly trust test programs! They could be incorrect.
            </p>
            <p className="block">
              - Check the Makefile: no wildcards, it should not re-link. If this
              is the case, the grade is 0. Use make, then make --debug to ensure
              this.
            </p>
            <p className="block">
              - If you have not completed the project you are about to evaluate,
              you must read the entire topic before starting the evaluation.
            </p>
            <p className="block">
              - Use the available flags to signal an empty submission, a
              non-functioning program, a Norme error, cheating... In these
              situations, the evaluation is terminated and the grade is 0, or
              -42 in the case of cheating. However, except in cases of cheating,
              you are encouraged to continue the discussion on the work
              submitted, even if it is incomplete, in order to identify mistakes
              not to be repeated in the future.
            </p>
            <p className="block">
              - Throughout the duration of the evaluation, no segfault or other
              unexpected, premature, or uncontrolled shutdown will be tolerated.
              In such cases, the final grade will be 0. Use the appropriate
              flag.
            </p>
            <p className="block">
              - You should never have to edit a file except for an existing
              configuration file. If you wish to modify a file, you must clearly
              state the reasons for the editing and be in agreement with the
              evaluated student before doing anything.
            </p>
            <p className="block">
              - You must also verify the absence of memory leaks. Any memory
              allocated on the heap must be properly freed before the end of the
              program's execution. You are entitled to use any tool available on
              the machine such as leaks, valgrind, or e_fence. In the case of
              memory leaks, check the appropriate flag.
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <div>
          <h3 className="text-black text-3xl font-extrabold mb-1">
            Attachments
          </h3>
          {SubjectLink.map((link, index) => (
            <div className="flex flex-row gap-3" key={index}>
              <a
                href={link}
                target="_blank"
                className="text-sm hover:underline cursor-pointer text-[#00babc]"
                rel="noreferrer"
              >
                subject.pdf
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SheetHeader;
