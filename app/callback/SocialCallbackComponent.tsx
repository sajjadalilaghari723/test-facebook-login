"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

export default function SocialCallbackComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const provider = getCookie('provider') || searchParams.get('provider') || 'facebook';
    const query = searchParams.toString();

    fetch(`http://localhost/aiproresume/public/api/v1/social-signin/${provider}/callback?${query}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        sessionStorage.setItem('auth_token', data.access_token);
        document.cookie = 'provider=; Max-Age=0; path=/';
        router.push('/');
      })
      .catch(console.error);
  }, [searchParams, router]);

  return (
    <div>
      <p>Redirecting after social login...</p>
    </div>
  );
}
