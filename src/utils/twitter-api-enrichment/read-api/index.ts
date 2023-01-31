import testTwitterApi from "./call-twitter-api";

testTwitterApi(
  `/2/users/by/username/gakonst?user.fields=created_at%2Cid%2Clocation%2Cname%2Cprofile_image_url%2Cprotected%2Cpublic_metrics%2Curl%2Cusername%2Cverified%2Cwithheld&expansions=&tweet.fields=`
); // as TwitterApiResponse;

interface TwitterApiResponse {
  data: {
    url: "https://t.co/RWNX8fzAzH";
    name: "Georgios Konstantopoulos";
    verified: false;
    created_at: "2016-11-30T18:27:54.000Z";
    id: "804029200315334656";
    username: "gakonst";
    profile_image_url: "https://pbs.twimg.com/profile_images/1572641772978982913/jbyBq7j7_normal.jpg";
    protected: false;
    public_metrics: {
      followers_count: 78719;
      following_count: 1524;
      tweet_count: 12463;
      listed_count: 1687;
    };
  };
}
