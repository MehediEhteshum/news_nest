import { pageTitles, routes } from "@/utils/Constants";
import { useLocation, useNavigate } from "react-router-dom";

export const useRootPageViewModel = () => {
  const route: string = useLocation().pathname;
  const navigate = useNavigate();
  let pageTitle: string = "";

  switch (route) {
    case routes.home:
      pageTitle = pageTitles.homePageTitle;
      break;
    case routes.newsArchive:
      pageTitle = pageTitles.archivePageTitle;
      break;
    default:
      break;
  }

  return { pageTitle, navigate };
};
