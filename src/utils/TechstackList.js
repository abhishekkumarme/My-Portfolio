import { BsFiletypeHtml, BsFiletypeCss, BsBootstrap } from "react-icons/bs";
import { FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiWordpress,
  SiExpress,
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiAnaconda,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiJupyter,
} from "react-icons/si";
import { MdBarChart } from "react-icons/md"; // For Power BI
import { FaRProject } from "react-icons/fa"; // For R Studio
import { GiNetworkBars } from "react-icons/gi"; // For Hadoop

export const TechstackList = [
  { _id: 1, name: "HTML", icon: BsFiletypeHtml },
  { _id: 2, name: "CSS", icon: BsFiletypeCss },
  { _id: 3, name: "Bootstrap", icon: BsBootstrap },
  { _id: 4, name: "JavaScript", icon: SiJavascript },
  { _id: 5, name: "React JS", icon: SiReact },
  { _id: 6, name: "Node JS", icon: FaNodeJs },
  { _id: 7, name: "Express JS", icon: SiExpress },
  { _id: 8, name: "MongoDB", icon: SiMongodb },
  { _id: 9, name: "MySQL", icon: SiMysql },
  { _id: 10, name: "Git / GitHub", icon: SiGithub },
  { _id: 11, name: "WordPress", icon: SiWordpress },

  // Languages
  { _id: 12, name: "C++", icon: SiCplusplus },
  { _id: 13, name: "Java", icon: FaJava },
  { _id: 14, name: "Python", icon: FaPython },

  // Data Science & ML
  { _id: 15, name: "TensorFlow", icon: SiTensorflow },
  { _id: 16, name: "PyTorch", icon: SiPytorch },
  { _id: 17, name: "NumPy", icon: SiNumpy },
  { _id: 18, name: "Pandas", icon: SiPandas },
  { _id: 19, name: "Scikit-Learn", icon: SiScikitlearn },
  { _id: 20, name: "Jupyter", icon: SiJupyter },
  { _id: 21, name: "Anaconda", icon: SiAnaconda },

  // Additional Data Tools
  { _id: 22, name: "Power BI", icon: MdBarChart },
  { _id: 23, name: "R Studio", icon: FaRProject },
  { _id: 24, name: "Hadoop", icon: GiNetworkBars },
];
