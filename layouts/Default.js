import MDXContent from "app/helper/MDXContent";
import Banner from "./components/Banner";

const Default = ({ data }) => {
  const { frontmatter, content } = data;
  const { title } = frontmatter;

  return (
    <section>
      <div className="container mx-auto px-6 lg:px-12 pt-24">
        {/* Animated Page Title Section */}
        <Banner title={title} className="text-white" />

        {/* Content Box with Animation */}
        <div className=" p-8 md:p-12 rounded-2xl shadow-xl animate-fadeIn">
          <article className="prose prose-invert lg:prose-lg max-w-none">
            <MDXContent content={content} />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Default;
