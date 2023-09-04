import { useState } from "react";
import "./styles.css";
import { ColorInput } from "./ColorInput";
import { Result } from "./Result";

export default function App() {
  const [color, setColor] = useState("");

  return (
    <div className="App">
      <h1>好きな言葉でいいよ！</h1>
      <h2>これから補色調べっ子ちゃんを作るよ！</h2>
      <h2>選択中の色： {color}</h2>
      {/* 補色情報を表示する */}
      <ColorInput setColor={setColor} />
      <Result color={color} />
    </div>
  );
}
