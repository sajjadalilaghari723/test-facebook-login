"use client";

import { useEffect } from "react";


export default function Home() {

  const provider = 'facebook';

  useEffect(() => {
    document.cookie = `provider=${provider}; path=/`;

    fetch(`http://localhost/aiproresume/public/api/v1/social-signin/facebook`, {
        method: 'POST',
      headers: {
        'Accept': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
            console.log(data.status);
        
        if (data.status == true && data.statusCode == 200) {
            console.log(data);
          window.location.href = data.response.data.url;
        }
      })
      .catch(console.error);
  }, []);

  return <div>Redirecting to {provider}...</div>;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
     
      </main>
   
    </div>
  );
}