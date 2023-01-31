export default interface PageProps {
  props: {
    isServer: true;
    initialState: {
      app: {
        locale: "en-US";
        theme: "DAY";
        lang: "en";
        country: "us";
        currency: {
          id: 2781;
          name: "United States Dollar";
          symbol: "usd";
          token: "$";
        };
        bottomBannerHeights: {};
        browser: {};
        window: {
          width: 0;
          height: 0;
          isNarrowLayout: false;
        };
        modal: {
          instance: 0;
          data: {};
        };
        message: "";
        isInApp: false;
      };
      cryptocurrency: {
        listingLatest: {
          page: 1;
          sort: "";
          sortDirection: "";
          data: [];
          filters: {};
          totalItems: 0;
        };
        ItemKeyMap: {};
        quoteKey: [];
        listingHistorical: {
          data: [];
          page: 1;
          sort: "";
          sortDirection: "";
        };
        new: {
          page: 1;
          sort: "";
          sortDirection: "";
          data: [];
        };
        watchlist: {
          page: 1;
          sort: "";
          sortDirection: "";
          data: [];
        };
        map: {
          data: [];
          slugMap: {};
        };
        info: {};
        prices: {};
        quotesLatest: {};
        quotesHistorical: {
          loading: true;
        };
        ohlcvHistorical: {};
        related: {
          data: {};
        };
        marketPairsLatest: {
          data: {};
        };
        pricePerformanceStatsLatest: {
          data: {};
        };
        topDerivatives: [];
        yieldFarmingRankingLatest: {
          filterKey: "";
        };
        gainersLosers: {
          gainers: [];
          losers: [];
          sortGainers: "";
          sortDirectionGainers: "";
          sortLosers: "";
          sortDirectionLosers: "";
        };
        trendingCoins: {
          sort: "";
          sortDirection: "";
          data: [];
        };
        mostViewed: {
          sort: "";
          sortDirection: "";
          data: [];
        };
        spotlight: {
          data: {};
        };
        quotes: {
          "1": {
            id: 1;
            symbol: "BTC";
            p: 57983.58881722924;
            p1h: -0.20224705;
            p24h: 3.04872291;
            p7d: 5.62171988;
            p30d: 28.05335572;
            p60d: 24.03766402;
            p90d: 81.17269667;
            t: 1634184758061;
            v: 43735514762.7396;
            vol24hpc: 10.709;
            mc: 1093190293725.59;
            mc24hpc: 3.1667;
            fmc24hpc: 3.16;
            ts: 18843225;
          };
          "1027": {
            id: 1027;
            symbol: "ETH";
            p: 3637.072023398509;
            p1h: 0.06258353;
            p24h: 3.99469379;
            p7d: 3.10659516;
            p30d: 10.23234291;
            p60d: 12.10463384;
            p90d: 85.90116926;
            t: 1634184758061;
            v: 17250991038.063747;
            vol24hpc: -0.4944;
            mc: 429147954823.29;
            mc24hpc: 4.1768;
            fmc24hpc: 4.17;
            ts: 117917382.8115;
          };
          "2781": {
            id: 2781;
            symbol: "USD";
            p: 1;
            p1h: 0;
            p24h: 0;
            p7d: 0;
            p30d: 0;
            p60d: 0;
            p90d: 0;
            t: 1634184758061;
          };
          "9022": {
            id: 9022;
            symbol: "SATS";
            p: 0.0005798358881722924;
            p1h: -0.20224705;
            p24h: 3.04872291;
            p7d: 5.62171988;
            p30d: 28.05335572;
            p60d: 24.03766402;
            p90d: 81.17269667;
            t: 1634184758061;
            v: 43735514762.7396;
            vol24hpc: 10.709;
            mc: 1093190293725.59;
            mc24hpc: 3.1667;
            fmc24hpc: 3.16;
            ts: 18843225;
            name: "Satoshi";
            token: "SATS";
            rate: 100000000;
          };
          "9023": {
            id: 9023;
            symbol: "BITS";
            p: 0.05798358881722924;
            p1h: -0.20224705;
            p24h: 3.04872291;
            p7d: 5.62171988;
            p30d: 28.05335572;
            p60d: 24.03766402;
            p90d: 81.17269667;
            t: 1634184758061;
            v: 43735514762.7396;
            vol24hpc: 10.709;
            mc: 1093190293725.59;
            mc24hpc: 3.1667;
            fmc24hpc: 3.16;
            ts: 18843225;
            name: "Bits";
            token: "BITS";
            rate: 1000000;
          };
        };
      };
      exchange: {
        listingLatest: {
          page: 1;
          sort: "";
          sortDirection: "";
          data: [];
        };
        map: {
          data: [];
        };
        info: {};
        quotesLatest: {};
        marketPairsLatest: {
          data: {};
        };
        related: {
          data: [];
        };
        fiatOnRamp: {
          activeSection: null;
          selectedCrypto: null;
          availableCurrencies: ["USD", "EUR", "GBP", "NGN", "RUB"];
          selectedCurrency: "USD";
          orderBy: "price";
          order: "asc";
          tableData: [];
        };
      };
      globalMetrics: {
        quotesHistorical: {};
        trendingSearch: [];
      };
      watchlist: {
        loaded: false;
        data: [];
        onboarding: [];
        import: null;
        counts: {
          isLoading: false;
          data: {};
        };
      };
      user: {
        isLoading: false;
        isLoaded: true;
        isHeadlineLoading: true;
        loginModal: "";
        loginContinue: null;
      };
      router: {
        statusCode: {
          "404": false;
          "429": false;
        };
      };
      notification: {
        cardsData: [
          {
            id: "61152052bcaa350012b435d2";
            title: "Daily News ";
            message: "Coinbase Launches NFT Marketplace!";
            position: 1;
            url: "https://coinmarketcap.com/alexandria/article/cmc-daily-oct-13-nft-special-coinbase-v-opensea";
            video: "https://www.youtube.com/embed/2vglyr944L4?autoplay=1\u0026mute=0\u0026controls=1\u0026origin=https%3A%2F%2Fcoinmarketcap.com\u0026playsinline=1\u0026showinfo=0\u0026rel=0\u0026iv_load_policy=3\u0026modestbranding=1\u0026enablejsapi=1\u0026widgetid=1";
            image: "https://s2.coinmarketcap.com/static/new-alerts/61152052bcaa350012b435d2/img/1634163756591_Oct-13-Daily-Thumbnail_280x136.jpg";
            thumbnail: "https://s2.coinmarketcap.com/static/new-alerts/61152052bcaa350012b435d2/thumbnail/1634163756306_Oct-13-Daily-Thumbnail_280x136.jpg";
          },
          {
            id: "613ff90685133600192a3b73";
            title: "CoinMarketCap x Presearch";
            message: "Search Crypto on Presearch!";
            position: 2;
            url: "https://coinmarketcap.com/alexandria/article/what-is-presearch-pre-features-tokenomics-and-price-prediction";
            video: null;
            image: "https://s2.coinmarketcap.com/static/new-alerts/613ff90685133600192a3b73/img/1633440001822_Webp.net-compress-image.jpg";
            thumbnail: "https://s2.coinmarketcap.com/static/new-alerts/613ff90685133600192a3b73/thumbnail/1633440001797_64x64.png";
          },
          {
            id: "613f25cbef9a5a001905f323";
            title: "CoinMarketCap Tutorial";
            message: "What is Crypto Lending?";
            position: 3;
            url: "https://youtu.be/h-U1PY06np8";
            video: "https://youtu.be/h-U1PY06np8";
            image: "https://s2.coinmarketcap.com/static/new-alerts/613f25cbef9a5a001905f323/img/1634164122974_Oct-12-Tuesday-Tutorial-Thumbnail_280x136.jpg";
            thumbnail: "https://s2.coinmarketcap.com/static/new-alerts/613f25cbef9a5a001905f323/thumbnail/1634164122393_Oct-12-Tuesday-Tutorial-Thumbnail_280x136.jpg";
          },
          {
            id: "611521ecc3074e0013b0c4a9";
            title: "Token Airdrop";
            message: "Join $20K StarSharks Airdrop!";
            position: 4;
            url: "https://coinmarketcap.com/currencies/starsharks-sss/airdrop/";
            video: null;
            image: "https://s3.amazonaws.com/s2.coinmarketcap.com/static/new-alerts/611521ecc3074e0013b0c4a9/img/1630994918416_Join Wagyu Swap 290x136.png";
            thumbnail: "https://s3.amazonaws.com/s2.coinmarketcap.com/static/new-alerts/611521ecc3074e0013b0c4a9/thumbnail/1630994918037_Join Wagyu Swap 64x64.png";
          },
          {
            id: "6115224cb91ba00012e951d7";
            title: "Learn \u0026 Earn";
            message: "Learning About More Cryptos!";
            position: 5;
            url: "https://coinmarketcap.com/earn";
            video: null;
            image: "https://s2.coinmarketcap.com/static/new-alerts/6115224cb91ba00012e951d7/img/1634029372802_Learn-and-Earn-280x136.jpeg";
            thumbnail: "https://s2.coinmarketcap.com/static/new-alerts/6115224cb91ba00012e951d7/thumbnail/1634029372694_Learn-and-Earn-64x64.jpeg";
          },
          {
            id: "611522c732a47c001239468a";
            title: "Deep Dive";
            message: "Podcast: BTC Soars, Facebook Crisis";
            position: 6;
            url: "https://coinmarketcap.com/alexandria/article/podcast-btc-soars-facebook-crisis-news-roundup";
            video: null;
            image: "https://s3.amazonaws.com/s2.coinmarketcap.com/static/new-alerts/611522c732a47c001239468a/img/1631754270064_Frame 48.png";
            thumbnail: "https://s3.amazonaws.com/s2.coinmarketcap.com/static/new-alerts/611522c732a47c001239468a/thumbnail/1631754270209_5ff7248811cf0e13e9224595_photo1.png";
          },
          {
            id: "61152358029ab00019681d99";
            title: "CoinMarketCap Influencer";
            message: "Become an Official Influencer!";
            position: 7;
            url: "https://coinmarketcap.com/alexandria/article/become-an-official-coinmarketcap-influencer-kol";
            video: null;
            image: "https://s2.coinmarketcap.com/static/new-alerts/61152358029ab00019681d99/img/1632373087159_Influencer 280x136(1).jpeg";
            thumbnail: "https://s2.coinmarketcap.com/static/new-alerts/61152358029ab00019681d99/thumbnail/1632373087135_Influencer 64x64(1).jpeg";
          },
          {
            id: "61152481ad8e1000124fc878";
            title: "Promotion Request";
            message: "Promote Your Project on our Site";
            position: 8;
            url: "https://coinmarketcap.com/alexandria/article/coinmarketcap-promotion-request-form";
            video: null;
            image: "https://s3.amazonaws.com/s2.coinmarketcap.com/static/new-alerts/61152481ad8e1000124fc878/img/1630995253680_Promote Your Project 290x136.png";
            thumbnail: "https://s3.amazonaws.com/s2.coinmarketcap.com/static/new-alerts/61152481ad8e1000124fc878/thumbnail/1630995251460_Promote Your Project 64x64.png";
          }
        ];
      };
      sponsoredAds: {
        sponsoredAds: {
          ads: {
            "60f659d1c32e840d40347d4e": {
              advertiser: "Binance";
              buttonCopy: "Buy";
              title: "Buy Crypto with Fees as Low as 0%";
              image: "https://s3.beta.coinmarketcap.com/static/img/ads/binance_buy_480x176.png";
              ctaCopy: "Fees as Low as 0%";
              content: "Buy crypto with a bank transfer, credit or debit card, P2P exchange, and more. Not investment advice. All trading carries risk. Terms apply.";
              url: "https://binance1.shortcm.li/cmcbuy";
              logoUrl: "https://s3.beta.coinmarketcap.com/static/img/ads/binance_32x32_1.png";
            };
            "60f659d1c32e840d40347d5a": {
              advertiser: "Crypto.com";
              buttonCopy: "";
              title: "Buy 100+ Top Coins at True Cost";
              ctaCopy: "";
              content: "";
              url: "https://crypto.onelink.me/J9Lg/searchbuycrypto";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/cryptocom_32x32_1.png";
            };
            "60f659d1c32e840d40347d4d": {
              advertiser: "Binance";
              buttonCopy: "Buy";
              title: "Buy Crypto with Fees as Low as 0%";
              image: "https://s3.coinmarketcap.com/static/img/as/binance_buy_480x176.png";
              ctaCopy: "Fees as Low as 0%";
              content: "Buy crypto with a bank transfer, credit or debit card, P2P exchange, and more. Not investment advice. All trading carries risk. Terms apply.";
              url: "https://binance1.shortcm.li/cmcbuy";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/binance_32x32_1.png";
            };
            "60f659d1c32e840d40347d59": {
              advertiser: "CEX.IO";
              buttonCopy: "Earn Crypto";
              title: "Earn crypto when you sleep";
              image: "https://s3.coinmarketcap.com/static/img/as/earn 1.png";
              ctaCopy: "Earn 20% reward";
              content: "Deposit or buy stake-able coins like MATIC, ADA, ATOM, TRX, ZIL etc. and increase your holdings by up to 20%.";
              url: "https://cexio.page.link/coinmarketcap";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/cexio_32x32_1.png";
            };
            "60f659d1c32e840d40347d50": {
              advertiser: "Crypto.com";
              buttonCopy: "Buy";
              title: "Buy Crypto With 0% Fee";
              image: "https://s3.coinmarketcap.com/static/img/as/CMC_Buy-Button_0fees_480x176_png_en.png";
              ctaCopy: "Buy Crypto";
              content: "Buy 150+ cryptos with 0% fee on credit/debit card for 30 days";
              url: "https://crypto.onelink.me/J9Lg/68393b3b";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/cryptocom_32x32_1.png";
            };
            "60f659d1c32e840d40347d4f": {
              advertiser: "Binance";
              buttonCopy: "Buy";
              title: "Buy Crypto with Fees as Low as 0%";
              image: "https://s3.beta.coinmarketcap.com/static/img/ads/binance_buy_480x176.png";
              ctaCopy: "Fees as Low as 0%";
              content: "Buy crypto with a bank transfer, credit or debit card, P2P exchange, and more. Not investment advice. All trading carries risk. Terms apply.";
              url: "https://binance1.shortcm.li/cmcbuy";
              logoUrl: "https://s3.beta.coinmarketcap.com/static/img/ads/binance_32x32_1.png";
            };
            "60f659d1c32e840d40347d5b": {
              advertiser: "Crypto.com";
              buttonCopy: "";
              title: "Earn 6.5% p.a. on BTC";
              ctaCopy: "";
              content: "";
              url: "https://crypto.onelink.me/J9Lg/searchearn";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/cryptocom_32x32_1.png";
            };
            "60f659d1c32e840d40347d58": {
              advertiser: "1xBIT";
              buttonCopy: "Gaming";
              title: "Crypto Sportsbook \u0026 Online Casino";
              image: "https://s3.coinmarketcap.com/static/img/as/gamble 1.png";
              ctaCopy: "Get your 7 BTC here";
              content: "Don’t lose a chance to dive into 3000+ games, the highest ODDs for sports and eSports with full anonymity";
              url: "https://mooony.xyz/click.php?kpp=cmkbutton";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/1xbit_32x32_1.png";
            };
            "60f659d1c32e840d40347d51": {
              advertiser: "Crypto.com";
              buttonCopy: "Buy";
              title: "Buy Crypto With 0% Fee";
              image: "https://s3.coinmarketcap.com/static/img/as/CoinMarketCap - 0_ Fee-.png";
              ctaCopy: "Buy Crypto";
              content: "Buy 100+ cryptos with 0% fee on credit/debit card for 30 days";
              url: "https://crypto.onelink.me/J9Lg/68393b3b";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/cryptocom_32x32_1.png";
            };
            "60fa02e93ba9832048c7e91f": {
              advertiser: "Binance";
              title: "Hold BNB on Binance";
              ctaCopy: "Trade Now";
              content: "And Get 25% Off Trading Fees.";
              url: "https://binance1.shortcm.li/cmctrend";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/binance_32x32_1.png";
            };
            "60f659d1c32e840d40347d56": {
              advertiser: "Binance";
              buttonCopy: "Buy";
              title: "Buy Crypto with Fees as Low as 0%";
              image: "https://s3.coinmarketcap.com/static/img/as/buy v1.png";
              ctaCopy: "Fees as Low as 0%";
              content: "Buy crypto with a bank transfer, credit or debit card, P2P exchange, and more. Not investment advice. All trading carries risk. Terms apply.";
              url: "https://binance1.shortcm.li/cmcbuy";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/binance_32x32_1.png";
            };
            "60f659d1c32e840d40347d57": {
              advertiser: "Binance";
              buttonCopy: "Exchange";
              title: "Lowest Trading Fees on 300+ Cryptos";
              image: "https://s3.coinmarketcap.com/static/img/as/exchange v1.png";
              ctaCopy: "Lowest Trading Fees";
              content: "Binance offers the lowest trading fees for 99% of users compared to leading global exchanges. Not investment advice. Trading carries risk. Terms apply";
              url: "https://binance1.shortcm.li/cmcex";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/binance_32x32_1.png";
            };
            "614b547a2abc71367926e09d": {
              advertiser: "Apollox";
              buttonCopy: "";
              title: "Trade crypto futures anonymously with up to 100x leverage.";
              ctaCopy: "";
              content: "";
              url: "https://www.apollox.com/en?utm_source=CMC\u0026utm_medium=searchads\u0026utm_campaign=apollox_introduction";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/ApolloX_logo.png";
            };
            "614b54a62abc71367926e0a5": {
              advertiser: "Apollox";
              buttonCopy: "";
              title: "Trade crypto futures anonymously with up to 100x leverage.";
              ctaCopy: "";
              content: "";
              url: "https://www.apollox.com/en?utm_source=CMC\u0026utm_medium=searchads\u0026utm_campaign=apollox_introduction";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/ApolloX_logo.png";
            };
            "614b57692abc71367926e0a7": {
              advertiser: "Bybit";
              buttonCopy: "";
              title: "BIT Airdrop - Grab Up to 600 BIT. Goodie Bag for All!";
              ctaCopy: "";
              content: "";
              url: "https://www.bybit.com/bit-launch-event?medium=paid_banner\u0026source=coinmarketcap\u0026campaign=bit\u0026channel=mkt_\u0026content=en_sponsoredsearch";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/Bybit-Favicon-LIGHTMODE.png";
            };
            "614b576bb69b4c2c9e9320f1": {
              advertiser: "Bybit";
              buttonCopy: "";
              title: "BIT Airdrop - Grab Up to 600 BIT. Goodie Bag for All!";
              ctaCopy: "";
              content: "";
              url: "https://www.bybit.com/bit-launch-event?medium=paid_banner\u0026source=coinmarketcap\u0026campaign=bit\u0026channel=mkt_\u0026content=en_sponsoredsearch";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/Bybit-Favicon-LIGHTMODE.png";
            };
            "615b8edaf9020f26eb10594c": {
              advertiser: "Blockchain.com";
              buttonCopy: "Buy";
              title: "Trade Crypto With 5X Leverage";
              image: "https://s3.coinmarketcap.com/static/img/as/480x176.png";
              ctaCopy: "Trade Crypto";
              content: "Trade margin with low fees. Buy, sell and trade with bank transfer, credit or debit cards. Trusted by millions of users across 200 countries.";
              url: "track.blockchain.com/aff_c?offer_id=6\u0026aff_id=1000\u0026aff_sub=BTC";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/blockchain_logo_new.png";
            };
            "615b8f29f9020f26eb10594d": {
              advertiser: "Blockchain.com";
              buttonCopy: "Buy";
              title: "Trade BTC With 5X Leverage";
              image: "https://s3.coinmarketcap.com/static/img/as/480x176.png";
              ctaCopy: "Trade Bitcoin";
              content: "Trade margin with low fees. Buy, sell and trade with bank transfer, credit or debit cards. Trusted by millions of users across 200 countries.";
              url: "track.blockchain.com/aff_c?offer_id=6\u0026aff_id=1000\u0026aff_sub=BTC";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/blockchain_logo_new.png";
            };
            "615b8f78f9020f26eb10594f": {
              advertiser: "Blockchain.com";
              buttonCopy: "Buy";
              title: "Trade Crypto With 5X Leverage";
              image: "https://s3.coinmarketcap.com/static/img/as/480x176.png";
              ctaCopy: "Trade Crypto";
              content: "Trade margin with low fees. Buy, sell and trade with bank transfer, credit or debit cards. Trusted by millions of users across 200 countries.";
              url: "track.blockchain.com/aff_c?offer_id=6\u0026aff_id=1000\u0026aff_sub=BTC";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/blockchain_logo_new.png";
            };
            "615c71aedf947b77423f3f60": {
              advertiser: "Presearch.org";
              buttonCopy: "";
              title: "Search with Presearch! Earn Rewards and Protect Your Privacy";
              ctaCopy: "";
              content: "";
              url: "https://presearch.org?utm_source=SponsoredSearch\u0026utm_medium=Web\u0026utm_campaign=PresearchCoinMarketCap\u0026utm_id=CoinMarketCap";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/presearch.png";
            };
            "615c71dcdf947b77423f3f61": {
              advertiser: "Presearch.org";
              buttonCopy: "";
              title: "Search with Presearch! Earn Rewards and Protect Your Privacy";
              ctaCopy: "";
              content: "";
              url: "https://presearch.org?utm_source=SponsoredSearch\u0026utm_medium=Web\u0026utm_campaign=PresearchCoinMarketCap\u0026utm_id=CoinMarketCap";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/presearch.png";
            };
            "615e5ba76c267b5fa2818b36": {
              advertiser: "Nexo";
              buttonCopy: "Earn Crypto";
              title: "Ready to earn big on crypto?";
              image: "https://s3.coinmarketcap.com/static/img/as/cmc-thumbnail (1).png";
              ctaCopy: "Earn Big on Your Terms";
              content: "Grow your crypto portfolio with Nexo. Open an account and earn up to 12% APR on BTC, ETH and more!";
              url: "https://nexo.io/earn-crypto?utm_source=coinmarketcap\u0026utm_medium=fixed\u0026utm_campaign=coinmarketcap_earn_button_oct21";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/logo_nexo (2).png";
            };
            "615f578e5dd5b169c45622f4": {
              advertiser: "Bitcoin.com";
              buttonCopy: "Buy";
              title: "Your wallet, your keys, your crypto";
              image: "https://s3.coinmarketcap.com/static/img/as/96_96-1.png";
              ctaCopy: "Get it on mobile and web";
              content: "Buy, sell, swap, store, and use BTC, BCH, ETH and ERC-20 tokens. Connect to DApps via WalletConnect. The non-custodial wallet trusted by millions.";
              url: "https://branch.wallet.bitcoin.com/bitcoin_com_coinmarketcap_oct";
              logoUrl: "https://s3.coinmarketcap.com/static/img/as/bitcoin icon.png";
            };
          };
          positions: {
            HomePageBuyButtons: {
              "1": ["60f659d1c32e840d40347d4d", "60f659d1c32e840d40347d50", "615b8f29f9020f26eb10594d"];
              "825": ["615b8edaf9020f26eb10594c"];
              "1027": ["60f659d1c32e840d40347d4e", "60f659d1c32e840d40347d4d", "60f659d1c32e840d40347d50", "615b8f78f9020f26eb10594f"];
              "1839": ["60f659d1c32e840d40347d4d", "60f659d1c32e840d40347d4f"];
              "3635": ["60f659d1c32e840d40347d51"];
            };
            CoinPageBuyButtons: {
              "1": [
                {
                  id: "615f578e5dd5b169c45622f4";
                  adsPosition: 0;
                },
                {
                  id: "60f659d1c32e840d40347d56";
                  adsPosition: 1;
                }
              ];
              "2": [
                {
                  id: "60f659d1c32e840d40347d57";
                  adsPosition: 1;
                }
              ];
              "3": [
                {
                  id: "60f659d1c32e840d40347d58";
                  adsPosition: 1;
                }
              ];
              "4": [
                {
                  id: "615e5ba76c267b5fa2818b36";
                  adsPosition: 0;
                },
                {
                  id: "60f659d1c32e840d40347d59";
                  adsPosition: 1;
                }
              ];
            };
            SearchSponsored: [
              "60f659d1c32e840d40347d5a",
              "60f659d1c32e840d40347d5b",
              "614b547a2abc71367926e09d",
              "614b54a62abc71367926e0a5",
              "614b57692abc71367926e0a7",
              "614b576bb69b4c2c9e9320f1",
              "615c71aedf947b77423f3f60",
              "615c71dcdf947b77423f3f61"
            ];
            TrendingSponsored: ["60fa02e93ba9832048c7e91f"];
          };
        };
      };
    };
    initialProps: {
      initialI18nStore: {
        en: {
          common: {};
          "coin-detail-page": {
            coin_detail_wallets_seo_text: "\u003ch2 id='what-are-cryptocurrency-wallets-'\u003eWhat Are Cryptocurrency Wallets?\u003c/h2\u003e \u003cp\u003eCryptocurrency \u003ca href='https://coinmarketcap.com/alexandria/glossary/wallet'\u003ewallets\u003c/a\u003e are software programs that store private and public keys and interface with various blockchain to enable users to send and receive digital currency and monitor their balance. It is the equivalent of a bank account where you can both deposit and withdraw funds from (though only the latter with cryptocurrency).\u003c/p\u003e \u003cp\u003eCryptocurrency wallets store private and public keys and facilitate the sending and receiving of digital currency and monitor all transactions to protect from identity theft. The private key is used to authorize payments, while the public key is used to access received funds.\u003c/p\u003e \u003cp\u003eCryptocurrency wallets can be hot, meaning that they are connected to the internet, or cold, meaning that they have no internet connection. When deciding whether to use a \u003ca href='https://coinmarketcap.com/alexandria/article/hot-wallets-vs-cold-wallets-whats-the-difference'\u003ehot wallet vs a cold wallet\u003c/a\u003e, you need to consider several factors: while hot wallets are often more user friendly, they also carry a higher risk of loss of funds due to their internet connection.\u003c/p\u003e \u003ch2 id='what-are-the-main-types-of-cryptocurrency-wallets-'\u003eWhat Are the Main Types of Cryptocurrency Wallets?\u003c/h2\u003e \u003ch3 id='-paper-wallets-https-coinmarketcap-com-alexandria-glossary-paper-wallet-'\u003e\u003ca href='https://coinmarketcap.com/alexandria/glossary/paper-wallet'\u003ePaper Wallets\u003c/a\u003e\u003c/h3\u003e \u003cp\u003eCryptocurrency paper wallets are a secure way to hold your cryptocurrencies. Think of them like a savings account with no withdrawal limits. A paper wallet contains both the public and private key for your wallet. The wallet can be used to receive cryptocurrencies from other people. It is also possible to send cryptocurrency to this address if it is generated with a genuine random number generator (RNG).\u003c/p\u003e \u003cp\u003eThey are simple, secure and offline alternatives to digital cryptocurrency wallets. They have all of the benefits of paper money while also providing the unique ability to securely cold-store digital currency without any possibility of a hacker or malware gaining access to your funds.\u003c/p\u003e \u003ch3 id='-hot-wallets-https-coinmarketcap-com-alexandria-glossary-hot-wallet-'\u003e\u003ca href='https://coinmarketcap.com/alexandria/glossary/hot-wallet'\u003eHot Wallets\u003c/a\u003e\u003c/h3\u003e \u003cp\u003eCryptocurrency hot wallets are also known as web wallets or online wallets.These types of wallets are used to make small, frequent payments while requiring the least amount of effort from the individual and/or organization. \u003c/p\u003e \u003cp\u003eCryptocurrency hot wallets are a digital wallet used to store cryptocurrency funds. A hot wallet is an online system and can be accessed from anywhere as it does not require any physical access to the unit. For example, \u003ca href='https://coinmarketcap.com/exchanges/coinbase-pro/'\u003eCoinbase\u003c/a\u003e is a popular exchange platform for buying cryptocurrency in the U.S. and Europe, but they also have a web-based digital wallet which allows users to store \u003ca href='https://coinmarketcap.com/currencies/bitcoin/'\u003eBitcoin\u003c/a\u003e, \u003ca href='https://coinmarketcap.com/currencies/litecoin/'\u003eLitecoin\u003c/a\u003e and \u003ca href='https://coinmarketcap.com/currencies/ethereum'\u003eEther\u003c/a\u003e, among other coins.\u003c/p\u003e \u003cp\u003e\u003ca href='https://coinmarketcap.com/alexandria/article/what-is-metamask'\u003eMetaMask\u003c/a\u003e is another popular hot wallet.\u003c/p\u003e \u003ch3 id='-cold-wallets-https-coinmarketcap-com-alexandria-glossary-cold-wallet-'\u003e\u003ca href='https://coinmarketcap.com/alexandria/glossary/cold-wallet'\u003eCold Wallets\u003c/a\u003e\u003c/h3\u003e \u003cp\u003eCold wallets refer to any method of storing cryptocurrency which keeps the private keys of your coins offline, preventing any form of hacking, stealing, or unauthorized access. Paper wallets and other cold wallets are considered to be more secure as compared to hot storage solutions such as online and software wallets, which make transactions much easier but are often less secure due to security issues.\u003c/p\u003e \u003ch3 id='how-to-use-a-bitcoin-wallet'\u003eHow to Use a Bitcoin Wallet\u003c/h3\u003e \u003cp\u003eCoinMarketCap Alexandria has a guide that teaches you \u003ca href='https://coinmarketcap.com/alexandria/article/how-to-use-a-bitcoin-wallet'\u003ehow to use a Bitcoin wallet here\u003c/a\u003e.\u003c/p\u003e";
          };
        };
      };
      initialLanguage: "en";
      i18nServerInstance: null;
      pageProps: {
        info: {
          id: 7083;
          name: "Uniswap";
          symbol: "UNI";
          slug: "uniswap";
          category: "token";
          description: "## What Is Uniswap (UNI)?\n\n[Uniswap](https://coinmarketcap.com/exchanges/uniswap-v2/) is a popular decentralized trading protocol, known for its role in facilitating automated trading of decentralized finance ([DeFi](https://coinmarketcap.com/alexandria/article/what-is-decentralized-finance)) tokens.\n\nAn example of an automated market maker ([AMM](https://coinmarketcap.com/alexandria/glossary/automated-market-maker-amm)), Uniswap launched in November 2018, but has gained considerable popularity this year thanks to the DeFi phenomenon and associated surge in token trading.\n\nUniswap aims to keep token trading automated and completely open to anyone who holds tokens, while improving the efficiency of trading versus that on traditional exchanges.\n\nUniswap creates more efficiency by solving liquidity issues with automated solutions, avoiding the problems which plagued the first decentralized exchanges.\n\nIn September 2020, Uniswap went a step further by creating and awarding its own [governance token](https://coinmarketcap.com/alexandria/glossary/governance-token), UNI, to past users of the protocol. This added both profitability potential and the ability for users to shape its future — an attractive aspect of decentralized entities.\n\n\n## Who Are the Founders of Uniswap?\n\nUniswap came about as a plan to introduce AMMs on [Ethereum](https://coinmarketcap.com/currencies/ethereum/) to a wider audience. The platform’s creator is Ethereum developer Hayden Adams.\n\nAdams worked in various projects while finalizing Uniswap, and his work was informed directly by Ethereum creator Vitalik Buterin. Buterin even ended up giving the protocol its name — it was originally known as Unipeg.\n\nAdams has also said that the original inspiration for the [Uniswap platform](https://coinmarketcap.com/alexandria/article/how-to-use-uniswap) came from one of Buterin’s own blog posts. His original idea to focus on Ethereum came after a friend convinced him to begin researching and understanding the protocol in 2017.\n\n\n### What Makes Uniswap Unique?\n\nUniswap exists to create liquidity — and therefore trading and the value that trading provides — for the DeFi sphere.\n\nOne of the major AMMs in operation at present, the protocol functions using a formula for automated exchange — X x Y = K. Founder Hayden Adams describes himself as the inventor of the particular implementation of the formula on Uniswap.\n\nUniswap is not just a decentralized exchange; it attempts to solve the issues that platforms such as [EtherDelta](https://coinmarketcap.com/exchanges/etherdelta/) experienced with liquidity.\n\nBy automating the process of market making, the protocol inceventizes activity by limiting risk and reducing costs for all parties. The mechanism also removes identity requirements for users, and technically anyone can create a liquidity pool for any pair of tokens.\n\nAccording to Uniswap, their governance token (UNI) was created in order to “officially enshrin[e] Uniswap as publicly-owned and self-sustainable infrastructure while continuing to carefully protect its indestructible and autonomous qualities.”\n\nUniswap V2 launched on Nov. 2, 2018, and introduced new features like ERC-20 pairs, price [oracles](https://coinmarketcap.com/alexandria/glossary/oracles), flash swaps and more. The latest version — Uniswap V3, launched on the mainnet on May 5, 2021. It features greater capital efficiency for [liquidity providers](https://coinmarketcap.com/alexandria/glossary/liquidity-provider), better execution for traders and enhanced infrastructure. Uniswap price reached an [all-time high](https://coinmarketcap.com/alexandria/glossary/all-time-high) (ATH) of $44.97 leading up to the mainnet launch of V3. Since it’s launch there has been substantial interest in it’s [UNI to AUD](https://coinmarketcap.com/currencies/uniswap/uni/aud/) and [UNI to EUR](https://coinmarketcap.com/currencies/uniswap/uni/eur/) price pairs.\n\n\n#### Related Pages:\n\nLearn more about Balancer [here](https://balancer.finance/).\n\nLearn more about Curve [here](https://www.curve.fi/).\n\nNew to DeFi and cryptocurrency? Check out our education resources [here](https://coinmarketcap.com/alexandria/).\n\n[Uniswap vs Pancakeswap](https://coinmarketcap.com/alexandria/article/uniswap-vs-pancakeswap)\n\nWant to keep track of Uniswap (UNI) price live? Download the [CoinMarketCap mobile app](https://coinmarketcap.com/mobile/)!\n\nWant to convert the Uniswap (UNI) price today to your desired fiat currency? Check out [CoinMarketCap exchange rate calculator](https://coinmarketcap.com/converter/).\n\n\n### **How Many Uniswap (UNI) Coins Are There In Circulation?**\n\nThe total supply of Uniswap’s governance token, UNI, is 1 billion units. These will become available over the course of four years, after which Uniswap will introduce a “perpetual inflation rate” of 2% to maintain network participation.\n\nToken distribution currently consists of the following: 60% to Uniswap community members, i.e. users, 21.51% to team members, 17.8% to investors and 0.69% to advisors. The latter three distributions will occur according to a four-year vesting schedule.\n\nOut of the majority set to go to users, 15% can be claimed by those who used Uniswap prior to Sep. 1, 2020. These even include users who submitted transactions which were never successful — they are eligible for 400 UNI.\n\nThe UNI token serves the purpose of enabling shared community ownership in the growth and development of the decentralized protocol. This allows UNI holders to participate in the governance of the Uniswap protocol and wider ecosystem, in a neutral and trustless manner. The success and adoption of Uniswap products will positively impact Uniswap price, hence incentivizing token holders to contribute to the self-sustaining development of the ecosystem.\n\nFour years after the UNI token launch, in September 2024, a perpetual inflation rate of 2% annually will take effect. This is to ensure that participation in the Uniswap ecosystem continues, by disincentivizing passive holders.\n\n\n### **How Is the Uniswap Network Secured?**\n\nUniswap is a decentralized protocol for trading, and UNI is its in-house governance token. UNI is an [ERC-20](https://coinmarketcap.com/alexandria/glossary/erc-20) token, meaning it requires Ethereum to function.\n\nERC-20 merely defines a set of rules for tokens, as well as security considerations mainly related to the strength of the Ethereum network. For example, congestion can hike the price of [gas](https://coinmarketcap.com/alexandria/glossary/gas-price) needed to perform transactions, leading to delays and abnormally high transaction fees, which impact all participants.\n\nSeparately, [smart contracts](https://coinmarketcap.com/alexandria/glossary/smart-contract) can cause security issues that could lead to DeFi traders losing funds; in fact, hackers have already succeeded in stealing millions of dollars in DeFi’s short lifetime as of September 2021.\n\n\n### Where Can You Buy Uniswap (UNI)?\n\nUniswap’s UNI governance token is available for trading on major exchanges against other cryptocurrencies, stablecoins, fiat currencies and more.\n\nThese include [Binance](https://coinmarketcap.com/exchanges/binance/), [Huobi](https://coinmarketcap.com/exchanges/huobi-global/) and [Coinbase Pro](https://coinmarketcap.com/exchanges/coinbase-exchange/), along with, naturally, Uniswap’s protocol itself — [Uniswap (V2)](https://coinmarketcap.com/exchanges/uniswap-v2/) and [Uniswap (V3)](https://coinmarketcap.com/exchanges/uniswap-v3/).\n\nYou can read more about how to enter the cryptocurrency market, no matter what token you plan to purchase, [here](https://coinmarketcap.com/alexandria/).";
          dateAdded: "2020-09-17T00:00:00.000Z";
          status: "active";
          notice: "";
          latestUpdateTime: "2021-10-14T04:06:23.000Z";
          watchCount: "418923";
          dateLaunched: "2020-09-17T00:00:00.000Z";
          launchPrice: 0;
          tags: [
            {
              slug: "decentralized-exchange";
              name: "Decentralized exchange";
              category: "PROPERTY";
            },
            {
              slug: "defi";
              name: "DeFi";
              category: "PROPERTY";
            },
            {
              slug: "dao";
              name: "DAO";
              category: "PROPERTY";
            },
            {
              slug: "yield-farming";
              name: "Yield farming";
              category: "PROPERTY";
            },
            {
              slug: "amm";
              name: "AMM";
              category: "PROPERTY";
            },
            {
              slug: "binance-smart-chain";
              name: "Binance Smart Chain";
              category: "PROPERTY";
            },
            {
              slug: "coinbase-ventures-portfolio";
              name: "Coinbase Ventures Portfolio";
              category: "PROPERTY";
            },
            {
              slug: "three-arrows-capital-portfolio";
              name: "Three Arrows Capital Portfolio";
              category: "PROPERTY";
            },
            {
              slug: "governance";
              name: "Governance";
              category: "PROPERTY";
            },
            {
              slug: "blockchain-capital-portfolio";
              name: "Blockchain Capital Portfolio";
              category: "PROPERTY";
            },
            {
              slug: "defiance-capital";
              name: "DeFiance Capital";
              category: "PROPERTY";
            },
            {
              slug: "alameda-research-portfolio";
              name: "Alameda Research Portfolio";
              category: "PROPERTY";
            },
            {
              slug: "a16z-portfolio";
              name: "A16Z Portfolio";
              category: "PROPERTY";
            },
            {
              slug: "pantera-capital-portfolio";
              name: "Pantera Capital Portfolio";
              category: "PROPERTY";
            },
            {
              slug: "parafi-capital";
              name: "ParaFi capital";
              category: "PROPERTY";
            },
            {
              slug: "paradigm-xzy-screener";
              name: "Paradigm XZY Screener";
              category: "PROPERTY";
            }
          ];
          urls: {
            website: ["https://uniswap.org/blog/uni/", "https://uniswap.org/"];
            technical_doc: [];
            explorer: [
              "https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
              "https://ethplorer.io/address/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
              "https://bscscan.com/token/0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
              "https://hecoinfo.com/token/0x22c54ce8321a4015740ee1109d9cbc25815c46e6",
              "https://blockscout.com/xdai/mainnet/tokens/0x4537e328bf7e4efa29d05caea260d7fe26af9d74/token-transfers"
            ];
            source_code: [];
            message_board: ["https://uniswap.org/blog/"];
            chat: ["https://discord.gg/FCfyBSbCU5"];
            announcement: [];
            reddit: ["https://reddit.com/r/Uniswap"];
            twitter: ["https://twitter.com/Uniswap"];
          };
          volume: 677156838.6854689;
          volumeChangePercentage24h: 113.5229;
          statistics: {
            price: 24.94850344564167;
            priceChangePercentage1h: 0.39817685;
            priceChangePercentage24h: 5.65536149;
            priceChangePercentage7d: 0.14370527;
            priceChangePercentage30d: 9.28199865;
            priceChangePercentage60d: -15.77139417;
            priceChangePercentage90d: 42.40088915;
            marketCap: 15259595551.51;
            marketCapChangePercentage24h: 5.6554;
            fullyDilutedMarketCap: 24948503445.64;
            fullyDilutedMarketCapChangePercentage24h: 5.66;
            circulatingSupply: 611643723.831094;
            totalSupply: 1000000000;
            maxSupply: 1000000000;
            marketCapDominance: 0.6405;
            rank: 11;
            low24h: 23.20665377;
            high24h: 25.68964135;
            low7d: 22.34046546;
            high7d: 26.2789465;
            low30d: 17.77184455;
            high30d: 27.60081164;
            low90d: 14.05224283;
            high90d: 31.38794714;
            low52w: 1.76381655;
            high52w: 44.9740635;
            lowAllTime: 0.41899755;
            highAllTime: 44.9740635;
            lowAllTimeChangePercentage: 5854.33;
            highAllTimeChangePercentage: -44.53;
            lowAllTimeTimestamp: "2020-09-17T00:00:00.000Z";
            highAllTimeTimestamp: "2021-05-03T04:21:19.000Z";
            lowYesterday: 23.20665376766334;
            highYesterday: 25.689641354847424;
            openYesterday: 23.468377493548978;
            closeYesterday: 24.674861084730175;
            priceChangePercentageYesterday: 5.14;
            volumeYesterday: 671655138.08;
            tvl: 4872078155.4516945;
            tvlRatio: 3.13205065;
            turnover: 0.04437581;
            ytdPriceChangePercentage: 426.7566;
            roi: 0;
            status: "";
          };
          platforms?: [
            {
              contractId: 1027;
              contractAddress: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";
              contractPlatform: "Ethereum";
              contractPlatformId: 1;
              contractChainId: 1;
              contractRpcUrl: ["https://bsc-dataseed1.binance.org", "https://bsc-dataseed.binance.org/", "https://bsc-dataseed1.binance.org:443"];
              contractNativeCurrencyName: "Ethereum";
              contractNativeCurrencySymbol: "ETH";
              contractNativeCurrencyDecimals: 18;
              contractBlockExplorerUrl: "https://etherscan.io";
              contractExplorerUrl: "https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";
              contractDecimals: 18;
              platformCryptoId: 1027;
            },
            {
              contractId: 1839;
              contractAddress: "0xbf5140a22578168fd562dccf235e5d43a02ce9b1";
              contractPlatform: "Binance Smart Chain (BEP20)";
              contractPlatformId: 14;
              contractChainId: 56;
              contractRpcUrl: ["https://bsc-dataseed1.binance.org", "https://bsc-dataseed.binance.org/", "https://bsc-dataseed1.binance.org:443"];
              contractNativeCurrencyName: "Binance Chain Native Token";
              contractNativeCurrencySymbol: "BNB";
              contractNativeCurrencyDecimals: 18;
              contractBlockExplorerUrl: "https://bscscan.com/";
              contractExplorerUrl: "https://bscscan.com/token/0xbf5140a22578168fd562dccf235e5d43a02ce9b1";
              contractDecimals: 18;
              platformCryptoId: 1839;
            },
            {
              contractId: 2502;
              contractAddress: "0x22c54ce8321a4015740ee1109d9cbc25815c46e6";
              contractPlatform: "Heco";
              contractPlatformId: 19;
              contractChainId: 128;
              contractRpcUrl: ["https://http-mainnet.hecochain.com", " https://http-mainnet-node.huobichain.com"];
              contractNativeCurrencyName: "Huobi ECO Chain Native Token";
              contractNativeCurrencySymbol: "HT";
              contractNativeCurrencyDecimals: 18;
              contractBlockExplorerUrl: "https://hecoinfo.com/";
              contractExplorerUrl: "https://hecoinfo.com/token/0x22c54ce8321a4015740ee1109d9cbc25815c46e6";
              contractDecimals: 18;
              platformCryptoId: 2502;
            },
            {
              contractId: 5601;
              contractAddress: "0x4537e328bf7e4efa29d05caea260d7fe26af9d74";
              contractPlatform: "Xdai chain";
              contractPlatformId: 20;
              contractChainId: 100;
              contractRpcUrl: ["https://rpc.xdaichain.com"];
              contractNativeCurrencyName: "xDAI";
              contractNativeCurrencySymbol: "xDAI";
              contractNativeCurrencyDecimals: 18;
              contractBlockExplorerUrl: "https://blockscout.com/xdai/mainnet/";
              contractExplorerUrl: "https://blockscout.com/xdai/mainnet/tokens/0x4537e328bf7e4efa29d05caea260d7fe26af9d74";
              contractDecimals: 18;
              platformCryptoId: 5601;
            },
            {
              contractId: 3890;
              contractAddress: "0xb33eaad8d922b1083446dc23f610c2567fb5180f";
              contractPlatform: "Polygon";
              contractPlatformId: 25;
              contractChainId: 137;
              contractRpcUrl: ["https://rpc-mainnet.maticvigil.com"];
              contractNativeCurrencyName: "MATIC";
              contractNativeCurrencySymbol: "MATIC";
              contractNativeCurrencyDecimals: 18;
              contractBlockExplorerUrl: "https://polygonscan.com";
              contractExplorerUrl: "https://polygonscan.com/token/0xb33eaad8d922b1083446dc23f610c2567fb5180f";
              contractDecimals: 18;
              platformCryptoId: 3890;
            },
            {
              contractId: 5805;
              contractAddress: "0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580";
              contractPlatform: "Avalanche C-Chain";
              contractPlatformId: 28;
              contractChainId: -1;
              contractRpcUrl: [];
              contractNativeCurrencyName: "";
              contractNativeCurrencySymbol: "";
              contractNativeCurrencyDecimals: -1;
              contractBlockExplorerUrl: "";
              contractExplorerUrl: "";
              contractDecimals: 18;
              platformCryptoId: 5805;
            },
            {
              contractId: 5802;
              contractAddress: "0x009be848df92a400da2f217256c88d1a9b1a0304f9b3e90991a67418e1d3b08c";
              contractPlatform: "Sora";
              contractPlatformId: 58;
              contractChainId: -1;
              contractRpcUrl: [];
              contractNativeCurrencyName: "";
              contractNativeCurrencySymbol: "";
              contractNativeCurrencyDecimals: -1;
              contractBlockExplorerUrl: "";
              contractExplorerUrl: "";
              contractDecimals: 18;
              platformCryptoId: 5802;
            }
          ];
          relatedCoins?: [
            {
              id: 109;
              name: "DigiByte";
              slug: "digibyte";
              price: 0.04865535281637;
              priceChangePercentage24h: 2.24487451;
              priceChangePercentage7d: -3.9591441;
            },
            {
              id: 1376;
              name: "Neo";
              slug: "neo";
              price: 45.03916381174619;
              priceChangePercentage24h: 1.41489327;
              priceChangePercentage7d: -1.75144726;
            },
            {
              id: 2130;
              name: "Enjin Coin";
              slug: "enjin-coin";
              price: 1.58714226259833;
              priceChangePercentage24h: 2.79886017;
              priceChangePercentage7d: -2.39944031;
            },
            {
              id: 825;
              name: "Tether";
              slug: "tether";
              price: 0.99989163556014;
              priceChangePercentage24h: 0.00924947;
              priceChangePercentage7d: -0.06119039;
            },
            {
              id: 2586;
              name: "Synthetix";
              slug: "synthetix-network-token";
              price: 9.54039166803198;
              priceChangePercentage24h: 2.58702091;
              priceChangePercentage7d: -4.57428926;
            },
            {
              id: 3911;
              name: "Ocean Protocol";
              slug: "ocean-protocol";
              price: 0.77619824693038;
              priceChangePercentage24h: 2.58143944;
              priceChangePercentage7d: -0.72230708;
            },
            {
              id: 2132;
              name: "Powerledger";
              slug: "power-ledger";
              price: 0.38552994161444;
              priceChangePercentage24h: 3.24803528;
              priceChangePercentage7d: 2.61878063;
            },
            {
              id: 2700;
              name: "Celsius";
              slug: "celsius";
              price: 5.62783851254513;
              priceChangePercentage24h: -0.28259162;
              priceChangePercentage7d: -2.64417293;
            },
            {
              id: 1567;
              name: "Nano";
              slug: "nano";
              price: 5.32617084358987;
              priceChangePercentage24h: 3.80389227;
              priceChangePercentage7d: 1.63814299;
            }
          ];
          relatedExchanges?: [
            {
              id: 270;
              name: "Binance";
              slug: "binance";
            },
            {
              id: 102;
              name: "Huobi Global";
              slug: "huobi-global";
            },
            {
              id: 633;
              name: "Mandala Exchange";
              slug: "mandala";
            },
            {
              id: 294;
              name: "OKEx";
              slug: "okex";
            },
            {
              id: 524;
              name: "FTX";
              slug: "ftx";
            }
          ];
          wallets?: [
            {
              id: 9017;
              name: "Ledger";
              tier: 1;
              url: "https://www.ledger.com/";
              chains: "BTC,ETH,NEO,ZEC,QTUM,BAN";
              types: "hardware";
              introduction: "";
              star: 3;
              security: 4;
              easyToUse: 3;
              decentration: false;
              focusNumber: 0;
              rank: 2;
              logo: "9017.png";
              multipleChain: true;
            },
            {
              id: 9022;
              name: "Trust Wallet";
              tier: 1;
              url: "https://www.trustwallet.com/";
              chains: "ETH";
              types: "app,trade";
              introduction: "";
              star: 2;
              security: 3;
              easyToUse: 3;
              decentration: true;
              focusNumber: 0;
              rank: 1000008;
              logo: "9022.png";
              multipleChain: true;
            },
            {
              id: 9025;
              name: "MetaMask";
              tier: 1;
              url: "https://metamask.io/";
              chains: "ETH,ETZ";
              types: "pc";
              introduction: "";
              star: 1;
              security: 2;
              easyToUse: 4;
              decentration: false;
              focusNumber: 0;
              rank: 1000013;
              logo: "9025.png";
              multipleChain: true;
            },
            {
              id: 9016;
              name: "Coinbase";
              tier: 1;
              url: "https://wallet.coinbase.com/";
              chains: "BTC,ETH,LTC,BCH,ETC";
              types: "app,pc,trade";
              introduction: "";
              star: 3;
              security: 4;
              easyToUse: 1;
              decentration: true;
              focusNumber: 1;
              logo: "9016.png";
              multipleChain: false;
            },
            {
              id: 9138;
              name: "Safepal";
              url: "https://www.safepal.io/";
              chains: "DOT";
              types: "";
              introduction: "";
              star: 0;
              security: 0;
              easyToUse: 0;
              decentration: false;
              focusNumber: 0;
              logo: "9138.png";
              multipleChain: false;
            },
            {
              id: 9152;
              name: "Binance Chain Wallet";
              url: "https://www.binance.org/en/blog/binance-extension-wallet/";
              chains: "BNB";
              types: "";
              introduction: "";
              star: 0;
              security: 0;
              easyToUse: 0;
              decentration: false;
              focusNumber: 0;
              logo: "9152.png";
              multipleChain: false;
            },
            {
              id: 9188;
              name: "Atomic wallet";
              url: "https://atomicwallet.io/";
              chains: "";
              types: "";
              introduction: "";
              star: 0;
              security: 0;
              easyToUse: 0;
              decentration: false;
              focusNumber: 0;
              logo: "9188.png";
              multipleChain: false;
            }
          ];
          isAudited: false;
          holders?: {
            holderCount: 275987;
            dailyActive: 4507;
            holderList: [
              {
                address: "0x1a9c8182c09f50c8318d769245bea52c32be35bc";
                balance: 173403155.2047184;
                share: 17.34;
              },
              {
                address: "0xe3953d9d317b834592ab58ab2c7a6ad22b54075d";
                balance: 126077347.79528157;
                share: 12.61;
              },
              {
                address: "0x4b4e140d1f131fdad6fb59c13af796fd194e4135";
                balance: 86000000;
                share: 8.6;
              },
              {
                address: "0x3d30b1ab88d487b0f3061f40de76845bec3f1e94";
                balance: 43000000;
                share: 4.3;
              },
              {
                address: "0x47173b170c64d16393a52e6c480b3ad8c302ba1e";
                balance: 24679867.136918;
                share: 2.47;
              },
              {
                address: "0x0ec9e8aa56e0425b60dee347c8efbad959579d0f";
                balance: 21532653.714;
                share: 2.15;
              },
              {
                address: "0x090d4613473dee047c3f2706764f49e0821d256e";
                balance: 16779550.890833;
                share: 1.68;
              },
              {
                address: "0x7d2d43e63666f45b40316b44212325625dbaeb40";
                balance: 15281989.99;
                share: 1.53;
              },
              {
                address: "0x878f0822a9e77c1dd7883e543747147be8d63c3b";
                balance: 15269572.15;
                share: 1.53;
              },
              {
                address: "0x7d325a9c8f10758188641fe91cfd902499edc782";
                balance: 15000000;
                share: 1.5;
              },
              {
                address: "0x5f246d7d19aa612d6718d27c1da1ee66859586b0";
                balance: 12800000;
                share: 1.28;
              },
              {
                address: "0xa7e2067268901e118bbe0c132c17959c9ab929b6";
                balance: 9000000;
                share: 0.9;
              },
              {
                address: "0x030d6830dc8ff125850390da620fa3e12decd437";
                balance: 9000000;
                share: 0.9;
              },
              {
                address: "0x69c5888ecd21287fbdac5a43d1558bf73c51e38b";
                balance: 9000000;
                share: 0.9;
              },
              {
                address: "0x973c877d5636e5cc6e15533ec440d52f299cdf9b";
                balance: 9000000;
                share: 0.9;
              },
              {
                address: "0xa371d95184127bf81d1e7281733eb94041e7eb8e";
                balance: 9000000;
                share: 0.9;
              },
              {
                address: "0x3cc3bf9b66f424a1632fac87b941cda71ad491b6";
                balance: 9000000;
                share: 0.9;
              },
              {
                address: "0x177df24addc9a216f927d2a894ab0b6eec59eb09";
                balance: 9000000;
                share: 0.9;
              },
              {
                address: "0x63b53181bdc48a9fbf1d23d461d3cfd82b0abc83";
                balance: 9000000;
                share: 0.9;
              },
              {
                address: "0xf731a187cb77d278b817939ce874741b074e3de8";
                balance: 9000000;
                share: 0.9;
              },
              {
                address: "0xa29b574fea8d85b6c2a1b7071e6160212cf94097";
                balance: 9000000;
                share: 0.9;
              },
              {
                address: "0x1c1f02f1640e52b313f2d504b3c0c7ee8ad61108";
                balance: 8000000;
                share: 0.8;
              },
              {
                address: "0xb045fa6893b26807298e93377cbb92d7f37b19eb";
                balance: 8000000;
                share: 0.8;
              },
              {
                address: "0xe93381fb4c4f14bda253907b18fad305d799241a";
                balance: 7469841.092924626;
                share: 0.75;
              },
              {
                address: "0x9c980d9e5c46eaf6c1e7ddd2dcd30c1fcd9875d7";
                balance: 7032461;
                share: 0.7;
              },
              {
                address: "0x35a18000230da775cac24873d00ff85bccded550";
                balance: 7012860.135443875;
                share: 0.7;
              },
              {
                address: "0x1be0217274ccb1d13cfb53c5d5f453e29ab2a66f";
                balance: 6300000;
                share: 0.63;
              },
              {
                address: "0xbf0d1c27bd8a05c5d7ac46f291e97e291eb5885e";
                balance: 6178635.4516;
                share: 0.62;
              },
              {
                address: "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8";
                balance: 6000000;
                share: 0.6;
              },
              {
                address: "0x50796ba0f82eef414d7b609bbdd8a5c9a785e77d";
                balance: 5500000;
                share: 0.55;
              },
              {
                address: "0x903ca2a612326c7ea3bee9362ba8e8b1321cd14b";
                balance: 5440998.08854912;
                share: 0.54;
              },
              {
                address: "0xc52f8618ef7986ed7b47b4337b2249dea857ae4e";
                balance: 5109427.85;
                share: 0.51;
              },
              {
                address: "0x89707bbfddab8f1539720ed9decc853ffe71ec2b";
                balance: 5000000;
                share: 0.5;
              },
              {
                address: "0x7f256695627c44e423139ec172393ecdc8a3de24";
                balance: 5000000;
                share: 0.5;
              },
              {
                address: "0xa16d450b6f3f6f7c142c5de3f65d2b0230446e01";
                balance: 5000000;
                share: 0.5;
              },
              {
                address: "0xbb0dd3b2745fa1219ea5a305bcba8467ffc33133";
                balance: 5000000;
                share: 0.5;
              },
              {
                address: "0xf977814e90da44bfa03b6295a0616a897441acec";
                balance: 4776301.58191411;
                share: 0.48;
              },
              {
                address: "0x4d7b61fce7716f2d91872a21ba131365273baec4";
                balance: 4750000;
                share: 0.48;
              },
              {
                address: "0xb47544788024b497a7998671bd5aedca566921fc";
                balance: 4500000;
                share: 0.45;
              },
              {
                address: "0xd993a7685fd22483e801404f8cb57981190e5bde";
                balance: 4467856.057;
                share: 0.45;
              },
              {
                address: "0xa4c9492d5f1578911756a4f8463b45482deae37a";
                balance: 4375454.111;
                share: 0.44;
              },
              {
                address: "0xb9d7cb55f463405cdfbe4e90a6d2df01c2b92bf1";
                balance: 4339512.023003066;
                share: 0.43;
              },
              {
                address: "0x6a18a2c1324e6ae2895c7391f73edd0bd4bc4fb1";
                balance: 4311814.286;
                share: 0.43;
              },
              {
                address: "0x4c6007e38ce164ed80ff8ff94192225fcdac68cd";
                balance: 4220513.625188861;
                share: 0.42;
              },
              {
                address: "0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503";
                balance: 3700000;
                share: 0.37;
              },
              {
                address: "0xa29332b560103d52f758b978e0661420a9d40cb5";
                balance: 3400634.58282037;
                share: 0.34;
              },
              {
                address: "0x2ec96c9af82ddd650c0776cb0da93beaa7ce2a10";
                balance: 3250000.06378162;
                share: 0.33;
              },
              {
                address: "0xae7559ccd15208c622e8313bbf650f395fc051c2";
                balance: 3250000;
                share: 0.33;
              },
              {
                address: "0x2fd0eb27494d7a336574919fc670c05adbf65c80";
                balance: 3100000;
                share: 0.31;
              },
              {
                address: "0x4fa9a9ca290dd01b688c9ed2c1cc61dff0b01bba";
                balance: 3000000;
                share: 0.3;
              },
              {
                address: "0x98d3ed59c5b2ea49b91138890b5b4883f067be1b";
                balance: 3000000;
                share: 0.3;
              },
              {
                address: "0x5624ed8a6c7eb91cba94a02eeb2d1c24dec6732d";
                balance: 2900000.04994;
                share: 0.29;
              },
              {
                address: "0x7fd805e2852113e8167c701b43ead86364e800b9";
                balance: 2531498;
                share: 0.25;
              },
              {
                address: "0xb93b36f305464761abdbd01d7731d4ba496fb6fb";
                balance: 2500001;
                share: 0.25;
              },
              {
                address: "0xb944020ec109f54b9899249661cfc09049834a95";
                balance: 2500000;
                share: 0.25;
              },
              {
                address: "0x201d252fa4dd34744162d1dbc9063e2b6fc7ab01";
                balance: 2500000;
                share: 0.25;
              },
              {
                address: "0xe8043f57c4626ba6b5892b89f95bb357ee38be9e";
                balance: 2500000;
                share: 0.25;
              },
              {
                address: "0xe4dce5888216b3d7595764c39ba31c1d910f6a66";
                balance: 2500000;
                share: 0.25;
              },
              {
                address: "0xdb6f3e2d9670d45b45082a8a8aea0576305d05c3";
                balance: 2500000;
                share: 0.25;
              },
              {
                address: "0x3e0d86c74380c90063724f4c490fddce4387d22b";
                balance: 2500000;
                share: 0.25;
              },
              {
                address: "0x51649d78ab235a934ae5c213d741fc58f2a37f91";
                balance: 2500000;
                share: 0.25;
              },
              {
                address: "0x8608343b7987d903bb720d9425a8be54de48f1d3";
                balance: 2500000;
                share: 0.25;
              },
              {
                address: "0x81451ea5e6ea25829a4af736efceb9e74e09a1b3";
                balance: 2500000;
                share: 0.25;
              },
              {
                address: "0x1442b96bfee50deee97c3d5804890adc053ea7d1";
                balance: 2500000;
                share: 0.25;
              },
              {
                address: "0xe516d61ed4415f24606ddc14b3445dabf39d3498";
                balance: 2500000;
                share: 0.25;
              },
              {
                address: "0x7cf4077393b8846bdcf60a5890878fc979c39a0a";
                balance: 2500000;
                share: 0.25;
              },
              {
                address: "0x4c262bdb0ed4d40f1a7b85075762d6058a3b6fed";
                balance: 2500000;
                share: 0.25;
              },
              {
                address: "0x2c03d6aba12b3f33655184488492f164aeff6098";
                balance: 2493363.096465444;
                share: 0.25;
              },
              {
                address: "0x9642162ce222add150ff78b2c5975b22f5b2b646";
                balance: 2427206.25508397;
                share: 0.24;
              },
              {
                address: "0x6cc5f688a315f3dc28a7781717a9a798a59fda7b";
                balance: 2426231.827737492;
                share: 0.24;
              },
              {
                address: "0xae5065a42b422c5c53ee48c034247591960233b4";
                balance: 2300000;
                share: 0.23;
              },
              {
                address: "0x0739e7abe029434c4357e247a397d80b64301ef9";
                balance: 2254984.40178;
                share: 0.23;
              },
              {
                address: "0x8328a42a583d4812268c4dd63ae2f77f37a6b4f3";
                balance: 2149000.16150653;
                share: 0.21;
              },
              {
                address: "0x2d5ec2c21e343389c04613030194094105f7872c";
                balance: 2080000;
                share: 0.21;
              },
              {
                address: "0xd3d2e2692501a5c9ca623199d38826e513033a17";
                balance: 2073804.1901565115;
                share: 0.21;
              },
              {
                address: "0x1d42064fc4beb5f8aaf85f4617ae8b3b5b8bd801";
                balance: 2056027.7036809898;
                share: 0.21;
              },
              {
                address: "0x5de917023f7d8f0732e6e6de9b65a31dfa070c0c";
                balance: 2000000;
                share: 0.2;
              },
              {
                address: "0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b";
                balance: 1976221.5572395585;
                share: 0.2;
              },
              {
                address: "0xa51632ab150336d77ed8b3d4b107dfaedd223b23";
                balance: 1855532;
                share: 0.19;
              },
              {
                address: "0x00f58119e84ca2bbbb64af698cfcf1ba123d8aeb";
                balance: 1850000;
                share: 0.19;
              },
              {
                address: "0x887bdd7792398626837bdcc48b20423ce1d305cc";
                balance: 1600000;
                share: 0.16;
              },
              {
                address: "0x087256f28f0d9762b89d4549301df4b7e7b5cda3";
                balance: 1600000;
                share: 0.16;
              },
              {
                address: "0x4f71a116b1e3d7cd0f4cd99fba7c7d8908b2323c";
                balance: 1598760.5087;
                share: 0.16;
              },
              {
                address: "0x8d6f396d210d385033b348bcae9e4f9ea4e045bd";
                balance: 1575001;
                share: 0.16;
              },
              {
                address: "0xd268046fe47254e3da0fb3f0221cf4a5afb2e37c";
                balance: 1521000;
                share: 0.15;
              },
              {
                address: "0xf319b6a95e29122967892f13d3320d21611a0a65";
                balance: 1496279.201632703;
                share: 0.15;
              },
              {
                address: "0x6f0287171b9880bc42aea7c6809900c396decd36";
                balance: 1434999.021701;
                share: 0.14;
              },
              {
                address: "0x3bc3a58b4fc1cbe7e98bb4ab7c99535e8ba9b8f1";
                balance: 1422945.1930125982;
                share: 0.14;
              },
              {
                address: "0xe79057088a15ac8c9c8bec3b90bd9891a1b3af51";
                balance: 1352531.787400661;
                share: 0.14;
              },
              {
                address: "0x8def8a005b64ca5c3b0c90a6205dd1c5105bf29e";
                balance: 1328082.877302;
                share: 0.13;
              },
              {
                address: "0xd7ed7c6f3172cf28a84ca20a3319f2dc07605162";
                balance: 1213603.14588397;
                share: 0.12;
              },
              {
                address: "0x404de972e8138c4982ace8bdd7fc0e755de33afd";
                balance: 1153693.62497256;
                share: 0.12;
              },
              {
                address: "0x78686a39a52865b95807bcabd6fc4d34decf0764";
                balance: 1146007.71138978;
                share: 0.11;
              },
              {
                address: "0x2faf487a4414fe77e2327f0bf4ae2a264a776ad2";
                balance: 1123276.8172467174;
                share: 0.11;
              },
              {
                address: "0xa4628eb4a74ee7aa15708f1ec0d7f6912b7fd0cf";
                balance: 1114774.67637926;
                share: 0.11;
              },
              {
                address: "0xa929022c9107643515f5c777ce9a910f0d1e490c";
                balance: 1110903.3;
                share: 0.11;
              },
              {
                address: "0x04ae7e5019555dd1d54fb8c482b0a399ef80cc7e";
                balance: 1004713.81473211;
                share: 0.1;
              },
              {
                address: "0xce62aa2fe0bfd82b7ec3457ffb746df396b818eb";
                balance: 1000675.94519054;
                share: 0.1;
              },
              {
                address: "0x55fc36e37ee5c04df5803a9a48b9134b26dd167c";
                balance: 1000000;
                share: 0.1;
              },
              {
                address: "0x9c91f0d34c2582105d78ed3eb87931526cd37ddf";
                balance: 1000000;
                share: 0.1;
              }
            ];
            topTenHolderRatio: 53.71;
            topTwentyHolderRatio: 63.09;
            topFiftyHolderRatio: 78.75;
            topHundredHolderRatio: 88.47;
          };
          selfReportedTags: [];
        };
        trendingList: [
          {
            id: 11541;
            dataType: 2;
            name: "Ariva";
            symbol: "ARV";
            slug: "ariva";
            rank: 599;
            status: "active";
            marketCap: 43634335.7;
            priceChange: {
              price: 0.00085501611255;
              priceChange24h: -22.75947212;
              priceChange7d: 315.16032353;
              priceChange30d: 2819.55414451;
              volume24h: 15387641.94780427;
            };
          },
          {
            id: 12325;
            dataType: 2;
            name: "MarsRise";
            symbol: "MARSRISE";
            slug: "marsrise";
            rank: 2808;
            status: "active";
            marketCap: 0;
            priceChange: {
              price: 7.40785e-9;
              priceChange24h: -9.00236147;
              priceChange7d: 404.04210724;
              priceChange30d: 0;
              volume24h: 3879791.94314455;
            };
          },
          {
            id: 12180;
            dataType: 2;
            name: "Rainbow Token";
            symbol: "RAINBOW";
            slug: "rainbow-token";
            rank: 1119;
            status: "active";
            marketCap: 7671241.21;
            priceChange: {
              price: 8.91592e-9;
              priceChange24h: 101.20762847;
              priceChange7d: 57.81058543;
              priceChange30d: 0;
              volume24h: 2172678.007175;
            };
          },
          {
            id: 12630;
            dataType: 2;
            name: "SIMP Token";
            symbol: "SIMP";
            slug: "simp-token";
            rank: 2817;
            status: "active";
            marketCap: 0;
            priceChange: {
              price: 0.00004633042329;
              priceChange24h: 153.91295781;
              priceChange7d: 0;
              priceChange30d: 0;
              volume24h: 3379005.38206804;
            };
          },
          {
            id: 11933;
            dataType: 2;
            name: "HalfPizza";
            symbol: "PIZA";
            slug: "halfpizza";
            rank: 2725;
            status: "active";
            marketCap: 0;
            priceChange: {
              price: 0.00019654072651;
              priceChange24h: 1.16966159;
              priceChange7d: -3.78956899;
              priceChange30d: 0;
              volume24h: 14744576.99445913;
            };
          }
        ];
        alexandriaArticles: [
          {
            title: "SHIBA INU Surges 348% in One Week";
            url: "https://coinmarketcap.com/alexandria/article/shiba-inu-surges-348-in-one-week";
            publishedOn: "2021-10-07T06:42:54.000Z";
            author: "Connor Sephton";
            mainImage: "https://academy-public.coinmarketcap.com/optimized-uploads/1fc33dd3ef21492890e2a702ad88620f.jpg";
          },
          {
            title: "Europe is Now World's Largest Cryptocurrency Market";
            url: "https://coinmarketcap.com/alexandria/article/europe-is-now-world-s-largest-cryptocurrency-market";
            publishedOn: "2021-09-30T10:36:34.000Z";
            author: "Leo Jakobson";
            mainImage: "https://academy-public.coinmarketcap.com/optimized-uploads/b19d9146914647d9906c89ac66e78e4a.jpg";
          },
          {
            title: "A Deep Dive Into How the Top 10 DAOs Work";
            url: "https://coinmarketcap.com/alexandria/article/a-deep-dive-into-how-the-top-daos-work";
            publishedOn: "2021-09-14T00:00:00.000Z";
            author: "Andrey Sergeenkov";
            mainImage: "https://uploads-ssl.webflow.com/5f3306add5c511ca4cf17da9/60be1fd9bf2c5751fa87a729_DAO_v2.jpg";
          },
          {
            title: "What Are Sandwich Attacks in DeFi — and How Can You Avoid Them?";
            url: "https://coinmarketcap.com/alexandria/article/what-are-sandwich-attacks-in-defi-and-how-can-you-avoid-them";
            publishedOn: "2021-09-14T00:00:00.000Z";
            author: "Andrey Sergeenkov";
            mainImage: "https://uploads-ssl.webflow.com/5f3306add5c511ca4cf17da9/610c0935090ddd94bac70c82_Flash%20Loans.png";
          },
          {
            title: "Airdrop Analysis by Flipside Crypto: FEI, UNI and 1inch";
            url: "https://coinmarketcap.com/alexandria/article/airdrop-analysis-by-flipside-crypto-fei-uni-and-1inch";
            publishedOn: "2021-08-31T00:00:00.000Z";
            author: "Brendan Murray";
            mainImage: "https://uploads-ssl.webflow.com/5f3306add5c511ca4cf17da9/6062f50a0b95f64e287f6d65_Flipside%20Crypto%20(purple).jpg";
          }
        ];
        defaultAlexandriaArticles: false;
        isMobileView: false;
        gaPageviewProps: {
          section: "Cryptocurrency Details";
          subSection: "Currencies";
        };
        hasAirdrop: false;
        hasProjectinfo: true;
        hasPricePredictionData: true;
        hasEventHistory: true;
        namespacesRequired: ["common", "coin-detail-page"];
        slug: "uniswap";
        fiatPage: false;
        fiatPrice: "";
        historicalData: {
          data: {
            id: 7083;
            name: "Uniswap";
            symbol: "UNI";
            quotes: [
              {
                timeOpen: "2021-10-07T00:00:00.000Z";
                timeClose: "2021-10-07T23:59:59.999Z";
                timeHigh: "2021-10-07T14:20:09.000Z";
                timeLow: "2021-10-07T01:35:09.000Z";
                quote: {
                  open: 25.2574978829;
                  high: 26.2789465003;
                  low: 24.5189750162;
                  close: 25.5351847373;
                  volume: 417397075.52;
                  marketCap: 15618435481.47;
                  timestamp: "2021-10-07T23:59:59.999Z";
                };
              },
              {
                timeOpen: "2021-10-08T00:00:00.000Z";
                timeClose: "2021-10-08T23:59:59.999Z";
                timeHigh: "2021-10-08T11:02:09.000Z";
                timeLow: "2021-10-08T23:55:09.000Z";
                quote: {
                  open: 25.5253163823;
                  high: 26.0658066349;
                  low: 24.671158842;
                  close: 24.7679098595;
                  volume: 368392614.43;
                  marketCap: 15149136618;
                  timestamp: "2021-10-08T23:59:59.999Z";
                };
              },
              {
                timeOpen: "2021-10-09T00:00:00.000Z";
                timeClose: "2021-10-09T23:59:59.999Z";
                timeHigh: "2021-10-09T13:36:19.000Z";
                timeLow: "2021-10-09T02:16:09.000Z";
                quote: {
                  open: 24.767959892;
                  high: 25.6457695284;
                  low: 24.5911604216;
                  close: 25.1321668701;
                  volume: 291060424.25;
                  marketCap: 15371932132.4;
                  timestamp: "2021-10-09T23:59:59.999Z";
                };
              },
              {
                timeOpen: "2021-10-10T00:00:00.000Z";
                timeClose: "2021-10-10T23:59:59.999Z";
                timeHigh: "2021-10-10T06:19:10.000Z";
                timeLow: "2021-10-10T23:52:10.000Z";
                quote: {
                  open: 25.1301896905;
                  high: 25.9855143874;
                  low: 24.1445564895;
                  close: 24.2523396102;
                  volume: 354545523.61;
                  marketCap: 14833791310.82;
                  timestamp: "2021-10-10T23:59:59.999Z";
                };
              },
              {
                timeOpen: "2021-10-11T00:00:00.000Z";
                timeClose: "2021-10-11T23:59:59.999Z";
                timeHigh: "2021-10-11T08:17:09.000Z";
                timeLow: "2021-10-11T21:18:20.000Z";
                quote: {
                  open: 24.1969806122;
                  high: 25.0473986757;
                  low: 23.5839526727;
                  close: 24.1553261061;
                  volume: 326615163.78;
                  marketCap: 14774453609.89;
                  timestamp: "2021-10-11T23:59:59.999Z";
                };
              },
              {
                timeOpen: "2021-10-12T00:00:00.000Z";
                timeClose: "2021-10-12T23:59:59.999Z";
                timeHigh: "2021-10-12T00:00:14.000Z";
                timeLow: "2021-10-12T12:41:09.000Z";
                quote: {
                  open: 24.1954548261;
                  high: 24.1954548261;
                  low: 22.340465461;
                  close: 23.4663765436;
                  volume: 323630449.5;
                  marketCap: 14353061933.97;
                  timestamp: "2021-10-12T23:59:59.999Z";
                };
              },
              {
                timeOpen: "2021-10-13T00:00:00.000Z";
                timeClose: "2021-10-13T23:59:59.999Z";
                timeHigh: "2021-10-13T05:51:16.000Z";
                timeLow: "2021-10-13T05:40:09.000Z";
                quote: {
                  open: 23.4683774935;
                  high: 25.6896413548;
                  low: 23.2066537677;
                  close: 24.6748610847;
                  volume: 671655138.08;
                  marketCap: 15092223918.88;
                  timestamp: "2021-10-13T23:59:59.999Z";
                };
              }
            ];
          };
          status: {
            timestamp: "2021-10-14T04:11:47.361Z";
            error_code: "0";
            error_message: "SUCCESS";
            elapsed: "2";
            credit_count: 0;
          };
        };
        appCurrency: "usd";
        reqLang: "en";
        globalMetrics: {
          numCryptocurrencies: 12688;
          numMarkets: 48145;
          activeExchanges: 412;
          marketCap: 2380617829886.4243;
          marketCapChange: 2.98653;
          totalVol: 115504249059.65;
          stablecoinVol: 91664694500.53412;
          stablecoinChange: 12.196977874559;
          totalVolChange: 10.557152;
          defiVol: 15239119929.924322;
          defiChange: 14.23016290391;
          defiMarketCap: 132525467398.34784;
          derivativesVol: 206580570090.46857;
          derivativeChange: 12.645413033093;
          btcDominance: 45.895550902879;
          btcDominanceChange: 0.049522162879;
          ethDominance: 18.014572637965;
          etherscanGas: {
            lastBlock: "13414149";
            slowPrice: "97";
            slowConfirmationTime: "45";
            standardPrice: "97";
            standardConfirmationTime: "45";
            fastPrice: "97";
            fastConfirmationTime: "45";
          };
        };
        dailyVideos: [
          {
            url: "https://youtu.be/2vglyr944L4";
            date: "2021-10-13T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/5RB9m2GPhSg";
            date: "2021-10-11T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/UgCBvtvaA6U";
            date: "2021-10-08T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/-ANkdcWQp5Q";
            date: "2021-10-07T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/I4Lfvfli_hQ";
            date: "2021-10-06T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/t7HiZ6tLeaw";
            date: "2021-10-05T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/UgCBvtvaA6U";
            date: "2021-10-01T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/pL4lWRowp7M";
            date: "2021-09-27T00:00:00.000Z";
          },
          {
            url: "https://www.youtube.com/watch?v=Ra-h3TfH3yk";
            date: "2021-09-24T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/AZYD8PF0RZg";
            date: "2021-09-23T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/RxvmeOb465U";
            date: "2021-09-22T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/KK0f9QzK0f8";
            date: "2021-09-21T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/i2MWdnS4qW0";
            date: "2021-09-20T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/NI-ee_nR_bQ";
            date: "2021-09-17T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/YHtxP4JNfRo";
            date: "2021-09-16T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/c28QNMW2hhk";
            date: "2021-09-15T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/4XGPiGSqNq8";
            date: "2021-09-14T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/5fLT7sneb9g";
            date: "2021-09-13T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/JtqZ1hA7wVo";
            date: "2021-09-08T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/EOyac2kClyQ";
            date: "2021-08-31T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/V23gVi2gBLQ";
            date: "2021-08-30T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/qqjN-9RlNa0";
            date: "2021-08-27T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/2VJIAqMSoMg";
            date: "2021-08-26T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/pVnPdwJUqxU";
            date: "2021-08-25T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/_92VQEXqDvM";
            date: "2021-08-24T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/kmorM_RFpt0";
            date: "2021-08-23T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/NaAKJE8emeY";
            date: "2021-08-20T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/5ccR63_I9NI";
            date: "2021-08-19T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/Z6Znhik8CuI";
            date: "2021-08-18T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/g_hdYOmd2NI";
            date: "2021-08-17T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/VdwovFdVfm0";
            date: "2021-08-16T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/Bv7WGwlTX1w";
            date: "2021-08-13T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/kDEcCEODcRY";
            date: "2021-08-12T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/ZYs8TSNLCq8";
            date: "2021-08-11T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/vJuTTFXpPdk";
            date: "2021-08-10T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/y4XlO8jnsHw";
            date: "2021-08-09T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/L73oujC0oxU";
            date: "2021-08-06T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/r_lSm-GeTeY";
            date: "2021-08-05T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/qJrp1Wr5BXM";
            date: "2021-08-04T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/I9omctabN5s";
            date: "2021-08-03T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/o3SvhtFDdD0";
            date: "2021-08-02T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/CQPrpGQF6Gg";
            date: "2021-07-30T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/ejZQ5PtQEQE";
            date: "2021-07-29T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/riZbXYxTiE0";
            date: "2021-07-28T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/KVNu0HbujMs";
            date: "2021-07-27T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/gJXAjib3ljQ";
            date: "2021-07-26T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/906D85H8Haw";
            date: "2021-07-23T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/poY9r-0NjUI";
            date: "2021-07-22T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/t-D2c3ZD99w";
            date: "2021-07-21T00:00:00.000Z";
          },
          {
            url: "https://youtu.be/5vmPiYC27Rk";
            date: "2021-07-20T00:00:00.000Z";
          }
        ];
        pageSize: 100;
      };
      isChina: false;
    };
  };
  page: "/currencies";
  query: {
    cryptocurrencySlug: "uniswap";
    section: "";
  };
  buildId: "b04527d40983a3870078151839957bfe41784daa";
  assetPrefix: "https://s2.coinmarketcap.com";
  runtimeConfig: {
    localeSubpaths: {
      cs: "cs";
      da: "da";
      de: "de";
      el: "el";
      es: "es";
      fil: "fil";
      fr: "fr";
      hi: "hi";
      hu: "hu";
      id: "id";
      it: "it";
      ja: "ja";
      ko: "ko";
      nl: "nl";
      no: "no";
      pl: "pl";
      "pt-br": "pt-br";
      ro: "ro";
      ru: "ru";
      sk: "sk";
      sv: "sv";
      th: "th";
      tr: "tr";
      uk: "uk";
      vi: "vi";
      "zh-tw": "zh-tw";
      zh: "zh";
    };
  };
  isFallback: false;
  customServer: true;
  gip: true;
  appGip: true;
  scriptLoader: [];
}
