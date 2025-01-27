import React, { useEffect, useState } from 'react';
import ExternalOpportunityCategoryCard from '../components/ExternalOpportunityCategoryCard';
import styles from '@/styles/sections/ExternalOpportunitiesSection.module.css';
import opportunitiesData from '../data/externalOpportunities.json';
import ResourcesNotLoaded from '@/sections/ResourcesNotLoaded';

const cardsData = [
  { title: 'Conferences and Events', topbarColor: 'wcs-pink' },
  { title: 'Corporate', topbarColor: 'wcs-blue' },
  { title: 'Grad School', topbarColor: 'wcs-pink' },
  { title: 'RSO', topbarColor: 'wcs-blue' },
  { title: 'Research and Focus Group', topbarColor: 'wcs-pink' },
  { title: 'Scholarships', topbarColor: 'wcs-blue' },
  { title: 'Workshops and Education', topbarColor: 'wcs-pink' },
  { title: 'Non-Profit', topbarColor: 'wcs-blue' },
  { title: 'Volunteering', topbarColor: 'wcs-pink' },
];

export default function ExternalOpportunitiesSection() {
  //  this will contain the data from notion
  const [opportunities, setOpportunities] = useState([{}]);
  const [notionDataFetched, setNotionDataFetched] = useState(true);

  //  this fetches the opportunities data and assigns it to opportunities (above)
  //   You can use the map function to iterate through the opportunities.

  useEffect(() => {
    fetch('http://localhost:5000/external-opps-api')
      .then((response) => response.json())
      .then((data) => {
        setOpportunities(data);
      })
      .catch(() => {
        setNotionDataFetched(false);
      });
  }, []);

  //  returns type of opportunity (ex. Conferences and Events)
  const getType = (properties) => properties.Type.multi_select[0].name;

  //  returns name/title of opportunity
  const getName = (properties) => {
    const name = properties.Name;
    return name ? name.title[0].text.content : '';
  };

  //  returns time of opportunity
  const getTime = (properties) => {
    const time = properties.Time;
    return time.rich_text[0] ? time.rich_text[0].text.content : '';
  };

  //  returns expiration date of opportunity
  const getExpiration = (properties) => {
    const expires = properties.Expires;
    return expires.date ? expires.date.start : '';
  };

  //  returns location of opportunity
  const getLocation = (properties) => {
    const location = properties.Location;
    return location.rich_text[0] ? location.rich_text[0].text.content : '';
  };

  //  returns description of opportunity (formatting of this might be wonky atm)
  const getDescription = (properties) => {
    const description = properties.Description;
    if (description.rich_text[0]) {
      return description.rich_text.map((block) => {
        if (block.type === 'text') {
          return block.text.content;
        }
        return '';
      });
    }
    return '';
  };

  //  returns url
  const getURL = (properties) => properties.Link.url;

  /*
  Please see the commented section below the return statement for an
  example of how to use the functions above to access the opportunities data.
  */

  if (!notionDataFetched) {
    return <ResourcesNotLoaded />;
  }

  return (
    <>
      <div className={styles.container}>
        {cardsData.map((card, index) => (
          <ExternalOpportunityCategoryCard
            key={index}
            categoryName={card.title}
            topbarColor={card.topbarColor}
            items={opportunitiesData}
          />
        ))}
      </div>

      <div>
        {opportunities ? (
          opportunities.map((opp) => (
            <div key={opp.id}>
              {opp.properties ? (
                <>
                  <p>{getType(opp.properties)}</p>
                  <p>{getName(opp.properties)}</p>
                  <p>{getTime(opp.properties)}</p>
                  <p>{getExpiration(opp.properties)}</p>
                  <p>{getLocation(opp.properties)}</p>
                  <p>{getDescription(opp.properties)}</p>
                  <p>{getURL(opp.properties)}</p>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          ))
        ) : (
          <p>Data not loaded....</p>
        )}
      </div>
    </>
  );
}

//  example of how to access data per opportunity in our database:

// { (opportunities) ? (opportunities.map((opp) => (
//   <div key = {opp.id}>
//     {(opp.properties) ? (
//       <>
//         <p>{getName(opp.properties)}</p>
//         <p>{getTime(opp.properties)}</p>
//         <p>{getExpiration(opp.properties)}</p>
//         <p>{getLocation(opp.properties)}</p>
//         <p>{getDescription(opp.properties)}</p>
//         <p>{getUrl(opp.properties)}</p>
//       </>
//     ) : (
//       <p>Loading...</p>
//     )}
//   </div>
// ))) : (<p>Data not loaded....</p>)}
