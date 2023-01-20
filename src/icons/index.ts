import user from "./user.svg";
import calendar from "./calendar.svg";
import bell from "./bell.svg";
import search from "./search.svg";
import home from "./home.svg";

export const icons = {
  user,
  calendar,
  bell,
  search,
  home,
};

export type TIcon = keyof typeof icons;
