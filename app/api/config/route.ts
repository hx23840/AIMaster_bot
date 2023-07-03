import { NextResponse } from "next/server";

import { getServerSideConfig } from "../../config/server";
import {getInfo} from "@/app/api/common";

const serverConfig = getServerSideConfig();

// Danger! Don not write any secret value here!
// 警告！不要在这里写入任何敏感信息！
const DANGER_CONFIG = {
  needCode: serverConfig.needCode,
  hideUserApiKey: serverConfig.hideUserApiKey,
  enableGPT4: serverConfig.enableGPT4,
  hideBalanceQuery: serverConfig.hideBalanceQuery,
};

declare global {
  type DangerConfig = typeof DANGER_CONFIG;
}

async function handle() {
  const {user} = getInfo()
  if (!user) {
    return new Response(
        JSON.stringify({error: 'Missing user information'}),
        {status: 400}  // HTTP status code for "Bad Request"
    );
  }

  return NextResponse.json(DANGER_CONFIG);
}

export const GET = handle;
export const POST = handle;

// export const runtime = "edge";
