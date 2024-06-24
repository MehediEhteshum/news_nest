import { BookMarked, House } from "lucide-react";
import { Button } from "../shadcn/ui/button";
import { pageNavButtonLabels, routes } from "@/utils/Constants";
import { useLocation, useNavigate } from "react-router-dom";

const PageNavButtons: React.FC = () => {
  const route = useLocation().pathname;
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

  return (
    <>
      <Button
        variant={route === routes.home ? "outline" : "ghost"}
        size="icon"
        onClick={onClickPageNavButton}
        aria-label={pageNavButtonLabels.home}
      >
        <House />
      </Button>
      <Button
        variant={route === routes.newsArchive ? "outline" : "ghost"}
        size="icon"
        onClick={onClickPageNavButton}
        aria-label={pageNavButtonLabels.newsArchive}
      >
        <BookMarked />
      </Button>
    </>
  );
};

export default PageNavButtons;
