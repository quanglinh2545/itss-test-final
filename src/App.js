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
      <div>削除する名前を入力してください。</div>
      <div>
        {" "}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleClick}>確定</button>
      </div>
      <div>削除する名前 : {input}</div>
      <div>新しい一覧 : {JSON.stringify(names)}</div>
    </div>
  );
}

export default App;
