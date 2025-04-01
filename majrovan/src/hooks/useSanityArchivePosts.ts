

import { useEffect, useState } from "react";
import sanityClient from "../../Studio/studio-majrovan/lib/sanity";

interface BlogPost {
    _id: string;
    gallery?: Array<{
      _key: string;
      _type: 'image';
      asset: {
        _ref: string;
        _type: string;
      };
    }>;
    tags?: string[];  //? gör fältet valfritt
    title: string;
    slug: { current: string };
    body: any;
    publishedAt: string;
  }

  const useSanityArchivePosts = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const query = `*[_type == "blogpost"]
        | order(publishedAt desc) {
        gallery,
        tags, 
        title,
        slug,
        body,
        publishedAt}`;

    sanityClient.fetch<BlogPost[]>(query).then((data) => {
        setPosts(data);
    });
    }, []);

    return posts;
  };

  export default useSanityArchivePosts