import React from 'react'

const World = () => {

    const world = ['Aland Islands', 'Algeria', 'Andorra', 'Anguilla', 'Antigua and Barbuda', 'Armenia', 'Australia', 'Azerbaijan', 'Bahrain', 'Barbados', 'Belgium', 'Benin', 'Bhutan', 'Bosnia and Herzegovina', 'Brazil', 'British Virgin Islands', 'Bulgaria', 'Burundi', 'Cameroon', 'Cape Verde', 'Central African Republic', 'Chile', 'Christmas Island', 'Colombia', 'Cook Islands', "Cote d'Ivoire", 'Cuba', 'Cyprus', 'Democratic Republic of the Congo', 'Djibouti', 'Dominican Republic', 'Egypt', 'Equatorial Guinea', 'Estonia', 'Falkland Islands', 'Federated States of Micronesia', 'Finland', 'French Polynesia', 'Gabon', 'Germany', 'Gibraltar', 'Greenland', 'Guam', 'Guernsey', 'Guinea-Bissau', 'Haiti', 'Honduras', 'Hungary', 'India', 'Iran', 'Ireland', 'Israel', 'Jamaica', 'Jersey', 'Kazakhstan', 'Kiribati', 'Kuwait', 'Laos', 'Lebanon', 'Liberia', 'Liechtenstein', 'Luxembourg', 'Macedonia', 'Malawi', 'Maldives', 'Malta', 'Mauritania', 'Mexico', 'Monaco', 'Montenegro', 'Morocco', 'Myanmar', 'Nauru', 'Netherlands', 'New Zealand', 'Niger', 'Niue', 'North Korea', 'Northern Mariana Islands', 'Oman', 'Palau', 'Panama', 'Paraguay', 'Philippines', 'Poland', 'Puerto Rico', 'Republic of Congo', 'Russia', 'Saint Barthelemy', 'Saint Kitts and Nevis', 'Saint Martin', 'Saint Vincent and the Grenadines', 'San Marino', 'Saudi Arabia', 'Serbia', 'Sierra Leone', 'Sint Maarten', 'Slovenia', 'Somalia', 'South Africa', 'South Korea', 'Spain', 'Sudan', 'Svalbard', 'Sweden', 'Syria', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Tokelau', 'Trinidad and Tobago', 'Turkey', 'Turks and Caicos Islands', 'Uganda', 'United Arab Emirates', 'United States', 'US Minor Outlying Islands', 'Uzbekistan', 'Vatican City', 'Vietnam', 'Western Sahara', 'Zambia', 'Kabul', 'Tirana', 'Pago Pago', 'Luanda', 'Buenos Aires', 'Oranjestad', 'Vienna', 'Nassau', 'Dhaka', 'Minsk', 'Belmopan', 'Hamilton', 'La Paz', 'Gaborone', 'Diego Garcia', 'Bandar Seri Begawan', 'Ouagadougou', 'Phnom Penh', 'Ottawa', 'George Town', "N'Djamena", 'Beijing', 'West Island', 'Moroni', 'San Jose', 'Zagreb', 'Willemstad', 'Prague', 'Copenhagen', 'Roseau', 'Quito', 'San Salvador', 'Asmara', 'Addis Ababa', 'Torshavn', 'Suva', 'Paris', 'Port-aux-Français', 'Tbilisi', 'Accra', 'Athens', "Saint George's", 'Guatemala City', 'Conakry', 'Georgetown', 'Reykjavik', 'Jakarta', 'Baghdad', 'Douglas', 'Rome', 'Tokyo', 'Amman', 'Nairobi', 'Pristina', 'Bishkek', 'Riga', 'Maseru', 'Tripoli', 'Vilnius', 'Antananarivo', 'Kuala Lumpur', 'Bamako', 'Majuro', 'Port Louis', 'Chisinau', 'Ulaanbaatar', 'Plymouth', 'Maputo', 'Windhoek', 'Kathmandu', 'Noumea', 'Managua', 'Abuja', 'Kingston', 'North Nicosia', 'Oslo', 'Islamabad', 'Jerusalem', 'Port Moresby', 'Lima', 'Adamstown', 'Lisbon', 'Doha', 'Bucharest', 'Kigali', 'Jamestown', 'Castries', 'Saint-Pierre', 'Apia', 'Sao Tome', 'Dakar', 'Victoria', 'Singapore', 'Bratislava', 'Honiara', 'Hargeisa', 'King Edward Point', 'Juba', 'Colombo', 'Paramaribo', 'Mbabane', 'Bern', 'Taipei', 'Dar es Salaam', 'Banjul', 'Lome', "Nuku'alofa", 'Tunis', 'Ashgabat', 'Funafuti', 'Kyiv', 'London', 'Montevideo', 'Charlotte Amalie', 'Port-Vila', 'Caracas', 'Mata-Utu', 'Sanaa', 'Harare']

    const index = Math.floor(Math.random() * 200)

    return (
        <div className="Word-row" word={world[index]}>
            <span className="category-box world left">W</span>
            <span className="Word">{world[index]}</span>
            <span class="category-box world right" />
        </div>
    )
}

export default World
