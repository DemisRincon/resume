import { GrMail } from "react-icons/gr";
import { AiFillPhone } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ProfileSection from "../../components/ProfileSection";

export const ContactData = {
  name: "Contact",
  component: ProfileSection,
  data: {
    list: [
      {
        title: "darmfma@gmail.com",
        icon: GrMail,
        href: "mailto:darmfma@gmail.com",
      },
      {
        title: "3121091992",
        icon: AiFillPhone,
        href: false,
      },
      {
        title: "linkedin.com/in/demisrincon/",
        icon: FaLinkedin,
        href: "linkedin.com/in/demisrincon/",
      },
      {
        title: "github.com/DemisRincon",
        icon: FaGithub,
        href: "github.com/DemisRincon",
      },
    ],
  },
};
