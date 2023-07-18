import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getShortUrl } from "../Api/getShortUrl";
import UrlForm from "./Form/UrlForm";
import ShortLinksList from "./ShortLinksList";
import { updateItems } from "../../utils";

const LinkShortener = () => {
  const [url, setUrl] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const localStorageKey = "short_links";

  /* Uses useQuery to fetch server data for generating a short URL.
     Updates storage and state on success. */
  useQuery({
    queryKey: ["url"],
    queryFn: () => getShortUrl(url),
    enabled: isValidUrl,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      if (data && data.result) {
        const newLink = {
          inputUrl: url,
          shortUrl: data.result.short_link2,
        };
        updateItems(localStorageKey, newLink);
        setIsValidUrl(false);
        setUrl("");
        setIsLoading(false);
      }
    },
  });

  /* Validates input URL and sets corresponding state */
  const handleUrlSubmit = (validationResult) => {
    const { inputUrl, isValidated } = validationResult;

    if (!isValidated) {
      setIsValidUrl(false);
      return;
    }

    setUrl(inputUrl);
    setIsValidUrl(true);
    setIsLoading(true);
  };

  return (
    <div>
      <UrlForm onUrlSubmit={handleUrlSubmit} isLoading={isLoading} />
      <ShortLinksList localStorageKey={localStorageKey} />
    </div>
  );
};

export default LinkShortener;
