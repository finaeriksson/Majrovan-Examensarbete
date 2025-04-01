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
            <div className={styles.blogSidebar}>
              <h3>Arkiv</h3>
              <div className={styles.archiveList}>
                {uniqueArchives.map((archive) => (
                    <button key={archive} className={activeArchive === archive ? styles.active : ''} onClick={() => setActiveArchive(archive)}>
                    {archive}
                </button>
                ))}
                
              </div>
              

              <h3>Taggar</h3>
              <div className={styles.tagList}>
                {uniqueTags.map((tag) => (
                    <button key={tag} className={activeTag === tag ? styles.active : ''} onClick={() => setActiveTag(tag)}>
                        {tag}
                    </button>
                ))}
              </div>

              <button onClick={() => { setActiveTag(null); setActiveArchive(null); }}>
                Visa de tre senaste inläggen
              </button>
            </div>
        </>
    );
};

export default BlogSidebar