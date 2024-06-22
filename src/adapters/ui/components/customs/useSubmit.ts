import { fetchHotel } from "./useFetch";
import { useDispatch } from "react-redux";
import useAuthentication from "./useAuthentication";
import useUploadImage from "./useUploadImage";

interface RepositoryProps {
  add: (item: any, dispatch: any) => void;
}
interface ProductProps {
  [key: string]: any;
}

const useHandleSubmit = () => {
  const dispatch = useDispatch();
  const user = useAuthentication();
  const uploadImage = useUploadImage;

  const handleSubmit = async (
    repository: RepositoryProps,
    product: ProductProps,
    area: string
  ) => {
    try {
      let imageUrl = "";
      if (product.image && uploadImage) {
        imageUrl = await uploadImage(product.image, area);
      }
      const hotel = await fetchHotel(user);

      const newItem = {
        ...product,
        image: imageUrl,
        hotelId: hotel,
      };
      const result = await repository.add(newItem, dispatch);
      return result as any;
    } catch (e) {
      console.log(e);
    }
  };

  return handleSubmit;
};

export default useHandleSubmit;
