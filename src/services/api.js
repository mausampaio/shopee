export const fetchProducts = () =>
  new Promise((resolve) => {
    const fetch = () => resolve(PRODUCTS_MOCK);
    setTimeout(fetch, 2500);
  });

export const queryProducts = (term) =>
  new Promise((resolve) => {
    const filtered = PRODUCTS_MOCK.filter(
      ({ name, description }) => name.includes(term) || description.includes(term),
    );
    const fetch = () => resolve(filtered);
    setTimeout(fetch, 2500);
  });

const PRODUCTS_MOCK = [
  {
    id: 43900,
    name: 'Duracell - AAA Batteries (4-Pack)',
    price: 5.49,
    description:
      'Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack',
    url:
      'http://www.bestbuy.com/site/duracell-aaa-batteries-4-pack/43900.p?id=1051384074145&skuId=43900&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg',
  },
  {
    id: 48530,
    name: 'Duracell - AA 1.5V CopperTop Batteries (4-Pack)',
    price: 5.49,
    description:
      'Long-lasting energy; DURALOCK Power Preserve technology; for toys, clocks, radios, games, remotes, PDAs and more',
    url:
      'http://www.bestbuy.com/site/duracell-aa-1-5v-coppertop-batteries-4-pack/48530.p?id=1099385268988&skuId=48530&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/4853/48530_sa.jpg',
  },
  {
    id: 127687,
    name: 'Duracell - AA Batteries (8-Pack)',
    price: 7.49,
    description:
      'Compatible with select electronic devices; AA size; DURALOCK Power Preserve technology; 8-pack',
    url:
      'http://www.bestbuy.com/site/duracell-aa-batteries-8-pack/127687.p?id=1051384045676&skuId=127687&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/1276/127687_sa.jpg',
  },
  {
    id: 150115,
    name: 'Energizer - MAX Batteries AA (4-Pack)',
    price: 4.99,
    description: '4-pack AA alkaline batteries; battery tester included',
    url:
      'http://www.bestbuy.com/site/energizer-max-batteries-aa-4-pack/150115.p?id=1051384046217&skuId=150115&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/1501/150115_sa.jpg',
  },
  {
    id: 185230,
    name: 'Duracell - C Batteries (4-Pack)',
    price: 8.99,
    description:
      'Compatible with select electronic devices; C size; DURALOCK Power Preserve technology; 4-pack',
    url:
      'http://www.bestbuy.com/site/duracell-c-batteries-4-pack/185230.p?id=1051384046486&skuId=185230&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/1852/185230_sa.jpg',
  },
  {
    id: 185267,
    name: 'Duracell - D Batteries (4-Pack)',
    price: 9.99,
    description:
      'Compatible with select electronic devices; D size; DURALOCK Power Preserve technology; 4-pack',
    url:
      'http://www.bestbuy.com/site/duracell-d-batteries-4-pack/185267.p?id=1051384046551&skuId=185267&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/1852/185267_sa.jpg',
  },
  {
    id: 312290,
    name: 'Duracell - 9V Batteries (2-Pack)',
    price: 7.99,
    description:
      'Compatible with select electronic devices; alkaline chemistry; 9V size; DURALOCK Power Preserve technology; 2-pack',
    url:
      'http://www.bestbuy.com/site/duracell-9v-batteries-2-pack/312290.p?id=1051384050321&skuId=312290&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3122/312290_sa.jpg',
  },
  {
    id: 324884,
    name: 'Directed Electronics - Viper Audio Glass Break Sensor',
    price: 39.99,
    description:
      'From our expanded online assortment; compatible with Directed Electronics alarm systems; microphone and microprocessor detect and analyze intrusions; detects quiet glass breaks',
    url:
      'http://www.bestbuy.com/site/directed-electronics-viper-audio-glass-break-sensor/324884.p?id=1112808077651&skuId=324884&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3248/324884_rc.jpg',
  },
  {
    id: 333179,
    name: 'Energizer - N Cell E90 Batteries (2-Pack)',
    price: 5.99,
    description: 'Alkaline batteries; 1.5V',
    url:
      'http://www.bestbuy.com/site/energizer-n-cell-e90-batteries-2-pack/333179.p?id=1185268509951&skuId=333179&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3331/333179_sa.jpg',
  },
  {
    id: 346575,
    name:
      'Metra - Radio Installation Dash Kit for Most 1989-2000 Ford, Lincoln & Mercury Vehicles - Black',
    price: 16.99,
    description:
      'From our expanded online assortment; compatible with most 1989-2000 Ford, Lincoln and Mercury vehicles; snap-in TurboKit offers fast installation; spacer/trim ring; rear support bracket',
    url:
      'http://www.bestbuy.com/site/metra-radio-installation-dash-kit-for-most-1989-2000-ford-lincoln-mercury-vehicles-black/346575.p?id=1218118704590&skuId=346575&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3465/346575_rc.jpg',
  },
  {
    id: 346646,
    name: 'Metra - Radio Dash Multikit for Select GM Vehicles - Black',
    price: 16.99,
    description:
      'From our expanded online assortment; compatible with select GM vehicles; plastic material',
    url:
      'http://www.bestbuy.com/site/metra-radio-dash-multikit-for-select-gm-vehicles-black/346646.p?id=1210376657731&skuId=346646CC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3466/346646_rc.jpg',
  },
  {
    id: 347137,
    name: 'Metra - Wiring Harness for Select 1998-2008 Ford Vehicles - Multicolored',
    price: 16.99,
    description:
      "Compatible with select 1998-2008 Ford vehicles; connects an aftermarket radio to a vehicle's harness",
    url:
      'http://www.bestbuy.com/site/metra-wiring-harness-for-select-1998-2008-ford-vehicles-multicolored/347137.p?id=1142290459780&skuId=347137&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/9852/9852688_sa.jpg',
  },
  {
    id: 347146,
    name: 'Metra - Turbo Wire Aftermarket Radio Wire Harness Adapter for Select Vehicles',
    price: 16.99,
    description:
      "Compatible with Honda and Acura vehicles; connects an aftermarket radio to your car's harness",
    url:
      'http://www.bestbuy.com/site/metra-turbo-wire-aftermarket-radio-wire-harness-adapter-for-select-vehicles/347146.p?id=1183160746244&skuId=347146&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3471/347146_rc.jpg',
  },
  {
    id: 347155,
    name: 'Metra - Wiring Harness for Most 1986-1998 Honda Acura Vehicles - Multicolored',
    price: 16.99,
    description:
      "Compatible with most 1986-1998 Honda Acura vehicles; connects an aftermarket radio to a vehicle's harness",
    url:
      'http://www.bestbuy.com/site/metra-wiring-harness-for-most-1986-1998-honda-acura-vehicles-multicolored/347155.p?id=1142292396747&skuId=347155&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3471/347155_rc.jpg',
  },
  {
    id: 347333,
    name: 'METRA - Antenna Cable Adapter - Black',
    price: 13.99,
    description:
      'Compatible with select 1988-2005 vehicles; adapts an aftermarket antenna to OEM radios; flat plug',
    url:
      'http://www.bestbuy.com/site/metra-antenna-cable-adapter-black/347333.p?id=1169512349334&skuId=347333&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3473/347333_sa.jpg',
  },
  {
    id: 349572,
    name: 'INSTALL - PORTABLE RADAR DETECTOR INST',
    price: 29.99,
    description: 'PORTABLE RADAR DETECTOR INST',
    url:
      'http://www.bestbuy.com/site/install-portable-radar-detector-inst/349572.p?id=1218019625086&skuId=349572&cmp=RMXCC',
    image:
      'http://img.bbystatic.com/BestBuy_US/images/products/nonsku/default_hardlines_m.gif',
  },
  {
    id: 373642,
    name: 'Jensen - 3.6V NiCad Battery for 900MHz Phones',
    price: 19.99,
    description:
      'Rechargeable 3.6V 300 mAh NiCad battery for GE 2-9614 model cordless phones',
    url:
      'http://www.bestbuy.com/site/jensen-3-6v-nicad-battery-for-900mhz-phones/373642.p?id=1051384793767&skuId=373642&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3736/373642_rc.jpg',
  },
  {
    id: 478398,
    name:
      'Metra - Radio Installation Dash Kit for Select Ford, Mazda and Mercury Vehicles (Pair) - Black',
    price: 16.99,
    description:
      'From our expanded online assortment; compatible with select Ford, Mazda and Mercury vehicles; allows the installation of an aftermarket radio into the factory dash location; high-grade ABS plastic material',
    url:
      'http://www.bestbuy.com/site/metra-radio-installation-dash-kit-for-select-ford-mazda-and-mercury-vehicles-pair-black/478398.p?id=1185268614282&skuId=478398&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/4783/478398_rc.jpg',
  },
  {
    id: 612732,
    name: 'Metra - 1/4" DIN Trim Ring for Most Vehicles',
    price: 10.99,
    description:
      'Compatible with most vehicles; designed for the installation of an aftermarket radio',
    url:
      'http://www.bestbuy.com/site/metra-1-4-din-trim-ring-for-most-vehicles/612732.p?id=1179531744934&skuId=612732&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/6127/612732_sa.jpg',
  },
  {
    id: 643600,
    name: 'Metra - Turbowire Radio Harness Adapter for Select Jeep Vehicles',
    price: 16.99,
    description:
      'Compatible with select Jeep vehicles; ABS and vinyl construction; colored-coded wires',
    url:
      'http://www.bestbuy.com/site/metra-turbowire-radio-harness-adapter-for-select-jeep-vehicles/643600.p?id=1183160746436&skuId=643600&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/6436/643600_rc.jpg',
  },
  {
    id: 643628,
    name: 'Metra - Speaker Connector for Select Volkswagen Vehicles',
    price: 16.99,
    description:
      "Compatible with select Volkswagen vehicles; connects a speaker to the vehicle's stereo; easy installation",
    url:
      'http://www.bestbuy.com/site/metra-speaker-connector-for-select-volkswagen-vehicles/643628.p?id=1183160746500&skuId=643628&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/6436/643628_rc.jpg',
  },
  {
    id: 643691,
    name: 'Metra - Speaker Connector for Select Mitsubishi and Chrysler Vehicles',
    price: 19.99,
    description:
      'From our expanded online assortment; compatible with 1987 - 1993 Mitsubishi and Chrysler vehicles; color-coded wires',
    url:
      'http://www.bestbuy.com/site/metra-speaker-connector-for-select-mitsubishi-and-chrysler-vehicles/643691.p?id=1218019642861&skuId=643691&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/6436/643691_rc.jpg',
  },
  {
    id: 643717,
    name: 'Metra - Wiring Harness for Most 1990-2001 Mazda Vehicles - Multicolored',
    price: 16.99,
    description:
      "Compatible with most 1990-2001 Mazda vehicles; connects an aftermarket radio to a vehicle's harness",
    url:
      'http://www.bestbuy.com/site/metra-wiring-harness-for-most-1990-2001-mazda-vehicles-multicolored/643717.p?id=1142291937563&skuId=643717&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/6437/643717_rc.jpg',
  },
  {
    id: 673890,
    name: 'Metra - Professional Installer Series TurboKit',
    price: 16.99,
    description:
      'From our expanded online assortment; compatible with select Chevrolet, Geo and Suzuki vehicles; allows installation of an aftermarket radio; provision for a 1/4" or 1/2" DIN equalizer; mounts precisely to OEM radio mounting positions',
    url:
      'http://www.bestbuy.com/site/metra-professional-installer-series-turbokit/673890.p?id=1118842643714&skuId=673890&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/9852/9852688_sa.jpg',
  },
];