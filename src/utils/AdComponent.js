import { useEffect } from "react";

const AdComponent = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: "block", textAlign: "center", margin: "20px 0" }}
      data-ad-client="ca-pub-5219137908939805"
      data-ad-slot="6848210847" // ✅ Your actual Ad Unit ID
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdComponent;
