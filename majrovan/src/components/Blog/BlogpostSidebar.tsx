import { formatArchiveLabel } from "../../hooks/dateHelper";
import  { BlogPost } from "../../hooks/useSanityBlogPosts"
import styles from './blogpostSidebar.module.css'

interface BlogSidebarProps {
    posts: BlogPost[];
    activeTag: string | null;
    setActiveTag: (tag:string|null) => void;
    activeArchive: string | null;
    setActiveArchive: (archive: string|null) => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
    posts,
    activeTag,
    setActiveTag,
    activeArchive,
    setActiveArchive,
}) => {

    const uniqueTags = Array.from(new Set(  
        posts.flatMap((p) => p.tags || [])// filtrerar bort tomma strängar i listan över taggar
      )
    ).filter(tag => tag.trim() !== ""); //hämta unika taggar
    const uniqueArchives = Array.from(
        new Set(
        posts.map((p) => {
        const d = new Date(p.publishedAt);
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    })
)
    );


    return (
        <>
            <aside className={styles.blogSidebar} aria-labelledby="blog-sidebar">
              <h2 id="blog-sidebar-arkiv" className={styles.sidebareHeadline} >Arkiv</h2>
              <ul className={styles.archiveList}>
                {uniqueArchives.map((archive) => {
                    const isActive = activeArchive === archive;
                    const label = formatArchiveLabel(archive);  //omvandlar "2025-02" till Februari 2025 

                        return (
                           
                            <li key={archive}>
                                 <a 
                                href="#" 
                                onClick={e => {
                                    e.preventDefault();
                                    setActiveArchive(archive);
                                }}
                                aria-current={isActive ? "true" : undefined}
                                className={`btn light-focus ${isActive ? styles.active : ""}`}

                            >
                                {label}
                                </a>
                            </li>
                        );
                
                    })}
                
              </ul>
              

              <h2 id="blog-sidebar-taggar" className={styles.sidebareHeadline}>Taggar</h2>
              <ul className={styles.tagList}>
                {uniqueTags.map((tag) => {
                    const isActive = activeTag === tag;
                    return (
                        <li key={tag}>
                            <a 
                            href="#"
                            onClick={e => {                
                                    e.preventDefault();
                                    setActiveTag(tag);
                            }}
                            aria-current={isActive ? "true" : undefined}
                            className={`btn light-focus ${isActive ? styles.active : ""}`}
                            >
                                {tag}
                            </a>
                        </li>
                    );
                })}
              </ul>
                <button className="btn light-focus" onClick={() => { setActiveTag(null); setActiveArchive(null); }}>
                Visa de tre senaste inläggen
              </button>
              
            </aside>   
        </>
    );
};

export default BlogSidebar

