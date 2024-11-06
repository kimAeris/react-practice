import { createContext, useEffect, useMemo, useState } from "react";

export const OrderContext = createContext();

export function OrderContextProvider(props) {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  });

  const [totals, setTotals] = useState({
    products: 0,
    options: 0,
    total: 0,
  });

  const pricePerItem = {
    products: 1000,
    options: 500,
  };

  const calculateSubtotal = (orderType, orderCounts) => {
    let optionCount = 0;
    for (const count of orderCounts[orderType].values()) {
      optionCount += count;
    }

    return optionCount * pricePerItem[orderType];
  };

  useEffect(() => {
    const productsTotal = calculateSubtotal("products", orderCounts);
    const optionsTotal = calculateSubtotal("options", orderCounts);
    const total = productsTotal + optionsTotal;
    setTotals({
      products: productsTotal,
      options: optionsTotal,
      total,
    });
  }, [orderCounts]);

  /* 
  값이 변하면 Provider로 감싸준 컴포넌트들이 다 리렌더링 되기 떄문에
  useMemo로 감싸 state가 업데이트 됐을때만 리렌더링 될 수 있게 처리
  */
  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, orderType) {
      // const newOrderCounts = { ...orderCounts };

      // const orderCountsMap = orderCounts[orderType];
      // orderCountsMap.set(itemName, parseInt(newItemCount));

      const newOrderCounts = {
        ...orderCounts,
        [orderType]: new Map(orderCounts[orderType]), // orderType Map의 복사본 생성
      };

      newOrderCounts[orderType].set(itemName, parseInt(newItemCount));

      setOrderCounts(newOrderCounts);
    }

    return [{ ...orderCounts, totals }, updateItemCount];
  }, [orderCounts, totals]);

  /*
  OrderContextProvider는 props.children으로 <App />를 받습니다. 
  {...props}를 사용하지 않으면, OrderContext.Provider에는 
  children 속성이 전달되지 않으므로 <App />가 렌더링되지 않습니다.
  */
  return <OrderContext.Provider value={value} {...props} />;
}
