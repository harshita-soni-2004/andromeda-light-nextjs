import { markdownify } from "@lib/utils/textConverter";

const SpecialFeatures = ({ speciality }) => {
  return (
    <section className="section bg-gradient-to-b from-black via-zinc-900 to-zinc-950 text-white">
      <div className="container">
        {/* Primary Speciality */}
        <div className="row items-center justify-center">
          <div className="animate lg:col-6 lg:order-2">
            <video
              className="mx-auto rounded-lg shadow-lg"
              src="/videos/banner11.mp4" // Local video stored in public/videos/
              width={575}
              height={511}
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
          <div className="animate lg:col-5 lg:order-1">
            <p className="text-sm uppercase tracking-wide text-white/60">
              {speciality.primary.subtitle}
            </p>
            {markdownify(
              speciality.primary.title,
              "h2",
              "mt-4 text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent",
            )}
            {markdownify(
              speciality.primary.description,
              "p",
              "mt-6 text-white",
            )}
          </div>
        </div>

        {/* Secondary Speciality */}
        <div className="row items-center mt-16">
          <div className="animate lg:col-6">
            <video
              className="mx-auto rounded-lg shadow-lg"
              src="/videos/banner12.mp4" // Local video stored in public/videos/
              width={575}
              height={511}
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
          <div className="animate lg:col-5">
            <p className="text-sm uppercase tracking-wide text-white/60">
              {speciality.secondary.subtitle}
            </p>
            {markdownify(
              speciality.secondary.title,
              "h2",
              "mt-4 text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent",
            )}
            {markdownify(
              speciality.secondary.description,
              "p",
              "mt-6 text-white",
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
