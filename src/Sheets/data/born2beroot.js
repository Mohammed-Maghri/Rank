export const born2beroot = {
  projectName: "Born2BeRoot",
  numEvaluation: "1",
  subjectLink: ["https://cdn.intra.42.fr/pdf/pdf/147358/en.subject.pdf"],
  mandatoryHeaderContent:
    "The project involves creating and configuring a virtual machine following strict rules. The evaluated person will need to assist you during the defense. Make sure all the following points are respected.",
  bonusHeaderContent:
    "Bonuses will only be examined if the mandatory part is excellent. This means that the mandatory part must have been completed from start to finish, with perfect error management even in cases of unexpected use. If all mandatory points have not been awarded during this defense, no bonus points will be counted.",

  preliminaries: [
    {
      header: "Preliminary Tests",
      subHeader: "",
      content:
        "- Verify the following points:                                                                                                                         \
      \n- The conditions for access to the defense are met: the evaluated person(s) is present, the submission is non-empty and truly belongs to them, etc...  \
      \n- For this project, you must clone the Git repository on the computer of the person being evaluated.                                                   \
      ",
      submissionType: "button",
    },
  ],

  generalInstructions: [
    {
      header: "General Guidelines",
      subHeader: "",
      content:
        "- During the defense, as soon as you need help to verify a point, the evaluated person must assist you.                                                                                                                                                                 \
      \n- Check that the 'signature.txt' file is present at the root of the cloned repository.                                                                                                                                                                                  \
      \n- Ensure that the signature contained in 'signature.txt' matches that of the '.vdi' file of the virtual machine being evaluated. A simple diff should allow you to compare the two signatures. If needed, ask the evaluated person where their '.vdi' file is located.  \
      \n- As a precaution, you may duplicate the original virtual machine to keep a copy.                                                                                                                                                                                       \
      \n- Launch the virtual machine to be evaluated.                                                                                                                                                                                                                           \
      \n- If something does not work as expected or the two signatures differ, the evaluation stops here.                                                                                                                                                                       \
      ",
      submissionType: "button",
    },
  ],

  mandatory: [
    {
      header: "Project Overview",
      subHeader: "The evaluated person must simply explain:",
      content:
        "- The basic functioning of their virtual machine                                                                                                                                                                                                                                                                 \
      \n- Their choice of operating system                                                                                                                                                                                                                                                                               \
      \n- The basic differences between Rocky and Debian                                                                                                                                                                                                                                                                 \
      \n- The benefits of virtual machines                                                                                                                                                                                                                                                                               \
      \n- If the chosen operating system is Rocky, they must explain what SELinux and DNF are.                                                                                                                                                                                                                           \
      \n- If the chosen operating system is Debian, they must explain the difference between aptitude and apt, and what APPArmor is. During the defense, a script must display information every 10 minutes. Its operation will be checked in detail later. If the explanations are not clear, the evaluation stops here.\
      ",
      submissionType: "button",
    },
    {
      header: "Simple Configuration",
      subHeader:
        "Reminder: as soon as you need help to verify a point, the evaluated person must be able to assist you.",
      content:
        "- Verify that the machine does not have a graphical environment at startup. A password will be requested before any connection attempt on this machine. Log in with a non-root user. Verify that the chosen password respects the rules imposed in the subject. Then, with the help of the evaluator, make sure that:\
      \n- The chosen operating system is indeed Debian or Rocky                                                                                                                                                                                                                                                              \
      \n- The UFW service is properly launched                                                                                                                                                                                                                                                                               \
      \n- The SSH service is properly launched. If something does not work as expected or is not clearly explained, the evaluation stops here.                                                                                                                                                                               \
      ",
      submissionType: "button",
    },
    {
      header: "User",
      subHeader:
        "Reminder: as soon as you need help to verify a point, the evaluated person must be able to assist you.",
      content:
        "The subject requires that a user with the login name of the evaluated person be present on the virtual machine. Verify that this user has been added and that they belong to the 'sudo' and 'user42' groups.                          \
      \nEnsure the rules imposed in the subject concerning the password policy have been implemented by following the steps below.                                                                                                            \
      \nFirst, create a new user. Assign them a password of your choice, respecting the subject's rules.                                                                                                                                      \
      \nThe evaluated person must now explain how they were able to implement the requested rules on their virtual machine.                                                                                                                   \
      \nNormally, one or two files would have been modified.                                                                                                                                                                                  \
      \nIf there is any problem, the evaluation stops here.                                                                                                                                                                                   \
      \n- Now that you have a new user, ask the evaluated person to create a group named 'evaluating' in front of you and assign it to this user.                                                                                               \
      \n- Finally, check that this user indeed belongs to the 'evaluating' group.                                                                                                                                                               \
      \n- To finish, ask the evaluated person to explain the purpose of this password policy, as well as the advantages and disadvantages of its implementation. Of course, answering that it is because the subject requires it does not count.\
      \n- If something does not work as expected or is not clearly explained, the evaluation stops here.                                                                                                                                        \
      ",
      submissionType: "button",
    },
    {
      header: "Hostname and Partitions",
      subHeader:
        "Reminder: as soon as you need help to verify a point, the evaluated person must be able to assist you.",
      content:
        "- Verify that the hostname of the machine is formatted as follows: login42 (login of the evaluated person).                                                          \
      \n- Change this hostname by replacing the login with yours, then restart the machine. If upon restarting, the hostname has not been updated, the evaluation stops here.\
      \n- You can now restore the original hostname of the machine.                                                                                                          \
      \n- Ask the evaluated person how to display the partitions of their virtual machine.                                                                                   \
      \n- Compare the output with the example given in the subject. Note: if the evaluated person has done the bonuses, you should refer to the example from the bonus part. \
      \nThis part is an opportunity to discuss partitions! The evaluated person must give you a brief explanation of how LVM works and why it's beneficial.                \
      \nIf something does not work as expected or is not clearly explained, the evaluation stops here.                                                                     \
      ",
      submissionType: "button",
    },
    {
      header: "SUDO",
      subHeader:
        "Reminder: as soon as you need help to verify a point, the evaluated person must be able to assist you.",
      content:
        "- Verify that the 'sudo' program is indeed installed on the virtual machine.                                                                                                                                                                                                                                                                                                                                    \
      \n- The evaluated person must now show how to assign your new user to the 'sudo' group.                                                                                                                                                                                                                                                                                                                           \
      \n- The subject imposes strict rules for sudo. The evaluated person must first explain the purpose and operation of sudo with examples of their choice. Then, they must demonstrate the implementation of the rules imposed by the subject.                                                                                                                                                                       \
      \n- Verify that the '/var/log/sudo/' directory exists and contains at least one file. Check the contents of the files in this directory; you should see a history of commands used with sudo. Finally, attempt to run a command via sudo. Check if the file(s) in the '/var/log/sudo/' directory have been updated. If something does not work as expected or is not clearly explained, the evaluation stops here.\
      ",
      submissionType: "button",
    },
    {
      header: "UFW / Firewalld",
      subHeader:
        "Reminder: as soon as you need help to verify a point, the evaluated person must be able to assist you.",
      content:
        "- Verify that the 'UFW' (or 'Firewalld' for rocky) program is indeed installed on the virtual machine.                                                                \
      \n- Verify that it is functioning correctly.                                                                                                                            \
      \n- The evaluated person must give you a basic explanation of what UFW (or 'Firewalld') is and why it's important to use it.                                            \
      \n- List the active rules in UFW (or 'Firewalld'). There should be a rule for port 4242.                                                                                \
      \n- Add a new rule to open port 8080. Verify that it has been added by listing the active rules.                                                                        \
      \n- Finally, with the help of the evaluated person, delete this new rule. If something does not work as expected or is not clearly explained, the evaluation stops here.\
      ",
      submissionType: "button",
    },
    {
      header: "SSH",
      subHeader:
        "Reminder: as soon as you need help to verify a point, the evaluated person must be able to assist you.",
      content:
        "- Verify that the SSH service is indeed installed on the virtual machine.                                                                                                                                                                                                                                                                                                  \
      \n- Verify that it is functioning correctly.                                                                                                                                                                                                                                                                                                                                 \
      \n- The evaluated person must give you a basic explanation of what SSH is and why it's important to use it.                                                                                                                                                                                                                                                                  \
      \n- Verify that the SSH service uses only port 4242.                                                                                                                                                                                                                                                                                                                         \
      \n- The evaluated person must help you use SSH to connect with the new user created. For this, you can use a key or a simple password, depending on the evaluated person. Of course, you must ensure that SSH cannot be used with the 'root' user as indicated in the subject. If something does not work as expected or is not clearly explained, the evaluation stops here.\
      ",
      submissionType: "button",
    },
    {
      header: "Script Monitoring",
      subHeader:
        "Reminder: as soon as you need help to verify a point, the evaluated person must be able to assist you.",
      content:
        "The evaluated person must simply explain:                                                                                                                                                                                                                                                                                                  \
      \n- The operation of their script by displaying its code                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 \
      \n- What 'cron' is                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       \
      \n- How they have set up their script to execute every 10 minutes from server launch. Once the proper functioning of the script is verified, the evaluated person must make sure that this script executes every minute. You can launch whatever you wish to ensure that the script runs correctly with dynamic values. Finally, the evaluated person must ensure that the script no longer runs at server launch, without modifying the script itself. To verify this point, the server will need to be restarted one last time. At startup, it must be verified that the script still exists in the same place, that its permissions have remained unchanged, and that it has not been modified. If any of the above points are not correct, the evaluation stops here.\
      ",
      submissionType: "button",
    },
  ],
  bonus: [
    {
      header: "Bonus",
      subHeader:
        "Verify with the help of the subject and the evaluated person the available bonuses for this project:",
      content:
        "- The implementation of partitions will be worth 2 points                                                                                                                                                                                                                                                                           \
      \n- The setup of WordPress, with only the services listed in the subject, will be worth 2 points                                                                                                                                                                                                                                      \
      \n- The free-choice service will be worth 1 point. Verify and test the proper functioning and implementation of each additional service. For the free-choice bonus service, the evaluated person must provide a simple explanation of the service and explain the reasons for their choice. Be aware: NGINX and Apache2 are forbidden.\
      ",
      submissionType: "slider",
    },
  ],
};
