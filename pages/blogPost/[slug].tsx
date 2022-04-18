import React from "react";
import {  GetStaticProps, InferGetStaticPropsType, NextPage} from "next";
import { ParsedUrlQuery } from "querystring";
import * as fs from "fs";
//Set Data type of Data
                          //* Static site generation(ssg)*//
//solve problem of -> Property 'slug' does not exist on type 'ParsedUrlQuery | undefined'
interface IParams extends ParsedUrlQuery {
  slug: string;
}
//Show all blogs in ->blog.tsx page
//NextPage<..> -> set -> blogs type
const blogPost:NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({Blogs}) => {
  return (
    <>
      <article className="BlogPost">
        <h1>{Blogs.title}</h1>
        <hr />
        <p>{Blogs.content}</p>
      </article>
      <style jsx>
        {`
          .BlogPost {
            width: 60%;
            margin: auto;
          }
          .BlogPost p{
            font-family: Arial, Helvetica, sans-serif;
            line-height: 30px;
          }
        `}
      </style>
    </>
  );
};
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-javascript" } }, // slug key determines which paths will be pre-rendered
      { params: { slug: "how-to-learn-nextJs" } },
      { params: { slug: "how-to-learn-python" } },
    ],
    fallback: false,
  };
}

//Set type of context -> :GetServerSidePropsContext (getServerSideProps) -> is a reserve keyword by Next.js
export const getStaticProps: GetStaticProps = async (context)=> {
  //Get each blog -> from blogData
  const { slug } = context.params as IParams; //solve slug -> error IParms
  let Blogs  = await fs.promises.readFile(`ApiData/blogData/${slug}.json`, "utf-8");
  return {
    props: { Blogs:JSON.parse(Blogs) },
  };
};
export default blogPost;
//More info -> https://stackoverflow.com/questions/65078245/how-to-make-next-js-getstaticprops-work-with-typescript
