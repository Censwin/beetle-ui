import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import Upload, { IUploadprops } from "./upload";

jest.mock("../Icon/icon", () => {
  return ({ icon }) => {
    return <span>{icon}</span>;
  };
});

let wrapper: RenderResult;
let fileInput: HTMLInputElement;
let uploadArea: HTMLElement;

const testProps: IUploadprops = {
  action: "mock.com",
  onSuccess: jest.fn(),
  onChange: jest.fn(),
  onError: jest.fn(),
  onProgress: jest.fn(),
  onRemove: jest.fn(),
};

describe("test upload component", () => {
  beforeEach(() => {
    wrapper = render(<Upload {...testProps} />);
    fileInput = wrapper.getByTestId("beetle-file-input");
    uploadArea = wrapper.queryByText("点击上传");
  });
  it("render component", async () => {
    expect(uploadArea).toBeInTheDocument();
    expect(fileInput).not.toBeVisible();
  });
});
