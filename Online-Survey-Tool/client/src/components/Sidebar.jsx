import Box from "./Box";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import ProfileSpace from "./ProfileSpace";
import LanguageTab from "./LanguageTab";
import home from "../public/assets/icons/Survey/home.svg";
import newSurvey from "../public/assets/icons/Survey/newSurvey.svg";
import categories from "../public/assets/icons/Survey/categories.svg";
import ranking from "../public/assets/icons/Survey/ranking.svg";
import progress from "../public/assets/icons/Survey/progress.svg";
import UserSurveyTab from "./UserSurveyTab";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const routes = useMemo(
    () => [
      {
        icon: home,
        label: "Home",
        href: "/home",
      },
      {
        icon: newSurvey,
        label: "Create new Survey",
        href: "/new",
      },
      {
        icon: categories,
        label: "Categories",
        href: "/categories",
      },
      {
        icon: ranking,
        label: "Ranking",
        href: "/ranking",
      },
      {
        icon: progress,
        label: "Progress",
        href: "/progress",
      },
    ],
    []
  );
  return (
    <div className="hidden md:flex flex-col gap-y-2 bg-[#ED6734] min-h-full h-screen p-2 overflow-hidden">
      <ProfileSpace />
      <LanguageTab />
      <Box>
        <div className="flex flex-col gap-y-4 ">
          {routes.map((item) => (
            <Link key={item.label} to={item.href}>
              <SidebarItem key={item.label} {...item} />
            </Link>
          ))}
        </div>
      </Box>
      <div className="h-0.5 border-[#FF956C] border-2 border-solid w-[450px] mx-3"></div>
      <UserSurveyTab />
    </div>
  );
};

export default Sidebar;
