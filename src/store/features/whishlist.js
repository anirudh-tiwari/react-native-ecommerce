import { createApiReducer } from "../redux/reducerFactory";
import GetDispatchers from "../redux/dispatchers";
import GetSelectors from "../redux/selectors";

const feature = "whishlist";

const whishlistReducer = createApiReducer(feature, [], {
  whishList: [],
});

export default whishlistReducer;

export const WhishListSelectors = () => {
  const { getStateProp } = GetSelectors(feature);
  return {
    whishList: getStateProp("whishList"),
  };
};

export const WhishListDispatchers = () => {
  const { state, setStateProp, reset } = GetDispatchers(feature);

  const addWhishList = (body) => {
    const whishListIds = state.whishList.map((data) => data.image);
    if (!whishListIds.includes(body.image)) {
      const newList = [...state.whishList, body];
      setStateProp("whishList", newList);
    }
  };

  const removewhishList = (value) => {
    const newList = state.whishList.filter((item) => item.image !== value);
    setStateProp("whishList", newList);
  };

  return {
    setWhishList: (value) => addWhishList(value),
    setRemoveWhishList: (value) => removewhishList(value),
  };
};
