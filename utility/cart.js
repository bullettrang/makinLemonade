export const openCart=()=>{
    return {
      isCartOpen: true
    }
  }
  
export  const toggleCart=(isCartOpen)=>{
    return  { isCartOpen: !isCartOpen };
  }
  