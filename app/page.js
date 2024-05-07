import App from "./components/app";
import Consequences from "./components/consequences";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col sm:flex-row sm:p-8 p-0">
      <App/>
      <Consequences/>
    </div>
  );
}
