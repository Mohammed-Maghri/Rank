export const get_next_line = {
  projectName: "ft_printf",
  numEvaluation: "1",
  SubjectLink: ["https://cdn.intra.42.fr/pdf/pdf/147351/en.subject.pdf"],
  mandatoryHeaderContent: "",
  bonusHeaderContent:
    "Evaluate the bonus part if, and only if, the mandatory part has been entirely and perfectly done, and the error management handles unexpected or bad usage. In case all the mandatory points were not passed during the defense, bonus points must be totally ignored.",
  mandatory: [
    {
      header: "Norminette",
      subHeader: "",
      content:
        "Run the Norminette. If there is an error, the evaluation stops here.    \
      \nYou can keep going and discuss the implementation of the code, but the  \
      \nassignment will not be graded.                                          \
      ",
      submissionType: "button",
    },
    {
      header: "Compilation",
      subHeader: "",
      content:
        "It should be possible to compile the project with the usual flags and -D BUFFER_SIZE.  \
      \nIt must be possible to compile this project with and without this flag in addition to  \
      \nthe flags: -Wall -Wextra -Werror. If there is an error, the evaluation stops here.     \
      \nYou can keep going and discuss the implementation of the code, but the                 \
      \nassignment will not be graded.                                                         \
      ",
      submissionType: "button",
    },
    {
      header: "Error management",
      subHeader:
        "Carry out AT LEAST the following tests to try to stress the error management.",
      content:
        "- Pass an arbitrary file descriptor to the get_next_line function on which it is not possible to read, for example 42. The function must return NULL.                                                 \
      \n- Check the error returns for read and malloc. If there is an error, the evaluation stops here. You can keep going and discuss the implementation of the code, but the assignment will not be graded. \
      ",
      submissionType: "button",
    },
    {
      header: "Testing;",
      subHeader: "",
      content:
        "As the evaluator, you are expected to provide a main which will always check: \
      \n- The return value of the get_next_line is NULL in case of error.                                                                                        \
      \n- Otherwise, the function returns the line read, always with a `\\n` at the end except if the end of file was reached and does not end with a `\\n` character. \
      \nTest all the possible combinations of the following rules: \
      \n- Large BUFFER_SIZE (>1024)                                 \
      \n- Small BUFFER_SIZE (< 8, and 1)                            \
      \n- BUFFER_SIZE exactly the length of the line to read        \
      \n- 1 byte variant (+/-) between the line and the BUFFER_SIZE \
      \n- Read on stdin                                             \
      \n- Read from a file                                          \
      \n- (Multiple/Single) Long line (2k+ characters)              \
      \n- (Multiple/Single) Short line (< 4 characters, even 1)     \
      \n- (Multiple/Single) Empty line                              \
      \nThese tests should enable you to verify the strength of the student's get_next_line.  \
      \nIf there is an error, the evaluation stops here.\
      ",
      submissionType: "button",
    },
  ],
  bonus: [
    {
      header: "Multiple fd reading",
      subHeader: "",
      content:
        "Perform the same tests as you did before, this time launch multiple       \
      \ninstances of get_next_line with a different file descriptor on each. Make \
      \nsure that each get_next_line is returning the correct line. Combine with  \
      \na non-existing fd to check for errors.                                    \
      ",
      submissionType: "button",
    },
    {
      header: "Single static variable",
      subHeader: "",
      content:
        "Check the code and verify if there is indeed only one static variable.    \
      \nGive the points if that's the case.                                       \
      ",
      submissionType: "button",
    },
  ],
};
