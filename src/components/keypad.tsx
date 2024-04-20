import { FC } from "react";

interface LettersObj {
  [key: string]: string;
}
interface Props {
  usedKeys: LettersObj;
}

export const Keypad: FC<Props> = ({ usedKeys }) => {
  const handleClick = (e: React.MouseEvent) => {
    const key = e.target as HTMLElement;
    let keyName = key.textContent;
    if (keyName == "إدخال") {
      keyName = "Enter";
    } else if (keyName == "مسح") {
      keyName = "Backspace";
    }
    console.log(e.target, keyName);

    window.dispatchEvent(
      new KeyboardEvent("keyup", { key: keyName ? keyName : "" }),
    );
  };

  const letters = [
    "ذ",
    "ض",
    "ص",
    "ث",
    "ق",
    "ف",
    "غ",
    "هـ",
    "خ",
    "ح",
    "ج",
    "د",
    "ش",
    "س",
    "ي",
    "ب",
    "ل",
    "ا",
    "أ",
    "إ",
    "ت",
    "ن",
    "م",
    "ك",
    "ط",
    "ئ",
    "ء",
    "مسح",
    "ؤ",
    "ر",
    "ى",
    "ة",
    "و",
    "ز",
    "ظ",
    "إدخال",
  ];

  console.log("keypad ===> usedKeys", usedKeys);
  return (
    <div className="keypad">
      {letters.map((l) => {
        const color = usedKeys[l];
        return (
          <div
            key={l}
            className={ l === "إدخال" ? "enter border border-primary" : l === "مسح" ? "backspace border border-primary" : color + " border border-primary"   }
            onClick={handleClick}
          >
            {l}
          </div>
        );
      })}
    </div>
  );
};
