import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isload, setIsload] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsload(true);
    axios
      .get(url)
      .then((resp) => {
        setData(resp.data);
        setIsload(false);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [url]);

  return { data, isload, err };
}
