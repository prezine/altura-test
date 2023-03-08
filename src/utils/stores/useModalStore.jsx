import { create } from "zustand";
import {devtools} from 'zustand/middleware'


const useModalStore = create(devtools((set)=>({
    modalOpenState: false,
    openModalState: () => set({ modalOpenState: true }),
    closeModalState: () => set({ modalOpenState: false }),
    toggleModalOpenState: () => set((state) => ({modalOpenState: !state.modalOpenState}))
})))

export default useModalStore;