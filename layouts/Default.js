import MDXContent from "app/helper/MDXContent";
import Banner from "./components/Banner";

const Default = ({ data }) => {
  const { frontmatter, content } = data;
  const { title } = frontmatter;

  return (
    <section className="bg-gray-950 text-gray-100 py-16 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Animated Page Title Section */}
        <Banner title={title} className="text-white" />

        {/* Content Box with Animation */}
        <div className="bg-gray-900 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-800 animate-fadeIn">
          <article className="prose prose-invert lg:prose-lg max-w-none">
            <MDXContent content={content} />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Default;
