import { useState } from "react";

function App() {
  const images = [
    "/java.png",
    "/python.png",
    "/atom.png",
    "/files.png",
    "/files (1).png",
    "/technology.png",
    "/mysql.png",
    "/leaf.png",
    "/social.png",
  ];

  const slides = [
    {
      src: "web.jpg",
      content:
        "Crafting visually appealing and user-friendly websites is a core focus of modern web development. Expertise lies in combining aesthetics, usability, and functionality to deliver an engaging user experience. Every design element—from color schemes and typography to intuitive navigation—is carefully considered to enhance interaction. Responsive design ensures seamless performance across devices, from desktops to mobile phones. Experience includes working on multiple web projects as a freelancer, delivering effective designs that balance creativity, accessibility, and functionality.",
    },
    {
      src: "webdesign.jpg",
      content:
        "Creating visually engaging and user-centric digital experiences with intuitive navigation, clean layouts, and responsive design. Experienced in designing websites and interfaces for portfolios, businesses, and organizations, ensuring seamless usability and impactful interactions. Skilled at translating ideas into functional, aesthetically appealing designs that reflect brand identity and enhance user engagement. Focused on delivering accessible, high-quality, and interactive digital solutions across all devices.",
    },
    {
      src: "digitalmarketing.jpg",
      content: (
        <>
          I help brands grow online through effective digital strategies. Managed and grew the Instagram presence at{" "}
          <a
            href="https://www.instagram.com/qbitio.labs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(210,180,140)] underline hover:text-yellow-300"
          >
            Qbitio Labs
          </a>
          , creating engaging content and building a following of over 15,000. Analyzed audience engagement to optimize content reach and performance, delivering measurable growth while maintaining a professional online presence.
        </>
      ),
    },
    {
      src: "eventmanage.jpg",
      content:
        "Conducted comprehensive programming training at Qbitio Labs for over 30 students, focusing on languages including Java, Python, and JavaScript. Developed structured curricula and hands-on exercises to reinforce practical learning and problem-solving skills. Facilitated a collaborative environment that encouraged creativity, technical growth, and real-world application of programming concepts.",
    },
    {
      src: "photography.png",
      content:
        "Captures moments and tells stories through the lens, with a focus on composition, lighting, and emotion to create visually striking images. Owns the photography studio Video Times, providing wedding photography services and covering various events. Experienced with multiple camera systems and equipment, specializing in portrait, event, landscape, and product photography while delivering high-quality, creative, and detail-oriented results.",
    },
  ];

  const contact = [
    {
      icon: "/email.png",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=ragulkannan2735@gmail.com",
    },
    { icon: "/instagram.png", url: "https://www.instagram.com/ragul___27/" },
    { icon: "/github.png", url: "https://github.com/Ragulkan" },
    { icon: "/linkedin.png", url: "https://www.linkedin.com/in/ragul--kannan/" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(65,46,34)]">
      {/* Header */}
      <div className="bg-[rgb(27,27,27)] text-white px-4 sm:px-8 py-2 rounded-2xl shadow-lg font-serif w-full sticky top-0 z-10">
        <h1 className="text-xl sm:text-2xl font-extrabold text-center text-[rgb(210,180,140)]">
          Ragul Kannan
        </h1>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-4 w-full flex-1 min-h-0 px-4 sm:px-8 pt-4">
        {/* LEFT COLUMN */}
        <div className="flex flex-col flex-1 gap-4 min-h-0">
          {/* Top: Portfolio + Image */}
          <div className="flex flex-col md:flex-row gap-4 flex-1">
            {/* Left card */}
            <div className="relative bg-[rgb(27,27,27)] text-white rounded-lg shadow-lg font-serif flex flex-col justify-between w-full md:w-[450px] p-4">
              {/* Top-right image */}
              <div className="flex justify-end">
                <img src="code.png" alt="code" className="w-10 h-10 object-contain" />
              </div>

              {/* Center icons */}
              <div className="flex justify-center mt-2">
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-1 sm:gap-2 justify-items-center w-full max-w-[320px] bg-[rgb(71,60,51)] rounded-lg p-2">
                  {images.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`icon-${index}`}
                      className="w-8 sm:w-10 h-12 sm:h-16 object-contain"
                    />
                  ))}
                </div>
              </div>

              {/* Bottom-left text */}
              <div className="mt-2">
                <h1 className="text-2xl font-extrabold text-[rgb(210,180,140)]">
                  Full Stack Developer
                </h1>
                <p className="mt-1 text-white/80 max-w-xs text-sm leading-snug">
                  Passionate about building scalable web applications, skilled in both frontend and backend development. Experienced with Java, Spring Boot, React, SQL, and cloud technologies.
                </p>
              </div>
            </div>

            {/* Right image */}
            <div className="w-full md:w-[400px] h-auto">
              <img
                src="coat.png"
                alt="coatphoto"
                className="w-full h-full object-cover rounded-lg shadow-lg max-h-[400px] md:max-h-full"
              />
            </div>
          </div>

          {/* Bottom sections */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-[rgb(27,27,27)] text-white px-4 py-4 rounded-lg shadow-lg flex flex-col items-center justify-center flex-1">
              <p className="text-center text-[rgb(210,180,140)] font-instrument text-sm sm:text-base leading-snug">
                I’m always open to connecting and collaborating on exciting projects. <br />
                Feel free to reach out through any of the platforms listed.
              </p>
            </div>
            <div className="bg-[rgb(210,180,140)] text-white px-4 py-4 rounded-lg shadow-lg flex flex-col items-center justify-center flex-1">
              <p className="text-center text-black/80 font-instrument">
                "Code is not just about solving problems — it’s about creating solutions that matter."
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col flex-1 gap-4 min-h-0">
          <div className="bg-[rgb(27,27,27)] text-white px-4 py-4 rounded-lg shadow-lg flex flex-col items-start flex-1 min-h-0">
            {/* Slide image */}
            <div className="w-full flex justify-center">
              <img
                src={slides[currentIndex].src}
                alt={`slide-${currentIndex}`}
                className="w-full max-w-3xl h-auto object-contain rounded-lg max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
              />
            </div>

            {/* Slide content */}
            <p className="mt-4 text-left text-white/80 w-full max-w-3xl text-base sm:text-lg leading-relaxed overflow-y-auto">
              {slides[currentIndex].content}
            </p>

            {/* Navigation arrows */}
            <div className="flex justify-center items-center gap-6 mt-4 w-full max-w-3xl">
              <img
                src="/arrow-left.png"
                alt="previous"
                className="w-10 h-10 p-2 rounded-full cursor-pointer bg-gray-800 hover:bg-gray-700 hover:scale-110 hover:shadow-lg transition-all duration-200"
                onClick={prevSlide}
              />
              <img
                src="/arrow-right.png"
                alt="next"
                className="w-10 h-10 p-2 rounded-full cursor-pointer bg-gray-800 hover:bg-gray-700 hover:scale-110 hover:shadow-lg transition-all duration-200"
                onClick={nextSlide}
              />
            </div>
          </div>

          {/* Bottom "contact" div */}
          <div className="bg-[rgb(27,27,27)] h-16 flex items-center justify-center rounded shadow">
            <div className="flex gap-4">
              {contact.map((item, index) => (
                <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.icon}
                    alt={`contact-${index}`}
                    className="w-8 h-8 object-contain hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;