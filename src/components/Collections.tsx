const collections = [
  {
    id: "1",
    cat: "Signature Series",
    name: "ARCHITECTURAL DINING",
    mat: "Iroko · Ebony · Brushed Steel",
    className: "c1",
    featured: true,
    image: "/images/Architectural dining section.png",
  },
  {
    id: "2",
    cat: "Executive Line",
    name: "OFFICE SYSTEMS",
    mat: "Sapele · Leather",
    className: "c2",
    featured: false,
    image: "/images/Office Systems section.png",
  },
  {
    id: "3",
    cat: "Installation",
    name: "WALL SYSTEMS",
    mat: "Teak · Okoumé · Walnut",
    className: "c3",
    featured: false,
    image: "/images/Wall Systems.png?v=2",
  },
  {
    id: "4",
    cat: "Residential",
    name: "LIVING SERIES",
    mat: "Afromosia · Linen",
    className: "c4",
    featured: false,
    image: "/images/Living series section.png",
  },
  {
    id: "5",
    cat: "Contract",
    name: "BULK SUPPLY",
    mat: "Mixed Hardwood · Custom Spec",
    className: "c5",
    featured: false,
    image: "/images/Bulk supply.png",
  },
];

export default function Collections() {
  return (
    <section className="collections" id="collections">
      <div className="collections-header reveal">
        <div>
          <div className="section-tag">Premium Furniture</div>
          <h2 className="collections-title">
            COLLECTIONS<br /><span>&amp; COMMISSIONS</span>
          </h2>
        </div>
        <p className="collections-intro reveal reveal-delay-2">
          Each piece is engineered to specification. Materials are sourced for structural integrity and surface character. No two commissions are identical.
        </p>
      </div>
      <div className="collections-grid">
        {collections.map((item, i) => (
          <div
            key={item.id}
            className={`collection-item reveal ${i === 1 ? "reveal-delay-1" : ""}`}
          >
            <div className="collection-inner">
              <div
                className={`collection-bg ${item.className}`}
                style={
                  item.image
                    ? {
                        backgroundImage: `url(${encodeURI(item.image)})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : undefined
                }
              />
              <div className="collection-grain" />
              <div className="collection-rings" />
              <div className="collection-overlay" />
              <div className="collection-info">
                <div className="collection-cat">{item.cat}</div>
                <div className="collection-name">
                  {item.featured ? (
                    <>ARCHITECTURAL<br />DINING</>
                  ) : (
                    item.name
                  )}
                </div>
                <div className="collection-mat">{item.mat}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
