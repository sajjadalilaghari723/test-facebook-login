import { Suspense } from "react";
import SocialCallbackComponent from "./SocialCallbackComponent";

export default function CallbackPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SocialCallbackComponent />
    </Suspense>
  );
}
