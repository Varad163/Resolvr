import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function App() {
  return (
    <div className="w-[350px] p-4">
      <Card>
        <CardContent className="space-y-4 p-4">
          <h1 className="text-lg font-bold">Smart Error Explainer 🚀</h1>

          <p className="text-sm text-gray-500">
            Detect and explain errors instantly.
          </p>

          <div className="bg-gray-100 p-2 rounded text-xs">
            No error detected yet...
          </div>

          <Button className="w-full">
            Scan Page
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;