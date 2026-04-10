import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

// Add this line if you don't have @types/chrome installed
declare const chrome: any;

function App() {
  const [error, setError] = useState<string>("No error detected yet...");

  const scanPage = async () => {
    try {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });

      chrome.scripting.executeScript(
  {
    target: { tabId: tab.id! },
    func: () => document.body.innerText,
  },
  (results: any) => {
    const pageText = results?.[0]?.result || "";

    if (pageText.includes("TypeError")) {
      setError("TypeError detected!");
    } else if (pageText.includes("ReferenceError")) {
      setError("ReferenceError detected!");
    } else {
      setError("No common errors found.");
    }
  }
);
    } catch (err) {
      setError("Failed to scan page");
    }
  };

  return (
    <div className="w-[350px] p-4">
      <Card>
        <CardContent className="space-y-4 p-4">
          <h1 className="text-lg font-bold">Smart Error Explainer 🚀</h1>

          <p className="text-sm text-gray-500">
            Detect and explain errors instantly.
          </p>

          <div className="bg-gray-100 p-2 rounded text-xs">
            {error}
          </div>

          <Button className="w-full" onClick={scanPage}>
            Scan Page
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;