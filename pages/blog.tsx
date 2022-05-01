import { InferGetServerSidePropsType, NextPage } from "next";
import Link from "next/link";
import Style from "../styles/Blog.module.scss";
import fs from "fs";
type apiDataType = {
  id: number;
  title: string;
  content: string; //* Static site generation(ssg)*//
  author: string;
  slug: string;
};
//Show all blogs in ->blog.tsx page
//NextPage<..> -> set -> blogs type
const blog: NextPage<InferGetServerSidePropsType<typeof getStaticProps>> = ({allBlogs}) => {
  return (
    <main className={Style.Blogs}>
        {allBlogs.map((data) => {
          return (
            <div key={data.id}>
              <Link href={`/blogPost/${data.slug}`} passHref>
                <h2 className={Style.Blogs__item}>{data.title}</h2>
              </Link>
              <p>{data.content.substring(0, 267)}...</p>
            </div>
          );
        })}
  
    </main>
  );
};
//getServerSideProps -> run on server send data to client
//Set type of context -> :GetServerSidePropsContext (getServerSideProps) -> is a reserve keyword by Next.js
export const getStaticProps = async () => {
  //Read all blogs -> Data from blogData
  let data = await fs.promises.readdir("ApiData/blogData");
  const allBlogs: apiDataType[] = [];
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let myFile = await fs.promises.readFile(
      "ApiData/blogData/" + item,
      "utf-8"
    );
    allBlogs.push(JSON.parse(myFile));
  }
  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
};
export default blog;
//More info -> https://stackoverflow.com/questions/65078245/how-to-make-next-js-getstaticprops-work-with-typescript

//--------------------------------------------------//
// getServerSideProps -> Ex server site rendering (ssr)
//--------------------------------------------------//

// export   async  function getServerSideProps(){
//   const Data = await fetch("http://localhost:3000/api/Blogs");
//    //blogDataType[] -> blogs data type
//   const blogs:apiDataType[] = await Data.json() //apiDataType need because this is an Array[]
//   return{
//       props:{blogs} // will be passed to the page component as props
//   }
// }
