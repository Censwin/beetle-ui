/*
 * @Author: Censwin
 * @Date: 2021-10-08 23:19:50
 * @LastEditTime: 2021-10-24 22:32:52
 * @Description:
 * @FilePath: /beetle-design/src/App.tsx
 */
import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Upload from "./components/Upload/upload";
library.add(fas);

function App() {
  const [title, setTitle] = useState("");

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files
  //   if (files) {
  //     const uploadFile = files[0]
  //     const formData = new FormData()
  //     formData.append(uploadFile.name, uploadFile)
  //     axios
  //       .post('http://jsonplaceholder.typicode.com/posts', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res)
  //       })
  //   }
  // }
  return (
    <div style={{ padding: "20px" }}>
      {/* <input type="file" onChange={handleFileChange} /> */}
      <Upload action="http://jsonplaceholder.typicode.com/posts" />
    </div>
  );
}

export default App;
