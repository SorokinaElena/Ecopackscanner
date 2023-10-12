import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:5001';
// axios.defaults.baseURL = 'http://soroka.chickenkiller.com:5001';
// axios.defaults.baseURL = 'magpie-soroka.info:5001'

// Include credentials (cookies) with every Axios request
// axios.defaults.withCredentials = true;

const API_URL = "/package";

const pack_create_req = ({user_id, name, category, estimatedSize, length, width, height, weight, biodegradable, compostable, recyclable, reusable, otherSustainability, liquid, solid, powder, granules, fragile, perishable, otherType, flexible, rigid, protective, transparent, opaque, otherPackagingType, preservationNeeds, modifiedAtmospherePackaging, electrostaticDischargeProtection, tamperProtection, secureBatteriesForShipping, separateCordsAndAccessories, damageProtectionLevel, materialSensitivity, moistureProtection, leakproofRequirements, uvProtection, fragilityLevel, assemblyInstructions, materialCare, outdoor, indoor, durability, weatherproofing}) => {
  return axios
    .post(API_URL + '/create', {
      user_id,
      name,
      category, 
      estimatedSize, 
      length, 
      width, 
      height, 
      weight, 
      biodegradable, 
      compostable, 
      recyclable, 
      reusable, 
      otherSustainability, 
      liquid, 
      solid, 
      powder, 
      granules, 
      fragile, 
      perishable, 
      otherType, 
      flexible, 
      rigid, 
      protective, 
      transparent, 
      opaque, 
      otherPackagingType,

      preservationNeeds,
      modifiedAtmospherePackaging,
      electrostaticDischargeProtection,
      tamperProtection,
      secureBatteriesForShipping,
      separateCordsAndAccessories,
      damageProtectionLevel,
      materialSensitivity,
      moistureProtection,
      leakproofRequirements,
      uvProtection,
      fragilityLevel,
      assemblyInstructions,
      materialCare,
      outdoor,
      indoor,
      durability,
      weatherproofing,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem('added_pakaging', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const pack_search_req = ({user_id, category, estimatedSize, length, width, height, weight, biodegradable, compostable, recyclable, reusable, otherSustainability, liquid, solid, powder, granules, fragile, perishable, otherType, flexible, rigid, protective, transparent, opaque, otherPackagingType, preservationNeeds, modifiedAtmospherePackaging, electrostaticDischargeProtection, tamperProtection, secureBatteriesForShipping, separateCordsAndAccessories, damageProtectionLevel, materialSensitivity, moistureProtection, leakproofRequirements, uvProtection, fragilityLevel, assemblyInstructions, materialCare, outdoor, indoor, durability, weatherproofing}) => {
  return axios
    .post(API_URL + '/getPackagebyfilters', {
      user_id,
      category, 
      estimatedSize, 
      length, 
      width, 
      height, 
      weight, 
      biodegradable, 
      compostable, 
      recyclable, 
      reusable, 
      otherSustainability, 
      liquid, 
      solid, 
      powder, 
      granules, 
      fragile, 
      perishable, 
      otherType, 
      flexible, 
      rigid, 
      protective, 
      transparent, 
      opaque, 
      otherPackagingType,

      preservationNeeds,
      modifiedAtmospherePackaging,
      electrostaticDischargeProtection,
      tamperProtection,
      secureBatteriesForShipping,
      separateCordsAndAccessories,
      damageProtectionLevel,
      materialSensitivity,
      moistureProtection,
      leakproofRequirements,
      uvProtection,
      fragilityLevel,
      assemblyInstructions,
      materialCare,
      outdoor,
      indoor,
      durability,
      weatherproofing,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem('search_res', JSON.stringify(response.data.data));
      }

      return response.data;
    });
};

const get_current_search_res = () => {
  return JSON.parse(localStorage.getItem('search_res'));
};

const pack_list_req = (data) => {
  return axios
    .post(API_URL + '/getPackagebyUser/' + data, {
      // user_id: data,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem('packaging_list_res', JSON.stringify(response.data));
      }
      console.log(response.data)
      return response.data;
    });
};

const get_current_packaging_list = () => {
  return JSON.parse(localStorage.getItem('packaging_list_res'));
};

const delete_package = (data) => {
  return axios
    .post(API_URL + '/deletepackage', data)
    .then((response) => {
      if (response.data) {
        localStorage.setItem('packaging_list_res', JSON.stringify(response.data));
      }
      console.log(response.data)
      return response.data;
    });
};

const formService = {
  pack_create_req,
  pack_search_req,
  get_current_search_res,
  pack_list_req,
  get_current_packaging_list,
  delete_package,
};

export default formService;