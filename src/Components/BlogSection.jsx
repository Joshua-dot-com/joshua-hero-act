import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from '../data/blogData';
import './BlogSection.css';

function BlogSection() {
    const [selectedPost, setSelectedPost] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const openFullPost = (post) => {
      setSelectedPost(post);
    };

    const closeFullPost = () => {
      setSelectedPost(null);
      setSelectedImage(null);
    };

    const openImage = (image) => {
      setSelectedImage(image);
    };

    const closeImage = () => {
      setSelectedImage(null);
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="blog-section"
      >
        {/* Background Elements */}
        <div className="blog-bg-gradient">
          <div className="blog-bg-blob-1"></div>
          <div className="blog-bg-blob-2"></div>
        </div>

        {/* Header */}
        <div className="blog-header">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="blog-title"
          >
            My Blogs
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="blog-subtitle"
          >
            Documentation of my testing and research journey
          </motion.p>
        </div>
        
        {/* Blog Grid */}
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="blog-card"
              whileHover={{ scale: 1.03 }}
            >
              {/* Clickable Thumbnail */}
              <div 
                className="cursor-pointer"
                onClick={() => openFullPost(post)}
              >
                <div className="blog-thumbnail-container">
                  <motion.img 
                    src={post.thumbnail} 
                    alt={post.title}
                    className="blog-thumbnail"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="blog-thumbnail-overlay"></div>
                  <span className="blog-date-badge">{post.date}</span>
                </div>
                
                {/* Post Preview */}
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-excerpt">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Post Modal */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeFullPost}
            >
              <motion.div 
                className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  onClick={closeFullPost}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="p-8">
                  {/* Modal Header */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedPost.title}</h2>
                    <div className="flex items-center text-gray-500">
                      <span>By {selectedPost.author}</span>
                      <span className="mx-2">•</span>
                      <span>{selectedPost.date}</span>
                    </div>
                  </div>

                  {/* Main Featured Image */}
                  <div className="mb-8 rounded-xl overflow-hidden">
                    <img 
                      src={selectedPost.thumbnail} 
                      alt={selectedPost.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="prose max-w-none text-gray-700 mb-8">
                    {selectedPost.content.map((paragraph, idx) => (
                      <p key={idx} className="mb-4">{paragraph}</p>
                    ))}
                  </div>

                  {/* Image Gallery */}
                  {selectedPost.images && selectedPost.images.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedPost.images.map((image, idx) => (
                          <div 
                            key={idx} 
                            className="rounded-lg overflow-hidden cursor-pointer"
                            onClick={() => openImage(image)}
                          >
                            <img 
                              src={image} 
                              alt={`${selectedPost.title} ${idx + 1}`}
                              className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImage}
            >
              <motion.div 
                className="relative max-w-6xl w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute -top-12 right-0 text-white hover:text-gray-300"
                  onClick={closeImage}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <img 
                  src={selectedImage} 
                  alt="Enlarged view"
                  className="max-h-[80vh] w-full object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
}

export default BlogSection;