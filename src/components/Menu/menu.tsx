import React, { createContext, useState, useMemo } from "react";
import classNames from "classnames";
import { IMenuItemProps } from "./menuItem";
type SelectCallback = (index: string) => void;
interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode: MenuModes;
  defaultOpen?: string[];
}
type MenuModes = "vertical" | "horizontal";
export interface IMenuProps {
  defaultSelectedIndex?: string;
  className?: string;
  mode: MenuModes;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  defaultOpen?: string[];
}

export const MenuContext = createContext<IMenuContext>({
  index: "0",
  mode: "horizontal",
});

const Menu: React.FC<IMenuProps> = (props) => {
  const {
    defaultSelectedIndex,
    className: _className,
    mode,
    style: _style,
    children,
    defaultOpen,
  } = props;
  const { onSelect } = props;
  const [currentActive, setActive] = useState(defaultSelectedIndex);
  const classes = classNames("beetle-menu", _className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) onSelect(index);
  };
  const currentItemObj: IMenuContext = useMemo(
    () => ({
      index: currentActive ? currentActive : "0",
      onSelect: handleClick,
      mode,
      defaultOpen,
    }),
    [currentActive]
  );
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<IMenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error("Warning: The element is not MenuItem");
      }
    });
  };
  return (
    <ul className={classes} style={_style} data-testid="menu-test">
      <MenuContext.Provider value={currentItemObj}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  defaultSelectedIndex: "0",
  mode: "horizontal",
  defaultOpen: [],
};

export default Menu;
