import Banner from "./components/Banner";
export default function ContactPage({ data }) {
  const { frontmatter } = data;
  const { title } = frontmatter;
  return (
    <>
      <div className="pt-24">
        <Banner title={title} className="text-white  " />
        <div className="container mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-zinc-900 p-8 rounded-md">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Get In Touch
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name..."
                className="w-full p-3 bg-black border border-gray-600 rounded text-white"
              />
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full p-3 bg-black border border-gray-600 rounded text-white"
              />
              <input
                type="text"
                placeholder="Title..."
                className="w-full p-3 bg-black border border-gray-600 rounded text-white"
              />
              <textarea
                rows={4}
                placeholder="Type Here..."
                className="w-full p-3 bg-black border border-gray-600 rounded text-white"
              ></textarea>
              <button
                type="submit"
                className="  bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-xl font-semibold mt-2 shadow-lg hover:shadow-pink-500/40 transition transform hover:scale-105 px-6 py-2  hover:bg-gray-300"
              >
                Send Now
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <p className="">
              In tempo nisi turpis, at ultricies dui eleifend a. Quisque et quam
              vel nunc consectetur pharetra euismod eu est. Morbi non tortor.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-white pb-4">Phone Number</h4>
                <p>+91 898 4922 507</p>
              </div>
              <div>
                <h4 className="font-semibold text-white pb-4">Email Address</h4>
                <p>technofuturesolution@gmail.vom</p>
              </div>
              <div>
                <h4 className="font-semibold text-white pb-4">Whatsapp</h4>
                <p>865-248-7993</p>
              </div>
              <div>
                <h4 className="font-semibold text-white pb-4">Our Office</h4>
                <p>GopalPura Road Treveni Chuara</p>
              </div>
            </div>

            <div className="mt-4">
              <iframe
                className="w-full h-56 rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19814.398154641774!2d-0.1277584220138536!3d51.507350744295206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333333333%3A0xabcdef1234567890!2sLondon!5e0!3m2!1sen!2sin!4v1682762881681!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="mt-16 bg-zinc-800 py-12 text-center ">
          <h2 className="text-3xl font-bold mb-4 text-white pt-5">
            Are you Ready To Take A Perfect Internship
          </h2>
          <button className=" bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-2 rounded-xl font-semibold mt-2 shadow-lg hover:shadow-pink-500/40 transition transform hover:scale-105 px-6 hover:bg-gray-300  ">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
