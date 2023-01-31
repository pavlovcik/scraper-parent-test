import { JobParams, JobResult } from ".";
import { delegateRequestsToProxies } from "./delegate-requests-to-proxies";

export function makeJobPerURL({ url, browser, proxies, timeout }: JobParams): () => Promise<JobResult> {
  let name = url.split("/")[url.split("/").length - 2] as string | undefined;
  name = name?.match(/[a-z]+/gim)?.shift();
  if (!name) {
    name = "default";
  }

  const namedJob = {
    [name]: function () {
      return delegateRequestsToProxies({ browser, url, proxies, timeout });
    },
  }[name];

  return namedJob;
}
