
import Blogpost from "../components/Blog/Blogpost"
import styles from "./blogpage.module.css"
import BlogSidebar from '../components/Blog/BlogpostSidebar';
import useSanityBlogPosts from "../hooks/useSanityBlogPosts";
import { useState } from "react";

const BlogPage: React.FC = () => {
    
    const allPosts = useSanityBlogPosts();//hämtar alla inlägg
    //state för filter
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [activeArcive, setActiveArcive] = useState<string | null>(null);

    return (
        <div className={styles.blogContainer}>
            <div className={styles.main}>
            <Blogpost 
                posts={allPosts}
                activeTag={activeTag}
                activeArchive={activeArcive} 

/>
        </div>
        <div>
            <BlogSidebar
                          posts={allPosts}
                          activeTag={activeTag}
                          setActiveTag={setActiveTag}
                          activeArchive={activeArcive} 
                          setActiveArchive={setActiveArcive}/>
        </div>
        </div>
        
    )
}

export default BlogPage