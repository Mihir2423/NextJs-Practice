import getWikiFunction from "@/lib/getWikiFunction";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Item from "./component/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({
  params: { searchTerm },
}: Props): Promise<Metadata> {
  const wikiData: Promise<SearchResult> = getWikiFunction(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data.query?.pages) {
    notFound();
    return {
      title: "User Not Found",
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

export default async function SearchResultPage({
  params: { searchTerm },
}: Props) {
  const wikiData: Promise<SearchResult> = getWikiFunction(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content
}
