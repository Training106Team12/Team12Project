 import { useState } from "react";

function Single() {
  const [showMore, setShowMore] = useState(false);

  const categories = [
    ["Technology Trending"],
    ["Entertainment"],
    ["Tech Reviews"],
    ["Gaming Blog"],
    ["Crypto news"],
    ["Software Development"],
    ["FinTech"],
    ["Health Tech"],
    ["Tips and Tricks"],
    ["Make money online"],
    ["Home theater"],
    ["Cameras & drones"],
    ["PC gaming"],
  ];

  const trendingNews = [
    {
      title: "The latest technologies to be used for VR in 2022",
      image:
        "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-13.jpg",
      read: "3 Mins read",
    },
    {
      title: "The fate of Elon Musk's deal to buy Twitter",
      image:
        "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-14.jpg",
      read: "4 Mins read",
    },
    {
      title: "Binance blockchain hit by $570 million crypto",
      image:
        "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-15.jpg",
      read: "5 Mins read",
    },
    {
      title: "The Twitter-Musk trial is now on pause",
      image:
        "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-16.jpg",
      read: "6 Mins read",
    },
  ];

  const tags = [
    "Games",
    "Electronics",
    "Video",
    "Cellphone",
    "Indoor",
    "VGA Card",
    "USB",
    "Lightning",
    "Camera",
    "Window",
    "Air Vent",
    "Bedroom",
    "Laptop",
    "Dashboard",
    "Keyboard",
  ];

  return (
    <section className="py-5 bg-white text-dark">
      <div className="container">


        <div className="mb-5 text-secondary small">
          Home <span className="mx-2">&gt;</span> Blog
        </div>

        <div className="row g-4">

        
          <aside className="col-lg-3 col-md-4">

            
            <div className="border rounded p-4 mb-5">

              <h5 className="fw-bold mb-3">
                Blog Categories
              </h5>

              <hr />

              {categories
                .slice(0, showMore ? categories.length : 5)
                .map(([name, count]) => (
                  <div
                    key={name}
                    className="d-flex justify-content-between align-items-center mb-3 gap-2"
                  >
                  

                    <span className="badge bg-light text-secondary fw-normal">
                      {count}
                    </span>
                  </div>
                ))}

              <button
                type="button"
                className="btn btn-link text-warning p-0 text-decoration-none"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "See more" : "See More "}
              </button>

            </div>

        
            <div className="mb-5">

              <h5 className="fw-bold mb-3">
                Trending News
              </h5>

              <hr />

              {trendingNews.map((news) => (
                <div
                  key={news.title}
                  className="d-flex align-items-start mb-4"
                >

                  <img
                    src={news.image}
                    alt={news.title}
                    className="rounded me-3"
                    style={{
                      width: "90px",
                      height: "70px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />

                  <div className="flex-grow-1">
<h6
                      className="fw-normal mb-2"
                      style={{
                        fontSize: "13px",
                        lineHeight: "1.5",
                      }}
                    >
                      {news.title}
                    </h6>

                    <small className="text-secondary d-block mb-2">
                      August 30, 2022
                    </small>

                    <small className="text-secondary">
                      {news.read}
                    </small>

                  </div>

                </div>
              ))}

            </div>


            <div className="mb-5">

              <h5 className="fw-bold mb-3">
                Popular Tags
              </h5>

              <hr />

              <div className="d-flex flex-wrap gap-2">

                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="border rounded px-3 py-2 text-secondary"
                    style={{ fontSize: "12px" }}
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>

          </aside>

          <main className="col-lg-9 col-md-8">


            <div className="mb-3">

              <span className="bg-light text-info px-2 py-1 rounded">
                • Technology
              </span>

            </div>

      
            <h1 className="fw-bold mb-4">
              The latest technologies to be used for VR in 2022
            </h1>

            <div className="d-flex align-items-center flex-wrap gap-3 mb-4">

              <img
                src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/author.png"
                alt="Author"
                className="rounded-circle"
                style={{
                  width: "42px",
                  height: "42px",
                  objectFit: "cover",
                }}
              />

              <span className="fw-bold">
                By Sugar Rosie
              </span>

              <span className="text-secondary small">
                August 30, 2022
              </span>

              <span className="text-secondary small">
                4 Mins read
              </span>

            </div>

      
            <div className="mb-4">

              <img
                src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/img-big.png"
                alt="Virtual Reality Technology"
                className="img-fluid w-100 rounded"
              />

            </div>

     
            <article className="text-secondary">

              <p className="mb-4">
                Nibiru, a new crypto derivatives protocol co-founded by
                Tribe Capital GP Arjun Sethi, has raised $7.5 million
                in seed funding at a valuation of $100 million, two
                sources familiar with the matter told TechCrunch.
              </p>

              <p className="mb-4">
                Tribe Capital, Republic Crypto and Kraken invested in
                the seed round, a source said, requesting anonymity
                as the information is not public.
              </p>

              <p className="mb-4">
                Sethi co-founded the startup with four industry veterans,
                including Sankha Banerjee, formerly with Credence Capital
                and Binance, and Boris Revsin, who co-founded Republic
                Capital. Nibiru has attracted contributors from firms
                including Meta, Reddit, JP Morgan and Yahoo.
              </p>
 <p className="mb-4">
                The crypto market is flooded with centralized and
                decentralized ETH-based perpetuals and options trading
                platforms. Nibiru is attempting to build a mainstream
                decentralized multichain solution.
              </p>

              <p className="mb-4">
                Currently in private testnet, Nibiru's decentralized
                protocol unifies derivatives trading, spot trading,
                staking and bonded liquidity. It aims to serve users
                across multiple blockchains.
              </p>

              <p className="mb-5">
                On its investor deck, Nibiru says it will provide
                customers with hedging opportunities, low gas costs,
                MEV resistance and high futures volume.
              </p>

              <h2 className="fw-bold text-dark mt-5 mb-4">
                The FTC Is Closing in on Runaway AI
              </h2>

              <p className="mb-4">
                Artificial intelligence continues to develop rapidly,
                creating new opportunities and challenges for technology
                companies. Regulators are increasingly examining how
                these systems are developed and used.
              </p>

              <p className="mb-4">
                Technology companies are working to create new products
                and services while adapting to changing industry
                standards and regulations.
              </p>

       
              <img
                src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/img-single.png"
                alt="Technology article"
                className="img-fluid w-100 rounded mb-4"
              />

              <p className="mb-4">
                
Nibiru, a new crypto derivatives protocol co-founded by Tribe Capital GP Arjun Sethi, has raised $7.5 million in seed funding at a valuation of $100 million, two sources familiar with the matter told TechCrunch.
Tribe Capital, Republic Crypto and Kraken invested in the seed round, a source said, requesting anonymity as the information is not public.
Sethi co-founded the startups with four industry veterans — including Sankha Banerjee, formerly with Credence Capital and Binance; and Boris Revsin, who co-founded Republic Capital. Nibiru has attracted nearly two dozen contributors from firms including Meta, Reddit, JP Morgan and Yahoo, an investor deck obtained by TechCrunch showed.

The crypto market is flooded with centralized (Binance, FTX) and decentralized ETH-based perpetuals and options trading platforms (Dydx, Opyn, Perpetual Protocol). Nibiru is attempting to build the first mainstream decentralized multichain solution, according to its website.
Currently in private testnet, Nibiru’s decentralized protocol unifies derivatives trading, spot trading, staking and bonded liquidity, and aims to serve users across over 40 blockchains, it says on the website.
On its investor deck, Nibiru says it will provide customers with unlocked hedging opportunities, extremely low gas costs, MEV resistance and high futures volume. It is also creating composable yield in rising/falling regimes using decentralized perps and options, the deck added.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nibiru, a new crypto derivatives protocol co-founded by Tribe Capital GP Arjun Sethi, has raised $7.5 million in seed funding at a valuation of $100 million, two sources familiar with the matter told TechCrunch. has raised $7.5 million in seed funding at a valuation of $100 million, two sources familiar with the matter told TechCrunch.
      
              </p>

            </article>

          </main>

        </div>
    
<div className="border-top border-bottom py-4 my-5">

  <div className="d-flex align-items-start gap-3">

    <img
      src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/author.png"
      alt="Sugar Rosie"
      className="rounded-circle"
      style={{
        width: "80px",
        height: "80px",
        objectFit: "cover",
        flexShrink: 0,
      }}
    />

    <div>
      <h5 className="fw-bold mb-1">
        Sugar Rosie
      </h5>

      <div className="text-secondary small mb-3">
        306 posts <span className="mx-2">Since 2012</span>
      </div>

      <p className="text-secondary mb-0" style={{ lineHeight: "1.8" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>

  </div>

</div>


<div className="my-5">

  <h5 className="fw-bold mb-4">
    Leave a comment
  </h5>



    
    <div className="mb-3">
      <textarea
        className="form-control"
        rows="5"
        placeholder="Write comment"
        required
      ></textarea>
    </div>

  
    <div className="row g-3 mb-4">

      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          required
        />
      </div>

      <div className="col-md-6">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          required
        />
      </div>

    </div>


    <button
      type="submit"
      className="btn btn-primary px-4"
    >
      Post Comment
    </button>



</div>
<div className="mt-5">

  <h5 className="fw-bold mb-4">
    Comments
  </h5>

  <div className="d-flex gap-3 mb-4">

    <img
      src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/author.png"
      alt="Siena Kim"
      className="rounded-circle"
      style={{
        width: "45px",
        height: "45px",
        objectFit: "cover",
        flexShrink: 0,
      }}
    />

    <div className="flex-grow-1">

      <div className="d-flex flex-wrap align-items-center gap-3 mb-2">

        <h6 className="fw-bold mb-0">
          Siena Kim
        </h6>

        <small className="text-secondary">
          August 30, 2022
        </small>

      </div>

      <p className="text-secondary" style={{ lineHeight: "1.8" }}>
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Nibiru, a new
        crypto derivatives protocol co-founded by Tribe Capital GP
        Arjun Sethi, has raised $7.5 million in seed funding at a
        valuation of $100 million, two sources familiar with the
        matter told TechCrunch.
      </p>

    </div>

  </div>


  <div className="d-flex gap-3 mb-4">

    <img
      src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/author.png"
      alt="Siena Kim"
      className="rounded-circle"
      style={{
        width: "45px",
        height: "45px",
        objectFit: "cover",
        flexShrink: 0,
      }}
    />

    <div className="flex-grow-1">

      <div className="d-flex flex-wrap align-items-center gap-3 mb-2">

        <h6 className="fw-bold mb-0">
          Siena Kim
        </h6>

        <small className="text-secondary">
          August 30, 2022
        </small>

      </div>
<p className="text-secondary" style={{ lineHeight: "1.8" }}>
        Technology continues to evolve, bringing new opportunities
        for businesses and users around the world.
      </p>

    </div>

  </div>

</div>


      </div>
    </section>
  );
}

export default Single;