export const ft_printf = {
  projectName: "ft_printf",
  numEvaluation: "1",
  subjectLink: ["https://cdn.intra.42.fr/pdf/pdf/147351/en.subject.pdf"],
  mandatoryHeaderContent: "",
  bonusHeaderContent:
    "Bonuses will only be considered if the mandatory part is excellent. This means that the mandatory part must have been completed from start to finish, with perfect error handling even in the case of unexpected use. If all the mandatory points have not been awarded during this defense, no bonus points will be counted.",

  // No preliminaries in this Sheet
  preliminaries: [],

  // No general Instruction in this Sheet
  generalInstructions: [],

  mandatory: [
    {
      header: "",
      subHeader: "Simple conversion management",
      content:
        "- Test each conversion without any flags: `cspdiuxX%`.                                  \
      \n- Test special cases, such as 0, the smallest int, an empty string, or a NULL pointer.  \
      \n- Test with multiple arguments and conversions.                                         \
      \n- Try different flags within a sentence (with other surrounding characters).            \
      ",
      submissionType: "button",
    },
    {
      header: "",
      subHeader: "Let's go wild",
      content:
        "- Redo all the tests, but this time, check that the return value matches that of the original `printf`.  \
      \n- Try any combination of conversions.                                                                  \
      \n- Check what happens with identical consecutive conversions.                                           \
      ",
      submissionType: "button",
    },
  ],
  bonus: [
    {
      header: "Simple flag management",
      subHeader: "",
      content:
        "- Test the flags '.', '-' and 0.                                       \
      \n- Test %-d with INT_MIN.                                                \
      \n- Test the - flag with any value.                                       \
      \n- Test the 0 flag, for example with %04d.                               \
      \n- Test the '.' with various precisions.                                   \
      \n- For each test, the return value must match that of the original printf. \
      \n- For each working flag, award 1 point.                                   \
      \n- If all the flags work, award 2 points.                                  \
      ",
      submissionType: "slider",
    },
    {
      header: "#, +, space",
      subHeader: "",
      content:
        "- Test whether the conversions work with '#', '+', and 'space' in any combination of flags.\
      \n- Each flag earns 1 point.                                                \
      \n- If all the flags work, add 2 points.                                               \
      ",
      submissionType: "slider",
    },
  ],
};
