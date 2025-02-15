import {create} from "zustand";

interface Bearstore {
    bears :number;
    increase : () => void;
    decrease : () => void;
}

export const useBearStore = create<Bearstore>((set) => ({
    bears: 0,
    increase: () => set((state) => ({bears: state.bears + 1})),
    decrease: () => set((state) => ({bears: state.bears - 1}))
}));