import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:5001';
// axios.defaults.baseURL = 'http://soroka.chickenkiller.com:5001';

// Include credentials (cookies) with every Axios request
// axios.defaults.withCredentials = true;

const API_URL = "/package";

const pack_search_req = ({category, estimatedSize, length, width, height, weight, biodegradable, compostable, recyclable, reusable, otherSustainability, liquid, solid, powder, granules, fragile, perishable, otherType, flexible, rigid, protective, transparent, opaque, otherPackagingType, preservationNeeds, modifiedAtmospherePackaging, electrostaticDischargeProtection, tamperProtection, secureBatteriesForShipping, separateCordsAndAccessories, damageProtectionLevel, materialSensitivity, moistureProtection, leakproofRequirements, uvProtection, fragilityLevel, assemblyInstructions, materialCare, outdoor, indoor, durability, weatherproofing}) => {
  return axios
    .post(API_URL + '/create', {
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
        localStorage.setItem('offer', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + '/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
  console.log('exit');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const recowerPassword = (email) => {
  return axios
    .post(API_URL + '/sendcode', {
      email,
    })
};

const formService = {
  pack_search_req,
};

export default formService;