import { create } from "zustand";

export const useStore = create((set) => ({
  open: false,
  title: "",
img:"",
  id: null,
  subtitle:"",
  setSubtitle:(subtitle)=>set(subtitle),
  setID: (id) => set({ id }),
  setTitle: (title) => set({ title }),
  setImg:(img)=>set({img}),

  setOpen: (open) => set({ open }),
}));