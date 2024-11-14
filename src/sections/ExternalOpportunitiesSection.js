import React, { useEffect, useState } from 'react';
import ExternalOpportunityCategoryCard from '../components/ExternalOpportunityCategoryCard';
import styles from '@/styles/sections/ExternalOpportunitiesSection.module.css';

const cardsData = [
  { title: 'Conferences and Events', topbarColor: '#E2626A' },
  { title: 'Corporate', topbarColor: '#69C7CB' },
  { title: 'Grad School', topbarColor: '#E2626A' },
  { title: 'RSO', topbarColor: '#69C7CB' },
  { title: 'Research and Focus Group', topbarColor: '#E2626A' },
  { title: 'Scholarships', topbarColor: '#69C7CB' },
  { title: 'Workshops and Education', topbarColor: '#E2626A' },
  { title: 'Non-Profit', topbarColor: '#69C7CB' },
  { title: 'Volunteering', topbarColor: '#E2626A' },
];

// will have to change later; just a placeholder
const opportunitiesData = [
  { title: 'UX Days at Siebel Center for Design', emoji: '🎨' },
  { title: 'UX Days at Siebel Center for Design', emoji: '🎨' },
  { title: 'UX Days at Siebel Center for Design', emoji: '🎨' },
];

export default function ExternalOpportunitiesSection() {
  //  this will contain the data from notion
  const [opportunities, setOpportunities] = useState([{}]);

  //  this fetches the opportunities data and assigns it to opportunities (above)
  //   You can use the map function to iterate through the opportunities.

  useEffect(() => {
    fetch('http://localhost:5000/external-opps-api')
      .then((response) => response.json())
      .then((data) => {
        setOpportunities(data);
      });
  }, []);

  //  returns type of opportunity (ex. Conferences and Events)
  const getType = (properties) => properties.Type.select.name;

  //  returns name/title of opportunity
  const getName = (properties) => {
    const name = properties.Name;
    return name.title[0] ? name.title[0].text.content : 'No Title';
  };

  //  returns time of opportunity
  const getTime = (properties) => {
    const time = properties.Time;
    return time.rich_text[0] ? time.rich_text[0].text.content : 'None';
  };

  //  returns expiration date of opportunity
  const getExpiration = (properties) => {
    const expires = properties.Expires;
    return expires.date ? expires.date.start : 'NA';
  };

  //  returns location of opportunity
  const getLocation = (properties) => {
    const location = properties.Location;
    return location.rich_text[0] ? location.rich_text[0].text.content : 'None';
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
    return 'No Description';
  };

  //  returns url
  const getURL = (properties) => properties.Link.url;

  /*
  Please see the commented section below the return statement for an
  example of how to use the functions above to access the opportunities data.
  */

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
