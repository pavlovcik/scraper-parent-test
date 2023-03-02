import fs, { createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import unzip from "unzip-crx";
import { log } from "./scraper-kernel/src/logging";

export async function metaMaskSetup(cliArgs) {
  const METAMASK = "metamask";
  const METAMASK_ZIP = "metamask.zip";

  const dirPath = cliArgs.metamask || path.join(__dirname, METAMASK); // no zip
  if (!fs.existsSync(dirPath)) {
    log.warn(`${dirPath} not found! Downloading...`);
    const zipPath = cliArgs.metamask?.concat(`.zip`) || path.join(__dirname, METAMASK_ZIP); // zip
    await downloadNewCopy(zipPath);
  } else {
    log.ok(`${dirPath} found!`);
  }
  return dirPath;
}

async function downloadNewCopy(zipPath: string) {
  const downloadUrl = await getMetaMaskLatestDownloadUrl();
  const download = await fetch(downloadUrl);
  if (!download.ok) {
    throw new Error(`Unexpected response ${download.statusText}`);
  }
  // @ts-expect-error
  await pipeline(download.body, createWriteStream(zipPath)); // save to disk

  const crxFile = zipPath;
  await unzip(crxFile);
  log.ok("Successfully unzipped your crx file..");
  return zipPath;
}

async function getMetaMaskLatestDownloadUrl() {
  const response = await fetch("https://api.github.com/repos/MetaMask/metamask-extension/releases/latest");
  const json = (await response.json()) as MetaMaskResponse;
  console.log(json);
  const chromeAsset = json.assets.find((a) => a.name.includes("metamask-chrome"));
  return chromeAsset.browser_download_url;
}

interface MetaMaskResponse {
  url: "https://api.github.com/repos/MetaMask/metamask-extension/releases/91917726";
  assets_url: "https://api.github.com/repos/MetaMask/metamask-extension/releases/91917726/assets";
  upload_url: "https://uploads.github.com/repos/MetaMask/metamask-extension/releases/91917726/assets{?name,label}";
  html_url: "https://github.com/MetaMask/metamask-extension/releases/tag/v10.25.0";
  id: 91917726;
  author: {
    login: "metamaskbot";
    id: 37885440;
    node_id: "MDQ6VXNlcjM3ODg1NDQw";
    avatar_url: "https://avatars.githubusercontent.com/u/37885440?v=4";
    gravatar_id: "";
    url: "https://api.github.com/users/metamaskbot";
    html_url: "https://github.com/metamaskbot";
    followers_url: "https://api.github.com/users/metamaskbot/followers";
    following_url: "https://api.github.com/users/metamaskbot/following{/other_user}";
    gists_url: "https://api.github.com/users/metamaskbot/gists{/gist_id}";
    starred_url: "https://api.github.com/users/metamaskbot/starred{/owner}{/repo}";
    subscriptions_url: "https://api.github.com/users/metamaskbot/subscriptions";
    organizations_url: "https://api.github.com/users/metamaskbot/orgs";
    repos_url: "https://api.github.com/users/metamaskbot/repos";
    events_url: "https://api.github.com/users/metamaskbot/events{/privacy}";
    received_events_url: "https://api.github.com/users/metamaskbot/received_events";
    type: "User";
    site_admin: false;
  };
  node_id: "RE_kwDOAoEEns4Feo2e";
  tag_name: "v10.25.0";
  target_commitish: "d52ef735146a58016f870322adfb901ee1d95f6c";
  name: "Version 10.25.0";
  draft: false;
  prerelease: false;
  created_at: "2023-02-08T20:31:44Z";
  published_at: "2023-02-09T16:50:16Z";
  assets: [
    {
      url: "https://api.github.com/repos/MetaMask/metamask-extension/releases/assets/94968646";
      id: 94968646;
      node_id: "RA_kwDOAoEEns4FqRtG";
      name: "metamask-chrome-10.25.0.zip";
      label: "";
      uploader: {
        login: "metamaskbot";
        id: 37885440;
        node_id: "MDQ6VXNlcjM3ODg1NDQw";
        avatar_url: "https://avatars.githubusercontent.com/u/37885440?v=4";
        gravatar_id: "";
        url: "https://api.github.com/users/metamaskbot";
        html_url: "https://github.com/metamaskbot";
        followers_url: "https://api.github.com/users/metamaskbot/followers";
        following_url: "https://api.github.com/users/metamaskbot/following{/other_user}";
        gists_url: "https://api.github.com/users/metamaskbot/gists{/gist_id}";
        starred_url: "https://api.github.com/users/metamaskbot/starred{/owner}{/repo}";
        subscriptions_url: "https://api.github.com/users/metamaskbot/subscriptions";
        organizations_url: "https://api.github.com/users/metamaskbot/orgs";
        repos_url: "https://api.github.com/users/metamaskbot/repos";
        events_url: "https://api.github.com/users/metamaskbot/events{/privacy}";
        received_events_url: "https://api.github.com/users/metamaskbot/received_events";
        type: "User";
        site_admin: false;
      };
      content_type: "application/octet-stream";
      state: "uploaded";
      size: 18261591;
      download_count: 3804;
      created_at: "2023-02-09T16:50:16Z";
      updated_at: "2023-02-09T16:50:17Z";
      browser_download_url: "https://github.com/MetaMask/metamask-extension/releases/download/v10.25.0/metamask-chrome-10.25.0.zip";
    },
    {
      url: "https://api.github.com/repos/MetaMask/metamask-extension/releases/assets/94968648";
      id: 94968648;
      node_id: "RA_kwDOAoEEns4FqRtI";
      name: "metamask-firefox-10.25.0.zip";
      label: "";
      uploader: {
        login: "metamaskbot";
        id: 37885440;
        node_id: "MDQ6VXNlcjM3ODg1NDQw";
        avatar_url: "https://avatars.githubusercontent.com/u/37885440?v=4";
        gravatar_id: "";
        url: "https://api.github.com/users/metamaskbot";
        html_url: "https://github.com/metamaskbot";
        followers_url: "https://api.github.com/users/metamaskbot/followers";
        following_url: "https://api.github.com/users/metamaskbot/following{/other_user}";
        gists_url: "https://api.github.com/users/metamaskbot/gists{/gist_id}";
        starred_url: "https://api.github.com/users/metamaskbot/starred{/owner}{/repo}";
        subscriptions_url: "https://api.github.com/users/metamaskbot/subscriptions";
        organizations_url: "https://api.github.com/users/metamaskbot/orgs";
        repos_url: "https://api.github.com/users/metamaskbot/repos";
        events_url: "https://api.github.com/users/metamaskbot/events{/privacy}";
        received_events_url: "https://api.github.com/users/metamaskbot/received_events";
        type: "User";
        site_admin: false;
      };
      content_type: "application/octet-stream";
      state: "uploaded";
      size: 18257258;
      download_count: 107;
      created_at: "2023-02-09T16:50:18Z";
      updated_at: "2023-02-09T16:50:19Z";
      browser_download_url: "https://github.com/MetaMask/metamask-extension/releases/download/v10.25.0/metamask-firefox-10.25.0.zip";
    },
    {
      url: "https://api.github.com/repos/MetaMask/metamask-extension/releases/assets/94968651";
      id: 94968651;
      node_id: "RA_kwDOAoEEns4FqRtL";
      name: "metamask-flask-chrome-10.25.0-flask.0.zip";
      label: "";
      uploader: {
        login: "metamaskbot";
        id: 37885440;
        node_id: "MDQ6VXNlcjM3ODg1NDQw";
        avatar_url: "https://avatars.githubusercontent.com/u/37885440?v=4";
        gravatar_id: "";
        url: "https://api.github.com/users/metamaskbot";
        html_url: "https://github.com/metamaskbot";
        followers_url: "https://api.github.com/users/metamaskbot/followers";
        following_url: "https://api.github.com/users/metamaskbot/following{/other_user}";
        gists_url: "https://api.github.com/users/metamaskbot/gists{/gist_id}";
        starred_url: "https://api.github.com/users/metamaskbot/starred{/owner}{/repo}";
        subscriptions_url: "https://api.github.com/users/metamaskbot/subscriptions";
        organizations_url: "https://api.github.com/users/metamaskbot/orgs";
        repos_url: "https://api.github.com/users/metamaskbot/repos";
        events_url: "https://api.github.com/users/metamaskbot/events{/privacy}";
        received_events_url: "https://api.github.com/users/metamaskbot/received_events";
        type: "User";
        site_admin: false;
      };
      content_type: "application/octet-stream";
      state: "uploaded";
      size: 19230769;
      download_count: 154;
      created_at: "2023-02-09T16:50:19Z";
      updated_at: "2023-02-09T16:50:20Z";
      browser_download_url: "https://github.com/MetaMask/metamask-extension/releases/download/v10.25.0/metamask-flask-chrome-10.25.0-flask.0.zip";
    },
    {
      url: "https://api.github.com/repos/MetaMask/metamask-extension/releases/assets/94968652";
      id: 94968652;
      node_id: "RA_kwDOAoEEns4FqRtM";
      name: "metamask-flask-firefox-10.25.0-flask.0.zip";
      label: "";
      uploader: {
        login: "metamaskbot";
        id: 37885440;
        node_id: "MDQ6VXNlcjM3ODg1NDQw";
        avatar_url: "https://avatars.githubusercontent.com/u/37885440?v=4";
        gravatar_id: "";
        url: "https://api.github.com/users/metamaskbot";
        html_url: "https://github.com/metamaskbot";
        followers_url: "https://api.github.com/users/metamaskbot/followers";
        following_url: "https://api.github.com/users/metamaskbot/following{/other_user}";
        gists_url: "https://api.github.com/users/metamaskbot/gists{/gist_id}";
        starred_url: "https://api.github.com/users/metamaskbot/starred{/owner}{/repo}";
        subscriptions_url: "https://api.github.com/users/metamaskbot/subscriptions";
        organizations_url: "https://api.github.com/users/metamaskbot/orgs";
        repos_url: "https://api.github.com/users/metamaskbot/repos";
        events_url: "https://api.github.com/users/metamaskbot/events{/privacy}";
        received_events_url: "https://api.github.com/users/metamaskbot/received_events";
        type: "User";
        site_admin: false;
      };
      content_type: "application/octet-stream";
      state: "uploaded";
      size: 19226339;
      download_count: 35;
      created_at: "2023-02-09T16:50:21Z";
      updated_at: "2023-02-09T16:50:22Z";
      browser_download_url: "https://github.com/MetaMask/metamask-extension/releases/download/v10.25.0/metamask-flask-firefox-10.25.0-flask.0.zip";
    }
  ];
  tarball_url: "https://api.github.com/repos/MetaMask/metamask-extension/tarball/v10.25.0";
  zipball_url: "https://api.github.com/repos/MetaMask/metamask-extension/zipball/v10.25.0";
  body: '### Added\r\n- Add new app translations ([#15999](https://github.com/MetaMask/metamask-extension/pull/15999))\r\n- Add Celo to the popular custom network list ([#16745](https://github.com/MetaMask/metamask-extension/pull/16745))\r\n- [FLASK] Add markdown formatting capabilities for Snaps UI ([#16911](https://github.com/MetaMask/metamask-extension/pull/16911))\r\n- [FLASK] Add basic renderer for Snaps UI ([#16605](https://github.com/MetaMask/metamask-extension/pull/16605))\r\n\r\n### Changed\r\n- No longer displaying warning upon switching networks when there are no pending confirmations ([#17179](https://github.com/MetaMask/metamask-extension/pull/17179))\r\n- Remove \'Verify contract details\' link on Signature Request screen when there is no verifying contract ([#17128](https://github.com/MetaMask/metamask-extension/pull/17128))\r\n- Show portfolio tooltip when "Protect your funds" popover is not on screen ([#17084](https://github.com/MetaMask/metamask-extension/pull/17084))\r\n- Set default theme to dark when system preferred theme is set to dark ([#15870](https://github.com/MetaMask/metamask-extension/pull/15870))\r\n- Require a username when adding a new contact to the address book ([#17044](https://github.com/MetaMask/metamask-extension/pull/17044))\r\n- Update styles for "Transaction security check" toggle in settings ([#16830](https://github.com/MetaMask/metamask-extension/pull/16830))\r\n- Display set block explorer in copy on transaction completion popup ([#16300](https://github.com/MetaMask/metamask-extension/pull/16300))\r\n- Updating text colors for Sepolia and Goerli networks ([#16928](https://github.com/MetaMask/metamask-extension/pull/16928))\r\n- Include L1 fees for quotes on Optimism ([#16998](https://github.com/MetaMask/metamask-extension/pull/16998))\r\n- Factor in Optimism\'s L1 fees in to fee total for approval transactions ([#16929](https://github.com/MetaMask/metamask-extension/pull/16929))\r\n- Update "Share your feedback" link location for Beta versions ([#16853](https://github.com/MetaMask/metamask-extension/pull/16853))\r\n- Remove New Address Alert in send transaction flow ([#14811](https://github.com/MetaMask/metamask-extension/pull/14811))\r\n- Allow submissions of transactions with a gas or priority fee of 0 ([#16651](https://github.com/MetaMask/metamask-extension/pull/16651))\r\n- Disable eth_sign by default, allow users to toggle it back on ([#17308](https://github.com/MetaMask/metamask-extension/pull/17308))\r\n- [FLASK] Use custom UI for transaction insights ([#16912](https://github.com/MetaMask/metamask-extension/pull/16912))\r\n- [FLASK] Use custom UI dialogs ([#16912](https://github.com/MetaMask/metamask-extension/pull/16912))\r\n\r\n### Fixed\r\n- Fix tab redirect issue when a non-English language is set ([#17155](https://github.com/MetaMask/metamask-extension/pull/17155))\r\n- Fix duplicate gas fee estimate displayed on testnets ([#17207](https://github.com/MetaMask/metamask-extension/pull/17207))\r\n- Fix app-breaking error when an alphabetical character is entered in the spending cap field for token allowance ([#17117](https://github.com/MetaMask/metamask-extension/pull/17117))\r\n- Fix alignment issues in contacts tab ([#17171](https://github.com/MetaMask/metamask-extension/pull/17171))\r\n- Fix gas fee currency symbol in transaction details activity log ([#16948](https://github.com/MetaMask/metamask-extension/pull/16948))\r\n- Fix function type display in sign typed message confirmation screen ([#17077](https://github.com/MetaMask/metamask-extension/pull/17077))\r\n- Fix duplicate button issue on Ledger connectivity screen ([#17130](https://github.com/MetaMask/metamask-extension/pull/17130))\r\n- Fix issue in settings search input when spaces are entered in-between terms ([#17108](https://github.com/MetaMask/metamask-extension/pull/17108))\r\n- Fix incorrect transaction type when transaction data is not prefixed with \'0x\' ([#17055](https://github.com/MetaMask/metamask-extension/pull/17055))\r\n- Fix account name collision issue ([#16752](https://github.com/MetaMask/metamask-extension/pull/16752))\r\n- Fix caching issue with detected token data ([#16866](https://github.com/MetaMask/metamask-extension/pull/16866))\r\n- Fix warning display on confirmation screens when a transaction is expected to fail ([#17437](https://github.com/MetaMask/metamask-extension/pull/17437))\r\n- [FLASK] Fix race condition with transaction insights ([#16956](https://github.com/MetaMask/metamask-extension/pull/16956))\r\n- [FLASK] Fix crash after Snap confirmation approval ([#16864](https://github.com/MetaMask/metamask-extension/pull/16864))';
  reactions: {
    url: "https://api.github.com/repos/MetaMask/metamask-extension/releases/91917726/reactions";
    total_count: 5;
    "+1": 5;
    "-1": 0;
    laugh: 0;
    hooray: 0;
    confused: 0;
    heart: 0;
    rocket: 0;
    eyes: 0;
  };
}
