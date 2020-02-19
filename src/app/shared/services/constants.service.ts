import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() {
  }

  countryCodeList = [
    {
      name: 'Israel',
      dial_code: '+972',
      code: 'IL'
    },
    {
      name: 'Afghanistan',
      dial_code: '+93',
      code: 'AF'
    },
    {
      name: 'Albania',
      dial_code: '+355',
      code: 'AL'
    },
    {
      name: 'Algeria',
      dial_code: '+213',
      code: 'DZ'
    },
    {
      name: 'AmericanSamoa',
      dial_code: '+1 684',
      code: 'AS'
    },
    {
      name: 'Andorra',
      dial_code: '+376',
      code: 'AD'
    },
    {
      name: 'Angola',
      dial_code: '+244',
      code: 'AO'
    },
    {
      name: 'Anguilla',
      dial_code: '+1 264',
      code: 'AI'
    },
    {
      name: 'Antigua and Barbuda',
      dial_code: '+1268',
      code: 'AG'
    },
    {
      name: 'Argentina',
      dial_code: '+54',
      code: 'AR'
    },
    {
      name: 'Armenia',
      dial_code: '+374',
      code: 'AM'
    },
    {
      name: 'Aruba',
      dial_code: '+297',
      code: 'AW'
    },
    {
      name: 'Australia',
      dial_code: '+61',
      code: 'AU'
    },
    {
      name: 'Austria',
      dial_code: '+43',
      code: 'AT'
    },
    {
      name: 'Azerbaijan',
      dial_code: '+994',
      code: 'AZ'
    },
    {
      name: 'Bahamas',
      dial_code: '+1 242',
      code: 'BS'
    },
    {
      name: 'Bahrain',
      dial_code: '+973',
      code: 'BH'
    },
    {
      name: 'Bangladesh',
      dial_code: '+880',
      code: 'BD'
    },
    {
      name: 'Barbados',
      dial_code: '+1 246',
      code: 'BB'
    },
    {
      name: 'Belarus',
      dial_code: '+375',
      code: 'BY'
    },
    {
      name: 'Belgium',
      dial_code: '+32',
      code: 'BE'
    },
    {
      name: 'Belize',
      dial_code: '+501',
      code: 'BZ'
    },
    {
      name: 'Benin',
      dial_code: '+229',
      code: 'BJ'
    },
    {
      name: 'Bermuda',
      dial_code: '+1 441',
      code: 'BM'
    },
    {
      name: 'Bhutan',
      dial_code: '+975',
      code: 'BT'
    },
    {
      name: 'Bosnia and Herzegovina',
      dial_code: '+387',
      code: 'BA'
    },
    {
      name: 'Botswana',
      dial_code: '+267',
      code: 'BW'
    },
    {
      name: 'Brazil',
      dial_code: '+55',
      code: 'BR'
    },
    {
      name: 'British Indian Ocean Territory',
      dial_code: '+246',
      code: 'IO'
    },
    {
      name: 'Bulgaria',
      dial_code: '+359',
      code: 'BG'
    },
    {
      name: 'Burkina Faso',
      dial_code: '+226',
      code: 'BF'
    },
    {
      name: 'Burundi',
      dial_code: '+257',
      code: 'BI'
    },
    {
      name: 'Cambodia',
      dial_code: '+855',
      code: 'KH'
    },
    {
      name: 'Cameroon',
      dial_code: '+237',
      code: 'CM'
    },
    {
      name: 'Canada',
      dial_code: '+1',
      code: 'CA'
    },
    {
      name: 'Cape Verde',
      dial_code: '+238',
      code: 'CV'
    },
    {
      name: 'Cayman Islands',
      dial_code: '+ 345',
      code: 'KY'
    },
    {
      name: 'Central African Republic',
      dial_code: '+236',
      code: 'CF'
    },
    {
      name: 'Chad',
      dial_code: '+235',
      code: 'TD'
    },
    {
      name: 'Chile',
      dial_code: '+56',
      code: 'CL'
    },
    {
      name: 'China',
      dial_code: '+86',
      code: 'CN'
    },
    {
      name: 'Christmas Island',
      dial_code: '+61',
      code: 'CX'
    },
    {
      name: 'Colombia',
      dial_code: '+57',
      code: 'CO'
    },
    {
      name: 'Comoros',
      dial_code: '+269',
      code: 'KM'
    },
    {
      name: 'Congo',
      dial_code: '+242',
      code: 'CG'
    },
    {
      name: 'Cook Islands',
      dial_code: '+682',
      code: 'CK'
    },
    {
      name: 'Costa Rica',
      dial_code: '+506',
      code: 'CR'
    },
    {
      name: 'Croatia',
      dial_code: '+385',
      code: 'HR'
    },
    {
      name: 'Cuba',
      dial_code: '+53',
      code: 'CU'
    },
    {
      name: 'Cyprus',
      dial_code: '+537',
      code: 'CY'
    },
    {
      name: 'Czech Republic',
      dial_code: '+420',
      code: 'CZ'
    },
    {
      name: 'Denmark',
      dial_code: '+45',
      code: 'DK'
    },
    {
      name: 'Djibouti',
      dial_code: '+253',
      code: 'DJ'
    },
    {
      name: 'Dominica',
      dial_code: '+1 767',
      code: 'DM'
    },
    {
      name: 'Dominican Republic',
      dial_code: '+1 849',
      code: 'DO'
    },
    {
      name: 'Ecuador',
      dial_code: '+593',
      code: 'EC'
    },
    {
      name: 'Egypt',
      dial_code: '+20',
      code: 'EG'
    },
    {
      name: 'El Salvador',
      dial_code: '+503',
      code: 'SV'
    },
    {
      name: 'Equatorial Guinea',
      dial_code: '+240',
      code: 'GQ'
    },
    {
      name: 'Eritrea',
      dial_code: '+291',
      code: 'ER'
    },
    {
      name: 'Estonia',
      dial_code: '+372',
      code: 'EE'
    },
    {
      name: 'Ethiopia',
      dial_code: '+251',
      code: 'ET'
    },
    {
      name: 'Faroe Islands',
      dial_code: '+298',
      code: 'FO'
    },
    {
      name: 'Fiji',
      dial_code: '+679',
      code: 'FJ'
    },
    {
      name: 'Finland',
      dial_code: '+358',
      code: 'FI'
    },
    {
      name: 'France',
      dial_code: '+33',
      code: 'FR'
    },
    {
      name: 'French Guiana',
      dial_code: '+594',
      code: 'GF'
    },
    {
      name: 'French Polynesia',
      dial_code: '+689',
      code: 'PF'
    },
    {
      name: 'Gabon',
      dial_code: '+241',
      code: 'GA'
    },
    {
      name: 'Gambia',
      dial_code: '+220',
      code: 'GM'
    },
    {
      name: 'Georgia',
      dial_code: '+995',
      code: 'GE'
    },
    {
      name: 'Germany',
      dial_code: '+49',
      code: 'DE'
    },
    {
      name: 'Ghana',
      dial_code: '+233',
      code: 'GH'
    },
    {
      name: 'Gibraltar',
      dial_code: '+350',
      code: 'GI'
    },
    {
      name: 'Greece',
      dial_code: '+30',
      code: 'GR'
    },
    {
      name: 'Greenland',
      dial_code: '+299',
      code: 'GL'
    },
    {
      name: 'Grenada',
      dial_code: '+1 473',
      code: 'GD'
    },
    {
      name: 'Guadeloupe',
      dial_code: '+590',
      code: 'GP'
    },
    {
      name: 'Guam',
      dial_code: '+1 671',
      code: 'GU'
    },
    {
      name: 'Guatemala',
      dial_code: '+502',
      code: 'GT'
    },
    {
      name: 'Guinea',
      dial_code: '+224',
      code: 'GN'
    },
    {
      name: 'Guinea-Bissau',
      dial_code: '+245',
      code: 'GW'
    },
    {
      name: 'Guyana',
      dial_code: '+595',
      code: 'GY'
    },
    {
      name: 'Haiti',
      dial_code: '+509',
      code: 'HT'
    },
    {
      name: 'Honduras',
      dial_code: '+504',
      code: 'HN'
    },
    {
      name: 'Hungary',
      dial_code: '+36',
      code: 'HU'
    },
    {
      name: 'Iceland',
      dial_code: '+354',
      code: 'IS'
    },
    {
      name: 'India',
      dial_code: '+91',
      code: 'IN'
    },
    {
      name: 'Indonesia',
      dial_code: '+62',
      code: 'ID'
    },
    {
      name: 'Iraq',
      dial_code: '+964',
      code: 'IQ'
    },
    {
      name: 'Ireland',
      dial_code: '+353',
      code: 'IE'
    },
    {
      name: 'Israel',
      dial_code: '+972',
      code: 'IL'
    },
    {
      name: 'Italy',
      dial_code: '+39',
      code: 'IT'
    },
    {
      name: 'Jamaica',
      dial_code: '+1 876',
      code: 'JM'
    },
    {
      name: 'Japan',
      dial_code: '+81',
      code: 'JP'
    },
    {
      name: 'Jordan',
      dial_code: '+962',
      code: 'JO'
    },
    {
      name: 'Kazakhstan',
      dial_code: '+7 7',
      code: 'KZ'
    },
    {
      name: 'Kenya',
      dial_code: '+254',
      code: 'KE'
    },
    {
      name: 'Kiribati',
      dial_code: '+686',
      code: 'KI'
    },
    {
      name: 'Kuwait',
      dial_code: '+965',
      code: 'KW'
    },
    {
      name: 'Kyrgyzstan',
      dial_code: '+996',
      code: 'KG'
    },
    {
      name: 'Latvia',
      dial_code: '+371',
      code: 'LV'
    },
    {
      name: 'Lebanon',
      dial_code: '+961',
      code: 'LB'
    },
    {
      name: 'Lesotho',
      dial_code: '+266',
      code: 'LS'
    },
    {
      name: 'Liberia',
      dial_code: '+231',
      code: 'LR'
    },
    {
      name: 'Liechtenstein',
      dial_code: '+423',
      code: 'LI'
    },
    {
      name: 'Lithuania',
      dial_code: '+370',
      code: 'LT'
    },
    {
      name: 'Luxembourg',
      dial_code: '+352',
      code: 'LU'
    },
    {
      name: 'Madagascar',
      dial_code: '+261',
      code: 'MG'
    },
    {
      name: 'Malawi',
      dial_code: '+265',
      code: 'MW'
    },
    {
      name: 'Malaysia',
      dial_code: '+60',
      code: 'MY'
    },
    {
      name: 'Maldives',
      dial_code: '+960',
      code: 'MV'
    },
    {
      name: 'Mali',
      dial_code: '+223',
      code: 'ML'
    },
    {
      name: 'Malta',
      dial_code: '+356',
      code: 'MT'
    },
    {
      name: 'Marshall Islands',
      dial_code: '+692',
      code: 'MH'
    },
    {
      name: 'Martinique',
      dial_code: '+596',
      code: 'MQ'
    },
    {
      name: 'Mauritania',
      dial_code: '+222',
      code: 'MR'
    },
    {
      name: 'Mauritius',
      dial_code: '+230',
      code: 'MU'
    },
    {
      name: 'Mayotte',
      dial_code: '+262',
      code: 'YT'
    },
    {
      name: 'Mexico',
      dial_code: '+52',
      code: 'MX'
    },
    {
      name: 'Monaco',
      dial_code: '+377',
      code: 'MC'
    },
    {
      name: 'Mongolia',
      dial_code: '+976',
      code: 'MN'
    },
    {
      name: 'Montenegro',
      dial_code: '+382',
      code: 'ME'
    },
    {
      name: 'Montserrat',
      dial_code: '+1664',
      code: 'MS'
    },
    {
      name: 'Morocco',
      dial_code: '+212',
      code: 'MA'
    },
    {
      name: 'Myanmar',
      dial_code: '+95',
      code: 'MM'
    },
    {
      name: 'Namibia',
      dial_code: '+264',
      code: 'NA'
    },
    {
      name: 'Nauru',
      dial_code: '+674',
      code: 'NR'
    },
    {
      name: 'Nepal',
      dial_code: '+977',
      code: 'NP'
    },
    {
      name: 'Netherlands',
      dial_code: '+31',
      code: 'NL'
    },
    {
      name: 'Netherlands Antilles',
      dial_code: '+599',
      code: 'AN'
    },
    {
      name: 'New Caledonia',
      dial_code: '+687',
      code: 'NC'
    },
    {
      name: 'New Zealand',
      dial_code: '+64',
      code: 'NZ'
    },
    {
      name: 'Nicaragua',
      dial_code: '+505',
      code: 'NI'
    },
    {
      name: 'Niger',
      dial_code: '+227',
      code: 'NE'
    },
    {
      name: 'Nigeria',
      dial_code: '+234',
      code: 'NG'
    },
    {
      name: 'Niue',
      dial_code: '+683',
      code: 'NU'
    },
    {
      name: 'Norfolk Island',
      dial_code: '+672',
      code: 'NF'
    },
    {
      name: 'Northern Mariana Islands',
      dial_code: '+1 670',
      code: 'MP'
    },
    {
      name: 'Norway',
      dial_code: '+47',
      code: 'NO'
    },
    {
      name: 'Oman',
      dial_code: '+968',
      code: 'OM'
    },
    {
      name: 'Pakistan',
      dial_code: '+92',
      code: 'PK'
    },
    {
      name: 'Palau',
      dial_code: '+680',
      code: 'PW'
    },
    {
      name: 'Panama',
      dial_code: '+507',
      code: 'PA'
    },
    {
      name: 'Papua New Guinea',
      dial_code: '+675',
      code: 'PG'
    },
    {
      name: 'Paraguay',
      dial_code: '+595',
      code: 'PY'
    },
    {
      name: 'Peru',
      dial_code: '+51',
      code: 'PE'
    },
    {
      name: 'Philippines',
      dial_code: '+63',
      code: 'PH'
    },
    {
      name: 'Poland',
      dial_code: '+48',
      code: 'PL'
    },
    {
      name: 'Portugal',
      dial_code: '+351',
      code: 'PT'
    },
    {
      name: 'Puerto Rico',
      dial_code: '+1 939',
      code: 'PR'
    },
    {
      name: 'Qatar',
      dial_code: '+974',
      code: 'QA'
    },
    {
      name: 'Romania',
      dial_code: '+40',
      code: 'RO'
    },
    {
      name: 'Rwanda',
      dial_code: '+250',
      code: 'RW'
    },
    {
      name: 'Samoa',
      dial_code: '+685',
      code: 'WS'
    },
    {
      name: 'San Marino',
      dial_code: '+378',
      code: 'SM'
    },
    {
      name: 'Saudi Arabia',
      dial_code: '+966',
      code: 'SA'
    },
    {
      name: 'Senegal',
      dial_code: '+221',
      code: 'SN'
    },
    {
      name: 'Serbia',
      dial_code: '+381',
      code: 'RS'
    },
    {
      name: 'Seychelles',
      dial_code: '+248',
      code: 'SC'
    },
    {
      name: 'Sierra Leone',
      dial_code: '+232',
      code: 'SL'
    },
    {
      name: 'Singapore',
      dial_code: '+65',
      code: 'SG'
    },
    {
      name: 'Slovakia',
      dial_code: '+421',
      code: 'SK'
    },
    {
      name: 'Slovenia',
      dial_code: '+386',
      code: 'SI'
    },
    {
      name: 'Solomon Islands',
      dial_code: '+677',
      code: 'SB'
    },
    {
      name: 'South Africa',
      dial_code: '+27',
      code: 'ZA'
    },
    {
      name: 'South Georgia and the South Sandwich Islands',
      dial_code: '+500',
      code: 'GS'
    },
    {
      name: 'Spain',
      dial_code: '+34',
      code: 'ES'
    },
    {
      name: 'Sri Lanka',
      dial_code: '+94',
      code: 'LK'
    },
    {
      name: 'Sudan',
      dial_code: '+249',
      code: 'SD'
    },
    {
      name: 'Suriname',
      dial_code: '+597',
      code: 'SR'
    },
    {
      name: 'Swaziland',
      dial_code: '+268',
      code: 'SZ'
    },
    {
      name: 'Sweden',
      dial_code: '+46',
      code: 'SE'
    },
    {
      name: 'Switzerland',
      dial_code: '+41',
      code: 'CH'
    },
    {
      name: 'Tajikistan',
      dial_code: '+992',
      code: 'TJ'
    },
    {
      name: 'Thailand',
      dial_code: '+66',
      code: 'TH'
    },
    {
      name: 'Togo',
      dial_code: '+228',
      code: 'TG'
    },
    {
      name: 'Tokelau',
      dial_code: '+690',
      code: 'TK'
    },
    {
      name: 'Tonga',
      dial_code: '+676',
      code: 'TO'
    },
    {
      name: 'Trinidad and Tobago',
      dial_code: '+1 868',
      code: 'TT'
    },
    {
      name: 'Tunisia',
      dial_code: '+216',
      code: 'TN'
    },
    {
      name: 'Turkey',
      dial_code: '+90',
      code: 'TR'
    },
    {
      name: 'Turkmenistan',
      dial_code: '+993',
      code: 'TM'
    },
    {
      name: 'Turks and Caicos Islands',
      dial_code: '+1 649',
      code: 'TC'
    },
    {
      name: 'Tuvalu',
      dial_code: '+688',
      code: 'TV'
    },
    {
      name: 'Uganda',
      dial_code: '+256',
      code: 'UG'
    },
    {
      name: 'Ukraine',
      dial_code: '+380',
      code: 'UA'
    },
    {
      name: 'United Arab Emirates',
      dial_code: '+971',
      code: 'AE'
    },
    {
      name: 'United Kingdom',
      dial_code: '+44',
      code: 'GB'
    },
    {
      name: 'United States',
      dial_code: '+1',
      code: 'US'
    },
    {
      name: 'Uruguay',
      dial_code: '+598',
      code: 'UY'
    },
    {
      name: 'Uzbekistan',
      dial_code: '+998',
      code: 'UZ'
    },
    {
      name: 'Vanuatu',
      dial_code: '+678',
      code: 'VU'
    },
    {
      name: 'Wallis and Futuna',
      dial_code: '+681',
      code: 'WF'
    },
    {
      name: 'Yemen',
      dial_code: '+967',
      code: 'YE'
    },
    {
      name: 'Zambia',
      dial_code: '+260',
      code: 'ZM'
    },
    {
      name: 'Zimbabwe',
      dial_code: '+263',
      code: 'ZW'
    },
    {
      name: 'land Islands',
      dial_code: '',
      code: 'AX'
    },
    {
      name: 'Antarctica',
      dial_code: null,
      code: 'AQ'
    },
    {
      name: 'Bolivia, Plurinational State of',
      dial_code: '+591',
      code: 'BO'
    },
    {
      name: 'Brunei Darussalam',
      dial_code: '+673',
      code: 'BN'
    },
    {
      name: 'Cocos (Keeling) Islands',
      dial_code: '+61',
      code: 'CC'
    },
    {
      name: 'Congo, The Democratic Republic of the',
      dial_code: '+243',
      code: 'CD'
    },
    {
      name: 'Cote d\'Ivoire',
      dial_code: '+225',
      code: 'CI'
    },
    {
      name: 'Falkland Islands (Malvinas)',
      dial_code: '+500',
      code: 'FK'
    },
    {
      name: 'Guernsey',
      dial_code: '+44',
      code: 'GG'
    },
    {
      name: 'Holy See (Vatican City State)',
      dial_code: '+379',
      code: 'VA'
    },
    {
      name: 'Hong Kong',
      dial_code: '+852',
      code: 'HK'
    },
    {
      name: 'Iran, Islamic Republic of',
      dial_code: '+98',
      code: 'IR'
    },
    {
      name: 'Isle of Man',
      dial_code: '+44',
      code: 'IM'
    },
    {
      name: 'Jersey',
      dial_code: '+44',
      code: 'JE'
    },
    {
      name: 'Korea, Democratic People\'s Republic of',
      dial_code: '+850',
      code: 'KP'
    },
    {
      name: 'Korea, Republic of',
      dial_code: '+82',
      code: 'KR'
    },
    {
      name: 'Lao People\'s Democratic Republic',
      dial_code: '+856',
      code: 'LA'
    },
    {
      name: 'Libyan Arab Jamahiriya',
      dial_code: '+218',
      code: 'LY'
    },
    {
      name: 'Macao',
      dial_code: '+853',
      code: 'MO'
    },
    {
      name: 'Macedonia, The Former Yugoslav Republic of',
      dial_code: '+389',
      code: 'MK'
    },
    {
      name: 'Micronesia, Federated States of',
      dial_code: '+691',
      code: 'FM'
    },
    {
      name: 'Moldova, Republic of',
      dial_code: '+373',
      code: 'MD'
    },
    {
      name: 'Mozambique',
      dial_code: '+258',
      code: 'MZ'
    },
    {
      name: 'Palestinian Territory, Occupied',
      dial_code: '+970',
      code: 'PS'
    },
    {
      name: 'Pitcairn',
      dial_code: '+872',
      code: 'PN'
    },
    {
      name: 'Réunion',
      dial_code: '+262',
      code: 'RE'
    },
    {
      name: 'Russia',
      dial_code: '+7',
      code: 'RU'
    },
    {
      name: 'Saint Barthélemy',
      dial_code: '+590',
      code: 'BL'
    },
    {
      name: 'Saint Helena, Ascension and Tristan Da Cunha',
      dial_code: '+290',
      code: 'SH'
    },
    {
      name: 'Saint Kitts and Nevis',
      dial_code: '+1 869',
      code: 'KN'
    },
    {
      name: 'Saint Lucia',
      dial_code: '+1 758',
      code: 'LC'
    },
    {
      name: 'Saint Martin',
      dial_code: '+590',
      code: 'MF'
    },
    {
      name: 'Saint Pierre and Miquelon',
      dial_code: '+508',
      code: 'PM'
    },
    {
      name: 'Saint Vincent and the Grenadines',
      dial_code: '+1 784',
      code: 'VC'
    },
    {
      name: 'Sao Tome and Principe',
      dial_code: '+239',
      code: 'ST'
    },
    {
      name: 'Somalia',
      dial_code: '+252',
      code: 'SO'
    },
    {
      name: 'Svalbard and Jan Mayen',
      dial_code: '+47',
      code: 'SJ'
    },
    {
      name: 'Syrian Arab Republic',
      dial_code: '+963',
      code: 'SY'
    },
    {
      name: 'Taiwan, Province of China',
      dial_code: '+886',
      code: 'TW'
    },
    {
      name: 'Tanzania, United Republic of',
      dial_code: '+255',
      code: 'TZ'
    },
    {
      name: 'Timor-Leste',
      dial_code: '+670',
      code: 'TL'
    },
    {
      name: 'Venezuela, Bolivarian Republic of',
      dial_code: '+58',
      code: 'VE'
    },
    {
      name: 'Viet Nam',
      dial_code: '+84',
      code: 'VN'
    },
    {
      name: 'Virgin Islands, British',
      dial_code: '+1 284',
      code: 'VG'
    },
    {
      name: 'Virgin Islands, U.S.',
      dial_code: '+1 340',
      code: 'VI'
    }
  ];

  // statesEn = [
  //   'East Azerbaijan',
  //   'West Azerbaijan',
  //   'Ardabil',
  //   'Isfahan',
  //   'Alborz',
  //   'Ilam',
  //   'Bushehr',
  //   'Tehran',
  //   'Chahar Mahaal and Bakhtiari',
  //   'South Khorasan',
  //   'Razavi Khorasan',
  //   'North Khorasan',
  //   'Khuzestan',
  //   'Zanjan',
  //   'Semnan',
  //   'Sistan and Baluchestan',
  //   'Fars',
  //   'Qazvin',
  //   'Qom',
  //   'Kurdistan',
  //   'Kerman',
  //   'Kermanshah',
  //   'Kohgiluyeh and Boyer-Ahmad',
  //   'Golestan',
  //   'Gilan',
  //   'Lorestan',
  //   'Mazandaran',
  //   'Markazi',
  //   'Hormozgān',
  //   'Hamadan',
  //   'Yazd'
  // ];
  // statesFa = [
  //   'آذربایجان شرقی',
  //   'آذربایجان غربی',
  //   'اردبیل',
  //   'اصفهان',
  //   'البرز',
  //   'ایلام',
  //   'بوشهر',
  //   'تهران',
  //   'چهار محال بختیاری',
  //   'خراسان جنوبی',
  //   'خراسان رضوی',
  //   'خراسان شمالی',
  //   'خوزستان',
  //   'زنجان',
  //   'سمنان',
  //   'سیستان و بلوچسستان',
  //   'فارس',
  //   'قزوین',
  //   'قم',
  //   'کردستان',
  //   'کرمان',
  //   'کرمانشاه',
  //   'کهکیلویه و بویر احمد',
  //   'گلستان',
  //   'گیلان',
  //   'لرستان',
  //   'مازندران',
  //   'مرکزی',
  //   'هرمزگان',
  //   'همدان',
  //   'یزد'
  // ];

  stateCity =
    [
      {
        stateName: 'آذربایجان شرقی', city:
          [
            {name: 'کشکسرای'},
            {name: 'سهند'},
            {name: 'سیس'},
            {name: 'دوزدوزان'},
            {name: 'تیمورلو'},
            {name: 'صوفیان'},
            {name: 'سردرود'},
            {name: 'هادیشهر'},
            {name: 'هشترود'},
            {name: 'زرنق'},
            {name: 'ترکمانچای'},
            {name: 'ورزقان'},
            {name: 'تسوج'},
            {name: 'زنوز'},
            {name: 'ایلخچی'},
            {name: 'شرفخانه'},
            {name: 'مهربان'},
            {name: 'مبارک شهر'},
            {name: 'تیکمه داش'},
            {name: 'باسمنج'},
            {name: 'سیه رود'},
            {name: 'میانه'},
            {name: 'خمارلو'},
            {name: 'خواجه'},
            {name: 'بناب مرند'},
            {name: 'قره آغاج'},
            {name: 'وایقان'},
            {name: 'مراغه'},
            {name: 'ممقان'},
            {name: 'خامنه'},
            {name: 'خسروشاه'},
            {name: 'لیلان'},
            {name: 'نظرکهریزی'},
            {name: 'اهر'},
            {name: 'بخشایش'},
            {name: 'آقکند'},
            {name: 'جوان قلعه'},
            {name: 'کلیبر'},
            {name: 'مرند'},
            {name: 'اسکو'},
            {name: 'شندآباد'},
            {name: 'شربیان'},
            {name: 'گوگان'},
            {name: 'بستان آباد'},
            {name: 'تبریز'},
            {name: 'جلفا'},
            {name: 'اچاچی'},
            {name: 'هریس'},
            {name: 'یامچی'},
            {name: 'خاروانا'},
            {name: 'کوزه کنان'},
            {name: 'خداجو(خراجو)'},
            {name: 'آذرشهر'},
            {name: 'شبستر'},
            {name: 'سراب'},
            {name: 'ملکان'},
            {name: 'بناب'},
            {name: 'هوراند'},
            {name: 'کلوانق'},
            {name: 'ترک'},
            {name: 'عجب شیر'},
            {name: 'آبش احمد'}
          ]
      },
      {
        stateName: 'آذربایجان غربی', city:
          [
            {name: 'قره ضیاءالدین'},
            {name: 'تازه شهر'},
            {name: 'نالوس'},
            {name: 'ایواوغلی'},
            {name: 'شاهین دژ'},
            {name: 'گردکشانه'},
            {name: 'باروق'},
            {name: 'سیلوانه'},
            {name: 'بازرگان'},
            {name: 'نازک علیا'},
            {name: 'ربط'},
            {name: 'تکاب'},
            {name: 'دیزج دیز'},
            {name: 'سیمینه'},
            {name: 'نوشین'},
            {name: 'میاندوآب'},
            {name: 'مرگنلر'},
            {name: 'سلماس'},
            {name: 'آواجیق'},
            {name: 'قطور'},
            {name: 'محمودآباد'},
            {name: 'خوی'},
            {name: 'نقده'},
            {name: 'سرو'},
            {name: 'خلیفان'},
            {name: 'پلدشت'},
            {name: 'میرآباد'},
            {name: 'اشنویه'},
            {name: 'زرآباد'},
            {name: 'بوکان'},
            {name: 'پیرانشهر'},
            {name: 'چهاربرج'},
            {name: 'قوشچی'},
            {name: 'شوط'},
            {name: 'ماکو'},
            {name: 'سیه چشمه'},
            {name: 'سردشت'},
            {name: 'کشاورز'},
            {name: 'فیرورق'},
            {name: 'محمدیار'},
            {name: 'ارومیه'},
            {name: 'مهاباد'},
            {name: 'قره ضیاءالدین'}
          ]
      },
      {
        stateName: 'اردبیل', city:
          [
            {name: 'آبی بیگلو'},
            {name: 'پارس آباد'},
            {name: 'فخراباد'},
            {name: 'کلور'},
            {name: 'نیر'},
            {name: 'اردبیل'},
            {name: 'اسلام اباد'},
            {name: 'تازه کندانگوت'},
            {name: 'مشگین شهر'},
            {name: 'جعفرآباد'},
            {name: 'نمین'},
            {name: 'اصلاندوز'},
            {name: 'مرادلو'},
            {name: 'خلخال'},
            {name: 'کوراییم'},
            {name: 'هیر'},
            {name: 'گیوی'},
            {name: 'گرمی'},
            {name: 'لاهرود'},
            {name: 'هشتجین'},
            {name: 'عنبران'},
            {name: 'تازه کند'},
            {name: 'قصابه'},
            {name: 'رضی'},
            {name: 'سرعین'},
            {name: 'بیله سوار'},
            {name: 'آبی بیگلو'}
          ]
      },
      {
        stateName: 'اصفهان', city:
          [
            {name: 'ابریشم'},
            {name: 'گزبرخوار'},
            {name: 'زیار'},
            {name: 'زرین شهر'},
            {name: 'گلشن'},
            {name: 'پیربکران'},
            {name: 'خالدآباد'},
            {name: 'سجزی'},
            {name: 'گوگد'},
            {name: 'تیران'},
            {name: 'ونک'},
            {name: 'دهق'},
            {name: 'زواره'},
            {name: 'کاشان'},
            {name: 'ابوزیدآباد'},
            {name: 'اصغرآباد'},
            {name: 'بافران'},
            {name: 'شهرضا'},
            {name: 'خور'},
            {name: 'مجلسی'},
            {name: 'هرند'},
            {name: 'فولادشهر'},
            {name: 'کمشچه'},
            {name: 'کلیشادوسودرجان'},
            {name: 'لای بید'},
            {name: 'قهجاورستان'},
            {name: 'چرمهین'},
            {name: 'رزوه'},
            {name: 'فریدونشهر'},
            {name: 'طرق رود'},
            {name: 'نصرآباد'},
            {name: 'برزک'},
            {name: 'سفیدشهر'},
            {name: 'سمیرم'},
            {name: 'گلدشت'},
            {name: 'اردستان'},
            {name: 'جوشقان قالی'},
            {name: 'بویین ومیاندشت'},
            {name: 'کرکوند'},
            {name: 'درچه'},
            {name: 'انارک'},
            {name: 'دولت آباد'},
            {name: 'ایمانشهر'},
            {name: 'گرگاب'},
            {name: 'حسن اباد'},
            {name: 'سده لنجان'},
            {name: 'حبیب آباد'},
            {name: 'بهاران شهر'},
            {name: 'میمه'},
            {name: 'تودشک'},
            {name: 'گلشهر'},
            {name: 'رضوانشهر'},
            {name: 'داران'},
            {name: 'علویجه'},
            {name: 'نیک آباد'},
            {name: 'مشکات'},
            {name: 'آران وبیدگل'},
            {name: 'خوانسار'},
            {name: 'نجف آباد'},
            {name: 'منظریه'},
            {name: 'فرخی'},
            {name: 'دیزیچه'},
            {name: 'اژیه'},
            {name: 'زاینده رود'},
            {name: 'خورزوق'},
            {name: 'قهدریجان'},
            {name: 'شاهین شهر'},
            {name: 'بهارستان'},
            {name: 'چمگردان'},
            {name: 'دهاقان'},
            {name: 'برف انبار'},
            {name: 'بادرود'},
            {name: 'کوهپایه'},
            {name: 'گلپایگان'},
            {name: 'عسگران'},
            {name: 'حنا'},
            {name: 'کهریزسنگ'},
            {name: 'مهاباد'},
            {name: 'کامو و چوگان'},
            {name: 'افوس'},
            {name: 'زیباشهر'},
            {name: 'کوشک'},
            {name: 'نایین'},
            {name: 'سین'},
            {name: 'زازران'},
            {name: 'مبارکه'},
            {name: 'ورزنه'},
            {name: 'ورنامخواست'},
            {name: 'شاپورآباد'},
            {name: 'فلاورجان'},
            {name: 'وزوان'},
            {name: 'اصفهان'},
            {name: 'باغ بهادران'},
            {name: 'چادگان'},
            {name: 'دامنه'},
            {name: 'نطنز'},
            {name: 'محمدآباد'},
            {name: 'نیاسر'},
            {name: 'نوش آباد'},
            {name: 'کمه'},
            {name: 'جوزدان'},
            {name: 'قمصر'},
            {name: 'جندق'},
            {name: 'طالخونچه'},
            {name: 'خمینی شهر'},
            {name: 'باغشاد'},
            {name: 'دستگرد'},
            {name: 'ابریشم'}
          ]
      },
      {
        stateName: 'البرز', city:
          [
            {name: 'فردیس'},
            {name: 'چهارباغ'},
            {name: 'آسارا'},
            {name: 'کرج'},
            {name: 'طالقان'},
            {name: 'شهرجدیدهشتگرد'},
            {name: 'محمدشهر'},
            {name: 'مشکین دشت'},
            {name: 'نظرآباد'},
            {name: 'هشتگرد'},
            {name: 'ماهدشت'},
            {name: 'اشتهارد'},
            {name: 'کوهسار'},
            {name: 'گرمدره'},
            {name: 'تنکمان'},
            {name: 'گلسار'},
            {name: 'کمال شهر'},
            {name: 'فردیس'}
          ]
      },
      {
        stateName: 'ایلام', city:
          [
            {name: 'دلگشا'},
            {name: 'آبدانان'},
            {name: 'شباب'},
            {name: 'موسیان'},
            {name: 'بدره'},
            {name: 'ایلام'},
            {name: 'ایوان'},
            {name: 'مهران'},
            {name: 'آسمان آباد'},
            {name: 'پهله'},
            {name: 'مهر'},
            {name: 'سراب باغ'},
            {name: 'بلاوه'},
            {name: 'میمه'},
            {name: 'دره شهر'},
            {name: 'ارکواز'},
            {name: 'مورموری'},
            {name: 'توحید'},
            {name: 'دهلران'},
            {name: 'لومار'},
            {name: 'چوار'},
            {name: 'زرنه'},
            {name: 'صالح آباد'},
            {name: 'سرابله'},
            {name: 'ماژین'},
            {name: 'دلگشا'}
          ]
      },
      {
        stateName: 'بوشهر', city:
          [
            {name: 'آب پخش'},
            {name: 'ریز'},
            {name: 'برازجان'},
            {name: 'بندرریگ'},
            {name: 'اهرم'},
            {name: 'دوراهک'},
            {name: 'خورموج'},
            {name: 'نخل تقی'},
            {name: 'کلمه'},
            {name: 'بندردیلم'},
            {name: 'وحدتیه'},
            {name: 'بنک'},
            {name: 'چغادک'},
            {name: 'بندردیر'},
            {name: 'کاکی'},
            {name: 'جم'},
            {name: 'دالکی'},
            {name: 'بندرگناوه'},
            {name: 'آباد'},
            {name: 'آبدان'},
            {name: 'خارک'},
            {name: 'شنبه'},
            {name: 'بوشکان'},
            {name: 'انارستان'},
            {name: 'شبانکاره'},
            {name: 'سیراف'},
            {name: 'دلوار'},
            {name: 'بردستان'},
            {name: 'بادوله'},
            {name: 'عسلویه'},
            {name: 'تنگ ارم'},
            {name: 'امام حسن'},
            {name: 'سعد آباد'},
            {name: 'بندرکنگان'},
            {name: 'بوشهر'},
            {name: 'بردخون'},
            {name: 'آب پخش'}
          ]
      },
      {
        stateName: 'تهران', city:
          [
            {name: 'پردیس'},
            {name: 'شاهدشهر'},
            {name: 'پیشوا'},
            {name: 'جوادآباد'},
            {name: 'ارجمند'},
            {name: 'ری'},
            {name: 'نصیرشهر'},
            {name: 'رودهن'},
            {name: 'اندیشه'},
            {name: 'نسیم شهر'},
            {name: 'صباشهر'},
            {name: 'ملارد'},
            {name: 'شمشک'},
            {name: 'پاکدشت'},
            {name: 'باقرشهر'},
            {name: 'احمد آباد مستوفی'},
            {name: 'کیلان'},
            {name: 'قرچک'},
            {name: 'فردوسیه'},
            {name: 'گلستان'},
            {name: 'ورامین'},
            {name: 'فیروزکوه'},
            {name: 'فشم'},
            {name: 'پرند'},
            {name: 'آبعلی'},
            {name: 'چهاردانگه'},
            {name: 'تهران'},
            {name: 'بومهن'},
            {name: 'وحیدیه'},
            {name: 'صفادشت'},
            {name: 'لواسان'},
            {name: 'فرون اباد'},
            {name: 'کهریزک'},
            {name: 'رباطکریم'},
            {name: 'آبسرد'},
            {name: 'باغستان'},
            {name: 'صالحیه'},
            {name: 'شهریار'},
            {name: 'قدس'},
            {name: 'تجریش'},
            {name: 'شریف آباد'},
            {name: 'حسن آباد'},
            {name: 'اسلامشهر'},
            {name: 'دماوند'},
            {name: 'پردیس'}
          ]
      },
      {
        stateName: 'چهارمحال و بختیاری', city:
          [
            {name: 'مال خلیفه'},
            {name: 'وردنجان'},
            {name: 'گوجان'},
            {name: 'گهرو'},
            {name: 'سورشجان'},
            {name: 'سرخون'},
            {name: 'شهرکرد'},
            {name: 'منج'},
            {name: 'بروجن'},
            {name: 'پردنجان'},
            {name: 'سامان'},
            {name: 'فرخ شهر'},
            {name: 'صمصامی'},
            {name: 'طاقانک'},
            {name: 'کاج'},
            {name: 'نقنه'},
            {name: 'لردگان'},
            {name: 'باباحیدر'},
            {name: 'دستنا'},
            {name: 'سودجان'},
            {name: 'بازفت'},
            {name: 'هفشجان'},
            {name: 'سردشت'},
            {name: 'فرادبنه'},
            {name: 'چلیچه'},
            {name: 'بن'},
            {name: 'فارسان'},
            {name: 'شلمزار'},
            {name: 'نافچ'},
            {name: 'دشتک'},
            {name: 'بلداجی'},
            {name: 'آلونی'},
            {name: 'گندمان'},
            {name: 'جونقان'},
            {name: 'ناغان'},
            {name: 'هارونی'},
            {name: 'چلگرد'},
            {name: 'کیان'},
            {name: 'اردل'},
            {name: 'سفیددشت'},
            {name: 'مال خلیفه'}
          ]
      },
      {
        stateName: 'خراسان جنوبی', city:
          [
            {name: 'زهان'},
            {name: 'اسلامیه'},
            {name: 'شوسف'},
            {name: 'قاین'},
            {name: 'عشق آباد'},
            {name: 'طبس مسینا'},
            {name: 'ارسک'},
            {name: 'آیسک'},
            {name: 'نیمبلوک'},
            {name: 'دیهوک'},
            {name: 'سربیشه'},
            {name: 'محمدشهر'},
            {name: 'بیرجند'},
            {name: 'فردوس'},
            {name: 'نهبندان'},
            {name: 'اسفدن'},
            {name: 'گزیک'},
            {name: 'حاجی آباد'},
            {name: 'سه قلعه'},
            {name: 'آرین شهر'},
            {name: 'مود'},
            {name: 'خوسف'},
            {name: 'قهستان'},
            {name: 'بشرویه'},
            {name: 'سرایان'},
            {name: 'خضری دشت بیاض'},
            {name: 'طبس'},
            {name: 'اسدیه'},
            {name: 'زهان'}
          ]
      },
      {
        stateName: 'خراسان رضوی', city:
          [
            {name: 'خلیل آباد'},
            {name: 'بار'},
            {name: 'نیل شهر'},
            {name: 'جنگل'},
            {name: 'درود'},
            {name: 'رباط سنگ'},
            {name: 'سلطان آباد'},
            {name: 'فریمان'},
            {name: 'گناباد'},
            {name: 'کاریز'},
            {name: 'همت آباد'},
            {name: 'سلامی'},
            {name: 'باجگیران'},
            {name: 'بجستان'},
            {name: 'چناران'},
            {name: 'درگز'},
            {name: 'کلات'},
            {name: 'چکنه'},
            {name: 'نصرآباد'},
            {name: 'بردسکن'},
            {name: 'مشهد'},
            {name: 'کدکن'},
            {name: 'نقاب'},
            {name: 'قلندرآباد'},
            {name: 'کاشمر'},
            {name: 'شاندیز'},
            {name: 'نشتیفان'},
            {name: 'ششتمد'},
            {name: 'شادمهر'},
            {name: 'عشق آباد'},
            {name: 'چاپشلو'},
            {name: 'رشتخوار'},
            {name: 'قدمگاه'},
            {name: 'صالح آباد'},
            {name: 'داورزن'},
            {name: 'فرهادگرد'},
            {name: 'کاخک'},
            {name: 'مشهدریزه'},
            {name: 'جغتای'},
            {name: 'مزدآوند'},
            {name: 'قوچان'},
            {name: 'یونسی'},
            {name: 'سنگان'},
            {name: 'نوخندان'},
            {name: 'کندر'},
            {name: 'نیشابور'},
            {name: 'احمدابادصولت'},
            {name: 'شهراباد'},
            {name: 'رضویه'},
            {name: 'تربت حیدریه'},
            {name: 'باخرز'},
            {name: 'سفیدسنگ'},
            {name: 'بیدخت'},
            {name: 'تایباد'},
            {name: 'فیروزه'},
            {name: 'قاسم آباد'},
            {name: 'سبزوار'},
            {name: 'فیض آباد'},
            {name: 'گلمکان'},
            {name: 'لطف آباد'},
            {name: 'شهرزو'},
            {name: 'خرو'},
            {name: 'تربت جام'},
            {name: 'انابد'},
            {name: 'ملک آباد'},
            {name: 'بایک'},
            {name: 'دولت آباد'},
            {name: 'سرخس'},
            {name: 'ریوش'},
            {name: 'طرقبه'},
            {name: 'خواف'},
            {name: 'روداب'},
            {name: 'خلیل آباد'}
          ]
      },
      {
        stateName: 'خراسان شمالی', city:
          [
            {name: 'لوجلی'},
            {name: 'چناران شهر'},
            {name: 'راز'},
            {name: 'پیش قلعه'},
            {name: 'قوشخانه'},
            {name: 'شوقان'},
            {name: 'اسفراین'},
            {name: 'گرمه'},
            {name: 'قاضی'},
            {name: 'شیروان'},
            {name: 'حصارگرمخان'},
            {name: 'آشخانه'},
            {name: 'تیتکانلو'},
            {name: 'جاجرم'},
            {name: 'بجنورد'},
            {name: 'درق'},
            {name: 'آوا'},
            {name: 'زیارت'},
            {name: 'سنخواست'},
            {name: 'صفی آباد'},
            {name: 'ایور'},
            {name: 'فاروج'},
            {name: 'لوجلی'}
          ]
      },
      {
        stateName: 'خوزستان', city:
          [
            {name: 'صفی آباد'},
            {name: 'هفتگل'},
            {name: 'بیدروبه'},
            {name: 'شاوور'},
            {name: 'حمزه'},
            {name: 'گتوند'},
            {name: 'شرافت'},
            {name: 'منصوریه'},
            {name: 'زهره'},
            {name: 'رامهرمز'},
            {name: 'بندرامام خمینی'},
            {name: 'کوت عبداله'},
            {name: 'میداود'},
            {name: 'چغامیش'},
            {name: 'ملاثانی'},
            {name: 'چم گلک'},
            {name: 'حر'},
            {name: 'شمس آباد'},
            {name: 'آبژدان'},
            {name: 'چویبده'},
            {name: 'مسجدسلیمان'},
            {name: 'مقاومت'},
            {name: 'ترکالکی'},
            {name: 'دارخوین'},
            {name: 'سردشت'},
            {name: 'لالی'},
            {name: 'کوت سیدنعیم'},
            {name: 'حمیدیه'},
            {name: 'دهدز'},
            {name: 'قلعه تل'},
            {name: 'میانرود'},
            {name: 'رفیع'},
            {name: 'اندیمشک'},
            {name: 'الوان'},
            {name: 'سالند'},
            {name: 'صالح شهر'},
            {name: 'اروندکنار'},
            {name: 'سرداران'},
            {name: 'تشان'},
            {name: 'رامشیر'},
            {name: 'شادگان'},
            {name: 'بندرماهشهر'},
            {name: 'جایزان'},
            {name: 'بستان'},
            {name: 'ویس'},
            {name: 'اهواز'},
            {name: 'فتح المبین'},
            {name: 'شهر امام'},
            {name: 'قلعه خواجه'},
            {name: 'حسینیه'},
            {name: 'گلگیر'},
            {name: 'مینوشهر'},
            {name: 'سماله'},
            {name: 'شوشتر'},
            {name: 'بهبهان'},
            {name: 'هندیجان'},
            {name: 'ابوحمیظه'},
            {name: 'آغاجاری'},
            {name: 'ایذه'},
            {name: 'صیدون'},
            {name: 'سیاه منصور'},
            {name: 'هویزه'},
            {name: 'آزادی'},
            {name: 'شوش'},
            {name: 'دزفول'},
            {name: 'جنت مکان'},
            {name: 'آبادان'},
            {name: 'گوریه'},
            {name: 'خرمشهر'},
            {name: 'مشراگه'},
            {name: 'خنافره'},
            {name: 'چمران'},
            {name: 'امیدیه'},
            {name: 'سوسنگرد'},
            {name: 'شیبان'},
            {name: 'الهایی'},
            {name: 'باغ ملک'},
            {name: 'صفی آباد'}
          ]
      },
      {
        stateName: 'زنجان', city:
          [
            {name: 'زرین آباد'},
            {name: 'سجاس'},
            {name: 'زرین رود'},
            {name: 'آب بر'},
            {name: 'ارمغانخانه'},
            {name: 'کرسف'},
            {name: 'هیدج'},
            {name: 'سلطانیه'},
            {name: 'خرمدره'},
            {name: 'نیک پی'},
            {name: 'قیدار'},
            {name: 'ابهر'},
            {name: 'دندی'},
            {name: 'حلب'},
            {name: 'نوربهار'},
            {name: 'گرماب'},
            {name: 'چورزق'},
            {name: 'زنجان'},
            {name: 'سهرورد'},
            {name: 'صایین قلعه'},
            {name: 'ماه نشان'},
            {name: 'زرین آباد'}
          ]
      },
      {
        stateName: 'سمنان', city:
          [
            {name: 'آرادان'},
            {name: 'ایوانکی'},
            {name: 'مجن'},
            {name: 'دامغان'},
            {name: 'سرخه'},
            {name: 'مهدی شهر'},
            {name: 'شاهرود'},
            {name: 'سمنان'},
            {name: 'کهن آباد'},
            {name: 'گرمسار'},
            {name: 'کلاته خیج'},
            {name: 'دیباج'},
            {name: 'درجزین'},
            {name: 'رودیان'},
            {name: 'بسطام'},
            {name: 'امیریه'},
            {name: 'میامی'},
            {name: 'شهمیرزاد'},
            {name: 'بیارجمند'},
            {name: 'کلاته'},
            {name: 'آرادان'}
          ]
      },
      {
        stateName: 'سیستان و بلوچستان', city:
          [
            {name: 'نیک شهر'},
            {name: 'محمدی'},
            {name: 'شهرک علی اکبر'},
            {name: 'بنجار'},
            {name: 'گلمورتی'},
            {name: 'نگور'},
            {name: 'راسک'},
            {name: 'بنت'},
            {name: 'قصرقند'},
            {name: 'جالق'},
            {name: 'هیدوچ'},
            {name: 'نوک آباد'},
            {name: 'زهک'},
            {name: 'بمپور'},
            {name: 'پیشین'},
            {name: 'گشت'},
            {name: 'محمدآباد'},
            {name: 'زاهدان'},
            {name: 'زابلی'},
            {name: 'چاه بهار'},
            {name: 'زرآباد'},
            {name: 'بزمان'},
            {name: 'اسپکه'},
            {name: 'فنوج'},
            {name: 'سراوان'},
            {name: 'ادیمی'},
            {name: 'زابل'},
            {name: 'دوست محمد'},
            {name: 'ایرانشهر'},
            {name: 'سرباز'},
            {name: 'سیرکان'},
            {name: 'میرجاوه'},
            {name: 'نصرت آباد'},
            {name: 'سوران'},
            {name: 'خاش'},
            {name: 'کنارک'},
            {name: 'محمدان'},
            {name: 'نیک شهر'}
          ]
      },
      {
        stateName: 'فارس', city:
          [
            {name: 'لامرد'},
            {name: 'کازرون'},
            {name: 'کارزین (فتح آباد)'},
            {name: 'فدامی'},
            {name: 'خومه زار'},
            {name: 'سلطان شهر'},
            {name: 'فیروزآباد'},
            {name: 'دبیران'},
            {name: 'باب انار'},
            {name: 'رامجرد'},
            {name: 'سروستان'},
            {name: 'قره بلاغ'},
            {name: 'ارسنجان'},
            {name: 'دژکرد'},
            {name: 'بیرم'},
            {name: 'دهرم'},
            {name: 'شیراز'},
            {name: 'ایزدخواست'},
            {name: 'علامرودشت'},
            {name: 'اوز'},
            {name: 'وراوی'},
            {name: 'بیضا'},
            {name: 'نی ریز'},
            {name: 'کنارتخته'},
            {name: 'امام شهر'},
            {name: 'جهرم'},
            {name: 'بابامنیر'},
            {name: 'گراش'},
            {name: 'فسا'},
            {name: 'شهرپیر'},
            {name: 'حسن اباد'},
            {name: 'کامفیروز'},
            {name: 'خنج'},
            {name: 'خانه زنیان'},
            {name: 'استهبان'},
            {name: 'بوانات'},
            {name: 'لطیفی'},
            {name: 'فراشبند'},
            {name: 'زرقان'},
            {name: 'صغاد'},
            {name: 'اشکنان'},
            {name: 'قایمیه'},
            {name: 'گله دار'},
            {name: 'دوبرجی'},
            {name: 'آباده طشک'},
            {name: 'خرامه'},
            {name: 'میمند'},
            {name: 'افزر'},
            {name: 'دوزه'},
            {name: 'سیدان'},
            {name: 'کوپن'},
            {name: 'زاهدشهر'},
            {name: 'قادراباد'},
            {name: 'سده'},
            {name: 'بنارویه'},
            {name: 'سعادت شهر'},
            {name: 'شهرصدرا'},
            {name: 'سورمق'},
            {name: 'حسامی'},
            {name: 'جویم'},
            {name: 'خوزی'},
            {name: 'اردکان'},
            {name: 'قطرویه'},
            {name: 'نودان'},
            {name: 'مبارک آباددیز'},
            {name: 'داراب'},
            {name: 'نورآباد'},
            {name: 'کوار'},
            {name: 'نوبندگان'},
            {name: 'حاجی آباد'},
            {name: 'خاوران'},
            {name: 'مرودشت'},
            {name: 'کوهنجان'},
            {name: 'ششده'},
            {name: 'مزایجان'},
            {name: 'ایج'},
            {name: 'خور'},
            {name: 'نوجین'},
            {name: 'لپویی'},
            {name: 'بهمن'},
            {name: 'اهل'},
            {name: 'خشت'},
            {name: 'مهر'},
            {name: 'جنت شهر'},
            {name: 'مشکان'},
            {name: 'بالاده'},
            {name: 'قیر'},
            {name: 'قطب آباد'},
            {name: 'خانیمن'},
            {name: 'مصیری'},
            {name: 'میانشهر'},
            {name: 'صفاشهر'},
            {name: 'اقلید'},
            {name: 'عمادده'},
            {name: 'مادرسلیمان'},
            {name: 'داریان'},
            {name: 'رونیز'},
            {name: 'کره ای'},
            {name: 'لار'},
            {name: 'اسیر'},
            {name: 'هماشهر'},
            {name: 'آباده'},
            {name: 'لامرد'}
          ]
      },
      {
        stateName: 'قزوین', city:
          [
            {name: 'تاکستان'},
            {name: 'سگزآباد'},
            {name: 'بیدستان'},
            {name: 'کوهین'},
            {name: 'رازمیان'},
            {name: 'خرمدشت'},
            {name: 'آبگرم'},
            {name: 'شال'},
            {name: 'شریفیه'},
            {name: 'اقبالیه'},
            {name: 'نرجه'},
            {name: 'ارداق'},
            {name: 'الوند'},
            {name: 'خاکعلی'},
            {name: 'سیردان'},
            {name: 'ضیاڈآباد'},
            {name: 'بویین زهرا'},
            {name: 'محمدیه'},
            {name: 'محمودآبادنمونه'},
            {name: 'معلم کلایه'},
            {name: 'اسفرورین'},
            {name: 'آوج'},
            {name: 'دانسفهان'},
            {name: 'آبیک'},
            {name: 'قزوین'},
            {name: 'تاکستان'}
          ]
      },
      {
        stateName: 'قم', city:
          [
            {name: 'دستجرد'},
            {name: 'کهک'},
            {name: 'قم'},
            {name: 'سلفچگان'},
            {name: 'جعفریه'},
            {name: 'قنوات'},
            {name: 'دستجرد'}
          ]
      },
      {
        stateName: 'کردستان', city:
          [
            {name: 'چناره'},
            {name: 'قروه'},
            {name: 'توپ آغاج'},
            {name: 'سروآباد'},
            {name: 'بویین سفلی'},
            {name: 'زرینه'},
            {name: 'دلبران'},
            {name: 'سنندج'},
            {name: 'یاسوکند'},
            {name: 'موچش'},
            {name: 'بانه'},
            {name: 'مریوان'},
            {name: 'سریش آباد'},
            {name: 'صاحب'},
            {name: 'دهگلان'},
            {name: 'بابارشانی'},
            {name: 'دیواندره'},
            {name: 'برده رشه'},
            {name: 'شویشه'},
            {name: 'بیجار'},
            {name: 'اورامان تخت'},
            {name: 'کانی سور'},
            {name: 'کانی دینار'},
            {name: 'دزج'},
            {name: 'سقز'},
            {name: 'بلبان آباد'},
            {name: 'پیرتاج'},
            {name: 'کامیاران'},
            {name: 'آرمرده'},
            {name: 'چناره'}
          ]
      },
      {
        stateName: 'کرمان', city:
          [
            {name: 'انار'},
            {name: 'کهنوج'},
            {name: 'بلوک'},
            {name: 'پاریز'},
            {name: 'گنبکی'},
            {name: 'زنگی آباد'},
            {name: 'بم'},
            {name: 'خانوک'},
            {name: 'کیانشهر'},
            {name: 'جوپار'},
            {name: 'عنبرآباد'},
            {name: 'جوزم'},
            {name: 'نظام شهر'},
            {name: 'لاله زار'},
            {name: 'کشکوییه'},
            {name: 'زیدآباد'},
            {name: 'هنزا'},
            {name: 'چترود'},
            {name: 'جبالبارز'},
            {name: 'سیرجان'},
            {name: 'رودبار'},
            {name: 'کرمان'},
            {name: 'بافت'},
            {name: 'صفاییه'},
            {name: 'منوجان'},
            {name: 'اندوهجرد'},
            {name: 'هجدک'},
            {name: 'خورسند'},
            {name: 'امین شهر'},
            {name: 'بردسیر'},
            {name: 'رفسنجان'},
            {name: 'هماشهر'},
            {name: 'محمدآباد'},
            {name: 'اختیارآباد'},
            {name: 'بروات'},
            {name: 'ریحان'},
            {name: 'کوهبنان'},
            {name: 'ماهان'},
            {name: 'دوساری'},
            {name: 'دهج'},
            {name: 'فاریاب'},
            {name: 'گلزار'},
            {name: 'بهرمان'},
            {name: 'بلورد'},
            {name: 'فهرج'},
            {name: 'کاظم آباد'},
            {name: 'جیرفت'},
            {name: 'نجف شهر'},
            {name: 'قلعه گنج'},
            {name: 'باغین'},
            {name: 'بزنجان'},
            {name: 'زرند'},
            {name: 'نودژ'},
            {name: 'گلباف'},
            {name: 'راور'},
            {name: 'خاتون اباد'},
            {name: 'نرماشیر'},
            {name: 'دشتکار'},
            {name: 'مس سرچشمه'},
            {name: 'خواجو شهر'},
            {name: 'رابر'},
            {name: 'راین'},
            {name: 'درب بهشت'},
            {name: 'یزدان شهر'},
            {name: 'زهکلوت'},
            {name: 'محی آباد'},
            {name: 'مردهک'},
            {name: 'شهداد'},
            {name: 'ارزوییه'},
            {name: 'نگار'},
            {name: 'شهربابک'},
            {name: 'انار'}
          ]
      },
      {
        stateName: 'کرمانشاه', city:
          [
            {name: 'گودین'},
            {name: 'سنقر'},
            {name: 'شاهو'},
            {name: 'بانوره'},
            {name: 'تازه آباد'},
            {name: 'هلشی'},
            {name: 'جوانرود'},
            {name: 'قصرشیرین'},
            {name: 'نوسود'},
            {name: 'کرند'},
            {name: 'کوزران'},
            {name: 'بیستون'},
            {name: 'حمیل'},
            {name: 'گیلانغرب'},
            {name: 'سطر'},
            {name: 'روانسر'},
            {name: 'پاوه'},
            {name: 'ازگله'},
            {name: 'کرمانشاه'},
            {name: 'میان راهان'},
            {name: 'کنگاور'},
            {name: 'سرپل ذهاب'},
            {name: 'ریجاب'},
            {name: 'باینگان'},
            {name: 'هرسین'},
            {name: 'اسلام آبادغرب'},
            {name: 'سرمست'},
            {name: 'سومار'},
            {name: 'نودشه'},
            {name: 'گهواره'},
            {name: 'رباط'},
            {name: 'صحنه'},
            {name: 'گودین'}
          ]
      },
      {
        stateName: 'کهگیلویه وبویراحمد', city:
          [
            {name: 'سوق'},
            {name: 'گراب سفلی'},
            {name: 'لنده'},
            {name: 'سی سخت'},
            {name: 'دهدشت'},
            {name: 'یاسوج'},
            {name: 'سرفاریاب'},
            {name: 'دوگنبدان'},
            {name: 'چیتاب'},
            {name: 'لیکک'},
            {name: 'دیشموک'},
            {name: 'مادوان'},
            {name: 'باشت'},
            {name: 'پاتاوه'},
            {name: 'قلعه رییسی'},
            {name: 'مارگون'},
            {name: 'چرام'},
            {name: 'سوق'}
          ]
      },
      {
        stateName: 'گلستان', city:
          [
            {name: 'جلین'},
            {name: 'سیمین شهر'},
            {name: 'مزرعه'},
            {name: 'رامیان'},
            {name: 'فراغی'},
            {name: 'گنبدکاووس'},
            {name: 'کردکوی'},
            {name: 'مراوه'},
            {name: 'بندرترکمن'},
            {name: 'نگین شهر'},
            {name: 'آق قلا'},
            {name: 'سرخنکلاته'},
            {name: 'گالیکش'},
            {name: 'سنگدوین'},
            {name: 'دلند'},
            {name: 'بندرگز'},
            {name: 'نوده خاندوز'},
            {name: 'مینودشت'},
            {name: 'گرگان'},
            {name: 'گمیش تپه'},
            {name: 'علی اباد'},
            {name: 'خان ببین'},
            {name: 'کلاله'},
            {name: 'اینچه برون'},
            {name: 'فاضل آباد'},
            {name: 'تاتارعلیا'},
            {name: 'نوکنده'},
            {name: 'آزادشهر'},
            {name: 'انبارآلوم'},
            {name: 'جلین'}
          ]
      },
      {
        stateName: 'گیلان', city:
          [
            {name: 'رانکوه'},
            {name: 'منجیل'},
            {name: 'شلمان'},
            {name: 'خشکبیجار'},
            {name: 'ماکلوان'},
            {name: 'سنگر'},
            {name: 'مرجقل'},
            {name: 'لیسار'},
            {name: 'رضوانشهر'},
            {name: 'رحیم آباد'},
            {name: 'لوندویل'},
            {name: 'احمدسرگوراب'},
            {name: 'لوشان'},
            {name: 'اطاقور'},
            {name: 'لشت نشاء'},
            {name: 'فومن'},
            {name: 'چوبر'},
            {name: 'بازار جمعه'},
            {name: 'کلاچای'},
            {name: 'بندرانزلی'},
            {name: 'املش'},
            {name: 'رستم آباد'},
            {name: 'لاهیجان'},
            {name: 'توتکابن'},
            {name: 'لنگرود'},
            {name: 'کوچصفهان'},
            {name: 'صومعه سرا'},
            {name: 'اسالم'},
            {name: 'دیلمان'},
            {name: 'رودسر'},
            {name: 'کیاشهر'},
            {name: 'شفت'},
            {name: 'رودبار'},
            {name: 'کومله'},
            {name: 'رشت'},
            {name: 'ماسوله'},
            {name: 'خمام'},
            {name: 'ماسال'},
            {name: 'واجارگاه'},
            {name: 'هشتپر (تالش)'},
            {name: 'پره سر'},
            {name: 'بره سر'},
            {name: 'آستارا'},
            {name: 'رودبنه'},
            {name: 'جیرنده'},
            {name: 'چاف و چمخاله'},
            {name: 'لولمان'},
            {name: 'گوراب زرمیخ'},
            {name: 'حویق'},
            {name: 'سیاهکل'},
            {name: 'چابکسر'},
            {name: 'آستانه اشرفیه'},
            {name: 'رانکوه'}
          ]
      },
      {
        stateName: 'لرستان', city:
          [
            {name: 'درب گنبد'},
            {name: 'چالانچولان'},
            {name: 'بیران شهر'},
            {name: 'ویسیان'},
            {name: 'شول آباد'},
            {name: 'پلدختر'},
            {name: 'کوهدشت'},
            {name: 'هفت چشمه'},
            {name: 'بروجرد'},
            {name: 'الشتر'},
            {name: 'مومن آباد'},
            {name: 'دورود'},
            {name: 'زاغه'},
            {name: 'چقابل'},
            {name: 'الیگودرز'},
            {name: 'معمولان'},
            {name: 'کوهنانی'},
            {name: 'نورآباد'},
            {name: 'سپیددشت'},
            {name: 'سراب دوره'},
            {name: 'ازنا'},
            {name: 'گراب'},
            {name: 'خرم آباد'},
            {name: 'اشترینان'},
            {name: 'فیروزآباد'},
            {name: 'درب گنبد'}
          ]
      },
      {
        stateName: 'مازندران', city:
          [
            {name: 'چمستان'},
            {name: 'گلوگاه'},
            {name: 'گلوگاه'},
            {name: 'پل سفید'},
            {name: 'دابودشت'},
            {name: 'چالوس'},
            {name: 'کیاسر'},
            {name: 'بهنمیر'},
            {name: 'تنکابن'},
            {name: 'کلاردشت'},
            {name: 'ایزدشهر'},
            {name: 'گتاب'},
            {name: 'سلمان شهر'},
            {name: 'ارطه'},
            {name: 'امیرکلا'},
            {name: 'کوهی خیل'},
            {name: 'پایین هولار'},
            {name: 'گزنک'},
            {name: 'محمودآباد'},
            {name: 'رامسر'},
            {name: 'نوشهر'},
            {name: 'خلیل شهر'},
            {name: 'کیاکلا'},
            {name: 'نور'},
            {name: 'مرزیکلا'},
            {name: 'فریدونکنار'},
            {name: 'زیرآب'},
            {name: 'امامزاده عبدالله'},
            {name: 'هچیرود'},
            {name: 'فریم'},
            {name: 'هادی شهر'},
            {name: 'نشتارود'},
            {name: 'پول'},
            {name: 'بهشهر'},
            {name: 'کلارآباد'},
            {name: 'بلده'},
            {name: 'بابل'},
            {name: 'جویبار'},
            {name: 'آلاشت'},
            {name: 'آمل'},
            {name: 'نکا'},
            {name: 'کتالم وسادات شهر'},
            {name: 'بابلسر'},
            {name: 'شیرود'},
            {name: 'شیرگاه'},
            {name: 'رویان'},
            {name: 'زرگرمحله'},
            {name: 'عباس اباد'},
            {name: 'قایم شهر'},
            {name: 'خوش رودپی'},
            {name: 'مرزن آباد'},
            {name: 'ساری'},
            {name: 'رینه'},
            {name: 'سرخرود'},
            {name: 'خرم آباد'},
            {name: 'کجور'},
            {name: 'رستمکلا'},
            {name: 'سورک'},
            {name: 'چمستان'}
          ]
      },
      {
        stateName: 'مرکزی', city:
          [
            {name: 'شهباز'},
            {name: 'آستانه'},
            {name: 'خنجین'},
            {name: 'نراق'},
            {name: 'کمیجان'},
            {name: 'آشتیان'},
            {name: 'رازقان'},
            {name: 'مهاجران'},
            {name: 'غرق آباد'},
            {name: 'خنداب'},
            {name: 'قورچی باشی'},
            {name: 'خشکرود'},
            {name: 'ساروق'},
            {name: 'محلات'},
            {name: 'شازند'},
            {name: 'ساوه'},
            {name: 'میلاجرد'},
            {name: 'تفرش'},
            {name: 'زاویه'},
            {name: 'اراک'},
            {name: 'توره'},
            {name: 'نوبران'},
            {name: 'فرمهین'},
            {name: 'دلیجان'},
            {name: 'پرندک'},
            {name: 'کارچان'},
            {name: 'نیمور'},
            {name: 'هندودر'},
            {name: 'آوه'},
            {name: 'جاورسیان'},
            {name: 'خمین'},
            {name: 'مامونیه'},
            {name: 'داودآباد'},
            {name: 'شهباز'}
          ]
      },
      {
        stateName: 'هرمزگان', city:
          [
            {name: 'تخت'},
            {name: 'بیکاء'},
            {name: 'تیرور'},
            {name: 'گروک'},
            {name: 'قشم'},
            {name: 'کوشکنار'},
            {name: 'کیش'},
            {name: 'سرگز'},
            {name: 'بندرعباس'},
            {name: 'زیارتعلی'},
            {name: 'سندرک'},
            {name: 'کوهستک'},
            {name: 'لمزان'},
            {name: 'رویدر'},
            {name: 'قلعه قاضی'},
            {name: 'فارغان'},
            {name: 'ابوموسی'},
            {name: 'هشتبندی'},
            {name: 'سردشت'},
            {name: 'درگهان'},
            {name: 'پارسیان'},
            {name: 'کنگ'},
            {name: 'جناح'},
            {name: 'تازیان پایین'},
            {name: 'دهبارز'},
            {name: 'میناب'},
            {name: 'سیریک'},
            {name: 'سوزا'},
            {name: 'خمیر'},
            {name: 'چارک'},
            {name: 'حاجی اباد'},
            {name: 'فین'},
            {name: 'بندرجاسک'},
            {name: 'گوهران'},
            {name: 'هرمز'},
            {name: 'دشتی'},
            {name: 'بندرلنگه'},
            {name: 'بستک'},
            {name: 'تخت'}
          ]
      },
      {
        stateName: 'همدان', city:
          [
            {name: 'قهاوند'},
            {name: 'زنگنه'},
            {name: 'دمق'},
            {name: 'سرکان'},
            {name: 'آجین'},
            {name: 'جورقان'},
            {name: 'برزول'},
            {name: 'فامنین'},
            {name: 'سامن'},
            {name: 'بهار'},
            {name: 'فرسفج'},
            {name: 'شیرین سو'},
            {name: 'مریانج'},
            {name: 'فیروزان'},
            {name: 'قروه درجزین'},
            {name: 'ازندریان'},
            {name: 'لالجین'},
            {name: 'گل تپه'},
            {name: 'گیان'},
            {name: 'ملایر'},
            {name: 'صالح آباد'},
            {name: 'تویسرکان'},
            {name: 'اسدآباد'},
            {name: 'همدان'},
            {name: 'نهاوند'},
            {name: 'رزن'},
            {name: 'جوکار'},
            {name: 'مهاجران'},
            {name: 'کبودرآهنگ'},
            {name: 'قهاوند'}
          ]
      },
      {
        stateName: 'یزد', city:
          [
            {name: 'احمدآباد'},
            {name: 'مروست'},
            {name: 'مهردشت'},
            {name: 'حمیدیا'},
            {name: 'تفت'},
            {name: 'اشکذر'},
            {name: 'ندوشن'},
            {name: 'یزد'},
            {name: 'عقدا'},
            {name: 'بهاباد'},
            {name: 'ابرکوه'},
            {name: 'زارچ'},
            {name: 'نیر'},
            {name: 'اردکان'},
            {name: 'هرات'},
            {name: 'بفروییه'},
            {name: 'شاهدیه'},
            {name: 'بافق'},
            {name: 'خضرآباد'},
            {name: 'میبد'},
            {name: 'مهریز'},
            {name: 'احمدآباد'}
          ]
      }
    ];
}
