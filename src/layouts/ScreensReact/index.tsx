import { useState, useEffect, Suspense } from "react";
import Download from "./Download";
import React from "react";

export default function IndexHome() {
  const [Path, setPath] = useState(
    window != undefined ? window.location.pathname : "",
  );
  const [Url, setUrl] = useState<string>("");
  const [hide, setHide] = useState(false);
  const [downloadKey, setDownloadKey] = useState(0);

  useEffect(() => {
    let query = new URLSearchParams(window.location.search);
    let url = query.get("url");
    setUrl(url || "");

    // Make sure to setPath as well if needed
    setPath(window.location.pathname);
  }, []);

  // useEffect(() => {
  // }, [hide, Url]);

  function CheckPath(url: string) {
    return url.includes("profile")
      ? "profile"
      : url.includes("post")
        ? "post"
        : url.includes("reels")
          ? "reels"
          : url.includes("stories")
            ? "stories"
            : url.includes("audio")
              ? "audio"
              : url.includes("photo")
                ? "photo"
                : url.includes("fb")
                  ? "fb"
                  : url.includes("videos")
                    ? "videos"
                    : "reels";
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (error) {
      console.error("Failed to read clipboard:", error);
    }
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    //check if previous url is same as current url
    if (Url == window.location.href) {
      setHide(false);
      setHide(true);
      return;
    } else {
      setDownloadKey((prevKey) => prevKey + 1);

      setHide(true);
    }
  };

  return (
    <>
      <Suspense fallback={<div>Please Wait for a While...</div>}>
        <div className="w-full max-w-3xl mx-auto">
          <div className="w-full mx-auto">
            <div className="flex items-center py-1">
              <label className="sr-only">Search</label>
              <form onSubmit={handleSubmit} className="flex w-full">
                
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="instagram-reel"><path fill="#000" fill-rule="evenodd" d="M1.5 6.5a5 5 0 0 1 5-5h11a5 5 0 0 1 5 5v11a5 5 0 0 1-5 5h-11a5 5 0 0 1-5-5v-11Zm5-4a4 4 0 0 0-4 4v11a4 4 0 0 0 4 4h11a4 4 0 0 0 4-4v-11a4 4 0 0 0-4-4h-11Z" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M9.27 10.556a.5.5 0 0 1 .517.034l5 3.5a.5.5 0 0 1 0 .82l-5 3.5A.5.5 0 0 1 9 18v-7a.5.5 0 0 1 .27-.444zM10 11.96v5.08l3.628-2.54L10 11.96zM1.5 8a.5.5 0 0 1 .5-.5h20a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M7.842 1.526a.5.5 0 0 1 .632.316l2 6a.5.5 0 0 1-.948.316l-2-6a.5.5 0 0 1 .316-.632zm6 0a.5.5 0 0 1 .633.316l2 6a.5.5 0 0 1-.95.316l-2-6a.5.5 0 0 1 .317-.632z" clip-rule="evenodd"></path></svg>
                  </div>
                   <input value={Url} onChange={(e) => setUrl(e.target.value)} aria-label="search" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 shadow-inner dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`Enter ${CheckPath(Path) == "profile" ? "Username or Profile URL" : CheckPath(Path) + " URL or Paste link here"}`} required spellCheck="false" data-ms-editor="true"/>
                </div>

                
                <button type="submit" className="bg-current bg-pink-500  items-center py-2.5 px-3 text-sm font-medium text-white rounded-lg border focus:ring-4 focus:outline-none lg:block md:bloc hidden">DOWNLOAD</button>
              </form>
            </div>
            <button type="submit" onClick={handleSubmit} className="bg-current bg-pink-500  w-full items-center py-2.5 px-3 text-sm font-medium text-white rounded-lg border focus:ring-4 focus:outline-none lg:hidden md:hidden block">DOWNLOAD</button>
          </div>
        </div>
        {hide && (
          <Download key={downloadKey} url={Url} type={CheckPath(Path)}/>
        )}
      </Suspense>
    </>
  );
}
