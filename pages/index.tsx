import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";
import { Toaster } from "react-hot-toast";

interface Props {
  tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <main className="grid grid-cols-9">
        <Sidebar />

        <Feed tweets={tweets} />

        <Widget />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const tweets = await fetchTweets();

  return {
    props: {
      tweets,
    },
  };
};
