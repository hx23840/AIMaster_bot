import { authMiddleware } from "@clerk/nextjs";
import {redirectToSignIn} from '@clerk/nextjs';

export default authMiddleware({
        afterAuth(auth, req, evt) {
            // handle users who aren't authenticated
            if (!auth.userId && !auth.isPublicRoute) {
                return redirectToSignIn({returnBackUrl: "https://aimaster.chat2any.com/"});
            }
        }
    }
);


export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
