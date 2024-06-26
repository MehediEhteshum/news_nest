import { BookMarked, House } from "lucide-react";
import { pageNavButtonLabels, routes } from "@/utils/Constants";
import { Button } from "../../shadcn/ui/button";
import { usePageNavButtons } from "./PageNavButtons.hooks";

const PageNavButtons: React.FC = () => {
  const { route, onClickPageNavButton } = usePageNavButtons();
  const zoomScale = "hover:scale-110";

  return (
    <>
      <Button
        variant={route === routes.home ? "outline" : "ghost"}
        size="icon"
        onClick={onClickPageNavButton}
        aria-label={pageNavButtonLabels.home}
        className={zoomScale}
      >
        <House />
      </Button>
      <Button
        variant={route === routes.newsArchive ? "outline" : "ghost"}
        size="icon"
        onClick={onClickPageNavButton}
        aria-label={pageNavButtonLabels.newsArchive}
        className={zoomScale}
      >
        <BookMarked />
      </Button>
    </>
  );
};

export default PageNavButtons;
