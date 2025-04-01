

import type { NextPage } from 'next';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../../Studio/studio-majrovan/lib/sanity';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from './blogpost.module.css'
import useSanityLatestPosts from '../../hooks/useSanityLatestPosts';
import useSanityBlogPosts from '../../hooks/useSanityBlogPosts';

import BlogSidebar from './BlogpostSidebar';
import { useState } from 'react';

// Bygg en URL-builder för Sanity-bilder
const builder = imageUrlBuilder(sanityClient);
function urlFor(source: any) {
  return builder.image(source);
}

const Blogpost: NextPage = () => {
  // const latestPosts = useSanityLatestPosts();  //hämtar alla inlägg
  // const posts = useSanityLatestPosts();  
  const allPosts = useSanityBlogPosts();//hämtar alla inlägg


  //state för filter
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeArcive, setActiveArcive] = useState<string | null>(null);

  //filtrera baserat på tag eller arkiv
  const filteredPosts = allPosts.filter((post) => {
    let matchesTag = true;
    let matchesArchive = true;
    if (activeTag) {
      matchesTag = post.tags?.includes(activeTag) ?? false;
    }
    if (activeArcive) {
      const date = new Date(post.publishedAt);
      const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      matchesArchive = yearMonth === activeArcive;
    }
    return matchesTag && matchesArchive
  });


  const sortedPosts = [...filteredPosts].sort((a,b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });


  //inga filter? visa tre senaste
  const displayPosts = 
  !activeTag && !activeArcive 
    ? filteredPosts.slice(0, 3)  //endast tre senaste
    : sortedPosts;                // alla som matchar filter


  return (

    <>
      <div className={styles.blogContainer}>


        <div className={styles.blogpost}>
          <h3>Majrovans Blogg</h3>
          {displayPosts.map(post => (
            <div key={post._id}>
              <div className={styles.blogHeading}>
                <h2>{post.title}</h2>

              {/* Taggar */}
              <div  className={styles.tag}>
                {post.tags?.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
              <span>Publicerad: {' '} {new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              
              </div>
              <div className={styles.blogItem}>
                {/* visar bilder från galleriet */}
              {post.gallery && post.gallery.length > 0 && (
                <Carousel className={styles.carousel} showThumbs={false} autoPlay infiniteLoop>
                  {post.gallery.map((img) => (
                    <div key={img._key}>
                      <img src={urlFor(img).width(200).quality(80).dpr(2).url()} alt="Bild från galleriet" />
                    </div>
                  ))}
                </Carousel>
              )}

              {/* visar blogginläggets text med PortableText */}
              {post.body && (
                <div className={styles.blogtext}>
                  <PortableText value={post.body} />
                </div>
              )}
              </div>
            


            </div>
          ))}
        </div>
        <BlogSidebar 
          posts={allPosts}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
          activeArchive={activeArcive} 
          setActiveArchive={setActiveArcive}/>
      </div>
    </>
  );
};

export default Blogpost;
