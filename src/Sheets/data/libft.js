export const libft = {
  projectName: "Libft",
  numEvaluation: "1",
  subjectLink: ["https://cdn.intra.42.fr/pdf/pdf/147564/en.subject.pdf"],
  mandatoryHeaderContent:
    "You must test the functions present in the libft, either with your own set of tests or with those of the person being evaluated.",
  bonusHeaderContent:
    "Bonuses will only be considered if the mandatory part is excellent. This means that the mandatory part must have been completed from start to finish, with perfect error handling even in the case of unexpected use. If all the mandatory points have not been awarded during this defense, no bonus points will be counted.",

  // No preliminaries in this Sheet
  preliminaries: [],

  // No general Instruction in this Sheet
  generalInstructions: [],

  mandatory: [
    {
      header: "Libc functions #1",
      subHeader: "",
      content:
        "Test that ALL these functions fulfill their role exactly as they should:\
      \n- ft_strlen               \
      \n- ft_memcpy               \
      \n- ft_memset               \
      \n- ft_bzero                \
      \n- ft_memmove              \
      \n- ft_memcmp               \
      \n- ft_memchr Does it work? \
      ",
      submissionType: "button",
    },
    {
      header: "Libc functions #2",
      subHeader: "",
      content:
        "Test that ALL these functions fulfill their role exactly as they should:\
      \n- ft_isalpha                \
      \n- ft_isdigit                \
      \n- ft_isalnum                \
      \n- ft_isascii                \
      \n- ft_isprintDoes it work?   \
      ",
      submissionType: "button",
    },
    {
      header: "Libc functions #3",
      subHeader: "",
      content:
        "Test that ALL these functions fulfill their role exactly as they should:\
      \n- ft_toupper                 \
      \n- ft_tolower                 \
      \n- ft_strchr                  \
      \n- ft_strrchr Does it work?   \
      ",
      submissionType: "button",
    },
    {
      header: "Libc functions #4",
      subHeader: "",
      content:
        "Test that ALL these functions fulfill their role exactly as they should:\
      \n- ft_strlcat                \
      \n- ft_strlcpy                \
      \n- ft_atoi                   \
      \n- ft_strnstr                \
      \n- ft_strncmp                \
      \n- ft_calloc                 \
      \n- ft_strdup Does it work?   \
      ",
      submissionType: "button",
    },
    {
      header: "Additional functions #1",
      subHeader: "",
      content:
        "Test that ALL these functions fulfill their role exactly as they should:\
      \n- ft_substr                    \
      \n- ft_strjoin                   \
      \n- ft_putchar_fd                \
      \n- ft_putstr_fd                 \
      \n- ft_putendl_fd                \
      \n- ft_putnbr_fd Does it work?   \
      ",
      submissionType: "button",
    },
    {
      header: "Additional functions #2",
      subHeader: "",
      content:
        "Test that ALL these functions fulfill their role exactly as they should:\
      \n- ft_strmapi              \
      \n- ft_striteri             \
      \n- ft_strtrim              \
      \n- ft_split                \
      \n- ft_itoa Does it work?   \
      ",
      submissionType: "button",
    },
  ],
  bonus: [
    {
      header: "",
      subHeader: "ft_lstnew",
      content: "Does it work?",
      submissionType: "button",
    },
    {
      header: "",
      subHeader: "ft_lstdelone",
      content: "Does it work?",
      submissionType: "button",
    },
    {
      header: "",
      subHeader: "ft_lstclear",
      content: "Does it work?",
      submissionType: "button",
    },
    {
      header: "",
      subHeader: "ft_lstadd_front",
      content: "Does it work?",
      submissionType: "button",
    },
    {
      header: "",
      subHeader: "ft_lstadd_back",
      content: "Does it work?",
      submissionType: "button",
    },
    {
      header: "",
      subHeader: "ft_lstsize",
      content: "Does it work?",
      submissionType: "button",
    },
    {
      header: "",
      subHeader: "ft_lstlast",
      content: "Does it work?",
      submissionType: "button",
    },
    {
      header: "",
      subHeader: "ft_lstiter",
      content: "Does it work?",
      submissionType: "button",
    },
    {
      header: "",
      subHeader: "ft_lstmap",
      content: "Does it work?",
      submissionType: "button",
    },
  ],
};
