/*
 * @Author: Censwin
 * @Date: 2021-10-08 23:19:50
 * @LastEditTime: 2021-10-11 00:11:52
 * @Description:
 * @FilePath: /whale-design/src/App.tsx
 */
import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button size={ButtonSize.Large} btnType={ButtonType.Default}>
        Default
      </Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Warring}>
        Warring
      </Button>
      <Button
        size={ButtonSize.Large}
        btnType={ButtonType.Danger}
        disabled={true}
      >
        Danger
      </Button>
      <Button
        size={ButtonSize.Large}
        btnType={ButtonType.Link}
        disabled={false}
      >
        Link
      </Button>
      {/* <Button btnType={ButtonType.Link}>Link</Button> */}
    </div>
  );
}

export default App;
