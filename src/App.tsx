import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StartupScreen from "./components/StartupScreen";


function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedSource, setSelectedSource] = useState<string | null>(null);



    let mainSite;
    if (!selectedSource || selectedSource == '') {
        mainSite = <StartupScreen onSelect={setSelectedSource} />;
    } else {
        mainSite = <>Gallery        W.I.P.</>; //change for gallery later
    }

    return (
        <>
            <Header onMenuClick={() => setSidebarOpen(open => !open)} />
            {mainSite}
        </>
    );
}

export default App;
