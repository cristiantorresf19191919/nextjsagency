/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle4 = ({ portafolio, api }) => {
  const { content, itemList } = portafolio;
  const { title, caption, options } = content;
  const mapOptions = (options) => {
    const object = Object.fromEntries(new Map(options.split(",").map(a => a.split("="))))
    const optionList = [];
    // {Todas: '*', branding: 'brand', App Mobiles: 'web', Creativo: 'graphic'}
    for (let key in object) {
      if (object[key] !== "*") {
        optionList.push({ key: "." + object[key], label: key });
        continue;
      }
      optionList.push({ key: object[key], label: key });
    }
    // [{key:'*', label:'Todas'}, {key:'brand', label:'branding'}];
    return optionList;
  }
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                {caption}
              </h6>
              <h3 className="wow color-font">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              {mapOptions(options)?.length > 0 && mapOptions(options).map(op => (
                <span data-filter={op.key} key={op.key} className={op.key === '*' && 'active'}>
                  {op.label}
                </span>
              ))}
              {/* <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".brand">Branding</span>
              <span data-filter=".web">Mobile App</span>
              <span data-filter=".graphic">Creative</span> */}
            </div>
          </div>
          <div className="gallery full-width">
            {itemList.length > 0 && itemList.map(item => (
              <>
                <div
                  className={`col-md-6 items ${item.attributes.key} lg-mr wow fadeInUp`}
                  data-wow-delay=".4s"
                  key={item.id}
                >
                  <div className="item-img">
                    <div className="cont">
                      <h6>{item.attributes.title}</h6>
                      <p>{item.attributes.caption}</p>
                    </div>
                    <Link href={`/project-details2/project-details2-dark`}>
                      <a className="rota">
                        <img src={api+item?.attributes.picture?.data?.attributes?.url} alt="image" />
                        <div className="item-img-overlay"></div>
                      </a>
                    </Link>
                    <div className="tags">
                      <span>
                        <Link href="/works2/works2-dark">{item.attributes.key}</Link>
                      </span>
                    </div>
                  </div>
                </div>

              </>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle4;




