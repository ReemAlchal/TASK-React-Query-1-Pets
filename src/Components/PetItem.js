import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { adopt } from "../utils/api/pets";
export default function PetItem({ pet, handleAdopt }) {
  const queryClient = useQueryClient();
  const updatePet = useMutation(() => adopt(pet.id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["petsDatas"]);
    },
  });
  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class={!!pet.adopted ? "single-doctor adopted" : "single-doctor"}>
        <img className="image" alt={pet.name} src={pet.image} />
        <div class="content">
          <h3>{pet.name}</h3>
          <h3>{!!pet.adopted && "Adopted"}</h3>
          {!pet.adopted && (
            <button
              type="button"
              class="btn btn-info"
              onClick={updatePet.mutate}
            >
              Adopt
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
