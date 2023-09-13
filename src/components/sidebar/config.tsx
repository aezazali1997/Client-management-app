// component
import SvgColor from "../svg-color";

// ----------------------------------------------------------------------

const icon = (name: any) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: icon("ic_analytics"),
  },
  {
    title: "Manage Clients",
    path: "/dashboard/user",
    icon: icon("ic_user"),
  },
];

export default navConfig;
