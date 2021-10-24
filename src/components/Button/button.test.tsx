/*
 * @Author: Censwin
 * @Date: 2021-10-11 23:04:31
 * @LastEditTime: 2021-10-24 23:10:51
 * @Description:
 * @FilePath: /whale-design/src/components/Button/button.test.tsx
 */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";
const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: "primary",
  size: "lg",
  className: "userDefined",
};

const disbaleBtnProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe("test button component", () => {
  it("should render a default button", () => {
    const wrapper = render(<Button {...defaultProps}>Default</Button>);
    const element = wrapper.getByText("Default").parentElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the button of other type", () => {
    const wrapper = render(<Button {...testProps}>Default</Button>);
    const element = wrapper.getByText("Default").parentElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-primary btn-lg userDefined");
  });
  it("should render an Anchor when type equal link", () => {
    const wrapper = render(
      <Button btnType="link" href="http://www.baidu.com">
        Link
      </Button>
    );
    const element = wrapper.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
  });
  it("should render the disabled button when disable attribute equal true", () => {
    const wrapper = render(<Button {...disbaleBtnProps}>Disabled</Button>);
    const element = wrapper.getByText("Disabled")
      .parentElement as HTMLButtonElement;
    expect(element.tagName).toBe("BUTTON");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("disabled");
    expect(element).toBeDisabled();
    fireEvent.click(element);
    expect(disbaleBtnProps.onClick).not.toHaveBeenCalled();
  });
});
