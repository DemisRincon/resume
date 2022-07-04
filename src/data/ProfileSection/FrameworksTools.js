import { FaNode, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiFramer,
  SiStyledcomponents,
} from "react-icons/si";
import ProfileSection from "../../components/ProfileSection";

export const FrameworksTools = {
  component: ProfileSection,
  data: {
    name: "FRAMEWORKS & TOOLS",
    list: [
      { title: "React.js", icon: FaReact },
      { title: "Next.js", icon: SiNextdotjs },
      { title: "Node.js", icon: FaNode },
      { title: "Express.js", icon: SiExpress },
      { title: "MySQL", icon: SiMysql },
      { title: "Mongo", icon: SiMongodb },
      { title: "React Native", icon: FaReact },
      { title: "Framer Motion", icon: SiFramer },
      { title: "styled-components", icon: SiStyledcomponents },
    ],
  },
};
