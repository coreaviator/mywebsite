import React from 'react';

const BlogPage: React.FC = () => {
  const posts = [
    {
      title: "The 4-Step Process",
      image: "assets/DSC_0261-Enhanced-NR.jpg",
      excerpt: "Understanding the path from student to certificated pilot."
    },
    {
      title: "Weather Decision Making",
      image: "assets/coast.jpg",
      excerpt: "How to evaluate go/no-go scenarios before you pre-flight."
    },
    {
      title: "Instrument Scan Basics",
      image: "assets/1.png",
      excerpt: "Mastering the fundamental patterns of instrument flying."
    }
  ];

  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <h1 className="text-5xl font-black mb-12 text-center">Aviation Insights</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div 
            key={index}
            onClick={() => console.log(`Navigating to ${post.title}`)} // Replace with your internal navigation logic
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100"
          >
            <div className="overflow-hidden h-56">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h3>
              <p className="text-slate-600 mb-6">{post.excerpt}</p>
              <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">
                Read Article →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
