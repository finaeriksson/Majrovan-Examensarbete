
// schemas/order.ts
export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      { name: "name", type: "string", title: "Namn" },
      { name: "email", type: "string", title: "E-post" },
      { name: "address", type: "text",   title: "Adress" },
      {
        name: "items",
        title: "Valda kort",
        type: "array",
        of: [{ type: "reference", to: [{ type: "card" }] }],
      },
      { name: "orderedAt", type: "datetime", title: "Tidpunkt", readOnly: true },
    ],
    initialValue: () => ({ orderedAt: new Date().toISOString() }),
  }
  