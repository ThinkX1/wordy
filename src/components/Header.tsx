import { FC, useState } from "react";
import { HelpModal } from "./HelpModal";


export const Header: FC = () => {

  const [isHelpModalOpen, setHelpModalOpen] = useState<boolean>(false);
  const handleOpenHelpModal = () => {
    console.log('open help modal');
    setHelpModalOpen(true);
    };
  return (
    <header>
      <h1 className="header"> وُوردي </h1>
      
      <button onClick={handleOpenHelpModal} className="border border-primary helper-button">
      i
      </button>
      <HelpModal isOpen={isHelpModalOpen} onClose={() => console.log("close")} />
      </header>
      )
      }
