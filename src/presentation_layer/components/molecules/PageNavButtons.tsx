import { BookMarked, House } from "lucide-react";
import { Button } from "../shadcn/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { pageNavButtonLabels, routes } from "@/utils/Constants";
import { setRoute } from "@/presentation_layer/store/slices/RouteTrackerSlice";
import { RootState } from "@/presentation_layer/store/Store";

const PageNavButtons: React.FC = () => {
  const route = useSelector((state: RootState) => state.routeTracker.route);
  const dispatch = useDispatch();
  const onClickPageNavButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonClicked = event.currentTarget.getAttribute("aria-label");
    switch (buttonClicked) {
      case pageNavButtonLabels.home:
        dispatch(setRoute(routes.home));
        break;

      case pageNavButtonLabels.news_archive:
        dispatch(setRoute(routes.news_archive));
        break;

      default:
        dispatch(setRoute(routes.home));
        break;
    }
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={onClickPageNavButton}
        aria-label={pageNavButtonLabels.home}
      >
        <House />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={onClickPageNavButton}
        aria-label={pageNavButtonLabels.news_archive}
      >
        <BookMarked />
      </Button>
    </>
  );
};

export default PageNavButtons;
