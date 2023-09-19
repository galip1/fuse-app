import React, { useEffect, useState } from "react";
import CustomRoutes from "./router/custom-routes";
import LoadingPage from "./pages/loading-page";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return <div>{loading ? <LoadingPage /> : <CustomRoutes />}</div>;
};

export default App;
