import { pageNavButtonLabels, routes } from "@/utils/Constants";
import { useLocation, useNavigate } from "react-router-dom";

export const usePageNavButtons = () => {
  const route: string = useLocation().pathname;
  const navigate = useNavigate();

  const onClickPageNavButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonClicked = event.currentTarget.getAttribute("aria-label");
    switch (buttonClicked) {
      case pageNavButtonLabels.home:
        navigate(routes.home);
        break;

      case pageNavButtonLabels.newsArchive:
        navigate(routes.newsArchive);
        break;

      default:
        navigate(routes.home);
        break;
    }
  };
  return {
    route,
    onClickPageNavButton,
  };
};
