import { STORE_PRODUCT_INFORMATION} from '../actions/actionTypes';

// Validations
import isEmpty from '../../validations/isEmpty';

const initialState = {
  nid: 0,
  title: '',
  price: 0,
  type: '',
  description: '',
  caringTips: '',
  disclaimer: '',
  through: '',
  contains: null,
  images: null,
  fullSizeImages: null,
  attributes: null,
  availableCities: null,
  reviewRating: null,
  likeProducts: null,
  recentlyViewedProducts: null,
  moreLinks: null,
  addon: null,
  plantDetailIcon: null,
  thirdPartyVendor: 0,
  deliveryType: 0,
  earliestDeliveryDate: null,
  remainingTimeInSeconds: null,
  country: 0,
  internationalPrice: 0,
  currencyIconClass: '',
  showAddon: true,
	showPincodeField: false,
	showGmapField: false,
	sku: null,
	showEarliestDeliveryDate: false,
	deliveryEndTiming: null,
	isThroughVendor: false,
	isTypeGift: false,
	isThirdPartyVendor: false,
  isProductAvailable: true,
  relatedProduct: '',
  isSingleSlotProduct: false,
  video: '',
  valentineMessage: null,
  valentineDate: '',
  displayValentineField: 0,
  isInternational: false
}

const ProductReducer = (state=initialState, action) => {
  switch (action.type) {
    case STORE_PRODUCT_INFORMATION:
      let relatedProduct = null;
      let video = null;
      let availableCities = null;
      let internationalPrice = isEmpty(action.productInfo.internationalPrice) ? 0 : action.productInfo.internationalPrice;
      let currencyIconClass = isEmpty(action.productInfo.currencyIconClass) ? 0 : action.productInfo.currencyIconClass;
      const { nid, title, price, through, contains, description, images, fullSizeImages, type, attributes, reviewRating,
        caringTips, disclaimer, plantDetailIcon, thirdPartyVendor, deliveryType, earliestDeliveryDate, remainingTimeInSeconds,
        country, showAddon, showGmapField, showPincodeField, sku, showEarliestDeliveryDate, deliveryEndTiming,
				isThroughVendor, isTypeGift, isThirdPartyVendor, isSingleSlotProduct, valentineMessage, valentineDate, displayValentineField, isInternational } = action.productInfo;

      if (!isEmpty(action.productInfo.cities)) {
        availableCities = action.productInfo.cities.available;
      }

      if (!isEmpty(action.productInfo.relatedProduct)) {
        relatedProduct = action.productInfo.relatedProduct;
      }

      if (!isEmpty(action.productInfo.video)) {
        video = action.productInfo.video;
      }

      return {
        ...state,
        nid,
        title,
        price,
        through,
        contains,
        description,
        images,
        fullSizeImages,
        type,
        attributes,
        availableCities,
        reviewRating,
        caringTips,
        disclaimer,
        plantDetailIcon,
        thirdPartyVendor,
        deliveryType,
        earliestDeliveryDate,
        remainingTimeInSeconds,
        country,
        internationalPrice,
        currencyIconClass,
        showAddon,
				showPincodeField,
				showGmapField,
				sku,
				showEarliestDeliveryDate,
				deliveryEndTiming,
				isThroughVendor,
				isTypeGift,
				isThirdPartyVendor,
        relatedProduct,
        isSingleSlotProduct,
        video,
        valentineMessage,
        valentineDate,
        displayValentineField,
        isInternational
      }

    
    default:
      return state;
  }
}

export default ProductReducer;
