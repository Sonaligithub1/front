import "@/styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
