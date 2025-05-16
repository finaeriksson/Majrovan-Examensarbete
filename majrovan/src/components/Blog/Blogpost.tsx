

import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../../Studio/studio-majrovan/lib/sanity';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './blogpost.module.css'
// import useSanityBlogPosts, { BlogPost } from '../../hooks/useSanityBlogPosts';
// import BlogSidebar from './BlogpostSidebar';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { BlogPost } from '../../hooks/useSanityBlogPosts';

// Bygg en URL-builder för Sanity-bilder
const builder = imageUrlBuilder(sanityClient);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

interface BlogpostProps {
  posts: BlogPost[]
  activeTag: string | null
  activeArchive: string | null
}

const Blogpost: React.FC<BlogpostProps> = ({
  posts,
  activeTag,
  activeArchive
}) => {  
  const filtered = posts.filter(post => {
    let ok = true
    if (activeTag) ok = post.tags?.includes(activeTag) ?? false
    if (activeArchive) {
      const date = new Date(post.publishedAt)
      const ym = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}`
      ok = ok && ym === activeArchive
    }
    return ok
  })


  const sortedPosts = [...filtered].sort((a,b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });


  //inga filter? visa tre senaste
  const displayPosts = 
  !activeTag && !activeArchive 
    ? sortedPosts.slice(0, 3)  //endast tre senaste
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
      </div>
    </>
  );
};

export default Blogpost;
