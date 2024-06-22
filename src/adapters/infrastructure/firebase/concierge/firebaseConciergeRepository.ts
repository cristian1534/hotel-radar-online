import { AppDispatch } from "@/adapters/ui/redux/store/store";
import { ConciergeEntity } from "@/domain/concierge/conciergeEntity";
import { ConciergeRepository } from "@/ports/concierge/ConciergeRepository";
import { addConciergeAsync } from "@/services/concierge/conciergeService";


export class FirebaseConciergeRepository implements ConciergeRepository {
    async add(concierge: ConciergeEntity, dispatch: AppDispatch):Promise<ConciergeEntity|null>{
        try{
            const resultAction = await dispatch(addConciergeAsync(concierge));
            if(addConciergeAsync.fulfilled.match(resultAction)){
                return resultAction.payload as ConciergeEntity;
            }else{
                throw new Error("Failed to add concierge");
            }
        }catch(err){
            console.log(err);
            return null;
        }
    }
}