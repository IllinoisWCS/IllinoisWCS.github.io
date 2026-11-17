import shapes from 'us-atlas/states-10m.json';
import styles from '@/styles/pages/AlumniMap.module.css';
import { ComposableMap, Geographies, Geography, Annotation } from 'react-simple-maps';



const STATE_ABBREVIATIONS = {
  Alabama: 'AL',
  Alaska: 'AK',
	Arizona: 'AZ',
	Arkansas: 'AR',
	California: 'CA',
	Colorado: 'CO',
	Connecticut: 'CT',
	Delaware: 'DE',
	'District of Columbia': 'DC',
	Florida: 'FL',
	Georgia: 'GA',
	Hawaii: 'HI',
	Idaho: 'ID',
	Illinois: 'IL',
	Indiana: 'IN',
	Iowa: 'IA',
	Kansas: 'KS',
	Kentucky: 'KY',
	Louisiana: 'LA',
	Maine: 'ME',
	Maryland: 'MD',
	Massachusetts: 'MA',
	Michigan: 'MI',
	Minnesota: 'MN',
	Mississippi: 'MS',
	Missouri: 'MO',
	Montana: 'MT',
	Nebraska: 'NE',
	Nevada: 'NV',
	'New Hampshire': 'NH',
	'New Jersey': 'NJ',
	'New Mexico': 'NM',
	'New York': 'NY',
	'North Carolina': 'NC',
	'North Dakota': 'ND',
	Ohio: 'OH',
	Oklahoma: 'OK',
	Oregon: 'OR',
	Pennsylvania: 'PA',
	'Rhode Island': 'RI',
	'South Carolina': 'SC',
	'South Dakota': 'SD',
	Tennessee: 'TN',
	Texas: 'TX',
	Utah: 'UT',
	Vermont: 'VT',
	Virginia: 'VA',
	Washington: 'WA',
	'West Virginia': 'WV',
	Wisconsin: 'WI',
	Wyoming: 'WY',
};
const ANNOTATIONS = {
	Vermont: { dx: 0, dy: -30 },
	'New Hampshire': { dx: 30, dy: -4 },
	Massachusetts: { dx: 40, dy: -2 },
	'Rhode Island': { dx: 40, dy: 8 },
	Connecticut: { dx: 36, dy: 18 },
	'New Jersey': { dx: 32, dy: 0 },
	Delaware: { dx: 40, dy: -2 },
	Maryland: { dx: 58, dy: 10 },
};
const SMALL_STATES = Object.keys(ANNOTATIONS);

const LABEL_NUDGES = {
	Florida: { dx: 20, dy: 18 },
	Michigan: { dx: 12, dy: 20 },
	Louisiana: { dx: -8, dy: -4 },
	Hawaii: { dx: -30, dy: 0 }
};

const getShade = (count) =>
	count >= 3 ? 2 : count >= 1 ? 1 : 0;
export default function USMap({ stories }) {
	const countByState = {};
	stories.forEach((story) => {
		countByState[story.state] = (countByState[story.state] || 0) + 1;
	});
	return (
		<div className={styles.mapContainer}>
			<ComposableMap
				width={975}
				height={610}
				projection="geoAlbersUsa"
				projectionConfig={{ scale: 1200 }}
			>
				<Geographies
					geography={shapes}
					parseGeographies={(features) =>
						features.filter((f) => STATE_ABBREVIATIONS[f.properties.name])
					}

				>
					{({ geographies, path, projection }) => (
						<>
							{geographies
								.map((geo) => (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										className={`${styles.state} ${styles[
											`shade${getShade(
												countByState[geo.properties.name] || 0,
											)}`
										]
											}`}
									/>
								))}

							{geographies
								.map((geo) => ({
									name: geo.properties.name,
									center: path.centroid(geo),
								}))
								.filter(({ name }) => name !== 'District of Columbia')
								.map(({ name, center: [x, y] }) =>
									SMALL_STATES.includes(name) ? (
										<Annotation
											key={name}
											subject={projection.invert([x, y])}
											dx={ANNOTATIONS[name].dx}
											dy={ANNOTATIONS[name].dy}
											connectorProps={{ stroke: "#d9565f", strokeWidth: 1 }}
										>
											<text
												x={name === 'Vermont' ? 0 : 4}
												y={name === 'Vermont' ? -8 : 0}
												textAnchor={name === 'Vermont' ? 'middle' : 'start'}
												dominantBaseline="central"
												className={styles.label}
											>
												{STATE_ABBREVIATIONS[name]}
											</text>
										</Annotation>
									) : (
										<text
											key={name}
											x={x + (LABEL_NUDGES[name]?.dx ?? 0)}
											y={y + (LABEL_NUDGES[name]?.dy ?? 0)}
											textAnchor="middle"
											dominantBaseline="central"
											className={styles.label}
										>
											{STATE_ABBREVIATIONS[name]}
										</text>
									),
								)}
						</>
					)}
				</Geographies>
			</ComposableMap>
		</div>
	);
}