import React, { useState } from "react";
import useNamesControl from "./useNamesControl";

function App() {

  const [input, setInput] = useState("");
  const [names, deleteName] = useNamesControl(["Huyen", "Hoa", "Hung", "Long"]);

  const handleClick = () => {
    deleteName(input);
  };

  return (
    <div style={{ margin: 20 }}>
      <div>学生一覧: [Huyen,Hoa,Hung,Long]</div>
      <div>
        Nhap ten o day：{" "}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleClick}>Xoa</button>
      </div>
      <div>Ten nguoi can xoa: {input}</div>
      <div>{JSON.stringify(names)}</div>
    </div>
  );
}

export default App;
